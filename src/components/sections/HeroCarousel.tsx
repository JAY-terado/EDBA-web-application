import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: string;
  name: string;
  src: string;
  alt: string;
}

const SLIDES: Slide[] = [
  {
    id: "admin",
    name: "Admin Dashboard",
    src: "/dashboard/admin-dashboard.png",
    alt: "EDBA Admin Dashboard showing real-time enrollment distribution, attendance rate, and faculty analytics",
  },
  {
    id: "management",
    name: "Management Overview",
    src: "/dashboard/management-overview.png",
    alt: "EDBA Management Overview with seat occupancy tracking and fee collection status",
  },
  {
    id: "portal",
    name: "Institutional Portal",
    src: "/dashboard/account-portal.png",
    alt: "EDBA Unified Authentication and Profile Selector for faculty, students, and employees",
  },
];

const AUTOPLAY_INTERVAL = 3400; // Continuous auto-moving card deck

export const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  // Continuous auto-advancing card cycle
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const activeSlide = SLIDES[currentIndex];
  const nextSlide1 = SLIDES[(currentIndex + 1) % SLIDES.length];
  const nextSlide2 = SLIDES[(currentIndex + 2) % SLIDES.length];

  return (
    <div className="relative w-full max-w-[780px] xl:max-w-[840px] mx-auto select-none group/carousel pt-2 pb-10 sm:pb-14">
      {/* ── Soft Gradient Shadow of the card (Natural gradient blur, NO dark shaped discs) ── */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 bottom-4 h-24 bg-gradient-to-b from-transparent via-slate-900/[0.04] to-slate-900/[0.12] blur-2xl rounded-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-12 bottom-6 h-16 bg-gradient-to-b from-transparent to-blue-600/[0.08] blur-3xl rounded-3xl pointer-events-none -z-10"
      />

      {/* ── Card Deck Stage with Overlapping Layers ── */}
      <div className="relative w-full aspect-[16/9]">
        {/* ============================================================ */}
        {/* LAYER 3: DEEPEST CARD IN STACK (Smallest, furthest back)    */}
        {/* ============================================================ */}
        <div
          aria-hidden="true"
          style={{
            transform: "translateY(24px) scale(0.92)",
            transformOrigin: "bottom center",
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-[0_10px_25px_-5px_rgba(15,23,42,0.06)] pointer-events-none transition-all duration-700 ease-out z-0 opacity-40 filter brightness-[0.88]"
        >
          <img
            src={nextSlide2.src}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* ============================================================ */}
        {/* LAYER 2: OVERLAPPING CARD (Directly behind top card)        */}
        {/* ============================================================ */}
        <div
          aria-hidden="true"
          style={{
            transform: "translateY(12px) scale(0.96)",
            transformOrigin: "bottom center",
          }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_12px_30px_-8px_rgba(15,23,42,0.08)] pointer-events-none transition-all duration-700 ease-out z-10 opacity-70 filter brightness-[0.94]"
        >
          <img
            src={nextSlide1.src}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* ============================================================ */}
        {/* LAYER 1: FOREGROUND ACTIVE CARD (Slides out as next overlaps)*/}
        {/* ============================================================ */}
        <div className="relative w-full h-full z-20">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={activeSlide.id}
              initial={{
                opacity: 0.85,
                scale: 0.96,
                y: 12,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: 0,
                transition: {
                  duration: 0.65,
                  ease: [0.16, 1, 0.3, 1], // Smooth cubic-bezier elevation
                },
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: -60,
                rotate: -2,
                transition: {
                  duration: 0.55,
                  ease: [0.32, 0.72, 0, 1], // Card fly-away exit
                },
              }}
              className="w-full h-full rounded-2xl overflow-hidden border border-slate-200/90 bg-white shadow-[0_15px_30px_-10px_rgba(15,23,42,0.08),0_25px_50px_-12px_rgba(15,23,42,0.12),0_40px_80px_-20px_rgba(37,99,235,0.08)]"
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
          <div className="absolute inset-y-0 left-2.5 flex items-center z-30 pointer-events-none">
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

          <div className="absolute inset-y-0 right-2.5 flex items-center z-30 pointer-events-none">
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
    </div>
  );
};

export default HeroCarousel;
