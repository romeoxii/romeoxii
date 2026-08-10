<script setup>
const { theme, toggleTheme } = useTheme();
const route = useRoute();

const links = [
	{ to: '/', label: 'home', icon: 'terminal' },
	{ to: '/projects', label: 'projects', icon: 'folder' },
	{ to: '/about', label: 'about', icon: 'user' }
];
</script>

<template>
	<nav
		class="fixed left-1/2 top-4.75 z-50 flex -translate-x-1/2 items-center gap-1 rounded-full border-2 border-(--border) bg-(--card) p-1.5 shadow-[4px_4px_0_var(--border)]"
	>
		<NuxtLink
			v-for="link in links"
			:key="link.to"
			:to="link.to"
			class="rounded-full px-3.5 py-2 text-sm font-semibold no-underline transition-all duration-150 ease-out"
			:class="route.path === link.to ? 'bg-(--ink) text-(--bg)' : 'text-(--ink)'"
		>
			{{ link.label }}
		</NuxtLink>

		<span class="mx-1 h-5 w-px bg-(--muted)" />

		<button
			class="flex h-8 w-8 items-center justify-center rounded-full border-0 bg-(--yellow) text-sm cursor-pointer"
			@click="toggleTheme"
			aria-label="Toggle theme"
		>
			<span v-if="theme === 'light'">🌙</span>
			<span v-else>☀️</span>
		</button>
	</nav>
</template>
