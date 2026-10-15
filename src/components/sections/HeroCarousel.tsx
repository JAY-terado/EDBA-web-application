import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Lock, ChevronLeft, ChevronRight, Zap, Radio } from "lucide-react";

interface Slide {
  id: string;
  name: string;
  tagline: string;
  url: string;
  src: string;
  alt: string;
  liveMetric: string;
}

const SLIDES: Slide[] = [
  {
    id: "admin",
    name: "Admin Dashboard",
    tagline: "Academic Core & Live Attendance",
    url: "app.edba.io/dashboard/admin",
    src: "/dashboard/admin-dashboard.png",
    alt: "EDBA Admin Dashboard showing student registration, active teachers, and course enrollment charts",
    liveMetric: "1,847 Students Active",
  },
  {
    id: "management",
    name: "Management Overview",
    tagline: "Multi-Campus Occupancy & Fees",
    url: "app.edba.io/dashboard/management-overview",
    src: "/dashboard/management-overview.png",
    alt: "EDBA Management Overview with seat occupancy tracking and fee collection ledgers",
    liveMetric: "₹1.24 Cr Collected (92%)",
  },
  {
    id: "portal",
    name: "Institutional Portal",
    tagline: "Role-Based Single Sign-On",
    url: "app.edba.io/auth/select-account",
    src: "/dashboard/account-portal.png",
    alt: "EDBA Unified Authentication and Profile Selector for faculty, students, and employees",
    liveMetric: "Role Access Verified",
  },
];

const AUTOPLAY_INTERVAL = 5500;

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 3D Parallax Tilt Logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-180, 180], [6, -6]), { stiffness: 140, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-180, 180], [-6, 6]), { stiffness: 140, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const goToSlide = (idx: number) => {
    if (idx === currentIndex) return;
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  // Auto-play interval
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, currentIndex]);

  const activeSlide = SLIDES[currentIndex];
  const nextShadowSlide = SLIDES[(currentIndex + 1) % SLIDES.length];

  return (
    <div
      className="relative w-full max-w-[620px] mx-auto select-none"
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Ambient Radial Glow behind the 3D Stage ── */}
      <div className="absolute inset-0 -z-10 scale-95 translate-y-6 rounded-3xl bg-gradient-to-tr from-blue-500/25 via-cyan-400/20 to-indigo-500/20 blur-3xl pointer-events-none transition-all duration-700" />

      {/* ── 3D Floating Tilting Container ── */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full transition-transform ease-out"
      >
        {/* ============================================================ */}
        {/* 1. SHADOW / BACKGROUND CARD (Layered behind in 3D depth)   */}
        {/* ============================================================ */}
        <div
          aria-hidden="true"
          style={{
            transform: "translateZ(-35px) translateY(18px) scale(0.93)",
            transformOrigin: "bottom center",
          }}
          className="absolute inset-0 w-full rounded-2xl overflow-hidden border border-slate-300/60 bg-slate-900/10 backdrop-blur-xs opacity-50 shadow-[0_20px_50px_rgba(15,23,42,0.25)] pointer-events-none transition-all duration-700 ease-out z-0 filter brightness-[0.8] contrast-[0.95]"
        >
          {/* Shadow Browser Top bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-200/90 border-b border-slate-300/80">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 opacity-60" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 opacity-60" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 opacity-60" />
            <div className="ml-2 flex-1 max-w-[200px] bg-slate-100 rounded px-2 py-0.5">
              <span className="text-[9px] text-slate-400 font-mono">{nextShadowSlide.url}</span>
            </div>
          </div>
          {/* Shadow Slide Image */}
          <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={nextShadowSlide.src}
              alt=""
              className="w-full h-full object-cover object-top filter blur-[0.4px]"
            />
            {/* Dark vignette overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-slate-950/10" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. FOREGROUND / ACTIVE CARD (Silky Smooth Animated Deck)     */}
        {/* ============================================================ */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_28px_80px_-15px_rgba(37,99,235,0.28),0_12px_36px_-10px_rgba(15,23,42,0.12)] transition-shadow duration-500"
        >
          {/* ── Browser Chrome Header ── */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 bg-slate-50/95 backdrop-blur-md border-b border-slate-200">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56] shadow-xs" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e] shadow-xs" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f] shadow-xs" />

              {/* Dynamic URL Capsule */}
              <div className="ml-2 sm:ml-3 flex items-center gap-1.5 bg-white border border-slate-200/90 rounded-lg px-2.5 sm:px-3 py-1 shadow-xs max-w-[210px] sm:max-w-[280px]">
                <Lock className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-emerald-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-[10px] sm:text-[11px] text-slate-600 font-mono tracking-tight truncate">
                  {activeSlide.url}
                </span>
              </div>
            </div>

            {/* Live Indicator Pill */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-[10px] font-semibold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">LIVE</span>
            </div>
          </div>

          {/* ── Slide Frame with AnimatePresence Transitions ── */}
          <div className="relative w-full aspect-[16/9] bg-slate-50 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeSlide.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                  y: direction > 0 ? 16 : -16,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.9,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                  y: direction > 0 ? -16 : 16,
                  transition: { duration: 0.35, ease: "easeInOut" },
                }}
                className="w-full h-full"
              >
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover object-top select-none"
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Subtle Gradient Sheen across top and edges */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-900/5 via-transparent to-white/10" />

            {/* Prev / Next Slide Nav Chevrons (Appear on Hover) */}
            <div className="absolute inset-y-0 left-2 flex items-center z-20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous dashboard slide"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-md backdrop-blur-sm border border-slate-200/80 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100 sm:opacity-80 transition-all duration-200 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-2 flex items-center z-20">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next dashboard slide"
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-md backdrop-blur-sm border border-slate-200/80 flex items-center justify-center opacity-0 hover:opacity-100 group-hover:opacity-100 sm:opacity-80 transition-all duration-200 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. 3D FLOATING ACCENT BADGES (Layered with translateZ depth) */}
        {/* ============================================================ */}

        {/* Top-Right Badge: AI Intelligence */}
        <motion.div
          style={{ transform: "translateZ(65px)" }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-3.5 sm:-top-5 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200/90 p-2 sm:p-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-2.5 shadow-xl shadow-blue-900/10 z-30"
        >
          <div className="h-6 w-6 sm:h-7 sm:w-7 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold shadow-md shadow-blue-500/30">
            AI
          </div>
          <div className="text-[10px] sm:text-[11px] text-slate-900 font-bold leading-snug">
            EDBA Copilot
            <span className="text-slate-400 block font-normal text-[8px] sm:text-[9px]">Live insight analysis...</span>
          </div>
        </motion.div>

        {/* Bottom-Left Badge: Dynamic Live Metric from current slide */}
        <motion.div
          style={{ transform: "translateZ(60px)" }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute -bottom-3.5 sm:-bottom-5 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200/90 p-2 sm:p-2.5 px-3 sm:px-4 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-2.5 shadow-xl shadow-blue-900/10 z-30"
        >
          <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] sm:text-[11px] text-slate-800 font-bold whitespace-nowrap">
            {activeSlide.liveMetric}
          </span>
        </motion.div>

        {/* Mid-Right Badge: Real-time Alert */}
        <motion.div
          style={{ transform: "translateZ(55px)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden sm:flex absolute top-[36%] -right-3 sm:-right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 py-1.5 sm:py-2 px-2.5 sm:px-3 rounded-xl items-center gap-2 shadow-lg shadow-amber-900/10 z-30"
        >
          <div className="p-1 rounded-md bg-amber-50 border border-amber-200/70 text-amber-600">
            <Zap className="h-3 w-3" aria-hidden="true" />
          </div>
          <div className="text-[9px] sm:text-[10px] text-slate-700 font-semibold leading-tight">
            Smart Attendance
            <span className="text-slate-400 block font-normal text-[8px] sm:text-[9px]">Auto-Synced</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE TAB PILLS & TIMED PROGRESS INDICATORS        */}
      {/* ============================================================ */}
      <div className="mt-7 sm:mt-8 flex items-center justify-center gap-2 sm:gap-3 px-2">
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => goToSlide(idx)}
              className={`group relative flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-500/20"
                  : "bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-xs"
              }`}
            >
              <Radio
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 transition-colors ${
                  isActive ? "text-white" : "text-slate-400 group-hover:text-blue-500"
                }`}
                aria-hidden="true"
              />
              <span className="tracking-tight text-[11px] sm:text-xs">{slide.name}</span>

              {/* Active Timer Progress Bar */}
              {isActive && (
                <motion.div
                  key={`progress-${idx}`}
                  initial={{ width: "0%" }}
                  animate={{ width: isHovered ? "100%" : "100%" }}
                  transition={{
                    duration: isHovered ? 0 : AUTOPLAY_INTERVAL / 1000,
                    ease: "linear",
                  }}
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-white/70 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default HeroCarousel;
