import type { Theme } from './theme';

export type ThemeIcon = 'moon' | 'sun';

export function themeToggleLabel(current: Theme): string {
	return current === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro';
}

export function themeToggleIcon(current: Theme): ThemeIcon {
	return current === 'light' ? 'moon' : 'sun';
}
