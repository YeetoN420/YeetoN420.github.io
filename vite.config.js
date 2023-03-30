import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()]

	,"dependencies": {
		"@sveltejs/adapter-node": "next",
		"@sveltejs/kit": "next"
	  }
};

export default config;
