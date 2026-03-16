# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (hot reload)
npm run build      # Production build → dist/
npm run lint       # ESLint (flat config, ESLint 9)
npm run preview    # Preview production build locally
npx wrangler deploy  # Deploy to Cloudflare Workers (requires auth)
```

## Architecture

**React 19 + Vite single-page portfolio site** deployed on Cloudflare Workers.

### Data flow
All site content lives in `src/data/content.js` — personal info, timeline, projects, education, skills, nav links. Components import and render this data directly. To update site content, edit `content.js` rather than individual components.

### Theming
Six CSS custom properties in `src/index.css` (`:root` and `:root.dark`) define the entire color palette. Tailwind maps these via `tailwind.config.js`. `cream` and `accent` use space-separated RGB triplets for Tailwind opacity modifier support (e.g. `accent/20`); the others use direct hex values. Dark mode is class-based, toggled in `Navbar.jsx` and persisted to `localStorage.theme`.

Fonts (Inter, Playfair Display) are self-hosted as woff2 in `public/fonts/` with `@font-face` declarations in `index.css`.

### Cloudflare Workers
`src/worker.js` is a middleware that intercepts all requests (via `run_worker_first = true` in `wrangler.toml`), fetches the static asset from the `ASSETS` binding, and injects security headers (CSP, HSTS, X-Frame-Options, etc.) before returning the response.

### Animations
Components use Framer Motion throughout — staggered reveals, scroll-based triggers via `useInView`, and custom blob-morph keyframes in CSS.

## Branching & Deployment

- `dev` — development/preview branch
- `main` — production; deploys to trishantalukdar.com via `npx wrangler deploy`
- CI runs on PR to `main` and push to `dev` (`.github/workflows/ci.yml`)
