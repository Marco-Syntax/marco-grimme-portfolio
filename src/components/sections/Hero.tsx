"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue, type Variants } from "framer-motion";

const ROLE_WORDS = ["Mobile", "App", "Developer."];
const TAGLINE = "Flutter · SwiftUI · Kotlin · Python · FastAPI";

function HeroRing({ progress }: { progress: MotionValue<number> }) {
  const rotate = useTransform(progress, [0, 1], [0, 180]);
  const scale = useTransform(progress, [0, 0.4, 1], [1, 1.05, 0.9]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ scale }}
    >
      <svg viewBox="0 0 500 500" className="w-full h-full max-w-[500px] max-h-[500px]" suppressHydrationWarning>
        {/* Outer ring - multicolor arc */}
        <motion.circle
          cx="250" cy="250" r="230"
          fill="none" strokeWidth="1.5"
          stroke="url(#heroGrad)"
          strokeOpacity={0.7}
          strokeDasharray="1440"
          strokeLinecap="round"
          style={{ rotate, transformOrigin: "50% 50%" }}
        />
        {/* Mid ring - dashed */}
        <motion.circle
          cx="250" cy="250" r="205"
          fill="none" strokeWidth="1"
          stroke="rgba(240,237,230,0.12)"
          strokeDasharray="4 8"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        />
        {/* Inner ring - solid thin */}
        <motion.circle
          cx="250" cy="250" r="185"
          fill="none" strokeWidth="0.5"
          stroke="rgba(240,237,230,0.08)"
        />
        {/* Tick marks on outer ring */}
        {Array.from({ length: 60 }).map((_, i) => {
          const angle = (i / 60) * 360;
          const rad = (angle * Math.PI) / 180;
          const isMajor = i % 5 === 0;
          const r = 230;
          const len = isMajor ? 10 : 5;
          const x1 = 250 + (r - 2) * Math.cos(rad);
          const y1 = 250 + (r - 2) * Math.sin(rad);
          const x2 = 250 + (r - 2 - len) * Math.cos(rad);
          const y2 = 250 + (r - 2 - len) * Math.sin(rad);
          return (
            <line
              key={i}
              x1={x1} y1={y1} x2={x2} y2={y2}
              stroke={isMajor ? "rgba(240,237,230,0.25)" : "rgba(240,237,230,0.1)"}
              strokeWidth={isMajor ? "1.5" : "0.8"}
            />
          );
        })}
        {/* Center dot grid */}
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => {
            const x = 180 + col * 23;
            const y = 180 + row * 23;
            const dist = Math.sqrt((x - 250) ** 2 + (y - 250) ** 2);
            if (dist > 80) return null;
            return (
              <motion.circle
                key={`${row}-${col}`}
                cx={x} cy={y} r="1.2"
                fill="rgba(240,237,230,0.2)"
                animate={{ opacity: [0.2, 0.8, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (row + col) * 0.15,
                  ease: "easeInOut",
                }}
              />
            );
          })
        )}
        {/* Gradient definition */}
        <defs>
          <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B6B" />
            <stop offset="25%" stopColor="#FBBF24" />
            <stop offset="50%" stopColor="#34D399" />
            <stop offset="75%" stopColor="#54C5F8" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const ringProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: "110%", rotateX: -30 },
    visible: (i: number) => ({
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: {
        duration: 0.65,
        delay: 0.2 + i * 0.12,
        ease: [0.215, 0.61, 0.355, 1.0],
      },
    }),
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col bg-[#0f0e0c] overflow-hidden grid-dots"
      id="hero"
    >
      {/* Ring visual — right side */}
      <div className="absolute right-[-5%] md:right-[3%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] md:w-[560px] md:h-[560px] opacity-90">
        <HeroRing progress={ringProgress} />
      </div>

      {/* Glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#54C5F8]/4 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-[#A78BFA]/4 blur-[100px] pointer-events-none" />

      {/* Main content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 max-w-[1400px] mx-auto w-full"
        style={{ y: textY }}
      >
        {/* Location tag */}
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="w-4 h-[1px] bg-[rgba(240,237,230,0.3)]" />
          <span className="text-xs font-mono text-[rgba(240,237,230,0.4)] tracking-widest uppercase">
            Göttingen, Deutschland
          </span>
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-3">
          <motion.h2
            className="text-base md:text-lg font-medium text-[rgba(240,237,230,0.5)] tracking-tight"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Marco Grimme
          </motion.h2>
        </div>

        {/* Display headline — word by word reveal */}
        <div
          className="font-sans font-[800] text-[#f0ede6] leading-[0.93] tracking-[-0.03em] mb-8"
          style={{ fontSize: "clamp(3.2rem, 8.5vw, 7.5rem)" }}
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
          className="text-sm md:text-base font-mono text-[rgba(240,237,230,0.35)] mb-12 tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        >
          {TAGLINE}
        </motion.p>

        {/* CTA row */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <a
            href="#projects"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#f0ede6] text-[#0f0e0c] font-semibold text-sm hover:bg-white transition-colors"
          >
            Projekte ansehen
            <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="#contact"
            className="flex items-center gap-3 px-7 py-3.5 rounded-full border border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.7)] font-medium text-sm hover:border-[rgba(240,237,230,0.35)] hover:text-[#f0ede6] transition-all"
          >
            Kontakt
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-10 left-6 md:left-12 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.span
            className="w-[1px] h-10 bg-[rgba(240,237,230,0.2)]"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
          <span className="text-xs font-mono text-[rgba(240,237,230,0.25)] tracking-widest uppercase rotate-90 origin-left translate-y-4">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
