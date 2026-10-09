"use client";

import Image from "next/image";
import { useTranslation } from "@/i18n";
import { useState } from "react";
import "@/styles/projects.css";

interface Project {
	key: string;
	tags: string[];
	github?: string;
	demo?: string;
	image: string;
	badges?: string[];
}

const PROJECTS: Project[] = [
	// --- Experiência & Contribuições em produtos (primeiro: produção > colaboração > próprio) ---
	{
		key: "pianoLouvorja",
		tags: ["TypeScript", "Electron", "PWA", "Android/iOS", "Smart TV"],
		github: "https://github.com/Piano-Louvor-JA/app",
		demo: "https://pianolouvorja.com.br/",
		image: "/images/piano-louvorja-hero.webp",
		badges: ["pianoCommits", "pianoRepos", "pianoProd"],
	},
	{
		key: "agenva",
		tags: ["Hono", "Drizzle", "PostgreSQL", "Redis", "Asaas", "WhatsApp", "Flutter"],
		github: "https://github.com/kidev-tec/api-myschedule",
		image: "/images/agenva.svg",
		badges: ["agenvaPhases", "agenvaBilling"],
	},
	{
		key: "hermesAgent",
		tags: ["TypeScript", "AI Agent", "MCP", "Skills System"],
		github: "https://github.com/nousresearch/hermes-agent",
		image: "/images/hermes-agent.webp",
	},
	{
		key: "omniroute",
		tags: ["TypeScript", "LLM Proxy", "AI Router", "OpenAI-compatible"],
		github: "https://github.com/diegosouzapw/OmniRoute",
		image: "/images/omniroute.webp",
		badges: ["18 PRs merged"],
	},
	{
		key: "louvorja",
		tags: ["TypeScript", "API", "Rate Limiting", "OpenAPI"],
		github: "https://github.com/louvorja/api",
		image: "/images/louvorja-api.webp",
		badges: ["7 PRs merged"],
	},

	// --- Projetos próprios ---
	{
		key: "tesourosPortal",
		tags: ["React", "PWA", "PostgreSQL", "Gamification"],
		demo: "https://tesouros-portal.vercel.app/",
		image: "/images/tesouros-portal.webp",
	},
	{
		key: "estacioPrep",
		tags: ["Next.js", "Supabase", "TypeScript", "Gamification"],
		demo: "https://estacio-prep.vercel.app/",
		image: "/images/estacio-prep.webp",
	},
	{
		key: "hiremeAgent",
		tags: ["Next.js 16", "AI", "CLI", "IMAP", "WebSocket"],
		demo: "https://hireme-agent.vercel.app/",
		image: "/images/hireme-agent.webp",
	},
];

export default function Projects() {
	const { t } = useTranslation();
	const [loadingLink, setLoadingLink] = useState<string | null>(null);

	const handleExternalLink = (url: string) => {
		setLoadingLink(url);
		setTimeout(() => {
			window.open(url, "_blank", "noopener,noreferrer");
			setLoadingLink(null);
		}, 300);
	};

	return (
		<section className="projects-section" id="projects">
			<h2>{t("projects.title")}</h2>
			<p className="projects-subtitle">{t("projects.subtitle")}</p>
			<div className="projects-grid">
				{PROJECTS.map((project) => {
					const nameText = t(`projects.items.${project.key}.name`);
					const altText = `${nameText} screenshot`;
					const demoLabel = `${t("projects.liveDemo")} — ${nameText}`;
					const sourceLabel = `${t("projects.source")} — ${nameText}`;
					const isLoading = loadingLink === project.demo || loadingLink === project.github;
					return (
						<article key={project.key} className="project-card">
							<div className="project-card-image">
								<Image
											src={project.image}
											alt={altText}
											width={400}
											height={225}
											className="project-screenshot"
											loading="lazy"
											{...(!project.image.endsWith(".svg") && {
												placeholder: "blur" as const,
												blurDataURL:
													"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAQAcJaQAA3AA/v3AgAA=",
											})}
										/>
							</div>
							<div className="project-card-body">
								<h3>{nameText}</h3>
									{project.badges && project.badges.length > 0 && (
										<div className="project-badges">
											{project.badges.map((badge) => {
												const localized = t(`projects.badges.${badge}`);
												const label = localized.startsWith("projects.badges.")
													? badge
													: localized;
												return (
													<span key={badge} className="project-badge">
														{label}
													</span>
												);
											})}
										</div>
									)}
									<p>{t(`projects.items.${project.key}.description`)}</p>
								<div className="project-tags">
									{project.tags.map((tag) => (
										<span key={tag} className="project-tag">
											{tag}
										</span>
									))}
								</div>
								<div className="project-card-footer">
									{project.demo && (
										<a
											href={project.demo}
											className={`project-card-link demo-link ${isLoading ? "loading" : ""}`}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={demoLabel}
											onClick={(e) => {
												e.preventDefault();
												handleExternalLink(project.demo!);
											}}
										>
											{loadingLink === project.demo ? "⏳" : t("projects.liveDemo")}
										</a>
									)}
									{project.github && (
										<a
											href={project.github}
											className={`project-card-link source-link ${isLoading ? "loading" : ""}`}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={sourceLabel}
											onClick={(e) => {
												e.preventDefault();
												handleExternalLink(project.github!);
											}}
										>
											{loadingLink === project.github ? "⏳" : t("projects.source")}
										</a>
									)}
								</div>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}