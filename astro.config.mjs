// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  env: {
    schema: {
      PUBLIC_GITHUB_API_TOKEN: envField.string({ context: 'server', access: 'secret' }),
    },
  },
});
