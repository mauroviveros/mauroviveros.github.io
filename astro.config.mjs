// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

import { SITE } from './src/site.config';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  integrations: [icon(), sitemap()],
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
