"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import { projects } from "@/lib/data";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={scaleIn}
      className="group relative rounded-2xl border overflow-hidden transition-all duration-500 cursor-default"
      style={{
        borderColor: `${project.accent}15`,
        background: "rgba(255,255,255,0.02)",
      }}
      whileHover={{
        borderColor: `${project.accent}35`,
        background: "rgba(255,255,255,0.035)",
        y: -4,
        transition: { duration: 0.25 },
      }}
    >
      {/* Glow top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}60, transparent)` }}
      />

      <div className="p-6 md:p-8">
        {/* Category + accent dot */}
        <div className="flex items-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full" style={{ background: project.accent }} />
          <span className="text-[11px] font-mono text-[rgba(240,237,230,0.35)] uppercase tracking-widest">
            {project.category}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-xl md:text-2xl font-[700] text-[#f0ede6] tracking-tight mb-2">
          {project.name}
        </h3>

        {/* Headline */}
        <p className="text-sm font-medium mb-4" style={{ color: `${project.accent}` }}>
          {project.headline}
        </p>

        {/* Description */}
        <p className="text-sm text-[rgba(240,237,230,0.45)] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
              style={{
                borderColor: `${project.accent}20`,
                color: `${project.accent}80`,
                background: `${project.accent}08`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom arrow indicator */}
      <div
        className="px-8 pb-5 flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span
          className="text-xs font-mono flex items-center gap-1.5"
          style={{ color: `${project.accent}70` }}
        >
          Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
        </span>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="relative bg-[#0f0e0c] py-28 md:py-36 px-6 md:px-12 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-dots pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-16 md:mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-4"
          >
            Ausgewählte Arbeiten
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            Projekte.
          </motion.h2>
        </motion.div>

        {/* Featured project — full width */}
        <motion.div
          className="mb-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.article
            className="group relative rounded-2xl border overflow-hidden"
            style={{
              borderColor: `${featured.accent}20`,
              background: `linear-gradient(135deg, ${featured.accent}06 0%, rgba(0,0,0,0) 60%)`,
            }}
            whileHover={{
              borderColor: `${featured.accent}40`,
              transition: { duration: 0.25 },
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-[1px] opacity-40"
              style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, transparent)` }}
            />
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-2 h-2 rounded-full" style={{ background: featured.accent }} />
                    <span className="text-[11px] font-mono text-[rgba(240,237,230,0.35)] uppercase tracking-widest">
                      {featured.category}
                    </span>
                    <span
                      className="ml-2 text-[10px] font-mono px-2 py-0.5 rounded-full border"
                      style={{ borderColor: `${featured.accent}30`, color: `${featured.accent}` }}
                    >
                      Featured
                    </span>
                  </div>
                  <h3
                    className="font-[800] text-[#f0ede6] tracking-tight mb-3"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "0.95" }}
                  >
                    {featured.name}
                  </h3>
                  <p className="text-base font-medium mb-4" style={{ color: featured.accent }}>
                    {featured.headline}
                  </p>
                  <p className="text-sm text-[rgba(240,237,230,0.5)] leading-relaxed max-w-md">
                    {featured.description}
                  </p>
                </div>
                <div className="flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-full border"
                        style={{
                          borderColor: `${featured.accent}25`,
                          color: `${featured.accent}90`,
                          background: `${featured.accent}08`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Project grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {rest.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
