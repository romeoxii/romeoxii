<script setup>
const { initTheme } = useTheme();
onMounted(() => initTheme());
</script>

<template>
	<div class="min-h-screen bg-(--bg) text-(--ink) transition-colors duration-200">
		<a href="#main-content" class="skip-link">skip to content →</a>
		<FloatingNav />
		<NuxtPage />
		<SiteFooter />
	</div>
</template>
