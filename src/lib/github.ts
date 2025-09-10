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

const request: RequestInit = { headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` } }

export const getRepos = async () => {
  const response = await fetch('https://api.github.com/users/mauroviveros/repos?sort=created', request);

  const data = await response.json();
  return (Array.isArray(data) ? data : []) as Repository[];
}

export const getUser = async () => {
  const response = await fetch('https://api.github.com/users/mauroviveros', request);

  return (await response.json()) as User;
}
