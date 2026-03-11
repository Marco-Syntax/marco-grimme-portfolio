"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const NAV_GRID = [
  { label: "Apps", href: "#projects", dot: "#54C5F8" },
  { label: "Stack", href: "#stack", dot: "#34D399" },
  { label: "Architektur", href: "#anatomy", dot: "#FBBF24" },
  { label: "Flutter & Dart", href: "#flutter", dot: "#54C5F8" },
  { label: "Clean Architecture", href: "#architecture", dot: "#FF6B6B" },
  { label: "React & TypeScript", href: "#web", dot: "#34D399" },
  { label: "Backend & APIs", href: "#backend", dot: "#A78BFA" },
  { label: "Werdegang", href: "#experience", dot: "#FB923C" },
  { label: "GitHub", href: "https://github.com/Marco-Syntax", dot: "#f0ede6", external: true },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-28 px-6 md:px-12 overflow-hidden theme-transition"
      style={{ background: "var(--c-bg)" }}
    >
      {/* Background ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <svg viewBox="0 0 800 800" className="w-full max-w-[800px]">
          <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: "var(--c-text)" }} />
          <circle cx="400" cy="400" r="320" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: "var(--c-text)" }} />
          <circle cx="400" cy="400" r="260" fill="none" stroke="currentColor" strokeWidth="0.5" style={{ color: "var(--c-text)" }} />
          <circle cx="400" cy="400" r="200" fill="none" stroke="currentColor" strokeWidth="0.3" style={{ color: "var(--c-text)" }} />
        </svg>
      </div>

      {/* Animated glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(84,197,248,0.05) 0%, transparent 70%)",
          transform: "translate(-50%, -50%) translateZ(0)",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-mono uppercase tracking-widest mb-6"
            style={{ color: "var(--c-text-faint)" }}
          >
            Kontakt
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-[800] leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)", color: "var(--c-text)" }}
          >
            Lass uns<br />reden.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg leading-relaxed mb-12 max-w-lg"
            style={{ color: "var(--c-text-muted)" }}
          >
            Spezialist für Mobile App Entwicklung, Web-Apps und individuelle Business-Software.
            Remote verfügbar für Teams in Deutschland und der EU — ob Projekt, Stelle oder Freelance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-20">
            <motion.a
              href="mailto:mgrimme954@gmail.com"
              className="group flex items-center gap-4 px-8 py-4 rounded-full font-semibold text-sm theme-transition"
              style={{ background: "var(--c-text)", color: "var(--c-bg)" }}
              whileHover={{ scale: 1.03, opacity: 0.88, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
            >
              E-Mail schreiben
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </motion.a>

            <motion.a
              href="https://github.com/Marco-Syntax"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border font-medium text-sm theme-transition"
              style={{ borderColor: "var(--c-border)", color: "var(--c-text-dim)" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border-hover)";
                el.style.color = "var(--c-text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border)";
                el.style.color = "var(--c-text-dim)";
              }}
            >
              GitHub
              <span className="opacity-50 text-xs">↗</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/marco-grimme"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border font-medium text-sm theme-transition"
              style={{ borderColor: "var(--c-border)", color: "var(--c-text-dim)" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border-hover)";
                el.style.color = "var(--c-text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border)";
                el.style.color = "var(--c-text-dim)";
              }}
            >
              LinkedIn
              <span className="opacity-50 text-xs">↗</span>
            </motion.a>
          </motion.div>

          {/* Navigation grid */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "var(--c-text-ultrafaint)" }}>
              Schnellnavigation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {NAV_GRID.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between px-5 py-3.5 rounded-xl border transition-all duration-200"
                  style={{ borderColor: "var(--c-border-subtle)" }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--c-border)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--c-border-subtle)"; }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.dot === "#f0ede6" ? "var(--c-text)" : item.dot }} />
                    <span className="text-sm transition-colors" style={{ color: "var(--c-text-dim)" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "var(--c-text)"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLSpanElement).style.color = "var(--c-text-dim)"; }}
                    >
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs transition-colors" style={{ color: "var(--c-text-faint)" }}>
                    {item.external ? "↗" : "→"}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location note */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-xs font-mono mt-12"
            style={{ color: "var(--c-text-faint)" }}
          >
            <span className="w-4 h-[1px] bg-current" />
            Göttingen, Deutschland · Remote verfügbar
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
