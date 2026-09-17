import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: {
		plugins: [tailwindcss()],
	},
	app: {
		pageTransition: { name: "page", mode: "out-in" },
		head: {
			htmlAttrs: { lang: "en" },
			title: "Romeoxii — Web Developer",
			// Runs before paint so the saved theme applies without flashing.
			// Mirrors the logic in composables/useTheme.js (paper/dark only).
			script: [
				{
					innerHTML:
						"(function(){try{var t=localStorage.getItem('theme');if(t!=='paper'&&t!=='dark'){t='paper'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})()",
				},
			],
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{
					name: "description",
					content:
						"Romeoxii — software developer building sharp, fast web experiences with Vue, Nuxt, Tailwind CSS and Supabase.",
				},
				{ name: "theme-color", content: "#f5efe3" },
				{ property: "og:type", content: "website" },
				{ property: "og:title", content: "Romeoxii — Web Developer" },
				{
					property: "og:description",
					content:
						"Software developer who likes small, sharp tools over big frameworks. Vue / Nuxt / Tailwind / Supabase.",
				},
				{ property: "og:image", content: "/Images/og.png" },
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:title", content: "Romeoxii — Web Developer" },
				{
					name: "twitter:description",
					content:
						"Software developer who likes small, sharp tools over big frameworks.",
				},
				{ name: "twitter:image", content: "/Images/og.png" },
			],
			link: [
				{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
				},
			],
		},
	},
});
