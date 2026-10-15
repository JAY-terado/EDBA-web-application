import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ClientInstitution {
  name: string;
  code: string;
  accent: "blue" | "emerald" | "amber" | "purple" | "rose";
  logo?: string;
}

const clientListRow1: ClientInstitution[] = [
  { name: "Delhi Public School", code: "DPS", accent: "blue", logo: "/LOGOS/AIKTC.png" },
  { name: "VIVA Institute of Technology", code: "VIT", accent: "emerald", logo: "/LOGOS/vivalogo.png" },
  { name: "Saraswati College of Engineering", code: "SCOE", accent: "purple", logo: "/LOGOS/Saraswati_logo.jpg" },
  { name: "Rizvi College of Arts & Science", code: "RC", accent: "rose", logo: "/LOGOS/rizvi_logo.png" },
  { name: "Podar World School", code: "PWS", accent: "amber", logo: "/LOGOS/vivautkarsha-english-logo.png" },
  { name: "Muljibhai Mehta International School", code: "MMIS", accent: "blue", logo: "/LOGOS/Logo.jpg" },
  { name: "Sardar Patel Institute of Technology", code: "SPIT", accent: "emerald", logo: "/LOGOS/SPIT.jpg" },
  { name: "Bharat College Of Engineering", code: "BCE", accent: "purple", logo: "/LOGOS/b.jpg" },
];

const clientListRow2: ClientInstitution[] = [
  { name: "Rajiv Gandhi Institute of Technology", code: "RGIT", accent: "blue", logo: "/LOGOS/rgit-logo.png" },
  { name: "New Horizon Institute of Technology", code: "NHITM", accent: "amber", logo: "/LOGOS/NHITM_LOGO_new_logo.png" },
  { name: "Lokmanya Tilak College of Engineering", code: "LTCE", accent: "rose", logo: "/LOGOS/LTCE_fav.png" },
  { name: "St. Xavier's High School", code: "SXH", accent: "emerald", logo: "/LOGOS/omgurudev.jpg" },
  { name: "Orchid International Group", code: "OIG", accent: "purple", logo: "/LOGOS/Amrit.jpg" },
  { name: "Heritage Global School", code: "HGS", accent: "blue", logo: "/LOGOS/CSMIT.jpg" },
  { name: "Utkarsha Vidyalaya & Jr. College", code: "UVJC", accent: "amber", logo: "/LOGOS/vivautkarsha-english-logo.png" },
  { name: "MGM Institute of Technology", code: "MGM", accent: "rose", logo: "/LOGOS/MGMIT.jpg" },
];

// Helper to resolve badge colors
const getAccentClasses = (accent: ClientInstitution["accent"]) => {
  switch (accent) {
    case "blue":
      return "bg-blue-50 text-blue-600 border-blue-200";
    case "emerald":
      return "bg-emerald-50 text-emerald-600 border-emerald-200";
    case "amber":
      return "bg-amber-50 text-amber-600 border-amber-200";
    case "purple":
      return "bg-purple-50 text-purple-600 border-purple-200";
    case "rose":
      return "bg-rose-50 text-rose-600 border-rose-200";
    default:
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
};

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
    <section id="our-clients" className="py-16 sm:py-20 lg:py-24 bg-[#f8fafc] relative overflow-hidden border-b border-slate-200/80">
      {/* Subtle background ambient glows */}
      <div className="absolute top-10 left-[15%] w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[15%] w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
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
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-3 tracking-tight">
            The edbā Pioneers.
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal">
            Purpose. Precision. Progress.
          </p>
        </motion.div>

        {/* ── 3 Stats Grid with Live Animated Counters ── */}
        <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-10 sm:mb-12">
          {/* Stat 1: Schools */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-0.5">
              <AnimatedCounter target={50} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-[13px] font-medium text-slate-500">Schools</div>
          </div>

          {/* Stat 2: Students */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-0.5">
              <AnimatedCounter target={25000} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-[13px] font-medium text-slate-500">Students</div>
          </div>

          {/* Stat 3: Admissions Handled */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-4 sm:p-5 text-center shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-slate-300 transition-all duration-300">
            <div className="font-display font-bold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-0.5">
              <AnimatedCounter target={8000} isVisible={isInView} />
            </div>
            <div className="text-xs sm:text-[13px] font-medium text-slate-500">Admissions handled</div>
          </div>
        </div>

        {/* ── Marquee Title ── */}
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 sm:mb-5">
          Trusted by schools across India
        </p>

        {/* ── Scrolling Client Rows with Smooth Edge Fades & Hover Pause ── */}
        <div className="relative w-full overflow-hidden py-2 select-none">
          {/* Left & Right Edge Vignette Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-36 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-36 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Infinite Marquee */}
          <div className="overflow-hidden border-t border-slate-200/80 py-3 mb-2">
            <div className="flex gap-3 w-max animate-marquee-left">
              {[...clientListRow1, ...clientListRow1, ...clientListRow1].map((client, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-xs whitespace-nowrap hover:border-blue-300 hover:shadow-md hover:scale-[1.03] transition-all duration-200 cursor-pointer"
                >
                  {/* Client Logo Image */}
                  {client.logo && (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-5 sm:h-6 max-w-[55px] sm:max-w-[65px] object-contain flex-shrink-0"
                      loading="lazy"
                    />
                  )}
                  {/* Institution Name */}
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward (Reverse) Infinite Marquee */}
          <div className="overflow-hidden border-b border-slate-200/80 py-3">
            <div className="flex gap-3 w-max animate-marquee-right">
              {[...clientListRow2, ...clientListRow2, ...clientListRow2].map((client, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200/90 rounded-xl shadow-xs whitespace-nowrap hover:border-blue-300 hover:shadow-md hover:scale-[1.03] transition-all duration-200 cursor-pointer"
                >
                  {/* Client Logo Image */}
                  {client.logo && (
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="h-5 sm:h-6 max-w-[55px] sm:max-w-[65px] object-contain flex-shrink-0"
                      loading="lazy"
                    />
                  )}
                  {/* Institution Name */}
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800">
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
