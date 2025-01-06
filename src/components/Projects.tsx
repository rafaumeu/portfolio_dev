import React, { useEffect, useState } from 'react'
import { fetchImageList } from '../utils/githubImageFetcher'
import useGitHubProjects from '../utils/useGitHubProjects'

interface Project {
  id: number
  name: string
  html_url: string
  description: string
}

const Projects: React.FC = () => {
  const { projects, loading, error } = useGitHubProjects('rafaumeu') // Using 'rafaumeu' as the username
  const [images, setImages] = useState<Record<string, string>>({}) // Define type for images
  const [validProjects, setValidProjects] = useState<Project[]>([]) // Array para armazenar projetos válidos

  useEffect(() => {
    const loadImages = async () => {
      const tempValidProjects: Project[] = [] // Array temporário para armazenar projetos válidos

      for (const project of projects) {
        const repoName = project.name // Extract the repository name
        const imageList = await fetchImageList(repoName) // Pass repoName to fetchImageList
        console.log(`Repositório: ${repoName}`)
        console.log(`Lista de imagens retornadas:`, imageList)
        const imageMap: Record<string, string> = {}

        imageList.forEach((url) => {
          const fileName = url.split('/').pop() // Extract file name from URL
          if (fileName) {
            imageMap[fileName] = url // Map file name to URL
          }
        })

        if (Object.keys(imageMap).length > 0) {
          tempValidProjects.push(project) // Adiciona o projeto se houver imagens
        }

        setImages((prevImages) => ({ ...prevImages, ...imageMap })) // Atualiza o estado das imagens
      }

      setValidProjects(tempValidProjects) // Atualiza o estado com projetos válidos
    }

    loadImages()
  }, [projects]) // Add projects as a dependency

  if (loading) return <div>Loading projects...</div>
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
        {validProjects.map((project: Project) => (
          <div className="grid-item" key={project.id}>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={
                  images[`${project.id}.png`] || 'https://placehold.co/306x156'
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
