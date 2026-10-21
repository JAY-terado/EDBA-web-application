import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Bot,
  Bell,
  LayoutDashboard,
} from "lucide-react";

import screenDashboard from "@/assets/screens/dashboard.webp";
import screenClasswall from "@/assets/screens/classwall.webp";
import screenAttendance from "@/assets/screens/attendance.webp";
import screenAssistant from "@/assets/screens/assistant.webp";
import screenCirculars from "@/assets/screens/circulars.webp";

interface SlideItem {
  id: number;
  title: string;
  category: string;
  tag: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const SLIDES_DATA: SlideItem[] = [
  {
    id: 0,
    title: "Student & Parent Hub",
    category: "Overview",
    tag: "Quick Actions",
    image: screenDashboard,
    icon: LayoutDashboard,
    description: "Daily timetable, notices, homework, leave requests and fee status in a unified dashboard.",
  },
  {
    id: 1,
    title: "Class Wall & Curriculum",
    category: "Academics",
    tag: "Subjects & Progress",
    image: screenClasswall,
    icon: BookOpen,
    description: "Interactive chapter tracking, assigned educators, syllabus breakdown and study material.",
  },
  {
    id: 2,
    title: "Smart Attendance Tracking",
    category: "Attendance",
    tag: "Calendar View",
    image: screenAttendance,
    icon: CalendarCheck,
    description: "Monthly calendar view with presence analytics, absent alerts, and instant leave requests.",
  },
  {
    id: 3,
    title: "EDBA AI Assistant",
    category: "AI Doubts",
    tag: "24/7 Tutor",
    image: screenAssistant,
    icon: Bot,
    description: "Instant doubt resolution, concept explanations, and personalized revision on demand.",
  },
  {
    id: 4,
    title: "Institutional Circulars",
    category: "Notices",
    tag: "Official Updates",
    image: screenCirculars,
    icon: Bell,
    description: "Timely circulars, PTM notices, event schedules and downloadable academic documents.",
  },
];

export default function EducationManagementPlatform() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const CARD_WIDTH = 248;
  const CARD_HEIGHT = 512;
  const TOTAL_SLIDES = SLIDES_DATA.length;

  const currentSlide = SLIDES_DATA[activeIndex];

  // Auto-advance slides every 3.5 seconds
  useEffect(() => {
    if (!autoPlay || isDragging) return;
    timeoutRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TOTAL_SLIDES);
    }, 3500);
    return () => {
      if (timeoutRef.current) clearInterval(timeoutRef.current);
    };
  }, [autoPlay, isDragging, TOTAL_SLIDES]);

  const handleStep = (direction: number) => {
    setActiveIndex((prev) => (prev + direction + TOTAL_SLIDES) % TOTAL_SLIDES);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Drag / Swipe gesture handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = clientX - startX;
    setDragOffset(delta);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (dragOffset < -50) {
      handleStep(1);
    } else if (dragOffset > 50) {
      handleStep(-1);
    }
    setDragOffset(0);
  };

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <section
      id="platform"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/80 overflow-hidden relative"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-tr from-blue-500/10 via-cyan-400/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-4 shadow-xs">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              Unified Ecosystem
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-[1.15] text-slate-900 tracking-tight mb-4">
              Education Management{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-[#2D76C4] to-indigo-600">
                Platform
              </span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              EDBA brings attendance, academics, exams, fees, communication and administration together in one connected platform, so administrators, teachers, staff, students and parents get their work done with ease.
            </p>
          </motion.div>

          {/* Interactive Screen Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {SLIDES_DATA.map((slide, idx) => {
              const isActive = activeIndex === idx;
              const IconComp = slide.icon;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/50"
                  }`}
                >
                  <IconComp className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{slide.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* OVERLAPPING PHONE CAROUSEL AREA (2 Left + Center + 2 Right) */}
        {/* ========================================================= */}
        <div
          className="relative w-full max-w-[1300px] mx-auto h-[550px] sm:h-[580px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => {
            setAutoPlay(true);
            if (isDragging) handleDragEnd();
          }}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Navigation Chevron Left */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleStep(-1);
            }}
            aria-label="Previous screenshot"
            className="absolute left-2 sm:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-xl shadow-slate-300/40 border border-slate-200/90 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Navigation Chevron Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleStep(1);
            }}
            aria-label="Next screenshot"
            className="absolute right-2 sm:right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 shadow-xl shadow-slate-300/40 border border-slate-200/90 flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Stationary Center iPhone Mockup Frame Overlay */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-35 flex items-center justify-center">
            <div
              style={{ width: `${CARD_WIDTH + 20}px`, height: "532px" }}
              className="rounded-[42px] border-[10px] border-[#18191b] shadow-[0_25px_60px_rgba(0,0,0,0.32),0_0_0_1px_rgba(255,255,255,0.12)] relative box-border bg-transparent"
            >
              {/* Metallic inner rim highlight */}
              <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" />

              {/* Dynamic Island / Top Notch */}
              <div className="absolute -top-[1px] left-1/2 -translate-x-1/2 w-[116px] h-[20px] bg-[#18191b] rounded-b-2xl flex items-center justify-center space-x-2">
                <div className="w-8 h-1 bg-[#2a2b2e] rounded-full" />
                <div className="w-2.5 h-2.5 bg-[#253249] rounded-full border border-[#111]" />
              </div>

              {/* Hardware Side Buttons */}
              <div className="absolute -left-[12px] top-20 w-[3px] h-6 bg-[#242528] rounded-l-md" />
              <div className="absolute -left-[12px] top-32 w-[3px] h-10 bg-[#242528] rounded-l-md" />
              <div className="absolute -left-[12px] top-45 w-[3px] h-10 bg-[#242528] rounded-l-md" />
              <div className="absolute -right-[12px] top-32 w-[3px] h-14 bg-[#242528] rounded-r-md" />

              {/* Home Indicator Bar */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-black/80 rounded-full" />
            </div>
          </div>

          {/* Cards Stage Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {SLIDES_DATA.map((slide, idx) => {
              // Calculate modular shortest distance to activeIndex: [-2, -1, 0, 1, 2]
              let offset = (idx - activeIndex) % TOTAL_SLIDES;
              if (offset < -2) offset += TOTAL_SLIDES;
              if (offset > 2) offset -= TOTAL_SLIDES;

              const isCenter = offset === 0;

              // X position mapping with cascading overlap
              // Each adjacent card is shifted by 165px (leaving 83px overlap under the card in front)
              let xPos = 0;
              let zIndex = 1;
              let opacity = 0;
              let scale = 0.82;

              if (offset === 0) {
                xPos = 0;
                zIndex = 30; // Center card inside phone frame
                opacity = 1.0; // 100% opaque, crystal clear
                scale = 1.0;
              } else if (offset === -1) {
                xPos = -165; // 1st card left (under center card)
                zIndex = 20;
                opacity = 0.58; // Translucent
                scale = 0.92;
              } else if (offset === 1) {
                xPos = 165; // 1st card right (under center card)
                zIndex = 20;
                opacity = 0.58; // Translucent
                scale = 0.92;
              } else if (offset === -2) {
                xPos = -305; // 2nd card left (under 1st left card)
                zIndex = 10;
                opacity = 0.32; // More translucent
                scale = 0.84;
              } else if (offset === 2) {
                xPos = 305; // 2nd card right (under 1st right card)
                zIndex = 10;
                opacity = 0.32; // More translucent
                scale = 0.84;
              }

              // Apply drag offset dynamically
              const currentX = xPos + dragOffset;

              return (
                <div
                  key={slide.id}
                  onClick={() => {
                    if (Math.abs(dragOffset) < 5 && !isCenter) {
                      goToSlide(idx);
                    }
                  }}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    zIndex,
                    opacity,
                    transform: `translate3d(calc(-50% + ${currentX}px), -50%, 0) scale(${scale})`,
                    transition: isDragging
                      ? "none"
                      : "transform 550ms cubic-bezier(0.22, 1, 0.36, 1), opacity 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className={`absolute left-1/2 top-1/2 rounded-[32px] overflow-hidden ${
                    isCenter
                      ? "shadow-[0_25px_60px_-10px_rgba(45,118,196,0.35),0_12px_24px_rgba(0,0,0,0.12)] border border-white/80 ring-2 ring-blue-500/20 bg-white"
                      : "shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-200/80 bg-white/80 hover:opacity-80 cursor-pointer"
                  }`}
                >
                  {/* Phone Screen Image (4K Super-Sampled WebP with Crystal-Clear Contrast) */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-top select-none pointer-events-none"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                      transform: "translateZ(0)",
                      backfaceVisibility: "hidden",
                    }}
                    loading="eager"
                    decoding="async"
                    draggable="false"
                  />

                  {/* Translucent Frosted Glass Overlay on non-center slides */}
                  {!isCenter && (
                    <div
                      className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none transition-all duration-300"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* CURRENT SCREEN INFO & CONTROLS                            */}
        {/* ========================================================= */}
        <div className="mt-4 flex flex-col items-center text-center">
          {/* Active Screen Details Badge */}
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs mb-3"
          >
            <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
              {currentSlide.tag}
            </span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span className="text-xs font-semibold text-slate-800">
              {currentSlide.title}
            </span>
          </motion.div>

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-5">
            {currentSlide.description}
          </p>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center space-x-2.5 mb-7">
            {SLIDES_DATA.map((slide, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to ${slide.title}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-8 bg-blue-600 shadow-xs"
                      : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              );
            })}
          </div>

          {/* Primary Call to Action */}
          <div>
            <button
              type="button"
              onClick={handleOpenDemo}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer group"
            >
              <span>Explore Mobile App Experience</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
