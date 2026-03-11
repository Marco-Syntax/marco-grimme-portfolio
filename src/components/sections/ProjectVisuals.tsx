"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { viewportOnce } from "@/lib/motion";

// All 9 project images with metadata
const IMAGES = [
  {
    src: "/img/images/business_organizer.png",
    label: "Business Organizer",
    sub: "iPad · SwiftUI · Offline-First",
    accent: "#F59E0B",
    col: 0,
  },
  {
    src: "/img/images/checker_club.png",
    label: "Checker Club",
    sub: "iOS · Education · KI",
    accent: "#FBBF24",
    col: 1,
  },
  {
    src: "/img/images/dream_feed.png",
    label: "Dream Feed",
    sub: "Flutter · FastAPI",
    accent: "#FB923C",
    col: 2,
  },
  {
    src: "/img/images/next.png",
    label: "NextLevel Mindset",
    sub: "iOS · WidgetKit",
    accent: "#A78BFA",
    col: 0,
  },
  {
    src: "/img/images/monster_run.png",
    label: "Monster Run",
    sub: "Flutter · Flame Engine",
    accent: "#FF6B6B",
    col: 1,
  },
  {
    src: "/img/images/business_dashborad.png",
    label: "Business Digital",
    sub: "React · Firebase · B2B",
    accent: "#38BDF8",
    col: 2,
  },
  {
    src: "/img/images/lerne_mit_ki.png",
    label: "Lerne mit KI",
    sub: "Web · EdTech · OpenAI",
    accent: "#34D399",
    col: 0,
  },
  {
    src: "/img/images/ki_for_kids.png",
    label: "KiForKids",
    sub: "Flutter Web · Full-Stack",
    accent: "#22D3EE",
    col: 1,
  },
  {
    src: "/img/images/5_projekt.png",
    label: "Grimme Digital",
    sub: "Web · Dashboard · SaaS",
    accent: "#54C5F8",
    col: 2,
  },
] as const;

// Individual image card with parallax
function ImageCard({
  src,
  label,
  sub,
  accent,
  index,
  parallaxY,
}: {
  src: string;
  label: string;
  sub: string;
  accent: string;
  index: number;
  parallaxY: MotionValue<number>;
}) {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-default flex-shrink-0"
      style={{
        y: parallaxY,
        border: `1px solid ${accent}18`,
      }}
      initial={{ opacity: 0, scale: 0.94, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.07,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        borderColor: `${accent}45`,
        transition: { duration: 0.2 },
      }}
    >
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay (always visible bottom) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.88) 100%)`,
        }}
      />

      {/* Accent tint on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(to bottom right, ${accent}12 0%, transparent 50%)`,
        }}
      />

      {/* Top glow line on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}80, transparent)`,
        }}
      />

      {/* Label overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className="text-[9px] font-mono uppercase tracking-widest mb-1 opacity-70"
          style={{ color: accent }}
        >
          {sub}
        </p>
        <p className="text-sm font-[700] text-[rgba(240,237,230,0.9)] leading-tight">
          {label}
        </p>
      </div>

      {/* Accent dot */}
      <div className="absolute top-3 right-3">
        <div
          className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: accent }}
        />
      </div>
    </motion.div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ProjectVisuals() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Three columns scroll at different speeds for parallax depth
  const col0Y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const col1Y = useTransform(scrollYProgress, [0, 1], [20, -40]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [-20, 50]);

  const paralaxValues = [col0Y, col1Y, col2Y];

  // Group images by column
  const col0 = IMAGES.filter((img) => img.col === 0);
  const col1 = IMAGES.filter((img) => img.col === 1);
  const col2 = IMAGES.filter((img) => img.col === 2);

  return (
    <section
      ref={ref}
      className="relative bg-[#0a0a0a] py-24 md:py-32 px-6 md:px-12 overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(84,197,248,0.04) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(167,139,250,0.04) 0%, transparent 50%)`,
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="mb-14 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="text-xs font-mono text-[rgba(240,237,230,0.25)] uppercase tracking-widest mb-3">
            Einblicke
          </p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-10">
            <h2
              className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
            >
              Projekte in Aktion.
            </h2>
            <p className="text-sm text-[rgba(240,237,230,0.33)] max-w-sm leading-relaxed mb-1">
              Neun Produkte. Von der ersten Architektur-Entscheidung bis zum
              Store-Release.
            </p>
          </div>
        </motion.div>

        {/* ── Masonry grid: 3 columns ───────────────────────────────────── */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {/* Column 0 */}
          <div className="flex flex-col gap-5">
            {col0.map((img, i) => {
              const globalIndex = IMAGES.findIndex((x) => x.src === img.src);
              return (
                <div
                  key={img.src}
                  className="relative"
                  style={{ height: i === 0 ? "280px" : i === 1 ? "220px" : "260px" }}
                >
                  <ImageCard
                    {...img}
                    index={globalIndex}
                    parallaxY={paralaxValues[0]}
                  />
                </div>
              );
            })}
          </div>

          {/* Column 1 — offset top for stagger visual */}
          <div className="flex flex-col gap-5 mt-12">
            {col1.map((img, i) => {
              const globalIndex = IMAGES.findIndex((x) => x.src === img.src);
              return (
                <div
                  key={img.src}
                  className="relative"
                  style={{ height: i === 0 ? "240px" : i === 1 ? "260px" : "220px" }}
                >
                  <ImageCard
                    {...img}
                    index={globalIndex}
                    parallaxY={paralaxValues[1]}
                  />
                </div>
              );
            })}
          </div>

          {/* Column 2 — offset top for depth */}
          <div className="flex flex-col gap-5 mt-6">
            {col2.map((img, i) => {
              const globalIndex = IMAGES.findIndex((x) => x.src === img.src);
              return (
                <div
                  key={img.src}
                  className="relative"
                  style={{ height: i === 0 ? "260px" : i === 1 ? "240px" : "220px" }}
                >
                  <ImageCard
                    {...img}
                    index={globalIndex}
                    parallaxY={paralaxValues[2]}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Mobile: horizontal scroll row ─────────────────────────────── */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scrollbar-none">
          {IMAGES.map((img, i) => (
            <div
              key={img.src}
              className="relative flex-shrink-0 rounded-2xl overflow-hidden snap-start"
              style={{
                width: "260px",
                height: "200px",
                border: `1px solid ${img.accent}18`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.label}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, transparent 40%, rgba(8,8,8,0.88) 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p
                  className="text-[8px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: img.accent }}
                >
                  {img.sub}
                </p>
                <p className="text-xs font-[700] text-[rgba(240,237,230,0.9)]">
                  {img.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
