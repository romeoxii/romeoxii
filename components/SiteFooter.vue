<script setup>
const year = new Date().getFullYear();
</script>

<template>
	<footer class="mx-auto w-full max-w-220 px-6 pb-10">
		<div
			class="rounded-2xl border-2 border-(--border) bg-(--card) p-5 text-center shadow-[4px_4px_0_var(--border)]"
		>
			<div class="text-sm text-(--muted) font-mono">
				© {{ year }} Romeoxii — built with Nuxt + Tailwind.
			</div>
		</div>
	</footer>
</template>
