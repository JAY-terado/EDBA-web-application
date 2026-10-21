import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CalendarCheck, BarChart2, MessageSquare, Clock, Users, ArrowRight, Check } from "lucide-react";

const capabilities = [
  { icon: CalendarCheck, title: "Classroom Management", desc: "Centralized tools for organizing classes and academic workflows" },
  { icon: BookOpen, title: "Academics & Timetables", desc: "Coordinate academic activities and schedules across departments" },
  { icon: Users, title: "Student Attendance", desc: "Digital attendance management with correction and leave workflows" },
  { icon: BarChart2, title: "Examinations & Results", desc: "Streamlined exam management and student progress tracking" },
  { icon: Clock, title: "Learning Management (LMS)", desc: "Digital learning resources and classroom engagement tools" },
  { icon: MessageSquare, title: "Communication", desc: "Efficient updates and information sharing for educators and staff" },
];

const highlights = [
  "Reduce manual effort across academic workflows",
  "Improve coordination among educators and administrators",
  "Give educators more time to focus on teaching",
  "Accessible through a centralized digital platform",
  "Designed for schools, colleges, and specialised institutes",
];

export default function ClassroomAcademicManagement() {
  return (
    <section
      id="academic-management"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 border border-cyan-200/70 mb-5 w-fit shadow-xs">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Classroom & Academic Management
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-5">
              Classroom & Academic{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
                Management Software
              </span>
            </h2>

            <p className="text-slate-700 font-semibold text-lg leading-snug mb-4">
              Simplify Academic Workflows and Empower Educators with EDBA
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              EDBA helps educators and academic teams manage everyday classroom activities through a centralized, easy-to-use platform. By bringing essential academic information and administrative tasks together, EDBA helps reduce manual effort, improve coordination, and give educators more time to focus on teaching and student development.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              Accessible through the digital platform, educators and authorized staff can manage student attendance, access timetables, coordinate academic activities, maintain student records, and communicate important updates efficiently.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Designed to meet the evolving needs of schools, colleges, and other educational institutions, EDBA helps create a more organized, connected, and efficient learning environment.
            </p>

            {/* Highlights */}
            <div className="space-y-2.5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="h-5 w-5 rounded-full bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-cyan-600" />
                  </div>
                  <span className="text-sm text-slate-700 font-medium">{h}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer w-fit group"
            >
              <span>Book a Free Demo</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

          {/* Right: Capability Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                const isHighlighted = i === 0 || i === 3;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className={`p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                      isHighlighted
                        ? "bg-gradient-to-br from-blue-600 to-cyan-600 border-transparent text-white shadow-lg shadow-blue-500/20"
                        : "bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-md"
                    }`}
                  >
                    <div
                      className={`h-10 w-10 rounded-xl flex items-center justify-center mb-4 ${
                        isHighlighted ? "bg-white/15" : "bg-blue-50 border border-blue-100"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${isHighlighted ? "text-white" : "text-blue-600"}`} />
                    </div>
                    <h3 className={`font-display font-bold text-sm mb-1.5 leading-snug ${isHighlighted ? "text-white" : "text-slate-900"}`}>
                      {cap.title}
                    </h3>
                    <p className={`text-xs leading-relaxed font-normal ${isHighlighted ? "text-blue-100" : "text-slate-500"}`}>
                      {cap.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Modules badge list */}
            <div className="mt-5 p-4 bg-slate-50 border border-slate-200 rounded-2xl">
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Integrated With</p>
              <div className="flex flex-wrap gap-2">
                {["Classroom Management", "Academics", "Attendance", "Examinations", "LMS", "Communication"].map((tag, i) => (
                  <span key={i} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg shadow-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
