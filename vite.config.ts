import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import ui from '@nuxt/ui/vite';

export default defineConfig({
	plugins: [
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.ts'],
			refresh: true,
		}),
		tailwindcss(),
		vue({
			template: {
				// Disable rollupOptions error allow external images
				transformAssetUrls: {
					base: null,
					includeAbsolute: false,
				},
				// Add custom tags
				// compilerOptions: {
				// 	isCustomElement: (tag) => ['center'].includes(tag),
				// },
			},
		}),
		ui(),
	],
	server: {
		watch: {
			ignored: ['**/storage/framework/views/**'],
		},
	},
	// For vue-router history
	base: './',
	build: {
		emptyOutDir: true,
		// chunkSizeWarningLimit: 2048, // Kb - for fontawesome import
	},
	// Or change assets dir
	// build: {
	// 	rollupOptions: {
	// 		external: ['vue'],
	// 		output: {
	// 			assetFileNames: 'assets/[ext]/[name].[hash].[extname]',
	// 			chunkFileNames: 'chunks/[name].[hash].js',
	// 			entryFileNames: 'js/[name].[hash].js',
	// 		},
	// 	},
	// },
	// resolve: {
	//     alias: {
	//        '@': '/resources/ts',
	//        '@username': '/resources/js/plugin/username',
	//     },
	// },
});
