import React from "react";
import { ArrowRight, Play } from "lucide-react";

export const Cta: React.FC = () => {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <section id="cta" className="py-20 sm:py-28 smart-display-tight:py-12 bg-[#f8fafc]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gradient Container */}
        <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-14 lg:p-20 smart-display-tight:p-8 text-center text-white shadow-2xl shadow-blue-500/25 overflow-hidden">

          {/* Decorative glowing circles */}
          <div className="absolute top-0 left-0 h-72 w-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 h-72 w-72 bg-cyan-400/15 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 tracking-tight">
              Ready to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-white to-blue-100">Transform Your Institute?</span>
            </h2>

            <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl font-normal">
              Automate operations, engage students, and simplify administration—all from one powerful, modern platform.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleOpenDemo}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-slate-900 bg-white hover:bg-slate-50 active:bg-slate-100 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 group cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 min-h-[44px]"
              >
                <span>Get Started Now</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={handleOpenDemo}
                className="inline-flex items-center justify-center px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all duration-200 rounded-xl shadow-inner backdrop-blur-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 min-h-[44px]"
              >
                <Play className="mr-2 h-4 w-4 fill-white text-white" aria-hidden="true" />
                <span>Book a Demo Call</span>
              </button>
            </div>

            {/* Micro disclaimer info */}
            <span className="text-xs text-blue-200/90 font-semibold uppercase tracking-wider mt-8">
              No credit card required • Dedicated onboarding assistance included
            </span>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Cta;
