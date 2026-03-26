export * from './networks';
export * from './site';

interface Action {
  icon: string;
  title: string;
}
export const ACTIONS: Record<string, Action> = {
  homepage: {
    icon: "lucide:external-link",
    title: "View Live Demo",
  },
  repo_url: {
    icon: "lucide:code",
    title: "View Source Code",
  },
  pkg_url: {
    icon: 'lucide:package',
    title: 'Github Package',
  }
}
