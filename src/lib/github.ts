import type { Package } from "@types/packages";
import type { Repository } from "@types/repos";
import type { User } from "@types/user";
import { API_GITHUB_TOKEN } from "astro:env/server";
const API_URL = 'https://api.github.com/users/mauroviveros';

const request: RequestInit = { headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` } }

export const getPackages = async () => {
  const response = await fetch(`${API_URL}/packages?package_type=npm`, request);
  const data = await response.json() as Package[];
  return data
}

export const getRepos = async () => {
  const response = await fetch(`${API_URL}/repos?sort=updated`, request);

  const data = await response.json();
  const repos = (Array.isArray(data) ? data : []) as Repository[];

  return repos
    .filter(repo => !repo.private)
    .filter(({ fork }) => !fork)
    .filter(({ topics }) => !topics.includes('github-profile'))
    .filter(({ topics }) => !topics.includes('github-pages'));
}

export const getUser = async () => {
  const response = await fetch(API_URL, request);
  return (await response.json()) as User;
}
