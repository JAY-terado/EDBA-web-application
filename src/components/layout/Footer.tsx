import React from "react";
import { Link } from "react-router-dom";
import { siteStats } from "@/data/siteStats";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 py-12 sm:py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Brand Info */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="EDBA Logo" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              The next-generation enterprise Institute LMS platform. Trusted by {siteStats.institutes.display} institutions supporting {siteStats.students.display} students with {siteStats.uptime.display} verified uptime.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-slate-400">
              <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {siteStats.institutes.display} Institutes
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
                {siteStats.students.display} Students
              </span>
              <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                {siteStats.uptime.display} Uptime
              </span>
            </div>
          </div>

          {/* Address Info */}
          <div className="md:col-span-1 flex flex-col items-start gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Address</h4>
            <div className="text-slate-400 text-xs leading-relaxed space-y-1">
              <p className="font-semibold text-slate-200">EDBA Software LLP</p>
              <p>8<sup>th</sup> Floor, New Viva College,</p>
              <p>Chintamani Vihar, Y.K. Nagar,</p>
              <p>Virar (West), 401303</p>
            </div>
          </div>

          {/* Support Info */}
          <div className="md:col-span-1 flex flex-col items-start gap-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">Support</h4>
            <div className="text-slate-400 text-xs leading-relaxed">
              <a 
                href="mailto:support@edba.io" 
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
              >
                support@edba.io
              </a>
            </div>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
          <span className="text-xs text-slate-500 font-mono text-center sm:text-left">
            © Copyright 2026 EDBA Software LLP. All Rights Reserved.
          </span>
          <div className="flex gap-6 text-xs text-slate-400 font-mono">
            <Link 
              to="/privacy" 
              className="hover:text-white transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
