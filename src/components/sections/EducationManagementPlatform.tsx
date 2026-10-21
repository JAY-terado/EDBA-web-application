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
  const [pos, setPos] = useState(0);
  const posRef = useRef(0);
  const targetRef = useRef(0);
  const animRef = useRef<number | null>(null);

  // Drag tracking refs
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Autoplay control
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const CARD_WIDTH = 248;
  const CARD_HEIGHT = 512;
  const TOTAL_SLIDES = SLIDES_DATA.length;
  const DRAG_SENSITIVITY = 180; // pixels of drag per slide

  // Active slide index (0 to 4) calculated modularly from current pos
  const activeSlideIndex = ((Math.round(pos) % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  const currentSlide = SLIDES_DATA[activeSlideIndex];

  // --------------------------------------------------------------------------
  // Spring Physics Animation Engine (Buttery smooth Apple-like harmonic motion)
  // --------------------------------------------------------------------------
  const animateTo = (target: number, initialVelocity = 0) => {
    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }

    targetRef.current = target;
    let current = posRef.current;
    let velocity = initialVelocity;

    // Critically damped spring parameters
    const stiffness = 140;
    const damping = 20;
    const mass = 1;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.032);
      lastTime = now;

      const displacement = current - targetRef.current;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * velocity;
      const acceleration = (springForce + dampingForce) / mass;

      velocity += acceleration * dt;
      current += velocity * dt;

      posRef.current = current;
      setPos(current);

      // Settle check
      if (Math.abs(displacement) < 0.001 && Math.abs(velocity) < 0.005) {
        current = targetRef.current;
        posRef.current = current;
        setPos(current);
        animRef.current = null;
        return;
      }

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
  };

  // --------------------------------------------------------------------------
  // Autoplay
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (isHovered || isDragging) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      animateTo(Math.round(posRef.current) + 1);
    }, 4000);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered, isDragging]);

  // Clean up RAF on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, []);

  // --------------------------------------------------------------------------
  // Navigation Handlers
  // --------------------------------------------------------------------------
  const handleStep = (direction: number) => {
    animateTo(Math.round(posRef.current) + direction);
  };

  const goToSlide = (targetIdx: number) => {
    const current = posRef.current;
    const currentActive = ((Math.round(current) % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
    let diff = targetIdx - currentActive;
    if (diff > TOTAL_SLIDES / 2) diff -= TOTAL_SLIDES;
    if (diff < -TOTAL_SLIDES / 2) diff += TOTAL_SLIDES;
    animateTo(Math.round(current) + diff);
  };

  // --------------------------------------------------------------------------
  // Drag / Swipe Pointer Handlers (1:1 buttery smooth tracking)
  // --------------------------------------------------------------------------
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only respond to primary button (left mouse or touch)
    if (e.button !== 0) return;

    if (animRef.current) {
      cancelAnimationFrame(animRef.current);
      animRef.current = null;
    }

    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startPosRef.current = posRef.current;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;

    const deltaX = e.clientX - startXRef.current;
    if (Math.abs(deltaX) > 6) {
      hasDraggedRef.current = true;
    }

    const now = performance.now();
    const dt = now - lastTimeRef.current;
    if (dt > 0) {
      velocityRef.current = (e.clientX - lastXRef.current) / dt;
    }
    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    // Follow finger 1:1 in continuous circular motion
    const newPos = startPosRef.current - deltaX / DRAG_SENSITIVITY;
    posRef.current = newPos;
    setPos(newPos);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    const current = posRef.current;
    // Slide velocity in units per second
    const slideVelocity = -(velocityRef.current * 1000) / DRAG_SENSITIVITY;

    let target = Math.round(current);
    if (slideVelocity > 1.2) {
      target = Math.floor(current) + 1;
    } else if (slideVelocity < -1.2) {
      target = Math.ceil(current) - 1;
    }

    animateTo(target, slideVelocity * 0.35);
  };

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  // Generate 7 virtual slots around the current position for smooth infinite looping
  const centerK = Math.round(pos);
  const slots = [-3, -2, -1, 0, 1, 2, 3].map((offset) => centerK + offset);

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
              const isActive = activeSlideIndex === idx;
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
        {/* BUTTERY SMOOTH 3D CIRCULAR CAROUSEL STAGE                 */}
        {/* ========================================================= */}
        <div
          className="relative w-full max-w-[1300px] mx-auto h-[550px] sm:h-[580px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1200px", touchAction: "pan-y" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
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

          {/* 3D Circular Cards Track Container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {slots.map((k) => {
              // Map virtual slot index to slide
              const slideIdx = ((k % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
              const slide = SLIDES_DATA[slideIdx];

              // Continuous float distance from center
              const dist = k - pos;
              const absDist = Math.abs(dist);

              // Hide far offscreen cards
              if (absDist > 2.8) return null;

              const sign = dist < 0 ? -1 : 1;

              // Smooth curved X-offset with cascading overlap
              let xPos = 0;
              if (absDist <= 1) {
                xPos = sign * absDist * 165;
              } else if (absDist <= 2) {
                xPos = sign * (165 + (absDist - 1) * 140);
              } else {
                xPos = sign * (305 + (absDist - 2) * 135);
              }

              // Smooth 3D circular cylinder depth and inward rotation
              const translateZ = -absDist * 28;
              const rotateY = -sign * Math.min(absDist * 12, 25);

              // Smooth scale
              let scale = 1.0;
              if (absDist <= 1) {
                scale = 1.0 - absDist * 0.08;
              } else if (absDist <= 2) {
                scale = 0.92 - (absDist - 1) * 0.08;
              } else {
                scale = Math.max(0.72, 0.84 - (absDist - 2) * 0.08);
              }

              // Smooth opacity: center is 1.0, 1st offset is 0.58, 2nd is 0.32, fading to 0 at edges
              let opacity = 1.0;
              if (absDist <= 1) {
                opacity = 1.0 - absDist * (1.0 - 0.58);
              } else if (absDist <= 2) {
                opacity = 0.58 - (absDist - 1) * (0.58 - 0.32);
              } else {
                opacity = Math.max(0, 0.32 - (absDist - 2) * (0.32 / 0.7));
              }

              // Layering: card closest to center is on top
              const zIndex = Math.max(1, Math.round(30 - absDist * 8));
              const isCenter = absDist < 0.25;

              return (
                <div
                  key={k}
                  onClick={() => {
                    if (!hasDraggedRef.current && absDist > 0.25) {
                      animateTo(k);
                    }
                  }}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    zIndex,
                    opacity,
                    transform: `translate3d(calc(-50% + ${xPos}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    willChange: "transform, opacity",
                  }}
                  className={`absolute left-1/2 top-1/2 rounded-[32px] overflow-hidden transition-shadow duration-300 ${
                    isCenter
                      ? "shadow-[0_25px_60px_-10px_rgba(45,118,196,0.35),0_12px_24px_rgba(0,0,0,0.12)] border border-white/80 ring-2 ring-blue-500/20 bg-white"
                      : "shadow-[0_20px_50px_rgba(15,23,42,0.18)] border border-slate-200/80 bg-white/80 hover:opacity-85 cursor-pointer"
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

                  {/* Translucent Frosted Glass Overlay on side cards */}
                  <div
                    className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none transition-opacity duration-200"
                    style={{ opacity: Math.min(1, Math.max(0, absDist * 1.15)) }}
                    aria-hidden="true"
                  />
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
              const isActive = activeSlideIndex === idx;
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
