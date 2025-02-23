import type { Feature, Network } from "@interfaces";
import networks from "./networks.json";
import features from "./features.json";
import sites from "./sites.json";

export const NETWORKS = networks as Network[];
export const FEATURES = features as Feature[];
export const USELESS_SITES = sites as string[];
