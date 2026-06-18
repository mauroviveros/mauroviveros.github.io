import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { getRepos } from '@/lib/github';

function parsePeriodStart(period: string): Date {
  const start = period.split(/[-–—]/)[0].trim();
  const months: Record<string, number> = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };
  const match = start.match(/^(\w{3})\s+(\d{4})$/i);
  if (match) {
    const month = months[match[1].toLowerCase()];
    const year = Number(match[2]);
    if (month !== undefined && !isNaN(year)) {
      return new Date(year, month, 1);
    }
  }
  const yearMatch = start.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(Number(yearMatch[1]), 0, 1);
  }
  return new Date(0);
}

export async function GET(context: { site: URL }) {
  const repos = await getRepos();
  const experience = await getCollection('experience');
  const [about] = await getCollection('about');

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
      pubDate: parsePeriodStart(entry.data.period),
      link: entry.data.url ?? '/',
    })),
  ];

  items.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `${about?.data.full_name} | GitHub Pages`,
    description: about?.data.description ?? '',
    site: context.site.toString(),
    items,
  });
}
