import fs from 'node:fs';

import type { AstroIntegration } from 'astro';

import { SITE } from '../site.config';

const GITHUB_API_URL = `https://api.github.com/users/${SITE.githubUser}`;
const AVATAR_PATH = 'public/avatar.png';

async function download(token: string) {
  try {
    const user = await fetch(GITHUB_API_URL, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(r => r.json());
    if (!user?.avatar_url) return;
    const res = await fetch(`${user.avatar_url}&s=128`);
    if (!res.ok) return;
    fs.writeFileSync(AVATAR_PATH, Buffer.from(await res.arrayBuffer()));
  } catch (e) {
    console.warn('[github-avatar] download failed:', e);
  }
}

export function avatar(token?: string): AstroIntegration {
  if (!token) {
    console.warn('[github-avatar] API_GITHUB_TOKEN not set, skipping');
    return { name: 'github-avatar', hooks: {} };
  }
  return {
    name: 'github-avatar',
    hooks: {
      'astro:build:start': () => download(token),
      'astro:server:setup': () => download(token),
    },
  };
}
