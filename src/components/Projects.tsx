import '@/styles/projects.css';

interface Project {
  name: string;
  description: string;
  tags: string[];
  github: string;
}

const PROJECTS: Project[] = [
  {
    name: 'ignitecall',
    description: 'Google Calendar & Meet integration with OAuth, Docker CI/CD',
    tags: ['Next.js', 'TypeScript', 'OAuth', 'Docker'],
    github: 'https://github.com/rafaumeu/ignitecall',
  },
  {
    name: 'pizza-shop',
    description: 'Pizza delivery app with E2E tests and magic link auth',
    tags: ['React', 'Tailwind', 'Vitest', 'Playwright'],
    github: 'https://github.com/rafaumeu/pizza-shop',
  },
  {
    name: 'pocket-api',
    description: 'REST API with Drizzle ORM, Swagger docs and automated tests',
    tags: ['Fastify', 'Drizzle', 'PostgreSQL', 'Swagger'],
    github: 'https://github.com/rafaumeu/pocket-api',
  },
  {
    name: 'cv',
    description: 'Dynamic CV with i18n, print-optimized with multiple profiles',
    tags: ['HTML', 'CSS', 'i18n', 'Print CSS'],
    github: 'https://github.com/rafaumeu/cv',
  },
  {
    name: 'super-trunfo',
    description: 'Card game with 3 difficulty levels and game state management',
    tags: ['C', 'Algorithms', 'Game Dev'],
    github: 'https://github.com/rafaumeu/super-trunfo',
  },
  {
    name: 'forum',
    description: 'Forum API with DDD and Clean Architecture patterns',
    tags: ['TypeScript', 'DDD', 'Clean Arch', 'Vitest'],
    github: 'https://github.com/rafaumeu/forum',
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>Featured Projects</h2>
      <p className="projects-subtitle">A selection of my recent work</p>
      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.name} className="project-card">
            <div className="project-card-header">
              <h3>{project.name}</h3>
              <a
                href={project.github}
                className="project-card-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                →
              </a>
            </div>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
