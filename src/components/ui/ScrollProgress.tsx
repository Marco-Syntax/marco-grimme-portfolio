"use client";

import { useScroll, motion, useSpring, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { useState } from "react";

const SEGMENTS = 40;

function PercentageLabel({ progress }: { progress: MotionValue<number> }) {
  const [pct, setPct] = useState(0);
  useMotionValueEvent(progress, "change", (v) => setPct(Math.round(v * 100)));
  return (
    <span className="text-[10px] font-mono text-[rgba(240,237,230,0.3)] mr-1 mb-[-2px] tabular-nums">
      {pct}%
    </span>
  );
}

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const showBar = useTransform(smoothProgress, [0, 0.02], [0, 1]);

  return (
    <>
      {/* Bottom-right segmented progress bar — animejs-inspired */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-end gap-1.5"
        style={{ opacity: showBar }}
      >
        <PercentageLabel progress={smoothProgress} />
        <div className="flex gap-[2px] items-end">
          {Array.from({ length: SEGMENTS }).map((_, i) => (
            <ProgressSegment
              key={i}
              progress={smoothProgress}
              segStart={i / SEGMENTS}
              segEnd={(i + 1) / SEGMENTS}
            />
          ))}
        </div>
      </motion.div>

      {/* Top rainbow progress line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[1px]">
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: smoothProgress,
            background: "linear-gradient(90deg, #54C5F8, #34D399, #FBBF24, #FF6B6B, #A78BFA)",
          }}
        />
      </div>
    </>
  );
}

function ProgressSegment({
  progress,
  segStart,
  segEnd,
}: {
  progress: MotionValue<number>;
  segStart: number;
  segEnd: number;
}) {
  const opacity = useTransform(progress, [Math.max(0, segStart - 0.05), segEnd], [0.1, 0.85]);
  const height = useTransform(progress, [Math.max(0, segStart - 0.05), segEnd], [6, 14]);
  const bg = useTransform(progress, (v: number) =>
    v >= segStart && v < segEnd + 0.025 ? "#FF6B6B" : "rgba(240,237,230,0.4)"
  );

  return (
    <motion.div
      className="w-[2px] rounded-full"
      style={{ height, opacity, backgroundColor: bg }}
    />
  );
}
