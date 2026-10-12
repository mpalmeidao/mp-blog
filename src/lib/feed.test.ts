import { describe, expect, it } from 'vitest';
import { prepareFeedPosts } from './feed';

const posts = [
	{
		id: 'older',
		data: {
			title: 'Older',
			description: 'Old',
			pubDate: new Date('2024-01-01'),
		},
	},
	{
		id: 'draft',
		data: {
			title: 'Draft',
			description: 'Hidden',
			pubDate: new Date('2025-01-01'),
			draft: true,
		},
	},
	{
		id: 'newer',
		data: {
			title: 'Newer',
			description: 'New',
			pubDate: new Date('2025-06-01'),
		},
	},
];

describe('prepareFeedPosts', () => {
	it('filters drafts in production and sorts newest first', () => {
		const feed = prepareFeedPosts(posts, true);
		expect(feed.map((p) => p.id)).toEqual(['newer', 'older']);
	});

	it('keeps drafts outside production while still sorting', () => {
		const feed = prepareFeedPosts(posts, false);
		expect(feed.map((p) => p.id)).toEqual(['newer', 'draft', 'older']);
	});
});
