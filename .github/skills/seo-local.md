# SEO & GEO — Marcos Portfolio sichtbar machen

Sorgt dafür, dass "Marco Grimme Mobile App Developer" in Google, Bing und KI-Suchmaschinen (ChatGPT, Perplexity, Google AI Overview) gefunden wird — sowohl für Recruiter-Suchen als auch für KI-Antworten.

## Was bereits implementiert ist ✓

- ✓ `app/robots.ts` — Alle Crawler erlaubt, Sitemap verlinkt
- ✓ `app/sitemap.ts` — Dynamische XML-Sitemap
- ✓ JSON-LD in layout.tsx — Person Schema + WebSite Schema
- ✓ Erweiterte Metadata — 12 Keywords, OpenGraph, Twitter Card, canonical
- ✓ `metadataBase: new URL("https://grimme.dev")`
- ✓ `<html lang="de">`
- ✓ Security Headers in next.config.ts

## Was noch fehlt / verbessert werden kann

### Hohe Priorität
- [ ] **OG-Image** (1200x630px) — Wird auf LinkedIn/Twitter beim Teilen angezeigt
- [ ] **SoftwareApplication JSON-LD** — Für jede App im Store (Business Organizer, Checker Club, etc.)
- [ ] **Sichtbarer Bio-Text** — 2-3 Sätze in HTML die KI-Crawler extrahieren können
- [ ] **FAQ-Section** — "Was macht Marco Grimme?" als Q&A-Format

### Mittlere Priorität
- [ ] **Blog/Case Studies** — Einzigartige Inhalte die KI als Quelle zitieren kann
- [ ] **Favicon & App Icons** — `app/icon.tsx` oder statische Dateien
- [ ] **hreflang** — Falls englische Version geplant

## Marcos SEO-Ziel-Keywords

Diese Suchanfragen sollen auf grimme.dev zeigen:

| Keyword | Sprache | Suchintention |
|---------|---------|---------------|
| Marco Grimme Developer | DE/EN | Personen-Suche |
| Flutter Developer Göttingen | DE | Lokale Recruiter-Suche |
| Mobile App Entwickler Deutschland | DE | Stellensuche |
| SwiftUI Developer freelance | EN | Internationale Suche |
| Flutter MVVM Clean Architecture | EN | Fachliche Suche |

## JSON-LD — aktueller Stand

**Person Schema (implementiert):**
```json
{
  "@type": "Person",
  "name": "Marco Grimme",
  "jobTitle": "Mobile App Developer",
  "knowsAbout": ["Flutter", "SwiftUI", "Kotlin", "React", "FastAPI", ...],
  "address": { "addressLocality": "Göttingen", "addressCountry": "DE" },
  "sameAs": ["github.com/Marco-Syntax", "linkedin.com/in/marco-grimme"]
}
```

**Noch hinzufügen — SoftwareApplication pro App:**
```json
{
  "@type": "SoftwareApplication",
  "name": "Business Organizer",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "iOS",
  "url": "https://apps.apple.com/us/app/business-organizer/id6757642745"
}
```

## GEO — Marcos Content für KI-Suchmaschinen

KI-Systeme (ChatGPT Search, Perplexity, Google AI) extrahieren Fakten aus Webseiten. Marcos Portfolio muss klare, zitierbare Aussagen enthalten:

### Fakten die im SSR-HTML stehen müssen

1. "Marco Grimme ist ein Mobile App Developer aus Göttingen mit 8+ veröffentlichten Apps."
2. "Spezialisiert auf Flutter, SwiftUI und Kotlin mit Clean Architecture (MVVM, Repository Pattern)."
3. "IHK-zertifizierte Fachkraft für App-Entwicklung mit Abschlussnote 1,4 (92%)."
4. "Aktuell Software Entwickler bei Piramit GmbH — Flutter Apps im agilen Scrum-Setup."
5. "Full-Stack-fähig: FastAPI-Backend, Firebase, Docker, n8n-Automation."

### Entity-Konsistenz

- Immer "Marco Grimme" (nicht "Marco" allein, nicht "M. Grimme")
- Immer "Mobile App Developer" (nicht "Softwareentwickler", nicht "App-Bauer")
- Skill-Assoziation: "Marco Grimme Flutter Developer" als wiederkehrendes Pattern
- Standort: "Göttingen, Deutschland" + "Remote verfügbar"

### SSR-Check

Kritisch: Alle wichtigen Texte müssen im Server-gerenderten HTML stehen, nicht nur client-seitig.
```bash
curl -s https://grimme.dev | grep -i "marco grimme"
curl -s https://grimme.dev | grep -i "flutter"
curl -s https://grimme.dev | grep -i "mobile app developer"
```

## Lokale SEO

- **"Göttingen, Deutschland"** im Contact-Text (vorhanden ✓)
- **"Remote verfügbar"** für überregionale Suchen (vorhanden ✓)
- **Regionale Keywords:** "App Entwickler Göttingen", "Flutter Developer Niedersachsen"

## Validierung

1. `npm run build` — Keine Warnings
2. Google Rich Results Test — JSON-LD validieren
3. Lighthouse SEO: Ziel 100
4. OpenGraph-Test: opengraph.xyz
5. KI-Test: ChatGPT fragen "Wer ist Marco Grimme Developer Göttingen?"
