<script setup>
const props = defineProps({
	project: { type: Object, required: true },
	index: { type: Number, default: 0 },
	big: { type: Boolean, default: false }
});

const rotations = [-3, 2, -1.5, 3, -2.5, 1.5];
const rotation = rotations[props.index % rotations.length];
</script>

<template>
	<a
		:href="project.link"
		class="block rounded-2xl border-2 border-(--border) bg-(--card) p-5 text-(--ink) no-underline shadow-[4px_4px_0_var(--border)] transition-transform duration-200 ease-out hover:-translate-y-0.75 hover:rotate-0 hover:shadow-[6px_8px_0_var(--accent)]"
		:class="big ? 'p-6' : 'p-5'"
		:style="{
			'--rotate': rotation + 'deg',
			'--accent': `var(--${project.color})`
		}"
	>
		<div class="flex items-start justify-between">
			<h3 class="m-0 text-base font-bold" :class="big ? 'text-xl' : ''">
				{{ project.name }}
			</h3>
			<span class="text-base">↗</span>
		</div>
		<p class="mb-3 mt-2 text-sm text-(--muted)">
			{{ project.desc }}
		</p>
		<div class="flex flex-wrap gap-1.5">
			<span
				v-for="tag in project.tags"
				:key="tag"
				class="rounded-full border-2 border-(--border) px-2 py-0.75 text-[11px] font-semibold text-[#14142B]"
				:style="{ background: `var(--${project.color})` }"
			>
				{{ tag }}
			</span>
		</div>
	</a>
</template>
