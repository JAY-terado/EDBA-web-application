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

import screenDashboard from "@/assets/screens/dashboard.png";
import screenClasswall from "@/assets/screens/classwall.png";
import screenAttendance from "@/assets/screens/attendance.png";
import screenAssistant from "@/assets/screens/assistant.png";
import screenCirculars from "@/assets/screens/circulars.png";

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

  // Drag tracking refs
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const startPosRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const hasDraggedRef = useRef(false);

  // Carousel container ref for 2-finger trackpad slide gesture
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  // Autoplay control
  const [isHovered, setIsHovered] = useState(false);

  const CARD_WIDTH = 248;
  const CARD_HEIGHT = 550;
  const TOTAL_SLIDES = SLIDES_DATA.length;
  const DRAG_SENSITIVITY = 190; // pixels of drag per slide

  // Active slide index (0 to 4) calculated modularly from current pos
  const activeSlideIndex = ((Math.round(pos) % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
  const currentSlide = SLIDES_DATA[activeSlideIndex];

  // --------------------------------------------------------------------------
  // Autoplay (Fluid & Pause on Interaction)
  // --------------------------------------------------------------------------
  useEffect(() => {
    if (isHovered || isDragging) return;

    const timer = setInterval(() => {
      setPos((prev) => Math.round(prev) + 1);
    }, 4200);

    return () => clearInterval(timer);
  }, [isHovered, isDragging]);

  // --------------------------------------------------------------------------
  // Two-Finger Trackpad / Wheel Horizontal Slide Gesture (Large Screens)
  // --------------------------------------------------------------------------
  useEffect(() => {
    const el = carouselContainerRef.current;
    if (!el) return;

    let wheelTimeout: ReturnType<typeof setTimeout> | null = null;

    const onWheel = (e: WheelEvent) => {
      // Detect horizontal swipe (2 fingers on trackpad or shift+wheel)
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);

      if (isHorizontal && Math.abs(delta) > 2) {
        // Stop browser back/forward page navigation when swiping
        e.preventDefault();

        // 1:1 fluid tracking with dampening factor
        setPos((prev) => prev + delta * 0.0035);

        // Snap cleanly to nearest slide on gesture completion
        if (wheelTimeout) clearTimeout(wheelTimeout);
        wheelTimeout = setTimeout(() => {
          setPos((prev) => Math.round(prev));
        }, 160);
      }
    };

    // Keyboard arrow keys navigation when hovered
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isHovered) return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setPos((prev) => Math.round(prev) - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setPos((prev) => Math.round(prev) + 1);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      if (wheelTimeout) clearTimeout(wheelTimeout);
    };
  }, [isHovered]);

  // --------------------------------------------------------------------------
  // Navigation Handlers
  // --------------------------------------------------------------------------
  const handleStep = (direction: number) => {
    setPos((prev) => Math.round(prev) + direction);
  };

  const goToSlide = (targetIdx: number) => {
    setPos((prev) => {
      const currentActive = ((Math.round(prev) % TOTAL_SLIDES) + TOTAL_SLIDES) % TOTAL_SLIDES;
      let diff = targetIdx - currentActive;
      if (diff > TOTAL_SLIDES / 2) diff -= TOTAL_SLIDES;
      if (diff < -TOTAL_SLIDES / 2) diff += TOTAL_SLIDES;
      return Math.round(prev) + diff;
    });
  };

  // --------------------------------------------------------------------------
  // Drag / Swipe Pointer Handlers (1:1 buttery smooth tracking)
  // --------------------------------------------------------------------------
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;

    isDraggingRef.current = true;
    setIsDragging(true);
    hasDraggedRef.current = false;
    startXRef.current = e.clientX;
    startPosRef.current = pos;
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
    if (Math.abs(deltaX) > 5) {
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
    setPos(newPos);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {}

    const current = pos;
    const slideVelocity = -(velocityRef.current * 1000) / DRAG_SENSITIVITY;

    let target = Math.round(current);
    if (slideVelocity > 1.2) {
      target = Math.floor(current) + 1;
    } else if (slideVelocity < -1.2) {
      target = Math.ceil(current) - 1;
    }

    setPos(target);
  };

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  const handleExploreMobile = () => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || "";

    // Detect Apple devices: iOS (iPhone, iPad, iPod, iPadOS) and macOS
    const isApple =
      /iPad|iPhone|iPod|Macintosh|Mac OS X/i.test(userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

    const iosUrl = "https://apps.apple.com/in/app/edba/id6747445951";
    const androidUrl = "https://play.google.com/store/apps/details?id=com.edba.app";

    if (isApple) {
      window.open(iosUrl, "_blank", "noopener,noreferrer");
    } else {
      window.open(androidUrl, "_blank", "noopener,noreferrer");
    }
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
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-12">
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

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal max-w-4xl lg:max-w-5xl mx-auto">
              EDBA brings attendance, academics, exams, fees, communication and administration together in one connected platform,<br className="hidden md:inline" />{" "}
              so administrators, teachers, staff, students and parents get their work done with ease.
            </p>
          </motion.div>

          {/* Interactive Screen Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7 max-w-full overflow-x-auto pb-1 scrollbar-none px-2">
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
          ref={carouselContainerRef}
          className="relative w-full max-w-[1400px] mx-auto h-[480px] xs:h-[530px] sm:h-[600px] lg:h-[640px] stage-carousel-nest-hub flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1200px", touchAction: "pan-y" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Left Side Floating Feature Callouts (Fills empty side space on desktop) */}
          <div className="absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 max-w-[240px] pointer-events-auto">
            {/* Card 1: AI Doubts */}
            <button
              type="button"
              onClick={() => goToSlide(3)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group hover:scale-[1.03] ${
                activeSlideIndex === 3
                  ? "bg-white/95 border-blue-500 shadow-xl shadow-blue-500/10"
                  : "bg-white/80 border-slate-200/80 shadow-md hover:bg-white/95 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-xs">
                  <Bot className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">24/7 Doubts</span>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">AI Assistant</h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Instant concept explanations & revision on demand.
              </p>
            </button>

            {/* Card 2: Smart Attendance */}
            <button
              type="button"
              onClick={() => goToSlide(2)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group hover:scale-[1.03] ${
                activeSlideIndex === 2
                  ? "bg-white/95 border-emerald-500 shadow-xl shadow-emerald-500/10"
                  : "bg-white/80 border-slate-200/80 shadow-md hover:bg-white/95 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform shadow-xs">
                  <CalendarCheck className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Live Presence</span>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Smart Attendance</h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Monthly calendar analytics & instant leave requests.
              </p>
            </button>
          </div>

          {/* Right Side Floating Feature Callouts (Fills empty side space on desktop) */}
          <div className="absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-4 max-w-[240px] pointer-events-auto">
            {/* Card 3: Institutional Circulars */}
            <button
              type="button"
              onClick={() => goToSlide(4)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group hover:scale-[1.03] ${
                activeSlideIndex === 4
                  ? "bg-white/95 border-purple-500 shadow-xl shadow-purple-500/10"
                  : "bg-white/80 border-slate-200/80 shadow-md hover:bg-white/95 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform shadow-xs">
                  <Bell className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-purple-600 uppercase tracking-wider block">Campus Alerts</span>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Direct Circulars</h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Notices, exam routines & downloadable attachments.
              </p>
            </button>

            {/* Card 4: Class Wall & Academics */}
            <button
              type="button"
              onClick={() => goToSlide(1)}
              className={`text-left p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md cursor-pointer group hover:scale-[1.03] ${
                activeSlideIndex === 1
                  ? "bg-white/95 border-sky-500 shadow-xl shadow-sky-500/10"
                  : "bg-white/80 border-slate-200/80 shadow-md hover:bg-white/95 hover:border-slate-300"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-9 w-9 rounded-xl bg-sky-50 border border-sky-200/60 flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform shadow-xs">
                  <BookOpen className="h-4.5 w-4.5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider block">Academics</span>
                  <h4 className="text-xs font-bold text-slate-900 leading-tight">Class Wall</h4>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                Subject tracking, educator syllabus & study kits.
              </p>
            </button>
          </div>

          {/* Stationary Center iPhone Mockup Frame Overlay */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-35 flex items-center justify-center scale-[0.72] xs:scale-[0.80] sm:scale-[0.90] md:scale-100 phone-frame-nest-hub origin-center transition-transform duration-300">
            <div
              style={{ width: `${CARD_WIDTH + 20}px`, height: `${CARD_HEIGHT + 20}px` }}
              className="rounded-[42px] border-[10px] border-[#18191b] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.22)] relative box-border bg-transparent"
            >
              {/* Metallic inner rim highlight */}
              <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" />

              {/* Hardware Side Buttons */}
              <div className="absolute -left-[12px] top-20 w-[3px] h-6 bg-[#242528] rounded-l-md" />
              <div className="absolute -left-[12px] top-32 w-[3px] h-10 bg-[#242528] rounded-l-md" />
              <div className="absolute -left-[12px] top-45 w-[3px] h-10 bg-[#242528] rounded-l-md" />
              <div className="absolute -right-[12px] top-32 w-[3px] h-14 bg-[#242528] rounded-r-md" />
            </div>

            {/* Soft ground ambient shadow (smooth diffuse blur, zero sharp edges) */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[220px] h-6 bg-slate-900/10 blur-xl rounded-full pointer-events-none" />
          </div>

          {/* 3D Circular Cards Track Container */}
          <div
            className="relative w-full h-full flex items-center justify-center scale-[0.72] xs:scale-[0.80] sm:scale-[0.90] md:scale-100 phone-frame-nest-hub origin-center transition-transform duration-300"
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
                      setPos(k);
                    }
                  }}
                  style={{
                    width: `${CARD_WIDTH}px`,
                    height: `${CARD_HEIGHT}px`,
                    zIndex,
                    opacity,
                    transform: `translate3d(calc(-50% + ${xPos}px), -50%, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                    transition: isDragging
                      ? "none"
                      : "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                  className={`absolute left-1/2 top-1/2 rounded-[32px] overflow-hidden transition-shadow duration-300 ${
                    isCenter
                      ? "shadow-[0_20px_45px_-12px_rgba(15,23,42,0.22)] bg-white"
                      : "shadow-[0_16px_36px_-8px_rgba(15,23,42,0.14)] border border-slate-200/70 bg-white/85 hover:opacity-90 cursor-pointer"
                  }`}
                >
                  {/* Phone Screen Image (4K Lossless PNG with 100% Native Pixel Sharpness) */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-fill select-none pointer-events-none rounded-[30px]"
                    loading="eager"
                    decoding="sync"
                    draggable="false"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                  />

                  {/* Translucent Frosted Glass Overlay on side cards */}
                  <div
                    className="absolute inset-0 bg-white/20 backdrop-blur-[1px] pointer-events-none"
                    style={{
                      opacity: Math.min(1, Math.max(0, (absDist - 0.2) * 1.3)),
                      transition: isDragging
                        ? "none"
                        : "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-2 mb-2 text-xs font-semibold text-slate-500 select-none">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span>Swipe or drag phone to explore features</span>
        </div>

        {/* ========================================================= */}
        {/* CURRENT SCREEN INFO & CONTROLS                            */}
        {/* ========================================================= */}
        <div className="mt-2 sm:mt-4 flex flex-col items-center text-center">
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

          <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-6">
            {currentSlide.description}
          </p>

          {/* Primary Call to Action */}
          <div>
            <button
              type="button"
              onClick={handleExploreMobile}
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
