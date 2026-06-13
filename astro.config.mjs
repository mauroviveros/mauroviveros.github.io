// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

import { avatar } from './src/integrations/avatar';
import { SITE } from './src/site.config';

const GITHUB_TOKEN = process.env.API_GITHUB_TOKEN;

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [icon(), sitemap(), avatar(GITHUB_TOKEN)],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      API_GITHUB_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
    },
  },
});
