import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroShowcase from "./HeroShowcase";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring" as const, damping: 28, stiffness: 280 } 
  },
};

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 hero-compact overflow-x-clip overflow-y-visible bg-gradient-to-b from-blue-50/50 via-white/90 to-[#f8fafc]">
      {/* Background glows */}
      <div className="absolute top-10 right-[10%] h-[400px] w-[400px] sm:h-[520px] sm:w-[520px] bg-blue-500/7 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-[5%] h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

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
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50/90 border border-blue-200/80 mb-4 sm:mb-5 shadow-2xs"
            >
              <Sparkles className="h-3 w-3 text-cyan-600" aria-hidden="true" />
              <span>AI-Powered Education Management</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-black text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.1] text-slate-900 mb-5"
            >
              Run Your Entire Institution from{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
                One Intelligent Platform
              </span>
            </motion.h1>

            {/* Body paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-4 max-w-xl"
            >
              EDBA simplifies institutional operations, connects people and processes, and empowers educational institutions to grow with smarter, seamless, and future-ready digital solutions.
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-slate-700 font-semibold text-sm sm:text-base leading-snug mb-8 max-w-xl"
            >
              Built for education. Designed for simplicity. Ready to grow with your institution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto"
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
          </motion.div>

          {/* ── Right: Product Showcase ── */}
          <div className="lg:col-span-7 relative flex items-center justify-center pt-8 lg:pt-0">
            <HeroShowcase />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
