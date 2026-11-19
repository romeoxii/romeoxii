<script setup>
const { theme, toggleTheme } = useTheme();
const route = useRoute();

const links = [
	{ to: '/', label: 'home', icon: 'terminal' },
	{ to: '/projects', label: 'projects', icon: 'folder' },
	{ to: '/uses', label: 'uses', icon: 'box' },
	{ to: '/about', label: 'about', icon: 'user' }
];

// Exact match for home, prefix match for sections (keeps pill active on /projects/<slug>).
function isActive(to) {
	if (to === '/') return route.path === '/';
	return route.path === to || route.path.startsWith(to + '/');
}
</script>

<template>
	<nav
		aria-label="Primary"
		class="fixed left-1/2 top-4.75 z-50 flex max-w-[95vw] -translate-x-1/2 items-center gap-0.5 overflow-x-auto rounded-full border-2 border-(--border) bg-(--card) p-1.5 shadow-[4px_4px_0_var(--border)] sm:gap-1"
		:style="{ top: 'calc(env(safe-area-inset-top, 0px) + 19px)' }"
	>
		<NuxtLink
			v-for="link in links"
			:key="link.to"
			:to="link.to"
			:aria-current="isActive(link.to) ? 'page' : undefined"
			class="rounded-full px-2.5 py-1.5 text-xs font-semibold no-underline transition-all duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ink) sm:px-3.5 sm:py-2 sm:text-sm"
			:class="isActive(link.to) ? 'bg-(--ink) text-(--bg)' : 'text-(--ink)'"
		>
			{{ link.label }}
		</NuxtLink>

		<span class="mx-1 h-5 w-px bg-(--muted)" />

		<button
			class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-0 bg-(--yellow) text-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ink)"
			@click="toggleTheme"
			aria-label="Toggle theme"
		>
			<span v-if="theme === 'paper'">🌙</span>
			<span v-else>📄</span>
		</button>
	</nav>
</template>