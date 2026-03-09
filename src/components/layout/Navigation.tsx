"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Projekte", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.08]);

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
          backgroundColor: `rgba(15, 14, 12, ${bgOpacity})`,
          borderColor: `rgba(240, 237, 230, ${borderOpacity})`,
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between h-14">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-sm font-semibold tracking-tight text-[#f0ede6] hover:opacity-70 transition-opacity"
          >
            Marco Grimme
          </a>

          {/* Links */}
          <div className="flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[rgba(240,237,230,0.5)] hover:text-[#f0ede6] transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:marco@grimme.dev"
              className="text-sm px-4 py-1.5 rounded-full border border-[rgba(240,237,230,0.15)] text-[rgba(240,237,230,0.7)] hover:border-[rgba(240,237,230,0.4)] hover:text-[#f0ede6] transition-all duration-200"
            >
              Hire me
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
