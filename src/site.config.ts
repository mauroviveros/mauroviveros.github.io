interface Network {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}

interface Action {
  icon: string;
  title: string;
}

export const SITE = {
  url: 'https://mauroviveros.github.io',
  githubUser: 'mauroviveros',
  fullName: 'Mauro Viveros',
  description: 'WEB Developer | DEV-OPS',
  country: 'Argentina',
  author: 'Mauro Daniel Viveros',
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

export const CONFIG = {
  titleSuffix: '| GitHub Pages',
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
  excludeTopics: ['github-course', 'github-pages', 'github-profile'],
};

export const ACTIONS: Record<string, Action> = {
  homepage: {
    icon: 'lucide:external-link',
    title: 'View Live Demo',
  },
  repo_url: {
    icon: 'lucide:code',
    title: 'View Source Code',
  },
  pkg_url: {
    icon: 'lucide:package',
    title: 'Github Package',
  },
};
