"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, ShieldCheck } from "lucide-react";

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
    { name: "Safety", href: "#safety" },
    { name: "Mobile Apps", href: "#mobile-apps" },
    { name: "FAQ", href: "#faq" },
  ];

  const handleDemoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <nav
      className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[1440px] z-50 transition-all duration-300 rounded-2xl ${scrolled
          ? "top-3 py-3 bg-white/60 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.08)]"
          : "top-5 py-4 bg-white/30 backdrop-blur-md border border-white/20 shadow-[0_4px_16px_0_rgba(31,38,135,0.03)]"
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="EDBA Logo" className="h-8 w-auto" />
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-700 hover:text-blue-600 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://appv1.edba.io/"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
            >
              Log in
            </a>
            <button
              onClick={handleDemoClick}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all rounded-xl shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 group cursor-pointer"
            >
              Book a Free Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100/50 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed top-[76px] left-4 right-4 z-40 p-6 rounded-2xl bg-white/85 backdrop-blur-lg border border-white/30 transition-all duration-300 md:hidden shadow-xl ${isOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-4 opacity-0 pointer-events-none"
          }`}
      >
        <div className="space-y-6">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-blue-600 transition-colors py-2 border-b border-zinc-100/50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://appv1.edba.io/"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 text-center font-medium text-sm text-zinc-800 hover:bg-zinc-100/50 rounded-xl transition-colors"
            >
              Log in
            </a>
            <button
              onClick={(e) => {
                setIsOpen(false);
                handleDemoClick(e);
              }}
              className="w-full py-2.5 text-center font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-colors cursor-pointer"
            >
              Book a Free Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
