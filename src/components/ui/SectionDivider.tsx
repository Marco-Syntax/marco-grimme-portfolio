"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";
import { useTheme } from "@/lib/theme";

type DividerVariant = "dark-to-light" | "light-to-dark";

export default function SectionDivider({ variant }: { variant: DividerVariant }) {
  const { isDark } = useTheme();
  const isDarkToLight = variant === "dark-to-light";

  // In dark mode: standard dark→light or light→dark
  // In light mode: both are light, just use the two light shades
  const fromColor = isDark
    ? isDarkToLight ? "#0f0e0c" : "#dcd8cc"
    : isDarkToLight ? "#F2EEE8" : "#E8E3DA";
  const toColor = isDark
    ? isDarkToLight ? "#dcd8cc" : "#0f0e0c"
    : isDarkToLight ? "#E8E3DA" : "#F2EEE8";

  // Decorative line color
  const lineColor = isDark
    ? isDarkToLight
      ? "linear-gradient(90deg, transparent, rgba(240,237,230,0.2), transparent)"
      : "linear-gradient(90deg, transparent, rgba(26,24,22,0.2), transparent)"
    : "linear-gradient(90deg, transparent, rgba(30,26,20,0.12), transparent)";

  return (
    <div className="relative theme-transition" style={{ background: fromColor }}>
      {/* Gradient blend */}
      <div
        className="h-32 md:h-48"
        style={{ background: `linear-gradient(to bottom, ${fromColor}, ${toColor})` }}
      />

      {/* Decorative center line with glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div
          className="w-[200px] md:w-[400px] h-[1px]"
          style={{ background: lineColor }}
        />
      </motion.div>
    </div>
  );
}
