import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import solidPlugin from 'vite-plugin-solid';



// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		preserveSymlinks: true,
	},
	build: {
		chunkSizeWarningLimit: 10000,
		rollupOptions: {
			external: "@mui/material/Box",
		},
	},
});

// export default defineConfig({
// 	base: "/Stakepool-Frontend/",
// 	plugins: [vue()],
// 	resolve: {
// 		alias: {
// 			"~": path.resolve(__dirname, "node_modules"),
// 			"@": path.resolve(__dirname, "src"),
// 		},
// 	},
// 	build: {
// 		chunkSizeWarningLimit: 1600,
// 	},
// });

// export default defineConfig({
// 	plugins: [
// 		react(),
// 		solidPlugin(),
//     chunkSplitPlugin({
//       strategy: 'default',
//     })
// 	],
// 	optimizeDeps: {
// 		esbuildOptions: {
// 			// Node.js global to browser globalThis
// 			define: {
// 				global: "globalThis",
// 			},
// 		},
// 	},
// 	build: {
// 		chunkSizeWarningLimit: 10000,
// 		minify:'terser',
// 		target: 'esnext',
// 		terserOptions: {
// 			output: {
// 				comments: false, // This will remove all comments from the output files
// 			},
// 		},
// 		rollupOptions: {
// 			output: {
// 				manualChunks(id) {
// 					if (id.includes("node_modules")) {
// 						return id
// 							.toString()
// 							.split("node_modules/")[1]
// 							.split("/")[0]
// 							.toString();
// 					}
// 				},
				
// 			},
// 		},
// 	},
// });


