"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/lib/theme";

/* ── Sun icon ──────────────────────────────────────────────────────────── */
function SunIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="8" cy="8" r="3" fill="currentColor" />
      {/* Rays */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => {
        const rad = (deg * Math.PI) / 180;
        const x1 = 8 + 5 * Math.cos(rad);
        const y1 = 8 + 5 * Math.sin(rad);
        const x2 = 8 + 7 * Math.cos(rad);
        const y2 = 8 + 7 * Math.sin(rad);
        return (
          <line
            key={deg}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/* ── Moon icon ─────────────────────────────────────────────────────────── */
function MoonIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M13.5 10.5A6 6 0 015.5 2.5a6 6 0 108 8z"
        fill="currentColor"
      />
    </svg>
  );
}

/* ── ThemeToggle ────────────────────────────────────────────────────────── */
export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? "Light Mode aktivieren" : "Dark Mode aktivieren"}
      className="relative flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#54C5F8] focus-visible:ring-offset-2 rounded-full"
      style={{
        width: 52,
        height: 26,
      }}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {/* ── Track ─────────────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "rgba(240,237,230,0.08)"
            : "rgba(30,26,20,0.1)",
          borderColor: isDark
            ? "rgba(240,237,230,0.14)"
            : "rgba(30,26,20,0.18)",
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ border: "1px solid" }}
      />

      {/* ── Sliding thumb ─────────────────────────────────────── */}
      <motion.div
        className="absolute flex items-center justify-center rounded-full z-10"
        style={{ width: 20, height: 20, top: 3 }}
        animate={{
          x: isDark ? 3 : 29,
          background: isDark
            ? "rgba(240,237,230,0.9)"
            : "rgba(255,255,255,0.95)",
          boxShadow: isDark
            ? "0 1px 4px rgba(0,0,0,0.4)"
            : "0 1px 6px rgba(30,26,20,0.18)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 38 }}
      >
        {/* Icon inside thumb */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              color: isDark ? "#1a1916" : "#8B6E2A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isDark ? <MoonIcon /> : <SunIcon />}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}
