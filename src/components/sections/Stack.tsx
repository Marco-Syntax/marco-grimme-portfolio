"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { skills } from "@/lib/data";

const CLUSTER_COLORS: Record<string, string> = {
  "Mobile": "#54C5F8",
  "Architecture": "#FF6B6B",
  "Backend": "#34D399",
  "Data": "#FBBF24",
  "Tooling": "#A78BFA",
  "Platforms": "#FB923C",
};

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative bg-[#dcd8cc] py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-dots-light pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono text-[rgba(26,24,22,0.35)] uppercase tracking-widest mb-4"
          >
            Technologien & Tools
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[800] text-[#1a1816] leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Der Stack.
          </motion.h2>
        </motion.div>

        {/* Skill clusters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(Object.entries(skills) as [string, readonly string[]][]).map(
            ([cluster, items], clusterIndex) => {
              const color = CLUSTER_COLORS[cluster] ?? "#54C5F8";
              return (
                <motion.div
                  key={cluster}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  transition={{ delay: clusterIndex * 0.07 }}
                  className="rounded-2xl border p-6 md:p-8 relative overflow-hidden"
                  style={{
                    borderColor: `${color}20`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  {/* Cluster background accent */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl pointer-events-none opacity-20"
                    style={{ background: color }}
                  />

                  {/* Cluster header */}
                  <div className="flex items-center gap-2.5 mb-5 relative">
                    <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                    <p
                      className="text-xs font-mono uppercase tracking-widest font-semibold"
                      style={{ color: `${color}` }}
                    >
                      {cluster}
                    </p>
                  </div>

                  {/* Skill tags */}
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOnce}
                  >
                    {items.map((skill, i) => (
                      <motion.span
                        key={skill}
                        variants={{
                          hidden: { opacity: 0, scale: 0.85 },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            transition: {
                              duration: 0.4,
                              delay: i * 0.05,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          },
                        }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full border relative"
                        style={{
                          borderColor: `${color}20`,
                          color: "rgba(26,24,22,0.75)",
                          background: `${color}10`,
                        }}
                        whileHover={{
                          borderColor: `${color}50`,
                          background: `${color}18`,
                          color: "#1a1816",
                          scale: 1.04,
                          transition: { duration: 0.15 },
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}
