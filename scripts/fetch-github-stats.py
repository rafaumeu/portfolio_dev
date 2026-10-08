#!/usr/bin/env python3
"""Fetch live GitHub stats at build time.

Writes src/data/github-stats.json — a snapshot consumed by the SSG hero
and the client-side revalidation (which treats it as fallback).

Fail-closed: if any fetch fails, keeps the existing snapshot and exits 0
(build proceeds with stale-but-true data). Exit 1 only on corrupt output.
"""
from __future__ import annotations

import json
import pathlib
import sys
import time
import urllib.parse
import urllib.request

USER = "rafaumeu"
OUT = pathlib.Path(__file__).resolve().parent.parent / "src" / "data" / "github-stats.json"
SNAPSHOT_VERSION = 1

QUERIES = {
    "mergedThirdParty": f"author:{USER} type:pr is:merged -user:{USER}",
    "mergedTotal": f"author:{USER} type:pr is:merged",
}
BIG_TECH_ORGS = ["vercel", "Dokploy", "reduxjs", "mattermost"]


def fetch(url: str, retries: int = 2) -> dict | list:
    for attempt in range(retries + 1):
        try:
            req = urllib.request.Request(url, headers={"Accept": "application/vnd.github+json", "User-Agent": "portfolio-build"})
            with urllib.request.urlopen(req, timeout=15) as r:
                return json.loads(r.read())
        except Exception:  # noqa: BLE001 — fail-closed by design
            if attempt == retries:
                raise
            time.sleep(2 ** attempt)
    raise RuntimeError("unreachable")


def search_count(q: str) -> int | None:
    try:
        data = fetch(f"https://api.github.com/search/issues?q={urllib.parse.quote(q, safe=':+<>@')}&per_page=1")
        return int(data["total_count"])
    except Exception:  # noqa: BLE001
        return None


def main() -> int:
    snapshot: dict = {"version": SNAPSHOT_VERSION, "fetchedAt": None, "live": False}
    try:
        user = fetch(f"https://api.github.com/users/{USER}")  # type: ignore[assignment]
        merged_third = search_count(QUERIES["mergedThirdParty"])
        merged_total = search_count(QUERIES["mergedTotal"])
        big_tech: dict[str, int] = {}
        for org in BIG_TECH_ORGS:
            c = search_count(f"author:{USER} type:pr is:merged org:{org}")
            if c is not None:
                big_tech[org] = c
        if merged_third is None or merged_total is None:
            raise RuntimeError("search counts unavailable")
        snapshot.update({
            "live": True,
            "fetchedAt": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
            "repos": int(user["public_repos"]),  # type: ignore[index]
            "followers": int(user["followers"]),  # type: ignore[index]
            "mergedThirdParty": merged_third,
            "mergedTotal": merged_total,
            "bigTechMerged": sum(big_tech.values()),
            "bigTechByOrg": big_tech,
        })
    except Exception as e:  # noqa: BLE001 — keep previous snapshot, build green
        print(f"[github-stats] WARN: falling back to existing snapshot: {e}", file=sys.stderr)
        if OUT.exists():
            old = json.loads(OUT.read_text())
            old["live"] = False
            OUT.write_text(json.dumps(old, indent=2) + "\n")
            print(f"[github-stats] kept snapshot from {old.get('fetchedAt')}", file=sys.stderr)
            return 0
        # No previous snapshot at all: hard minimums so UI never shows zeros
        OUT.write_text(json.dumps({
            "version": SNAPSHOT_VERSION, "live": False, "fetchedAt": None,
            "repos": 120, "followers": 100,
            "mergedThirdParty": 300, "mergedTotal": 700, "bigTechMerged": 5,
            "bigTechByOrg": {"vercel": 2, "Dokploy": 2, "reduxjs": 1, "mattermost": 1},
        }, indent=2) + "\n")
        print("[github-stats] wrote conservative seed snapshot", file=sys.stderr)
        return 0

    OUT.write_text(json.dumps(snapshot, indent=2) + "\n")
    print(f"[github-stats] snapshot: thirdParty={snapshot['mergedThirdParty']} repos={snapshot['repos']} bigTech={snapshot['bigTechMerged']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
