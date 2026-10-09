"use client";

import { useEffect, useState } from "react";
import snapshot from "@/data/github-stats.json";

export interface GithubStats {
	repos: number;
	followers: number;
	mergedThirdParty: number;
	mergedTotal: number;
	bigTechMerged: number;
	bigTechByOrg: Record<string, number>;
	live: boolean;
	fetchedAt: string | null;
}

const STORAGE_KEY = "gh-stats-cache";
const CACHE_TTL_MS = 6 * 60 * 60 * 1000; // 6h — anonymous search limit is 10/min, be polite

const GITHUB_USER = "rafaumeu";

function getSessionCached(): GithubStats | null {
	try {
		const raw = sessionStorage.getItem(STORAGE_KEY);
		if (!raw) return null;
		const parsed = JSON.parse(raw) as { at: number; stats: GithubStats };
		if (Date.now() - parsed.at > CACHE_TTL_MS) return null;
		return parsed.stats;
	} catch {
		return null;
	}
}

function putSessionCached(stats: GithubStats): void {
	try {
		sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ at: Date.now(), stats }));
	} catch {
		/* storage full/blocked — non-fatal */
	}
}

async function searchCount(q: string): Promise<number | null> {
	try {
		const res = await fetch(
			`https://api.github.com/search/issues?q=${encodeURIComponent(q).replace(/%2B/g, "+")}&per_page=1`,
			{ headers: { Accept: "application/vnd.github+json" } },
		);
		if (!res.ok) return null;
		const data = (await res.json()) as { total_count?: number };
		return typeof data.total_count === "number" ? data.total_count : null;
	} catch {
		return null;
	}
}

/**
 * Live GitHub stats with three layers:
 * 1. Build-time snapshot (always present, committed to repo)
 * 2. sessionStorage cache (same-tab navigations, instant)
 * 3. GitHub API revalidation (anonymous, CORS *, graceful fallback)
 */
export function useGithubStats(): GithubStats {
	const [stats, setStats] = useState<GithubStats>(snapshot as GithubStats);

	useEffect(() => {
		const cached = getSessionCached();
		if (cached) {
			setStats(cached);
			return;
		}
		let cancelled = false;
		(async () => {
			const third = await searchCount(
				`author:${GITHUB_USER} type:pr is:merged -user:${GITHUB_USER}`,
			);
			if (cancelled || third === null) return; // keep snapshot — never show stale-live mix
			const next: GithubStats = {
				...(stats as GithubStats),
				mergedThirdParty: third,
				live: true,
				fetchedAt: new Date().toISOString(),
			};
			setStats(next);
			putSessionCached(next);
		})();
		return () => {
			cancelled = true;
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return stats;
}

/** Round down to a human-friendly step and append "+" — numbers stay true and age well. */
export function formatPlus(n: number): string {
	if (n >= 100) return `${Math.floor(n / 10) * 10}+`; // 342 → "340+"
	if (n >= 10) return `${Math.floor(n / 5) * 5}+`; // 17 → "15+"
	return n > 0 ? `${n}` : "—"; // 6 → "6"; 0 → "—" (nada a mostrar)
}
