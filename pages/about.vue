<script setup>
import { status } from '~/data/status';

const skills = ['Vue', 'Nuxt', 'Tailwind CSS', 'TypeScript', 'Python', 'FastAPI', 'Supabase'];

useSeoMeta({
	title: 'About — Romeoxii',
	description:
		'About Romeoxii: web developer into Vue, Nuxt, Tailwind CSS and Supabase. Currently practicing Python and PHP for backend development.',
	ogTitle: 'About — Romeoxii',
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="w-full mx-auto max-w-3xl px-6 pb-35 pt-18">
		<h1 class="mb-5 text-3xl font-extrabold font-mono">// about</h1>

		<div
			class="terminal max-w-160 overflow-hidden rounded-2xl border-2 border-(--border) bg-[#14142B] shadow-[4px_4px_0_var(--border)]"
		>
			<div class="flex gap-1.5 bg-black/15 px-3.5 py-2.5">
				<span class="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
			</div>
			<div class="px-5 py-5 text-sm leading-relaxed text-[#E6E6F5] font-mono">
				<div class="text-(--mint)">$ whoami</div>
				<div class="mb-3">Romeoxii</div>
				<div class="text-(--mint)">$ cat about.md</div>
				<div class="mb-3 text-sm">
					Software developer who likes small, sharp tools over big frameworks. Currently
					making things faster than they need to be and occasionally shipping them.
					<br />
					<br />
					An introvert by nature, web developer by passion. Eager to build things that
					speak louder than I do, using Vue.js, Tailwind CSS, and lately, Nuxt.js.
					<br />
					<br />
					Thinking of picking up Python for the backend of a project I'm working on. I'm
					not a big fan of JavaScript for backend, didn't complete my Express.js project.
					<br />
					My happy place? A quiet dark room, all the gospel albums I can lay my hands on,
					and a UI that just feels right. I love clean design, smooth flows, and websites
					that don't need instructions. When I'm not writing code, I'm either watching a
					new anime, reading a manhwa, reading a book (just picked this up out of
					nowhere), or just enjoying some quiet time offline (sleeping). Language, tools
					or frameworks I'm familiar with I don't really have a stack per se but maybe
					that'll be revealed when I dive deeper into this niche or get more curious about
					how things work, but for now my go-to for front-end is Vue.js / Nuxt.js, Tailwind
					CSS and Supabase.
				</div>
				<div class="text-(--mint)">$ ls skills/</div>
				<div class="mb-3 mt-1.5 flex flex-wrap gap-2">
					<span v-for="s in skills" :key="s" class="text-(--yellow)">{{ s }}</span>
				</div>
				<div class="text-(--mint)">$ cat now.md</div>
				<div class="text-sm">{{ status.text }}</div>
			</div>
		</div>

		<div class="mt-5 rounded-2xl border-2 border-(--border) bg-(--card) p-5 shadow-[4px_4px_0_var(--border)]">
			<div class="mb-3 text-xs text-(--muted) font-mono">// find me</div>
			<div class="flex flex-wrap gap-4">
			<a
				href="https://github.com/romeoxii"
				target="_blank"
				class="text-[14px] text-(--ink) no-underline hover:underline flex items-end gap-1"
			>
				<span class="text-(--ink)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1.5em"
						height="1.5em"
						viewBox="0 0 24 24"
					>
						<path d="M0 0h24v24H0z" fill="none" />
						<path
							fill="currentColor"
							d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475c0-.237-.012-1.025-.012-1.862c-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025a2.137 2.137 0 0 0 2.912.825a2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688a3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65a3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75c0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247"
						/>
					</svg>
				</span>
			github
		</a>
				<a
					href="https://x.com/xii_romeo"
					target="_blank"
					rel="noopener"
					class="text-[14px] text-(--ink) no-underline hover:underline flex items-end gap-1"
				>
					<span class="text-(--ink)">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.3em"
							height="1.3em"
							viewBox="0 0 24 24"
						>
							<path
								fill="currentColor"
								d="M18.244 2.25h3.308l-7.227 8.26l8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
							/>
						</svg>
					</span>
					twitter
				</a>
				<NuxtLink
					to="/uses"
					class="text-[14px] text-(--ink) no-underline hover:underline flex items-end gap-1"
				>
					uses →
				</NuxtLink>
			</div>
		</div>
	</main>
</template>
