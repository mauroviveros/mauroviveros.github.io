import type { Config, Network, Site } from '@/types';

export const SITE: Site = {
  url: 'https://mauroviveros.github.io',
  githubUser: 'mauroviveros',
  keywords: [
    'Mauro Viveros',
    'Mauro Daniel Viveros',
    'Developer',
    'Web Developer',
    'DevOps',
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Astro',
    'GitHub Pages',
  ],
};

export const NETWORKS: Network[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/mauroviveros',
    icon: 'lucide:github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/mauroviveros',
    icon: 'lucide:linkedin',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/maurogontier',
    icon: 'lucide:instagram',
  },
  {
    name: 'Portfolio',
    url: 'https://mauroviveros.com.ar',
    icon: 'lucide:briefcase',
  },
  {
    name: 'Email',
    url: 'mailto:maurod.viveros@gmail.com',
    icon: 'lucide:mail',
  },
];

export const CONFIG: Config = {
  excludeTopics: ['github-course', 'github-pages', 'github-profile'],
};
