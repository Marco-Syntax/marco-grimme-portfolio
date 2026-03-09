import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        dark: {
          DEFAULT: "#0f0e0c",
          100: "#1a1916",
          200: "#252420",
        },
        light: {
          DEFAULT: "#dcd8cc",
          100: "#e8e4d8",
          200: "#f0ede6",
        },
        accent: {
          flutter: "#54C5F8",
          arch: "#FF6B6B",
          native: "#A78BFA",
          backend: "#34D399",
          projects: "#FBBF24",
          contact: "#FB923C",
        },
      },
      fontSize: {
        "display": ["clamp(3rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline": ["clamp(2rem,5vw,4rem)", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "700" }],
        "feature": ["clamp(2.5rem,6vw,5rem)", { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "800" }],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
