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
	// --- Own Products & Projects ---
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
		key: "ignitecall",
		tags: ["Next.js", "OAuth", "Prisma", "TypeScript"],
		demo: "https://ignitecall-app.vercel.app/",
		image: "/images/ignitecall.webp",
	},
	{
		key: "devStore",
		tags: ["Next.js", "Stripe", "Tailwind", "SSR"],
		demo: "https://devstorerdz.netlify.app/",
		image: "/images/devstore.webp",
	},
	{
		key: "forum",
		tags: ["TypeScript", "Fastify", "DDD", "Clean Arch"],
		demo: "https://web-ten-ashen-76.vercel.app/",
		image: "/images/forum-v2.webp",
	},
	{
		key: "hiremeAgent",
		tags: ["Next.js 16", "AI", "CLI", "IMAP", "WebSocket"],
		demo: "https://hireme-agent.vercel.app/",
		image: "/images/hireme-agent.webp",
	},
	{
		key: "testQubit",
		tags: ["AI", "CLI", "TypeScript", "MCP", "Multi-language"],
		demo: "https://testqubit.vercel.app/",
		image: "/images/testqubit.webp",
	},

	// --- Open Source Contributions ---
	{
		key: "hermesAgent",
		tags: ["TypeScript", "AI Agent", "MCP", "Skills System"],
		github: "https://github.com/nousresearch/hermes-agent",
		image: "/images/hermes-agent.webp",
	},
	{
		key: "louvorjaMobile",
		tags: ["Flutter", "i18n PT/EN/ES", "Offline-first", "WCAG AA"],
		github: "https://github.com/pianolouvorja/apk",
		image: "/images/placeholder.svg",
		badges: ["31 PRs merged", "Play Store ready"],
	},
	{
		key: "omniroute",
		tags: ["TypeScript", "LLM Proxy", "AI Router", "OpenAI-compatible"],
		github: "https://github.com/diegosouzapw/OmniRoute",
		image: "/images/placeholder.svg",
		badges: ["18 PRs merged"],
	},
	{
		key: "pianoLouvorja",
		tags: ["TypeScript", "Electron", "PWA", "Security"],
		github: "https://github.com/pianolouvorja/app",
		image: "/images/louvorja.webp",
		badges: ["71 PRs merged", "4 repositórios"],
	},
	{
		key: "louvorja",
		tags: ["TypeScript", "API", "Electron", "Desktop"],
		github: "https://github.com/louvorja/api",
		image: "/images/placeholder.svg",
		badges: ["34 PRs merged", "4 repositórios"],
	},
	{
		key: "openHive",
		tags: ["MCP", "OAuth", "Multi-platform", "Brand-aware AI"],
		github: "https://github.com/NetoNetoArreche/Projeto-Hive",
		image: "/images/openhive.webp",
	},

	{
		key: "jornadaDeserto",
		tags: ["Next.js 16", "Three.js", "R3F", "TypeScript", "Gamepad"],
		demo: "https://jornada-no-deserto.vercel.app/",
		image: "/images/placeholder.svg",
	},

	// --- Tools & Extensions ---
	{
		key: "rocketseatForumHelper",
		tags: ["Chrome Extension", "MV3", "TypeScript"],
		github: "https://github.com/rafaumeu/rocketseat-extractor-v2",
		image: "/images/placeholder.svg",
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
											{project.badges.map((badge) => (
												<span key={badge} className="project-badge">
													{badge}
												</span>
											))}
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