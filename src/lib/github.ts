import { CONFIG, GITHUB_API_URL } from '@config';
import { API_GITHUB_TOKEN } from 'astro:env/server';

import type { Package } from '@/types/package';
import type { Repository } from '@/types/repository';
import type { User } from '@/types/user';

const TIMEOUT = 8_000;

const requestInit: RequestInit = {
  headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` },
  signal: AbortSignal.timeout(TIMEOUT),
};

const cache = new Map<string, Promise<unknown>>();

function checkRateLimit(response: Response, url: string) {
  const remaining = response.headers.get('X-RateLimit-Remaining');
  if (remaining !== null && Number(remaining) < 5) {
    console.warn(
      `[GitHub API] Rate limit low (${remaining} remaining) for ${url}`,
    );
  }
  if (response.status === 403 || response.status === 429) {
    console.warn(
      `[GitHub API] ${url} → ${response.status} ${response.statusText}`,
    );
  }
}

async function fetchJson<T>(url: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(url, requestInit);
    checkRateLimit(response, url);
    if (!response.ok) {
      return fallback;
    }
    return (await response.json()) as T;
  } catch (error) {
    console.warn(`[GitHub API] ${url} →`, error);
    return fallback;
  }
}

function cached<T>(key: string, fn: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;
  const promise = fn();
  cache.set(key, promise);
  return promise;
}

export const getPackages = () =>
  cached(`packages`, () =>
    fetchJson<Package[]>(`${GITHUB_API_URL}/packages?package_type=npm`, []),
  );

export const getRepos = () =>
  cached(`repos`, async () => {
    const data = await fetchJson<Repository[]>(
      `${GITHUB_API_URL}/repos?sort=updated`,
      [],
    );
    const packages = await getPackages();

    return data
      .filter(({ archived }) => !archived)
      .filter(({ fork }) => !fork)
      .filter(
        ({ topics }) =>
          !topics.some((t) => (CONFIG.excludeTopics || []).includes(t)),
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
  });

export const getUser = () =>
  cached(`user`, () => fetchJson<Partial<User>>(`${GITHUB_API_URL}`, {}));
