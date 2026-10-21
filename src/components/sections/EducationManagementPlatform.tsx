import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, GraduationCap, Settings, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Settings,
    label: "Administrators",
    desc: "Manage institutional setup, data, and workflows",
  },
  {
    icon: GraduationCap,
    label: "Educators",
    desc: "Access timetables, attendance, and academic tools",
  },
  {
    icon: Users,
    label: "Students",
    desc: "Track progress, assignments, and updates",
  },
  {
    icon: Users,
    label: "Parents",
    desc: "Stay connected to their child's academic journey",
  },
];

const capabilities = [
  "Centralized Student & Staff Records",
  "Attendance & Academic Tracking",
  "Examination & Results Management",
  "Communication & Announcements",
  "Fees & Financial Management",
  "Certificates & Documentation",
  "Sports & Physical Education",
  "Learning Management System",
];

export default function EducationManagementPlatform() {
  return (
    <section
      id="platform"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Left: Visual Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Main Dashboard Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/60 overflow-hidden">
              {/* Header bar */}
              <div className="flex items-center gap-2 px-5 py-4 bg-slate-50 border-b border-slate-200">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 mx-4 bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs text-slate-400">
                  app.edba.io/dashboard
                </div>
              </div>

              {/* Dashboard body */}
              <div className="p-5">
                {/* Top stat row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Total Students", val: "2,847", color: "bg-blue-50 text-blue-700 border-blue-200" },
                    { label: "Attendance Today", val: "94.2%", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                    { label: "Pending Fees", val: "₹1.4L", color: "bg-amber-50 text-amber-700 border-amber-200" },
                  ].map((s, i) => (
                    <div key={i} className={`border rounded-xl p-3 text-center ${s.color}`}>
                      <p className="text-xs font-medium opacity-80 mb-1">{s.label}</p>
                      <p className="text-base font-black">{s.val}</p>
                    </div>
                  ))}
                </div>

                {/* Activity list */}
                <div className="bg-slate-50 rounded-xl border border-slate-200 divide-y divide-slate-200/70">
                  {[
                    { label: "Attendance Marked", dept: "Class X-A", time: "9:05 AM", dot: "bg-emerald-500" },
                    { label: "Fee Payment Received", dept: "Rahul Sharma", time: "9:32 AM", dot: "bg-blue-500" },
                    { label: "New Admission", dept: "Class VI", time: "10:01 AM", dot: "bg-violet-500" },
                    { label: "Exam Results Published", dept: "Mid-term 2025", time: "11:15 AM", dot: "bg-cyan-500" },
                    { label: "Circular Sent", dept: "All Parents", time: "11:40 AM", dot: "bg-amber-500" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 px-4 py-2.5">
                      <span className={`h-2 w-2 rounded-full flex-shrink-0 ${item.dot}`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-800 truncate">{item.label}</p>
                        <p className="text-[10px] text-slate-400">{item.dept}</p>
                      </div>
                      <span className="text-[10px] text-slate-400 whitespace-nowrap">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating user role badges */}
            {pillars.slice(0, 3).map((p, i) => {
              const positions = [
                "absolute -top-4 -right-4",
                "absolute bottom-20 -right-6",
                "absolute -bottom-4 left-1/2 -translate-x-1/2",
              ];
              const Icon = p.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className={`${positions[i]} bg-white border border-slate-200 rounded-xl shadow-lg px-3.5 py-2.5 flex items-center gap-2.5 z-10`}
                >
                  <div className="h-7 w-7 rounded-lg bg-blue-600 flex items-center justify-center">
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{p.label}</p>
                    <p className="text-[10px] text-slate-400 leading-tight">{p.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 w-fit shadow-xs">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" />
              Education Management Platform
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-5">
              Designed for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Easy Adoption
              </span>{" "}
              Across Your Entire Institution
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              EDBA provides an intuitive, user-friendly digital environment that enables administrators, educators, staff, students, and parents to navigate and use the platform with ease.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              From setting up your institution and managing student and staff information to organizing academic and administrative processes, EDBA helps create a structured digital foundation and simplifies everyday operations.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Designed to adapt to the unique needs of different educational institutions, EDBA offers a flexible and scalable environment that can align with your institution's processes, requirements, and digital ecosystem.
            </p>

            {/* Capability chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {capabilities.map((cap, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold rounded-full"
                >
                  {cap}
                </span>
              ))}
            </div>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer w-fit group"
            >
              <span>Explore the Platform</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
