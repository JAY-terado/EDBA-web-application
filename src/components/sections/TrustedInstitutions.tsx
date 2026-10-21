import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";

interface ClientInstitution {
  name: string;
  logo: string;
}

const clientListRow1: ClientInstitution[] = [
  { name: "VIVA Group of Institutes", logo: "/LOGOS/vivalogo.png" },
  { name: "AIKTC Technical Campus", logo: "/LOGOS/AIKTC.png" },
  { name: "Saraswati College of Eng.", logo: "/LOGOS/Saraswati_logo.jpg" },
  { name: "Rizvi College of Arts & Sci.", logo: "/LOGOS/rizvi_logo.png" },
  { name: "Utkarsha Vidyalaya & Jr. Col.", logo: "/LOGOS/vivautkarsha-english-logo.png" },
  { name: "Sardar Patel Institute of Tech", logo: "/LOGOS/SPIT.jpg" },
  { name: "New Horizon Inst. of Tech", logo: "/LOGOS/NHITM_LOGO_new_logo.png" },
  { name: "Rajiv Gandhi Inst. of Tech", logo: "/LOGOS/rgit-logo.png" },
];

const clientListRow2: ClientInstitution[] = [
  { name: "Lokmanya Tilak College of Eng.", logo: "/LOGOS/LTCE_fav.png" },
  { name: "Muljibhai Mehta International", logo: "/LOGOS/Logo.jpg" },
  { name: "Om Gurudev Shikshan Sanstha", logo: "/LOGOS/omgurudev.jpg" },
  { name: "Chhatrapati Shivaji Maharaj Inst.", logo: "/LOGOS/CSMIT.jpg" },
  { name: "MGM Institute of Technology", logo: "/LOGOS/MGMIT.jpg" },
  { name: "Amrit Institute of Management", logo: "/LOGOS/Amrit.jpg" },
  { name: "Jivdani Educational Campus", logo: "/LOGOS/Jivdani_logo.png" },
  { name: "Bharat College Of Engineering", logo: "/LOGOS/b.jpg" },
];

export default function TrustedInstitutions() {
  return (
    <section
      id="our-clients"
      className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-x-clip relative"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-40 bg-gradient-to-b from-blue-400/8 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 shadow-xs">
            <Building2 className="w-3.5 h-3.5" aria-hidden="true" />
            Our Clients
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 tracking-tight mb-4">
            Trusted by Leading{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Educational Institutions
            </span>
          </h2>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
            Institutions across India trust EDBA to manage their academic, administrative, and communication operations.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 divide-x divide-slate-200/70 max-w-2xl mx-auto mb-14">
          {[
            { val: "100+", label: "Institutions" },
            { val: "1.2M+", label: "Students Managed" },
            { val: "5M+", label: "Records Processed" },
          ].map((s, i) => (
            <div key={i} className="py-4 px-6 text-center">
              <p className="font-display font-extrabold text-3xl sm:text-4xl text-blue-600 mb-1">{s.val}</p>
              <p className="text-sm font-semibold text-slate-600">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Label */}
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 font-mono">
          Trusted by schools and colleges across India
        </p>

        {/* Marquee Rows */}
        <div className="relative w-full overflow-hidden border-y border-slate-200/60 py-7">
          {/* Edge fades */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-[#f8fafc] to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-[#f8fafc] to-transparent z-10 pointer-events-none" />

          {/* Row 1: Left */}
          <div className="overflow-hidden mb-8">
            <div className="flex gap-12 sm:gap-16 lg:gap-20 w-max animate-marquee-left items-center">
              {[...clientListRow1, ...clientListRow1, ...clientListRow1].map((client, idx) => (
                <div key={`r1-${idx}`} className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer">
                  <div className="h-14 sm:h-16 w-36 sm:w-44 flex items-center justify-center transition-all duration-200 group-hover:drop-shadow-md">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-400 tracking-tight text-center max-w-[160px] truncate group-hover:text-slate-700 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Right */}
          <div className="overflow-hidden">
            <div className="flex gap-12 sm:gap-16 lg:gap-20 w-max animate-marquee-right items-center">
              {[...clientListRow2, ...clientListRow2, ...clientListRow2].map((client, idx) => (
                <div key={`r2-${idx}`} className="flex flex-col items-center justify-center gap-2.5 group cursor-pointer">
                  <div className="h-14 sm:h-16 w-36 sm:w-44 flex items-center justify-center transition-all duration-200 group-hover:drop-shadow-md">
                    <img
                      src={client.logo}
                      alt={`${client.name} logo`}
                      className="max-h-full max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-xs font-medium text-slate-400 tracking-tight text-center max-w-[160px] truncate group-hover:text-slate-700 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
