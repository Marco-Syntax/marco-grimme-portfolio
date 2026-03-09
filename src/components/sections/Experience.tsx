"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const principles = [
  {
    title: "Wartbare Systeme",
    body: "Code, der in sechs Monaten noch lesbar ist — für dich und andere. Klare Benennung, klar getrennte Schichten, kein verstecktes Coupling.",
    icon: "⬡",
    color: "#54C5F8",
  },
  {
    title: "Testbare Architektur",
    body: "Use Cases ohne Framework-Abhängigkeiten. Repository-Abstraktionen die gemockt werden können. Features die isoliert testbar sind.",
    icon: "◈",
    color: "#34D399",
  },
  {
    title: "Reale Produkterfahrung",
    body: "Support-Analyse, Fehler-Isolation, Deployment-Pipelines, CI/CD mit Codemagic — nicht nur Features bauen, sondern Systeme betreiben.",
    icon: "◇",
    color: "#FBBF24",
  },
  {
    title: "UX-Bewusstsein",
    body: "Entwickler die UI verstehen, bauen bessere APIs und bessere Features. Figma lesen, Designsysteme umsetzen, Performance sichtbar machen.",
    icon: "○",
    color: "#A78BFA",
  },
  {
    title: "Structured Delivery",
    body: "Klare Anforderungen vor dem ersten Commit. Iterative Entwicklung mit echtem Feedback. Features die tatsächlich ausgeliefert werden.",
    icon: "▷",
    color: "#FB923C",
  },
  {
    title: "Technische Kommunikation",
    body: "Komplexe Systeme einfach erklären. Mit Designern, Product Owners und anderen Entwicklern effektiv zusammenarbeiten.",
    icon: "△",
    color: "#FF6B6B",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#0f0e0c] py-28 md:py-36 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 grid-dots pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/5" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs font-mono text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-4"
            >
              Arbeitsweise
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Warum Marco.
            </motion.h2>
          </div>
          <motion.div variants={fadeUp} className="flex items-end">
            <p className="text-base text-[rgba(240,237,230,0.45)] leading-relaxed max-w-md">
              Hochwertiger Code ist kein Zufall. Er entsteht durch klare Prinzipien,
              Disziplin bei der Architektur und echte Erfahrung mit produktiven Systemen.
            </p>
          </motion.div>
        </motion.div>

        {/* Principles grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ background: "rgba(240,237,230,0.05)" }}
        >
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
              className="bg-[#0f0e0c] p-8 md:p-10 group"
            >
              <div
                className="w-8 h-8 flex items-center justify-center text-lg mb-6 rounded-lg"
                style={{ background: `${p.color}12`, color: p.color }}
              >
                {p.icon}
              </div>
              <h3 className="text-base font-[700] text-[#f0ede6] mb-3 tracking-tight">
                {p.title}
              </h3>
              <p className="text-sm text-[rgba(240,237,230,0.45)] leading-relaxed">
                {p.body}
              </p>
              <div
                className="mt-6 w-0 group-hover:w-8 h-[1.5px] transition-all duration-300 rounded-full"
                style={{ background: p.color }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
