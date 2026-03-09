export const projects = [
  {
    id: "itsroad",
    name: "itsRoad",
    category: "Professional · Logistik",
    headline: "Enterprise Flutter im Produktiveinsatz.",
    description:
      "Professionelle Flutter-Entwicklung bei PIRAMIT GmbH in einem echten Logistik-Umfeld. Fokus auf App-Architektur, automatisierte Tests, Support-Analyse, Bug-Isolation und Feature-Delivery in einem realen Business-Kontext.",
    stack: ["Flutter", "Dart", "MVVM", "Riverpod", "Freezed", "REST", "Firebase", "Codemagic"],
    accent: "#54C5F8",
    highlight: true,
  },
  {
    id: "lernekiai",
    name: "Lerne mit KI",
    category: "Education · KI",
    headline: "KI-gestütztes Lernen neu gedacht.",
    description:
      "Flutter-App mit Riverpod-Architektur und MVVM-Pattern, die KI-basiertes Lernen für alle zugänglich macht. Saubere Schichtenarchitektur verbindet FastAPI-Backend mit adaptiver Lernlogik.",
    stack: ["Flutter", "Dart", "Riverpod", "MVVM", "FastAPI", "OpenAI"],
    accent: "#34D399",
  },
  {
    id: "kifor",
    name: "KiForKids",
    category: "Education · KI · Backend",
    headline: "KI-Plattform für Kinder.",
    description:
      "Kindgerechte Lern-App mit FastAPI-Backend, OpenAI-Integration und n8n-Automatisierung. Verbindet KI-gestützte Inhaltsgenerierung mit Workflow-Orchestrierung für ein adaptives Lernerlebnis.",
    stack: ["FastAPI", "Python", "OpenAI", "n8n", "Docker", "MariaDB"],
    accent: "#A78BFA",
  },
  {
    id: "checker",
    name: "Checker Club",
    category: "Education · Mobile",
    headline: "Lernen. Quizzen. Weitermachen.",
    description:
      "Mobile Lern-App mit integriertem Chatbot, Quiz-Engine und reichhaltigem Lerninhalt. Custom Flutter-UI mit backend-getriebenem Content, Gamification und Session-Tracking.",
    stack: ["Flutter", "Dart", "Riverpod", "FastAPI", "Firebase"],
    accent: "#FBBF24",
  },
  {
    id: "dreamfeed",
    name: "Dream Feed",
    category: "Mobile · Backend",
    headline: "Eigener Feed. Eigenes Backend.",
    description:
      "Flutter-App mit vollständig selbst gebautem Backend. End-to-End-Ownership vom API-Design und Datenmodellierung bis zur Flutter-UI und State Management mit Cloud-Sync.",
    stack: ["Flutter", "Dart", "FastAPI", "MariaDB", "Room"],
    accent: "#FB923C",
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
    id: "native",
    accent: "#A78BFA",
    title: "Native iOS & Android",
    subtitle: "Platform-first where it matters.",
    description:
      "SwiftUI for iOS-native experiences. Kotlin for Android with Jetpack Compose. The right tool for the right platform — without compromise on UX or performance.",
    bullets: ["SwiftUI + Combine", "Kotlin + Jetpack", "Core Data & Room", "iOS game & app development"],
    code: `// SwiftUI declarative UI
struct ContentView: View {
  @StateObject private var vm
    = ContentViewModel()

  var body: some View {
    NavigationStack {
      List(vm.items) { item in
        ItemRow(item: item)
          .swipeActions {
            DeleteButton(item: item)
          }
      }
    }
    .task { await vm.load() }
  }
}`,
  },
  {
    id: "backend",
    accent: "#34D399",
    title: "Backend & APIs",
    subtitle: "Python. FastAPI. Production-ready.",
    description:
      "FastAPI backends that serve mobile apps, automation pipelines with n8n, AI integrations via OpenAI, and containerized deployments with Docker.",
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
  "Web & Backend": ["React", "TypeScript", "Python", "FastAPI", "REST API"],
  "DevOps & Data": ["Docker", "Nginx", "CI/CD", "Firebase", "MariaDB"],
  "Tooling": ["Git", "Codemagic", "n8n", "Xcode", "VS Code", "Figma"],
  "Platforms": ["iOS", "Android", "Flutter Web", "EU Remote"],
} as const;
