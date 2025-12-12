import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const classes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/classes' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    youtubeId: z.string(),
    references: z.array(
      z.object({
        title: z.string(),
        url: z.string(),
      })
    ).optional(),
  }),
});

export const collections = { classes };

