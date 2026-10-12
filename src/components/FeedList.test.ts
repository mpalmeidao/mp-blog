import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import FeedList from './FeedList.astro';

describe('FeedList', () => {
	it('renders each post as a link with title, time and description', async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(FeedList, {
			props: {
				posts: [
					{
						id: 'ideias-em-publico',
						data: {
							title: 'Ideias em público',
							description: 'Escrever em aberto.',
							pubDate: new Date('2025-10-01'),
						},
					},
					{
						id: 'primeiro-estudo',
						data: {
							title: 'Primeiro estudo',
							description: 'Documentar ajuda.',
							pubDate: new Date('2025-09-01'),
						},
					},
				],
			},
		});
		expect(result).toContain(
			`href="${import.meta.env.BASE_URL}posts/ideias-em-publico"`,
		);
		expect(result).toContain('Ideias em público');
		expect(result).toContain('Escrever em aberto.');
		expect(result).toContain('<time');
		expect(result).toContain('datetime="2025-10-01"');
		expect(result).toContain('Primeiro estudo');
	});
});
