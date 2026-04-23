import { type ReactNode } from 'react'
import '../styles/projects.css'

interface Project {
  icon: string
  name: string
  description: string
  tags: string[]
  link: string
}

const projects: Project[] = [
  {
    icon: '📞',
    name: 'ignitecall-app',
    description: 'Scheduling application with Google Calendar/Meet integration. Complete CI/CD pipeline with Docker and automated tests.',
    tags: ['Next.js', 'TypeScript', 'NextAuth', 'Docker'],
    link: 'https://github.com/rafaumeu/ignitecall-app'
  },
  {
    icon: '🍕',
    name: 'pizza-shop',
    description: 'Restaurant management system with modern UI, authentication via magic link, and comprehensive E2E testing.',
    tags: ['React', 'Tailwind', 'Vitest', 'Playwright'],
    link: 'https://github.com/rafaumeu/pizza-shop'
  },
  {
    icon: '🚀',
    name: 'pocket-api',
    description: 'RESTful API with Drizzle ORM, PostgreSQL, and automated Swagger documentation. Clean and performant backend.',
    tags: ['Fastify', 'Drizzle', 'PostgreSQL', 'Swagger'],
    link: 'https://github.com/rafaumeu/pocket-api'
  },
  {
    icon: '📄',
    name: 'cv',
    description: 'Creative developer CV with i18n support (PT-BR/EN), dynamic profiles, and print-optimized layout.',
    tags: ['React', 'TypeScript', 'i18n', 'Vercel'],
    link: 'https://github.com/rafaumeu/cv'
  },
  {
    icon: '🃏',
    name: 'super-trunfo',
    description: 'Classic card game implemented in C with 3 difficulty levels. Academic project demonstrating algorithmic thinking.',
    tags: ['C', 'Algorithms', 'Game Dev'],
    link: 'https://github.com/rafaumeu/super-trunfo'
  },
  {
    icon: '💬',
    name: 'forum',
    description: 'Discussion platform built with Domain-Driven Design and Clean Architecture. Showcases advanced backend patterns.',
    tags: ['DDD', 'Clean Arch', 'TypeScript', 'Express'],
    link: 'https://github.com/rafaumeu/forum'
  }
]

function ProjectCard({ project }: { project: Project }): ReactNode {
  return (
    <article className="project-card">
      <span className="project-icon">{project.icon}</span>
      <h3 className="project-name">{project.name}</h3>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-link-row">
        <a
          className="project-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project →
        </a>
      </div>
    </article>
  )
}

export default function Projects(): ReactNode {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Featured Projects</h2>
      <p className="projects-subtitle">
        A selection of projects showcasing my expertise in full-stack development
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}
