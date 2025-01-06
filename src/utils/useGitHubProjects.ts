import { useEffect, useState } from 'react'

interface Project {
  id: number
  name: string
  html_url: string
  description: string
  isPinned: boolean // Adicionar campo para identificar projetos pinados
}

const useGitHubProjects = (username: string = 'rafaumeu') => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPinnedRepos = async () => {
      try {
        const query = `
          query {
            user(login: "${username}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    id
                    name
                    description
                    url
                  }
                }
              }
            }
          }
        `

        const response = await fetch('https://api.github.com/graphql', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        })

        if (!response.ok) {
          throw new Error('Failed to fetch pinned projects')
        }

        const data = await response.json()
        const pinnedRepos = data.data.user.pinnedItems.nodes.map(
          (repo: any) => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.url,
            description: repo.description,
            isPinned: true, // Marcar como pinado
          }),
        )

        setProjects(pinnedRepos)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('An unknown error occurred')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPinnedRepos()
  }, [username])

  return { projects, loading, error }
}

export default useGitHubProjects
