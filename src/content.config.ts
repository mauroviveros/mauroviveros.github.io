import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const about = defineCollection({
  loader: glob({ base: './src/content/about', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    full_name: z.string(),
    description: z.string(),
    country: z.string(),
    technologies: z.array(z.string()).optional(),
    keywords: z.array(z.string()).optional(),
  }),
});

const experience = defineCollection({
  loader: glob({ base: './src/content/experience', pattern: '**/*.{yaml,yml}' }),
  schema: z.object({
    about: reference("about"),
    company: z.string(),
    role: z.string(),
    period: z.string(),
    url: z.url().optional(),
    initials: z.string().optional()
  })
});

export const collections = { about, experience };
