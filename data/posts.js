export const posts = [
	{
		slug: 'building-this-portfolio',
		title: 'How I built this portfolio',
		date: '2026-09-17',
		excerpt:
			'Nuxt 3, Tailwind v4, and a terminal-inspired design — plus the iteration log from placeholder to shipped.',
		body: [
			'This site is a Nuxt 3 portfolio styled like a developer terminal crossed with neo-brutalism: hard shadows, saturated accents, and JetBrains Mono prompts everywhere.',
			'The stack is deliberately small. Vue and Nuxt for pages and routing, Tailwind CSS v4 for styling via CSS variables, and Supabase where a backend is needed. Bun runs the toolchain and Vercel hosts it.',
			'All content lives in data files; projects, status, skills, uses, and these posts, so updating the site rarely means touching components.',
			'Details I care about: a theme toggle persisted to localStorage with a no-flash inline script, page transitions that respect prefers-reduced-motion, project detail pages with prev/next navigation, and per-page SEO meta.',
			'Next up: real project screenshots and more posts. This page itself is the proof the blog pipeline works.'
		]
	}
];
