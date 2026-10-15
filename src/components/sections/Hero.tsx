import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Play, ArrowRight, Lock, Zap, Sparkles } from "lucide-react";

export default function Hero() {
  // Framer Motion 3D Parallax Hook Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for silky smooth 3D tilting
  const rotateX = useSpring(useTransform(y, [-180, 180], [6, -6]), { stiffness: 120, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-180, 180], [-6, 6]), { stiffness: 120, damping: 15 });

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
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 hero-compact overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-[#f8fafc]">
      {/* Soft background radial glows */}
      <div className="absolute top-10 right-[12%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[8%] h-[250px] w-[250px] sm:h-[360px] sm:w-[360px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

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
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50/90 border border-blue-200/70 mb-5 sm:mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              <span>Next-Gen AI Institute LMS Platform</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[54px] leading-[1.12] text-slate-900 mb-5 sm:mb-6 tracking-tight"
            >
              Put your Institute’s <br />
              operations on <span className="text-blue-600">autopilot</span> with <span className="text-teal-600">AI</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-lg font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl"
            >
              EDBA brings the entire institution onto one connected platform, simplifying everyday operations, improving collaboration, and enabling smarter, faster decision-making.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8"
            >
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm font-semibold text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200/90 text-sm font-semibold text-slate-700 rounded-xl gap-2.5 shadow-sm hover:shadow transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span className="h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center shadow-inner">
                  <Play className="h-3 w-3 fill-current text-slate-700 ml-0.5" aria-hidden="true" />
                </span>
                <span>Watch Product Tour</span>
              </button>
            </motion.div>

          </motion.div>

          {/* ── Right: Real Dashboard Screenshot with 3D Tilt ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0" style={{ perspective: "1200px" }}>
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
                className="rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_30px_90px_-15px_rgba(37,99,235,0.2),0_12px_32px_-8px_rgba(15,23,42,0.08)]"
              >
                {/* Browser top bar */}
                <div className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-100/80 border-b border-slate-200">
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56] shadow-sm" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e] shadow-sm" />
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f] shadow-sm" />
                  <div className="ml-2 sm:ml-3 flex-1 max-w-[260px] bg-white border border-slate-200 rounded-md px-2.5 sm:px-3 py-0.5 flex items-center gap-1.5">
                    <Lock className="h-2.5 w-2.5 text-slate-400" aria-hidden="true" />
                    <span className="text-[9px] sm:text-[10px] text-slate-500 font-mono tracking-tight">app.edba.io/dashboard</span>
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
                className="absolute -top-3 sm:-top-4 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/80 p-2 sm:p-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-2.5 shadow-xl"
              >
                <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold shadow-md shadow-blue-500/30">
                  AI
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-900 font-bold leading-snug">
                  EDBA AI{" "}
                  <span className="text-slate-400 block font-normal text-[8px] sm:text-[9px]">Typing response...</span>
                </div>
              </motion.div>

              {/* ── Floating badge: Live students (bottom-left) ── */}
              <motion.div
                style={{ transform: "translateZ(55px)" }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="absolute -bottom-3 sm:-bottom-4 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/80 p-2 sm:p-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-2.5 shadow-xl"
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold whitespace-nowrap">1,847 Students Active</span>
              </motion.div>

              {/* ── Floating badge: AI Alert (mid-right) ── */}
              <motion.div
                style={{ transform: "translateZ(50px)" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="hidden sm:flex absolute top-[38%] -right-2 sm:-right-7 bg-white/95 backdrop-blur-md border border-slate-200/80 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl items-center gap-2 shadow-lg"
              >
                <div className="p-1 rounded-md bg-amber-50 border border-amber-200/60 text-amber-600">
                  <Zap className="h-3 w-3" aria-hidden="true" />
                </div>
                <div className="text-[9px] sm:text-[10px] text-slate-700 font-semibold leading-tight">
                  AI Alert
                  <span className="text-slate-400 block font-normal text-[8px] sm:text-[9px]">Grade 8 • High Attention</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
