import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Layers,
  IndianRupee,
  Search,
  Bell,
  ChevronDown,
  Calendar,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import MobilePhoneSvg from "./MobilePhoneSvg";

export const HeroShowcase: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full mx-auto select-none py-6 sm:py-8 lg:py-10">
      {/* ── Vibrant Glowing Gradient Mesh (Blue & Orange - High Opacity & Rich Saturation) ── */}
      {/* 1. Top-Right Radiant Orange / Amber Mesh Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-16 -right-8 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] rounded-full bg-gradient-to-br from-amber-400/80 via-orange-500/70 to-rose-400/45 blur-[80px] pointer-events-none -z-10"
      />

      {/* 2. Top-Center & Left Radiant Royal Blue / Indigo Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-14 left-2 sm:left-10 w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full bg-gradient-to-tr from-blue-600/80 via-indigo-500/70 to-purple-500/55 blur-[85px] pointer-events-none -z-10"
      />

      {/* 3. Bottom Violet / Soft Indigo Accent Glow */}
      <div
        aria-hidden="true"
        className="absolute -bottom-14 right-12 w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-full bg-gradient-to-tl from-purple-500/50 via-indigo-400/40 to-blue-400/30 blur-[80px] pointer-events-none -z-10"
      />

      {/* ── 3D Perspective Stage ── */}
      <div className="relative w-full" style={{ perspective: "1400px" }}>
        {/* ============================================================ */}
        {/* 1. TILTED DESKTOP / TABLET DISPLAY (Majestic & Spacious)     */}
        {/* ============================================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30, rotateX: 6, rotateY: -10, rotateZ: 1 }}
          animate={{ opacity: 1, y: 0, rotateX: 3.5, rotateY: -7, rotateZ: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
          }}
          className="relative w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.14),0_45px_100px_-20px_rgba(45,118,196,0.18)] overflow-hidden"
        >
          {/* Main Desktop Interface */}
          <div className="flex h-full min-h-[400px] sm:min-h-[450px] lg:min-h-[480px] text-slate-800 font-sans">
            {/* ── Sidebar (Left) ── */}
            <aside className="w-40 sm:w-44 bg-slate-50/70 border-r border-slate-100 p-3 sm:p-4 flex flex-col justify-between hidden md:flex flex-shrink-0">
              <div>
                {/* Logo */}
                <div className="flex items-center gap-1.5 mb-4 px-1">
                  <span className="font-display font-black text-xl text-blue-600 tracking-tight">
                    ed<span className="text-orange-500">bā</span>
                  </span>
                </div>

                {/* Institute Selector */}
                <div className="bg-white border border-slate-200/80 rounded-xl px-2.5 py-1.5 mb-5 flex items-center justify-between shadow-2xs">
                  <span className="text-[11px] font-semibold text-slate-700 truncate">Test College</span>
                  <ChevronDown className="h-3 w-3 text-slate-400 flex-shrink-0" />
                </div>

                {/* Nav Items */}
                <div className="space-y-1">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 px-2 block mb-1">
                    Overview
                  </span>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold">
                    <Layers className="h-3.5 w-3.5 text-blue-600" />
                    <span>Dashboard</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 text-xs font-medium">
                    <GraduationCap className="h-3.5 w-3.5" />
                    <span>Students</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 text-xs font-medium">
                    <Users className="h-3.5 w-3.5" />
                    <span>Teachers</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 text-xs font-medium">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Attendance</span>
                  </div>
                  <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 text-xs font-medium">
                    <IndianRupee className="h-3.5 w-3.5" />
                    <span>Fees</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <span className="text-[9px] text-slate-400 block px-1">EDBA Cloud v2.4</span>
              </div>
            </aside>

            {/* ── Main Content Area (Right) ── */}
            <main className="flex-1 p-3.5 sm:p-5 lg:p-6 bg-white overflow-hidden flex flex-col justify-between">
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-100 gap-2">
                <div className="relative flex-1 max-w-[220px] sm:max-w-xs">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Search students, pages..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-lg pl-8 pr-3 py-1 text-[11px] text-slate-600 placeholder:text-slate-400 focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="hidden sm:inline-block text-[11px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                    Academic Year <span className="text-slate-900 font-bold">2025–2026</span>
                  </span>
                  <div className="relative p-1 rounded-full text-slate-400 hover:text-slate-600">
                    <Bell className="h-4 w-4" />
                    <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                  </div>
                  <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-[10px] flex items-center justify-center shadow-xs">
                    AD
                  </div>
                </div>
              </div>

              {/* Greeting & Header */}
              <div className="flex items-center justify-between my-2 sm:my-2.5">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">
                    Admin Dashboard
                  </h3>
                  <span className="text-[10px] sm:text-xs text-slate-500 font-normal">
                    Good morning, Admin 👋
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-slate-500 bg-slate-50 border border-slate-200/80 px-2.5 py-1 rounded-lg">
                  <Calendar className="h-3 w-3 text-slate-400" />
                  <span>Wed, 15 Oct 2026</span>
                </div>
              </div>

              {/* ── 4 Top Stat Cards ── */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-3">
                {/* 1. Students */}
                <div className="bg-slate-50/70 border border-slate-200/80 p-2.5 sm:p-3 rounded-xl flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-medium">Students</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">1,248</span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-600 font-semibold block">↑ 12% this month</span>
                  </div>
                </div>

                {/* 2. Teachers */}
                <div className="bg-slate-50/70 border border-slate-200/80 p-2.5 sm:p-3 rounded-xl flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-medium">Teachers</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">48</span>
                    <span className="text-[8px] sm:text-[9px] text-slate-400 font-medium block">→ No change</span>
                  </div>
                </div>

                {/* 3. Active Classes */}
                <div className="bg-slate-50/70 border border-slate-200/80 p-2.5 sm:p-3 rounded-xl flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-medium">Active Classes</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">86</span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-600 font-semibold block">↑ 8% this month</span>
                  </div>
                </div>

                {/* 4. Fee Collection */}
                <div className="bg-slate-50/70 border border-slate-200/80 p-2.5 sm:p-3 rounded-xl flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[9px] text-slate-400 block font-medium">Fee Collection</span>
                    <span className="font-display font-extrabold text-sm sm:text-base text-slate-900">₹12.4L</span>
                    <span className="text-[8px] sm:text-[9px] text-emerald-600 font-semibold block">↑ 18% this month</span>
                  </div>
                </div>
              </div>

              {/* ── 2 Bottom Chart Cards ── */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 flex-1 items-stretch">
                {/* Left: Enrollment Trend Bar Chart */}
                <div className="sm:col-span-7 bg-slate-50/70 border border-slate-200/80 p-3 sm:p-3.5 rounded-xl flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-900">Enrollment Trend</span>
                    <span className="text-[9px] text-slate-400 font-semibold bg-white border border-slate-200/70 px-1.5 py-0.5 rounded">
                      This Year
                    </span>
                  </div>

                  {/* SVG Bar Chart (Jan - Jul) */}
                  <div className="flex items-end justify-between gap-1.5 sm:gap-2 h-24 sm:h-28 pt-2 px-1">
                    {[
                      { month: "Jan", val: 35 },
                      { month: "Feb", val: 50 },
                      { month: "Mar", val: 65 },
                      { month: "Apr", val: 75 },
                      { month: "May", val: 90 },
                      { month: "Jun", val: 82 },
                      { month: "Jul", val: 100 },
                    ].map((b, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          style={{ height: `${b.val}%` }}
                          className="w-full max-w-[22px] rounded-t-sm bg-gradient-to-t from-blue-600 to-sky-400 transition-all duration-500"
                        />
                        <span className="text-[8px] text-slate-400 font-medium">{b.month}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Attendance Overview Donut Chart */}
                <div className="sm:col-span-5 bg-slate-50/70 border border-slate-200/80 p-3 sm:p-3.5 rounded-xl flex flex-col justify-between">
                  <span className="text-[11px] font-bold text-slate-900 mb-1">Attendance Overview</span>

                  <div className="flex items-center justify-center my-auto">
                    {/* Radial SVG Gauge */}
                    <div className="relative h-20 w-20 flex items-center justify-center">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-200"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-emerald-500"
                          stroke="currentColor"
                          strokeWidth="3.5"
                          strokeDasharray="92, 100"
                          strokeLinecap="round"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-display font-extrabold text-xs text-slate-900 leading-tight">92%</span>
                        <span className="text-[7px] text-slate-400 uppercase font-bold">Overall</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[8px] text-slate-500 pt-1 border-t border-slate-200/60 px-1">
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Present 92%</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Absent 5%</span>
                    <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Leave 3%</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </motion.div>

        {/* ============================================================ */}
        {/* 2. FLOATING GLASS STAT PILLS (Gentle Floating Loop)         */}
        {/* ============================================================ */}

        {/* Pill 1: 99.4% Attendance Today (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -6, 0] }}
          transition={shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
          className="absolute -top-3 left-1 sm:-top-5 sm:-left-5 lg:-top-6 lg:-left-7 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] rounded-2xl p-2 sm:p-3 flex items-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-xl bg-teal-50 text-teal-600 border border-teal-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
            <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] sm:text-sm font-bold text-slate-900 leading-tight">99.4% Attendance</span>
            <span className="text-[9px] sm:text-xs text-slate-500 font-medium">Logged across 42 batches</span>
          </div>
        </motion.div>

        {/* Pill 2: Parent Alert Sent (Top Right - visible on tablet and desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 6, 0] }}
          transition={shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.4 }}
          className="hidden sm:flex absolute -top-3 -right-2 sm:-top-4 sm:-right-4 lg:-top-5 lg:-right-5 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] rounded-2xl p-2.5 sm:p-3 items-center gap-3 select-none"
        >
          <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-blue-50 text-blue-600 border border-blue-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
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
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [-2, 6, -2] }}
          transition={shouldReduceMotion ? { duration: 0.4 } : { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 0.8 }}
          className="absolute -bottom-3 left-1 sm:-bottom-5 sm:left-5 lg:-bottom-6 lg:left-6 z-40 bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_16px_36px_-6px_rgba(15,23,42,0.12)] rounded-2xl p-2 sm:p-3 flex items-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="h-7 w-7 sm:h-9 sm:w-9 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/70 flex items-center justify-center flex-shrink-0 shadow-xs">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[11px] sm:text-sm font-bold text-slate-900 leading-tight">Fee Collected +12%</span>
            <span className="text-[9px] sm:text-xs text-slate-500 font-medium">Auto-reconciled this term</span>
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
          <div
            style={{
              transform: "translateZ(50px) rotateX(4deg) rotateY(-8deg) rotateZ(5deg)",
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
            className="w-full h-full antialiased"
          >
            <MobilePhoneSvg />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroShowcase;
