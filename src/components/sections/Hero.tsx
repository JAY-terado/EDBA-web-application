import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import HeroShowcase from "./HeroShowcase";
import { siteStats } from "@/data/siteStats";

const heroTrustLogos = [
  { name: "VIVA Group of Institutes", logo: "/LOGOS/vivalogo.png" },
  { name: "AIKTC Technical Campus", logo: "/LOGOS/AIKTC.png" },
  { name: "Saraswati College of Eng.", logo: "/LOGOS/Saraswati_logo.jpg" },
  { name: "Rizvi College of Arts & Sci.", logo: "/LOGOS/rizvi_logo.png" },
  { name: "Sardar Patel Institute of Tech", logo: "/LOGOS/SPIT.jpg" },
  { name: "New Horizon Inst. of Tech", logo: "/LOGOS/NHITM_LOGO_new_logo.png" },
  { name: "Rajiv Gandhi Inst. of Tech", logo: "/LOGOS/rgit-logo.png" },
  { name: "Muljibhai Mehta International", logo: "/LOGOS/Logo.jpg" },
  { name: "Lokmanya Tilak College of Eng.", logo: "/LOGOS/LTCE_fav.png" },
  { name: "Bharat College Of Engineering", logo: "/LOGOS/b.jpg" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 hero-compact overflow-x-clip overflow-y-visible bg-gradient-to-b from-blue-50/50 via-white/90 to-[#f8fafc]">
      {/* Background glows */}
      <div className="absolute top-10 right-[10%] h-[400px] w-[400px] sm:h-[520px] sm:w-[520px] bg-blue-500/7 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] bg-indigo-500/7 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">

          {/* ── Left Text Block ── */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 border border-blue-200/80 mb-5 shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-600" aria-hidden="true" />
              <span>AI-Powered Education Management</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] text-slate-900 mb-5"
            >
              AI-Powered Education{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                Management Software
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-800 font-bold text-lg sm:text-xl leading-snug mb-4"
            >
              One Intelligent Platform for Every Educational Institution
            </motion.p>

            {/* Body paragraphs */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-3 max-w-xl"
            >
              Transform the way your institution manages everyday operations with EDBA — an intelligent, secure, and user-friendly education management platform designed for the evolving needs of the education sector.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-3 max-w-xl"
            >
              From schools and junior colleges to colleges, universities, professional institutes, and specialised educational institutions, EDBA brings academic, administrative, financial, communication, and operational processes together in one connected environment.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-700 font-semibold text-sm sm:text-base leading-snug mb-6 max-w-xl"
            >
              Built for education. Designed for simplicity. Ready to grow with your institution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mb-7"
            >
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="neu-btn-blue h-12 min-h-[48px] px-7 py-3 text-sm sm:text-base font-bold rounded-xl shadow-lg shadow-blue-500/25 transition-all group cursor-pointer inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-[2px]" aria-hidden="true" />
              </button>

              <a
                href="https://appv1.edba.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 min-h-[48px] px-6 py-3 text-sm sm:text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200/90 hover:border-slate-300 rounded-xl shadow-xs transition-all cursor-pointer inline-flex items-center justify-center focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Log In →
              </a>
            </motion.div>

            {/* Trust Row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 pt-1 text-slate-700"
            >
              {/* Avatar Group */}
              <div className="flex items-center -space-x-2.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=80&h=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=80&h=80",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=80&h=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=80&h=80",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Institution admin avatar"
                    className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-2 ring-white shadow-xs"
                  />
                ))}
                <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center ring-2 ring-white shadow-xs">
                  +{siteStats.institutes.count}
                </div>
              </div>

              {/* Rating & Trust */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900">{siteStats.rating.display}</span>
                  <span className="text-xs text-slate-400">/ 5.0</span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5">
                  Trusted by <span className="text-blue-600 font-bold">{siteStats.institutes.display} institutes</span>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Product Showcase ── */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 lg:pt-0">
            <HeroShowcase />
          </div>

        </div>

        {/* ── Logo Marquee ── */}
        <div className="mt-14 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-slate-200/70 select-none">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono whitespace-nowrap flex-shrink-0">
              As trusted by
            </span>
            <div className="relative w-full overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />
              <div className="flex w-max animate-marquee-left gap-8 sm:gap-12 lg:gap-14 items-center py-1">
                {[...heroTrustLogos, ...heroTrustLogos].map((client, idx) => (
                  <div
                    key={idx}
                    className="h-8 sm:h-9 w-24 sm:w-28 flex items-center justify-center flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
