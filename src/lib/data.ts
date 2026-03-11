export interface Project {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  stack: string[];
  accent: string;
  highlight?: boolean;
  type: "app" | "web";
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: "business-organizer",
    name: "Business Organizer",
    category: "iPad · iOS · Offline-First",
    headline: "Kunden, Projekte & Rechnungen. Ohne Abo.",
    description:
      "Klare iPad-App für Selbstständige und Freelancer: Kunden, Projekte, Aufgaben und Rechnungen an einem Ort – vollständig offline, einmaliger Kauf, keine Cloud-Pflicht.",
    stack: ["SwiftUI", "Core Data", "iPad", "Offline-First", "iOS"],
    accent: "#F59E0B",
    highlight: true,
    type: "app",
    link: "https://apps.apple.com/us/app/business-organizer/id6757642745",
    image: "/img/images/business_organizer.png",
  },
  {
    id: "checker-club",
    name: "Checker Club",
    category: "iOS · Education · KI",
    headline: "Video, Quiz & KI-Chatbot für Kinder.",
    description:
      "Interaktive Lern-App für iOS: Video-Streaming mit AVKit, Firebase Real-time Sync und kindgerechter OpenAI-Chatbot mit Content-Filtering.",
    stack: ["SwiftUI", "Firebase", "OpenAI", "AVKit", "Combine", "iOS"],
    accent: "#FBBF24",
    type: "app",
    link: "https://apps.apple.com/us/app/checker-club/id6742713281",
    image: "/img/images/checker_club.png",
  },
  {
    id: "dream-feed",
    name: "Dream Feed",
    category: "Flutter · FastAPI · KI",
    headline: "Traumanalyse. Full-Stack. Cross-Platform.",
    description:
      "Flutter-App mit GPT-gestützter Traumanalyse, FastAPI-Backend und MariaDB – Riverpod State Management nach Repository Pattern.",
    stack: ["Flutter", "Dart", "Riverpod", "FastAPI", "MariaDB", "OpenAI"],
    accent: "#FB923C",
    type: "app",
    link: "https://apps.apple.com/app/id6742332656",
    image: "/img/images/dream_feed.png",
  },
  {
    id: "nextlevel-mindset",
    name: "NextLevel Mindset",
    category: "iOS · Native · WidgetKit",
    headline: "Tägliche Impulse. Widgets. Offline-First.",
    description:
      "Native iOS-App mit WidgetKit-Homescreen-Widgets, Core Data-Persistierung und vollständiger Offline-Verfügbarkeit – App Clips ready unter 10 MB.",
    stack: ["SwiftUI", "WidgetKit", "Core Data", "App Clips", "iOS"],
    accent: "#A78BFA",
    type: "app",
    link: "https://apps.apple.com/app/id6749188795",
    image: "/img/images/next.png",
  },
  {
    id: "monster-run",
    name: "Monster Run",
    category: "Flutter · Flame · Game Dev",
    headline: "60fps Endless Runner mit Flame Engine.",
    description:
      "2D Endless Runner: Component-basierte Spielarchitektur, Sprite-Animationen, Hitbox-Kollisionserkennung und Web-Deploy mit Flutter + Flame.",
    stack: ["Flutter", "Flame Engine", "Dart", "Flutter Web", "Sprite Sheets"],
    accent: "#FF6B6B",
    type: "app",
    link: "https://apps.apple.com/de/app/monster-run/id6752010094",
    image: "/img/images/monster_run.png",
  },
  {
    id: "business-digital",
    name: "Business Digital",
    category: "Web · Dashboard · B2B",
    headline: "Backoffice als strukturierter Workflow.",
    description:
      "Web-Backoffice für Kunden, Projekte, Angebote und Belege – mit Dashboard, Pro-Nutzer-Datentrennung und Business Copilot auf eigenen Unternehmensdaten.",
    stack: ["React", "TypeScript", "Firebase", "Vite", "Tailwind CSS"],
    accent: "#38BDF8",
    type: "web",
    link: "https://tool.grimmedigital.de",
    image: "/img/images/business_dashborad.png",
  },
  {
    id: "lerne-mit-ki",
    name: "Lerne mit KI",
    category: "Web · EdTech · KI",
    headline: "KI-Lernmaterialien für Klassen 5–13.",
    description:
      "Intelligente Web-Plattform für Lehrkräfte: lehrplankonforme Arbeitsblätter und Quizze per KI – Credit-System mit PayPal-Payment und Firebase-Auth.",
    stack: ["React", "TypeScript", "OpenAI", "Firebase", "PayPal", "Docker"],
    accent: "#34D399",
    type: "web",
    link: "https://lernemitki.de",
    image: "/img/images/lerne_mit_ki.png",
  },
  {
    id: "kiforkids",
    name: "KiForKids",
    category: "Flutter Web · Backend · Automation",
    headline: "Lernplattform. Full-Stack. KI-generiert.",
    description:
      "Umfassendstes Projekt: Flutter Web mit Riverpod + Freezed, FastAPI-Backend, n8n-Webhooks und KI-Content-Generierung via OpenAI, Anthropic und Perplexity.",
    stack: ["Flutter Web", "FastAPI", "n8n", "Docker", "OpenAI", "Anthropic"],
    accent: "#22D3EE",
    type: "web",
    link: "https://kiforkids.de",
    image: "/img/images/ki_for_kids.png",
  },
];

export const features = [
  {
    id: "flutter",
    accent: "#54C5F8",
    title: "Flutter & Dart",
    subtitle: "Cross-platform at full quality.",
    filename: "home_page.dart",
    description:
      "Production-grade Flutter Apps mit Clean Widget Architecture, Custom Animations, Riverpod State Management und flavor-basierten Multi-Environment-Builds.",
    bullets: ["FVM · Version Management", "Riverpod State Management", "Freezed Models & Codegen", "Platform Channels & Plugins"],
    code: `// Riverpod — ref.watch vs ref.read
class HomePage extends ConsumerWidget {

  Widget build(context, WidgetRef ref) {
    // rebuilds when data changes
    final user = ref.watch(userProvider);
    final items = ref.watch(listProvider);

    // one-time read, no rebuild
    final nav = ref.read(
      routerProvider.notifier,
    );

    // AsyncValue pattern matching
    return user.when(
      data: (u) => Column([
        Text(u.name),
        ListView(items),
        Button(onTap: nav.push('/detail')),
      ]),
      loading: () => Spinner(),
      error: (e, _) => ErrorView(e),
    );
  }
}`,
  },
  {
    id: "architecture",
    accent: "#FF6B6B",
    title: "Clean Architecture",
    subtitle: "MVVM. SOLID. Testable.",
    filename: "architecture.dart",
    description:
      "Jede Schicht hat eine Verantwortung. Daten fließen in eine Richtung. Dependencies zeigen nach innen. Das Ergebnis: wartbare, testbare und wachstumsfähige Systeme.",
    bullets: ["MVVM + Presentation Layer", "Use Cases & Domain Layer", "Repository Pattern", "Dependency Injection"],
    code: `// Clean Architecture — 3 Layers

// 1. Domain — contracts + use cases
abstract class Repository {
  Future<Result<List<Entity>>> getAll();
}

class FetchItems {
  final Repository repo;
  call() => repo.getAll();
}

// 2. Data — API + cache fallback
class RepositoryImpl implements Repository {
  final Api api;
  final Cache cache;

  getAll() async {
    try   => api.fetch() | cache.save()
    catch => cache.load() | Failure()
  }
}

// 3. Presentation — state machine
class ViewModel {
  final FetchItems useCase;

  load() => useCase()
    .fold(
      ok:   (data) => State.loaded(data),
      fail: (err)  => State.error(err),
    );
}`,
  },
  {
    id: "web",
    accent: "#34D399",
    title: "React & TypeScript",
    subtitle: "Modern web. Clean components.",
    filename: "useData.ts",
    description:
      "Moderne Web-Apps mit React, TypeScript und Vite. Component-getriebene Architektur, responsives Design, SEO-Optimierung und CI/CD-automatisierte Deployments.",
    bullets: ["React + TypeScript + Vite", "Responsive & SEO-optimiert", "Docker & Nginx Deployment", "CI/CD Automation"],
    code: `// Custom Hook — state + effect + memo
import { useState, useEffect, useMemo,
  useCallback } from 'react'

export function useData<T>(url: string) {
  const [data, setData] = useState<T>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>()

  // effect: fetch on mount + url change
  useEffect(() => {
    setLoading(true)
    fetch(url)
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [url])

  // memo: derived state, no re-compute
  const count = useMemo(
    () => (data as any[])?.length ?? 0,
    [data],
  )

  // callback: stable fn reference
  const refetch = useCallback(
    () => setLoading(true), []
  )

  return { data, count, loading,
    error, refetch }
}`,
  },
  {
    id: "backend",
    accent: "#A78BFA",
    title: "Backend & APIs",
    subtitle: "Python. FastAPI. Production-ready.",
    filename: "routes/generate.py",
    description:
      "FastAPI-Backends für Mobile Apps, Automatisierungspipelines mit n8n, KI-Integrationen via OpenAI und Claude – containerisiert mit Docker und Nginx.",
    bullets: ["FastAPI + Pydantic", "OpenAI & KI-Integration", "n8n Workflow-Automation", "Docker & MariaDB"],
    code: `# FastAPI — Dependency Injection Pattern

@router.post("/generate")
async def generate(
  req: Request,                   # Pydantic
  user: User = Depends(get_user), # Auth DI
  ai: AI     = Depends(get_ai),   # Service DI
  db: DB     = Depends(get_db),   # Database DI
):
  # validate → transform → execute
  prompt = build_prompt(
    topic=req.topic,
    context=req.context,
  )

  result = await ai.complete(
    model="gpt-4o",
    prompt=prompt,
    max_tokens=2048,
  )

  record = await db.insert(
    user_id=user.id,
    content=parse(result),
  )

  return {"id": record.id, "ok": True}`,
  },
  {
    id: "firebase",
    accent: "#FBBF24",
    title: "Firebase & Cloud",
    subtitle: "Realtime. Auth. Scalable.",
    filename: "firestore.rules",
    description:
      "Firebase als zentrales Backend: Firestore mit Nested und Top-Level Collections, Authentication mit Multi-Provider Login, Cloud Storage, Crashlytics und Push Notifications.",
    bullets: ["Firestore Nested & Top-Level", "Auth · Multi-Provider", "Security Rules", "Crashlytics & Messaging"],
    code: `// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{db}/documents {

    // User profile: owner only
    match /users/{uid} {
      allow read, write:
        if request.auth.uid == uid;

      // Nested sub-collection
      match /settings/{doc} {
        allow read, write:
          if request.auth.uid == uid;
      }
    }

    // Top-Level: public read, auth write
    match /items/{itemId} {
      allow read: if true;
      allow create:
        if request.auth != null
        && request.resource.data.title
            is string
        && request.resource.data.title
            .size() <= 120;
      allow update, delete:
        if request.auth.uid
          == resource.data.ownerId;
    }
  }
}`,
  },
] as const;

export const skills = {
  "Product & Design": ["Figma", "Design Systems", "Prototyping", "Responsive Patterns"],
  "Platforms": ["Flutter · Dart", "SwiftUI · UIKit", "Kotlin · Android", "Flutter Web", "Riverpod · Freezed", "FVM"],
  "Web": ["React · Vite", "TypeScript", "Tailwind CSS", "Node.js · Express"],
  "Firebase": ["Firestore Database", "Authentication", "Cloud Storage", "Crashlytics", "Cloud Messaging", "Security Rules", "Nested Collections", "Top-Level Design"],
  "Backend": ["Python · FastAPI", "MariaDB", "REST · JSON", "JWT · Auth", "Pydantic", "PayPal · Stripe"],
  "Cloud & Ops": ["Docker · Compose", "Nginx", "CI/CD", "netcup · n8n", "Let's Encrypt"],
  "AI & Automation": ["OpenAI · Claude", "Perplexity", "Vector Embeddings", "n8n Workflows"],
} as const;
