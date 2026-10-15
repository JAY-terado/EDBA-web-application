import React from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight, Sparkles } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

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
    <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 hero-compact overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-[#f8fafc]">
      {/* Soft background radial glows */}
      <div className="absolute top-10 right-[12%] h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] bg-blue-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[8%] h-[250px] w-[250px] sm:h-[360px] sm:w-[360px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">

          {/* ── Left Text Block ── */}
          <motion.div
            className="lg:col-span-6 flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Announcement Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-700 bg-blue-50/90 border border-blue-200/70 mb-5 sm:mb-6 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
              <span>Next-Gen AI Institute LMS Platform</span>
            </motion.div>

            {/* Hero Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] tracking-tight leading-[1.12] text-slate-900 mb-5"
            >
              Put your Institute’s <br />
              operations on <span className="text-blue-600">autopilot</span> with <span className="text-teal-600">AI</span>.
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-lg font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl"
            >
              EDBA brings the entire institution onto one connected platform, simplifying everyday operations, improving collaboration, and enabling smarter, faster decision-making.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3.5 sm:gap-4 w-full sm:w-auto mb-6 sm:mb-8"
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
                <span className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center mr-2 text-slate-500 group-hover:text-blue-600 transition-colors">
                  <Play className="h-2.5 w-2.5 fill-current ml-0.5" aria-hidden="true" />
                </span>
                <span>Watch Product Tour</span>
              </button>
            </motion.div>

          </motion.div>

          {/* ── Right: 3D Layered Floating Carousel ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-4 lg:pt-0">
            <HeroCarousel />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
