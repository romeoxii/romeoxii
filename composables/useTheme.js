const THEMES = ['paper', 'dark'];
// Paper is the primary theme. Cycles paper -> dark.
const theme = ref('paper');

export function useTheme() {
	const setTheme = (value) => {
		if (!THEMES.includes(value)) return;
		theme.value = value;
		if (import.meta.client) {
			localStorage.setItem('theme', value);
			document.documentElement.setAttribute('data-theme', value);
		}
	};

	const toggleTheme = () => setTheme(THEMES[(THEMES.indexOf(theme.value) + 1) % THEMES.length]);

	const initTheme = () => {
		if (import.meta.client) {
			const saved = localStorage.getItem('theme');
			setTheme(THEMES.includes(saved) ? saved : 'paper');
		}
	};

	return { theme, setTheme, toggleTheme, initTheme };
}
