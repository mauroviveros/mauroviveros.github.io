import { CONFIG, SITE } from '@config';
import { API_GITHUB_TOKEN } from 'astro:env/server';

import type { Package } from '@/types/package';
import type { Repository } from '@/types/repository';
import type { User } from '@/types/user';

const GITHUB_API_URL = `https://api.github.com/users/${SITE.githubUser}`;

const request: RequestInit = {
  headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` },
};

async function fetchJson<T>(url: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(url, request);
    if (!response.ok) {
      console.warn(
        `[GitHub API] ${url} → ${response.status} ${response.statusText}`,
      );
      return fallback;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[GitHub API] ${url} →`, error);
    return fallback;
  }
}

export const getPackages = async () =>
  fetchJson<Package[]>(`${GITHUB_API_URL}/packages?package_type=npm`, []);

export const getRepos = async () => {
  const data = await fetchJson<Repository[]>(
    `${GITHUB_API_URL}/repos?sort=updated`,
    [],
  );
  const packages = await getPackages();

  return data
    .filter(({ archived }) => !archived)
    .filter(({ fork }) => !fork)
    .filter(
      ({ topics }) => !topics.some((t) => CONFIG.excludeTopics.includes(t)),
    )
    .map((repo) => {
      const pkg = packages.find((pkg) => pkg.name === repo.name);

      repo.urls = {
        homepage: repo.homepage,
        repo_url: repo.html_url,
        pkg_url: pkg?.html_url || null,
      };
      return repo;
    });
};

export const getUser = async () =>
  fetchJson<Partial<User>>(`${GITHUB_API_URL}`, {});
