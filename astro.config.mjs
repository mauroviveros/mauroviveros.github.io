// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { locales } from './src/i18n/index.ts';

const defaultLocale = locales[0];

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true
    }
  },
});