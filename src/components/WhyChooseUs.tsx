"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Cpu, Award } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    { title: "One-Click Attendance Sync", desc: "Mark attendance in seconds and notify parents instantly." },
    { title: "Secure Payment System", desc: "Automated invoices, online payment portals, and tracking in one place." },
    { title: "Gradebook & Digital Reports", desc: "Calculate GPAs automatically and publish PDF report cards instantly." },
    { title: "Real-time Notifications", desc: "Instant mobile notifications for announcements, events, and bus details." },
    { title: "Interactive Reports", desc: "Visual charts for test records, grade tracking, and performance analysis." },
  ];

  const compareBars = [
    { title: "Timetable Planning (Hours/Month)", text: "EDBA: 1 hr vs. Legacy: 42 hrs", val: 2.3 },
    { title: "Attendance Management (Hrs/Day)", text: "EDBA: 5 mins vs. Legacy: 4 hrs", val: 2.0 },
    { title: "Fee Invoice Generation (Days)", text: "EDBA: Instant vs. Legacy: 7 days", val: 1.5 },
    { title: "Report Card Publishing", text: "EDBA: 10 mins vs. Legacy: 5 days", val: 1.0 },
  ];

  const listContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 bg-[#f1f3f6] grid-bg-light relative border-y border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Text benefits */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block"
            >
              Why Choose Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-8"
            >
              Why Institutes Choose EDBA
            </motion.h2>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={listItem}
                  className="flex gap-4 items-start"
                >
                  <div className="mt-1 p-0.5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 fill-blue-50 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">{benefit.title}</h3>
                    <p className="text-zinc-500 text-sm font-normal leading-relaxed">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right visual card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="neu-card-dark rounded-2xl p-6 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-40 w-40 bg-cyan-500/5 rounded-full blur-3xl"></div>

              <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
                <div>
                  <h4 className="font-display font-semibold text-white text-base">Efficiency Gains</h4>
                  <p className="text-zinc-500 text-xs">Comparison between traditional vs. EDBA LMS</p>
                </div>
                <div className="p-2 rounded-lg neu-btn-dark">
                  <TrendingUp className="h-4 w-4 text-emerald-400" />
                </div>
              </div>

              {/* Bar charts comparing operations time */}
              <div className="space-y-5">
                {compareBars.map((bar, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-semibold text-zinc-400 mb-2">
                      <span>{bar.title}</span>
                      <span className="text-white">{bar.text}</span>
                    </div>
                    <div className="w-full bg-zinc-900 h-3 rounded-full overflow-hidden border border-zinc-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.val}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + idx * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Extra micro metric stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-600 text-white shadow-md shadow-blue-500/10">
                    <Cpu className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">Operations</span>
                    <span className="text-sm font-semibold text-white">92% Faster</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white shadow-md shadow-cyan-500/10">
                    <Award className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-mono">Errors</span>
                    <span className="text-sm font-semibold text-white">99% Less</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
