import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/docs' }),
  schema: z.object({
    title: z.string(),
    icon: z.string().optional(),
    summary: z.string(),
    parent: reference('docs').optional(),
    children: z.array(reference('docs')).optional(),
  }),
});

export const collections = { docs };
