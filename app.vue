<script setup>
const { initTheme } = useTheme();
onMounted(() => initTheme());
</script>

<template>
	<div class="min-h-screen bg-(--bg) text-(--ink) transition-colors duration-200">
		<FloatingNav />
		<NuxtPage />
	</div>
</template>
