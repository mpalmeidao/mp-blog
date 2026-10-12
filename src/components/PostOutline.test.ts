import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import PostOutline from './PostOutline.astro';
import type { OutlineItem } from '../lib/outline';

describe('PostOutline', () => {
	it('renders nothing when the outline is empty', async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(PostOutline, {
			props: { items: [] satisfies OutlineItem[] },
		});
		expect(result).not.toContain('Nesta página');
		expect(result).not.toContain('<nav');
	});

	it('renders a nav titled Nesta página with nested links', async () => {
		const container = await AstroContainer.create();
		const items: OutlineItem[] = [
			{
				slug: 'intro',
				text: 'Intro',
				depth: 2,
				children: [
					{ slug: 'detail', text: 'Detail', depth: 3, children: [] },
				],
			},
			{ slug: 'next', text: 'Next', depth: 2, children: [] },
		];
		const result = await container.renderToString(PostOutline, {
			props: { items },
		});
		expect(result).toContain('Nesta página');
		expect(result).toContain('href="#intro"');
		expect(result).toContain('href="#detail"');
		expect(result).toContain('href="#next"');
		expect(result).toMatch(/<ul[\s\S]*<ul[\s\S]*Detail/);
	});
});
