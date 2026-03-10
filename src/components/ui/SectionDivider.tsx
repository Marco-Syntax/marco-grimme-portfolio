"use client";

import { motion } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

type DividerVariant = "dark-to-light" | "light-to-dark";

export default function SectionDivider({ variant }: { variant: DividerVariant }) {
  const isDarkToLight = variant === "dark-to-light";
  const fromColor = isDarkToLight ? "#0f0e0c" : "#dcd8cc";
  const toColor = isDarkToLight ? "#dcd8cc" : "#0f0e0c";

  return (
    <div className="relative" style={{ background: fromColor }}>
      {/* Gradient blend */}
      <div
        className="h-32 md:h-48"
        style={{
          background: `linear-gradient(to bottom, ${fromColor}, ${toColor})`,
        }}
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
          style={{
            background: isDarkToLight
              ? "linear-gradient(90deg, transparent, rgba(240,237,230,0.2), transparent)"
              : "linear-gradient(90deg, transparent, rgba(26,24,22,0.2), transparent)",
          }}
        />
      </motion.div>
    </div>
  );
}
