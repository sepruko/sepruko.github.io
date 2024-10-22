import solidJS from "@astrojs/solid-js";
import type { AstroUserConfig } from "astro/config";
import unoCSS from "unocss/astro";

export default {
	build: {
		assets: "resources",
		client: "resources-client",
		inlineStylesheets: "never",
		serverEntry: "server.mjs",
		server: "resources-server",
	},
	experimental: {
		contentIntellisense: true,
		directRenderScript: true,
		env: {
			schema: {},
			validateSecrets: true,
		},
	},
	i18n: {
		defaultLocale: "en-US",
		fallback: {
			en: "en-US",
		},
		locales: ["en-US", "en"],
	},
	integrations: [solidJS({ devtools: true }), unoCSS()],
	markdown: {
		shikiConfig: {
			defaultColor: false,
			themes: {
				dark: "github-dark",
				light: "github-light",
			},
			wrap: false,
		},
	},
	outDir: "./build/",
	output: "static",
	prefetch: true,
	redirects: {
		"/home": "/",
	},
	scopedStyleStrategy: "where",
	security: {
		checkOrigin: true,
	},
	server: {
		open: true,
	},
	site: "https://sepruko.dev/",
	vite: {
		appType: "mpa",
	},
} satisfies AstroUserConfig;
