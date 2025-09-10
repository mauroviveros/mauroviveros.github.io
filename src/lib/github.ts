import { site } from "astro:config/server";
import { API_GITHUB_TOKEN } from "astro:env/server";
const API_URL = 'https://api.github.com/users/mauroviveros';

interface Repository {
  readonly name: string;
  readonly description: string;
  readonly topics: string[];
  readonly homepage?: string;
  readonly html_url: string;
  readonly private: boolean;
  readonly fork: boolean;
}

interface User {
  readonly public_repos: number;
  readonly created_at: string;
}

const request: RequestInit = { headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` } }

export const getRepos = async () => {
  const response = await fetch(`${API_URL}/repos?sort=updated`, request);

  const data = await response.json();
  const repos = (Array.isArray(data) ? data : []) as Repository[];

  return repos
    .filter(repo => !repo.private)
    .filter(({ fork }) => !fork)
    .filter(({ topics }) => !topics.includes('github-profile'))
    .filter(({ homepage }) => {
      if(!homepage || !site) return true;
      return new URL(homepage).href !== new URL(site).href;
    });
}

export const getUser = async () => {
  const response = await fetch(API_URL, request);

  return (await response.json()) as User;
}
