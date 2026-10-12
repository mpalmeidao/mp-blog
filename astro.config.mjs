// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// GitHub Pages (project site): https://warsiege00.github.io/mp-blog/
// If you later use a custom domain at the root, set base to '/' and update site.
export default defineConfig({
	site: 'https://warsiege00.github.io',
	base: '/mp-blog',
	output: 'static',
	markdown: {
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
		},
	},
});
