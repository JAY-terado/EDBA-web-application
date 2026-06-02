"use client";

import React from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Cta() {
  return (
    <section id="cta" className="py-24 bg-[#f1f3f6]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Gradient Container */}
        <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl shadow-blue-500/20 overflow-hidden">

          {/* Decorative glowing circles */}
          <div className="absolute top-0 left-0 h-64 w-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 h-64 w-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[44px] leading-tight mb-6">
              Ready to Transform Your Institute?
            </h2>

            <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-xl">
              Automate operations, engage students, and simplify administration—all from one powerful platform.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-zinc-900 neu-btn-light rounded-xl group cursor-pointer"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-all rounded-xl shadow-inner cursor-pointer"
              >
                <Play className="mr-2 h-4 w-4 fill-white text-white" />
                Book a Demo Call
              </button>
            </div>

            {/* Micro disclaimer info */}
            <span className="text-[10px] text-white/60 font-semibold uppercase tracking-widest mt-8">
              No credit card required • 14-day trial evaluation setup
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
