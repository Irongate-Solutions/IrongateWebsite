import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    date: z.string(),
    author: z.string().optional(),
  }),
});

const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string().optional(),
    problem: z.string().optional(),
    outcome: z.string().optional(),
    date: z.string().optional(),
    industry: z.string().optional(),
    duration: z.string().optional(),
    thumbnail: z.string().optional(),
    heroImage: z.string().optional(),
  }),
});

export const collections = {
  'insights': insights,
  'case-studies': caseStudies,
};
