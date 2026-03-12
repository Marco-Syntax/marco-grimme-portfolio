"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const LAYERS = [
  { id: "ui", label: "UI Layer", sub: "Flutter Widgets", color: "#54C5F8", y: 0 },
  { id: "state", label: "State Management", sub: "Riverpod · Freezed", color: "#A78BFA", y: 1 },
  { id: "domain", label: "Domain Layer", sub: "Use Cases · Entities", color: "#34D399", y: 2 },
  { id: "data", label: "Data Layer", sub: "Repository Pattern", color: "#FBBF24", y: 3 },
  { id: "remote", label: "Remote Sources", sub: "REST API · Firebase", color: "#FB923C", y: 4 },
  { id: "local", label: "Local Storage", sub: "Room · Core Data", color: "#FF6B6B", y: 5 },
];

const RIGHT_LABELS = ["MVVM", "Clean Code", "Vererbung", "Testable", "Flutter Flavors", "CI/CD"];

export default function Anatomy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 22, restDelta: 0.005 });

  // Layers spread apart as you scroll, then come back together
  const layer0Y = useTransform(smoothProgress, [0, 0.5], [0, -110]);
  const layer1Y = useTransform(smoothProgress, [0, 0.5], [0, -66]);
  const layer2Y = useTransform(smoothProgress, [0, 0.5], [0, -22]);
  const layer3Y = useTransform(smoothProgress, [0, 0.5], [0, 22]);
  const layer4Y = useTransform(smoothProgress, [0, 0.5], [0, 66]);
  const layer5Y = useTransform(smoothProgress, [0, 0.5], [0, 110]);
  const layerYs = [layer0Y, layer1Y, layer2Y, layer3Y, layer4Y, layer5Y];

  // Labels fade in as layers spread
  const labelOpacity = useTransform(smoothProgress, [0.15, 0.4], [0, 1]);
  const labelX = useTransform(smoothProgress, [0.15, 0.4], [-20, 0]);

  // Right-side labels
  const rightOpacity = useTransform(smoothProgress, [0.4, 0.65], [0, 1]);

  // Title opacity
  const titleOpacity = useTransform(smoothProgress, [0, 0.1], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.1], [30, 0]);

  // Bottom hint
  const hintOpacity = useTransform(smoothProgress, [0, 0.08], [0, 1]);

  return (
    <section
      ref={ref}
      className="relative bg-[#dcd8cc] grid-dots-light"
      style={{ height: "400vh" }}
      id="anatomy"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center" style={{ transform: 'translateZ(0)' }}>
        {/* Title — upper left */}
        <motion.div
          className="absolute top-16 left-6 md:left-16 z-10 max-w-xs"
          style={{ opacity: titleOpacity, y: titleY }}
        >
          <p className="text-xs font-mono text-[rgba(26,24,22,0.4)] uppercase tracking-widest mb-3">
            Architektur-Ansatz
          </p>
          <h2
            className="font-[800] text-[#1a1816] leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
          >
            Der vollständige<br />Entwickler-Stack.
          </h2>
          <p className="text-sm text-[rgba(26,24,22,0.55)] mt-4 leading-relaxed">
            Sauber getrennte Schichten.<br />
            Ein System mit klaren Zuständigkeiten.
          </p>
        </motion.div>

        {/* Right labels */}
        <motion.div
          className="absolute top-1/2 right-6 md:right-16 -translate-y-1/2 flex flex-col gap-2.5 z-10"
          style={{ opacity: rightOpacity }}
        >
          {RIGHT_LABELS.map((label, i) => (
            <motion.div
              key={label}
              className="flex items-center gap-2"
              style={{ opacity: rightOpacity }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="text-xs font-mono text-[rgba(26,24,22,0.5)] text-right">{label}</span>
              <span className="flex-1 h-[1px] bg-[rgba(26,24,22,0.15)] w-8" />
            </motion.div>
          ))}
        </motion.div>

        {/* Left layer labels */}
        <motion.div
          className="absolute top-1/2 left-6 md:left-16 -translate-y-1/2 flex flex-col gap-3 z-10"
          style={{ opacity: labelOpacity }}
        >
          {LAYERS.map((layer, i) => (
            <motion.div
              key={layer.id}
              className="flex items-center gap-3"
              style={{ x: labelX }}
              transition={{ delay: i * 0.04 }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} />
              <div>
                <p className="text-xs font-semibold text-[#1a1816]">{layer.label}</p>
                <p className="text-[10px] font-mono text-[rgba(26,24,22,0.45)]">{layer.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central exploded phone stack */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[300px] md:w-[360px] h-[400px]">
            {LAYERS.map((layer, i) => (
              <motion.div
                key={layer.id}
                className="absolute left-0 right-0"
                style={{
                  top: "50%",
                  y: layerYs[i],
                  marginTop: -30,
                  zIndex: LAYERS.length - i,
                }}
              >
                {/* Layer card — blueprint style */}
                <div
                  className="relative h-[60px] rounded-lg border"
                  style={{
                    borderColor: `${layer.color}25`,
                    background: `linear-gradient(90deg, ${layer.color}08 0%, transparent 100%)`,
                    boxShadow: `0 4px 20px ${layer.color}10`,
                  }}
                >
                  {/* Top edge line */}
                  <div
                    className="absolute top-0 left-4 right-4 h-[1px] opacity-50"
                    style={{ background: layer.color }}
                  />
                  {/* Left accent */}
                  <div
                    className="absolute top-2 bottom-2 left-0 w-[2px] rounded-full"
                    style={{ background: layer.color, opacity: 0.7 }}
                  />
                  {/* Content */}
                  <div className="pl-5 pr-4 flex items-center h-full">
                    <span className="text-xs font-mono text-[rgba(26,24,22,0.6)]">{layer.label}</span>
                  </div>
                  {/* Bottom dashed connector */}
                  {i < LAYERS.length - 1 && (
                    <div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px]"
                      style={{
                        height: "22px",
                        background: `repeating-linear-gradient(to bottom, ${layer.color}30 0px, ${layer.color}30 3px, transparent 3px, transparent 6px)`,
                      }}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom progress text */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{ opacity: hintOpacity }}
        >
          <p className="text-[10px] font-mono text-[rgba(26,24,22,0.3)] uppercase tracking-widest">
            Scroll to explore
          </p>
        </motion.div>
      </div>
    </section>
  );
}
