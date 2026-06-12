// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://mauroviveros.github.io/',
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
