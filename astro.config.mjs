// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { LOCALES } from './src/i18n/index.ts';

const locales = Object.keys(LOCALES);
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