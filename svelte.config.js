import adapter from '@sveltejs/adapter-static';
import preprocessor from "svelte-preprocess"


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocessor(),
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
