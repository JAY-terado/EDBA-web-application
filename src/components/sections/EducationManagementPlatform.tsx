import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Layers,
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
    title: "Institutional Circulars & Fees",
    category: "Notices",
    tag: "Official Updates",
    image: screenCirculars,
    icon: Bell,
    description: "Timely circulars, PTM alerts, fee payment tracking, and downloadable academic files.",
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

  // Autoplay control
  const [isHovered, setIsHovered] = useState(false);

  const CARD_WIDTH = 285;
  const CARD_HEIGHT = 633; // Exact 922:2048 (2.221) aspect ratio of native screenshots
  const TOTAL_SLIDES = SLIDES_DATA.length;
  const DRAG_SENSITIVITY = 200; // pixels of drag per slide

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
  // Drag / Swipe Pointer Handlers (Smooth 1:1 hardware tracking)
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

    // Follow finger 1:1 in continuous motion
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

  const handleExploreMobile = () => {
    if (typeof window === "undefined") return;

    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || "";

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

  // Generate 7 virtual slots around current position for infinite looping
  const centerK = Math.round(pos);
  const slots = [-3, -2, -1, 0, 1, 2, 3].map((offset) => centerK + offset);

  return (
    <section
      id="platform"
      className="scroll-mt-28 pt-12 pb-14 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-b border-slate-200/80 overflow-hidden relative select-none"
    >
      {/* Ambient background lighting */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] sm:w-[960px] h-[480px] sm:h-[620px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.20)_0%,_rgba(59,130,246,0.10)_40%,_transparent_72%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION HEADER                                            */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl lg:max-w-4xl mx-auto mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Unified Ecosystem Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50/90 border border-blue-200/80 mb-3 shadow-xs">
              <Layers className="w-3.5 h-3.5 text-blue-600" aria-hidden="true" />
              <span>Unified Ecosystem</span>
            </div>

            {/* Heading matching User Design */}
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[40px] leading-[1.18] text-slate-900 tracking-tight mb-3">
              Education Management{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Platform
              </span>
            </h2>

            {/* Subtitle cleanly balanced across exactly 2 lines */}
            <p className="text-slate-600 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-4xl mx-auto font-normal">
              EDBA brings attendance, academics, exams, fees, communication and administration together in one connected platform,<br className="hidden sm:inline" />
              {" "}so administrators, teachers, staff, students and parents get their work done with ease.
            </p>
          </motion.div>
        </div>

        {/* ========================================================= */}
        {/* 3D CIRCULAR CAROUSEL & STATIONARY IPHONE STAGE            */}
        {/* ========================================================= */}
        <div
          className="relative w-full max-w-[1280px] mx-auto h-[480px] xs:h-[530px] sm:h-[600px] lg:h-[650px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ perspective: "1200px", touchAction: "pan-y" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          {/* Circular Orbital Ring with Connected Glow Nodes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] sm:w-[860px] lg:w-[1040px] h-[340px] sm:h-[460px] lg:h-[530px] rounded-[100%] border border-blue-400/25 pointer-events-none z-0">
            {/* Left Node Dot */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] border-2 border-white" />
            {/* Right Node Dot */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_#3b82f6] border-2 border-white" />
          </div>

          {/* Central Blue Aura Glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] sm:w-[680px] lg:w-[820px] h-[380px] sm:h-[520px] rounded-full pointer-events-none z-0"
            style={{
              background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(59,130,246,0.12) 40%, transparent 72%)",
            }}
          />


          {/* Scalable Container for 3D Stage, Stationary Frame & Cards */}
          <div className="relative w-full h-full flex items-end justify-center scale-[0.58] xs:scale-[0.66] sm:scale-[0.76] lg:scale-[0.84] origin-bottom transition-transform duration-300">

            {/* ========================================================= */}
            {/* 3D CYLINDRICAL STAGE / PEDESTAL (Lowest Layer: zIndex: 1)  */}
            {/* Pure mathematical 3D cylinder strictly under all images  */}
            {/* ========================================================= */}
            <div
              style={{ zIndex: 1 }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none w-[600px] sm:w-[760px] lg:w-[860px] h-[130px] flex items-end justify-center"
            >
              <svg
                viewBox="0 0 800 130"
                className="w-full h-full overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Diffuse ground shadow gradient */}
                  <radialGradient id="stageFloorGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity="0.32" />
                    <stop offset="45%" stopColor="#1e40af" stopOpacity="0.14" />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
                  </radialGradient>

                  {/* Front cylinder wall horizontal shading */}
                  <linearGradient id="stageCylinderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#c7dcf5" />
                    <stop offset="16%" stopColor="#e2eefb" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="84%" stopColor="#e2eefb" />
                    <stop offset="100%" stopColor="#c7dcf5" />
                  </linearGradient>

                  {/* Front cylinder wall vertical lighting */}
                  <linearGradient id="stageCylinderVert" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.3" />
                    <stop offset="25%" stopColor="#ffffff" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.45" />
                  </linearGradient>

                  {/* Top cap ellipse surface radial gradient */}
                  <radialGradient id="stageTopSurface" cx="50%" cy="35%" r="55%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="55%" stopColor="#f3f8fe" />
                    <stop offset="88%" stopColor="#e1effd" />
                    <stop offset="100%" stopColor="#cfe3fb" />
                  </radialGradient>

                  {/* Contact Shadow & Glow Filters */}
                  <filter id="phoneShadowBlur" x="-30%" y="-50%" width="160%" height="200%">
                    <feGaussianBlur stdDeviation="5" />
                  </filter>
                  <filter id="phoneSharpBlur" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="2.5" />
                  </filter>
                  <filter id="groundGlowBlur" x="-20%" y="-50%" width="140%" height="200%">
                    <feGaussianBlur stdDeviation="15" />
                  </filter>
                </defs>

                {/* Ground Ambient Floor Shadows */}
                <ellipse cx="400" cy="115" rx="380" ry="18" fill="url(#stageFloorGlow)" filter="url(#groundGlowBlur)" />
                <ellipse cx="400" cy="117" rx="320" ry="11" fill="#1e3a8a" fillOpacity="0.09" filter="url(#phoneShadowBlur)" />

                {/* Cylinder Front Wall (Vertical 3D Depth) */}
                <path
                  d="M 40 46 L 40 94 A 360 28 0 0 0 760 94 L 760 46 A 360 28 0 0 1 40 46 Z"
                  fill="url(#stageCylinderGrad)"
                />
                <path
                  d="M 40 46 L 40 94 A 360 28 0 0 0 760 94 L 760 46 A 360 28 0 0 1 40 46 Z"
                  fill="url(#stageCylinderVert)"
                />
                {/* Bottom Rim Contour */}
                <path
                  d="M 40 94 A 360 28 0 0 0 760 94"
                  stroke="#93c5fd"
                  strokeWidth="1.5"
                  strokeOpacity="0.6"
                />

                {/* Top Cap Ellipse Surface (Light & Porcelain Finish) */}
                <ellipse
                  cx="400"
                  cy="46"
                  rx="360"
                  ry="28"
                  fill="url(#stageTopSurface)"
                  stroke="rgba(255, 255, 255, 0.95)"
                  strokeWidth="2"
                />
                {/* Specular Inner Rim Glow */}
                <ellipse
                  cx="400"
                  cy="46"
                  rx="358"
                  ry="26.5"
                  fill="none"
                  stroke="rgba(191, 219, 254, 0.45)"
                  strokeWidth="1"
                />

                {/* Grounding Contact Shadow for the Center iPhone */}
                <ellipse
                  cx="400"
                  cy="66"
                  rx="135"
                  ry="7"
                  fill="#0f172a"
                  fillOpacity="0.22"
                  filter="url(#phoneShadowBlur)"
                />
                <ellipse
                  cx="400"
                  cy="65"
                  rx="100"
                  ry="3.5"
                  fill="#0f172a"
                  fillOpacity="0.32"
                  filter="url(#phoneSharpBlur)"
                />
              </svg>
            </div>

            {/* ========================================================= */}
            {/* STATIONARY CENTER IPHONE FRAME OVERLAY (Top Layer: z: 40) */}
            {/* Rests physically ON TOP of the stage surface              */}
            {/* ========================================================= */}
            <div
              style={{
                width: `${CARD_WIDTH + 16}px`,
                height: `${CARD_HEIGHT + 16}px`,
                bottom: "64px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 40,
              }}
              className="pointer-events-none absolute rounded-[38px] border-[8px] border-[#18191b] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.40),0_12px_24px_-8px_rgba(37,99,235,0.25)] box-border bg-transparent"
            >
              {/* Metallic inner rim highlight */}
              <div className="absolute inset-0 rounded-[30px] border border-white/20 pointer-events-none" />

              {/* Hardware Side Buttons */}
              <div className="absolute -left-[10px] top-20 w-[3px] h-6 bg-[#2a2b2e] rounded-l-md" />
              <div className="absolute -left-[10px] top-32 w-[3px] h-10 bg-[#2a2b2e] rounded-l-md" />
              <div className="absolute -left-[10px] top-45 w-[3px] h-10 bg-[#2a2b2e] rounded-l-md" />
              <div className="absolute -right-[10px] top-32 w-[3px] h-14 bg-[#2a2b2e] rounded-r-md" />
            </div>

            {/* ========================================================= */}
            {/* 3D CIRCULAR CARDS TRACK CONTAINER (Middle Layer: z: 20)   */}
            {/* All cards are above stage (z >= 10); Center card is Z-35  */}
            {/* ========================================================= */}
            <div
              className="relative w-full h-full flex items-end justify-center pointer-events-auto"
              style={{ zIndex: 20, transformStyle: "preserve-3d" }}
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

                // Smooth curved X-offset with cascading overlap matching reference
                let xPos = 0;
                if (absDist <= 1) {
                  xPos = sign * absDist * 180;
                } else if (absDist <= 2) {
                  xPos = sign * (180 + (absDist - 1) * 165);
                } else {
                  xPos = sign * (345 + (absDist - 2) * 140);
                }

                // Smooth 3D circular cylinder depth and inward rotation
                const translateZ = -absDist * 32;
                const rotateY = -sign * Math.min(absDist * 12, 22);

                // Gentle upward curve matching the 3D circular orbit
                const yOffset = -absDist * 10;

                // Smooth scale
                let scale = 1.0;
                if (absDist <= 1) {
                  scale = 1.0 - absDist * 0.07;
                } else if (absDist <= 2) {
                  scale = 0.93 - (absDist - 1) * 0.08;
                } else {
                  scale = Math.max(0.75, 0.85 - (absDist - 2) * 0.08);
                }

                // Smooth opacity: center is 1.0, 1st offset is 0.88, 2nd is 0.65, fading to 0 at edges
                let opacity = 1.0;
                if (absDist <= 1) {
                  opacity = 1.0 - absDist * (1.0 - 0.88);
                } else if (absDist <= 2) {
                  opacity = 0.88 - (absDist - 1) * (0.88 - 0.65);
                } else {
                  opacity = Math.max(0, 0.65 - (absDist - 2) * (0.65 / 0.8));
                }

                const isCenter = absDist < 0.25;
                // Center card is Z-32; all cards are >= 10, strictly above stage (Z-5)
                const zIndex = isCenter ? 32 : Math.max(10, Math.round(24 - absDist * 5));

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
                      bottom: "72px",
                      left: "50%",
                      transform: `translate3d(calc(-50% + ${xPos}px), ${yOffset}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      transformStyle: "preserve-3d",
                      transition: isDragging
                        ? "none"
                        : "transform 600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 600ms cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    className={`absolute rounded-[30px] overflow-hidden transition-shadow duration-300 ${
                      isCenter
                        ? "shadow-[0_20px_45px_-12px_rgba(15,23,42,0.25)] bg-[#18191b]"
                        : "shadow-[0_16px_36px_-8px_rgba(15,23,42,0.18)] border-[5px] border-white/95 bg-white hover:opacity-100 cursor-pointer"
                    }`}
                  >
                    {/* Phone Screen Image with authentic native dynamic island */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-fill select-none pointer-events-none rounded-[25px]"
                      loading="eager"
                      decoding="sync"
                      draggable="false"
                    />

                    {/* Translucent Glass Sheen Overlay on side cards */}
                    <div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"
                      style={{
                        opacity: Math.min(1, Math.max(0, (absDist - 0.2) * 1.2)),
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
        </div>

        {/* Mobile Swipe Cue */}
        <div className="flex md:hidden items-center justify-center gap-2 mt-4 text-xs font-semibold text-slate-500 select-none">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
          </span>
          <span>Swipe or tap side phones to explore</span>
        </div>

        {/* ========================================================= */}
        {/* INTERACTIVE CONTROLS & PRIMARY CALL TO ACTION             */}
        {/* ========================================================= */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center text-center">
          {/* Interactive Screen Category Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-full overflow-x-auto pb-1 scrollbar-none px-2 mb-4">
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

          {/* Active Screen Details Badge */}
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white border border-slate-200/80 shadow-xs mb-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                {currentSlide.tag}
              </span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span className="text-xs font-semibold text-slate-800">
                {currentSlide.title}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed mb-6 font-normal">
              {currentSlide.description}
            </p>
          </motion.div>

          {/* Primary Call to Action Button with Store Redirection */}
          <div>
            <button
              type="button"
              onClick={handleExploreMobile}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 cursor-pointer group active:scale-95"
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
