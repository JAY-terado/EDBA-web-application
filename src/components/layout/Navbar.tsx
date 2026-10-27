import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#why-edba" },
    { name: "Solutions", href: "#ecosystem" },
    { name: "Users", href: "#student-management" },
    { name: "AI Assistant", href: "#platform" },
  ];

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "top-0 w-full max-w-none rounded-none py-2.5 sm:py-3.5 apple-glass-scrolled border-b border-slate-200/80 shadow-xs border-x-0 border-t-0"
          : "top-2.5 sm:top-3.5 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-[1440px] rounded-full py-2.5 sm:py-3 apple-glass border border-slate-200/70 shadow-lg shadow-slate-900/[0.04]"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-full p-1 transition-transform hover:scale-[1.02]"
          >
            <img src="/logo.png" alt="EDBA Logo" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Nav Links with Apple-style rounded pill hover */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-slate-700 hover:text-slate-950 px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] active:bg-black/[0.08] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://appv1.edba.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-medium text-slate-700 hover:text-slate-950 px-3.5 py-1.5 rounded-full hover:bg-black/[0.04] active:bg-black/[0.08] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              Log In
            </a>
            <button
              type="button"
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center px-4 py-1.5 text-[13px] font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 transition-all duration-150 rounded-full shadow-[0_2px_8px_rgba(37,99,235,0.28)] hover:shadow-[0_4px_14px_rgba(37,99,235,0.38)] cursor-pointer group focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-h-[44px] min-w-[44px] p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Apple-style spring sheet with AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ type: "spring", damping: 25, stiffness: 320 }}
            className="drawer-container absolute top-[calc(100%+8px)] left-3 right-3 sm:left-4 sm:right-4 z-45 p-5 sm:p-6 rounded-3xl apple-glass shadow-[0_24px_48px_rgba(0,0,0,0.12)] border border-white/60 md:hidden overflow-hidden origin-top"
          >
            <div className="space-y-4">
              <div className="flex flex-col gap-1 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-semibold text-slate-800 hover:text-blue-600 hover:bg-black/[0.04] active:scale-[0.98] py-2.5 px-4 rounded-xl transition-all w-full text-center duration-100 min-h-[44px] flex items-center justify-center"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-2.5 pt-3 border-t border-slate-200/60">
                <a
                  href="https://appv1.edba.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-2.5 text-center font-semibold text-sm text-slate-800 hover:bg-black/[0.04] active:scale-[0.98] rounded-full transition-all border border-slate-200/80 duration-100 min-h-[44px] flex items-center justify-center"
                >
                  Log In
                </a>
                <button
                  type="button"
                  onClick={(e) => {
                    setIsOpen(false);
                    handleDemoClick(e);
                  }}
                  className="w-full py-2.5 text-center font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.98] rounded-full shadow-lg shadow-blue-500/25 transition-all duration-100 cursor-pointer min-h-[44px] flex items-center justify-center"
                >
                  Book a Free Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
