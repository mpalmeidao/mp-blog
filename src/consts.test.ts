import { describe, expect, it } from 'vitest';
import { SITE_DESCRIPTION, SITE_TITLE } from './consts';

describe('site identity', () => {
	it('uses matheus in a nutshell as the site title', () => {
		expect(SITE_TITLE).toBe('matheus in a nutshell');
	});

	it('describes the home as a broad notes space', () => {
		expect(SITE_DESCRIPTION).toBe(
			'Experimentos, ideias e anotações — um espaço para documentar de tudo um pouco.',
		);
	});
});
