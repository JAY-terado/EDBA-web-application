import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FloatingCta() {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <aside
      aria-label="Interactive Demo Assistant"
      className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 select-none print:hidden pointer-events-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="relative group flex flex-col items-end"
      >
        {/* Robo GIF Interactive Mascot Button */}
        <motion.button
          type="button"
          onClick={handleOpenDemo}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 400, damping: 17 },
          }}
          className="relative block cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-full"
          aria-label="Book Free Demo with EDBA AI Assistant"
        >
          {/* Subtle Ambient Radial Glow */}
          <div
            className={`absolute inset-0 rounded-full bg-cyan-400/25 blur-xl scale-95 transition-opacity duration-300 pointer-events-none ${
              isHovered ? "opacity-100" : "opacity-50"
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
