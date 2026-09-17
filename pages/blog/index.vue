<script setup>
import { posts } from '~/data/posts';

useSeoMeta({
	title: 'Blog — Romeoxii',
	description: 'Notes by Romeoxii on web development, Vue, Nuxt, and shipping side projects.',
	ogTitle: 'Blog — Romeoxii',
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="mx-auto max-w-220 px-6 pb-35 pt-18">
		<h1 class="mb-2 text-3xl font-extrabold font-mono">// blog</h1>
		<p class="mb-6 text-sm text-(--muted) font-mono" aria-live="polite">
			$ ls posts/ — {{ posts.length }} {{ posts.length === 1 ? 'entry' : 'entries' }}
		</p>

		<div class="grid gap-5 sm:grid-cols-2">
			<NuxtLink
				v-for="(post, i) in posts"
				:key="post.slug"
				:to="`/blog/${post.slug}`"
				class="card-focus block rounded-2xl border-2 border-(--border) bg-(--card) p-5 text-(--ink) no-underline shadow-[4px_4px_0_var(--border)] transition-transform duration-200 ease-out hover:-translate-y-0.75 hover:shadow-[6px_8px_0_var(--yellow)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none"
				:style="{ '--accent': 'var(--yellow)' }"
			>
				<div class="mb-2 font-mono text-xs text-(--muted)">{{ post.date }}</div>
				<h2 class="m-0 text-lg font-bold">{{ post.title }}</h2>
				<p class="mb-0 mt-2 text-sm text-(--muted)">{{ post.excerpt }}</p>
				<div class="mt-3 font-mono text-xs text-(--pink)">read →</div>
			</NuxtLink>
		</div>
	</main>
</template>
