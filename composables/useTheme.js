// composables/useTheme.js
// Global theme state shared across every component that calls useTheme().
const theme = ref('light')

export function useTheme() {
  const setTheme = (value) => {
    theme.value = value
    if (import.meta.client) {
      localStorage.setItem('theme', value)
      document.documentElement.setAttribute('data-theme', value)
    }
  }

  const toggleTheme = () => setTheme(theme.value === 'light' ? 'dark' : 'light')

  // Call once on app mount (see app.vue) to restore saved preference.
  const initTheme = () => {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme')
      const preferred = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      setTheme(preferred)
    }
  }

  return { theme, setTheme, toggleTheme, initTheme }
}
