import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, GraduationCap } from "lucide-react";

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

const allClients = [...clientListRow1, ...clientListRow2];

// Interlocking Honeycomb Rows for Mobile (3 - 3 - 4 - 4 - 2 = 16 total clients)
// Arranged to match the reference composition with center-focused hierarchy
const honeycombRows = [
  { items: allClients.slice(0, 3), startIndex: 0 },
  { items: allClients.slice(3, 6), startIndex: 3 },
  { items: allClients.slice(6, 10), startIndex: 6 },
  { items: allClients.slice(10, 14), startIndex: 10 },
  { items: allClients.slice(14, 16), startIndex: 14 },
];

export default function TrustedInstitutions() {
  // Default to index 4 (center item in Row 1) matching the reference image
  const [activeIdx, setActiveIdx] = useState<number | null>(4);
  const activeClient = activeIdx !== null ? allClients[activeIdx] : null;

  return (
    <section
      id="our-clients"
      className="py-16 sm:py-24 bg-white border-b border-slate-200/80 overflow-x-clip relative"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-gradient-to-b from-blue-400/8 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-10 sm:mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 shadow-xs">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            Our Clients
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 tracking-tight mb-4">
            Trusted by Leading{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Educational Institutions
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal max-w-4xl lg:max-w-5xl mx-auto">
            Institutions across India trust EDBA to manage their academic, administrative, and communication operations.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 divide-x divide-slate-200/70 max-w-2xl mx-auto mb-10 sm:mb-14">
          {[
            { val: "100+", label: "Institutions" },
            { val: "1.2M+", label: "Students Managed" },
            { val: "5M+", label: "Records Processed" },
          ].map((s, i) => (
            <div key={i} className="py-3 sm:py-4 px-1.5 sm:px-6 text-center">
              <p className="font-display font-extrabold text-2xl sm:text-4xl text-blue-600 mb-1">{s.val}</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Label */}
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6 sm:mb-8">
          Trusted by schools and colleges across India
        </p>

        {/* ========================================================= */}
        {/* MOBILE INTERACTIVE HONEYCOMB DESIGN (Visible on < md only) */}
        {/* ========================================================= */}
        <div className="block md:hidden relative py-3 select-none">
          {/* Translucent Watermark Background Hexagons */}
          <div className="absolute left-1 top-12 w-11 h-13 opacity-40 pointer-events-none">
            <svg viewBox="0 0 100 115" className="w-full h-full">
              <path
                d="M 44 7.5 Q 50 4 56 7.5 L 90.5 27.5 Q 96 30.5 96 37.5 L 96 77.5 Q 96 84.5 90.5 87.5 L 56 107.5 Q 50 111 44 107.5 L 9.5 87.5 Q 4 84.5 4 77.5 L 4 37.5 Q 4 30.5 9.5 27.5 Z"
                fill="#F0F7FF"
                stroke="#DBEAFE"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="absolute right-1 top-24 w-11 h-13 opacity-40 pointer-events-none">
            <svg viewBox="0 0 100 115" className="w-full h-full">
              <path
                d="M 44 7.5 Q 50 4 56 7.5 L 90.5 27.5 Q 96 30.5 96 37.5 L 96 77.5 Q 96 84.5 90.5 87.5 L 56 107.5 Q 50 111 44 107.5 L 9.5 87.5 Q 4 84.5 4 77.5 L 4 37.5 Q 4 30.5 9.5 27.5 Z"
                fill="#F0F7FF"
                stroke="#DBEAFE"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <div className="absolute right-4 bottom-10 w-9 h-11 opacity-35 pointer-events-none">
            <svg viewBox="0 0 100 115" className="w-full h-full">
              <path
                d="M 44 7.5 Q 50 4 56 7.5 L 90.5 27.5 Q 96 30.5 96 37.5 L 96 77.5 Q 96 84.5 90.5 87.5 L 56 107.5 Q 50 111 44 107.5 L 9.5 87.5 Q 4 84.5 4 77.5 L 4 37.5 Q 4 30.5 9.5 27.5 Z"
                fill="#F0F7FF"
                stroke="#DBEAFE"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Draggable & Zoomable Honeycomb Grid with Idle Floating Animation */}
          <div className="overflow-visible py-2 px-1 flex justify-center items-center min-h-[380px]">
            <motion.div
              drag
              dragConstraints={{ left: -45, right: 45, top: -20, bottom: 20 }}
              dragElastic={0.25}
              dragTransition={{ bounceStiffness: 350, bounceDamping: 24 }}
              whileDrag={{ scale: 1.04, cursor: "grabbing" }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                y: { repeat: Infinity, duration: 5.5, ease: "easeInOut" },
              }}
              className="flex flex-col items-center justify-center cursor-grab active:cursor-grabbing touch-none"
            >
              {honeycombRows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className={`flex items-center justify-center ${rIdx > 0 ? "-mt-3 sm:-mt-3.5" : ""}`}
                >
                  {row.items.map((client, itemIdx) => {
                    const globalIdx = row.startIndex + itemIdx;
                    const isActive = activeIdx === globalIdx;

                    return (
                      <motion.div
                        key={client.name}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIdx(isActive ? null : globalIdx);
                        }}
                        initial={{ opacity: 0, scale: 0.7 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 1.28 }}
                        animate={
                          isActive
                            ? { scale: 1.28, zIndex: 40 }
                            : { scale: 1, zIndex: 1 }
                        }
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 24,
                          delay: globalIdx * 0.02,
                        }}
                        className="relative w-[72px] h-[82px] sm:w-[84px] sm:h-[94px] mx-1 sm:mx-1.5 flex items-center justify-center cursor-pointer transition-all"
                        role="button"
                        tabIndex={0}
                        aria-label={client.name}
                      >
                        {/* Ultra-Smooth Rounded SVG Hexagon */}
                        <svg
                          viewBox="0 0 100 115"
                          className={`w-full h-full filter transition-all duration-300 ${
                            isActive
                              ? "drop-shadow-[0_0_14px_rgba(59,130,246,0.5)] drop-shadow-[0_12px_22px_rgba(37,99,235,0.22)]"
                              : "drop-shadow-[0_6px_14px_rgba(15,23,42,0.06)] drop-shadow-[0_1px_3px_rgba(59,130,246,0.05)]"
                          }`}
                        >
                          <path
                            d="M 44 7.5 Q 50 4 56 7.5 L 90.5 27.5 Q 96 30.5 96 37.5 L 96 77.5 Q 96 84.5 90.5 87.5 L 56 107.5 Q 50 111 44 107.5 L 9.5 87.5 Q 4 84.5 4 77.5 L 4 37.5 Q 4 30.5 9.5 27.5 Z"
                            fill="#FFFFFF"
                            stroke={isActive ? "#3B82F6" : "#E2E8F0"}
                            strokeWidth={isActive ? "3.2" : "1.6"}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            className="transition-colors duration-200"
                          />
                        </svg>

                        {/* Crystal Clear Logo Centered Inside Hexagon */}
                        <div className="absolute inset-0 flex items-center justify-center p-2.5 sm:p-3 pointer-events-none">
                          <img
                            src={client.logo}
                            alt={`${client.name} logo`}
                            className="max-h-[42px] max-w-[42px] sm:max-h-[50px] sm:max-w-[50px] object-contain select-none mix-blend-multiply"
                            style={{
                              imageRendering: "-webkit-optimize-contrast",
                              transform: "translateZ(0)",
                              backfaceVisibility: "hidden",
                            }}
                            loading="eager"
                          />
                        </div>

                        {/* Animated Clicking Hand Pointer (as featured in reference image) */}
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0, opacity: 0, x: 8, y: 8 }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              x: 0,
                              y: [0, -3.5, 0],
                            }}
                            transition={{
                              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
                              scale: { type: "spring", stiffness: 500, damping: 25 },
                            }}
                            className="absolute -bottom-2 -right-1.5 z-50 pointer-events-none drop-shadow-[0_4px_8px_rgba(37,99,235,0.35)]"
                          >
                            <svg
                              width="26"
                              height="26"
                              viewBox="0 0 24 24"
                              fill="none"
                              className="-rotate-12"
                            >
                              <path
                                d="M9 11V4.5C9 3.67 9.67 3 10.5 3C11.33 3 12 3.67 12 4.5V10.5M12 7.5C12 6.67 12.67 6 13.5 6C14.33 6 15 6.67 15 7.5V11M15 9C15 8.17 15.67 7.5 16.5 7.5C17.33 7.5 18 8.17 18 9V13.5C18 17.09 15.09 20 11.5 20C8.5 20 6.1 17.9 5.3 15.1L4.2 11.5C3.9 10.5 4.5 9.5 5.5 9.3C6.3 9.1 7.1 9.6 7.4 10.4L9 14"
                                fill="#FFFFFF"
                                stroke="#2563EB"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dynamic Active College Name Card with Tap To Reset */}
          <div className="mt-3 flex flex-col items-center justify-center min-h-[52px]">
            <AnimatePresence mode="wait">
              {activeClient ? (
                <motion.div
                  key={activeClient.name}
                  initial={{ opacity: 0, y: 10, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 450, damping: 26 }}
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-50/95 border border-blue-200/90 text-slate-800 shadow-sm max-w-[92vw]"
                >
                  <img
                    src={activeClient.logo}
                    alt=""
                    className="w-5 h-5 object-contain flex-shrink-0 mix-blend-multiply"
                  />
                  <span className="text-xs font-bold text-slate-800 truncate max-w-[200px] sm:max-w-[280px]">
                    {activeClient.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveIdx(null)}
                    className="ml-1 text-[10px] font-bold text-blue-600 hover:text-blue-800 px-1.5 py-0.5 rounded-full bg-blue-100/70"
                  >
                    ✕
                  </button>
                </motion.div>
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs text-slate-400 font-medium text-center flex items-center gap-1.5"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                  <span>Tap any logo to zoom into institution details</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ========================================================= */}
        {/* DESKTOP SEAMLESS INFINITE MARQUEE (Visible on md and up)   */}
        {/* ========================================================= */}
        <div className="hidden md:block relative w-full overflow-hidden border-y border-slate-100 py-7 sm:py-9">
          {/* Edge fades */}
          <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-28 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left */}
          <div className="overflow-hidden mb-7 sm:mb-9">
            <div className="flex gap-8 sm:gap-14 w-max animate-marquee-left items-center">
              {[...clientListRow1, ...clientListRow1].map((client, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-[140px] sm:w-[170px] group cursor-pointer select-none"
                >
                  <div className="h-12 sm:h-14 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600 group-hover:text-blue-600 tracking-tight text-center w-full truncate transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="overflow-hidden">
            <div className="flex gap-8 sm:gap-14 w-max animate-marquee-right items-center">
              {[...clientListRow2, ...clientListRow2].map((client, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="flex-shrink-0 flex flex-col items-center justify-center gap-2 w-[140px] sm:w-[170px] group cursor-pointer select-none"
                >
                  <div className="h-12 sm:h-14 w-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-600 group-hover:text-blue-600 tracking-tight text-center w-full truncate transition-colors">
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
