export type Theme = 'light' | 'dark';

export function resolveTheme(
	stored: string | null | undefined,
	prefersDark: boolean,
): Theme {
	if (stored === 'light' || stored === 'dark') return stored;
	return prefersDark ? 'dark' : 'light';
}

export function nextTheme(current: Theme): Theme {
	return current === 'light' ? 'dark' : 'light';
}
