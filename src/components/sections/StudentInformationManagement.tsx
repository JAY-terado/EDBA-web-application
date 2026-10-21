import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, CalendarCheck, FileText, Bell, Award, Users, ArrowRight, Check } from "lucide-react";

const studentFeatures = [
  { icon: Users, title: "Student Records & Information", desc: "Centralized student data management for accurate, organized records" },
  { icon: CalendarCheck, title: "Attendance Tracking", desc: "Monitor student attendance with ease and address discrepancies promptly" },
  { icon: FileText, title: "Examination & Results", desc: "Manage exam workflows and student progression with structured tools" },
  { icon: Award, title: "Certificates & Promotion", desc: "Handle leaving certificates, documents, and student promotion records" },
  { icon: Bell, title: "Announcements & Updates", desc: "Share institutional updates and keep students and parents informed" },
];

const userStats = [
  { label: "Students on Platform", val: "1.2M+" },
  { label: "Active Institutions", val: "100+" },
  { label: "Records Managed", val: "5M+" },
];

export default function StudentInformationManagement() {
  return (
    <section
      id="student-management"
      className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* Left: Student Profile Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Student Portal Card */}
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/60 overflow-hidden">
              {/* Portal Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Aryan Mehta</p>
                    <p className="text-blue-200 text-xs">Student ID: 2024-BCS-0147 | Class XII Science</p>
                  </div>
                  <div className="ml-auto px-2.5 py-1 bg-white/15 rounded-lg">
                    <span className="text-white text-xs font-semibold">Active</span>
                  </div>
                </div>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 border-b border-slate-100">
                {[
                  { label: "Attendance", val: "93.5%", good: true },
                  { label: "Overall Grade", val: "A+", good: true },
                  { label: "Pending Fees", val: "₹0", good: true },
                ].map((s, i) => (
                  <div key={i} className="py-4 px-3 text-center border-r last:border-r-0 border-slate-100">
                    <p className={`text-lg font-black ${s.good ? "text-emerald-600" : "text-red-500"}`}>{s.val}</p>
                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="p-5">
                <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Recent Activity</p>
                <div className="space-y-2.5">
                  {[
                    { text: "Chemistry Mid-term result published", tag: "Examination", color: "bg-blue-50 text-blue-700" },
                    { text: "Present on Monday, Oct 14", tag: "Attendance", color: "bg-emerald-50 text-emerald-700" },
                    { text: "Math Assignment submitted", tag: "Academics", color: "bg-violet-50 text-violet-700" },
                    { text: "Annual Sports Day notice shared", tag: "Announcement", color: "bg-amber-50 text-amber-700" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${item.color}`}>
                        {item.tag}
                      </span>
                      <p className="text-xs text-slate-600 font-medium">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Parent View Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-4 bg-white border border-slate-200 rounded-2xl shadow-xl p-4 z-10 w-56"
            >
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Parent View</p>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">P</div>
                <div>
                  <p className="text-xs font-semibold text-slate-700">Parent of Aryan</p>
                  <p className="text-[10px] text-emerald-600 font-medium">✓ All updates received</p>
                </div>
              </div>
              <div className="text-[10px] text-slate-500 bg-slate-50 rounded-lg px-2.5 py-2">
                Son's attendance 93.5% — On track for exams
              </div>
            </motion.div>

            {/* Stats Badges */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {userStats.map((s, i) => (
                <div key={i} className="bg-white border border-slate-200 rounded-xl p-3 text-center shadow-sm">
                  <p className="text-lg font-black text-blue-600">{s.val}</p>
                  <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
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
              <GraduationCap className="w-3.5 h-3.5" aria-hidden="true" />
              Student Information & Management System
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-5">
              Empowering Students Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Connected Education
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              EDBA provides a centralized platform for managing student information and supporting students throughout their educational journey. By bringing essential academic records, attendance information, examination details, and institutional updates together, EDBA helps create a more organized and transparent educational experience.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              With access to relevant information through the platform, students and parents can stay informed about academic activities, attendance, examination-related updates, announcements, and other important information shared by the institution.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Designed for schools, junior colleges, colleges, universities, and specialised educational institutions, EDBA supports a connected learning environment where students, educators, parents, and administrators can stay aligned throughout the academic journey.
            </p>

            {/* Feature list */}
            <div className="space-y-3 mb-8">
              {studentFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{f.title}</p>
                      <p className="text-xs text-slate-500 font-normal leading-snug">{f.desc}</p>
                    </div>
                    <Check className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5 ml-auto" />
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 cursor-pointer w-fit group"
            >
              <span>Explore Student Management</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
