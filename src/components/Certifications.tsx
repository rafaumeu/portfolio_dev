import '@/styles/certifications.css';

const CERTIFICATIONS = [
  { title: 'Ignite ReactJS', platform: 'Rocketseat', year: '2024' },
  { title: 'Ignite Node.js', platform: 'Rocketseat', year: '2024' },
  { title: 'React: Conhecendo a biblioteca React', platform: 'Rocketseat', year: '2023' },
  { title: 'React: Como os componentes funcionam', platform: 'Rocketseat', year: '2023' },
  { title: 'React: Avançando no estado e ciclo de vida', platform: 'Rocketseat', year: '2023' },
  { title: 'TypeScript: Entendendo a linguagem', platform: 'Rocketseat', year: '2023' },
  { title: 'TypeScript: Avançando na linguagem', platform: 'Rocketseat', year: '2023' },
  { title: 'TypeScript: Decorators, generics e OOP', platform: 'Rocketseat', year: '2023' },
  { title: 'Node.js: Criando uma API REST', platform: 'Rocketseat', year: '2023' },
  { title: 'Node.js: Streams e padrões de projetos', platform: 'Rocketseat', year: '2024' },
  { title: 'Node.js: HTTP e middleware', platform: 'Rocketseat', year: '2023' },
  { title: 'Next.js: Explorando o framework', platform: 'Rocketseat', year: '2024' },
  { title: 'Next.js: Renderização no server-side', platform: 'Rocketseat', year: '2024' },
  { title: 'PostgreSQL: Banco de dados relacional', platform: 'Rocketseat', year: '2023' },
  { title: 'Prisma: ORM para Node.js', platform: 'Rocketseat', year: '2023' },
  { title: 'Docker: Criando containers', platform: 'Rocketseat', year: '2023' },
  { title: 'Git e GitHub: Controle de versão', platform: 'Rocketseat', year: '2022' },
  { title: 'Clean Architecture: Arquitetura limpa', platform: 'Rocketseat', year: '2024' },
  { title: 'DDD: Domain-Driven Design', platform: 'Rocketseat', year: '2024' },
  { title: 'Testes unitários com Vitest', platform: 'Rocketseat', year: '2024' },
  { title: 'Testes E2E com Playwright', platform: 'Rocketseat', year: '2024' },
  { title: 'Tailwind CSS: Estilização moderna', platform: 'Rocketseat', year: '2023' },
  { title: 'Fastify: Framework web para Node.js', platform: 'Rocketseat', year: '2024' },
  { title: 'Nest.js: Framework progressivo', platform: 'Rocketseat', year: '2024' },
  { title: 'Autenticação com NextAuth', platform: 'Rocketseat', year: '2024' },
  { title: 'SQL: Consultas e joins', platform: 'Rocketseat', year: '2023' },
  { title: 'HTML e CSS: Fundamentos web', platform: 'Rocketseat', year: '2022' },
  { title: 'JavaScript: Algoritmos e lógica', platform: 'Rocketseat', year: '2022' },
  { title: 'JavaScript: Funções e objetos', platform: 'Rocketseat', year: '2022' },
  { title: 'JavaScript: Assíncrono e callbacks', platform: 'Rocketseat', year: '2022' },
  { title: 'React Native: Mobile multiplataforma', platform: 'Rocketseat', year: '2023' },
  { title: 'GraphQL: API moderna', platform: 'Rocketseat', year: '2023' },
  { title: 'CI/CD com GitHub Actions', platform: 'Rocketseat', year: '2024' },
  { title: 'Terraform: Infraestrutura como código', platform: 'Rocketseat', year: '2024' },
];

export default function Certifications() {
  return (
    <section className="certifications-section" id="certifications">
      <div className="certifications-header">
        <h2>Certifications</h2>
        <p className="certifications-subtitle">
          35 Rocketseat certifications in modern web development
        </p>
        <span className="certifications-count">
          {CERTIFICATIONS.length} Certifications
        </span>
      </div>
      <div className="certifications-grid">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="cert-card">
            <div className="cert-card-title">{cert.title}</div>
            <div className="cert-card-meta">
              <span className="cert-platform">
                🚀 {cert.platform}
              </span>
              <span className="cert-year">{cert.year}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
