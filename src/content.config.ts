import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.md', base: './content/posts' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		draft: z.boolean().optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ pattern: 'sobre.md', base: './content' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = { posts, pages };
