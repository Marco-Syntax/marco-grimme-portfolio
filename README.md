# Marco Grimme — Portfolio

Premium portfolio website for **Marco Grimme**, Mobile App Developer based in Göttingen, Deutschland. Built with a focus on motion dramaturgy and scroll-driven storytelling, directly inspired by the design philosophy of [anime.js](https://animejs.com/).

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0055?logo=framer)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, TypeScript) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme` block, no config file) |
| Animation | [Framer Motion 12](https://www.framer.com/motion/) |
| Fonts | Space Grotesk (headings) · JetBrains Mono (code) via `next/font` |
| Deployment | Vercel (recommended) |

---

## Getting Started

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/marcogrimme/marco-grimme-portfolio.git
cd marco-grimme-portfolio
npm install
```

### Development

```bash
npm run dev
# → http://localhost:3000
```

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind v4 theme, CSS custom properties
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Page composition
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx   # Fixed nav with scroll-based opacity
│   │   └── Footer.tsx       # 3-column footer
│   ├── sections/
│   │   ├── Hero.tsx         # Full-viewport hero with HUD ring SVG
│   │   ├── Anatomy.tsx      # 400 vh sticky scroll — app layer explosion
│   │   ├── FeatureSection.tsx  # Reusable tech feature panel with code block
│   │   ├── Projects.tsx     # Featured project + project grid
│   │   ├── Stack.tsx        # Skill cluster cards (light section)
│   │   ├── Experience.tsx   # "Warum Marco" principles grid
│   │   └── Contact.tsx      # CTA section with animated glow ring
│   └── ui/
│       ├── ScrollProgress.tsx  # Spring-animated bottom progress bar
│       ├── SplitText.tsx       # Word-by-word text reveal
│       └── PhoneFrame.tsx      # Animated phone wireframe component
│
└── lib/
    ├── motion.ts            # Shared Framer Motion variants & viewport config
    └── data.ts              # All site content: projects, features, skills
```

---

## Motion Principles

The animation system is modelled after the scroll dramaturgy of [anime.js](https://animejs.com/):

### 1 · Dark / Light Section Duality
Alternating `#0f0e0c` (near-black) and `#dcd8cc` (warm sand) sections create visual rhythm and prevent scroll fatigue — the same contrast system used on animejs.com.

### 2 · Scroll-Linked Dramaturgy (Anatomy Section)
The `Anatomy` section uses a `400vh` outer container with a `position: sticky` inner panel. As the user scrolls, six app-layer cards spread apart via `useTransform` mapped to `useScroll` progress — creating a parallax "explosion" effect without JavaScript scroll listeners.

```ts
// useScroll progress [0 → 1] drives card Y-offset
const yLayer = useTransform(smoothProgress, [0, 0.5], [0, -110])
```

### 3 · Spring Physics
All scroll-linked values pass through `useSpring` with `stiffness: 100, damping: 30` to eliminate sharp motion and give a natural, weighted feel.

### 4 · Viewport-Triggered Reveals
Every section uses Framer Motion's `whileInView` with `once: true` and a `-80px` margin — elements animate in as they enter the viewport, never repeating.

```ts
// Shared viewport config (src/lib/motion.ts)
export const viewportOnce = { once: true, margin: "-80px" }
```

### 5 · Staggered Children
`staggerContainer` orchestrates staggered child animations (delay: 0.07s per item) for lists, bullet points, and skill tags.

### 6 · Per-Section Accent Colours
Each feature section owns a distinct accent colour applied to its title, code highlights, bullets, and glow:

| Section | Accent |
|---------|--------|
| Flutter & Dart | `#54C5F8` |
| Clean Architecture | `#FF6B6B` |
| Native iOS & Android | `#A78BFA` |
| Backend & APIs | `#34D399` |
| Projects | `#FBBF24` |
| Contact | `#FB923C` |

### 7 · HUD Ring
The hero's circular SVG element (multicolour gradient arc + dashed rings + tick marks) uses a rotating animated dot that progresses with the page scroll — a direct translation of animejs.com's camera-lens motif into a mobile-developer context.

### 8 · Scroll Progress Bar
A `useSpring`-smoothed `scaleX` transform on a 2px bar at the bottom of the viewport provides ambient scroll position feedback without interrupting the reading experience.

---

## Deployment

### Vercel (recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect the GitHub repository directly in the [Vercel dashboard](https://vercel.com/new).

### Environment Variables

No environment variables are required for the base portfolio. Add your own for contact form integrations (e.g. Resend, Formspree).

---

## Customisation

All content lives in **`src/lib/data.ts`**:

- `projects` — project cards (name, description, stack, accent colour)
- `features` — tech feature sections (title, bullets, code snippet)
- `skills` — skill cluster object

Metadata (name, title, description) is in **`src/app/layout.tsx`**.

Section accent colours and the full colour system are defined in **`src/app/globals.css`** inside the `@theme {}` block.

---

## License

MIT © 2025 Marco Grimme
