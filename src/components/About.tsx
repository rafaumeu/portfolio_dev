import '@/styles/about.css';

const SKILL_ROWS = [
  ['React', 'Next.js', 'TypeScript', 'Node.js', 'Fastify', 'NestJS'],
  ['PHP', 'Laravel', 'PostgreSQL', 'Docker', 'Terraform'],
  ['Prisma', 'Vitest', 'Playwright'],
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Me</h2>
      <p className="about-bio">
        I&apos;m a Software Engineer passionate about building clean,
        maintainable applications. With expertise in Domain-Driven Design and
        Clean Architecture, I focus on creating solutions that are both elegant
        and scalable. Currently seeking opportunities to contribute to impactful
        projects.
      </p>
      <h3>Tech Stack</h3>
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
