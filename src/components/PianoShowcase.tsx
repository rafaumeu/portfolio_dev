"use client";

import { useTranslation } from "@/i18n";
import "@/styles/piano-showcase.css";

interface PianoProduct {
	repo: string;
	stack: string;
	share: number; // % of commits by rafaumeu (public contributors API)
	lead: boolean;
	descKey: string;
}

const PIANO_PRODUCTS: PianoProduct[] = [
	{ repo: "app", stack: "Electron + TypeScript", share: 63, lead: true, descKey: "desktop" },
	{ repo: "site", stack: "Nuxt 3 + i18n", share: 76, lead: true, descKey: "site" },
	{ repo: "apk", stack: "Flutter", share: 83, lead: true, descKey: "mobile" },
	{ repo: "web", stack: "Vue 3 + Vuetify", share: 59, lead: true, descKey: "pwa" },
	{ repo: "palco-receiver", stack: "webOS / Tizen / AndroidTV", share: 76, lead: true, descKey: "tv" },
	{ repo: "api", stack: "Hono + Zod + SQLite", share: 40, lead: true, descKey: "api" },
];

interface LouvorjaPr {
	title: string;
	url: string;
	badge: string;
}

const LOUVORJA_PRS: LouvorjaPr[] = [
	{
		title: "Rate limiting: token bucket 5000/min + burst + buckets separados",
		url: "https://github.com/louvorja/api/pull/27",
		badge: "🛡️ security",
	},
	{
		title: "OpenAPI 3.0 / Swagger documentation for all endpoints",
		url: "https://github.com/louvorja/api/pull/25",
		badge: "📝 docs",
	},
	{
		title: "Rate limiting por IP + health check endpoint",
		url: "https://github.com/louvorja/api/pull/13",
		badge: "🛡️ security",
	},
	{
		title: "LouvorJ.AI chatbot com RAG para sugestões de hinos",
		url: "https://github.com/louvorja/site/pull/2",
		badge: "🤖 AI",
	},
	{
		title: "6 new public endpoints",
		url: "https://github.com/louvorja/api/pull/28",
		badge: "✨ feat",
	},
	{
		title: "fix: StreamedResponse 500 em downloads de arquivos",
		url: "https://github.com/louvorja/api/pull/26",
		badge: "🐛 fix",
	},
];

export default function PianoShowcase() {
	const { t } = useTranslation();

	return (
		<section className="piano-section" id="piano">
			{/* Bloco 1 — flagship */}
			<div className="piano-header">
				<h2>{t("piano.title")}</h2>
				<p className="piano-subtitle">{t("piano.subtitle")}</p>
				<div className="piano-badges">
					<span className="piano-badge">🚀 {t("piano.badgeProduction")}</span>
					<span className="piano-badge">📦 103+ {t("piano.badgeReleases")}</span>
					<span className="piano-badge">🖥️ 4 {t("piano.badgePlatforms")}</span>
				</div>
			</div>
			<div className="piano-grid">
				{PIANO_PRODUCTS.map((p) => (
					<a
						key={p.repo}
						href={`https://github.com/Piano-Louvor-JA/${p.repo}`}
						target="_blank"
						rel="noopener noreferrer"
						className="piano-card"
					>
						<div className="piano-card-top">
							<span className="piano-card-repo">{p.repo}</span>
							<span className="piano-card-share">{p.share}%</span>
						</div>
						<div className="piano-card-stack">{p.stack}</div>
						<div className="piano-card-desc">{t(`piano.products.${p.descKey}`)}</div>
						<div className="piano-card-meta">
							<span className="piano-lead-badge">👑 {t("piano.leadContributor")}</span>
						</div>
					</a>
				))}
			</div>
			<p className="piano-collab">{t("piano.collab")}</p>

			{/* Bloco 2 — contribuições LouvorJA (API legada, org de terceiros) */}
			<div className="louvorja-block">
				<h3>{t("louvorja.title")}</h3>
				<p className="louvorja-subtitle">{t("louvorja.subtitle")}</p>
				<div className="louvorja-grid">
					{LOUVORJA_PRS.map((pr) => (
						<a
							key={pr.url}
							href={pr.url}
							target="_blank"
							rel="noopener noreferrer"
							className="louvorja-card"
						>
							<span className="louvorja-badge">{pr.badge}</span>
							<span className="louvorja-title">{pr.title}</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
