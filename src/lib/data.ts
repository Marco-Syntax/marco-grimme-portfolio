export const projects = [
  {
    id: "itsroad",
    name: "itsRoad",
    category: "Professional · Logistics",
    headline: "Enterprise Flutter in production.",
    description:
      "Professional Flutter development in a logistics environment. Focus on app architecture, automated tests, support analysis, bug isolation, and feature delivery in a real business context.",
    stack: ["Flutter", "Dart", "MVVM", "Riverpod", "Freezed", "REST", "Firebase", "Codemagic"],
    accent: "#54C5F8",
    highlight: true,
  },
  {
    id: "kifor",
    name: "KiForKids",
    category: "Education · AI",
    headline: "AI-powered learning platform.",
    description:
      "Learning platform built with FastAPI, OpenAI and n8n automation. Combines AI-driven content generation with workflow orchestration for an adaptive learning experience.",
    stack: ["FastAPI", "Python", "OpenAI", "n8n", "Docker", "MariaDB"],
    accent: "#34D399",
  },
  {
    id: "megatron",
    name: "Megatron",
    category: "Finance · AI",
    headline: "Modular trading analysis kernel.",
    description:
      "Modular trading kernel with independent analysis modules, OpenAI integration for signal reasoning, and clean separation between data ingestion, analysis and execution layers.",
    stack: ["Python", "FastAPI", "OpenAI", "REST", "MariaDB", "Docker"],
    accent: "#FBBF24",
  },
  {
    id: "checker",
    name: "Checker Club",
    category: "Education · Mobile",
    headline: "Learn. Quiz. Repeat.",
    description:
      "Mobile learning app with integrated chatbot, quiz engine and rich learning content. Custom Flutter UI with backend-driven content and session tracking.",
    stack: ["Flutter", "Dart", "Riverpod", "Firebase", "REST"],
    accent: "#A78BFA",
  },
  {
    id: "dreamfeed",
    name: "Dream Feed",
    category: "Mobile · Backend",
    headline: "Custom feed, custom backend.",
    description:
      "Flutter app with a fully self-built backend. End-to-end ownership from API design and data modeling to Flutter UI and state management.",
    stack: ["Flutter", "Dart", "FastAPI", "MariaDB", "Room"],
    accent: "#FB923C",
  },
  {
    id: "jonas",
    name: "JonasJurassicWorld",
    category: "iOS · Game",
    headline: "SwiftUI game from scratch.",
    description:
      "An iOS game built entirely in SwiftUI. Focus on scene logic, state machines, animations and iOS-native interaction patterns — no game engine.",
    stack: ["SwiftUI", "Swift", "Core Data", "Xcode"],
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
  "Architecture": ["MVVM", "Clean Code", "SOLID", "Riverpod", "Freezed"],
  "Backend": ["Python", "FastAPI", "REST APIs", "n8n", "Docker"],
  "Data": ["Firebase", "MariaDB", "Room", "Core Data"],
  "Tooling": ["Git", "Codemagic", "Figma", "Xcode", "VS Code", "Jira"],
  "Platforms": ["iOS", "Android", "Flutter Web", "Kubernetes Basics"],
} as const;
