// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://mauroviveros.github.io',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      API_GITHUB_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
