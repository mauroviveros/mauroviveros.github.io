import networks from './NETWORKS.json';

interface Network {
  name: string;
  url: string;
  icon: string;
}

export const NETWORKS = networks as Network[];
