"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Brain, User, HeartHandshake, ArrowRight } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Campus Command Hub",
      desc: "Automate your enrollment pipeline, track real-time fee balances, and synchronize campus timetables without the manual paperwork.",
      icon: ShieldCheck,
      color: "from-blue-500 to-indigo-600",
      glowColor: "shadow-blue-500/10",
    },
    {
      title: "Intelligent Evaluation Engine",
      desc: "Cut assessment cycles in half. Instantly deliver personalized student feedback and track academic GPA trends with zero manual effort.",
      icon: Brain,
      color: "from-cyan-500 to-blue-500",
      glowColor: "shadow-cyan-500/10",
    },
    {
      title: "Digital Campus Companion",
      desc: "Give students complete control over their learning. Track schedules, access syllabi, submit digital assignments, and hit academic milestones from any device.",
      icon: User,
      color: "from-teal-500 to-cyan-500",
      glowColor: "shadow-teal-500/10",
    },
    {
      title: "Parent Engagement Hub",
      desc: "Give parents total peace of mind. Provide direct messaging with educators, secure one-click fee payments, and live Campus bus GPS tracking right on their phones.",
      icon: HeartHandshake,
      color: "from-indigo-500 to-purple-500",
      glowColor: "shadow-indigo-500/10",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="features" className="py-24 bg-[#f1f3f6] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            The edbā Ecosystem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-zinc-950 mt-3 mb-6">
            Run your entire institution from a single, smart workspace.
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Ditch the messy spreadsheets and outdated portals. EDBA brings your entire campus—admins, teachers, parents, and students—into one beautifully synchronized workspace.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative neu-card rounded-2xl p-6"
            >
              {/* Card Gradient Icon */}
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${f.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                <f.icon className="h-6 w-6" />
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-semibold text-lg text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                {f.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-normal">
                {f.desc}
              </p>

              {/* Link Arrow */}
              <a
                href="#solutions"
                className="inline-flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 hover:underline"
              >
                Learn More
                <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
