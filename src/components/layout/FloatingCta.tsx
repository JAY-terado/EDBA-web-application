import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:bottom-6 sm:right-6 z-50"
        >
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
            className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-xl shadow-blue-500/35 hover:shadow-2xl hover:shadow-blue-500/45 rounded-full cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-[44px]"
          >
            <Sparkles className="h-4 w-4 text-cyan-200" aria-hidden="true" />
            <span>Book Free Demo</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
