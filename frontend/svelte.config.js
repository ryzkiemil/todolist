import adapter from '@sveltejs/adapter-auto';
import SvelteProcess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: SvelteProcess()
};

export default config;
