# UX/UI High-End — Marcos Portfolio Design-System

Das Design-System das Marco Grimmes Portfolio ausmacht: technisch-minimalistisch, Motion-getrieben, mit kontrollierter Farbgebung pro Technologie. Jedes Designelement unterstreicht "Präziser Mobile Developer — Clean Architecture".

## Design-Identität

**Stil:** Technisch-minimalistisches Dark Theme mit warmer Palette — nicht kalt-bläulich wie typische Developer-Portfolios, sondern Schwarz (#0f0e0c) mit warmem Creme (#f0ede6).

**Warum es funktioniert:** Das Design demonstriert die gleiche Präzision die Marco in seiner Code-Architektur zeigt — strukturiert, intentional, kein Element ohne Funktion.

## Marcos Design in Zahlen

- **10 Sektionen** — von Hero bis Contact, jede mit eigenem visuellen Kontext
- **3 Sticky-Scroll-Sections** — PhoneBuilder (400vh), WebBuilder (400vh), Anatomy (400vh)
- **7 Akzentfarben** — eine pro Skill-Cluster
- **2 Themes** — Dark (Default) + Light mit CSS Custom Properties
- **2 Fonts** — Space Grotesk (Display) + JetBrains Mono (Code)

## Farbsystem (exakt aus globals.css)

### Dark Mode `[data-theme="dark"]`
| Token | Wert | Verwendung |
|-------|------|------------|
| `--c-bg` | `#0f0e0c` | Seiten-Background |
| `--c-text` | `#f0ede6` | Primärtext |
| `--c-text-muted` | `rgba(240,237,230,0.5)` | Beschreibungstexte |
| `--c-text-dim` | `rgba(240,237,230,0.65)` | Sekundärtext |
| `--c-text-faint` | `rgba(240,237,230,0.35)` | Labels, Timestamps |
| `--c-border` | `rgba(240,237,230,0.08)` | Card-Borders |
| `--c-card` | `rgba(255,255,255,0.02)` | Card-Backgrounds |

### Light Mode `[data-theme="light"]`
| Token | Wert | Verwendung |
|-------|------|------------|
| `--c-bg-alt` | `#F2EEE8` | Warm Off-White Background |
| `--c-alt-text` | `#1E1A14` | Dunkles Braun |
| `--c-alt-card` | `rgba(255,255,255,0.55)` | Cards |

### Akzentfarben (je Skill-Cluster)
| Cluster | Farbe | Hex |
|---------|-------|-----|
| Product & Design | Violett | `#A78BFA` |
| Platforms (Flutter) | Blau | `#54C5F8` |
| Web (React) | Grün | `#34D399` |
| Firebase | Gelb | `#FBBF24` |
| Backend | Rot | `#FF6B6B` |
| Cloud & Ops | Hellblau | `#38BDF8` |
| AI & Automation | Orange | `#FB923C` |

**Regel:** Akzentfarben werden nur für Dots, Badges, Border-Hover und Glow-Effekte verwendet — nie als Fläche.

## Typografie

| Kontext | Font | Weight | Größe |
|---------|------|--------|-------|
| Section-Headlines | Space Grotesk | 800 | `clamp(2.5rem, 6vw, 5.5rem)` |
| Hero-Headline | Space Grotesk | 800 | `clamp(3rem, 8vw, 7rem)` |
| Body | Space Grotesk | 300–400 | `text-base` mit `leading-relaxed` |
| Code-Blöcke | JetBrains Mono | 400 | `text-xs` bis `text-sm` |
| Labels/Tags | JetBrains Mono | 500 | `text-[10px]`, uppercase, `tracking-widest` |

## Animations-System (Framer Motion)

### Wiederverwendbare Variants (`lib/motion.ts`)
- **`fadeUp`** — Standard Section-Reveal: `opacity 0→1`, `y 30→0`
- **`fadeUpDramatic`** — Headlines: größerer y-Offset, `font-size` scale
- **`staggerContainer`** — Container der Kinder mit Delay staggert
- **`viewportOnce`** — Trigger einmalig bei Viewport-Eintritt

### Scroll-Animationen (bereits implementiert)
- **Hero:** `useScroll` über 200vh → Sunglasses-Drop mit Spring + Shine-Sweep
- **PhoneBuilder:** 400vh → iPhone wird Teil für Teil zusammengebaut
- **WebBuilder:** 400vh → Browser-Fenster wird progressiv aufgebaut
- **Anatomy:** 400vh → Explodierte Architektur-Ansicht

### Performance-Regeln
- `transform: translateZ(0)` für GPU Compositing
- `will-change` nur auf aktiv animierten Properties
- Spring Physics (`useSpring`) statt lineare Interpolation
- `viewport={{ once: true }}` um Re-Trigger zu verhindern

## Komponenten-Patterns

### Cards (Project, Skill-Cluster, Experience)
```
rounded-2xl | border: ${accentColor}15 | bg: var(--c-card)
Hover: border → ${accentColor}40, y: -4px
Top-edge glow: linear-gradient(transparent → accent → transparent)
Padding: p-6 md:p-8
```

### Buttons
- **Primär (CTA):** `bg: var(--c-text)` auf `color: var(--c-bg)`, `rounded-full`, `px-8 py-4`
- **Sekundär:** Border + transparent, Arrow-Icon rechts
- **"Hire me":** In Navigation, Link zu `mailto:mgrimme954@gmail.com`

### Section-Pattern
- Mono-Label oben: `text-xs font-mono uppercase tracking-widest`
- Headline: `font-[800]` mit `clamp()`
- Optional: Zweispaltig Header (Headline links, Beschreibung rechts)
- Background: `grid-dots` Pattern (32px Spacing, radial-gradient)

## Mobile-Regeln

- Hero: Stats stacken vertikal, Ring skaliert
- Navigation: Links versteckt ab mobile, nur "Hire me" Button
- Sticky-Sections: Funktionieren auch auf Touch-Geräten
- Font-Sizes: `clamp()` über alle Breakpoints
- Touch-Targets: min 44px auf allen interaktiven Elementen

## Design-Verbote

- Keine Stockfotos — nur echte App-Screenshots und SVG-Illustrationen
- Keine blauen Gradienten auf Weiß — das ist der generische "AI-Look"
- Keine Schatten-Exzesse — Glow-Effekte nur bei Hover, dezent
- Kein Emoji als Design-Element
- Keine unkontrollierte Farbverwendung — immer die definierten Akzentfarben
