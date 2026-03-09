"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 h-[2px] bg-white/5">
      <motion.div
        className="h-full bg-white/40 origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
