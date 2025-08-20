import { fileURLToPath, URL } from "node:url";
import Sitemap from "vite-plugin-sitemap";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueDevTools(),
		Sitemap({
			hostname: "http://www.sms.ngo",
			dynamicRoutes: ["/", "/about", "/contact"],
		}),
	],
	build: {
		manifest: "mainfest.json",
		sourcemap: true,
		minify: "terser",
		cssMinify: "esbuild",
		assetsDir: "lib",
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
