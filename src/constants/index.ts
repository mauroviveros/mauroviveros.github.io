import type { Button, Network } from '@interfaces';
import networks from './networks.json';
import features from './features.json';
import buttons from './buttons.json';

export const NETWORKS = networks as Network[];
export const FEATURES = features as Button[];
export const BUTTONS  = buttons as Button[];
