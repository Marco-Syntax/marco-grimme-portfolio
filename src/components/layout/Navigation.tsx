"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";

const links = [
  { label: "Projekte", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div
        className="relative border-b"
        style={{
          backgroundColor: `rgba(var(--bg), ${bgOpacity})`,
          borderColor: "var(--c-nav-border)",
          WebkitBackdropFilter: "blur(12px)",
          backdropFilter: "blur(12px)",
          transform: "translateZ(0)",
          transition: "border-color 0.35s ease",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-sm font-semibold tracking-tight hover:opacity-70 transition-opacity"
            style={{ color: "var(--c-nav-text)" }}
          >
            Marco Grimme
          </a>

          {/* Links + Toggle */}
          <div className="flex items-center gap-5 md:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors duration-200 hidden sm:block"
                style={{ color: "var(--c-nav-text-dim)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--c-nav-text)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "var(--c-nav-text-dim)")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:marco@grimme.dev"
              className="text-sm px-4 py-1.5 rounded-full border transition-all duration-200 hidden md:block"
              style={{ borderColor: "var(--c-border)", color: "var(--c-nav-text-dim)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border-hover)";
                el.style.color = "var(--c-nav-text)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "var(--c-border)";
                el.style.color = "var(--c-nav-text-dim)";
              }}
            >
              Hire me
            </a>
            <ThemeToggle />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
