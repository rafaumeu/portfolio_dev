"use client";

import { useTranslation } from "@/i18n";
import { useGithubStats, formatPlus } from "@/hooks/useGithubStats";
import "@/styles/opensource.css";

interface Contribution {
	org: string;
	repo: string;
	title: string;
	url: string;
	type: "fix" | "feat" | "docs";
}

/**
 * Verified merged PRs in major open-source orgs.
 * Count lives in the build-time snapshot (scripts/fetch-github-stats.py);
 * links are curated — every entry is a real, public, merged PR.
 */
const CONTRIBUTIONS: Contribution[] = [
	{
		org: "Vercel",
		repo: "satori",
		title: "fix: text matching Object.prototype property names rendered as image",
		url: "https://github.com/vercel/satori/pull/768",
		type: "fix",
	},
	{
		org: "Vercel",
		repo: "satori",
		title: "docs: fix flexWrap default from 'wrap' to 'nowrap'",
		url: "https://github.com/vercel/satori/pull/767",
		type: "docs",
	},
	{
		org: "Dokploy",
		repo: "dokploy",
		title: "fix(backup): redact S3 credentials from logs and error output",
		url: "https://github.com/Dokploy/dokploy/pull/4648",
		type: "fix",
	},
	{
		org: "Dokploy",
		repo: "dokploy",
		title: "fix(registry): preserve username case for ECR compatibility",
		url: "https://github.com/Dokploy/dokploy/pull/4647",
		type: "fix",
	},
	{
		org: "Redux",
		repo: "redux",
		title: "docs: update Reselect default memoization note",
		url: "https://github.com/reduxjs/redux/pull/4886",
		type: "docs",
	},
	{
		org: "Mattermost",
		repo: "mattermost-plugin-github",
		title: "feat: add refresh ability to GitHub RHS sidebar",
		url: "https://github.com/mattermost/mattermost-plugin-github/pull/1026",
		type: "feat",
	},
];

const TYPE_BADGE: Record<Contribution["type"], string> = {
	fix: "🐛 fix",
	feat: "✨ feat",
	docs: "📝 docs",
};

export default function OpenSource() {
	const { t } = useTranslation();
	const stats = useGithubStats();

	return (
		<section className="opensource-section" id="opensource">
			<div className="opensource-header">
				<h2>{t("opensource.title")}</h2>
				<p className="opensource-subtitle">
					{t("opensource.subtitle", { count: stats.bigTechMerged })}
				</p>
				<span className="opensource-count">
					{formatPlus(stats.mergedThirdParty)} {t("opensource.countLabel")}
				</span>
			</div>
			<div className="opensource-grid">
				{CONTRIBUTIONS.map((c) => (
					<a
						key={c.url}
						href={c.url}
						target="_blank"
						rel="noopener noreferrer"
						className="oss-card"
					>
						<div className="oss-card-top">
							<span className="oss-org">
								{c.org} <span className="oss-repo">/{c.repo}</span>
							</span>
							<span className={`oss-type oss-type-${c.type}`}>
								{TYPE_BADGE[c.type]}
							</span>
						</div>
						<div className="oss-card-title">{c.title}</div>
						<div className="oss-card-meta">🔗 {t("opensource.viewPr")}</div>
					</a>
				))}
			</div>
		</section>
	);
}
