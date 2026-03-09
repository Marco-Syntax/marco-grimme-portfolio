"use client";

import { motion } from "framer-motion";
import { staggerContainer, viewportOnce } from "@/lib/motion";

const career = [
  {
    period: "09/2024 – heute",
    role: "Software Entwickler",
    company: "Piramit GmbH",
    tag: "Aktuell",
    tagColor: "#34D399",
    highlights: [
      "Flutter Apps in Produktion – MVVM mit Riverpod",
      "Features, Bugfixes & Tests im agilen Scrum-Setup",
      "App-Packaging, Store-Submission und CI/CD",
      "Zusammenarbeit mit Design, Backend & Product Owners",
      "Täglich: Bitbucket, Jira und Confluence",
    ],
  },
  {
    period: "09/2024",
    role: "IHK-Abschluss – Software Entwickler",
    company: "Syntax Institut Berlin",
    tag: "Note 1,4 · 92 %",
    tagColor: "#F59E0B",
    highlights: [
      "Abschlussnote 1,4 (92 %) – IHK-Prüfung erfolgreich abgeschlossen",
      "Praxisprojekte für iOS (SwiftUI) und Android (Kotlin)",
      "Zertifiziert: IT-Fachkraft für App-Entwicklung (iOS & Android)",
    ],
  },
  {
    period: "08/2023 – 08/2024",
    role: "Weiterbildung App-Entwicklung",
    company: "Syntax Institut Berlin",
    tag: "12 Monate Vollzeit",
    tagColor: "#54C5F8",
    highlights: [
      "iOS: Swift & SwiftUI – Core Data, Firebase, Repository Pattern",
      "Android: Kotlin – MVVM, Room, Retrofit, Coroutines",
      "Mobile UX/UI Design: Figma, Prototyping, User Flows",
      "OOP, Git, Datenstrukturen – Grundlagen solid aufgebaut",
    ],
  },
  {
    period: "08/2021 – 02/2023",
    role: "Production Operator",
    company: "Sartorius Stedim Biotech GmbH, Göttingen",
    tag: "Industrie",
    tagColor: "#A78BFA",
    highlights: [
      "Produktionsanlagen im regulierten Industrieumfeld",
      "Qualitätssicherung, Dokumentation und SAP-System",
      "Strukturiertes Arbeiten nach Prozess- und Qualitätsstandards",
    ],
  },
  {
    period: "03/2017 – 08/2021",
    role: "Maschinenanlagenführer / Teamleiter",
    company: "WMU Weser-Metall-Umformtechnik, Hann. Münden",
    tag: "Teamleiter",
    tagColor: "#FB923C",
    highlights: [
      "Fachliche Anleitung und Einarbeitung von Mitarbeitenden",
      "Programmierung & Schulung von Industrierobotern (KUKA, Hyundai)",
      "Instandhaltung und Optimierung von Industrieanlagen",
    ],
  },
  {
    period: "08/2011 – 03/2014",
    role: "Ausbildung: Elektroniker",
    company: "Energie- & Gebäudetechnik",
    tag: "Ausbildung",
    tagColor: "#FF6B6B",
    highlights: [
      "Technische Grundausbildung mit Fokus auf strukturiertes Arbeiten",
      "Systematisches Arbeiten nach Normen und Qualitätsstandards",
    ],
  },
];

const principles = [
  { label: "Wartbare Systeme", color: "#54C5F8" },
  { label: "Testbare Architektur", color: "#34D399" },
  { label: "Produkterfahrung", color: "#FBBF24" },
  { label: "UX-Bewusstsein", color: "#A78BFA" },
  { label: "Structured Delivery", color: "#FB923C" },
  { label: "Klare Kommunikation", color: "#FF6B6B" },
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
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              className="text-xs font-mono text-[rgba(240,237,230,0.3)] uppercase tracking-widest mb-4"
            >
              Beruflicher Werdegang
            </motion.p>
            <motion.h2
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.05 } } }}
              className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
            >
              Warum Marco.
            </motion.h2>
          </div>
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
            className="flex items-end"
          >
            <p className="text-base text-[rgba(240,237,230,0.45)] leading-relaxed max-w-md">
              Von der Industrie zum Software Entwickler — strukturierte Arbeitsweise,
              technisches Grundverständnis und echte Erfahrung mit produktiven Systemen.
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <div className="relative mb-24">
          {/* Vertical line */}
          <div className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-[1px] bg-white/8" />

          <div className="space-y-10 md:space-y-12">
            {career.map((entry, i) => (
              <motion.div
                key={entry.period}
                className="relative flex gap-6 md:gap-10"
                initial={{ opacity: 0, x: -32 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] },
                }}
                viewport={{ once: true, amount: 0.15 }}
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10 mt-1">
                  <div
                    className="w-10 h-10 rounded-full border flex items-center justify-center"
                    style={{
                      borderColor: `${entry.tagColor}35`,
                      background: `${entry.tagColor}0d`,
                    }}
                  >
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ background: entry.tagColor }}
                    />
                  </div>
                </div>

                {/* Entry content */}
                <div
                  className="flex-1 rounded-xl border p-5 md:p-7 group transition-all duration-300"
                  style={{
                    borderColor: `${entry.tagColor}15`,
                    background: "rgba(255,255,255,0.015)",
                  }}
                >
                  {/* Tag + Period row */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        borderColor: `${entry.tagColor}30`,
                        color: entry.tagColor,
                        background: `${entry.tagColor}10`,
                      }}
                    >
                      {entry.tag}
                    </span>
                    <span className="text-xs font-mono text-[rgba(240,237,230,0.28)] tracking-wider">
                      {entry.period}
                    </span>
                  </div>

                  {/* Role */}
                  <h3 className="text-base md:text-lg font-[700] text-[#f0ede6] tracking-tight mb-0.5">
                    {entry.role}
                  </h3>

                  {/* Company */}
                  <p className="text-sm text-[rgba(240,237,230,0.38)] mb-4">{entry.company}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {entry.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-[rgba(240,237,230,0.5)]"
                      >
                        <span
                          className="mt-[7px] w-1.5 h-1.5 flex-shrink-0 rounded-full"
                          style={{ background: `${entry.tagColor}50` }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Hover accent line */}
                  <div
                    className="mt-5 w-0 group-hover:w-10 h-[1.5px] transition-all duration-400 rounded-full"
                    style={{ background: entry.tagColor }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-xs font-mono text-[rgba(240,237,230,0.25)] uppercase tracking-widest mb-5">
            Arbeitsweise
          </p>
          <div className="flex flex-wrap gap-3">
            {principles.map((p, i) => (
              <motion.span
                key={p.label}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.35, delay: i * 0.06 },
                }}
                viewport={{ once: true }}
                className="text-sm font-mono px-4 py-2 rounded-full border cursor-default"
                style={{
                  borderColor: `${p.color}20`,
                  color: `${p.color}80`,
                  background: `${p.color}08`,
                }}
                whileHover={{
                  borderColor: `${p.color}45`,
                  color: p.color,
                  background: `${p.color}14`,
                  transition: { duration: 0.15 },
                }}
              >
                {p.label}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
