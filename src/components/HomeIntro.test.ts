import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, expect, it } from 'vitest';
import HomeIntro from './HomeIntro.astro';

describe('HomeIntro', () => {
	it('shows the lead without a separate page title heading', async () => {
		const container = await AstroContainer.create();
		const result = await container.renderToString(HomeIntro, {
			props: {
				description:
					'Experimentos, ideias e anotações — um espaço para documentar de tudo um pouco.',
			},
		});
		expect(result).toContain('page-lead');
		expect(result).toContain(
			'Experimentos, ideias e anotações — um espaço para documentar de tudo um pouco.',
		);
		expect(result).not.toContain('page-title');
	});
});
