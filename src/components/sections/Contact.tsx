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
      className="relative min-h-screen bg-[#0f0e0c] flex items-center py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* Background ring decoration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg viewBox="0 0 800 800" className="w-full max-w-[800px] opacity-[0.04]">
          <circle cx="400" cy="400" r="380" fill="none" stroke="#f0ede6" strokeWidth="1" />
          <circle cx="400" cy="400" r="320" fill="none" stroke="#f0ede6" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="260" fill="none" stroke="#f0ede6" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#f0ede6" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(84,197,248,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
            className="text-xs font-mono text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-6"
          >
            Kontakt
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-[800] text-[#f0ede6] leading-[0.92] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Lass uns<br />reden.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-[rgba(240,237,230,0.45)] leading-relaxed mb-12 max-w-lg"
          >
            Spezialist für Mobile App Entwicklung, Web-Apps und individuelle Business-Software.
            Remote verfügbar für Teams in Deutschland und der EU — ob Projekt, Stelle oder Freelance.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-4 mb-20"
          >
            <motion.a
              href="mailto:mgrimme954@gmail.com"
              className="group flex items-center gap-4 px-8 py-4 rounded-full bg-[#f0ede6] text-[#0f0e0c] font-semibold text-sm"
              whileHover={{ scale: 1.03, transition: { duration: 0.15 } }}
              whileTap={{ scale: 0.98 }}
            >
              E-Mail schreiben
              <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
            </motion.a>

            <motion.a
              href="https://github.com/Marco-Syntax"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.65)] font-medium text-sm"
              whileHover={{
                borderColor: "rgba(240,237,230,0.35)",
                color: "#f0ede6",
                scale: 1.02,
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              GitHub
              <span className="opacity-50 text-xs">↗</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/marco-grimme"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 px-8 py-4 rounded-full border border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.65)] font-medium text-sm"
              whileHover={{
                borderColor: "rgba(240,237,230,0.35)",
                color: "#f0ede6",
                scale: 1.02,
                transition: { duration: 0.15 },
              }}
              whileTap={{ scale: 0.98 }}
            >
              LinkedIn
              <span className="opacity-50 text-xs">↗</span>
            </motion.a>
          </motion.div>

          {/* Navigation grid — animejs-inspired CTA grid with colored dots */}
          <motion.div variants={fadeUp}>
            <p className="text-xs font-mono text-[rgba(240,237,230,0.2)] uppercase tracking-widest mb-5">
              Schnellnavigation
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {NAV_GRID.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between px-5 py-3.5 rounded-xl border border-[rgba(240,237,230,0.08)] hover:border-[rgba(240,237,230,0.2)] transition-all duration-200"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -2, transition: { duration: 0.15 } }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.dot }} />
                    <span className="text-sm text-[rgba(240,237,230,0.6)] group-hover:text-[#f0ede6] transition-colors">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-xs text-[rgba(240,237,230,0.2)] group-hover:text-[rgba(240,237,230,0.5)] transition-colors">
                    {item.external ? "↗" : "→"}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Location note */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 text-xs font-mono text-[rgba(240,237,230,0.2)] mt-12"
          >
            <span className="w-4 h-[1px] bg-current" />
            Göttingen, Deutschland · Remote verfügbar
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
