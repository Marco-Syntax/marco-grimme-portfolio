export const projects = [
  {
    id: "lernekiai",
    name: "Lerne mit KI",
    category: "Education · KI",
    headline: "KI-gestütztes Lernen neu gedacht.",
    description:
      "KI-gestützte Lern-App mit Flutter, Riverpod und MVVM. Automatische Generierung von Lerninhalten über OpenAI — saubere Schichtenarchitektur verbindet FastAPI-Backend mit adaptiver Lernlogik für Android und iOS.",
    stack: ["Flutter", "Dart", "Riverpod", "MVVM", "FastAPI", "OpenAI"],
    accent: "#34D399",
    highlight: true,
  },
  {
    id: "kifor",
    name: "KiForKids",
    category: "Education · KI · Mobile",
    headline: "KI-Plattform für Kinder.",
    description:
      "Kindgerechte KI-App mit Flutter, Clean Architecture und Riverpod State Management. Verbindet OpenAI-gestützte Inhaltsgenerierung mit n8n-Automatisierung für ein adaptives, sicheres Lernerlebnis.",
    stack: ["Flutter", "Dart", "Riverpod", "Clean Architecture", "OpenAI", "n8n"],
    accent: "#A78BFA",
  },
  {
    id: "dreamfeed",
    name: "Dream Feed",
    category: "Mobile · Backend",
    headline: "Social Feed. Eigenes Backend.",
    description:
      "Social-Media-inspirierte Flutter-App für Traumtagebücher mit Cloud-Synchronisation. End-to-End-Ownership vom API-Design und Datenmodellierung bis zur Flutter-UI und Riverpod State Management.",
    stack: ["Flutter", "Dart", "Riverpod", "FastAPI", "Python", "MariaDB"],
    accent: "#FB923C",
  },
  {
    id: "checker",
    name: "Checker Club",
    category: "Education · Mobile",
    headline: "Lernen. Quizzen. Weitermachen.",
    description:
      "Gamification-basierte Wissens-App mit Flutter, Riverpod und MVVM-Architektur. Custom Flutter-UI mit FastAPI-Backend, integriertem Chatbot, Quiz-Engine und Session-Tracking.",
    stack: ["Flutter", "Dart", "Riverpod", "MVVM", "FastAPI", "Firebase"],
    accent: "#FBBF24",
  },
  {
    id: "megatron",
    name: "Megatron",
    category: "Finance · KI",
    headline: "Modularer Trading-Analyse-Kernel.",
    description:
      "Modularer Trading-Kernel mit unabhängigen Analyse-Modulen, OpenAI-Integration für Signal-Reasoning und sauberer Trennung zwischen Datenaufnahme, Analyse und Ausführungsschicht.",
    stack: ["Python", "FastAPI", "OpenAI", "REST", "MariaDB", "Docker"],
    accent: "#FF6B6B",
  },
] as const;

export const features = [
  {
    id: "flutter",
    accent: "#54C5F8",
    title: "Flutter & Dart",
    subtitle: "Cross-platform at full quality.",
    description:
      "Building production-grade Flutter apps with clean widget architecture, custom animations, platform channels and flavor-based multi-environment builds.",
    bullets: ["Flutter Flavors & multi-env", "Riverpod state management", "Freezed models & codegen", "Platform channels & plugins"],
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
      "Every layer has a single job. Data flows one way. Dependencies point inward. The result: systems that are maintainable, testable and ready for growth.",
    bullets: ["MVVM + Presentation layer", "Use Cases & Domain layer", "Repository pattern", "Dependency injection"],
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
      "Modern web apps with React, TypeScript and Vite. Component-driven architecture, responsive design, SEO optimisation and CI/CD-automated deployments via Docker and Nginx.",
    bullets: ["React + TypeScript + Vite", "Responsive & SEO-optimised", "Docker & Nginx deployment", "CI/CD automation"],
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
      "FastAPI backends that serve mobile apps, automation pipelines with n8n, AI integrations via OpenAI, and containerised deployments with Docker and Nginx.",
    bullets: ["FastAPI + Pydantic", "OpenAI & AI integration", "n8n workflow automation", "Docker & MariaDB"],
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
  "Mobile": ["Flutter", "Dart", "SwiftUI", "Swift", "Kotlin"],
  "Architecture": ["MVVM", "Clean Architecture", "SOLID", "Riverpod", "Freezed"],
  "Web & Backend": ["React", "TypeScript", "Vite", "Python", "FastAPI"],
  "DevOps & Data": ["Docker", "Nginx", "CI/CD", "Firebase", "MariaDB"],
  "Tooling": ["Git", "Codemagic", "n8n", "Xcode", "VS Code", "Figma"],
  "Platforms": ["iOS", "Android", "Flutter Web", "EU Remote"],
} as const;
