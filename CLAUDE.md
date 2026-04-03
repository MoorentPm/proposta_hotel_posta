# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, usually localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```

**Important:** `tailwind.config.js` changes require a full server restart — HMR does not pick them up. After changing fonts or theme tokens, kill the existing Vite process and run `npm run dev` again.

## Stack

- **React 18** + **Vite 5** — no routing, single-page scrolling layout
- **Tailwind CSS 3** — all styling via utility classes, custom design tokens in `tailwind.config.js`
- **Framer Motion** — scroll-triggered entrance animations (`Reveal` component) and nav transitions
- No state management, no backend, no tests

## Architecture

This is a single-page sales proposal for Hotel Terme Posta (Abano Terme), built as a linear scroll experience.

**Entry point:** `src/App.jsx` composes all sections in order — edit section order there.

**Section structure** (`src/sections/`): each file is a standalone React component for one scroll section. Current order in `App.jsx`:
`Hero → Vision → Philosophy → Metamorfosi → Proposte → Trasparenza → SitoWeb → Servizi → ServiziExtra → Passi → Contatti`

**Shared components** (`src/components/`):
- `Nav.jsx` — fixed navbar, transparent over hero, becomes frosted glass on scroll (threshold: 60px). Animates bg, text color, and button style based on `scrolled` state.
- `Hero.jsx` — full-screen parallax hero using local image `/assets/images/hero-hotel-posta.webp`
- `Reveal.jsx` — scroll-triggered entrance animation wrapper (framer-motion `useInView`). Props: `delay`, `direction` (`up`/`left`/`right`/`none`), `once`, `as`.
- `Footer.jsx`, `ConfidentialBar.jsx` (unused, kept for reference)

## Design Tokens

All colors and fonts are defined in `tailwind.config.js` under `theme.extend`. Font families:
- `font-headline` / `font-serif` — display/title font (currently **Italiana**)
- `font-body` / `font-sans` / `font-label` — UI/body font (currently **Jost**)

Google Fonts are loaded in `index.html`. **When changing fonts, update both `index.html` (the `<link>`) and `tailwind.config.js` (the font family names), then restart the dev server.**

Key colors: `secondary` (#6d5a52) is the warm brown accent used throughout. `primary` (#000) is used for dark backgrounds (e.g. Contatti section).

## Images

- Hero: `/assets/images/hero-hotel-posta.webp` (local)
- All other images: Google Lh3 URLs (AI-generated placeholders). The Metamorfosi before/after images are placeholders — replace with real hotel photos when available.

## Brand

- Company name is always written **Moorent Pm** (never "MOORENT PM" or "Moorent PM")
- Target client: Hotel Terme Posta, Abano Terme (Triveneto)
- Commission model: 10% (Percorso Pilota, 5 rooms) or 8% (Partnership Completa, full portfolio), always net of OTA fees and cleaning costs
