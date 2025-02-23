import type { Feature, Network } from '@interfaces';
import networks from './networks.json';
import features from './features.json';

export const NETWORKS = networks as Network[];
export const FEATURES = features as Feature[];
