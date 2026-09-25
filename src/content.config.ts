import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const workCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.literal('work').default('work'),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'ready', 'published']).default('draft'),
    featured: z.boolean().default(false),
    coverImage: z.string().optional(),
  }),
});

const experimentsCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experiments' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.literal('experiment').default('experiment'),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'ready', 'published']).default('draft'),
    featured: z.boolean().default(false),
    question: z.string().optional(),
    tools: z.array(z.string()).optional(),
    idCode: z.string().optional(),
    readingTime: z.string().optional(),
    peerReviewed: z.boolean().default(true),
    doi: z.string().optional(),
  }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.literal('note').default('note'),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'ready', 'published']).default('draft'),
    featured: z.boolean().default(false),
  }),
});

const resourcesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.literal('resource').default('resource'),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    status: z.enum(['draft', 'ready', 'published']).default('draft'),
    featured: z.boolean().default(false),
    resourceType: z.string().optional(),
  }),
});

export const collections = {
  work: workCollection,
  experiments: experimentsCollection,
  notes: notesCollection,
  resources: resourcesCollection,
};
