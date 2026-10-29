import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
    <>
      {/* ── Desktop & Default Floating Navbar ── */}
      <nav
        aria-label="Main Navigation"
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? "top-0 w-full max-w-none rounded-none py-2.5 sm:py-3.5 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs border-x-0 border-t-0"
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
                onClick={() => setIsOpen(true)}
                className="min-h-[44px] min-w-[44px] p-2 rounded-full text-slate-700 hover:text-slate-950 hover:bg-black/[0.04] focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none transition-colors"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── 100% Solid Full-Screen Mobile Menu (Non-Transparent) ── */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-nav-fullscreen"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="fixed inset-0 w-full h-[100dvh] bg-white z-[999] flex flex-col justify-between p-5 sm:p-6 md:hidden overflow-y-auto"
                style={{ backgroundColor: "#ffffff" }}
              >
                {/* Mobile Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-shrink-0">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <img src="/logo.png" alt="EDBA Logo" className="h-8 w-auto" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-700 hover:bg-slate-200 active:scale-95 transition-all cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>

                {/* Nav Links in Center */}
                <div className="flex-1 flex flex-col justify-center py-6 space-y-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-bold text-slate-900 hover:text-blue-600 hover:bg-slate-50 active:scale-[0.98] py-3.5 px-4 rounded-2xl transition-all w-full flex items-center justify-between group"
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 flex-shrink-0 pb-2">
                  <a
                    href="https://appv1.edba.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3 text-center font-bold text-sm text-slate-800 bg-slate-50 hover:bg-slate-100 active:scale-[0.98] rounded-2xl transition-all border border-slate-200 flex items-center justify-center min-h-[46px]"
                  >
                    Log In
                  </a>
                  <button
                    type="button"
                    onClick={(e) => {
                      setIsOpen(false);
                      handleDemoClick(e);
                    }}
                    className="w-full py-3 text-center font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-2xl shadow-lg shadow-blue-500/25 transition-all cursor-pointer flex items-center justify-center gap-2 min-h-[46px]"
                  >
                    <span>Book a Free Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
