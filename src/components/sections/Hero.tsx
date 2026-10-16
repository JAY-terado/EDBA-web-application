import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles, ChevronRight, Check } from "lucide-react";
import HeroShowcase from "./HeroShowcase";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
  };

  return (
    <section className="relative pt-28 pb-10 sm:pt-32 sm:pb-12 lg:pt-36 lg:pb-14 hero-compact overflow-x-clip overflow-y-visible bg-gradient-to-b from-blue-50/40 via-white/80 via-40% to-[#f8fafc]">
      {/* Soft background radial glows */}
      <div className="absolute top-10 right-[12%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[8%] h-[250px] w-[250px] sm:h-[360px] sm:w-[360px] bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">

          {/* ── Left Text Block ── */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left lg:pr-4 xl:pr-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Announcement Badge with chevron */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50/90 border border-blue-200/80 mb-4 sm:mb-5 shadow-xs"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              <span>Next-Gen AI Institute LMS Platform</span>
              <ChevronRight className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
            </motion.div>

            {/* Hero Heading: Balanced 2-line layout */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-3xl sm:text-4xl lg:text-[40px] xl:text-[45px] tracking-tight leading-[1.12] text-slate-900 mb-4 sm:mb-5"
            >
              Transform Your Institution with <br className="hidden sm:inline" />
              <span className="text-blue-600 relative inline-block">
                Intelligent
                <svg
                  className="absolute -bottom-1 left-0 w-full overflow-visible"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M2 5C30 2 70 2 98 5" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              Education Management
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base lg:text-lg font-normal leading-relaxed mb-3.5 max-w-xl"
            >
              EDBA brings the entire institution onto one connected platform, simplifying everyday operations, improving collaboration, and enabling smarter, faster decision-making.
            </motion.p>

            {/* Core Value Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-950 font-bold text-base sm:text-lg lg:text-xl tracking-tight mb-6 sm:mb-8"
            >
              Simplify. Automate. Manage Smarter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-7"
            >
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-sm font-semibold text-white rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span>Book a Free Demo</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-200/90 text-sm font-semibold text-slate-700 rounded-xl shadow-xs hover:border-slate-300 transition-all group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
              >
                <span className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center mr-2 text-slate-700 group-hover:text-blue-600 transition-colors">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" aria-hidden="true" />
                </span>
                <span>Watch Product Tour</span>
              </button>
            </motion.div>

            {/* ── 3 Trust Checkmarks (Exact from reference) ── */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs sm:text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                </div>
                <span>Easy to Use</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                </div>
                <span>All-in-One Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">
                  <Check className="h-2.5 w-2.5 stroke-[3]" aria-hidden="true" />
                </div>
                <span>Trusted by 500+ Institutes</span>
              </div>
            </motion.div>

          </motion.div>

          {/* ── Right: 3D Tilted Desktop & Phone Showcase ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0 lg:pl-2 xl:pl-4">
            <HeroShowcase />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
