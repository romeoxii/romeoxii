<script setup>
const { initTheme } = useTheme();
onMounted(() => initTheme());
</script>

<template>
	<div class="min-h-screen bg-(--bg) text-(--ink) transition-colors duration-200 flex flex-col">
		<a href="#main-content" class="skip-link">skip to content →</a>
		<FloatingNav />
		<NuxtPage class="flex-1" />
		<SiteFooter />
	</div>
</template>