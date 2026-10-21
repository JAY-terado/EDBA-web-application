import React, { useRef, useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  borderColor?: string;
}

/**
 * SpotlightCard primitive
 * Modern card with cursor-following radial highlight effect powered by CSS variables.
 * Automatically disabled on touch screens and under prefers-reduced-motion.
 */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(45, 118, 196, 0.08)",
  borderColor = "rgba(45, 118, 196, 0.35)",
  ...props
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isTouchDevice || shouldReduceMotion) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    if (isTouchDevice || shouldReduceMotion) return;
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const isEnabled = !isTouchDevice && !shouldReduceMotion;

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 overflow-hidden shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_10px_25px_-5px_rgba(15,23,42,0.05)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_-1px_rgba(15,23,42,0.04),0_18px_36px_-6px_rgba(45,118,196,0.1)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${className}`}
      {...props}
    >
      {isEnabled && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl transition-opacity duration-300"
          style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
          }}
          aria-hidden="true"
        />
      )}

      {isEnabled && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl sm:rounded-3xl border transition-opacity duration-300"
          style={{
            opacity,
            borderColor,
            maskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
            WebkitMaskImage: `radial-gradient(350px circle at ${position.x}px ${position.y}px, black 30%, transparent 80%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightCard;
