import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Share2, CreditCard, Database, Users, ArrowRight } from "lucide-react";

const privacyPillars = [
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "EDBA supports structured user access based on assigned roles and permissions, helping ensure that administrators, educators, and other authorized users can access the information relevant to their responsibilities.",
    color: "from-blue-600 to-indigo-600",
    bg: "bg-blue-50",
    accent: "text-blue-700",
    border: "border-blue-200",
  },
  {
    icon: Share2,
    title: "Controlled Information Sharing",
    desc: "Share institutional updates, announcements, and relevant information with designated users through EDBA's communication features. This helps institutions coordinate information sharing while maintaining appropriate access boundaries.",
    color: "from-cyan-500 to-blue-600",
    bg: "bg-cyan-50",
    accent: "text-cyan-700",
    border: "border-cyan-200",
  },
  {
    icon: CreditCard,
    title: "Organized Financial Records",
    desc: "Manage student fee details, payment records, and other financial information through EDBA's Fees & Payments capabilities, supporting better recordkeeping and visibility into institutional transactions.",
    color: "from-emerald-600 to-teal-600",
    bg: "bg-emerald-50",
    accent: "text-emerald-700",
    border: "border-emerald-200",
  },
  {
    icon: Database,
    title: "Reliable Data Management",
    desc: "Keep student, staff, academic, examination, and administrative information organized within the EDBA platform. A structured approach to digital record management helps institutions improve data accessibility and operational continuity.",
    color: "from-violet-600 to-purple-600",
    bg: "bg-violet-50",
    accent: "text-violet-700",
    border: "border-violet-200",
  },
  {
    icon: Users,
    title: "Confidential Student & Staff Information",
    desc: "EDBA brings essential institutional records together in a centralized environment, helping authorized users manage information systematically while supporting the institution's data privacy practices.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    accent: "text-amber-700",
    border: "border-amber-200",
  },
];

export default function DataPrivacySecurity() {
  return (
    <section
      id="data-privacy"
      className="py-20 sm:py-28 bg-slate-950 border-b border-slate-900 relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-0 right-0 h-96 w-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-96 w-96 bg-indigo-600/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff04_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/60 border border-blue-800/60 mb-5">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
            Data Privacy & Security
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-white tracking-tight mb-4">
            Protecting Institutional Data.{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              Building Digital Trust.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-normal">
            EDBA is designed to help educational institutions manage student information, staff records, academic data, and administrative processes within a structured digital environment. With controlled access and organized information management, EDBA supports responsible data handling and helps institutions maintain the confidentiality of essential records.
          </p>
        </motion.div>

        {/* Privacy Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {privacyPillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  i === 4 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Icon */}
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="font-display font-bold text-white text-base mb-3 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-normal">
                  {pillar.desc}
                </p>

                {/* Hover accent line */}
                <div className={`absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-full`} />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 max-w-2xl mx-auto">
            <ShieldCheck className="h-10 w-10 text-blue-400 mx-auto mb-4" />
            <p className="text-slate-300 text-base font-semibold mb-2">
              EDBA — Empowering education through responsible data management, controlled access, and digital trust.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Built for schools, colleges, and educational institutions that prioritize data responsibility.
            </p>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer group"
            >
              <span>Learn About Our Security Practices</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
