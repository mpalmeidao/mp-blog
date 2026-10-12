import { describe, expect, it } from 'vitest';
import { filterPublishedPosts, sortPostsByDate } from './posts';

type PostLike = {
	id: string;
	data: {
		pubDate: Date;
		draft?: boolean;
	};
};

const sample: PostLike[] = [
	{ id: 'older', data: { pubDate: new Date('2024-01-01') } },
	{ id: 'newer', data: { pubDate: new Date('2025-06-15') } },
	{ id: 'mid', data: { pubDate: new Date('2024-12-01'), draft: true } },
];

describe('sortPostsByDate', () => {
	it('orders posts by pubDate descending (most recent first)', () => {
		const sorted = sortPostsByDate(sample);
		expect(sorted.map((p) => p.id)).toEqual(['newer', 'mid', 'older']);
	});

	it('does not mutate the original array', () => {
		const copy = [...sample];
		sortPostsByDate(sample);
		expect(sample.map((p) => p.id)).toEqual(copy.map((p) => p.id));
	});
});

describe('filterPublishedPosts', () => {
	it('hides draft posts when production is true', () => {
		const published = filterPublishedPosts(sample, true);
		expect(published.map((p) => p.id)).toEqual(['older', 'newer']);
	});

	it('keeps draft posts when production is false', () => {
		const all = filterPublishedPosts(sample, false);
		expect(all.map((p) => p.id)).toEqual(['older', 'newer', 'mid']);
	});

	it('treats missing draft as published', () => {
		const published = filterPublishedPosts(
			[{ id: 'a', data: { pubDate: new Date('2024-01-01') } }],
			true,
		);
		expect(published).toHaveLength(1);
	});
});
