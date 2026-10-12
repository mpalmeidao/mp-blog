import { describe, expect, it } from 'vitest';
import { isCurrentPath, withBase } from './paths';

describe('withBase', () => {
	it('prefixes paths with the configured base URL', () => {
		const base = import.meta.env.BASE_URL;
		expect(withBase('/')).toBe(base);
		expect(withBase('/sobre')).toBe(`${base}sobre`);
		expect(withBase('/posts/hello')).toBe(`${base}posts/hello`);
	});

	it('accepts paths without a leading slash', () => {
		const base = import.meta.env.BASE_URL;
		expect(withBase('sobre')).toBe(`${base}sobre`);
	});
});

describe('isCurrentPath', () => {
	it('matches the home path with or without trailing slash', () => {
		const base = import.meta.env.BASE_URL.replace(/\/$/, '') || '';
		expect(isCurrentPath(`${base}/`, '/')).toBe(true);
		expect(isCurrentPath(base || '/', '/')).toBe(true);
	});

	it('matches nested routes under the base', () => {
		expect(isCurrentPath(`${import.meta.env.BASE_URL}sobre`, '/sobre')).toBe(
			true,
		);
		expect(isCurrentPath(`${import.meta.env.BASE_URL}posts/a`, '/sobre')).toBe(
			false,
		);
	});
});
