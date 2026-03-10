const TECH_ITEMS = [
  { label: "Flutter", color: "#54C5F8" },
  { label: "SwiftUI", color: "#FF6B6B" },
  { label: "Kotlin", color: "#A78BFA" },
  { label: "React", color: "#34D399" },
  { label: "TypeScript", color: "#54C5F8" },
  { label: "Python", color: "#FBBF24" },
  { label: "FastAPI", color: "#34D399" },
  { label: "Firebase", color: "#FB923C" },
  { label: "Docker", color: "#54C5F8" },
  { label: "Riverpod", color: "#A78BFA" },
  { label: "Core Data", color: "#FF6B6B" },
  { label: "OpenAI", color: "#34D399" },
  { label: "Dart", color: "#54C5F8" },
  { label: "Tailwind", color: "#34D399" },
  { label: "n8n", color: "#FB923C" },
  { label: "Figma", color: "#A78BFA" },
];

// Duplicate for seamless loop
const ITEMS = [...TECH_ITEMS, ...TECH_ITEMS];

export default function TechTicker() {
  return (
    <div className="relative bg-[#0f0e0c] py-6 overflow-hidden border-y border-white/5">
      {/* Left/right fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0f0e0c] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0f0e0c] to-transparent z-10" />

      <div
        className="flex gap-8 whitespace-nowrap ticker-scroll"
      >
        {ITEMS.map((item, i) => (
          <div key={`${item.label}-${i}`} className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: item.color }}
            />
            <span
              className="text-sm font-mono tracking-wide"
              style={{ color: `${item.color}80` }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
