<script setup>
import { projects } from '~/data/projects';

useSeoMeta({
	title: 'Projects — Romeoxii',
	description:
		'All projects by Romeoxii: Nucleus, AniTracker, Celine’s Treats and ApexPanel. Built with Vue, Nuxt, Tailwind CSS and Supabase.',
	ogTitle: 'Projects — Romeoxii',
	ogImage: '/Images/og.png',
	twitterCard: 'summary_large_image'
});
const query = ref('');
const activeTag = ref(null);

const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort((a, b) =>
	a.localeCompare(b)
);

const filtered = computed(() => {
	const q = query.value.trim().toLowerCase();
	return projects
		.map((p, i) => ({ ...p, _i: i }))
		.filter((p) => {
			if (activeTag.value && !p.tags.includes(activeTag.value)) return false;
			if (!q) return true;
			return [p.name, p.desc, ...p.tags].join(' ').toLowerCase().includes(q);
		});
});

function toggleTag(tag) {
	activeTag.value = activeTag.value === tag ? null : tag;
}

function clearFilters() {
	query.value = '';
	activeTag.value = null;
}
</script>

<template>
	<main id="main-content" class="mx-auto max-w-220 px-6 pb-35 pt-18">
		<h1 class="mb-2 text-3xl font-extrabold font-mono">// all projects</h1>
		<p class="mb-6 text-sm text-(--muted) font-mono" aria-live="polite">
			showing {{ filtered.length }} of {{ projects.length }}
		</p>

		<div class="mb-6 flex flex-col gap-3">
			<label class="sr-only" for="project-search">Search projects</label>
			<input
				id="project-search"
				v-model="query"
				type="search"
				placeholder="$ filter projects…"
				class="w-full rounded-xl border-2 border-(--border) bg-(--card) px-4 py-2.5 font-mono text-sm text-(--ink) placeholder:text-(--muted) shadow-[4px_4px_0_var(--border)] focus:outline-2 focus:outline-offset-2 focus:outline-(--ink)"
			/>

			<div class="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by tag">
				<button
					class="rounded-full border-2 border-(--border) px-3 py-1 text-xs font-semibold font-mono cursor-pointer transition-all duration-150"
					:class="
						activeTag === null
							? 'bg-(--ink) text-(--bg)'
							: 'bg-(--card) text-(--ink) hover:-translate-y-0.5'
					"
					@click="toggleTag(activeTag)"
					:aria-pressed="activeTag === null"
				>
					all
				</button>
				<button
					v-for="tag in allTags"
					:key="tag"
					class="rounded-full border-2 border-(--border) px-3 py-1 text-xs font-semibold font-mono cursor-pointer transition-all duration-150"
					:class="
						activeTag === tag
							? 'bg-(--ink) text-(--bg)'
							: 'bg-(--card) text-(--ink) hover:-translate-y-0.5'
					"
					:aria-pressed="activeTag === tag"
					@click="toggleTag(tag)"
				>
					{{ tag }}
				</button>
				<button
					v-if="query || activeTag"
					class="ml-1 text-xs font-mono text-(--muted) underline cursor-pointer hover:text-(--ink)"
					@click="clearFilters"
				>
					clear ✕
				</button>
			</div>
		</div>

		<div v-if="filtered.length" class="grid gap-5 sm:grid-cols-2">
			<ProjectCard
				v-for="(p, i) in filtered"
				:key="p.name"
				:project="p"
				:index="p._i"
				big
				class="animate-rise"
				:style="{ '--d': `${Math.min(i, 8) * 60}ms` }"
			/>
		</div>

		<div
			v-else
			class="rounded-2xl border-2 border-(--border) bg-(--card) p-8 text-center shadow-[4px_4px_0_var(--border)]"
		>
			<p class="m-0 font-mono text-sm text-(--muted)">$ no matches found — try a different query.</p>
			<button
				class="mt-4 rounded-lg bg-(--ink) px-4 py-2 font-mono text-xs text-(--bg) cursor-pointer"
				@click="clearFilters"
			>
				reset filters →
			</button>
		</div>
	</main>
</template>
