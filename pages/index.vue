<script setup>
import { projects } from '~/data/projects';
import { status } from '~/data/status';

const name = "I'm Romeo";
const tagline = 'I build things for the web that mostly work on the first try.';
const bio =
	'Software developer who likes small, sharp tools over big frameworks. Currently making things faster than they need to be and occasionally shipping them.';

const blink = ref(true);
let interval;
onMounted(() => {
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
	interval = setInterval(() => (blink.value = !blink.value), 600);
});
onUnmounted(() => clearInterval(interval));

const featured = projects.slice(0, 2);

useSeoMeta({
	title: 'Romeoxii — Web Developer',
	description:
		'I build things for the web that mostly work on the first try. Vue, Nuxt, Tailwind CSS and Supabase.',
	ogTitle: 'Romeoxii — Web Developer',
	ogDescription:
		'Software developer who likes small, sharp tools over big frameworks.',
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="mx-auto max-w-220 px-6 pb-35 pt-18">
		<div class="mb-2.5 text-sm text-(--muted) font-mono">$ ./portfolio --run</div>
		<h1
			class="mb-4 font-extrabold font-mono leading-[1.1]"
			style="font-size: clamp(32px, 6vw, 52px)"
		>
			hi, {{ name }}.
			<span class="text-(--pink)" :style="{ opacity: blink ? 1 : 0 }">_</span>
		</h1>
		<p class="mb-10 max-w-130 text-base text-(--muted)">
			{{ tagline }}
		</p>

		<div class="grid gap-5 md:grid-cols-[1.4fr_1fr]">
			<div>
				<div class="mb-3 text-xs text-(--muted) font-mono">// recent projects</div>
				<div class="space-y-4">
					<ProjectCard
						v-for="(p, i) in featured"
						:key="p.name"
						:project="p"
						:index="i"
						class="animate-rise"
						:style="{ '--d': `${i * 70}ms` }"
					/>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<div class="-mb-1 text-xs text-(--muted) font-mono">// about</div>
				<div
					class="rounded-2xl border-2 border-(--border) bg-(--blue) p-5 text-[#14142b] shadow-[4px_4px_0_var(--border)]"
				>
					<p class="m-0 text-sm">{{ bio.slice(0, 90) }}…</p>
					<NuxtLink
						to="/about"
						class="mt-3 inline-block rounded-lg bg-[#14142b] px-3 py-1.5 text-xs font-mono text-white no-underline hover:text-(--ink) hover:bg-(--bg) hover:shadow-[4px_4px_0_var(--border)] transition-all duration-200 ease-out"
					>
						read more →
					</NuxtLink>
				</div>

				<div
					class="rounded-2xl border-2 border-(--border) bg-(--card) p-5 shadow-[4px_4px_0_var(--border)]"
				>
					<div class="mb-1.5 text-xs font-bold text-(--mint) font-mono">● {{ status.label }}</div>
					<p class="m-0 text-sm text-(--muted)">
						{{ status.text }}
					</p>
				</div>
			</div>
		</div>
	</main>
</template>
