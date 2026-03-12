# Frontend Architecture — Marcos Portfolio-Codebase

Architektur-Richtlinien für die Portfolio-Website. Basiert auf dem gleichen Clean-Architecture-Denken das Marco in seinen Mobile Apps anwendet — nur hier für Next.js.

## Aktueller Tech Stack

- **Framework:** Next.js 16.1.6 (App Router) + React 19.2.3
- **Styling:** Tailwind CSS 4
- **Animationen:** Framer Motion 12 (`useScroll`, `useTransform`, `useSpring`)
- **Fonts:** next/font — Space Grotesk (Display) + JetBrains Mono (Code)
- **Bilder:** AVIF mit 3 Breakpoints (480, 960, 1440)
- **Theme:** Dark/Light mit CSS Custom Properties + localStorage

## Seitenstruktur (Single Page)

```
page.tsx
  ├── Hero           — 200vh sticky, animated ring + sunglasses + stats
  ├── TechTicker     — Horizontal scroll ticker
  ├── PhoneBuilder   — 400vh sticky, iPhone assembly animation
  ├── WebBuilder     — 400vh sticky, browser window assembly
  ├── Anatomy        — 400vh sticky, light-mode, exploded architecture
  ├── FeatureSection — 5 Panels (Flutter, Clean Arch, React, Backend, Firebase)
  ├── Projects       — Spotlight + Grid (apps + web)
  ├── Stack          — 7 Skill-Cluster, light-mode
  ├── Experience     — Career Timeline + Arbeitsweise-Badges
  └── Contact        — CTA + Navigation Grid
```

## Komponentenarchitektur

### Datenfluss
- **Alle Daten in `src/lib/data.ts`** — Projects, Features, Skills als typisierte Exports
- **Typen:** `Project` Interface mit `type: "app" | "web"` (Discriminated Union)
- **Animationen in `src/lib/motion.ts`** — Wiederverwendbare Variants (`fadeUp`, `staggerContainer`)
- **Theme in `src/lib/theme.tsx`** — Context Provider mit Dark/Light Toggle

### Regeln
- Alle Sections sind `"use client"` (Framer Motion braucht Client)
- Section-IDs für Anchor-Navigation: `#projects`, `#stack`, `#contact`, etc.
- Jede Section: eigene `min-height`, eigener Background-Kontext
- Light-Sections nutzen `var(--c-bg-alt)` / `var(--c-alt-text)`
- Sticky-Scroll-Sections: 400vh Container mit `position: sticky` + `useScroll`

### Component-Patterns (bereits im Einsatz)
```tsx
// Standard Section Pattern
export default function SectionName() {
  return (
    <section
      id="section-name"
      className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden theme-transition"
      style={{ background: "var(--c-bg)" }}
    >
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Label */}
        <motion.p variants={fadeUp} className="text-xs font-mono uppercase tracking-widest mb-4">
          Section Label
        </motion.p>
        {/* Heading */}
        <motion.h2 variants={fadeUpDramatic} className="font-[800]">
          Headline.
        </motion.h2>
        {/* Content */}
      </div>
    </section>
  );
}
```

## Clean Architecture Parallele

Marco wendet die gleichen Prinzipien an wie in seinen Mobile Apps:

| Mobile (Flutter/SwiftUI) | Portfolio (Next.js) |
|---|---|
| Domain Layer (Repository Interface) | `src/lib/data.ts` (Typen + Daten) |
| Presentation Layer (ViewModel) | Section Components mit Framer Motion State |
| Data Layer (API + Cache) | Static Data + AVIF Image Pipeline |
| Dependency Injection (Riverpod) | React Context (ThemeProvider) |
| MVVM State Machine | `useScroll` / `useTransform` Progress-Mapping |

## Performance

- [ ] Lighthouse Performance > 90
- [ ] LCP < 2.5s — Hero nutzt keine externen Bilder (SVG + CSS)
- [ ] CLS < 0.1 — Explizite Heights auf Sticky-Sections (200vh, 400vh)
- [ ] `will-change` + `translateZ(0)` für GPU-Beschleunigung (sparsam)
- [ ] AVIF-Bilder mit 3 Breakpoints statt unkomprimiertes PNG

## Error Handling

- `app/error.tsx` — Fehlerseite im Portfolio-Design
- `app/not-found.tsx` — 404 im Portfolio-Design
- Inline theme-script verhindert FOUC (Flash of Unstyled Content)

## Security Headers (next.config.ts)

- HSTS: `max-age=63072000; includeSubDomains; preload`
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

## SEO-Infrastruktur

- `app/robots.ts` — Dynamisch, alle Crawler erlaubt
- `app/sitemap.ts` — Dynamische XML-Sitemap
- JSON-LD in layout.tsx — Person + WebSite Schema
- Vollständige OpenGraph + Twitter Card Meta-Tags
- `metadataBase: new URL("https://grimme.dev")`

## Accessibility

- [ ] `<html lang="de">` gesetzt
- [ ] Heading-Hierarchie: ein `<h1>` (Hero), dann `<h2>` pro Section
- [ ] `aria-hidden` auf dekorativen SVGs (bereits vorhanden)
- [ ] `prefers-reduced-motion` respektieren (TODO: noch implementieren)
- [ ] Focus-Indikatoren auf Navigation + Buttons
- [ ] Farbkontrast: Dark (#f0ede6 auf #0f0e0c) + Light (#1E1A14 auf #F2EEE8)
