import React from "react";

interface MobilePhoneSvgProps {
  className?: string;
}

export const MobilePhoneSvg: React.FC<MobilePhoneSvgProps> = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 270 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
      aria-label="EDBA Student Mobile App Interface"
    >
      <defs>
        {/* Phone Outer Chassis Gradient */}
        <linearGradient id="phone-body-grad" x1="0" y1="0" x2="270" y2="550" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="50%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Outer Rim Bezel Gradient */}
        <linearGradient id="phone-rim-grad" x1="0" y1="0" x2="270" y2="550" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#64748B" />
          <stop offset="35%" stopColor="#334155" />
          <stop offset="70%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Screen Glass Reflection Gradient */}
        <linearGradient id="glass-reflection" x1="0" y1="0" x2="250" y2="530" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
          <stop offset="35%" stopColor="#FFFFFF" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </linearGradient>

        {/* Action Tile Gradients */}
        <linearGradient id="tile-blue-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2D76C4" />
          <stop offset="100%" stopColor="#235EA0" />
        </linearGradient>

        <linearGradient id="tile-rose-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F43F5E" />
          <stop offset="100%" stopColor="#E11D48" />
        </linearGradient>

        <linearGradient id="tile-amber-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        <linearGradient id="tile-emerald-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>

        {/* Clip Path for Screen */}
        <clipPath id="screen-clip">
          <rect x="9" y="9" width="252" height="532" rx="35" ry="35" />
        </clipPath>
      </defs>

      {/* ── Outer Phone Chassis ── */}
      <rect
        x="5"
        y="5"
        width="260"
        height="540"
        rx="39"
        ry="39"
        fill="url(#phone-body-grad)"
        stroke="url(#phone-rim-grad)"
        strokeWidth="3"
      />

      {/* ── Screen Area (Clipped for sharp 4K vector curves) ── */}
      <g clipPath="url(#screen-clip)">
        {/* Screen Background Canvas */}
        <rect x="9" y="9" width="252" height="532" fill="#FFFFFF" />

        {/* Top Header Section */}
        {/* EDBA Logo */}
        <g transform="translate(26, 44)">
          <text
            x="0"
            y="0"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="900"
            fontSize="19"
            letterSpacing="-0.5"
          >
            <tspan fill="#2D76C4">ed</tspan>
            <tspan fill="#F97316">bā</tspan>
          </text>
        </g>

        {/* Notification Bell Icon */}
        <g transform="translate(225, 29)">
          <path
            d="M9 13.5C9 14.6 8.1 15.5 7 15.5C5.9 15.5 5 14.6 5 13.5M12.5 12C12.5 12 11.5 11 11.5 8C11.5 5.51 9.49 3.5 7 3.5C4.51 3.5 2.5 5.51 2.5 8C2.5 11 1.5 12 1.5 12H12.5Z"
            stroke="#64748B"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="12" cy="4" r="3" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* Greeting Block */}
        <g transform="translate(26, 76)">
          <text
            x="0"
            y="0"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="800"
            fontSize="15.5"
            fill="#0F172A"
          >
            Hello, Student 👋
          </text>
          <text
            x="0"
            y="17"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="600"
            fontSize="10"
            fill="#64748B"
          >
            Class 10 - Section A
          </text>
        </g>

        {/* ── 4 App Action Tiles (2x2 Grid) ── */}

        {/* Tile 1: Class (Top-Left) */}
        <g transform="translate(24, 114)">
          <rect
            width="104"
            height="90"
            rx="14"
            fill="#EFF6FF"
            stroke="#BFDBFE"
            strokeWidth="1.2"
          />
          {/* Icon Badge */}
          <rect x="36" y="16" width="32" height="32" rx="9" fill="url(#tile-blue-grad)" />
          {/* Book Icon */}
          <path
            d="M45 28C47 26.5 50 26.5 52 28M45 36C47 34.5 50 34.5 52 36M45 28V36M52 28V36M52 28C54 26.5 57 26.5 59 28M52 36C54 34.5 57 34.5 59 36M59 28V36"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="52"
            y="68"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#0F172A"
          >
            Class
          </text>
        </g>

        {/* Tile 2: Timetable (Top-Right) */}
        <g transform="translate(142, 114)">
          <rect
            width="104"
            height="90"
            rx="14"
            fill="#FFF1F2"
            stroke="#FECDD3"
            strokeWidth="1.2"
          />
          {/* Icon Badge */}
          <rect x="36" y="16" width="32" height="32" rx="9" fill="url(#tile-rose-grad)" />
          {/* Calendar Icon */}
          <rect x="44" y="24" width="16" height="15" rx="3" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
          <line x1="44" y1="28.5" x2="60" y2="28.5" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="48" y1="22" x2="48" y2="25" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <line x1="56" y1="22" x2="56" y2="25" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <text
            x="52"
            y="68"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#0F172A"
          >
            Timetable
          </text>
        </g>

        {/* Tile 3: Fees (Bottom-Left) */}
        <g transform="translate(24, 218)">
          <rect
            width="104"
            height="90"
            rx="14"
            fill="#FFFBEB"
            stroke="#FDE68A"
            strokeWidth="1.2"
          />
          {/* Icon Badge */}
          <rect x="36" y="16" width="32" height="32" rx="9" fill="url(#tile-amber-grad)" />
          {/* Rupee / Card Icon */}
          <rect x="44" y="24" width="16" height="14" rx="2.5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
          <line x1="44" y1="28" x2="60" y2="28" stroke="#FFFFFF" strokeWidth="1.8" />
          <circle cx="48" cy="33" r="1.2" fill="#FFFFFF" />
          <text
            x="52"
            y="68"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#0F172A"
          >
            Fees
          </text>
        </g>

        {/* Tile 4: Assignments (Bottom-Right) */}
        <g transform="translate(142, 218)">
          <rect
            width="104"
            height="90"
            rx="14"
            fill="#ECFDF5"
            stroke="#A7F3D0"
            strokeWidth="1.2"
          />
          {/* Icon Badge */}
          <rect x="36" y="16" width="32" height="32" rx="9" fill="url(#tile-emerald-grad)" />
          {/* Document / Assignment Icon */}
          <path
            d="M46 23H55L58 26V37C58 38.1 57.1 39 56 39H46C44.9 39 44 38.1 44 37V25C44 23.9 44.9 23 46 23Z"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />
          <line x1="48" y1="29" x2="54" y2="29" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="48" y1="33" x2="52" y2="33" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
          <text
            x="52"
            y="68"
            textAnchor="middle"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="700"
            fontSize="12"
            fill="#0F172A"
          >
            Assignments
          </text>
        </g>

        {/* ── Upcoming Class Card ── */}
        <g transform="translate(24, 324)">
          <rect
            width="222"
            height="80"
            rx="14"
            fill="#F8FAFC"
            stroke="#CBD5E1"
            strokeWidth="1.2"
          />
          <text
            x="14"
            y="20"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="800"
            fontSize="9"
            letterSpacing="0.8"
            fill="#64748B"
          >
            UPCOMING CLASS
          </text>
          {/* Clock Badge */}
          <rect x="14" y="28" width="36" height="36" rx="10" fill="#DDECFA" />
          {/* Clock Icon */}
          <circle cx="32" cy="46" r="9" stroke="#2D76C4" strokeWidth="1.8" fill="none" />
          <polyline points="32 41 32 46 35 48" stroke="#2D76C4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

          {/* Class details */}
          <text
            x="58"
            y="43"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="800"
            fontSize="13"
            fill="#0F172A"
          >
            Mathematics
          </text>
          <text
            x="58"
            y="57"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            fontWeight="600"
            fontSize="10"
            fill="#475569"
          >
            10:00 AM – 11:00 AM
          </text>
        </g>

        {/* ── Bottom Navigation Bar ── */}
        <g transform="translate(10, 480)">
          <line x1="0" y1="0" x2="252" y2="0" stroke="#E2E8F0" strokeWidth="1.5" />

          {/* 1. Home (Active Blue) */}
          <g transform="translate(34, 18)">
            <path
              d="M3 11L10 3L17 11V18C17 18.6 16.6 19 16 19H4C3.4 19 3 18.6 3 18V11Z"
              stroke="#2D76C4"
              strokeWidth="2"
              fill="#EFF6FF"
              strokeLinejoin="round"
            />
            <path d="M8 19V12H12V19" stroke="#2D76C4" strokeWidth="2" fill="none" />
          </g>

          {/* 2. Calendar */}
          <g transform="translate(90, 18)">
            <rect x="3" y="4" width="14" height="14" rx="2.5" stroke="#64748B" strokeWidth="1.8" fill="none" />
            <line x1="3" y1="8" x2="17" y2="8" stroke="#64748B" strokeWidth="1.5" />
            <line x1="6" y1="2" x2="6" y2="5" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="14" y1="2" x2="14" y2="5" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* 3. Messages */}
          <g transform="translate(146, 18)">
            <path
              d="M4 4H16C17.1 4 18 4.9 18 6V14C18 15.1 17.1 16 16 16H6L2 19V6C2 4.9 2.9 4 4 4Z"
              stroke="#64748B"
              strokeWidth="1.8"
              strokeLinejoin="round"
              fill="none"
            />
          </g>

          {/* 4. Profile */}
          <g transform="translate(202, 18)">
            <circle cx="10" cy="7" r="4" stroke="#64748B" strokeWidth="1.8" fill="none" />
            <path d="M4 18C4 14.7 6.7 12 10 12C13.3 12 16 14.7 16 18" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          </g>
        </g>

        {/* Home Indicator Bar */}
        <rect x="95" y="524" width="80" height="4" rx="2" fill="#94A3B8" />

        {/* ── Diagonal Glass Sheen Reflection ── */}
        <polygon points="9,9 180,9 40,532 9,532" fill="url(#glass-reflection)" />
      </g>

      {/* ── Dynamic Island (Centered Top) ── */}
      <g>
        <rect x="96" y="16" width="78" height="20" rx="10" fill="#020617" stroke="#1E293B" strokeWidth="1" />
        {/* Front Camera Lens */}
        <circle cx="113" cy="26" r="3.2" fill="#0F172A" stroke="#334155" strokeWidth="0.8" />
        <circle cx="114" cy="25" r="1" fill="#38BDF8" opacity="0.8" />
        {/* Speaker Acoustic Slot */}
        <rect x="127" y="24.5" width="32" height="3" rx="1.5" fill="#0F172A" />
      </g>
    </svg>
  );
};

export default MobilePhoneSvg;
