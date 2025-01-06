import axios from 'axios'

/**
 * Fetches the list of images from the GitHub repository screenshots directory.
 * @param {string} repoName - The name of the repository to fetch images from.
 * @returns {Promise<string[]>} A promise that resolves to an array of image URLs.
 */
export const fetchImageList = async (repoName: string): Promise<string[]> => {
  const url = `https://api.github.com/repos/rafaumeu/${repoName}/contents/screenshots`

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`, // Use the environment variable
      },
    })

    if (response.data.length === 0) {
      return ['https://placehold.co/306x156']
    }

    return response.data.map(
      (file: { name: string; download_url: string }) => file.download_url,
    )
  } catch (error) {
    console.error(
      `Erro ao buscar imagens para o repositório ${repoName}:`,
      error,
    )
    return ['https://placehold.co/306x156'] // Retorna a URL padrão em caso de erro
  }
}

/**
 * Fetches the content of a specific image file from the GitHub repository.
 * @param {string} fileName - The name of the file to fetch.
 * @param {string} repoName - The name of the repository to fetch the image from.
 * @returns {Promise<string | null>} A promise that resolves to the Base64 content of the image or null if an error occurs.
 */
export const fetchImageContent = async (
  fileName: string,
  repoName: string,
): Promise<string | null> => {
  const url = `https://api.github.com/repos/rafaumeu/${repoName}/contents/screenshots/${fileName}`
  const response = await axios.get(url, {
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`, // Use the environment variable
    },
  })
  return response.data.content // Base64 content
}
