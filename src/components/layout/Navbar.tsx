import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "AI Assistant", href: "#ai-assistant" },
    { name: "Mobile Apps", href: "#mobile-apps" },
  ];

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <nav
      aria-label="Main Navigation"
      className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] max-w-[1440px] z-50 transition-all duration-300 rounded-2xl ${
        scrolled
          ? "top-2.5 sm:top-3 py-2.5 sm:py-3 bg-white/85 backdrop-blur-xl border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
          : "top-3 sm:top-4 py-3 sm:py-3.5 bg-white/65 backdrop-blur-lg border border-slate-200/50 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
      }`}
    >
      <div className="w-full px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg p-1">
            <img src="/logo.png" alt="EDBA Logo" className="h-7 sm:h-8 w-auto" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md px-2 py-1 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5 lg:gap-3">
            <a
              href="https://appv1.edba.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-700 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-blue-600 px-3.5 py-2 rounded-xl transition-colors"
            >
              Log in
            </a>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all rounded-xl shadow-sm shadow-blue-500/25 hover:shadow-md hover:shadow-blue-500/30 group cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="min-h-[44px] min-w-[44px] p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 focus-visible:ring-2 focus-visible:ring-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`absolute top-[calc(100%+8px)] left-0 right-0 z-45 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/80 shadow-2xl transition-all duration-300 md:hidden ${
          isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="space-y-5">
          <div className="flex flex-col gap-1 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-slate-50 py-3 px-4 rounded-xl transition-all w-full text-center duration-200 min-h-[44px] flex items-center justify-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
            <a
              href="https://appv1.edba.io/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-3 text-center font-semibold text-sm text-slate-800 hover:bg-slate-50 rounded-xl transition-colors border border-slate-200 duration-200 min-h-[44px] flex items-center justify-center"
            >
              Log in
            </a>
            <button
              onClick={(e) => {
                setIsOpen(false);
                handleDemoClick(e);
              }}
              className="w-full py-3 text-center font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-500/15 transition-all duration-200 cursor-pointer min-h-[44px] flex items-center justify-center"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
