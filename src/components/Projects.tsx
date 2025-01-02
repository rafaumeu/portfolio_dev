import React from 'react'
import useGitHubProjects from '../utils/useGitHubProjects'

const projectImages: { [key: string]: string } = {
  Travelgram: 'assets/images/Thumbnail_Project-01.png',
  'Tech News': 'assets/images/Thumbnail_Project-02.png',
  'Página de receita': 'assets/images/Thumbnail_Project-03.png',
  Zingen: 'assets/images/Thumbnail_Project-04.png',
  Refund: 'assets/images/Thumbnail_Project-05.png',
  'Página de turismo': 'assets/images/Thumbnail_Project-06.png',
}

const Projects: React.FC = () => {
  const { projects, loading, error } = useGitHubProjects('rafaumeu') // Usando 'rafaumeu' como nome de usuário

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  const limitDescription = (description: string, limit: number) => {
    return description.length > limit
      ? description.substring(0, limit) + '...'
      : description
  }

  return (
    <section id="jobs">
      <div className="container">
        <header>
          <span className="header-span">Meus trabalhos</span>
          <h2 className="header-title">Veja os projetos em destaque</h2>
        </header>
      </div>
      <div id="projects" className="grid-container">
        {projects.map((project) => (
          <div className="grid-item" key={project.id}>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  projectImages[project.name] || 'https://placehold.co/306x156'
                }
                alt={project.name}
              />
              <h3>{project.name}</h3>
              <p>
                {limitDescription(
                  project.description || 'Descrição não disponível',
                  45,
                )}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
