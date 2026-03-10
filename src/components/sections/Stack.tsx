"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpDramatic, staggerContainer, viewportOnce } from "@/lib/motion";
import { skills } from "@/lib/data";

const CLUSTER_COLORS: Record<string, string> = {
  "Product & Design": "#A78BFA",
  "Platforms": "#54C5F8",
  "Web": "#34D399",
  "Backend": "#FF6B6B",
  "Cloud & Ops": "#FBBF24",
  "AI & Automation": "#FB923C",
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
            Tech-Infrastruktur
          </motion.p>
          <motion.h2
            variants={fadeUpDramatic}
            className="font-[800] text-[#1a1816] leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Der Stack.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-[rgba(26,24,22,0.5)] leading-relaxed max-w-xl"
          >
            Ein pragmatischer Stack: von UI bis Deploy.
          </motion.p>
        </motion.div>

        {/* Skill clusters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {(Object.entries(skills) as [string, readonly string[]][]).map(
            ([cluster, items], clusterIndex) => {
              const color = CLUSTER_COLORS[cluster] ?? "#54C5F8";
              return (
                <motion.div
                  key={cluster}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.6,
                      delay: clusterIndex * 0.1,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  viewport={viewportOnce}
                  className="group rounded-2xl border p-6 md:p-8 relative overflow-hidden transition-all duration-300"
                  style={{
                    borderColor: `${color}20`,
                    background: "rgba(255,255,255,0.03)",
                  }}
                  whileHover={{
                    borderColor: `${color}40`,
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Top edge glow on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}
                  />

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
                      style={{ color }}
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
                          hidden: { opacity: 0, scale: 0.8, filter: "blur(4px)" },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            filter: "blur(0px)",
                            transition: {
                              duration: 0.45,
                              delay: i * 0.06,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            },
                          },
                        }}
                        className="text-xs font-mono px-3 py-1.5 rounded-full border relative cursor-default"
                        style={{
                          borderColor: `${color}20`,
                          color: "rgba(26,24,22,0.75)",
                          background: `${color}10`,
                        }}
                        whileHover={{
                          borderColor: `${color}50`,
                          background: `${color}20`,
                          color: "#1a1816",
                          scale: 1.06,
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
