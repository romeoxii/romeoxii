# Romeoxii — Portfolio

Personal portfolio built with Nuxt 3, Vue 3, and Tailwind CSS v4.
Neo-brutalist cards + dev-terminal aesthetic, light/dark theme.

## Setup

    bun install

## Dev server

    bun run dev

Then open http://localhost:3000

## Build / preview

    bun run build
    bun run preview

## Customize content

- `data/projects.js` — projects (`slug`, `longDesc`, `tags`, `color`, `link`, optional `repo`/`image`)
- `data/status.js` — the `● currently` line on home + `now.md` on about
- `data/posts.js` — blog posts
- `data/uses.js` — uses page
- `pages/index.vue` — `name` / `tagline` / `bio`
- `pages/about.vue` — bio copy, skills, email + social links
- `assets/css/main.css` — theme colors (`--bg`, `--ink`, `--muted`, accents)

## Deploy (Vercel)

1. Import the `romeoxii/` directory as the project root.
2. Framework preset: Nuxt.js. Build command: `bun run build`.
3. Replace `YOUR_DOMAIN` in `public/robots.txt` and `public/sitemap.xml`
   with the production domain.
