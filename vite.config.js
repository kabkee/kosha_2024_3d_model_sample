import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { templateCompilerOptions } from "@tresjs/core";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			...templateCompilerOptions,
		}),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
    base: './',
});
