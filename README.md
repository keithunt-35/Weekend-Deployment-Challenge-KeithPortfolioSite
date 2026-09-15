# Keith Tugume — Personal Portfolio

> Personal portfolio and dev blog for Keith Tugume — Software Engineering student at Makerere University, building at the intersection of Web3, IoT, and machine learning in Kampala, Uganda.

**Live site → [keiths-site-gamma.vercel.app](https://main.d1h2b4dsagja3r.amplifyapp.com/)**

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Next.js 14](https://nextjs.org) (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 |
| Icons | [Lucide React](https://lucide.dev) |
| Fonts | Fraunces (display) · IBM Plex Mono · Inter |
| Deployment | [Vercel](https://vercel.com) |

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + SEO metadata
│   ├── page.tsx          # Homepage — composes all sections
│   └── globals.css       # Design tokens, Tailwind components
├── sections/
│   ├── Hero.tsx          # Full-screen intro with typewriter
│   ├── About.tsx         # Story, facts table, stats strip
│   ├── Skills.tsx        # Three-group skill breakdown
│   ├── Projects.tsx      # Filterable project case studies
│   ├── Timeline.tsx      # Experience & education
│   ├── Achievements.tsx  # Awards, numbers, testimonials
│   ├── ImpossibleList.tsx# Living goals tracker with progress bar
│   └── Contact.tsx       # Validated contact form
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx    # Sticky nav with active section tracking
│   │   └── Footer.tsx    # Links + copyright
│   └── ui/
│       ├── PhotoFrame.tsx # Image with graceful missing-file fallback
│       ├── EmptyState.tsx # Empty filter state
│       └── Skeleton.tsx  # Loading skeleton components
└── data/
    └── index.ts          # Single source of truth for all site content
```

---

## Getting started

**Prerequisites:** Node.js 18+, npm 9+

```bash
# Clone
git clone https://github.com/keithunt-35/Weekend-Deployment-Challenge-KeithPortfolioSite.git
cd Weekend-Deployment-Challenge-KeithPortfolioSite

# Install
npm install

# Run dev server
npm run dev
# → http://localhost:3000
```

```bash
# Production build
npm run build
npm start
```

---

## Adding your photos

Two image slots are wired up and waiting. Drop files into `public/` — no code changes needed.

| Slot | File | Crop | Where it appears |
|---|---|---|---|
| Hero headshot | `public/keith.jpg` | Portrait 4:5, face near top | Right of headline on desktop |
| About photo | `public/keith-about.jpg` | Landscape 4:3, candid | Above the facts table |

Both render greyscale by default and shift to full colour on hover. While either file is missing a dashed placeholder is shown instead — nothing breaks.

---

## Updating content

All site content lives in one file: **`src/data/index.ts`**

| Export | What it controls |
|---|---|
| `siteConfig` | Name, tagline, pitch, social links |
| `skillGroups` | All three skill columns |
| `projects` | Project case studies (title, stack, problem, solution, outcome, links) |
| `timeline` | Experience and education entries |
| `achievements` | Awards and social proof rows |
| `impossibleList` | Goal categories and items |
| `stats` | Numbers in the About stats strip |

Edit that file and the whole site updates — no hunting through components.

---

## Design system

The site uses a warm editorial palette with a strict 4 px / 8 px spacing grid.

| Token | Value | Usage |
|---|---|---|
| `paper` | `#f4f0e6` | Page background |
| `ink` | `#12110f` | Primary text, borders |
| `mute` | `#6b655c` | Secondary text, labels |
| `line` | `#d8d1c3` | Dividers |
| `clay` | `#c45c26` | Accent — labels, hover states, CTAs |

Tokens are defined as raw RGB channels in `globals.css` so Tailwind's opacity modifiers (`text-ink/70`, `bg-paper/50`) work correctly throughout.

---

## Deployment

The repo is connected to Vercel. Every push to `main` triggers a production deploy automatically.

To deploy your own fork:

```bash
npm i -g vercel
vercel
```

Vercel auto-detects Next.js — no configuration file needed.

---

## What's not committed

`.next/` (build output) and `node_modules/` are excluded via `.gitignore`. Never commit them — `.next/` contains auto-generated encryption keys that will trigger secret scanners.

---

## Roadmap

- [ ] Wire contact form to a real email API (Resend / Formspree)
- [ ] Add `/blog` route with MDX post support
- [ ] Add `/projects/[slug]` individual case study pages
- [ ] Dark mode toggle

---

## Author

**Keith Tugume** — BSc Software Engineering, Makerere University  
Kampala, Uganda 🇺🇬

[GitHub](https://github.com/keithunt-35) · [X / Twitter](https://x.com/keithunt_35) · [keithunt35@duck.com](mailto:keithunt35@duck.com)
