"use client";

import { useScroll, motion, useSpring, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { useState } from "react";

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
    stiffness: 80,
    damping: 35,
    restDelta: 0.005,
  });

  const showBar = useTransform(smoothProgress, [0, 0.02], [0, 1]);
  const barWidth = useTransform(smoothProgress, (v: number) => `${v * 100}%`);

  return (
    <>
      {/* Bottom-right progress indicator */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2"
        style={{ opacity: showBar, transform: 'translateZ(0)' }}
      >
        <PercentageLabel progress={smoothProgress} />
        <div className="w-16 h-[3px] rounded-full bg-[rgba(240,237,230,0.1)] overflow-hidden">
          <motion.div
            className="h-full rounded-full origin-left"
            style={{
              width: barWidth,
              background: "linear-gradient(90deg, #54C5F8, #A78BFA)",
            }}
          />
        </div>
      </motion.div>

      {/* Top rainbow progress line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[1px]" style={{ transform: 'translateZ(0)' }}>
        <motion.div
          className="h-full origin-left"
          style={{
            scaleX: smoothProgress,
            background: "linear-gradient(90deg, #54C5F8, #34D399, #FBBF24, #FF6B6B, #A78BFA)",
            willChange: 'transform',
          }}
        />
      </div>
    </>
  );
}
