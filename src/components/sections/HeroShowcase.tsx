import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import MobilePhoneSvg from "./MobilePhoneSvg";

export const HeroShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full mx-auto select-none py-6 sm:py-8 lg:py-10">
      {/* ── Vibrant Glowing Gradient Mesh (Blue & Orange - High Opacity & Rich Saturation) ── */}
      {/* 1. Top-Right Radiant Logo Orange (#FE8021) Mesh Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-8 w-[420px] sm:w-[520px] h-[420px] sm:h-[520px] rounded-full bg-gradient-to-br from-[#FE8021]/85 via-[#FE8021]/60 to-[#FF9E4A]/25 blur-[80px] pointer-events-none -z-10"
      />

      {/* 2. Top-Center & Left Radiant Royal Blue / Sky Mesh Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-14 left-2 sm:left-10 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-gradient-to-tr from-blue-600/80 via-sky-500/70 to-cyan-400/60 blur-[85px] pointer-events-none -z-10"
      />

      {/* 3. Bottom Luminous Electric Cyan & Sky Blue Mesh Glow (Contrasting EDBA Logo) */}
      <div
        aria-hidden="true"
        className="absolute -bottom-14 right-12 w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-gradient-to-tl from-cyan-400/65 via-sky-400/55 to-blue-500/40 blur-[85px] pointer-events-none -z-10"
      />

      {/* ── High-Definition Crisp Showcase Stage ── */}
      <div className="relative w-full">
        {/* ============================================================ */}
        {/* 1. DESKTOP DISPLAY (High-Resolution Real Dashboard)          */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.14),0_35px_80px_-15px_rgba(37,99,235,0.18)] overflow-hidden"
        >
          <img
            src="/dashboardLandingWEB.png"
            alt="EDBA Admin Dashboard"
            width={1672}
            height={941}
            className="w-full h-auto block select-none pointer-events-none rounded-2xl sm:rounded-3xl"
            loading="eager"
            decoding="sync"
          />
        </motion.div>

        {/* ============================================================ */}
        {/* 2. FLOATING GLASS STAT PILLS (Gentle Floating Loop)         */}
        {/* ============================================================ */}

        {/* Pill 1: 99.4% Attendance Today (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: shouldReduceMotion ? 0 : [0, -5, 0] }}
          transition={{
            opacity: { duration: 0.5, ease: "easeOut" },
            y: shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 4.5, ease: "easeInOut" },
          }}
          className="absolute -top-3 left-1 sm:-top-5 sm:-left-5 lg:-top-6 lg:-left-7 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.12)] rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex items-center gap-2 sm:gap-3 select-none"
        >
          <div className="h-6 w-6 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-teal-50 text-teal-600 border border-teal-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
            <CheckCircle2 className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left pr-1 sm:pr-0">
            <span className="text-[10px] sm:text-sm font-bold text-slate-900 leading-tight">99.4% Attendance</span>
            <span className="text-[8.5px] sm:text-xs text-slate-500 font-medium">Logged across 42 batches</span>
          </div>
        </motion.div>

        {/* Pill 2: Parent Alert Sent (Top Right - visible on tablet and desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: shouldReduceMotion ? 0 : [0, 5, 0] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.3, ease: "easeOut" },
            y: shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 },
          }}
          className="hidden sm:flex absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:-top-5 lg:-right-5 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.12)] rounded-xl sm:rounded-2xl p-2 sm:p-3 items-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
            <Bell className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Parent Alert Sent</span>
            <span className="text-[10px] sm:text-xs text-emerald-600 font-semibold">Delivered to 1,240 parents</span>
          </div>
        </motion.div>

        {/* Pill 3: Fee Collected +12% (Bottom Left) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: shouldReduceMotion ? 0 : [-2, 4, -2] }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2, ease: "easeOut" },
            y: shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 },
          }}
          className="absolute -bottom-2.5 left-2 sm:-bottom-5 sm:left-5 lg:-bottom-6 lg:left-6 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_12px_28px_-6px_rgba(15,23,42,0.12)] rounded-xl sm:rounded-2xl p-1.5 sm:p-3 flex items-center gap-2 sm:gap-3 select-none"
        >
          <div className="h-6 w-6 sm:h-9 sm:w-9 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
            <TrendingUp className="h-3.5 w-3.5 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left pr-1 sm:pr-0">
            <span className="text-[10px] sm:text-sm font-bold text-slate-900 leading-tight">Fee Collected +12%</span>
            <span className="text-[8.5px] sm:text-xs text-slate-500 font-medium">Auto-reconciled this term</span>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 3. MOBILE PHONE SVG VECTOR ILLUSTRATION (Bottom-Right Overlap) */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30, x: 15 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="absolute -bottom-6 sm:-bottom-9 lg:-bottom-11 right-0 sm:-right-4 md:-right-6 lg:-right-8 w-28 sm:w-36 md:w-44 lg:w-[185px] xl:w-[205px] z-30 pointer-events-none select-none drop-shadow-[0_25px_45px_rgba(15,23,42,0.35)]"
        >
          <div className="w-full h-full antialiased">
            <MobilePhoneSvg />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroShowcase;
