import React from "react";
import { Link } from "react-router-dom";

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
    <footer className="bg-[#0b1626] text-slate-400">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16">
        
        {/* Main 5-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info & Status (takes 3.5 cols on desktop for natural balance) */}
          <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-start pr-2">
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

            <p className="mt-5 text-[13.5px] sm:text-sm leading-relaxed text-slate-400 font-normal max-w-[280px]">
              Connected digital solutions for modern educational institutions.
            </p>

            <div className="mt-6 sm:mt-7 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700/60 bg-[#0d1c32]/40 text-slate-300 text-xs sm:text-[13px] font-medium shadow-xs whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-emerald-400 flex-shrink-0" />
              <span>All systems operational</span>
            </div>
          </div>

          {/* Column 2: Quick Links (takes 2 cols) */}
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
                <button
                  type="button"
                  onClick={handleOpenDemo}
                  className="hover:text-white transition-colors duration-150 inline-block text-left cursor-pointer focus-visible:outline-none"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Solutions (takes 2.5 cols) */}
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

          {/* Column 4: Resources (takes 2 cols) */}
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
                <a
                  href="#journey"
                  onClick={(e) => handleSmoothScroll(e, "#journey")}
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@edba.io"
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Help & Support
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

          {/* Column 5: Contact Us (takes 2 cols) */}
          <div className="lg:col-span-2 xl:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-5 sm:mb-6">
              CONTACT US
            </h3>
            <ul className="space-y-3 sm:space-y-3.5 text-[13.5px] sm:text-sm">
              <li>
                <a
                  href="mailto:support@edba.io"
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Email Us
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
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Call Our Team
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
                  href="mailto:support@edba.io?subject=Client%20Support%20Inquiry"
                  className="hover:text-white transition-colors duration-150 inline-block"
                >
                  Client Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Row */}
        <div className="mt-16 sm:mt-24 lg:mt-28 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-[13px] text-slate-400 font-normal">
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
              Terms & Conditions
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
    </footer>
  );
}
