export interface Network {
  readonly name: string;
  readonly url: string;
  readonly icon: string;
}

export interface Action {
  icon: string;
  title: string;
}

export interface Site {
  url?: string;
  githubUser: string;
  keywords?: string[];
}

export interface Config {
  excludeTopics?: string[];
}
