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
  },
];

export const features = [
  {
    id: "flutter",
    accent: "#54C5F8",
    title: "Flutter & Dart",
    subtitle: "Cross-platform at full quality.",
    description:
      "Production-grade Flutter Apps mit Clean Widget Architecture, Custom Animations, Riverpod State Management und flavor-basierten Multi-Environment-Builds.",
    bullets: ["Flutter Flavors & Multi-Env", "Riverpod State Management", "Freezed Models & Codegen", "Platform Channels & Plugins"],
    code: `// Riverpod provider with Freezed state
@riverpod
class AppViewModel extends _$AppViewModel {
  @override
  AppState build() => const AppState.initial();

  Future<void> loadData() async {
    state = const AppState.loading();
    final result = await ref
      .read(repositoryProvider)
      .fetchItems();
    state = result.fold(
      AppState.error,
      AppState.success,
    );
  }
}`,
  },
  {
    id: "architecture",
    accent: "#FF6B6B",
    title: "Clean Architecture",
    subtitle: "MVVM. SOLID. Testable.",
    description:
      "Jede Schicht hat eine Verantwortung. Daten fließen in eine Richtung. Dependencies zeigen nach innen. Das Ergebnis: wartbare, testbare und wachstumsfähige Systeme.",
    bullets: ["MVVM + Presentation Layer", "Use Cases & Domain Layer", "Repository Pattern", "Dependency Injection"],
    code: `// Clean separation of concerns
abstract class ItemRepository {
  Future<Either<Failure, List<Item>>>
    getItems();
}

class ItemRepositoryImpl
    implements ItemRepository {
  final RemoteDataSource remote;
  final LocalDataSource local;

  @override
  Future<Either<Failure, List<Item>>>
      getItems() async {
    // try remote → fallback to local
  }
}`,
  },
  {
    id: "web",
    accent: "#34D399",
    title: "React & TypeScript",
    subtitle: "Modern web. Clean components.",
    description:
      "Moderne Web-Apps mit React, TypeScript und Vite. Component-getriebene Architektur, responsives Design, SEO-Optimierung und CI/CD-automatisierte Deployments.",
    bullets: ["React + TypeScript + Vite", "Responsive & SEO-optimiert", "Docker & Nginx Deployment", "CI/CD Automation"],
    code: `// React component with TypeScript
interface ProjectCardProps {
  name: string;
  stack: string[];
  accent: string;
}

export function ProjectCard({
  name, stack, accent,
}: ProjectCardProps) {
  return (
    <article style={{ borderColor: accent }}>
      <h3>{name}</h3>
      <ul>
        {stack.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </article>
  );
}`,
  },
  {
    id: "backend",
    accent: "#A78BFA",
    title: "Backend & APIs",
    subtitle: "Python. FastAPI. Production-ready.",
    description:
      "FastAPI-Backends für Mobile Apps, Automatisierungspipelines mit n8n, KI-Integrationen via OpenAI und Claude – containerisiert mit Docker und Nginx.",
    bullets: ["FastAPI + Pydantic", "OpenAI & KI-Integration", "n8n Workflow-Automation", "Docker & MariaDB"],
    code: `# FastAPI with clean dependency injection
@router.get("/items", response_model=list[Item])
async def get_items(
  current_user: User = Depends(get_current_user),
  repo: ItemRepo = Depends(get_repo),
) -> list[Item]:
  return await repo.find_by_user(
    user_id=current_user.id,
    limit=50,
  )`,
  },
] as const;

export const skills = {
  "Product & Design": ["Figma", "Design Systems", "Prototyping", "Responsive Patterns"],
  "Platforms": ["Flutter · Dart", "SwiftUI · UIKit", "Kotlin · Android", "Flutter Web", "Riverpod · Freezed"],
  "Web": ["React · Vite", "TypeScript", "Tailwind CSS", "Node.js · Express"],
  "Backend": ["Python · FastAPI", "MariaDB", "REST · JSON", "JWT · Auth", "Pydantic", "PayPal · Stripe"],
  "Cloud & Ops": ["Docker · Compose", "Nginx", "CI/CD", "Firebase", "netcup · n8n", "Let's Encrypt"],
  "AI & Automation": ["OpenAI · Claude", "Perplexity", "Vector Embeddings", "n8n Workflows"],
} as const;
