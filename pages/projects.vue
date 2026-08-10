<script setup>
import { projects } from '~/data/projects';
</script>

<template>
	<main class="mx-auto max-w-220 px-6 pb-35 pt-18">
		<h2 class="mb-6 text-3xl font-extrabold font-mono">// all projects</h2>
		<div class="grid gap-5 sm:grid-cols-2">
			<ProjectCard v-for="(p, i) in projects" :key="p.name" :project="p" :index="i" big />
		</div>
	</main>
</template>
