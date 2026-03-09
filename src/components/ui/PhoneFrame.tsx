"use client";

import { motion } from "framer-motion";

interface PhoneFrameProps {
  accentColor?: string;
  children?: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export default function PhoneFrame({
  accentColor = "#54C5F8",
  children,
  className = "",
  animated = true,
}: PhoneFrameProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-[40px] blur-2xl opacity-20 transition-all duration-700"
        style={{ background: accentColor }}
      />

      {/* Phone shell */}
      <div
        className="relative rounded-[36px] border-2 overflow-hidden"
        style={{
          borderColor: `${accentColor}30`,
          background: "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, transparent 60%)",
        }}
      >
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-4 pb-1">
          <span className="text-[10px] font-mono opacity-40">09:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-12 h-4 rounded-full border opacity-30" style={{ borderColor: accentColor }} />
          </div>
        </div>

        {/* Notch bar */}
        <div className="flex justify-center mb-2">
          <div className="w-20 h-1 rounded-full opacity-20" style={{ background: accentColor }} />
        </div>

        {/* Content area */}
        <div className="px-3 pb-6 min-h-[280px]">{children}</div>

        {/* Home indicator */}
        <div className="flex justify-center pb-3">
          <div className="w-24 h-1 rounded-full opacity-30" style={{ background: accentColor }} />
        </div>
      </div>

      {/* Animated ring */}
      {animated && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 300 600"
          preserveAspectRatio="none"
        >
          <motion.rect
            x="2" y="2" width="296" height="596" rx="38" ry="38"
            fill="none"
            strokeWidth="1.5"
            stroke={accentColor}
            strokeOpacity={0.15}
            strokeDasharray="8 12"
            animate={{ strokeDashoffset: [0, -80] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      )}
    </div>
  );
}
