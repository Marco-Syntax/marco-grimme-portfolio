"use client";

import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

interface FeatureSectionProps {
  id: string;
  accent: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: readonly string[];
  code: string;
  index: number;
}

function CodeBlock({ code, accent }: { code: string; accent: string }) {
  const lines = code.trim().split("\n");

  return (
    <div
      className="rounded-xl border overflow-hidden text-left"
      style={{ borderColor: `${accent}20`, background: "rgba(0,0,0,0.4)" }}
    >
      {/* Header bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5 border-b"
        style={{ borderColor: `${accent}15`, background: `${accent}06` }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-red-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
        <span className="ml-3 text-[10px] font-mono" style={{ color: `${accent}80` }}>
          snippet.dart
        </span>
      </div>
      {/* Code body */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-[11px] md:text-xs leading-[1.7] font-mono">
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="select-none mr-4 text-[rgba(240,237,230,0.15)] w-4 text-right flex-shrink-0">
                {i + 1}
              </span>
              <span dangerouslySetInnerHTML={{ __html: highlightCode(line, accent) }} />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}

function escHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const KEYWORDS = new Set([
  "class","extends","abstract","final","const","var","await","async",
  "return","Future","Either","List","String","int","bool","void",
  "override","import","from","def","implements","private","some",
  "struct","protocol","func","let","self","super","in","if","else",
  "for","while","try","catch","throw","new","null","true","false",
]);

// Single token regex — order matters: decorators > strings > keywords > function-calls
// Operates on PLAIN TEXT only; HTML is injected per-token after matching
const TOKEN_RE =
  /@\w+|"[^"]*"|'[^']*'|\b(?:class|extends|abstract|final|const|var|await|async|return|Future|Either|List|String|int|bool|void|override|import|from|def|implements|private|some|struct|protocol|func|let|self|super)\b|\b\w+(?=\s*\()/g;

function highlightCode(line: string, accent: string): string {
  // Detect comment start on raw text (safe — no HTML yet)
  let codePart = line;
  let commentPart = "";
  const dartIdx = line.indexOf("//");
  const pyIdx = line.trimStart().startsWith("#") ? line.indexOf("#") : -1;
  const splitAt =
    dartIdx !== -1 && pyIdx !== -1 ? Math.min(dartIdx, pyIdx)
    : dartIdx !== -1 ? dartIdx
    : pyIdx;
  if (splitAt !== -1) {
    codePart = line.slice(0, splitAt);
    commentPart = line.slice(splitAt);
  }

  // Single-pass tokenisation on plain text — no HTML present yet
  const parts: string[] = [];
  TOKEN_RE.lastIndex = 0;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = TOKEN_RE.exec(codePart)) !== null) {
    if (m.index > last) parts.push(escHtml(codePart.slice(last, m.index)));
    const tok = m[0];
    const esc = escHtml(tok);
    if (tok.startsWith("@")) {
      parts.push(`<span style="color:${accent}">${esc}</span>`);
    } else if (tok.startsWith('"') || tok.startsWith("'")) {
      parts.push(`<span style="color:#34D399">${esc}</span>`);
    } else if (KEYWORDS.has(tok)) {
      parts.push(`<span style="color:#A78BFA">${esc}</span>`);
    } else {
      parts.push(`<span style="color:#54C5F8">${esc}</span>`);
    }
    last = m.index + tok.length;
  }
  if (last < codePart.length) parts.push(escHtml(codePart.slice(last)));

  let html = parts.join("");
  if (commentPart) {
    html += `<span style="color:rgba(240,237,230,0.35)">${escHtml(commentPart)}</span>`;
  }
  return `<span style="color:rgba(240,237,230,0.75)">${html}</span>`;
}

export default function FeatureSection({
  id,
  accent,
  title,
  subtitle,
  description,
  bullets,
  code,
  index,
}: FeatureSectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen bg-[#0f0e0c] flex items-center py-24 overflow-hidden"
    >
      {/* Subtle glow from accent */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          right: index % 2 === 0 ? "-10%" : "auto",
          left: index % 2 !== 0 ? "-10%" : "auto",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          background: accent,
          opacity: 0.03,
          filter: "blur(120px)",
        }}
      />

      {/* Top separator line */}
      <div className="absolute top-0 left-6 md:left-12 right-6 md:right-12 h-[1px] bg-[rgba(240,237,230,0.06)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Section number */}
            <motion.p
              variants={fadeUp}
              className="text-xs font-mono mb-6"
              style={{ color: `${accent}60` }}
            >
              {String(index + 1).padStart(2, "0")} /
            </motion.p>

            {/* Feature title */}
            <motion.h2
              variants={fadeUp}
              className="font-[800] leading-[0.93] tracking-tight mb-4"
              style={{
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                color: accent,
              }}
            >
              {title}
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-[rgba(240,237,230,0.55)] mb-5 font-medium"
            >
              {subtitle}
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-12 h-[1px] mb-6"
              style={{ background: `${accent}50` }}
            />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-[rgba(240,237,230,0.5)] leading-relaxed mb-8 max-w-md"
            >
              {description}
            </motion.p>

            {/* Bullets */}
            <motion.ul variants={staggerContainer} className="flex flex-col gap-3">
              {bullets.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-center gap-3 text-sm text-[rgba(240,237,230,0.65)]"
                >
                  <span
                    className="flex-shrink-0 w-4 h-[1.5px] rounded-full"
                    style={{ background: accent }}
                  />
                  {b}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: Code block */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <CodeBlock code={code} accent={accent} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
