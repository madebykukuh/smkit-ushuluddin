# SMKIT Ushuluddin Landing Page

## Overview

Next.js 15 landing page showcasing SMKIT Ushuluddin’s identity, dual‑curriculum strengths, and registration info. Designed per DESIGN.md and FRONTEND.md: Tailwind, shadcn/ui, strict TypeScript, WCAG 2.1 AA.

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Features

- Hero, Admissions, Curriculum, Quality, Philosophy, Gallery sections (`src/components/sections`)
- Navbar, Footer, Countdown banner (`src/components/layout`)
- Reusable UI primitives (button, card, avatar, etc.) in `src/components/ui`
- Accessible loading, error & empty states for data fetches
- Responsive, mobile-first grid layout

## Design System

- Colors, spacing, typography, radius from **DESIGN.md** (CSS variables)
- No hard-coded hex, no `<img>` tags – use `next/image`
- One primary CTA per section, motion ≤ 300 ms, alt text mandatory

## Testing & Lint

```bash
npm run lint   # eslint
npm run build  # production build
```

## Deploy

Deploy to Vercel or any Node host; the repo is ready for static export.
