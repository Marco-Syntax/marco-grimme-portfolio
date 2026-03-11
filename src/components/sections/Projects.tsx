"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  fadeUpDramatic,
  staggerContainer,
  staggerContainerSlow,
  viewportOnce,
} from "@/lib/motion";
import { projects, type Project } from "@/lib/data";

// ─── Small project card ────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className="group relative rounded-2xl border overflow-hidden flex flex-col cursor-default theme-transition"
      style={{
        borderColor: `${project.accent}18`,
        background: "var(--c-card)",
      }}
      whileHover={{
        borderColor: `${project.accent}38`,
        y: -6,
        transition: { duration: 0.2 },
      }}
    >
      {/* Glow top edge */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}70, transparent)`,
        }}
      />

      {/* Project image */}
      {project.image && (
        <div className="relative overflow-hidden" style={{ height: "160px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient fade to card background */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 35%, rgba(var(--bg), 0.92) 100%)`,
            }}
          />
          {/* Accent color tint on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(to bottom, ${project.accent}10 0%, transparent 60%)`,
            }}
          />
          {/* Category badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: project.accent }} />
            <span
              className="text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-full"
              style={{
                background: "rgba(var(--bg), 0.72)",
                color: `${project.accent}cc`,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              {project.category}
            </span>
          </div>
        </div>
      )}

      <div className="p-5 md:p-6 flex-1 relative">
        {/* Category dot (only when no image) */}
        {!project.image && (
          <div className="flex items-center gap-2 mb-4">
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: project.accent }}
              whileHover={{ scale: 1.5 }}
            />
            <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--c-text-faint)" }}>
              {project.category}
            </span>
          </div>
        )}

        {/* Name */}
        <h3 className="text-lg md:text-xl font-[700] tracking-tight mb-1.5" style={{ color: "var(--c-text)" }}>
          {project.name}
        </h3>

        {/* Headline */}
        <p
          className="text-sm font-medium mb-3.5"
          style={{ color: `${project.accent}cc` }}
        >
          {project.headline}
        </p>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--c-text-muted)" }}>
          {project.description}
        </p>

        {/* Stack badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
              style={{
                borderColor: `${project.accent}20`,
                color: `${project.accent}70`,
                background: `${project.accent}08`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Link footer */}
      {project.link && (
        <div
          className="px-5 md:px-6 pb-5 pt-1 flex items-center justify-between border-t"
          style={{ borderColor: `${project.accent}10` }}
        >
          <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--c-text-faint)" }}>
            {project.type === "app" ? "App Store" : "Website"}
          </span>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono transition-all duration-200 opacity-40 group-hover:opacity-100"
            style={{ color: project.accent }}
            onClick={(e) => e.stopPropagation()}
          >
            Öffnen{" "}
            <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
          </a>
        </div>
      )}
    </motion.article>
  );
}

// ─── Section label ─────────────────────────────────────────────────────────────
function SectionLabel({ label, sub, accent }: { label: string; sub: string; accent: string }) {
  return (
    <motion.div
      className="mb-8 flex items-end justify-between"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div>
        <p className="text-xs font-mono uppercase tracking-widest mb-2" style={{ color: `${accent}80` }}>
          {label}
        </p>
        <p className="text-sm" style={{ color: "var(--c-text-muted)" }}>{sub}</p>
      </div>
      <motion.div
        className="hidden md:block h-[1px] flex-1 mx-8"
        style={{ background: `${accent}15` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.div>
  );
}

// ─── Main section ──────────────────────────────────────────────────────────────
export default function Projects() {
  const featured = projects.find((p) => p.highlight) ?? projects[0];
  const appProjects = projects.filter((p) => p.type === "app" && !p.highlight);
  const webProjects = projects.filter((p) => p.type === "web");

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-6 md:px-12 overflow-hidden theme-transition"
      style={{ background: "var(--c-bg)" }}
    >
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
            className="text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: "var(--c-text-faint)" }}
          >
            Ausgewählte Arbeiten
          </motion.p>
          <motion.div
            variants={fadeUpDramatic}
            className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10"
          >
            <h2
              className="font-[800] leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)", color: "var(--c-text)" }}
            >
              Projekte.
            </h2>
            <p className="text-base max-w-md leading-relaxed mb-1" style={{ color: "var(--c-text-muted)" }}>
              Apps und Web-Plattformen – von Architektur bis Store-Release.
            </p>
          </motion.div>
        </motion.div>

        {/* Spotlight — full-width featured card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.article
            className="group relative rounded-2xl border overflow-hidden theme-transition"
            style={{
              borderColor: `${featured.accent}22`,
              background: `linear-gradient(135deg, ${featured.accent}06 0%, var(--c-bg) 55%)`,
            }}
            whileHover={{
              borderColor: `${featured.accent}42`,
              transition: { duration: 0.25 },
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-[1px] opacity-50"
              style={{ background: `linear-gradient(90deg, transparent, ${featured.accent}, transparent)` }}
            />
            {/* Subtle radial bg */}
            <div
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none opacity-10"
              style={{ background: featured.accent, transform: "translateZ(0)" }}
            />

            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">

                {/* Left */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-2 h-2 rounded-full" style={{ background: featured.accent }} />
                    <span className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--c-text-faint)" }}>
                      {featured.category}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                      style={{ borderColor: `${featured.accent}35`, color: featured.accent }}
                    >
                      Spotlight
                    </span>
                  </div>

                  <h3
                    className="font-[800] tracking-tight mb-3"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: "0.95", color: "var(--c-text)" }}
                  >
                    {featured.name}
                  </h3>
                  <p className="text-base font-medium mb-4" style={{ color: featured.accent }}>
                    {featured.headline}
                  </p>
                  <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--c-text-dim)" }}>
                    {featured.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {[
                      "Kunden, Projekte, Aufgaben & Rechnungen an einem Ort",
                      "Keine Registrierung, keine Cloud-Pflicht, volle Offline-Nutzung",
                      "Einmalkauf statt Abo – klar kalkulierbar",
                    ].map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm" style={{ color: "var(--c-text-dim)" }}>
                        <span
                          className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 rounded-full"
                          style={{ background: `${featured.accent}60` }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="flex flex-col gap-6">
                  {featured.image && (
                    <motion.div
                      className="relative rounded-xl overflow-hidden flex-shrink-0"
                      style={{ height: "220px" }}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{ duration: 0.7, delay: 0.25 }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={featured.image}
                        alt={featured.name}
                        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${featured.accent}12 0%, transparent 40%)` }} />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 55%, rgba(var(--bg), 0.75) 100%)` }} />
                      <div className="absolute inset-0 rounded-xl" style={{ boxShadow: `inset 0 0 0 1px ${featured.accent}25` }} />
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {featured.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-3 py-1.5 rounded-full border"
                        style={{
                          borderColor: `${featured.accent}28`,
                          color: `${featured.accent}95`,
                          background: `${featured.accent}0a`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start text-sm font-mono px-5 py-2.5 rounded-full border transition-all duration-200"
                      style={{
                        borderColor: `${featured.accent}40`,
                        color: featured.accent,
                        background: `${featured.accent}0d`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${featured.accent}1a`;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${featured.accent}70`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${featured.accent}0d`;
                        (e.currentTarget as HTMLAnchorElement).style.borderColor = `${featured.accent}40`;
                      }}
                    >
                      Im App Store ansehen →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.article>
        </motion.div>

        {/* Apps */}
        <SectionLabel label="Apps" sub="Native und Cross-Platform – klar, performant, stabil." accent="#54C5F8" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-16"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {appProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>

        {/* Web */}
        <SectionLabel label="Websites & Web-Apps" sub="Moderne Plattformen – skalierbar, sauber umgesetzt." accent="#34D399" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5"
          variants={staggerContainerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {webProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
