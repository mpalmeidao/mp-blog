import { describe, expect, it } from 'vitest';
import { nextTheme, resolveTheme } from './theme';

describe('resolveTheme', () => {
	it('uses stored preference when present', () => {
		expect(resolveTheme('dark', true)).toBe('dark');
		expect(resolveTheme('light', true)).toBe('light');
	});

	it('falls back to system preference when nothing is stored', () => {
		expect(resolveTheme(null, true)).toBe('dark');
		expect(resolveTheme(null, false)).toBe('light');
		expect(resolveTheme(undefined, true)).toBe('dark');
	});

	it('ignores invalid stored values and uses system preference', () => {
		expect(resolveTheme('purple', false)).toBe('light');
	});
});

describe('nextTheme', () => {
	it('toggles between light and dark', () => {
		expect(nextTheme('light')).toBe('dark');
		expect(nextTheme('dark')).toBe('light');
	});
});
