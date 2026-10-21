import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ecosystemModules } from "@/data/ecosystemModules";

export default function EdbaEcosystem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [isDocHidden, setIsDocHidden] = useState(false);

  const shouldReduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Preload images 2-8 on idle
  useEffect(() => {
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const handle = window.requestIdleCallback(() => {
        ecosystemModules.slice(1).forEach((m) => {
          const img = new Image();
          img.src = m.image;
        });
      });
      return () => window.cancelIdleCallback(handle);
    } else {
      const timer = setTimeout(() => {
        ecosystemModules.slice(1).forEach((m) => {
          const img = new Image();
          img.src = m.image;
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // IntersectionObserver to pause autoplay when off-screen
  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Visibility change to pause autoplay when tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsDocHidden(document.visibilityState === "hidden");
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  // Determine if progress rail fill is paused
  const isPaused = isHovered || isFocused || !isIntersecting || isDocHidden;

  // Advance to next module on animation completion
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % ecosystemModules.length);
  };

  // Auto-scroll active rail tab into view on smaller viewports
  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    if (activeTab && typeof window !== "undefined" && window.innerWidth < 1000) {
      activeTab.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeIndex]);

  // Roving tabindex keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = -1;
    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % ecosystemModules.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + ecosystemModules.length) % ecosystemModules.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = ecosystemModules.length - 1;
    }

    if (nextIndex !== -1) {
      e.preventDefault();
      setActiveIndex(nextIndex);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  const activeModule = ecosystemModules[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="ecosystem"
      aria-labelledby="ecosystem-heading"
      className="py-14 sm:py-16 bg-[#f8fafc] relative overflow-hidden border-b border-slate-200/80"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(148, 163, 184, 0.28) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Top radial blue glow background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1240px] h-[360px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45, 118, 196, 0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1240px] mx-auto px-5 relative z-10">
        {/* SECTION HEADER (centered, max-w-[900px], mb-6) */}
        <div className="text-center max-w-[900px] mx-auto mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 mb-3 shadow-xs">
            AI-Powered Education Management Software
          </span>
          <h2
            id="ecosystem-heading"
            className="text-3xl lg:text-[42px] font-extrabold tracking-tight leading-[1.14] text-slate-900"
          >
            One Intelligent Platform to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Manage, Connect, and Empower
            </span>{" "}
            Your Institution
          </h2>
          <p className="text-[16px] text-slate-600 leading-relaxed max-w-[760px] mx-auto mt-3">
            EDBA brings academic, administrative, financial, and communication processes together in
            one connected platform. Simplify everyday operations, improve coordination, and create a
            seamless digital experience for administrators, educators, students, and parents.
          </p>
        </div>

        {/* Interactive Stage & Rail Container (manages hover/focus pause) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={() => setIsFocused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) {
              setIsFocused(false);
            }
          }}
          className="w-full"
        >
          {/* THE STAGE (main element) */}
          <div className="relative overflow-hidden bg-slate-900 rounded-3xl shadow-[0_20px_44px_-18px_rgba(15,23,42,0.35)] min-[1000px]:min-h-[500px] stage-nest-hub flex flex-col min-[1000px]:block">
            {/* Background Images Stack (crossfade 0.5s without blank frames) */}
            <div className="relative w-full aspect-[16/10] min-[1000px]:aspect-auto min-[1000px]:absolute min-[1000px]:inset-0 min-[1000px]:h-full overflow-hidden bg-slate-900">
              {ecosystemModules.map((m, idx) => (
                <img
                  key={m.title}
                  src={m.image}
                  alt={m.alt}
                  width={1024}
                  height={565}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={idx === 0 ? "high" : "low"}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    idx === activeIndex
                      ? "opacity-100 z-[1]"
                      : "opacity-0 pointer-events-none z-0"
                  }`}
                />
              ))}
            </div>

            {/* Gradient Overlay: visible >= 1000px to ensure >= 4.5:1 text contrast */}
            <div
              className="hidden min-[1000px]:block absolute inset-0 pointer-events-none z-[2]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(8,15,32,.92) 0%, rgba(8,15,32,.62) 42%, transparent 74%)",
              }}
              aria-hidden="true"
            />

            {/* Content Card (relative z-10) */}
            <div
              id="stage-panel"
              role="tabpanel"
              aria-labelledby={`ecosystem-tab-${activeIndex}`}
              aria-live="off"
              className="relative z-10 w-full p-5 sm:p-6 min-[1000px]:p-9 min-[1000px]:max-w-[500px] min-[1000px]:min-h-[440px] flex flex-col justify-center gap-3.5 text-white bg-slate-900 min-[1000px]:bg-transparent stage-nest-hub-card"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="flex flex-col gap-3.5"
                >
                  {/* 1. Number pill */}
                  <div>
                    <span className="text-[11px] font-extrabold tracking-wider text-white bg-blue-600/90 rounded-full px-2.5 py-0.5 inline-block shadow-xs">
                      {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* 2. Title h3 */}
                  <h3 className="text-[22px] sm:text-[24px] min-[1000px]:text-[28px] font-extrabold tracking-tight leading-tight text-white">
                    {activeModule.title}
                  </h3>

                  {/* 3. Description */}
                  <p className="text-[15px] leading-relaxed text-slate-200">
                    {activeModule.description}
                  </p>

                  {/* 4. KEY CAPABILITIES label + Chips in semantic <ul> */}
                  <div className="pt-1">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-slate-300 block mb-2">
                      KEY CAPABILITIES
                    </span>
                    <ul className="flex flex-wrap gap-1.5 list-none p-0 m-0">
                      {activeModule.capabilities.map((cap) => (
                        <li
                          key={cap}
                          className="text-[12.5px] font-semibold text-white bg-white/12 border border-white/28 rounded-full px-2.5 py-1 backdrop-blur-xs"
                        >
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* PROGRESS RAIL (directly below the stage, mt-3.5) */}
          <div
            role="tablist"
            aria-label="EDBA modules"
            className="mt-3.5 grid min-[1000px]:grid-cols-8 gap-2.5 max-[999px]:flex max-[999px]:overflow-x-auto max-[999px]:snap-x max-[999px]:pb-2 max-[999px]:-mx-5 max-[999px]:px-5 scrollbar-none"
          >
            {ecosystemModules.map((m, idx) => {
              const isActive = idx === activeIndex;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={m.title}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  role="tab"
                  id={`ecosystem-tab-${idx}`}
                  aria-selected={isActive}
                  aria-controls="stage-panel"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setActiveIndex(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="group min-h-[68px] text-left flex flex-col gap-2 cursor-pointer focus:outline-hidden focus-visible:outline-2 focus-visible:outline-blue-600 focus-visible:outline-offset-2 rounded-lg p-1.5 min-w-[150px] min-[1000px]:min-w-0 shrink-0 snap-start transition-colors"
                >
                  {/* 3px rounded bar track */}
                  <div className="w-full h-[3px] bg-slate-200 rounded-full overflow-hidden">
                    {/* Fill element */}
                    {isPast && (
                      <div className="w-full h-full bg-blue-600 rounded-full" />
                    )}
                    {isActive && (
                      shouldReduceMotion ? (
                        <div className="w-full h-full bg-blue-600 rounded-full" />
                      ) : (
                        <div
                          key={`rail-fill-${activeIndex}`}
                          onAnimationEnd={handleNext}
                          className="h-full bg-blue-600 rounded-full animate-rail-fill"
                          style={{
                            animationPlayState: isPaused ? "paused" : "running",
                          }}
                        />
                      )
                    )}
                    {!isActive && !isPast && (
                      <div className="w-0 h-full bg-blue-600 rounded-full" />
                    )}
                  </div>

                  {/* Segment number */}
                  <span className="text-[11px] font-bold text-blue-600 tracking-wider">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  {/* Module title (fully wrapped, no truncation) */}
                  <span
                    className={`text-[12px] font-semibold leading-snug transition-colors ${
                      isActive
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    {m.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA (centered, mt-6) */}
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
            className="neu-btn-blue min-h-[48px] px-6 rounded-xl font-bold text-[15px] inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore the EDBA Ecosystem</span>
            <ArrowRight
              className="w-[18px] h-[18px] transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
