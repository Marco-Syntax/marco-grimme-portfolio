"use client";

import { motion } from "framer-motion";
import { charReveal, staggerContainerFast } from "@/lib/motion";

interface SplitTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function SplitText({
  text,
  className = "",
  as: Tag = "h1",
  delay = 0,
}: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="flex flex-wrap"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.07, delayChildren: delay },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, i) => (
          <span key={i} className="overflow-hidden mr-[0.25em] last:mr-0">
            <motion.span
              className="inline-block"
              variants={charReveal}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
