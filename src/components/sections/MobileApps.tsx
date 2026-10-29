import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Star } from "lucide-react";

import dashboardImg from "@/assets/screens/dashboard.webp";
import circularsImg from "@/assets/screens/circulars.webp";
import attendanceImg from "@/assets/screens/attendance.webp";
import assistantImg from "@/assets/screens/assistant.webp";
import classwallImg from "@/assets/screens/classwall.webp";

const IOS_URL = "https://apps.apple.com/in/app/edba/id6747445951";
const ANDROID_URL = "https://play.google.com/store/apps/details?id=com.edba.app";

const screens = [
  { id: "dashboard", src: dashboardImg, label: "Dashboard" },
  { id: "circulars", src: circularsImg, label: "Circulars" },
  { id: "attendance", src: attendanceImg, label: "Attendance" },
  { id: "assistant", src: assistantImg, label: "AI Assistant" },
  { id: "classwall", src: classwallImg, label: "Class Wall" },
];

const sideScreens = [attendanceImg, classwallImg, circularsImg, assistantImg];

/** Apple logo SVG */
const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.24 1.31-2.22 3.91.03 3.13 2.74 4.17 2.77 4.18l-.1.53zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

/** Google Play logo SVG */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M3.18 23.76c.27.15.57.24.89.24.32 0 .62-.09.89-.24L15.35 12 4.96.24A1.78 1.78 0 004.07 0C3.48 0 3 .5 3 1.12v21.76c0 .38.07.67.18.88zm1.04-21.32L13.4 12 4.22 21.56V2.44zM18.07 9.5l-1.93-1.12L14.78 12l1.36 3.62 1.93-1.12C19.28 13.77 20 13 20 12s-.72-1.77-1.93-2.5z" />
  </svg>
);

/** Phone frame wrapping a screenshot */
interface PhoneProps {
  src: string;
  alt: string;
  /** extra wrapper style */
  style?: React.CSSProperties;
  /** image class */
  imgClass?: string;
  width: number;
  height: number;
}
const Phone: React.FC<PhoneProps> = ({ src, alt, style, width, height }) => (
  <div
    style={{
      width,
      height,
      borderRadius: width * 0.12,
      background: "#1c1c1e",
      overflow: "hidden",
      position: "relative",
      boxShadow:
        "0 60px 120px -20px rgba(15,23,42,0.30), 0 30px 60px -10px rgba(15,23,42,0.18), 0 0 0 1px rgba(255,255,255,0.06) inset",
      flexShrink: 0,
      ...style,
    }}
  >
    {/* Dynamic island */}
    <div
      style={{
        position: "absolute",
        top: width * 0.035,
        left: "50%",
        transform: "translateX(-50%)",
        width: width * 0.38,
        height: width * 0.055,
        background: "#000",
        borderRadius: 999,
        zIndex: 10,
      }}
    />
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
    />
    {/* lens shine */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, rgba(255,255,255,0.065) 0%, transparent 55%)",
        pointerEvents: "none",
      }}
    />
  </div>
);

export const MobileApps: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="mobile-apps"
      aria-labelledby="mobile-apps-heading"
      style={{
        background: "linear-gradient(180deg, #f0f6ff 0%, #ffffff 60%, #f5f9ff 100%)",
        overflow: "hidden",
        position: "relative",
      }}
      className="py-20 sm:py-28"
    >
      {/* Background soft circles */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-5%",
          left: "10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        {/* ── TOP BADGE ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 mb-3 sm:mb-4 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80 shadow-2xs">
            <Smartphone className="w-3 h-3" aria-hidden="true" />
            Mobile App Experience
          </span>
        </motion.div>

        {/* ── HEADING ── */}
        <motion.h2
          id="mobile-apps-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-center leading-[1.15] tracking-tight text-slate-900 mb-4 sm:mb-5"
        >
          Education Management,{" "}
          <br className="hidden sm:block" />
          Right at{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)" }}
          >
            Your Fingertips
          </span>
        </motion.h2>

        {/* ── SUB TEXT ── */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-600 text-sm sm:text-base leading-relaxed text-center max-w-2xl mb-6 sm:mb-8 font-normal"
        >
          A powerful mobile experience for students, teachers, and parents — stay connected,
          informed, and in control of the academic journey, all from your pocket.
        </motion.p>

        {/* ── SCREEN SELECTOR TABS ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {screens.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 ${
                active === i
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {s.label}
            </button>
          ))}
        </motion.div>

        {/* ── PHONE HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="relative w-full flex items-end justify-center"
          style={{ minHeight: 520 }}
        >
          {/* Platform / pedestal glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: -24,
              left: "50%",
              transform: "translateX(-50%)",
              width: "72%",
              maxWidth: 720,
              height: 80,
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)",
              filter: "blur(18px)",
              pointerEvents: "none",
            }}
          />

          {/* ── FAR LEFT PHONE ── */}
          <motion.div
            className="hidden sm:block absolute"
            style={{ bottom: 0, left: "4%", zIndex: 3 }}
            initial={{ opacity: 0, x: -60, rotate: -18 }}
            whileInView={{ opacity: 0.72, x: 0, rotate: -14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
          >
            <Phone src={attendanceImg} alt="Attendance" width={145} height={310} />
          </motion.div>

          {/* ── LEFT PHONE ── */}
          <motion.div
            className="hidden md:block absolute"
            style={{ bottom: 0, left: "17%", zIndex: 4 }}
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            whileInView={{ opacity: 0.88, x: 0, rotate: -7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            <Phone src={circularsImg} alt="Circulars" width={175} height={375} />
          </motion.div>

          {/* ── CENTER (MAIN) PHONE ── */}
          <motion.div
            style={{ position: "relative", zIndex: 10, bottom: 0 }}
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div
              style={{
                width: 245,
                height: 528,
                borderRadius: 36,
                background: "#1c1c1e",
                overflow: "hidden",
                position: "relative",
                boxShadow:
                  "0 80px 160px -24px rgba(15,23,42,0.35), 0 0 0 1px rgba(255,255,255,0.07) inset, 0 0 80px -10px rgba(37,99,235,0.18)",
              }}
            >
              {/* Dynamic island */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 88,
                  height: 26,
                  background: "#000",
                  borderRadius: 999,
                  zIndex: 20,
                }}
              />
              {/* Status bar time */}
              <div
                style={{
                  position: "absolute",
                  top: 20,
                  left: 20,
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 12,
                  fontWeight: 700,
                  zIndex: 20,
                  letterSpacing: "0.01em",
                }}
              >
                9:41
              </div>

              <AnimatePresence mode="wait">
                <motion.img
                  key={active}
                  src={screens[active].src}
                  alt={screens[active].label}
                  loading="eager"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                  }}
                />
              </AnimatePresence>

              {/* lens shine */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, transparent 55%)",
                  pointerEvents: "none",
                }}
              />
            </div>
          </motion.div>

          {/* ── RIGHT PHONE ── */}
          <motion.div
            className="hidden md:block absolute"
            style={{ bottom: 0, right: "17%", zIndex: 4 }}
            initial={{ opacity: 0, x: 40, rotate: 8 }}
            whileInView={{ opacity: 0.88, x: 0, rotate: 7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          >
            <Phone src={classwallImg} alt="Class Wall" width={175} height={375} />
          </motion.div>

          {/* ── FAR RIGHT PHONE ── */}
          <motion.div
            className="hidden sm:block absolute"
            style={{ bottom: 0, right: "4%", zIndex: 3 }}
            initial={{ opacity: 0, x: 60, rotate: 18 }}
            whileInView={{ opacity: 0.72, x: 0, rotate: 14 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.3 }}
          >
            <Phone src={assistantImg} alt="AI Assistant" width={145} height={310} />
          </motion.div>
        </motion.div>

        {/* ── DOWNLOAD BUTTONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-12"
        >
          <a
            href={IOS_URL}
            id="download-ios"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 pl-4 pr-6 py-3 rounded-2xl font-semibold text-sm text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 min-w-[200px] justify-center"
            style={{
              background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)",
              boxShadow: "0 8px 28px -6px rgba(37,99,235,0.45)",
            }}
          >
            <AppleIcon />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-normal opacity-75">Download on the</div>
              <div className="text-[15px] font-bold">App Store</div>
            </div>
          </a>

          <a
            href={ANDROID_URL}
            id="download-android"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 pl-4 pr-6 py-3 rounded-2xl font-semibold text-sm text-slate-800 bg-white border-2 border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 min-w-[200px] justify-center"
            style={{ boxShadow: "0 4px 16px -4px rgba(15,23,42,0.10)" }}
          >
            <PlayIcon />
            <div className="text-left leading-tight">
              <div className="text-[10px] font-normal text-slate-500">Get it on</div>
              <div className="text-[15px] font-bold text-slate-900">Google Play</div>
            </div>
          </a>
        </motion.div>

        {/* ── BOTTOM TRUST ROW ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-slate-400"
        >
          <span className="flex items-center gap-1">
            <span className="flex">
              {[1,2,3,4,5].map(n => (
                <Star key={n} className="w-3 h-3 text-amber-400 fill-amber-400" />
              ))}
            </span>
            4.8 on App Store &amp; Play Store
          </span>
          <span className="hidden sm:block w-px h-3 bg-slate-300" />
          <span>iOS 15+ &amp; Android 9+</span>
          <span className="hidden sm:block w-px h-3 bg-slate-300" />
          <span>10,000+ active users</span>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileApps;
