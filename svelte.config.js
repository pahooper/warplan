import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		prerender: {
			handleHttpError: ({ path, message }) => {
				// /export route is Phase 3 — ignore during prerender until it exists
				if (path.startsWith('/export')) {
					console.warn(`[prerender] Ignoring missing route: ${path}`);
					return;
				}
				throw new Error(message);
			}
		},
		paths: {
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH || ''
		}
	}
	// SvelteKit 2: trailingSlash is a page option — exported from src/routes/+layout.ts
};

export default config;
