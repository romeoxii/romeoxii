<script setup>
import { uses } from '~/data/uses';

useSeoMeta({
	title: 'Uses — Romeoxii',
	description:
		'The tools Romeoxii uses: Vue, Nuxt, Tailwind CSS, Supabase, Bun, Vercel.',
	ogTitle: 'Uses — Romeoxii',
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
</script>

<template>
	<main id="main-content" class="w-full mx-auto max-w-3xl px-6 pb-35 pt-18">
		<h1 class="mb-5 text-3xl font-extrabold font-mono">// uses</h1>

		<div
			class="max-w-160 overflow-hidden rounded-2xl border-2 border-(--border) bg-[#14142B] shadow-[4px_4px_0_var(--border)]"
		>
			<div class="flex gap-1.5 bg-black/15 px-3.5 py-2.5">
				<span class="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
				<span class="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
			</div>
			<div class="px-5 py-5 text-sm leading-relaxed text-[#E6E6F5] font-mono">
				<div class="text-(--mint)">$ cat uses.md</div>
				<div class="mb-4 text-sm">Small, sharp tools over big frameworks.</div>
				<div v-for="group in uses" :key="group.section" class="mb-3 last:mb-0">
					<div class="text-(--mint)">$ ls {{ group.section }}/</div>
					<div class="mt-1.5 flex flex-wrap gap-2">
						<span v-for="item in group.items" :key="item" class="text-(--yellow)">{{
							item
						}}</span>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>
