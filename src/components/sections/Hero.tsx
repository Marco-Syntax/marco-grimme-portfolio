"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView, type MotionValue, type Variants } from "framer-motion";

const ROLE_WORDS = ["Mobile", "App", "Developer."];
const TAGLINE = "Flutter · SwiftUI · Kotlin · Python · FastAPI";

const STATS = [
  { value: 8, suffix: "+", label: "Apps gebaut", color: "#54C5F8" },
  { value: 5, suffix: "", label: "Plattformen", color: "#34D399" },
  { value: 92, suffix: "%", label: "IHK-Note", color: "#FBBF24" },
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

/* ── Sunglasses overlay (scroll-driven cinematic animation) ──────────────── */
function SunglassesOverlay({ progress }: { progress: MotionValue<number> }) {
  // Scroll progress is 0→1 over 200vh section.
  // Sticky phase = progress 0→0.5 (100vh of scroll, hero pinned).
  // Glasses animation fires in the very first scroll ticks:
  //   0.00        idle — no glasses
  //   0.01→0.03   fade in
  //   0.03→0.12   drop into position with rotation
  //   0.12→0.16   overshoot + settle
  //   0.16→0.24   shine sweep
  //   0.24+       glasses fixed in place

  const y = useTransform(
    progress,
    [0, 0.01, 0.11, 0.14, 0.16],
    ["-220%", "-220%", "6%", "-3%", "0%"],
  );
  const opacity = useTransform(progress, [0, 0.01, 0.04], [0, 0, 1]);
  const rotate = useTransform(
    progress,
    [0, 0.01, 0.10, 0.14, 0.16],
    [-14, -14, 2.5, -1, 0],
  );
  const scaleVal = useTransform(
    progress,
    [0, 0.01, 0.11, 0.14, 0.16],
    [0.65, 0.65, 1.06, 0.97, 1],
  );

  // Shine sweep after landing
  const shineX = useTransform(progress, [0.16, 0.26], ["-100%", "300%"]);
  const shineOpacity = useTransform(progress, [0.16, 0.18, 0.23, 0.26], [0, 0.65, 0.65, 0]);

  // Subtle glow bloom
  const glowOpacity = useTransform(progress, [0.14, 0.22], [0, 0.3]);

  return (
    <motion.div
      className="absolute left-0 right-0 pointer-events-none"
      style={{
        top: "31%",
        y,
        opacity,
        rotate,
        scale: scaleVal,
        transformOrigin: "center 30%",
        filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.35))",
      }}
    >
      <div className="relative mx-auto" style={{ width: "33%" }}>
        {/* ── SVG sunglasses — sleek aviator style ── */}
        <svg
          viewBox="0 0 200 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="sg-lens-l" x1="0" y1="0" x2="0.3" y2="1">
              <stop offset="0%" stopColor="#1c1e3e" stopOpacity={0.92} />
              <stop offset="50%" stopColor="#101228" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#080a1a" stopOpacity={0.98} />
            </linearGradient>
            <linearGradient id="sg-lens-r" x1="0.7" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1c1e3e" stopOpacity={0.92} />
              <stop offset="50%" stopColor="#101228" stopOpacity={0.95} />
              <stop offset="100%" stopColor="#080a1a" stopOpacity={0.98} />
            </linearGradient>
            <linearGradient id="sg-glare" x1="0.1" y1="0" x2="0.6" y2="0.9">
              <stop offset="0%" stopColor="#ffffff" stopOpacity={0.16} />
              <stop offset="30%" stopColor="#aaccff" stopOpacity={0.06} />
              <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sg-frame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6a6a88" />
              <stop offset="100%" stopColor="#2e2e4a" />
            </linearGradient>
          </defs>

          {/* Top frame bar */}
          <rect x="4" y="8" width="192" height="3" rx="1.5" fill="url(#sg-frame)" />

          {/* Left lens */}
          <rect x="5" y="10.5" width="86" height="32" rx="7" fill="url(#sg-lens-l)" stroke="url(#sg-frame)" strokeWidth="1.8" />
          <rect x="5" y="10.5" width="86" height="32" rx="7" fill="url(#sg-glare)" />

          {/* Right lens */}
          <rect x="109" y="10.5" width="86" height="32" rx="7" fill="url(#sg-lens-r)" stroke="url(#sg-frame)" strokeWidth="1.8" />
          <rect x="109" y="10.5" width="86" height="32" rx="7" fill="url(#sg-glare)" />

          {/* Bridge */}
          <path d="M91 17 C96 9, 104 9, 109 17" stroke="url(#sg-frame)" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Temple arm hints */}
          <line x1="5" y1="15" x2="0" y2="13" stroke="url(#sg-frame)" strokeWidth="1.3" strokeLinecap="round" opacity={0.45} />
          <line x1="195" y1="15" x2="200" y2="13" stroke="url(#sg-frame)" strokeWidth="1.3" strokeLinecap="round" opacity={0.45} />
        </svg>

        {/* ── Animated shine sweep on lenses ── */}
        <motion.div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ opacity: shineOpacity }}
        >
          <motion.div
            className="absolute top-[20%] bottom-[15%] w-[14%]"
            style={{
              left: shineX,
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
              filter: "blur(2px)",
            }}
          />
        </motion.div>

        {/* ── Subtle glow bloom ── */}
        <motion.div
          className="absolute inset-[-20%] pointer-events-none"
          style={{
            opacity: glowOpacity,
            background: "radial-gradient(ellipse at center, rgba(84,197,248,0.1) 0%, transparent 70%)",
            filter: "blur(8px)",
          }}
        />
      </div>
    </motion.div>
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
          className="rounded-full overflow-hidden"
          style={{ width: "54%", height: "54%", pointerEvents: "auto" }}
        >
          <img
            src="/img/images/marco_grimme.png"
            alt="Marco Grimme"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>
      </div>
      {/* Sunglasses overlay — floats above photo, not clipped to circle */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 5 }}>
        <div className="relative" style={{ width: "54%", height: "54%" }}>
          <SunglassesOverlay progress={progress} />
        </div>
      </div>
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

  // Section is 200vh: progress 0→0.5 = sticky phase (hero pinned), 0.5→1 = scrolls away
  const textY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "0%", "-25%"]);
  const ringProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0]);

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
      style={{ background: "var(--c-bg)", height: "200vh" }}
    >
     {/* Sticky wrapper — pins the hero in place during sunglasses animation */}
     <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
      {/* Ring visual — right side */}
      <motion.div
        className="absolute right-[-5%] md:right-[3%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[560px] md:h-[560px] opacity-90"
        style={{ opacity: bgOpacity }}
      >
        <HeroRing progress={ringProgress} />
      </motion.div>

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
