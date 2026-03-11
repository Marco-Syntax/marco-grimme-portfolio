"use client";

import {
  useScroll,
  motion,
  useSpring,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useState, useCallback } from "react";

// Ring geometry
const SIZE = 56;
const R = 22;
const CIRC = 2 * Math.PI * R;

function useSmoothedPct(mv: ReturnType<typeof useSpring>) {
  const [pct, setPct] = useState(0);
  useMotionValueEvent(mv, "change", (v) => setPct(Math.round(v * 100)));
  return pct;
}

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.005,
  });

  const pct = useSmoothedPct(smooth);

  // Fade in after first 4% of scroll
  const opacity = useTransform(smooth, [0, 0.04], [0, 1]);

  // Ring: full CIRC at 0% → 0 at 100%
  const dashOffset = useTransform(smooth, (v) => CIRC * (1 - v));

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* ── Top rainbow progress line ──────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-[1px] pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      >
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: smooth,
            background:
              "linear-gradient(90deg, #54C5F8, #34D399, #FBBF24, #FF6B6B, #A78BFA)",
            willChange: "transform",
          }}
        />
      </div>

      {/* ── Premium scroll-to-top / progress ring button ───────────────── */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        style={{ opacity, transform: "translateZ(0)" }}
      >
        <motion.button
          onClick={scrollToTop}
          className="relative cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#54C5F8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0e0c] rounded-full"
          style={{ width: SIZE, height: SIZE }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          aria-label={`Zum Seitenanfang — ${pct}% gelesen`}
        >
          {/* Glass disc */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: "rgba(15,14,12,0.88)",
              border: "1px solid rgba(240,237,230,0.09)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              boxShadow:
                "0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          />

          {/* Hover glow */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(84,197,248,0.16) 0%, transparent 68%)",
            }}
          />

          {/* SVG progress ring */}
          <svg
            className="absolute inset-0"
            width={SIZE}
            height={SIZE}
            viewBox={`0 0 ${SIZE} ${SIZE}`}
            style={{ transform: "rotate(-90deg)" }}
            aria-hidden="true"
          >
            {/* Track */}
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              stroke="rgba(240,237,230,0.07)"
              strokeWidth={2.5}
            />
            {/* Progress arc */}
            <motion.circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              fill="none"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeDasharray={CIRC}
              style={{
                strokeDashoffset: dashOffset,
                stroke: "url(#scrollProgressGrad)",
              }}
            />
            <defs>
              <linearGradient
                id="scrollProgressGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#54C5F8" />
                <stop offset="50%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#FF6B6B" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center label: percentage / arrow on hover */}
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-full">
            <span
              className="text-[10px] font-mono tabular-nums leading-none select-none group-hover:opacity-0 transition-opacity duration-200"
              style={{ color: "rgba(240,237,230,0.5)" }}
            >
              {pct}%
            </span>
            <span
              className="absolute text-[14px] leading-none select-none opacity-0 group-hover:opacity-100 group-hover:-translate-y-0 transition-all duration-200 translate-y-1"
              style={{ color: "rgba(240,237,230,0.85)" }}
            >
              ↑
            </span>
          </div>
        </motion.button>
      </motion.div>
    </>
  );
}
