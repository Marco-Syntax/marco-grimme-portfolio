"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, type MotionValue, type Variants } from "framer-motion";
import { AppWindow, Database, MapPinned, Workflow, type LucideIcon } from "lucide-react";
import { FlickeringGrid } from "@/components/ui/FlickeringGrid";

const ROLE_WORDS = ["Mobile", "App", "Developer."];
const TAGLINE = "Flutter · SwiftUI · Kotlin · Python · FastAPI";

const STATS = [
  { value: 8, suffix: "+", label: "Apps gebaut", color: "#54C5F8" },
  { value: 5, suffix: "", label: "Plattformen", color: "#34D399" },
  { value: 92, suffix: "%", label: "IHK-Note", color: "#FBBF24" },
];

type OrbitIconItem = {
  label: string;
  short?: string;
  icon?: LucideIcon;
  start: { x: number; y: number };
  scatter: { x: number; y: number };
  angle: number;
  color: string;
  glow: string;
};

function polarOffset(angle: number, radius: number) {
  const radians = (angle * Math.PI) / 180;
  return {
    x: Math.cos(radians) * radius,
    y: Math.sin(radians) * radius,
  };
}

const ORBIT_RADIUS = 228;

const ORBIT_ICONS: OrbitIconItem[] = [
  {
    label: "Flutter",
    short: "FL",
    start: { x: 92, y: -48 },
    scatter: { x: -150, y: -18 },
    angle: -90,
    color: "#54C5F8",
    glow: "84, 197, 248",
  },
  {
    label: "Swift",
    short: "SW",
    start: { x: 105, y: 8 },
    scatter: { x: 26, y: 164 },
    angle: -45,
    color: "#F59E0B",
    glow: "245, 158, 11",
  },
  {
    label: "Kotlin",
    short: "KT",
    start: { x: 68, y: 62 },
    scatter: { x: -118, y: 134 },
    angle: 0,
    color: "#A855F7",
    glow: "168, 85, 247",
  },
  {
    label: "Native iOS",
    short: "NI",
    start: { x: 18, y: 96 },
    scatter: { x: -74, y: 196 },
    angle: 45,
    color: "#34D399",
    glow: "52, 211, 153",
  },
  {
    label: "MVVM",
    icon: Workflow,
    start: { x: 118, y: -92 },
    scatter: { x: -182, y: -72 },
    angle: 90,
    color: "#60A5FA",
    glow: "96, 165, 250",
  },
  {
    label: "FastAPI",
    icon: MapPinned,
    start: { x: 142, y: -18 },
    scatter: { x: 84, y: 176 },
    angle: 135,
    color: "#FB7185",
    glow: "251, 113, 133",
  },
  {
    label: "Datenbanken",
    icon: Database,
    start: { x: 98, y: 104 },
    scatter: { x: -194, y: 58 },
    angle: 180,
    color: "#2DD4BF",
    glow: "45, 212, 191",
  },
  {
    label: "Riverpod",
    icon: AppWindow,
    start: { x: 42, y: -110 },
    scatter: { x: -112, y: -148 },
    angle: 225,
    color: "#FBBF24",
    glow: "251, 191, 36",
  },
];

/* ── Animated counter ────────────────────────────────────────────────────── */
function AnimatedStat({ value, suffix, label, color, delay }: {
  value: number; suffix: string; label: string; color: string; delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="flex items-baseline gap-0.5">
        <motion.span
          className="text-2xl md:text-3xl font-[800] tabular-nums"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: delay + 0.2 }}
        >
          {isInView ? value : 0}
        </motion.span>
        <span className="text-lg font-[700]" style={{ color }}>{suffix}</span>
      </div>
      <span className="text-[10px] font-mono uppercase tracking-widest mt-1" style={{ color: "var(--c-text-faint)" }}>
        {label}
      </span>
    </motion.div>
  );
}



/* ── Developer Mode boot overlay ─────────────────────────────────────────── */
const DEV_STATUS_LINES = [
  { icon: "✓", text: "Flutter environment ready", color: "#34D399" },
  { icon: "✓", text: "API connected", color: "#54C5F8" },
  { icon: "✓", text: "UI renderer started", color: "#A78BFA" },
];

function DevModeOverlay({ progress }: { progress: MotionValue<number> }) {
  // Main title
  const titleOpacity = useTransform(progress, [0.28, 0.31], [0, 1]);
  const titleY = useTransform(progress, [0.28, 0.31], [12, 0]);

  // Status lines — staggered
  const line0Opacity = useTransform(progress, [0.32, 0.34], [0, 1]);
  const line0Y = useTransform(progress, [0.32, 0.34], [8, 0]);
  const line1Opacity = useTransform(progress, [0.35, 0.37], [0, 1]);
  const line1Y = useTransform(progress, [0.35, 0.37], [8, 0]);
  const line2Opacity = useTransform(progress, [0.38, 0.40], [0, 1]);
  const line2Y = useTransform(progress, [0.38, 0.40], [8, 0]);

  const lineOpacities = [line0Opacity, line1Opacity, line2Opacity];
  const lineYs = [line0Y, line1Y, line2Y];

  // Cursor blink simulation via opacity flicker
  const cursorOpacity = useTransform(progress, [0.28, 0.29, 0.30, 0.31, 0.32, 0.33, 0.34, 0.35], [0, 1, 0, 1, 0, 1, 0, 0]);

  return (
    <div className="absolute bottom-[8%] right-[-5%] md:right-[3%] w-[320px] md:w-[360px] z-20 pointer-events-none">
      {/* Main title */}
      <motion.div
        className="flex items-center gap-2 mb-3"
        style={{ opacity: titleOpacity, y: titleY }}
      >
        <span
          className="inline-block w-2 h-2 rounded-full"
          style={{ background: "#34D399", boxShadow: "0 0 8px #34D39966" }}
        />
        <span
          className="text-xs md:text-sm font-mono font-semibold tracking-wide"
          style={{ color: "#34D399" }}
        >
          Developer mode activated
        </span>
        <motion.span
          className="inline-block w-[2px] h-3.5 ml-0.5"
          style={{ background: "#34D399", opacity: cursorOpacity }}
        />
      </motion.div>

      {/* Status lines */}
      <div className="flex flex-col gap-1.5 pl-4">
        {DEV_STATUS_LINES.map((line, i) => (
          <motion.div
            key={i}
            className="flex items-center gap-2"
            style={{ opacity: lineOpacities[i], y: lineYs[i] }}
          >
            <span className="text-xs font-mono" style={{ color: line.color }}>{line.icon}</span>
            <span className="text-[11px] font-mono tracking-wide" style={{ color: "var(--c-text-muted)" }}>
              {line.text}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function OrbitIcon({
  progress,
  item,
}: {
  progress: MotionValue<number>;
  item: OrbitIconItem;
}) {
  const orbit = polarOffset(item.angle, ORBIT_RADIUS);
  const x = useTransform(
    progress,
    [0, 0.14, 0.3, 0.52, 1],
    [item.start.x, item.start.x, item.scatter.x, orbit.x, orbit.x],
  );
  const y = useTransform(
    progress,
    [0, 0.14, 0.3, 0.52, 1],
    [item.start.y, item.start.y, item.scatter.y, orbit.y, orbit.y],
  );
  const opacity = useTransform(progress, [0, 0.08, 0.12, 0.7, 1], [0, 0, 1, 1, 0.92]);
  const scale = useTransform(progress, [0, 0.14, 0.3, 0.52, 1], [0.25, 0.7, 0.95, 1, 1.02]);
  const rotate = useTransform(progress, [0, 0.14, 0.3, 0.52, 1], [-18, -6, 8, 0, 0]);

  const Icon = item.icon;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 z-30"
      style={{ x, y, opacity, scale, rotate, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="relative">
        <div
          className="absolute inset-x-3 inset-y-1 rounded-full blur-xl"
          style={{
            background: `radial-gradient(circle, rgba(${item.glow}, 0.34) 0%, rgba(${item.glow}, 0.18) 42%, rgba(${item.glow}, 0.05) 72%, transparent 100%)`,
            transform: "scale(1.05, 0.92)",
          }}
        />
        <div
          className="relative flex w-[160px] items-center justify-center gap-2 rounded-full border px-3 py-2 backdrop-blur-md"
          style={{
            borderColor: `rgba(${item.glow}, 0.34)`,
            background: `linear-gradient(135deg, rgba(10, 14, 24, 0.88), rgba(${item.glow}, 0.18))`,
            boxShadow: `0 14px 28px rgba(6, 10, 18, 0.34), 0 0 0 1px rgba(${item.glow}, 0.1), 0 0 28px rgba(${item.glow}, 0.26), 0 0 54px rgba(${item.glow}, 0.14)`,
          }}
        >
          <span
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-mono font-semibold tracking-[0.18em]"
            style={{
              color: item.color,
              background: `rgba(${item.glow}, 0.14)`,
              boxShadow: `inset 0 0 0 1px rgba(${item.glow}, 0.2), 0 0 16px rgba(${item.glow}, 0.16)`,
            }}
          >
            {Icon ? <Icon size={14} strokeWidth={1.9} /> : item.short}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.22em]" style={{ color: "rgba(233, 237, 244, 0.92)", textShadow: `0 0 12px rgba(${item.glow}, 0.2)` }}>
            {item.label}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function TechOrbit({ progress }: { progress: MotionValue<number> }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {ORBIT_ICONS.map((item) => (
        <OrbitIcon key={item.label} progress={progress} item={item} />
      ))}
    </div>
  );
}

/* ── Hero ring (animated SVG) ────────────────────────────────────────────── */
function HeroRing({ progress }: { progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [0, 180]);
  const scale = useTransform(progress, [0, 0.4, 1], [1, 1.05, 0.9]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ scale }}
    >
      {/* Profile photo — clear image */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ pointerEvents: "none" }}>
        <div
          className="relative rounded-full overflow-hidden"
          style={{ width: "54%", height: "54%", pointerEvents: "auto" }}
        >
          <Image
            src="/img/images/marco_grimme.png"
            alt="Marco Grimme"
            fill
            sizes="(min-width: 768px) 302px, 259px"
            className="object-cover"
            draggable={false}
          />
        </div>
      </div>

      <TechOrbit progress={progress} />

      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] max-h-[500px]" suppressHydrationWarning>
        {/* Outer ring - multicolor arc */}
        <motion.circle
          cx="250" cy="250" r="230"
          fill="none" strokeWidth="2"
          stroke="url(#heroGrad)"
          strokeOpacity={0.8}
          strokeDasharray="1440"
          strokeLinecap="round"
          style={{ rotate, transformBox: "fill-box", transformOrigin: "center" }}
        />
        {/* Mid ring - dashed */}
        <motion.circle
          cx="250" cy="250" r="205"
          fill="none" strokeWidth="1"
          stroke="var(--c-ring-mid)"
          strokeDasharray="4 8"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        {/* Inner ring */}
        <motion.circle
          cx="250" cy="250" r="185"
          fill="none" strokeWidth="0.5"
          stroke="var(--c-ring-inner)"
        />
        {/* Inner-inner ring */}
        <motion.circle
          cx="250" cy="250" r="160"
          fill="none" strokeWidth="0.3"
          stroke="var(--c-ring-faint)"
          strokeDasharray="2 6"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
        {/* Tick marks on outer ring */}
        {Array.from({ length: 72 }).map((_, i) => {
          const angle = (i / 72) * 360;
          const rad = (angle * Math.PI) / 180;
          const isMajor = i % 6 === 0;
          const r = 230;
          const len = isMajor ? 12 : 5;
          const x1 = Math.round((250 + (r - 2) * Math.cos(rad)) * 100) / 100;
          const y1 = Math.round((250 + (r - 2) * Math.sin(rad)) * 100) / 100;
          const x2 = Math.round((250 + (r - 2 - len) * Math.cos(rad)) * 100) / 100;
          const y2 = Math.round((250 + (r - 2 - len) * Math.sin(rad)) * 100) / 100;
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isMajor ? "var(--c-ring-major)" : "var(--c-ring-minor)"}
              strokeWidth={isMajor ? "1.5" : "0.7"}
            />
          );
        })}
        {/* Gradient definition */}
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="20%" stopColor="#FBBF24" />
            <stop offset="40%" stopColor="#34D399" />
            <stop offset="60%" stopColor="#54C5F8" />
            <stop offset="80%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

/* ── Main Hero ───────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Section is slightly longer so the hero stays pinned a bit more before scrolling away
  const textY = useTransform(scrollYProgress, [0, 0.76, 1], ["0%", "0%", "-25%"]);
  const ringProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.78, 0.97], [1, 1, 0]);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: "110%", rotateX: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        duration: 0.7,
        delay: 0.3 + i * 0.14,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative grid-dots theme-transition"
      id="hero"
      style={{ background: "var(--c-bg)", height: "285vh" }}
    >
     {/* Sticky wrapper — pins the hero in place during sunglasses animation */}
     <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
      {/* Flickering grid background */}
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={3}
        gridGap={8}
        color="#6B7280"
        maxOpacity={0.22}
        flickerChance={0.06}
      />

      {/* Ring visual — right side */}
      <motion.div
        className="absolute right-[-5%] md:right-[3%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[560px] md:h-[560px] opacity-90"
        style={{ opacity: bgOpacity }}
      >
        <HeroRing progress={ringProgress} />
      </motion.div>

      {/* Developer Mode boot overlay */}
      <DevModeOverlay progress={ringProgress} />

      {/* Glow blobs — GPU-promoted for Safari */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#54C5F8]/4 blur-[120px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-[#A78BFA]/4 blur-[100px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-[#34D399]/3 blur-[100px] pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 max-w-[1400px] mx-auto w-full"
        style={{ y: textY, willChange: 'transform' }}
      >
        {/* Location tag */}
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="w-6 h-[1px]" style={{ background: "var(--c-text-faint)" }} />
          <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--c-text-muted)" }}>
            Göttingen, Deutschland
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            className="text-base md:text-lg font-medium tracking-tight"
            style={{ color: "var(--c-text-dim)" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Marco Grimme
          </motion.h2>
        </div>

        {/* Display headline — word by word reveal */}
        <div
          className="font-sans font-[800] leading-[0.93] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)", perspective: "1000px", color: "var(--c-text)" }}
          aria-label="Mobile App Developer"
        >
          {ROLE_WORDS.map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          className="text-sm md:text-base font-mono mb-10 tracking-wide"
          style={{ color: "var(--c-text-muted)" }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
        >
          {TAGLINE}
        </motion.p>

        {/* Stat counters */}
        <motion.div
          className="flex gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
        >
          {STATS.map((stat, i) => (
            <AnimatedStat key={stat.label} {...stat} delay={1.1 + i * 0.15} />
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm transition-colors"
            style={{ background: "var(--c-text)", color: "var(--c-bg)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
          >
            Projekte ansehen
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full border font-medium text-sm transition-all"
            style={{ borderColor: "var(--c-border)", color: "var(--c-text-dim)" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--c-border-hover)";
              el.style.color = "var(--c-text)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.borderColor = "var(--c-border)";
              el.style.color = "var(--c-text-dim)";
            }}
          >
            Kontakt
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <motion.span
            className="w-[1px] h-10"
            style={{ background: "var(--c-text-faint)", transformOrigin: "top" }}
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="text-xs font-mono tracking-widest uppercase rotate-90 origin-left translate-y-4" style={{ color: "var(--c-text-ultrafaint)" }}>
            Scroll
          </span>
        </motion.div>
      </motion.div>
     </div>{/* end sticky wrapper */}
    </section>
  );
}
