"use client";

import { useTranslation } from "@/i18n";
import "@/styles/about.css";

type SkillGroup = { key: string; skills: string[] };

const SKILL_GROUPS: SkillGroup[] = [
	{
		key: "principal",
		skills: ["TypeScript", "React", "Next.js", "Node.js", "Fastify"],
	},
	{
		key: "backend",
		skills: ["PostgreSQL", "Redis", "Drizzle", "Prisma", "Supabase", "Hono"],
	},
	{
		key: "plataformas",
		skills: ["Electron", "PWA", "Flutter", "Android", "Smart TV (webOS/Tizen)"],
	},
	{
		key: "qualidade",
		skills: ["Vitest", "Playwright", "Stryker", "GitHub Actions", "Docker"],
	},
	{
		key: "arquitetura",
		skills: ["Clean Architecture", "DDD", "Offline-first", "CI/CD"],
	},
];

export default function About() {
	const { t } = useTranslation();

	return (
		<section className="about-section" id="about">
			<h2>{t("about.title")}</h2>
			<p className="about-bio">{t("about.bio")}</p>
			<h3>{t("about.techStack")}</h3>
			<div className="about-skill-groups">
				{SKILL_GROUPS.map((group) => (
					<div key={group.key} className="skill-group">
						<span className="skill-group-label">
							{t(`about.skillGroups.${group.key}`)}
						</span>
						<div className="about-skills">
							{group.skills.map((skill) => (
								<span key={skill} className="skill-badge">
									{skill}
								</span>
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
