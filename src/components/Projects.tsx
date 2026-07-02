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
		key: "louvorja",
		tags: ["PHP", "Laravel", "Security", "OpenAPI"],
		github: "https://github.com/elvieira/LouvorJA",
		image: "/images/louvorja.webp",
	},
	{
		key: "openHive",
		tags: ["MCP", "OAuth", "Multi-platform", "Brand-aware AI"],
		github: "https://github.com/NetoNetoArreche/Projeto-Hive",
		image: "/images/openhive.webp",
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