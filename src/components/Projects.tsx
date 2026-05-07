'use client';

import Image from 'next/image';
import { useTranslation } from '@/i18n';
import '@/styles/projects.css';

interface Project {
  key: string;
  tags: string[];
  github: string;
  demo?: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    key: 'tesourosPortal',
    tags: ['React', 'PWA', 'PostgreSQL', 'Gamification'],
    github: 'https://github.com/rafaumeu/tesouros-portal',
    demo: 'https://tesouros-portal.vercel.app',
    image: '/images/tesouros-portal.png',
  },
  {
    key: 'ignitecall',
    tags: ['Next.js', 'OAuth', 'Prisma', 'TypeScript'],
    github: 'https://github.com/rafaumeu/ignitecall-app',
    demo: 'https://ignitecall-app.vercel.app',
    image: '/images/ignitecall.png',
  },
  {
    key: 'devStore',
    tags: ['Next.js', 'Stripe', 'Tailwind', 'SSR'],
    github: 'https://github.com/rafaumeu/ecommerce-next',
    demo: 'https://devstorerdz.netlify.app',
    image: '/images/devstore.png',
  },
  {
    key: 'pizzaShop',
    tags: ['React', 'Tailwind', 'Vitest', 'Playwright'],
    github: 'https://github.com/rafaumeu/pizza-shop',
    demo: 'https://pizza-shop-five-sigma.vercel.app',
    image: '/images/pizza-shop.png',
  },
  {
    key: 'forumApi',
    tags: ['TypeScript', 'DDD', 'Clean Arch', 'Vitest'],
    github: 'https://github.com/rafaumeu/forum',
    image: '/images/forum-api.png',
  },
  {
    key: 'pocketApi',
    tags: ['Fastify', 'Drizzle', 'PostgreSQL', 'Swagger'],
    github: 'https://github.com/rafaumeu/pocket-api',
    image: '/images/pocket-api.png',
  },
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section className="projects-section" id="projects">
      <h2>{t('projects.title')}</h2>
      <p className="projects-subtitle">{t('projects.subtitle')}</p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.key} className="project-card">
            <div className="project-card-image">
              <Image
                src={project.image}
                alt={`${t(`projects.items.${project.key}.name`)} screenshot`}
                width={400}
                height={225}
                className="project-screenshot"
              />
            </div>
            <div className="project-card-body">
              <h3>{t(`projects.items.${project.key}.name`)}</h3>
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
                    className="project-card-link demo-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${t('projects.liveDemo')} — ${t(`projects.items.${project.key}.name`)}`}
                  >
                    {t('projects.liveDemo')}
                  </a>
                )}
                <a
                  href={project.github}
                  className="project-card-link source-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t('projects.source')} — ${t(`projects.items.${project.key}.name`)}`}
                >
                  {t('projects.source')}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
