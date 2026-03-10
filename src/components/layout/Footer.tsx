"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const SITE_LINKS = [
  { label: "Projekte", href: "#projects", dot: "#54C5F8" },
  { label: "Stack", href: "#stack", dot: "#34D399" },
  { label: "Architektur", href: "#anatomy", dot: "#FBBF24" },
  { label: "Werdegang", href: "#experience", dot: "#FB923C" },
  { label: "Kontakt", href: "#contact", dot: "#A78BFA" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Marco-Syntax", dot: "#f0ede6" },
  { label: "LinkedIn", href: "https://linkedin.com/in/marco-grimme", dot: "#54C5F8" },
  { label: "E-Mail", href: "mailto:mgrimme954@gmail.com", dot: "#34D399" },
];

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
            <p className="text-lg font-[700] text-[#f0ede6] mb-3 tracking-tight">Marco Grimme</p>
            <p className="text-sm text-[rgba(240,237,230,0.4)] leading-relaxed mb-4">
              Mobile App Developer<br />
              Göttingen, Deutschland
            </p>
            <p className="text-xs font-mono text-[rgba(240,237,230,0.25)] leading-relaxed">
              Flutter · SwiftUI · Kotlin<br />
              Python · FastAPI · React
            </p>
          </motion.div>

          {/* Col 2: Site Navigation */}
          <motion.div variants={fadeUp}>
            <p className="text-xs text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-5 font-mono">Seite</p>
            <nav className="flex flex-col gap-2.5">
              {SITE_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex items-center gap-3 text-sm text-[rgba(240,237,230,0.5)] hover:text-[#f0ede6] transition-colors duration-200"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: item.dot }}
                  />
                  {item.label}
                  <span className="ml-auto text-[rgba(240,237,230,0.15)] group-hover:text-[rgba(240,237,230,0.4)] transition-colors text-xs">→</span>
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Col 3: Socials */}
          <motion.div variants={fadeUp}>
            <p className="text-xs text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-5 font-mono">Kontakt</p>
            <nav className="flex flex-col gap-2.5">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 text-sm text-[rgba(240,237,230,0.5)] hover:text-[#f0ede6] transition-colors duration-200"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: item.dot }}
                  />
                  {item.label}
                  <span className="ml-auto text-[rgba(240,237,230,0.15)] group-hover:text-[rgba(240,237,230,0.4)] transition-colors text-xs">↗</span>
                </a>
              ))}
            </nav>
          </motion.div>
        </motion.div>

        {/* Bottom separator + copyright */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-[rgba(240,237,230,0.2)]">
              © {new Date().getFullYear()} Marco Grimme · Gebaut mit Next.js, Framer Motion & Tailwind
            </p>
            <div className="flex items-center gap-3">
              {["#FF6B6B", "#FBBF24", "#34D399", "#54C5F8", "#A78BFA"].map((c) => (
                <div key={c} className="w-1 h-1 rounded-full opacity-40" style={{ background: c }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
