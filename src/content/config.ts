import { defineCollection, z } from 'astro:content';

const blogposts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date().optional(), // ISO format expected (YYYY-MM-DD)
        description: z.string().optional(),
        image: z
            .object({
                url: z.string().nullable().optional(),
                alt: z.string().optional(),
            })
            .optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const artworks = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        image: z
            .object({
                url: z.string().nullable().optional(),
                alt: z.string().optional(),
                width: z.number().optional(),
                height: z.number().optional(),
            })
            .optional(),
        date: z.date().optional(), // ISO format
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        url: z.string(),
        title: z.string(),
        date: z.date().optional(), // ISO format
        description: z.string().optional(),
        githubUrl: z.string().optional(),
        image: z
            .object({
                url: z.string().nullable().optional(),
                alt: z.string().optional(),
            })
            .optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    blogposts,
    artworks,
    projects,
};