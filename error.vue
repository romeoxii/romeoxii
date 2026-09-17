<script setup>
const props = defineProps({
	error: { type: Object, default: () => ({}) }
});

const statusCode = computed(() => props.error?.statusCode || 404);
const message = computed(
	() => props.error?.statusMessage || (statusCode.value === 404 ? 'page not found' : 'something broke')
);

useHead({ title: `${statusCode.value} — Romeoxii` });

function goHome() {
	clearError({ redirect: '/' });
}
</script>

<template>
	<div class="min-h-screen bg-(--bg) text-(--ink)">
		<main id="main-content" class="mx-auto w-full max-w-3xl px-6 pb-35 pt-18">
			<h1 class="sr-only">Error {{ statusCode }}</h1>
			<div
				class="overflow-hidden rounded-2xl border-2 border-(--border) bg-[#14142B] shadow-[4px_4px_0_var(--border)]"
			>
				<div class="flex gap-1.5 bg-black/15 px-3.5 py-2.5">
					<span class="h-2.5 w-2.5 rounded-full bg-[#FF5F56]" />
					<span class="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
					<span class="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
				</div>
				<div class="px-5 py-5 font-mono text-sm leading-relaxed text-[#E6E6F5]">
					<div class="text-(--mint)">$ ./portfolio --run {{ $route.path }}</div>
					<div class="mb-3 text-(--pink)">
						error {{ statusCode }}: {{ message }}
					</div>
					<div class="text-(--mint)">$ ls routes/</div>
					<div class="mb-1 text-(--yellow)">/ &nbsp; /projects &nbsp; /about</div>
				</div>
			</div>

			<div class="mt-5 flex flex-wrap gap-3">
				<button
					class="rounded-xl border-2 border-(--border) bg-(--yellow) px-4 py-2 font-mono text-sm text-[#14142B] shadow-[4px_4px_0_var(--border)] cursor-pointer transition-transform duration-150 hover:-translate-y-0.5"
					@click="goHome"
				>
					← home
				</button>
				<NuxtLink
					to="/projects"
					class="rounded-xl border-2 border-(--border) bg-(--card) px-4 py-2 font-mono text-sm text-(--ink) no-underline shadow-[4px_4px_0_var(--border)] transition-transform duration-150 hover:-translate-y-0.5"
				>
					all projects →
				</NuxtLink>
			</div>
		</main>
	</div>
</template>
