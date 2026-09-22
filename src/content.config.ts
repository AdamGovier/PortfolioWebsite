import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
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
    pinned: z.number().min(1).max(3).optional(),
    attachments: 
      z.array(
        z.object({
          href: z.string(),
          contentType: z.string(),
          displayName: z.string(),
        })
      )
      .optional(),
    sources:
      z.array(
        z.object({
          href: z.string(),
          displayName: z.string(),
        })
      )
      .optional(),
  }),
});

export const collections = { blog };
