<?php
class GithubFetcher
{
  private string $token;
  private string $endpoint = "https://api.github.com/graphql";

  public function __construct(string $token)
  {
    $this->token = $token;
  }

  public function getPinnedProjects(string $username): array
  {
    $query = <<<GRAPHQL
      query {
        user(login: "{$username}") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  name
                  description
                  url
                  stargazerCount
                  primaryLanguage {
                    name
                  }
                }
              }
            }
          }
        }
      }
    GRAPHQL;
    $data = json_encode(['query' => $query]);
    $ch = curl_init($this->endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
      'Content-Type: application/json',
      'Authorization: Bearer ' . $this->token,
      'User-Agent: PortfolioDevPHP',
    ]);
    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

    if (curl_errno($ch)) {
      $error = curl_error($ch);
      curl_close($ch);
      throw new Exception('Erro no cURL: ' . $error);
    }

    curl_close($ch);

    if ($httpCode !== 200) {
      throw new Exception("Erro na API do GitHub. Código: $httpCode. Resposta: $response");
    }

    return json_decode($response, true);
  }
}
