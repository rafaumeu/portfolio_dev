import React, { useEffect, useState } from 'react'
import { fetchImageList } from '../utils/githubImageFetcher'
import useGitHubProjects from '../utils/useGitHubProjects'
import ProjectSkeleton from './ProjectSkeleton'

interface Project {
  id: number
  name: string
  html_url: string
  description: string
}

const Projects: React.FC = () => {
  const { projects, loading } = useGitHubProjects('rafaumeu')
  const [images, setImages] = useState<Record<string, string>>({})
  const [validProjects, setValidProjects] = useState<Project[]>([])

  useEffect(() => {
    const loadImages = async () => {
      const tempValidProjects: Project[] = []

      for (const project of projects) {
        const repoName = project.name
        const imageList = await fetchImageList(repoName)
        const imageMap: Record<string, string> = {}

        imageList.forEach((url) => {
          const fileName = url.split('/').pop()
          if (fileName) {
            imageMap[fileName] = url
          }
        })

        if (Object.keys(imageMap).length > 0) {
          tempValidProjects.push(project)
        }

        setImages((prevImages) => ({ ...prevImages, ...imageMap }))
      }

      setValidProjects(tempValidProjects)
    }

    if (projects.length > 0) {
      loadImages()
    }
  }, [projects])

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
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <ProjectSkeleton key={index} />
            ))
          : validProjects.map((project: Project) => (
              <div className="grid-item" key={project.id}>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      images[`${project.id}.png`] ||
                      'https://placehold.co/306x156'
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
