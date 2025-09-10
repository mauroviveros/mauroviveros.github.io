import { GITHUB_TOKEN } from "astro:env/server";

interface Repository {
  name: string;
  description: string;
  topics: string[];
  homepage: string;
  html_url: string;
}

export const getRepos = async () => {
  const response = await fetch('https://api.github.com/users/mauroviveros/repos?sort=created', {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  });

  return (await response.json()) as Repository[];
}
