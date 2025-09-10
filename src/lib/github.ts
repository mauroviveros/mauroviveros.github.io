import { API_GITHUB_TOKEN } from "astro:env/server";

interface Repository {
  readonly name: string;
  readonly description: string;
  readonly topics: string[];
  readonly homepage: string;
  readonly html_url: string;
}

interface User {
  readonly public_repos: number;
  readonly created_at: string;
}

export const getRepos = async () => {
  const response = await fetch('https://api.github.com/users/mauroviveros/repos?sort=created', {
    headers: {
      Authorization: `Bearer ${API_GITHUB_TOKEN}`,
    },
  });

  return (await response.json()) as Repository[];
}

export const getUser = async () => {
  const response = await fetch('https://api.github.com/users/mauroviveros', {
    headers: {
      Authorization: `Bearer ${API_GITHUB_TOKEN}`,
    },
  });

  return (await response.json()) as User;
}
