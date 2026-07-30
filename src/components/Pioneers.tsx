"use client";

import React from "react";
import { motion } from "framer-motion";

const pioneerLogos = [
  { name: "AIKTC", path: "/LOGOS/AIKTC.png" },
  { name: "Amrit", path: "/LOGOS/Amrit.jpg" },
  { name: "CSMIT", path: "/LOGOS/CSMIT.jpg" },
  { name: "Viva Utkarsha", path: "/LOGOS/vivautkarsha-english-logo.png" },
  { name: "Jivdani", path: "/LOGOS/Jivdani_logo.png" },
  { name: "KMPD", path: "/LOGOS/KMPD_logo.png" },
  { name: "LTCE", path: "/LOGOS/LTCE_fav.png" },
  { name: "Logo", path: "/LOGOS/Logo.jpg" },
  { name: "MGMIT", path: "/LOGOS/MGMIT.jpg" },
  { name: "NHITM", path: "/LOGOS/NHITM_LOGO_new_logo.png" },
  { name: "SPIT", path: "/LOGOS/SPIT.jpg" },
  { name: "Saraswati Logo", path: "/LOGOS/Saraswati_logo.jpg" },
  { name: "Armite", path: "/LOGOS/armite.jpg" },
  { name: "B", path: "/LOGOS/b.jpg" },
  { name: "KC", path: "/LOGOS/kc.jpg" },
  { name: "Metropolitan", path: "/LOGOS/logo_metropolian.jpg" },
  { name: "MITM", path: "/LOGOS/mitm.jpg" },
  { name: "MU", path: "/LOGOS/mu.png" },
  { name: "Om Gurudev", path: "/LOGOS/omgurudev.jpg" },
  { name: "RGIT", path: "/LOGOS/rgit-logo.png" },
  { name: "Rizvi", path: "/LOGOS/rizvi_logo.png" },
  { name: "Saraswati", path: "/LOGOS/saraswati.jpg" },
  { name: "SLRTC", path: "/LOGOS/slrtcelogo.jfif" },
  { name: "Viva", path: "/LOGOS/vivalogo.png" },
  { name: "YTIT", path: "/LOGOS/ytit.jpg" }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Pioneers() {
  return (
    <section className="py-24 bg-[#f8fafc] relative overflow-hidden border-t border-zinc-200/50">
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Our Clients
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-zinc-950 mt-3 mb-4">
            The edbā Pioneers.
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Purpose. Precision. Progress.
          </p>
        </motion.div>

        {/* Centered Flexbox wrap of smaller cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-6xl mx-auto"
        >
          {pioneerLogos.map((logo, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.04,
                boxShadow: "0 12px 20px -8px rgba(0, 0, 0, 0.08)"
              }}
              className="bg-white border border-zinc-200/50 rounded-2xl w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center p-3 sm:p-4 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.03)] transition-all duration-300"
            >
              <img
                src={logo.path}
                alt={`${logo.name} Logo`}
                className={`max-h-12 sm:max-h-14 max-w-full object-contain ${
                  logo.name === "Rizvi" ? "brightness-0" : ""
                }`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
