"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

// ─── Browser canvas dimensions ─────────────────────────────────────────────
const BW = 620;  // browser width  (px)
const BH = 410;  // browser height (px)
const CR = 66;   // chrome height  (tab bar + address bar)

// ─── Sub-component: fading phase label ────────────────────────────────────
function PhaseLabel({
  opacity,
  y,
  num,
  title,
  desc,
}: {
  opacity: MotionValue<number>;
  y: MotionValue<number>;
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      className="absolute inset-x-0 top-1/2 -translate-y-1/2"
      style={{ opacity, y }}
    >
      <p className="text-xs font-mono text-[rgba(240,237,230,0.25)] uppercase tracking-widest mb-3">
        {num} /
      </p>
      <h3 className="text-2xl md:text-3xl font-[800] text-[#f0ede6] leading-[1] mb-3">
        {title}
      </h3>
      <p className="text-sm text-[rgba(240,237,230,0.4)] leading-relaxed max-w-[210px]">
        {desc}
      </p>
    </motion.div>
  );
}

// ─── Tiny skeleton line helper ─────────────────────────────────────────────
function Skeleton({ w, h = 5, opacity = 0.05 }: { w: string; h?: number; opacity?: number }) {
  return (
    <div
      className="rounded-full"
      style={{ width: w, height: h, background: `rgba(240,237,230,${opacity})` }}
    />
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function WebBuilder() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const sp = useSpring(scrollYProgress, { stiffness: 75, damping: 28, restDelta: 0.005 });

  // ── BROWSER FRAME ──────────────────────────────────────────────────────
  const frameOpacity = useTransform(sp, [0, 0.08], [0, 1]);
  const frameScale   = useTransform(sp, [0, 0.14], [0.88, 1]);
  const frameY       = useTransform(sp, [0, 0.14], [-28, 0]);

  // ── GLOW ───────────────────────────────────────────────────────────────
  const glowOpacity = useTransform(sp, [0.18, 0.42], [0, 1]);

  // ── CHROME: loading bar fills left → right ─────────────────────────────
  const loadScaleX = useTransform(sp, [0.04, 0.22], [0, 1]);
  const urlOpacity = useTransform(sp, [0.06, 0.18], [0, 1]);

  // ── SITE NAVIGATION ────────────────────────────────────────────────────
  const navOpacity = useTransform(sp, [0.22, 0.36], [0, 1]);
  const navY       = useTransform(sp, [0.22, 0.36], [-14, 0]);

  // ── HERO HEADLINE ──────────────────────────────────────────────────────
  const heroOpacity = useTransform(sp, [0.33, 0.47], [0, 1]);
  const heroY       = useTransform(sp, [0.33, 0.47], [18, 0]);

  // ── TECH PILLS ─────────────────────────────────────────────────────────
  const pillsOpacity = useTransform(sp, [0.42, 0.54], [0, 1]);

  // ── PROJECT CARDS ──────────────────────────────────────────────────────
  const c1Opacity = useTransform(sp, [0.49, 0.61], [0, 1]);
  const c1Y       = useTransform(sp, [0.49, 0.61], [22, 0]);
  const c2Opacity = useTransform(sp, [0.56, 0.67], [0, 1]);
  const c2Y       = useTransform(sp, [0.56, 0.67], [22, 0]);
  const c3Opacity = useTransform(sp, [0.63, 0.73], [0, 1]);
  const c3Y       = useTransform(sp, [0.63, 0.73], [22, 0]);

  // ── FOOTER / CTA ───────────────────────────────────────────────────────
  const footerOpacity = useTransform(sp, [0.73, 0.84], [0, 1]);
  const footerY       = useTransform(sp, [0.73, 0.84], [12, 0]);

  // ── PHASE LABELS (left column) ─────────────────────────────────────────
  const p0Opacity = useTransform(sp, [0,    0.08,  0.22, 0.30], [1, 1, 1, 0]);
  const p1Opacity = useTransform(sp, [0.22, 0.30,  0.43, 0.51], [0, 1, 1, 0]);
  const p2Opacity = useTransform(sp, [0.43, 0.51,  0.65, 0.73], [0, 1, 1, 0]);
  const p3Opacity = useTransform(sp, [0.65, 0.73,  1,    1   ], [0, 1, 1, 1]);
  const p0Y = useTransform(sp, [0,    0.08], [14, 0]);
  const p1Y = useTransform(sp, [0.22, 0.30], [14, 0]);
  const p2Y = useTransform(sp, [0.43, 0.51], [14, 0]);
  const p3Y = useTransform(sp, [0.65, 0.73], [14, 0]);

  const ACCENT = "#34D399";

  return (
    <section
      ref={ref}
      id="web-builder"
      className="relative"
      style={{ height: "280vh", background: "#0a0f18" }}
    >
      {/* ── STICKY PANEL ──────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(0)' }}>

        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              `linear-gradient(rgba(52,211,153,0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(52,211,153,0.03) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Top separator */}
        <div className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-[rgba(52,211,153,0.07)]" />

        {/* ── 3-COLUMN LAYOUT ─────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT — phase labels ─────────────────────────────────────── */}
          <div
            className="hidden lg:block flex-1 max-w-[240px] relative"
            style={{ height: BH }}
          >
            <PhaseLabel opacity={p0Opacity} y={p0Y} num="01" title="Layout"
              desc="Browser-Struktur und Grid. Das Fundament jeder Web-App." />
            <PhaseLabel opacity={p1Opacity} y={p1Y} num="02" title="Komponenten"
              desc="React-Komponenten — wiederverwendbar, typsicher, getestet." />
            <PhaseLabel opacity={p2Opacity} y={p2Y} num="03" title="Inhalt"
              desc="Echte Daten fließen via FastAPI — statisch und dynamisch." />
            <PhaseLabel opacity={p3Opacity} y={p3Y} num="04" title="Go Live"
              desc="Deployed. Performant. SEO-optimiert. CI/CD automatisiert." />
          </div>

          {/* CENTER — browser window ─────────────────────────────────── */}
          {/* Outer: controls layout footprint (scales on mobile)       */}
          <div className="flex-shrink-0 relative w-[327px] h-[225px] lg:w-[668px] lg:h-[458px] overflow-hidden">
          {/* Inner: full-size content scaled down on mobile            */}
          <div
            className="absolute top-0 left-0 origin-top-left scale-[0.49] lg:scale-100"
            style={{ width: BW + 48, height: BH + 48 }}
          >
            {/* Glow halo */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                inset: -60,
                background:
                  "radial-gradient(ellipse at center, rgba(52,211,153,0.07) 0%, transparent 65%)",
                opacity: glowOpacity,
              }}
            />

            {/* ── BROWSER SHELL ──────────────────────────────────────── */}
            <motion.div
              className="absolute overflow-hidden"
              style={{
                top: 24, left: 24,
                width: BW, height: BH,
                scale: frameScale,
                opacity: frameOpacity,
                y: frameY,
                transformOrigin: "center top",
                borderRadius: 10,
                background: "#0d1623",
                border: "1px solid rgba(52,211,153,0.22)",
                boxShadow:
                  "0 0 0 1px rgba(0,0,0,0.4), 0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(52,211,153,0.04)",
              }}
            >
              {/* ── CHROME (tab bar + address bar) ─────────────────── */}
              <div
                style={{
                  height: CR,
                  background: "#080e19",
                  borderBottom: "1px solid rgba(52,211,153,0.09)",
                }}
              >
                {/* Tab row */}
                <div className="flex items-end px-3 pt-[8px] gap-[6px]">
                  {/* Traffic lights */}
                  <div className="flex gap-[4px] mr-2 mb-[6px]">
                    {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                      <div
                        key={i}
                        style={{
                          width: 9, height: 9, borderRadius: 9,
                          background: c, opacity: 0.65,
                        }}
                      />
                    ))}
                  </div>

                  {/* Active tab */}
                  <div
                    className="flex items-center gap-[5px] px-3 py-[5px] rounded-t-[6px]"
                    style={{
                      background: "#0d1623",
                      border: "1px solid rgba(52,211,153,0.13)",
                      borderBottom: "none",
                    }}
                  >
                    {/* Favicon */}
                    <div
                      style={{
                        width: 9, height: 9, borderRadius: 2,
                        background: "rgba(52,211,153,0.55)",
                        flexShrink: 0,
                      }}
                    />
                    <span className="text-[8.5px] font-mono text-[rgba(240,237,230,0.45)] whitespace-nowrap">
                      Marco Grimme — Portfolio
                    </span>
                    <span className="text-[8px] text-[rgba(240,237,230,0.18)] ml-[3px]">×</span>
                  </div>

                  {/* New-tab button */}
                  <span className="text-[11px] text-[rgba(240,237,230,0.16)] mb-[5px]">+</span>
                </div>

                {/* Address bar row */}
                <div className="flex items-center gap-[8px] px-4 pb-[9px]">
                  {/* Nav arrows */}
                  <div className="flex gap-[6px] text-[9px] text-[rgba(240,237,230,0.18)]">
                    <span>←</span>
                    <span style={{ opacity: 0.35 }}>→</span>
                    <span>↺</span>
                  </div>

                  {/* URL bar */}
                  <div
                    className="flex-1 relative h-[21px] rounded-full flex items-center gap-[5px] px-3 overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(52,211,153,0.11)",
                    }}
                  >
                    <span className="text-[8px]" style={{ color: "rgba(52,211,153,0.45)" }}>
                      🔒
                    </span>
                    <motion.span
                      className="text-[8.5px] font-mono text-[rgba(240,237,230,0.5)]"
                      style={{ opacity: urlOpacity }}
                    >
                      marcogrimme.de
                    </motion.span>
                    {/* Progress bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] rounded-full origin-left"
                      style={{
                        background: ACCENT,
                        scaleX: loadScaleX,
                        transformOrigin: "left center",
                      }}
                    />
                  </div>

                  <span className="text-[10px] text-[rgba(240,237,230,0.16)]">☆</span>
                </div>
              </div>
              {/* /chrome */}

              {/* ── PAGE CONTENT ───────────────────────────────────── */}
              <div
                style={{
                  position: "absolute",
                  top: CR, left: 0, right: 0, bottom: 0,
                  overflow: "hidden",
                  background: "#0d1623",
                }}
              >
                {/* Site navigation bar */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 0, left: 0, right: 0, height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 22px",
                    borderBottom: "1px solid rgba(52,211,153,0.06)",
                    opacity: navOpacity,
                    y: navY,
                  }}
                >
                  <span
                    className="text-[10.5px] font-[700]"
                    style={{ color: ACCENT }}
                  >
                    Marco Grimme
                  </span>
                  <div className="flex items-center gap-[16px]">
                    {["Projekte", "Stack", "Kontakt"].map((l) => (
                      <span
                        key={l}
                        className="text-[7.5px] font-mono uppercase tracking-widest text-[rgba(240,237,230,0.33)]"
                      >
                        {l}
                      </span>
                    ))}
                    <span
                      className="text-[7.5px] font-mono px-[9px] py-[3px] rounded-full"
                      style={{
                        border: "1px solid rgba(52,211,153,0.28)",
                        color: "rgba(52,211,153,0.75)",
                      }}
                    >
                      Hire me →
                    </span>
                  </div>
                </motion.div>

                {/* Divider under nav */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 40, left: 22, right: 22, height: "0.5px",
                    background: "rgba(52,211,153,0.05)",
                    opacity: navOpacity,
                  }}
                />

                {/* Hero headline */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: 52, left: 22,
                    opacity: heroOpacity,
                    y: heroY,
                  }}
                >
                  <div
                    className="text-[8.5px] font-mono uppercase tracking-widest mb-[6px]"
                    style={{ color: "rgba(240,237,230,0.25)" }}
                  >
                    Göttingen, Deutschland
                  </div>
                  <div
                    className="font-[800] leading-[0.88]"
                    style={{ fontSize: 38, color: "#f0ede6" }}
                  >
                    Mobile App
                  </div>
                  <div
                    className="font-[800] leading-[0.88]"
                    style={{ fontSize: 38, color: "rgba(240,237,230,0.28)" }}
                  >
                    Developer.
                  </div>
                </motion.div>

                {/* Tech pills */}
                <motion.div
                  className="flex gap-[5px]"
                  style={{
                    position: "absolute",
                    top: 154, left: 22,
                    opacity: pillsOpacity,
                  }}
                >
                  {["Flutter", "React", "FastAPI", "Python"].map((t) => (
                    <span
                      key={t}
                      className="text-[7px] font-mono px-[7px] py-[3px] rounded-full"
                      style={{
                        border: "1px solid rgba(52,211,153,0.22)",
                        color: "rgba(52,211,153,0.65)",
                        background: "rgba(52,211,153,0.05)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </motion.div>

                {/* Project cards row */}
                <div
                  style={{
                    position: "absolute",
                    top: 178, left: 22, right: 22,
                    display: "flex",
                    gap: 10,
                  }}
                >
                  {[
                    {
                      name: "Business Digital",
                      cat: "Web · Dashboard · B2B",
                      color: "#38BDF8",
                      stack: ["React", "Firebase"],
                      bar: "88%",
                      opacity: c1Opacity,
                      y: c1Y,
                    },
                    {
                      name: "Lerne mit KI",
                      cat: "Web · EdTech · KI",
                      color: "#34D399",
                      stack: ["React", "OpenAI"],
                      bar: "72%",
                      opacity: c2Opacity,
                      y: c2Y,
                    },
                    {
                      name: "KiForKids",
                      cat: "Flutter Web · Automation",
                      color: "#22D3EE",
                      stack: ["Flutter Web", "n8n"],
                      bar: "60%",
                      opacity: c3Opacity,
                      y: c3Y,
                    },
                  ].map(({ name, cat, color, stack, bar, opacity, y }) => (
                    <motion.div
                      key={name}
                      style={{
                        flex: 1,
                        padding: "10px 12px",
                        borderRadius: 8,
                        background: "rgba(255,255,255,0.025)",
                        border: `1px solid ${color}22`,
                        opacity,
                        y,
                      }}
                    >
                      <div
                        className="text-[7px] font-mono uppercase tracking-widest mb-[5px]"
                        style={{ color: `${color}88` }}
                      >
                        {cat}
                      </div>
                      <div className="text-[10px] font-[700] text-[rgba(240,237,230,0.82)] mb-[8px]">
                        {name}
                      </div>
                      <div className="flex gap-[4px] flex-wrap mb-[9px]">
                        {stack.map((t) => (
                          <span
                            key={t}
                            className="text-[6.5px] px-[5px] py-[2px] rounded-sm font-mono"
                            style={{
                              background: "rgba(255,255,255,0.04)",
                              color: "rgba(240,237,230,0.32)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      {/* Skeleton lines */}
                      <div className="flex flex-col gap-[4px]">
                        <Skeleton w="90%" />
                        <Skeleton w="65%" />
                      </div>
                      {/* Progress bar */}
                      <div
                        className="mt-[9px] h-[2px] rounded-full"
                        style={{ background: `${color}18`, width: "100%" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: bar, background: `${color}55` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer / CTA row */}
                <motion.div
                  style={{
                    position: "absolute",
                    bottom: 14, left: 22, right: 22,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    opacity: footerOpacity,
                    y: footerY,
                  }}
                >
                  <div className="flex gap-3">
                    <Skeleton w="52px" h={4} opacity={0.06} />
                    <Skeleton w="40px" h={4} opacity={0.04} />
                    <Skeleton w="48px" h={4} opacity={0.04} />
                  </div>
                  {/* CTA button */}
                  <motion.div
                    className="text-[7.5px] font-mono px-[10px] py-[4px] rounded-full"
                    style={{
                      border: "1px solid rgba(52,211,153,0.28)",
                      color: "rgba(52,211,153,0.7)",
                    }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    E-Mail schreiben →
                  </motion.div>
                </motion.div>

              </div>
              {/* /page content */}

            </motion.div>
            {/* /browser shell */}

          </div>
          {/* /scale wrapper */}
          </div>
          {/* /center */}

          {/* RIGHT — static copy ─────────────────────────────────────── */}
          <div className="hidden lg:block flex-1 max-w-[240px] text-right">
            <p className="text-xs font-mono text-[rgba(240,237,230,0.22)] uppercase tracking-widest mb-5">
              Scroll to build
            </p>
            <h2
              className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)" }}
            >
              Eine Site.<br />Zeile für<br />Zeile.
            </h2>
            <p className="text-sm text-[rgba(240,237,230,0.38)] leading-relaxed">
              Web-Apps mit React, TypeScript und FastAPI — sauber strukturiert,
              performant und deployed.
            </p>
          </div>

        </div>
        {/* /3-col */}

        {/* Mobile-only hint */}
        <div className="lg:hidden absolute bottom-8 inset-x-0 text-center pointer-events-none">
          <p className="text-[10px] font-mono text-[rgba(240,237,230,0.2)] uppercase tracking-widest">
            Scroll to build
          </p>
        </div>

      </div>
      {/* /sticky */}

    </section>
  );
}
