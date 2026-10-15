import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Lock, ChevronLeft, ChevronRight, Radio } from "lucide-react";

interface Slide {
  id: string;
  name: string;
  url: string;
  src: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: "admin",
    name: "Admin Dashboard",
    url: "app.edba.io/dashboard/admin",
    src: "/dashboard/admin-dashboard.png",
    alt: "EDBA Admin Dashboard showing real-time enrollment distribution, attendance rate, and faculty analytics",
  },
  {
    id: "management",
    name: "Management Overview",
    url: "app.edba.io/dashboard/management-overview",
    src: "/dashboard/management-overview.png",
    alt: "EDBA Management Overview with seat occupancy tracking and fee collection status",
  },
  {
    id: "portal",
    name: "Institutional Portal",
    url: "app.edba.io/auth/select-account",
    src: "/dashboard/account-portal.png",
    alt: "EDBA Unified Authentication and Profile Selector for faculty, students, and employees",
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

  const rotateX = useSpring(useTransform(mouseY, [-180, 180], [4, -4]), { stiffness: 140, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-180, 180], [-4, 4]), { stiffness: 140, damping: 20 });

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
      className="relative w-full max-w-[680px] mx-auto select-none group/carousel"
      style={{ perspective: "1400px" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Ambient Radial Glow behind the 3D Stage ── */}
      <div className="absolute inset-0 -z-10 scale-95 translate-y-6 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-indigo-500/15 blur-3xl pointer-events-none transition-all duration-700" />

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
        {/* 1. SHADOW / BACKGROUND CARD (Layered neatly in 3D depth)     */}
        {/* ============================================================ */}
        <div
          aria-hidden="true"
          style={{
            transform: "translateZ(-30px) translateY(14px) scale(0.95)",
            transformOrigin: "bottom center",
          }}
          className="absolute inset-0 w-full rounded-2xl overflow-hidden border border-slate-300/40 bg-slate-900/10 shadow-[0_20px_50px_rgba(15,23,42,0.18)] pointer-events-none transition-all duration-700 ease-out z-0 opacity-40 filter brightness-[0.75] contrast-[0.9]"
        >
          {/* Shadow Browser Top bar */}
          <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-200/80 border-b border-slate-300/60">
            <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60" />
            <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60" />
            <span className="h-2 w-2 rounded-full bg-slate-400 opacity-60" />
            <div className="ml-2 flex-1 max-w-[200px] bg-slate-100 rounded px-2 py-0.5">
              <span className="text-[9px] text-slate-400 font-mono">{nextShadowSlide.url}</span>
            </div>
          </div>
          {/* Shadow Slide Image */}
          <div className="relative w-full aspect-[16/9] bg-slate-100 overflow-hidden">
            <img
              src={nextShadowSlide.src}
              alt=""
              className="w-full h-full object-cover object-top filter blur-[0.6px]"
            />
            {/* Dark tint overlay for depth */}
            <div className="absolute inset-0 bg-slate-950/25" />
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. FOREGROUND / ACTIVE CARD (Crystal Clear Image View)       */}
        {/* ============================================================ */}
        <div
          style={{ transform: "translateZ(15px)" }}
          className="relative z-10 rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_25px_70px_-15px_rgba(37,99,235,0.22),0_12px_32px_-10px_rgba(15,23,42,0.1)] transition-shadow duration-500"
        >
          {/* ── Browser Chrome Header ── */}
          <div className="flex items-center justify-between px-3.5 sm:px-4 py-2 sm:py-2.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#27c93f]" />

              {/* Dynamic URL Capsule */}
              <div className="ml-2 sm:ml-3 flex items-center gap-1.5 bg-white border border-slate-200 rounded-md px-2.5 sm:px-3 py-1 shadow-xs max-w-[220px] sm:max-w-[320px]">
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

          {/* ── Slide Frame (100% Unobstructed, Crystal Clear Image) ── */}
          <div className="relative w-full aspect-[16/9] bg-white overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
              <motion.div
                key={activeSlide.id}
                custom={direction}
                initial={{
                  opacity: 0,
                  scale: 0.97,
                  y: direction > 0 ? 12 : -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 280,
                    damping: 28,
                    mass: 0.85,
                  },
                }}
                exit={{
                  opacity: 0,
                  scale: 1.02,
                  y: direction > 0 ? -12 : 12,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="w-full h-full"
              >
                <img
                  src={activeSlide.src}
                  alt={activeSlide.alt}
                  className="w-full h-full object-cover object-top select-none"
                  draggable={false}
                  style={{ imageRendering: "auto" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next Slide Nav Chevrons (Appear on Hover) */}
            <div className="absolute inset-y-0 left-2.5 flex items-center z-20 pointer-events-none">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                aria-label="Previous dashboard slide"
                className="pointer-events-auto h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-md backdrop-blur-sm border border-slate-200 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="absolute inset-y-0 right-2.5 flex items-center z-20 pointer-events-none">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                aria-label="Next dashboard slide"
                className="pointer-events-auto h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-blue-600 shadow-md backdrop-blur-sm border border-slate-200 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-200 cursor-pointer focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ============================================================ */}
      {/* 3. INTERACTIVE TAB PILLS & TIMED PROGRESS INDICATORS        */}
      {/* ============================================================ */}
      <div className="mt-6 sm:mt-7 flex items-center justify-center gap-2 sm:gap-3 px-2">
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
                  : "bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200 shadow-xs"
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
