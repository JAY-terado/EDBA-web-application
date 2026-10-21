import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Users } from "lucide-react";
import parentPortalImg from "@/assets/parent-portal-connected.webp";

interface TabletMockupProps {
  className?: string;
}

export const TabletMockup: React.FC<TabletMockupProps> = ({ className = "" }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`relative w-full max-w-[580px] mx-auto select-none ${className}`}>
      {/* 3D Floating Tablet Wrapper */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [-9, 9, -9],
                rotateX: [1.2, -1.2, 1.2],
                rotateY: [-2, 2, -2],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          perspective: 1200,
          transformStyle: "preserve-3d",
        }}
        className="relative z-10 w-full"
      >
        {/* Vector Tablet Frame SVG matching user reference */}
        <svg
          viewBox="0 0 640 376"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto drop-shadow-2xl"
          aria-label="EDBA Institutional and Parent Communication Tablet Interface"
        >
          <defs>
            {/* Tablet Outer Bezel Gradient */}
            <linearGradient id="tablet-rim-grad" x1="0" y1="0" x2="640" y2="376" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#2A3447" />
              <stop offset="25%" stopColor="#1E2738" />
              <stop offset="50%" stopColor="#111827" />
              <stop offset="75%" stopColor="#1E2738" />
              <stop offset="100%" stopColor="#2A3447" />
            </linearGradient>

            {/* Subtle Metallic Border Highlight */}
            <linearGradient id="tablet-bevel-stroke" x1="0" y1="0" x2="0" y2="376" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#64748B" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#334155" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E293B" stopOpacity="0.8" />
            </linearGradient>

            {/* Glass Reflection Gradient */}
            <linearGradient id="tablet-glass-reflection" x1="0" y1="0" x2="612" y2="348" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.16" />
              <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.04" />
              <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06" />
            </linearGradient>

            {/* Inner Screen Cutout */}
            <clipPath id="tablet-screen-clip">
              <rect x="14" y="14" width="612" height="348" rx="18" ry="18" />
            </clipPath>
          </defs>

          {/* Outer Tablet Unibody Chassis */}
          <rect
            x="2"
            y="2"
            width="636"
            height="372"
            rx="30"
            ry="30"
            fill="url(#tablet-rim-grad)"
            stroke="url(#tablet-bevel-stroke)"
            strokeWidth="3.5"
          />

          {/* Inner Bezel Groove / Highlight */}
          <rect
            x="8"
            y="8"
            width="624"
            height="360"
            rx="24"
            ry="24"
            stroke="#0B0F19"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Screen Content: Image clipped inside the tablet display */}
          <g clipPath="url(#tablet-screen-clip)">
            {/* Screen Background fallback */}
            <rect x="14" y="14" width="612" height="348" fill="#0B132B" />

            {/* Display Image (Portal Connected visual) */}
            <image
              href={parentPortalImg}
              x="14"
              y="14"
              width="612"
              height="348"
              preserveAspectRatio="xMidYMid slice"
            />

            {/* Subtle Glass Surface Reflection */}
            <rect
              x="14"
              y="14"
              width="612"
              height="348"
              fill="url(#tablet-glass-reflection)"
              pointerEvents="none"
            />

            {/* Screen Inner Border Shadow */}
            <rect
              x="14"
              y="14"
              width="612"
              height="348"
              rx="18"
              ry="18"
              stroke="#000000"
              strokeOpacity="0.3"
              strokeWidth="1.5"
              fill="none"
            />
          </g>

          {/* Front Camera Sensor Dot (centered on top bezel) */}
          <circle cx="320" cy="8" r="2.2" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
          <circle cx="320.5" cy="7.8" r="0.8" fill="#38BDF8" fillOpacity="0.4" />
        </svg>

        {/* Floating "Always Connected" Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-5 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl p-3 sm:p-3.5 z-20 pointer-events-auto"
        >
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Always Connected</p>
              <p className="text-[10px] text-slate-500 font-medium">Parents, Educators & Admins</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Ground Contact Shadow (breathing dynamically with floating movement) */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
                scale: [1, 0.9, 1],
                opacity: [0.35, 0.2, 0.35],
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-[84%] h-6 sm:h-7 mx-auto mt-4 sm:mt-6 bg-slate-950/25 blur-xl rounded-[100%] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default TabletMockup;
