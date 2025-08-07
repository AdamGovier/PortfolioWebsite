import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';
import { type BlogPostMetadata } from '../types/collection';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    slug: z.string(),
    image: z
      .object({
        url: z.string(),
        alt: z.string(),
      })
      .optional(),
    author: z.string().optional().default("Adam Govier"),
    tags: z.array(z.string()).optional(),
    relativePath: z.string().optional(),
    draft: z.boolean().optional().default(false),
    pinned: z.number().min(1).max(3).optional()
  }) as z.ZodType<BlogPostMetadata>,
});

export const collections = { blog };