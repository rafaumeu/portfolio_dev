import { useEffect, useState } from 'react'

interface Project {
  id: number
  name: string
  html_url: string
  description: string
}

const useGitHubProjects = (username: string = 'rafaumeu') => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let allProjects: Project[] = []
        let page = 1
        let hasMore = true

        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
            {
              headers: {
                Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
              },
            },
          )
          if (!response.ok) {
            throw new Error('Failed to fetch projects')
          }
          const data = await response.json()
          allProjects = allProjects.concat(data)
          hasMore = data.length > 0
          page++
        }

        setProjects(allProjects)
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

    fetchProjects()
  }, [username])

  return { projects, loading, error }
}

export default useGitHubProjects
