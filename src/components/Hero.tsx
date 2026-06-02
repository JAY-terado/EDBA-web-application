"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play, Check } from "lucide-react";

export default function Hero() {
  const pills = [
    "Complete Institute LMS",
    "AI Learning Assistant",
    "Auto Timetable",
    "Smart Assessments",
    "GPS Transport",
    "Parent Communication",
  ];

  // Framer Motion 3D Parallax Hook Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for silky smooth 3D tilting
  const rotateX = useSpring(useTransform(y, [-180, 180], [8, -8]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-180, 180], [-8, 8]), { stiffness: 120, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - rect.width / 2;
    const mouseY = event.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#f3f6fc] via-white to-white">
      {/* Soft background radial glow */}
      <div className="absolute top-10 right-[15%] h-[500px] w-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[10%] h-[300px] w-[300px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Text Block ── */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Announcement Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-blue-600 bg-blue-50/80 border border-blue-100/60 mb-6"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              AI-Powered Institute LMS Platform
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[54px] leading-tight text-zinc-900 mb-6 tracking-tight"
            >
              Transform Your Institute with <br />
              <span className="text-blue-600">AI-Powered</span>{" "}
              <span className="text-teal-500">Education</span> <br />
              Management
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-zinc-500 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl"
            >
              One Platform. One Login. Complete Institute Operations. <br />
              Manage admissions, academics, fees, transport, <br />
              communication, and AI-powered learning with EDBA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8"
            >
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-3.5 neu-btn-blue text-sm font-semibold text-white rounded-full group cursor-pointer"
              >
                Book a Free Demo →
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3.5 neu-btn-light text-sm font-semibold text-zinc-700 rounded-full gap-2">
                <span className="h-6 w-6 rounded-full bg-zinc-200/50 flex items-center justify-center shadow-inner">
                  <Play className="h-3 w-3 fill-current ml-0.5" />
                </span>
                Watch Video
              </button>
            </motion.div>

            {/* Verification Pills */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap gap-2.5 max-w-xl"
            >
              {pills.map((pill, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 neu-pill-inset rounded-full text-xs text-zinc-600 font-semibold"
                >
                  <div className="h-4 w-4 rounded-full bg-emerald-100/50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                    <Check className="h-2.5 w-2.5 stroke-[3]" />
                  </div>
                  {pill}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Real Dashboard Screenshot with 3D Tilt ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-10 lg:pt-0" style={{ perspective: "1200px" }}>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full max-w-[580px] relative cursor-pointer"
            >
              {/* Ambient glow layer behind the card */}
              <div className="absolute inset-0 -z-10 translate-y-8 scale-[0.92] rounded-3xl bg-gradient-to-tr from-blue-400/25 via-cyan-400/15 to-teal-400/20 blur-3xl pointer-events-none" />

              {/* Browser-chrome frame */}
              <div
                style={{ transform: "translateZ(0px)" }}
                className="rounded-2xl overflow-hidden border border-zinc-200/80 bg-white shadow-[0_40px_100px_-12px_rgba(37,99,235,0.22),0_12px_32px_-8px_rgba(0,0,0,0.12)]"
              >
                {/* Browser top bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#f1f3f6] border-b border-zinc-200">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56] shadow-sm" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f] shadow-sm" />
                  <div className="ml-3 flex-1 max-w-[260px] bg-white border border-zinc-200/80 rounded-md px-3 py-0.5 flex items-center gap-1.5">
                    <span className="text-[9px] text-zinc-400 font-mono">🔒</span>
                    <span className="text-[9px] text-zinc-400 font-mono tracking-tight">app.edba.io/dashboard</span>
                  </div>
                </div>

                {/* Real EDBA Dashboard Screenshot */}
                <img
                  src="/dashboard-preview.png"
                  alt="EDBA AI Analytics Dashboard — Subject Performance, AI Insights & Recommendations"
                  className="w-full block select-none"
                  draggable={false}
                />
              </div>

              {/* ── Floating badge: AI Typing (top-right) ── */}
              <motion.div
                style={{ transform: "translateZ(60px)" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -top-5 -right-3 sm:-right-7 neu-card p-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-xl"
              >
                <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-[9px] font-black shadow-md shadow-blue-500/30">
                  AI
                </div>
                <div className="text-[10px] text-zinc-900 font-bold font-mono leading-snug">
                  EDBA AI{" "}
                  <span className="text-zinc-400 block font-normal text-[8px]">Typing response...</span>
                </div>
              </motion.div>

              {/* ── Floating badge: Live students (bottom-left) ── */}
              <motion.div
                style={{ transform: "translateZ(55px)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -bottom-5 -left-3 sm:-left-7 neu-card p-2.5 px-4 rounded-2xl flex items-center gap-2 shadow-xl"
              >
                <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] text-zinc-800 font-bold whitespace-nowrap">1,847 Students Live</span>
              </motion.div>

              {/* ── Floating badge: AI Alert (mid-right) ── */}
              <motion.div
                style={{ transform: "translateZ(50px)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="absolute top-[38%] -right-2 sm:-right-8 neu-card py-1.5 px-3 rounded-xl flex items-center gap-1.5 shadow-lg"
              >
                <span className="text-amber-500 text-xs">⚡</span>
                <div className="text-[9px] text-zinc-700 font-semibold leading-tight">
                  AI Alert
                  <span className="text-zinc-400 block font-normal">Grade 8 • High</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
