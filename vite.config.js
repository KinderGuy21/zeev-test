import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), jsconfigPaths()],
	build: {
		outDir: 'dist',
	},
	resolve: {
		alias: [
			{ find: './runtimeConfig', replacement: './runtimeConfig.browser' },
			{ find: '@', replacement: '/src' },
		],
	},
	publicPath: './',
});
