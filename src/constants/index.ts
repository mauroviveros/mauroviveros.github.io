import type { Action } from '@/types';

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
    title: 'GitHub Package',
  },
};

export const CREATOR = {
  name: 'Mauro Viveros',
  url: 'https://mauroviveros.github.io',
  fork_url: 'https://github.com/mauroviveros/mauroviveros.github.io/fork',
};
