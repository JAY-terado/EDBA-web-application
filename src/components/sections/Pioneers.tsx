import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ClientInstitution {
  name: string;
  logo: string;
}

const clientListRow1: ClientInstitution[] = [
  { name: "VIVA Group of Institutes", logo: "/LOGOS/vivalogo.png" },
  { name: "AIKTC Technical Campus", logo: "/LOGOS/AIKTC.png" },
  { name: "Saraswati College of Eng.", logo: "/LOGOS/Saraswati_logo.jpg" },
  { name: "Rizvi College of Arts & Sci.", logo: "/LOGOS/rizvi_logo.png" },
  { name: "Utkarsha Vidyalaya & Jr. Col.", logo: "/LOGOS/vivautkarsha-english-logo.png" },
  { name: "Sardar Patel Institute of Tech", logo: "/LOGOS/SPIT.jpg" },
  { name: "New Horizon Inst. of Tech", logo: "/LOGOS/NHITM_LOGO_new_logo.png" },
  { name: "Rajiv Gandhi Inst. of Tech", logo: "/LOGOS/rgit-logo.png" },
];

const clientListRow2: ClientInstitution[] = [
  { name: "Lokmanya Tilak College of Eng.", logo: "/LOGOS/LTCE_fav.png" },
  { name: "Muljibhai Mehta International", logo: "/LOGOS/Logo.jpg" },
  { name: "Om Gurudev Shikshan Sanstha", logo: "/LOGOS/omgurudev.jpg" },
  { name: "Chhatrapati Shivaji Maharaj Inst.", logo: "/LOGOS/CSMIT.jpg" },
  { name: "MGM Institute of Technology", logo: "/LOGOS/MGMIT.jpg" },
  { name: "Amrit Institute of Management", logo: "/LOGOS/Amrit.jpg" },
  { name: "Jivdani Educational Campus", logo: "/LOGOS/Jivdani_logo.png" },
  { name: "Bharat College Of Engineering", logo: "/LOGOS/b.jpg" },
];

// Animated Counter component
const AnimatedCounter: React.FC<{ target: number; suffix?: string; isVisible: boolean }> = ({
  target,
  suffix = "+",
  isVisible,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 1800; // ms

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * easeProgress));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrame);
  }, [target, isVisible]);

  return (
    <span>
      {count.toLocaleString()}
      {count >= target ? suffix : ""}
    </span>
  );
};

export default function Pioneers() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section id="our-clients" className="py-20 sm:py-24 lg:py-28 bg-[#f8fafc] relative overflow-hidden border-b border-slate-200/80">
      {/* ── Reference Design Background Elements ── */}
      {/* 1. Left Concentric Orbital Ripple Rings & Ambient Soft Glow */}
      <div className="absolute -left-48 sm:-left-28 top-4 sm:top-10 w-[560px] h-[560px] pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/15 via-blue-300/8 to-transparent rounded-full blur-3xl transform -translate-x-10" />
        <svg
          className="w-full h-full text-blue-400/30"
          viewBox="0 0 560 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="160" cy="280" r="140" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <circle cx="160" cy="280" r="210" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <circle cx="160" cy="280" r="285" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
          <circle cx="160" cy="280" r="360" stroke="currentColor" strokeWidth="1" opacity="0.45" />
        </svg>
      </div>

      {/* 2. Right Side Decorative Dot Matrix Grid */}
      <div className="absolute right-6 sm:right-14 lg:right-24 top-16 sm:top-24 pointer-events-none select-none z-0 opacity-60 sm:opacity-80">
        <svg width="112" height="68" viewBox="0 0 112 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <pattern id="client-dot-grid" x="0" y="0" width="16" height="17" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="1.5" className="fill-blue-400/60" />
          </pattern>
          <rect width="112" height="68" fill="url(#client-dot-grid)" />
        </svg>
      </div>

      {/* 3. Right Side Orbital Curved Wave & Soft Glow */}
      <div className="absolute -right-48 sm:-right-28 top-16 sm:top-24 w-[500px] h-[500px] pointer-events-none select-none z-0">
        <div className="absolute inset-0 bg-blue-300/10 rounded-full blur-3xl transform translate-x-10" />
        <svg
          className="w-full h-full text-blue-300/25"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="360" cy="250" r="200" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="360" cy="250" r="290" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header (Apple-style minimalism) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 mb-4 inline-block shadow-xs">
            Our Clients
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-2 mb-3 tracking-tight">
            The edbā Pioneers.
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
            Purpose. Precision. Progress.
          </p>
        </motion.div>

        {/* ── Apple-Style Borderless Stats (No Boxes, Clean Hairline Dividers) ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 max-w-2xl sm:max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          {/* Stat 1: Schools */}
          <div className="py-3 sm:py-1 px-4 sm:px-6 text-center">
            <div className="font-display font-bold text-2xl sm:text-3xl lg:text-[32px] text-slate-900 tracking-tight leading-none mb-1.5">
              <AnimatedCounter target={50} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-normal">
              Schools
            </div>
          </div>

          {/* Stat 2: Students */}
          <div className="py-3 sm:py-1 px-4 sm:px-6 text-center">
            <div className="font-display font-bold text-2xl sm:text-3xl lg:text-[32px] text-slate-900 tracking-tight leading-none mb-1.5">
              <AnimatedCounter target={25000} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-normal">
              Students
            </div>
          </div>

          {/* Stat 3: Admissions Handled */}
          <div className="py-3 sm:py-1 px-4 sm:px-6 text-center">
            <div className="font-display font-bold text-2xl sm:text-3xl lg:text-[32px] text-slate-900 tracking-tight leading-none mb-1.5">
              <AnimatedCounter target={8000} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-sm font-medium text-slate-500 tracking-normal">
              Admissions handled
            </div>
          </div>
        </div>

        {/* ── Refined Headline Above Marquee ── */}
        <p className="text-center text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-8 sm:mb-10 font-mono">
          Trusted by schools across India
        </p>

        {/* ── Borderless Floating Logo Reels (No Boxes, Prominent Logos) ── */}
        <div className="relative w-full overflow-hidden select-none border-y border-slate-200/60 py-6 sm:py-8">
          {/* Edge Vignette Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/90 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Infinite Marquee */}
          <div className="overflow-hidden mb-8 sm:mb-10">
            <div className="flex gap-12 sm:gap-16 lg:gap-20 w-max animate-marquee-left items-center">
              {[...clientListRow1, ...clientListRow1, ...clientListRow1].map((client, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer"
                >
                  {/* Large Prominent Logo Container */}
                  <div className="h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xs transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Refined Institution Name Caption */}
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-tight text-center max-w-[150px] truncate group-hover:text-slate-800 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward (Reverse) Infinite Marquee */}
          <div className="overflow-hidden">
            <div className="flex gap-12 sm:gap-16 lg:gap-20 w-max animate-marquee-right items-center">
              {[...clientListRow2, ...clientListRow2, ...clientListRow2].map((client, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer"
                >
                  {/* Large Prominent Logo Container */}
                  <div className="h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xs transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  {/* Refined Institution Name Caption */}
                  <span className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-tight text-center max-w-[150px] truncate group-hover:text-slate-800 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
