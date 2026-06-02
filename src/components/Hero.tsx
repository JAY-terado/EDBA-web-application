"use client";

import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Play, Check } from "lucide-react";

export default function Hero() {
  const pills = [
    "Complete Institute LMS",
    "AI Learning Assistant",
    "Auto Timetable",
    "Smart Assessments",
    "GPS Transport",
    "Parent Communication",
  ];

  // Exactly 8 bars matching the screenshot's height ratio
  const chartBars = [45, 65, 30, 78, 52, 90, 68, 85];

  // Framer Motion 3D Parallax Hook Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for silky smooth 3D tilting
  const rotateX = useSpring(useTransform(y, [-180, 180], [12, -12]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-180, 180], [-12, 12]), { stiffness: 120, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    // Calculate cursor position relative to the center of the container
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    // Return smoothly to center when cursor leaves
    x.set(0);
    y.set(0);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#f3f6fc] via-white to-white">
      {/* Soft gradient background radial glow */}
      <div className="absolute top-10 right-[15%] h-[400px] w-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Block */}
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
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
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
              <button
                className="inline-flex items-center justify-center px-6 py-3.5 neu-btn-light text-sm font-semibold text-zinc-700 rounded-full gap-2"
              >
                <span className="h-6 w-6 rounded-full bg-zinc-200/50 flex items-center justify-center text-zinc-650 shadow-inner">
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

          {/* Right Dashboard Mockup with 3D Parallax Tilt */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0 perspective-[1000px]">
            <motion.div 
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-[560px] neu-card rounded-3xl p-5 relative cursor-pointer"
            >
              {/* Dashboard Header */}
              <div 
                style={{ transform: "translateZ(30px)" }} 
                className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">📊</span>
                  <span className="text-xs font-bold text-zinc-950 font-display">Institute Dashboard</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
              </div>

              {/* Grid 3 Metric Cards */}
              <div 
                style={{ transform: "translateZ(40px)" }}
                className="grid grid-cols-3 gap-3 mb-5"
              >
                <div className="neu-card-inset p-3 rounded-2xl text-center">
                  <div className="text-blue-600 text-lg sm:text-xl font-extrabold font-display">2,840</div>
                  <div className="text-[10px] text-zinc-400 font-bold mt-0.5">Students</div>
                </div>

                <div className="neu-card-inset p-3 rounded-2xl text-center">
                  <div className="text-emerald-500 text-lg sm:text-xl font-extrabold font-display">98%</div>
                  <div className="text-[10px] text-zinc-400 font-bold mt-0.5">Attendance</div>
                </div>

                <div className="neu-card-inset p-3 rounded-2xl text-center">
                  <div className="text-purple-600 text-lg sm:text-xl font-extrabold font-display">₹4.2L</div>
                  <div className="text-[10px] text-zinc-400 font-bold mt-0.5">Fees Collected</div>
                </div>
              </div>

              {/* Bar Chart Graphics */}
              <div 
                style={{ transform: "translateZ(35px)" }}
                className="h-32 neu-card-inset rounded-2xl px-4 pt-6 pb-2 flex items-end justify-between gap-2.5 mb-5 overflow-hidden"
              >
                {chartBars.map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end h-full group">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.8, delay: 0.4 + i * 0.05, ease: "easeOut" as const }}
                      className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-lg shadow-[0_1px_3px_rgba(59,130,246,0.2)] hover:from-blue-500 hover:to-blue-300 transition-colors"
                    ></motion.div>
                  </div>
                ))}
              </div>

              {/* Notification Badges Row */}
              <div 
                style={{ transform: "translateZ(45px)" }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="bg-[#eff6ff] border border-[#dbeafe] p-2.5 rounded-xl flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                  <span className="text-xs">📬</span>
                  <span className="text-[10px] text-blue-800 font-semibold">14 new parent messages</span>
                </div>
                <div className="bg-[#f0fdf4] border border-[#dcfce7] p-2.5 rounded-xl flex items-center gap-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                  <span className="text-xs">🚌</span>
                  <span className="text-[10px] text-emerald-800 font-semibold">3 buses on route</span>
                </div>
              </div>

              {/* Floating Typing Assistant Badge */}
              <motion.div 
                style={{ transform: "translateZ(65px)" }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -top-4 -right-6 neu-card p-2.5 px-4 rounded-2xl flex items-center gap-2"
              >
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[9px] font-bold shadow-md shadow-blue-500/20">
                  AI
                </div>
                <div className="text-[10px] text-zinc-900 font-bold font-mono">
                  EDBA AI <span className="text-zinc-400 block font-normal text-[8px]">Typing...</span>
                </div>
              </motion.div>

              {/* Floating Bus tracker Badge */}
              <motion.div 
                style={{ transform: "translateZ(60px)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -bottom-4 -left-6 neu-card p-2.5 px-4 rounded-2xl flex items-center gap-2"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="h-2 w-2 rounded-full bg-emerald-500 absolute left-2.5"></span>
                <span className="text-[10px] text-zinc-850 font-bold ml-1">Bus #12 — On Route</span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
