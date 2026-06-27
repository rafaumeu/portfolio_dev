"use client";

import { useTranslation } from "@/i18n";
import "@/styles/about.css";

const SKILL_ROWS = [
	["React", "Next.js", "TypeScript", "Node.js", "Fastify", "NestJS"],
	["PHP", "Laravel", "PostgreSQL", "Supabase", "Docker"],
	["Prisma", "Vitest", "Playwright", "CI/CD", "AI/LLM"],
];

export default function About() {
	const { t } = useTranslation();

	return (
		<section className="about-section" id="about">
			<h2>{t("about.title")}</h2>
			<p className="about-bio">{t("about.bio")}</p>
			<h3>{t("about.techStack")}</h3>
			<div className="about-skills">
				{SKILL_ROWS.flat().map((skill) => (
					<span key={skill} className="skill-badge">
						{skill}
					</span>
				))}
			</div>
		</section>
	);
}
