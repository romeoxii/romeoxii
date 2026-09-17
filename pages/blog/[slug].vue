<script setup>
import { posts } from '~/data/posts';

definePageMeta({
	validate: (route) => posts.some((p) => p.slug === route.params.slug)
});

const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);

if (!post) {
	throw createError({ statusCode: 404, statusMessage: 'Post not found', fatal: true });
}

const index = posts.indexOf(post);
const prev = posts[(index - 1 + posts.length) % posts.length];
const next = posts[(index + 1) % posts.length];

useSeoMeta({
	title: `${post.title} — Romeoxii`,
	description: post.excerpt,
	ogTitle: `${post.title} — Romeoxii`,
	ogDescription: post.excerpt,
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="mx-auto w-full max-w-3xl px-6 pb-35 pt-18">
		<NuxtLink
			to="/blog"
			class="mb-5 inline-block font-mono text-sm text-(--muted) no-underline hover:text-(--ink) hover:underline"
		>
			← all posts
		</NuxtLink>

		<div
			class="terminal overflow-hidden rounded-2xl border-2 border-(--border) bg-[#14142B] shadow-[4px_4px_0_var(--border)]"
		>
			<div class="flex gap-1.5 bg-black/15 px-3.5 py-2.5">
				<span class="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
			</div>
			<div class="px-5 py-5 font-mono text-sm leading-relaxed text-[#E6E6F5]">
				<div class="text-(--mint)">$ cat {{ post.slug }}.md</div>
				<h1 class="mb-1 mt-1 text-2xl font-extrabold text-white">{{ post.title }}</h1>
				<div class="mb-4 text-xs text-(--muted)">{{ post.date }}</div>
				<p v-for="(para, i) in post.body" :key="i" class="mb-3 text-sm last:mb-0">
					{{ para }}
				</p>
			</div>
		</div>

		<div
			v-if="posts.length > 1"
			class="mt-8 flex items-center justify-between gap-3 font-mono text-sm"
		>
			<NuxtLink
				:to="`/blog/${prev.slug}`"
				class="text-(--muted) no-underline hover:text-(--ink) hover:underline"
			>
				← {{ prev.title }}
			</NuxtLink>
			<NuxtLink
				:to="`/blog/${next.slug}`"
				class="text-(--muted) no-underline hover:text-(--ink) hover:underline"
			>
				{{ next.title }} →
			</NuxtLink>
		</div>
	</main>
</template>
