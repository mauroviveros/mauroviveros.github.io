import rss from '@astrojs/rss';
import { SITE } from '@config';
import { getCollection } from 'astro:content';

import { getRepos } from '@/lib/github';

export async function GET(context: { site: URL }) {
  const repos = await getRepos();
  const experience = await getCollection('experience');

  const items = [
    ...repos.map((repo) => ({
      title: repo.name,
      description: repo.description ?? '',
      pubDate: new Date(repo.updated_at),
      link: repo.html_url,
    })),
    ...experience.map((entry) => ({
      title: `${entry.data.role} at ${entry.data.company}`,
      description: `${entry.data.role} at ${entry.data.company} (${entry.data.period})`,
      pubDate: new Date(),
      link: '/',
    })),
  ];

  items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `${SITE.fullName} | Portfolio`,
    description: SITE.description,
    site: context.site.toString(),
    items,
  });
}
