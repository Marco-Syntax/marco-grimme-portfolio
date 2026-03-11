"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

// ─── Phone canvas dimensions ──────────────────────────────────────────────
const PW = 248; // phone width  (px)
const PH = 496; // phone height (px)

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

// ─── Tiny mock status-bar signal bars ─────────────────────────────────────
function SignalBars() {
  return (
    <div className="flex items-end gap-[2px]">
      {[3, 5, 7, 9].map((h, i) => (
        <div
          key={i}
          className="w-[2.5px] rounded-[1px] bg-[rgba(240,237,230,0.65)]"
          style={{ height: h }}
        />
      ))}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────
export default function PhoneBuilder() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Smooth spring — drives every transform
  const sp = useSpring(scrollYProgress, { stiffness: 75, damping: 28, restDelta: 0.005 });

  // ── FRAME ──────────────────────────────────────────────────────────────
  const frameScale   = useTransform(sp, [0, 0.14], [0.55, 1]);
  const frameOpacity = useTransform(sp, [0, 0.08], [0, 1]);

  // ── GLOW BACKDROP ──────────────────────────────────────────────────────
  const glowOpacity  = useTransform(sp, [0.18, 0.42], [0, 1]);

  // ── SIDE BUTTONS ───────────────────────────────────────────────────────
  const btnOpacity   = useTransform(sp, [0.07, 0.18], [0, 1]);
  const volX         = useTransform(sp, [0.07, 0.2],  [-16, 0]);
  const pwrX         = useTransform(sp, [0.07, 0.2],  [16, 0]);

  // ── CAMERA PILL ────────────────────────────────────────────────────────
  const camOpacity   = useTransform(sp, [0.07, 0.2],  [0, 1]);

  // ── SCREEN BACKGROUND ──────────────────────────────────────────────────
  const screenOpacity = useTransform(sp, [0.2, 0.38], [0, 1]);

  // ── STATUS BAR ─────────────────────────────────────────────────────────
  const statusOpacity = useTransform(sp, [0.22, 0.36], [0, 1]);
  const statusY       = useTransform(sp, [0.22, 0.36], [-14, 0]);

  // ── HOME INDICATOR ─────────────────────────────────────────────────────
  const homeOpacity  = useTransform(sp, [0.22, 0.36], [0, 1]);
  const homeY        = useTransform(sp, [0.22, 0.36], [10, 0]);

  // ── APP HEADER ─────────────────────────────────────────────────────────
  const headerOpacity = useTransform(sp, [0.33, 0.47], [0, 1]);
  const headerY       = useTransform(sp, [0.33, 0.47], [-14, 0]);

  // ── ROUTE CARDS ────────────────────────────────────────────────────────
  const c1Opacity = useTransform(sp, [0.44, 0.56], [0, 1]);
  const c1Y       = useTransform(sp, [0.44, 0.56], [22, 0]);
  const c2Opacity = useTransform(sp, [0.53, 0.64], [0, 1]);
  const c2Y       = useTransform(sp, [0.53, 0.64], [22, 0]);
  const c3Opacity = useTransform(sp, [0.62, 0.73], [0, 1]);
  const c3Y       = useTransform(sp, [0.62, 0.73], [22, 0]);

  // ── BOTTOM NAV ─────────────────────────────────────────────────────────
  const navOpacity = useTransform(sp, [0.72, 0.84], [0, 1]);
  const navY       = useTransform(sp, [0.72, 0.84], [14, 0]);

  // ── PHASE TEXT (left column) ───────────────────────────────────────────
  const p0Opacity = useTransform(sp, [0,    0.08,  0.22, 0.30], [1,1,1,0]);
  const p1Opacity = useTransform(sp, [0.22, 0.30,  0.43, 0.51], [0,1,1,0]);
  const p2Opacity = useTransform(sp, [0.43, 0.51,  0.65, 0.73], [0,1,1,0]);
  const p3Opacity = useTransform(sp, [0.65, 0.73,  1,    1   ], [0,1,1,1]);
  const p0Y = useTransform(sp, [0,    0.08], [14, 0]);
  const p1Y = useTransform(sp, [0.22, 0.30], [14, 0]);
  const p2Y = useTransform(sp, [0.43, 0.51], [14, 0]);
  const p3Y = useTransform(sp, [0.65, 0.73], [14, 0]);

  return (
    <section
      ref={ref}
      id="phone-builder"
      className="relative bg-[#0f0e0c]"
      style={{ height: "380vh" }}
    >
      {/* ── STICKY PANEL ──────────────────────────────────────────────── */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" style={{ transform: 'translateZ(0)' }}>

        {/* Dot grid bg */}
        <div className="absolute inset-0 grid-dots opacity-60 pointer-events-none" />

        {/* Top separator */}
        <div className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-[rgba(240,237,230,0.06)]" />

        {/* ── 3-COLUMN LAYOUT ─────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">

          {/* LEFT — rotating phase text ──────────────────────────────── */}
          <div
            className="hidden lg:block flex-1 max-w-[240px] relative"
            style={{ height: PH }}
          >
            <PhaseLabel opacity={p0Opacity} y={p0Y} num="01" title="Struktur"
              desc="Saubere Architektur ist das Fundament — MVVM, Repositories, Use Cases." />
            <PhaseLabel opacity={p1Opacity} y={p1Y} num="02" title="Interface"
              desc="Das UI folgt der Logik. Flutter rendert präzise auf iOS und Android." />
            <PhaseLabel opacity={p2Opacity} y={p2Y} num="03" title="Content"
              desc="Echte Daten fließen durch saubere Schichten bis in jede Karte." />
            <PhaseLabel opacity={p3Opacity} y={p3Y} num="04" title="Produkt"
              desc="Ergebnis: eine App die stabil läuft, wartbar ist und liefert." />
          </div>

          {/* CENTER — phone ──────────────────────────────────────────── */}
          <div
            className="flex-shrink-0 relative"
            style={{ width: PW + 56, height: PH + 56 }}
          >
            {/* Glow halo behind phone */}
            <motion.div
              className="absolute pointer-events-none"
              style={{
                inset: -60,
                background:
                  "radial-gradient(ellipse at center, rgba(84,197,248,0.10) 0%, transparent 65%)",
                opacity: glowOpacity,
              }}
            />

            {/* ── PHONE ASSEMBLY ─────────────────────────────────────── */}
            <motion.div
              className="absolute"
              style={{
                top: 28, left: 28,
                width: PW,
                height: PH,
                scale: frameScale,
                opacity: frameOpacity,
                transformOrigin: "center center",
              }}
            >
              {/* Frame border */}
              <div
                className="absolute inset-0 rounded-[38px] pointer-events-none"
                style={{
                  border: "2px solid rgba(84,197,248,0.55)",
                  boxShadow:
                    "inset 0 0 24px rgba(84,197,248,0.04), 0 0 40px rgba(84,197,248,0.08)",
                }}
              />

              {/* Volume buttons — left side */}
              <motion.div
                className="absolute"
                style={{ left: -7, top: 96, opacity: btnOpacity, x: volX }}
              >
                <div className="w-[5px] h-6 rounded-full bg-[rgba(84,197,248,0.45)] mb-[7px]" />
                <div className="w-[5px] h-6 rounded-full bg-[rgba(84,197,248,0.45)]" />
              </motion.div>

              {/* Power button — right side */}
              <motion.div
                className="absolute"
                style={{ right: -7, top: 110, opacity: btnOpacity, x: pwrX }}
              >
                <div className="w-[5px] h-9 rounded-full bg-[rgba(84,197,248,0.45)]" />
              </motion.div>

              {/* Camera pill */}
              <motion.div
                className="absolute flex items-center justify-center gap-[5px]"
                style={{
                  top: 13,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 88,
                  height: 14,
                  background: "rgba(0,0,0,0.85)",
                  borderRadius: 20,
                  opacity: camOpacity,
                }}
              >
                <div className="w-[9px] h-[9px] rounded-full bg-[rgba(84,197,248,0.20)] border border-[rgba(84,197,248,0.35)]" />
                <div className="w-[5px] h-[5px] rounded-full bg-[rgba(84,197,248,0.12)]" />
              </motion.div>

              {/* ── SCREEN ─────────────────────────────────────────────── */}
              <motion.div
                className="absolute rounded-[34px] overflow-hidden"
                style={{
                  inset: 2,
                  background: "rgba(8,14,22,0.98)",
                  opacity: screenOpacity,
                }}
              >
                {/* Status bar */}
                <motion.div
                  className="absolute flex items-center justify-between"
                  style={{
                    top: 16, left: 20, right: 20,
                    opacity: statusOpacity,
                    y: statusY,
                  }}
                >
                  <span className="text-[9px] font-mono font-semibold text-[rgba(240,237,230,0.75)]">
                    09:41
                  </span>
                  <div className="flex items-center gap-[5px]">
                    <SignalBars />
                    {/* Battery */}
                    <div className="w-[17px] h-[10px] rounded-[2px] border border-[rgba(240,237,230,0.5)] p-[1.5px] flex items-center">
                      <div className="h-full w-[65%] rounded-[1px] bg-[rgba(240,237,230,0.7)]" />
                    </div>
                  </div>
                </motion.div>

                {/* App header */}
                <motion.div
                  className="absolute flex items-center justify-between"
                  style={{
                    top: 40, left: 16, right: 16,
                    opacity: headerOpacity,
                    y: headerY,
                  }}
                >
                  <div>
                    <div className="text-[12px] font-[700] text-[#54C5F8] leading-none mb-[3px]">
                      Meine Apps
                    </div>
                    <div className="text-[8px] font-mono text-[rgba(240,237,230,0.3)] uppercase tracking-widest">
                      Projekte · Portfolio
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[rgba(84,197,248,0.08)] border border-[rgba(84,197,248,0.18)] flex items-center justify-center">
                    <div className="w-[11px] h-[11px] rounded-full bg-[rgba(84,197,248,0.45)]" />
                  </div>
                </motion.div>

                {/* Divider */}
                <motion.div
                  className="absolute left-4 right-4 h-[0.5px] bg-[rgba(240,237,230,0.06)]"
                  style={{ top: 78, opacity: headerOpacity }}
                />

                {/* ── CARD 1 — Checker Club ─────────────────────────── */}
                <motion.div
                  className="absolute left-4 right-4 rounded-2xl p-3"
                  style={{
                    top: 90,
                    background: "rgba(251,191,36,0.06)",
                    border: "1px solid rgba(251,191,36,0.18)",
                    opacity: c1Opacity,
                    y: c1Y,
                  }}
                >
                  <div className="flex items-center gap-2 mb-[8px]">
                    <div
                      className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(251,191,36,0.15)" }}
                    >
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FBBF24]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-[700] text-[rgba(240,237,230,0.9)] leading-none mb-[2px]">
                        Checker Club
                      </div>
                      <div className="text-[7.5px] font-mono text-[rgba(240,237,230,0.35)]">
                        iOS · Education · KI
                      </div>
                    </div>
                    <span className="text-[7px] px-[5px] py-[2px] rounded-full font-mono font-semibold flex-shrink-0"
                      style={{ background: "rgba(251,191,36,0.14)", color: "#FBBF24" }}>
                      App Store
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]">
                    {["SwiftUI", "Firebase", "OpenAI"].map((t) => (
                      <span
                        key={t}
                        className="text-[7px] font-mono px-[5px] py-[1.5px] rounded-full"
                        style={{ background: "rgba(251,191,36,0.10)", color: "rgba(251,191,36,0.8)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ── CARD 2 — Dream Feed ───────────────────────────── */}
                <motion.div
                  className="absolute left-4 right-4 rounded-2xl p-3"
                  style={{
                    top: 196,
                    background: "rgba(251,146,60,0.06)",
                    border: "1px solid rgba(251,146,60,0.15)",
                    opacity: c2Opacity,
                    y: c2Y,
                  }}
                >
                  <div className="flex items-center gap-2 mb-[8px]">
                    <div
                      className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(251,146,60,0.15)" }}
                    >
                      <div className="w-[10px] h-[10px] rounded-full bg-[#FB923C]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-[700] text-[rgba(240,237,230,0.9)] leading-none mb-[2px]">
                        Dream Feed
                      </div>
                      <div className="text-[7.5px] font-mono text-[rgba(240,237,230,0.35)]">
                        Flutter · FastAPI · KI
                      </div>
                    </div>
                    <span className="text-[7px] px-[5px] py-[2px] rounded-full font-mono font-semibold flex-shrink-0"
                      style={{ background: "rgba(251,146,60,0.13)", color: "#FB923C" }}>
                      App Store
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]">
                    {["Flutter", "Dart", "Riverpod"].map((t) => (
                      <span
                        key={t}
                        className="text-[7px] font-mono px-[5px] py-[1.5px] rounded-full"
                        style={{ background: "rgba(251,146,60,0.10)", color: "rgba(251,146,60,0.8)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ── CARD 3 — NextLevel Mindset ────────────────────── */}
                <motion.div
                  className="absolute left-4 right-4 rounded-2xl p-3"
                  style={{
                    top: 286,
                    background: "rgba(167,139,250,0.06)",
                    border: "1px solid rgba(167,139,250,0.13)",
                    opacity: c3Opacity,
                    y: c3Y,
                  }}
                >
                  <div className="flex items-center gap-2 mb-[8px]">
                    <div
                      className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center"
                      style={{ background: "rgba(167,139,250,0.15)" }}
                    >
                      <div className="w-[10px] h-[10px] rounded-full bg-[#A78BFA]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-[700] text-[rgba(240,237,230,0.9)] leading-none mb-[2px]">
                        NextLevel Mindset
                      </div>
                      <div className="text-[7.5px] font-mono text-[rgba(240,237,230,0.35)]">
                        iOS · WidgetKit · Native
                      </div>
                    </div>
                    <span className="text-[7px] px-[5px] py-[2px] rounded-full font-mono font-semibold flex-shrink-0"
                      style={{ background: "rgba(167,139,250,0.13)", color: "#A78BFA" }}>
                      App Store
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-[4px]">
                    {["SwiftUI", "WidgetKit", "Core Data"].map((t) => (
                      <span
                        key={t}
                        className="text-[7px] font-mono px-[5px] py-[1.5px] rounded-full"
                        style={{ background: "rgba(167,139,250,0.10)", color: "rgba(167,139,250,0.8)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* ── BOTTOM NAV ───────────────────────────────────── */}
                <motion.div
                  className="absolute left-3 right-3 bottom-6 rounded-2xl flex items-center justify-around px-2 py-[7px]"
                  style={{
                    background: "rgba(0,0,0,0.55)",
                    border: "1px solid rgba(240,237,230,0.07)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)", // required for Safari
                    opacity: navOpacity,
                    y: navY,
                  }}
                >
                  {(["⊟", "◉", "⊕", "◎"] as const).map((icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-[14px]"
                      style={{
                        color: i === 1 ? "#54C5F8" : "rgba(240,237,230,0.28)",
                        background: i === 1 ? "rgba(84,197,248,0.08)" : "transparent",
                      }}
                    >
                      {icon}
                    </div>
                  ))}
                </motion.div>

              </motion.div>
              {/* /screen */}

              {/* Home indicator */}
              <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: 90, height: 3,
                  background: "rgba(240,237,230,0.22)",
                  opacity: homeOpacity,
                  y: homeY,
                }}
              />
            </motion.div>
            {/* /phone assembly */}
          </div>
          {/* /center */}

          {/* RIGHT — static copy ─────────────────────────────────────── */}
          <div className="hidden lg:block flex-1 max-w-[240px] text-right">
            <p className="text-xs font-mono text-[rgba(240,237,230,0.22)] uppercase tracking-widest mb-5">
              Scroll to assemble
            </p>
            <h2
              className="font-[800] text-[#f0ede6] leading-[0.93] tracking-tight mb-5"
              style={{ fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)" }}
            >
              Eine App.<br />Schicht für<br />Schicht.
            </h2>
            <p className="text-sm text-[rgba(240,237,230,0.38)] leading-relaxed">
              So entstehen Apps, die ich baue — sauber strukturiert,
              Pixel für Pixel zusammengesetzt.
            </p>
          </div>

        </div>
        {/* /3-col */}

        {/* Mobile-only scroll hint */}
        <div className="lg:hidden absolute bottom-8 inset-x-0 text-center pointer-events-none">
          <p className="text-[10px] font-mono text-[rgba(240,237,230,0.2)] uppercase tracking-widest">
            Scroll to assemble
          </p>
        </div>

      </div>
      {/* /sticky */}
    </section>
  );
}
