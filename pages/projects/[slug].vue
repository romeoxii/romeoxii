<script setup>
import { projects } from '~/data/projects';

// Runs on server + client before render. Unknown slugs → Nuxt 404 → error.vue.
definePageMeta({
	validate: (route) => projects.some((p) => p.slug === route.params.slug)
});

const route = useRoute();
const project = projects.find((p) => p.slug === route.params.slug);

if (!project) {
	throw createError({ statusCode: 404, statusMessage: 'Project not found', fatal: true });
}

const index = projects.indexOf(project);
const prev = projects[(index - 1 + projects.length) % projects.length];
const next = projects[(index + 1) % projects.length];

useSeoMeta({
	title: `${project.name} — Romeoxii`,
	description: project.desc,
	ogTitle: `${project.name} — Romeoxii`,
	ogDescription: project.desc,
	ogImage: project.image || '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="mx-auto w-full max-w-3xl px-6 pb-35 pt-18">
		<NuxtLink
			to="/projects"
			class="mb-5 inline-block font-mono text-sm text-(--muted) no-underline hover:text-(--ink) hover:underline"
		>
			← all projects
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
				<div class="text-(--mint)">$ cat {{ project.slug }}.md</div>
				<h1 class="mb-3 mt-1 text-2xl font-extrabold text-white">{{ project.name }}</h1>
				<p class="mb-4 text-sm">{{ project.longDesc || project.desc }}</p>
				<div class="text-(--mint)">$ ls stack/</div>
				<div class="mt-1.5 flex flex-wrap gap-2">
					<span v-for="tag in project.tags" :key="tag" class="text-(--yellow)">{{ tag }}</span>
				</div>
			</div>
		</div>

		<div
			v-if="project.image"
			class="mt-5 overflow-hidden rounded-2xl border-2 border-(--border) shadow-[4px_4px_0_var(--border)]"
		>
			<img :src="project.image" :alt="`${project.name} preview`" class="w-full object-cover" />
		</div>

		<div class="mt-5 flex flex-wrap gap-3">
			<a
				:href="project.link"
				target="_blank"
				rel="noopener"
				class="rounded-xl border-2 border-(--border) bg-(--ink) px-4 py-2 font-mono text-sm text-(--bg) no-underline shadow-[4px_4px_0_var(--border)] transition-transform duration-150 hover:-translate-y-0.5"
				:style="{ background: `var(--${project.color})`, color: '#14142B' }"
			>
				visit live ↗
			</a>
			<a
				v-if="project.repo"
				:href="project.repo"
				target="_blank"
				rel="noopener"
				class="rounded-xl border-2 border-(--border) bg-(--card) px-4 py-2 font-mono text-sm text-(--ink) no-underline shadow-[4px_4px_0_var(--border)] transition-transform duration-150 hover:-translate-y-0.5"
			>
				source ↗
			</a>
		</div>

		<div class="mt-8 flex items-center justify-between gap-3 font-mono text-sm">
			<NuxtLink
				:to="`/projects/${prev.slug}`"
				class="text-(--muted) no-underline hover:text-(--ink) hover:underline"
			>
				← {{ prev.name }}
			</NuxtLink>
			<NuxtLink
				:to="`/projects/${next.slug}`"
				class="text-(--muted) no-underline hover:text-(--ink) hover:underline"
			>
				{{ next.name }} →
			</NuxtLink>
		</div>
	</main>
</template>
