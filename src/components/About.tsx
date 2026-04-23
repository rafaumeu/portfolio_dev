import { type ReactNode } from 'react'
import '../styles/about.css'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Fastify',
  'NestJS',
  'PHP',
  'Laravel',
  'PostgreSQL',
  'Docker',
  'Terraform',
  'Prisma',
  'Vitest',
  'Playwright'
]

export default function About(): ReactNode {
  return (
    <section id="about" className="about-section">
      <h2 className="about-heading">About Me</h2>
      <p className="about-bio">
        Software Engineer with a strong foundation in Clean Architecture,
        Domain-Driven Design, and modern web technologies. With 35+ Rocketseat
        certifications and hands-on experience across the full stack, I build
        scalable, maintainable systems. Passionate about writing clean,
        well-tested code that solves real problems.
      </p>
      <h3 className="about-tech-heading">Tech Stack</h3>
      <div className="about-skills">
        {skills.map((skill) => (
          <span key={skill} className="about-skill-badge">{skill}</span>
        ))}
      </div>
    </section>
  )
}
