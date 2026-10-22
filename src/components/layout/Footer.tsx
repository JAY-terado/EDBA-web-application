import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  Calendar,
  Sparkles,
  Globe,
  Headphones,
} from "lucide-react";
import { siteStats } from "@/data/siteStats";

export default function Footer() {
  const handleOpenDemo = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith("#")) {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-slate-950 text-slate-400 border-t border-slate-900/90 overflow-hidden">
      {/* Ambient background glows inspired by Apple & Spotify dark interfaces */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-64 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/12 via-indigo-600/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 pb-12">
        {/* Top Tier: Brand Masthead & Call-To-Action Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-14 border-b border-slate-900/90 items-start">
          {/* Brand Info */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-3.5">
              <Link to="/" className="flex items-center group">
                <img src="/logo.png" alt="EDBA Logo" className="h-8 sm:h-9 w-auto brightness-110" />
              </Link>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/15 to-cyan-500/15 border border-blue-500/30 text-blue-300 shadow-xs">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                Intelligent Education Management
              </span>
            </div>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              Empowering educational institutions with connected digital solutions that simplify academic, administrative, and institutional operations.
            </p>

            {/* Live Trust Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-medium">All Systems Operational</span>
              </div>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 font-medium">
                {siteStats.institutes.display} Institutions
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-slate-300 font-medium">
                {siteStats.students.display} Students
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 text-emerald-400 font-medium">
                {siteStats.uptime.display} Verified Uptime
              </span>
            </div>
          </div>

          {/* Quick Enterprise CTA Card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/40 border border-slate-800/90 shadow-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
                  Schedule Consultation
                </span>
                <span className="text-[11px] text-slate-500 font-mono">Fast 24h Setup</span>
              </div>
              <h4 className="font-display font-bold text-white text-base sm:text-lg mb-2">
                Experience EDBA in Your Campus
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                Get a customized walkthrough tailored to your school or college workflows.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/25 cursor-pointer group"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request a Demo</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
                <a
                  href="mailto:support@edba.io"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors border border-slate-700/60"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Email Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: 4 Categorized Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 py-12">
          {/* Column 1: Quick Links */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Home</span>
                </Link>
              </li>
              <li>
                <a
                  href="#why-edba"
                  onClick={(e) => handleSmoothScroll(e, "#why-edba")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">About Us</span>
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleSmoothScroll(e, "#ecosystem")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Solutions</span>
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Features</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Contact Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Our Solutions */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Our Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleSmoothScroll(e, "#ecosystem")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">School Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#academic-management"
                  onClick={(e) => handleSmoothScroll(e, "#academic-management")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">College Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#student-management"
                  onClick={(e) => handleSmoothScroll(e, "#student-management")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Student Information System</span>
                </a>
              </li>
              <li>
                <a
                  href="#academic-management"
                  onClick={(e) => handleSmoothScroll(e, "#academic-management")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Academic Management</span>
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Education ERP</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group text-left cursor-pointer"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Request a Demo</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                </button>
              </li>
              <li>
                <a
                  href="#journey"
                  onClick={(e) => handleSmoothScroll(e, "#journey")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">FAQs</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@edba.io"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Help & Support</span>
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1 group"
                >
                  <span className="group-hover:translate-x-0.5 transition-transform">Product Updates</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contact Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px]">
              <li>
                <a
                  href="mailto:support@edba.io"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Email Us</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918000000000"
                  onClick={(e) => {
                    if (!navigator.userAgent.match(/Mobi/)) {
                      e.preventDefault();
                      handleOpenDemo();
                    }
                  }}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Call Our Team</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group text-left cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Schedule a Demo</span>
                </button>
              </li>
              <li>
                <a
                  href="mailto:support@edba.io?subject=Client%20Support%20Inquiry"
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <Headphones className="w-3.5 h-3.5 text-slate-500 group-hover:text-purple-400 transition-colors" />
                  <span className="group-hover:translate-x-0.5 transition-transform">Client Support</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Apple / Spotify Style Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-900/90 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-2 text-slate-400">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link
              to="/privacy#terms"
              className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Terms & Conditions
            </Link>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <Link
              to="/privacy#cookies"
              className="hover:text-white transition-colors duration-200 underline-offset-4 hover:underline"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Copyright & Region */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-slate-500">
            <div className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors cursor-default">
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>India (English)</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <span>© 2026 EDBA Software LLP. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
