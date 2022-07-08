import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
      		assets: 'docs',
			fallback: 'index.html'
		}),
		appDir: 'internal',
	}
};

export default config;
