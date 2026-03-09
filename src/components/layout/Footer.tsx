"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Footer() {
  return (
    <footer className="bg-[#0f0e0c] border-t border-white/5 py-16 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Col 1: Identity */}
          <motion.div variants={fadeUp}>
            <p className="text-sm font-semibold text-[#f0ede6] mb-2">Marco Grimme</p>
            <p className="text-sm text-[rgba(240,237,230,0.4)] leading-relaxed">
              Mobile App Developer<br />
              Göttingen, Deutschland
            </p>
          </motion.div>

          {/* Col 2: Navigation */}
          <motion.div variants={fadeUp}>
            <p className="text-xs text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {["Projekte", "Stack", "Architektur", "Kontakt"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-[rgba(240,237,230,0.5)] hover:text-[#f0ede6] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-current opacity-40 group-hover:w-5 transition-all" />
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Col 3: Contact */}
          <motion.div variants={fadeUp}>
            <p className="text-xs text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-4">Kontakt</p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "GitHub", href: "https://github.com/marcogrimme" },
                { label: "LinkedIn", href: "https://linkedin.com/in/marcogrimme" },
                { label: "E-Mail", href: "mailto:marco@grimme.dev" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[rgba(240,237,230,0.5)] hover:text-[#f0ede6] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-current opacity-40 group-hover:w-5 transition-all" />
                  {item.label}
                  <span className="opacity-30 text-[10px]">↗</span>
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Bottom line */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-[rgba(240,237,230,0.25)]">
            © 2025 Marco Grimme. Gebaut mit Next.js, Framer Motion & Tailwind.
          </p>
          <p className="text-xs text-[rgba(240,237,230,0.25)] font-mono">
            Flutter · SwiftUI · Kotlin · Python · FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
}
