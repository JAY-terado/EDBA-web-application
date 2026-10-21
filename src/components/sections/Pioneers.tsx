import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { siteStats } from "@/data/siteStats";
import { MetricCounter } from "@/components/ui/MetricCounter";

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

export default function Pioneers() {
  return (
    <section id="our-clients" className="py-20 sm:py-28 smart-display-tight:py-12 bg-[#f8fafc] relative overflow-x-clip overflow-y-visible border-b border-slate-200/80">
      {/* ── Seamless Ambient Mesh Glow Bridging Hero & Pioneers ── */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-gradient-to-b from-blue-400/10 via-indigo-300/6 to-transparent blur-3xl pointer-events-none z-0" />

      {/* ── Reference Design Background Elements ── */}
      {/* 1. Left Concentric Orbital Ripple Rings & Ambient Soft Glow (Overlapping Hero) */}
      <div className="absolute -left-52 sm:-left-36 -top-40 sm:-top-36 w-[760px] h-[760px] pointer-events-none select-none z-0 overflow-visible">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/12 via-indigo-300/8 to-transparent rounded-full blur-3xl transform -translate-x-10" />
        <svg
          className="w-full h-full text-blue-400/35 overflow-visible"
          viewBox="0 0 760 760"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="240" cy="380" r="135" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          <circle cx="240" cy="380" r="205" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          <circle cx="240" cy="380" r="285" stroke="currentColor" strokeWidth="1.2" opacity="0.75" />
          <circle cx="240" cy="380" r="370" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
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
          className="w-full h-full text-blue-300/25 overflow-visible"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="360" cy="250" r="200" stroke="currentColor" strokeWidth="1" opacity="0.5" />
          <circle cx="360" cy="250" r="290" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </svg>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-4 shadow-xs">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            Our Clients
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 mt-2 mb-3 tracking-tight">
            The edbā <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Pioneers</span>.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Purpose. Precision. Progress.
          </p>
        </motion.div>

        {/* ── Borderless Stats (No Boxes, Clean Dividers, Large & Colorful) ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/70 max-w-2xl sm:max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          {/* Stat 1: Institutes */}
          <div className="py-4 sm:py-2 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[48px] leading-none text-indigo-600 mb-2 tracking-tight">
              <MetricCounter target={siteStats.institutes.count} suffix="+" />
            </span>
            <span className="font-semibold text-sm text-slate-700 tracking-normal">
              {siteStats.institutes.label}
            </span>
          </div>

          {/* Stat 2: Students */}
          <div className="py-4 sm:py-2 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[48px] leading-none text-blue-600 mb-2 tracking-tight">
              <MetricCounter target={1.2} decimals={1} suffix="M+" />
            </span>
            <span className="font-semibold text-sm text-slate-700 tracking-normal">
              {siteStats.students.label}
            </span>
          </div>

          {/* Stat 3: Admissions Handled */}
          <div className="py-4 sm:py-2 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
            <span className="font-display font-extrabold text-3xl sm:text-5xl lg:text-[48px] leading-none text-purple-600 mb-2 tracking-tight">
              <MetricCounter target={siteStats.admissions.count} suffix="+" />
            </span>
            <span className="font-semibold text-sm text-slate-700 tracking-normal">
              {siteStats.admissions.label}
            </span>
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
                  <div className="h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:drop-shadow-md">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xs transition-all duration-200"
                      loading="lazy"
                    />
                  </div>
                  {/* Refined Institution Name Caption */}
                  <span className="text-xs font-medium text-slate-500 tracking-tight text-center max-w-[150px] truncate group-hover:text-slate-800 transition-colors">
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
                  <div className="h-12 sm:h-14 md:h-16 w-32 sm:w-36 md:w-40 flex items-center justify-center transition-all duration-200 group-hover:-translate-y-0.5 group-hover:drop-shadow-md">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xs transition-all duration-200"
                      loading="lazy"
                    />
                  </div>
                  {/* Refined Institution Name Caption */}
                  <span className="text-xs font-medium text-slate-500 tracking-tight text-center max-w-[150px] truncate group-hover:text-slate-800 transition-colors">
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
