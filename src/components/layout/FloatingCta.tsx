import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCta() {
  const [isHovered, setIsHovered] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsChatOpen(true);
    const handleClose = () => setIsChatOpen(false);

    window.addEventListener("open-chatbot", handleOpen);
    window.addEventListener("close-chatbot", handleClose);

    return () => {
      window.removeEventListener("open-chatbot", handleOpen);
      window.removeEventListener("close-chatbot", handleClose);
    };
  }, []);

  const handleToggleBot = () => {
    if (isChatOpen) {
      window.dispatchEvent(new CustomEvent("close-chatbot"));
    } else {
      window.dispatchEvent(new CustomEvent("open-chatbot"));
    }
  };

  return (
    <aside
      aria-label="Interactive EDBA Assistant"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-[110] select-none print:hidden pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative group flex flex-col items-end"
      >
        {/* Floating Tooltip Pill on Hover (only when closed) */}
        {!isChatOpen && (
          <div
            className={`absolute bottom-full right-0 mb-2 pointer-events-none transition-all duration-200 transform ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <div className="bg-slate-900/95 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap flex items-center gap-1.5 border border-slate-700/60">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Chat with EDBA</span>
            </div>
          </div>
        )}

        {/* Robo GIF Interactive Mascot Button */}
        <motion.button
          type="button"
          onClick={handleToggleBot}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={{
            y: isChatOpen ? 0 : [0, -4, 0],
          }}
          transition={{
            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 17 },
          }}
          className="relative block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full"
          aria-label={isChatOpen ? "Close EDBA Chatbot" : "Open EDBA Chatbot"}
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-300 pointer-events-none ${
              isChatOpen
                ? "bg-blue-500/35 blur-xl scale-110"
                : isHovered
                ? "bg-cyan-400/35 blur-xl scale-100"
                : "bg-cyan-400/20 blur-lg scale-90"
            }`}
            aria-hidden="true"
          />

          {/* The Robo GIF */}
          <img
            src="/robo.gif"
            alt="EDBA AI Robot Assistant"
            loading="eager"
            decoding="async"
            onError={(e) => {
              if (e.currentTarget.src.indexOf("robo.gif") !== -1) {
                e.currentTarget.src = "/Pause%20GIF%20image.gif";
              }
            }}
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain transition-transform duration-200"
            style={{
              filter:
                "drop-shadow(0 12px 24px rgba(10, 102, 194, 0.28)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.12))",
              imageRendering: "auto",
            }}
          />

        </motion.button>
      </motion.div>
    </aside>
  );
}
