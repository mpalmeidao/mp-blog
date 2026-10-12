import { describe, expect, it } from 'vitest';
import { buildOutline } from './outline';

type Heading = {
	depth: number;
	slug: string;
	text: string;
};

describe('buildOutline', () => {
	it('returns empty array when there are no h2/h3 headings', () => {
		const headings: Heading[] = [
			{ depth: 1, slug: 'title', text: 'Title' },
			{ depth: 4, slug: 'note', text: 'Note' },
		];
		expect(buildOutline(headings)).toEqual([]);
	});

	it('keeps only depth 2 and 3 headings', () => {
		const headings: Heading[] = [
			{ depth: 1, slug: 'post', text: 'Post' },
			{ depth: 2, slug: 'intro', text: 'Intro' },
			{ depth: 3, slug: 'detail', text: 'Detail' },
			{ depth: 2, slug: 'next', text: 'Next' },
		];
		const outline = buildOutline(headings);
		expect(outline).toEqual([
			{
				slug: 'intro',
				text: 'Intro',
				depth: 2,
				children: [{ slug: 'detail', text: 'Detail', depth: 3, children: [] }],
			},
			{ slug: 'next', text: 'Next', depth: 2, children: [] },
		]);
	});

	it('nests consecutive h3 under the preceding h2', () => {
		const headings: Heading[] = [
			{ depth: 2, slug: 'a', text: 'A' },
			{ depth: 3, slug: 'a1', text: 'A1' },
			{ depth: 3, slug: 'a2', text: 'A2' },
			{ depth: 2, slug: 'b', text: 'B' },
		];
		const outline = buildOutline(headings);
		expect(outline[0].children.map((c) => c.slug)).toEqual(['a1', 'a2']);
		expect(outline[1].children).toEqual([]);
	});

	it('promotes orphan h3 to top level when no h2 precedes it', () => {
		const headings: Heading[] = [{ depth: 3, slug: 'alone', text: 'Alone' }];
		expect(buildOutline(headings)).toEqual([
			{ slug: 'alone', text: 'Alone', depth: 3, children: [] },
		]);
	});
});
