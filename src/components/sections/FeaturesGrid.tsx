import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Brain, User, HeartHandshake, ArrowRight } from "lucide-react";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Campus Command Hub",
      desc: "Automate your enrollment pipeline, track real-time fee balances, and synchronize campus timetables without manual paperwork.",
      icon: ShieldCheck,
      color: "from-blue-600 to-indigo-600",
      glowColor: "shadow-blue-500/20",
    },
    {
      title: "Intelligent Evaluation Engine",
      desc: "Cut assessment cycles in half. Instantly deliver personalized student feedback and track academic GPA trends with zero manual effort.",
      icon: Brain,
      color: "from-cyan-500 to-blue-600",
      glowColor: "shadow-cyan-500/20",
    },
    {
      title: "Digital Campus Companion",
      desc: "Give students complete control over their learning. Track schedules, access syllabi, submit digital assignments, and hit milestones on any device.",
      icon: User,
      color: "from-teal-500 to-cyan-500",
      glowColor: "shadow-teal-500/20",
    },
    {
      title: "Parent Engagement Hub",
      desc: "Give parents total peace of mind. Provide direct messaging with educators, secure one-click fee payments, and live Campus bus GPS tracking.",
      icon: HeartHandshake,
      color: "from-indigo-500 to-purple-600",
      glowColor: "shadow-indigo-500/20",
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
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="features" className="py-16 sm:py-24 smart-display-tight bg-white border-b border-slate-200/80 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 mb-4 inline-block shadow-xs">
            The edbā Ecosystem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-3 sm:mb-4 tracking-tight">
            Run your entire institution from a single, smart workspace.
          </h2>
          <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-normal">
            Ditch messy spreadsheets and fragmented portals. EDBA brings your entire campus—admins, teachers, parents, and students—into one beautifully synchronized workspace.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group relative bg-white border border-slate-200/80 hover:border-blue-300 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Gradient Icon */}
                <div className={`h-11 w-11 sm:h-12 sm:w-12 rounded-xl bg-gradient-to-tr ${f.color} flex items-center justify-center text-white mb-5 sm:mb-6 shadow-md ${f.glowColor}`}>
                  <f.icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </div>

                {/* Title & Desc */}
                <h3 className="font-display font-semibold text-base sm:text-lg text-slate-900 mb-2 sm:mb-2.5 group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {f.desc}
                </p>
              </div>

              {/* Link Arrow */}
              <a
                href="#solutions"
                className="inline-flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 hover:underline focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm pt-2"
              >
                <span>Learn More</span>
                <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
