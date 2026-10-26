import React from "react";
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1626] text-slate-400 font-sans border-t border-slate-800/80 relative">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        
        {/* Main Grid: Left Section (Brand + Contact + Socials + Apps) + EDBA's 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">
          
          {/* ================= COLUMN 1: BRAND, CONTACT, SOCIAL, APPS (3.5 cols) ================= */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start pr-2">
            {/* Logo */}
            <Link
              to="/"
              className="inline-block transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            >
              <img
                src="/logo.png"
                alt="EDBA Logo"
                className="h-8 sm:h-9 w-auto brightness-110"
              />
            </Link>

            <p className="mt-4 text-[13.5px] sm:text-sm leading-relaxed text-slate-400 font-normal max-w-[280px]">
              Connected digital solutions for modern educational institutions.
            </p>

            {/* Direct Contact Info (Placed like NextOS left column) */}
            <div className="mt-6 space-y-1.5 text-[13px] sm:text-sm">
              <div>
                <a
                  href="tel:+918956734701"
                  className="font-semibold text-white hover:text-blue-400 transition-colors block"
                  title="Call Our Team"
                >
                  +91 8956734701
                </a>
              </div>
              <div>
                <a
                  href="tel:+918356846130"
                  className="text-slate-300 hover:text-blue-400 transition-colors block text-xs sm:text-[13px]"
                  title="Contact Us / Client Support"
                >
                  Support: +91 83568 46130
                </a>
              </div>
              <div className="pt-0.5">
                <a
                  href="mailto:support@edba.io?cc=vidula.patil@edba.io"
                  className="text-slate-300 hover:text-blue-400 transition-colors block text-xs sm:text-[13px]"
                  title="Email Us (CC: vidula.patil@edba.io)"
                >
                  support@edba.io
                </a>
              </div>
            </div>

            {/* Social Media Icons Row */}
            <div className="mt-5 flex items-center gap-3 text-slate-400">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-blue-400 hover:scale-110 transition-all p-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 hover:scale-110 transition-all p-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-400 hover:scale-110 transition-all p-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="hover:text-white hover:scale-110 transition-all p-1"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:text-red-400 hover:scale-110 transition-all p-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Download Our Apps (Placed like NextOS) */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                Download our apps
              </h4>
              <div className="flex items-center gap-2">
                {/* Google Play */}
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className="hover:opacity-85 transition-opacity"
                >
                  <svg className="h-[34px] w-auto" viewBox="0 0 135 40" fill="none">
                    <rect width="135" height="40" rx="6" fill="#0d1c32" stroke="#334155" strokeWidth="1"/>
                    <g transform="translate(10, 8)">
                      <path d="M2.5 1.5L14 12L2.5 22.5V1.5Z" fill="#00D775"/>
                      <path d="M14 12L18 8.5L2.5 1.5L14 12Z" fill="#00C3FF"/>
                      <path d="M14 12L2.5 22.5L18 15.5L14 12Z" fill="#FF334B"/>
                      <path d="M14 12L18 8.5L20 12L18 15.5L14 12Z" fill="#FFC800"/>
                    </g>
                    <text x="40" y="14" fill="#94A3B8" fontSize="7.5" fontFamily="sans-serif" fontWeight="500">GET IT ON</text>
                    <text x="40" y="27" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">Google Play</text>
                  </svg>
                </a>

                {/* App Store */}
                <a
                  href="https://apple.com/app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className="hover:opacity-85 transition-opacity"
                >
                  <svg className="h-[34px] w-auto" viewBox="0 0 135 40" fill="none">
                    <rect width="135" height="40" rx="6" fill="#0d1c32" stroke="#334155" strokeWidth="1"/>
                    <path d="M21.5 19.5c0-2.3 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.6.8-.8 0-2-.8-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.3 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.2-.8 1.4 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1 0-2.7-1-2.7-4m-2.1-7.2c.6-.8 1.1-1.9.9-3-.9.1-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3" fill="#FFFFFF"/>
                    <text x="40" y="14" fill="#94A3B8" fontSize="7.5" fontFamily="sans-serif" fontWeight="500">Download on the</text>
                    <text x="40" y="27" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">App Store</text>
                  </svg>
                </a>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-[#0d1c32]/60 text-slate-300 text-xs sm:text-[13px] font-medium shadow-xs whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* ================= COLUMN 2: QUICK LINKS (2 cols) ================= */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5 sm:mb-6">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#why-edba"
                  onClick={(e) => handleSmoothScroll(e, "#why-edba")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleSmoothScroll(e, "#ecosystem")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Solutions
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="tel:+918356846130"
                  className="hover:text-white transition-colors duration-150 inline-block"
                  title="Contact Us: +91 83568 46130"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 3: OUR SOLUTIONS (3 cols) ================= */}
          <div className="lg:col-span-3 xl:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5 sm:mb-6">
              OUR SOLUTIONS
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-sm">
              <li>
                <a
                  href="#ecosystem"
                  onClick={(e) => handleSmoothScroll(e, "#ecosystem")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  School Management
                </a>
              </li>
              <li>
                <a
                  href="#academic-management"
                  onClick={(e) => handleSmoothScroll(e, "#academic-management")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  College Management
                </a>
              </li>
              <li>
                <a
                  href="#student-management"
                  onClick={(e) => handleSmoothScroll(e, "#student-management")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Student Information System
                </a>
              </li>
              <li>
                <a
                  href="#academic-management"
                  onClick={(e) => handleSmoothScroll(e, "#academic-management")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Academic Management
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Education ERP
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 4: RESOURCES (2 cols) ================= */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5 sm:mb-6">
              RESOURCES
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="hover:text-white transition-colors duration-150 inline-block text-left cursor-pointer focus-visible:outline-none"
                >
                  Request a Demo
                </button>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@edba.io?cc=vidula.patil@edba.io"
                  className="hover:text-white transition-colors duration-150 inline-block"
                  title="support@edba.io (CC: vidula.patil@edba.io)"
                >
                  Help &amp; Support
                </a>
              </li>
              <li>
                <a
                  href="#platform"
                  onClick={(e) => handleSmoothScroll(e, "#platform")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Product Updates
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUMN 5: CONTACT US (2 cols) ================= */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5 sm:mb-6">
              CONTACT US
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-sm">
              <li>
                <a
                  href="mailto:support@edba.io?cc=vidula.patil@edba.io"
                  className="hover:text-white transition-colors duration-150 inline-block group"
                  title="support@edba.io (CC: vidula.patil@edba.io)"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors">Email Us</span>
                  <span className="block text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-mono mt-0.5">
                    support@edba.io
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+918956734701"
                  className="hover:text-white transition-colors duration-150 inline-block group"
                  title="+91 8956734701"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors">Call Our Team</span>
                  <span className="block text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-mono mt-0.5">
                    +91 8956734701
                  </span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="hover:text-white transition-colors duration-150 inline-block text-left cursor-pointer focus-visible:outline-none"
                >
                  Schedule a Demo
                </button>
              </li>
              <li>
                <a
                  href="tel:+918356846130"
                  className="hover:text-white transition-colors duration-150 inline-block group"
                  title="+91 83568 46130"
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors">Client Support</span>
                  <span className="block text-xs text-slate-400 group-hover:text-slate-300 transition-colors font-mono mt-0.5">
                    +91 83568 46130
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM BAR (Legal, Copyright & Scroll to Top) ================= */}
        <div className="mt-16 sm:mt-24 lg:mt-28 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-slate-400 font-normal">
          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <Link
              to="/privacy"
              className="hover:text-white transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              to="/privacy#terms"
              className="hover:text-white transition-colors duration-150"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              to="/privacy#cookies"
              className="hover:text-white transition-colors duration-150"
            >
              Cookie Policy
            </Link>
          </div>

          {/* Copyright Notice */}
          <div className="text-slate-400 sm:text-right">
            <span>India (English) - © 2026 EDBA Software LLP. All rights reserved.</span>
          </div>
        </div>

      </div>

      {/* Floating Scroll to Top Chevron (matching reference placement in bottom right) */}
      <button
        type="button"
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 p-2 rounded-full text-slate-400 hover:text-white bg-[#0d1c32]/80 hover:bg-[#132845] border border-slate-700/60 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
