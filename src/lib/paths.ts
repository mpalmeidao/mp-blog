function normalize(path: string): string {
	if (path === '' || path === '/') return '/';
	return path.replace(/\/$/, '') || '/';
}

/** Join a site path with Astro `BASE_URL` (required on GitHub project Pages). */
export function withBase(path: string): string {
	const base = import.meta.env.BASE_URL;
	const cleaned = path.replace(/^\//, '');
	if (!cleaned) return base;
	return `${base}${cleaned}`;
}

/** Whether the current URL matches a route, respecting `base`. */
export function isCurrentPath(pathname: string, route: string): boolean {
	const current = normalize(pathname);
	const target = normalize(withBase(route));
	if (route === '/' || route === '') {
		return current === target;
	}
	return current === target || current.startsWith(`${target}/`);
}
