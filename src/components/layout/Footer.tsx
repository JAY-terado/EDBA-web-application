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
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col items-start pr-4">
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

            {/* Download Our Apps */}
            <div className="mt-6">
              <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                Download our apps
              </h4>
              <div className="flex items-center gap-2.5 flex-wrap">
                {/* Google Play */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.edba.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className="hover:opacity-85 transition-opacity inline-block"
                >
                  <svg className="h-[36px] w-auto" viewBox="0 0 135 40" fill="none">
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
                  href="https://apps.apple.com/in/app/edba/id6747445951"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className="hover:opacity-85 transition-opacity inline-block"
                >
                  <svg className="h-[36px] w-auto" viewBox="0 0 135 40" fill="none">
                    <rect width="135" height="40" rx="6" fill="#0d1c32" stroke="#334155" strokeWidth="1"/>
                    <path d="M21.5 19.5c0-2.3 1.9-3.5 2-3.6-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.6.8-.8 0-2-.8-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.3 9.8.8 1.2 1.8 2.5 3.1 2.4 1.2-.1 1.7-.8 3.2-.8 1.4 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.4-2.8-.1 0-2.7-1-2.7-4m-2.1-7.2c.6-.8 1.1-1.9.9-3-.9.1-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1.1.1 2.1-.5 2.8-1.3" fill="#FFFFFF"/>
                    <text x="40" y="14" fill="#94A3B8" fontSize="7.5" fontFamily="sans-serif" fontWeight="500">Download on the</text>
                    <text x="40" y="27" fill="#FFFFFF" fontSize="11" fontFamily="sans-serif" fontWeight="bold">App Store</text>
                  </svg>
                </a>
              </div>
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

          {/* ================= COLUMN 4: RESOURCES (3 cols) ================= */}
          <div className="lg:col-span-3 xl:col-span-3">
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
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 p-2 rounded-full text-slate-400 hover:text-white bg-[#0d1c32]/80 hover:bg-[#132845] active:scale-90 border border-slate-700/60 transition-all duration-100 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 shadow-md"
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
