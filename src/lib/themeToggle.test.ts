import { describe, expect, it } from 'vitest';
import { themeToggleLabel, themeToggleIcon } from './themeToggle';

describe('themeToggleLabel', () => {
	it('offers dark mode when the current theme is light', () => {
		expect(themeToggleLabel('light')).toBe('Ativar tema escuro');
	});

	it('offers light mode when the current theme is dark', () => {
		expect(themeToggleLabel('dark')).toBe('Ativar tema claro');
	});
});

describe('themeToggleIcon', () => {
	it('shows a moon when the current theme is light', () => {
		expect(themeToggleIcon('light')).toBe('moon');
	});

	it('shows a sun when the current theme is dark', () => {
		expect(themeToggleIcon('dark')).toBe('sun');
	});
});
