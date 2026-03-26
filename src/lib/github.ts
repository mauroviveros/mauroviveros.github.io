import { SITE } from "@/constants";
import type { Package } from "@/types/package";
import type { Repository } from "@/types/repository";
import type { User } from "@/types/user";
import { API_GITHUB_TOKEN } from "astro:env/server";

const request: RequestInit = { headers: { Authorization: `Bearer ${API_GITHUB_TOKEN}` } };

export const getPackages = async () => {
  const response = await fetch(`${SITE.GITHUB_API_URL}/packages?package_type=npm`, request);
  const data = await response.json() as Package[];
  return data
}

export const getRepos = async () => {
  const response = await fetch(`${SITE.GITHUB_API_URL}/repos?sort=updated`, request);
  const data = await response.json() as Repository[];
  const packages = await getPackages();

  return data
    .filter(({ archived }) => !archived)
    .filter(({ fork }) => !fork)
    .filter(({ topics }) => !topics.includes("github-course"))
    .filter(({ topics }) => !topics.includes("github-pages"))
    .filter(({ topics }) => !topics.includes("github-profile"))
    .map((repo) => {
      const pkg = packages.find((pkg) => pkg.name === repo.name);

      repo.urls = {
        homepage: repo.homepage,
        repo_url: repo.html_url,
        pkg_url: pkg?.html_url || null
      }
      return repo;
    });
}

export const getUser = async () => {
  const response = await fetch(`${SITE.GITHUB_API_URL}`, request);
  return (await response.json()) as User;
}
