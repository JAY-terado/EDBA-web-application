import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Building2,
  Star,
  Headphones,
  Search,
  MessageSquare,
  Camera,
  Settings,
  LayoutDashboard,
  CalendarCheck,
  FileText,
  Clock,
  Bell,
  FileSpreadsheet,
  GraduationCap,
  ArrowRight,
  Send,
  Sparkles,
} from "lucide-react";
import studentGirlImg from "@/assets/student-girl.webp";

const metricStats = [
  {
    value: "1.2M+",
    label: "Students",
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    value: "100+",
    label: "Institutions",
    icon: Building2,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50",
  },
  {
    value: "98%",
    label: "Satisfaction",
    icon: Star,
    iconColor: "text-amber-500 fill-amber-500",
    iconBg: "bg-amber-50",
  },
  {
    value: "24/7",
    label: "Support",
    icon: Headphones,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
];

const recentActivities = [
  {
    tag: "Examination",
    text: "Chemistry Mid-term result published",
    time: "2h ago",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200/60",
  },
  {
    tag: "Attendance",
    text: "Present on Monday, Oct 14",
    time: "1d ago",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/60",
  },
  {
    tag: "Academics",
    text: "Math Assignment submitted",
    time: "2d ago",
    badgeClass: "bg-violet-50 text-violet-700 border-violet-200/60",
  },
  {
    tag: "Announcement",
    text: "Annual Sports Day notice shared",
    time: "3d ago",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200/60",
  },
];

export default function StudentInformationManagement() {
  const handleOpenDemo = () => {
    window.dispatchEvent(new CustomEvent("open-demo-modal"));
  };

  return (
    <section
      id="student-management"
      className="scroll-mt-24 sm:scroll-mt-28 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

          {/* ========================================================= */}
          {/* LEFT COLUMN: Girl Hero + Doodles + Dashboard Mockup       */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative flex flex-col items-center order-2 lg:order-1"
          >
            {/* Visual Container */}
            <div className="w-full relative max-w-[580px] mx-auto">

              {/* --- TOP VISUAL: Smiling Schoolgirl with Lucide Doodles --- */}
              <div className="relative w-full h-[310px] sm:h-[370px] flex justify-center items-end -mb-16 sm:-mb-20 z-10 pointer-events-none">

                {/* DOODLE: Flying Paper Plane with Lucide Send icon & dashed trail */}
                <div className="absolute left-2 sm:left-6 top-3 sm:top-5 z-20 pointer-events-none select-none">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                    <svg
                      className="w-full h-full text-blue-500"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M 15 85 C 10 55, 25 35, 62 20"
                        stroke="#2563EB"
                        strokeWidth="2.2"
                        strokeDasharray="4 5"
                        strokeLinecap="round"
                      />
                      <circle cx="15" cy="85" r="2.5" fill="#2563EB" />
                    </svg>
                    <div className="absolute top-1 right-2 -rotate-[20deg] text-blue-600 drop-shadow-sm">
                      <Send className="w-7 h-7 sm:w-8 sm:h-8 fill-blue-500/20 stroke-[2]" />
                    </div>
                  </div>
                </div>

                {/* DOODLE: Floating Line-Art Graduation Cap (No box, clean floating doodle) */}
                <div className="absolute right-4 sm:right-16 top-2 sm:top-4 z-20 pointer-events-none select-none">
                  <GraduationCap className="w-9 h-9 sm:w-13 sm:h-13 text-slate-800 -rotate-12 stroke-[1.8] drop-shadow-sm" />
                </div>

                {/* FLOATING PILL 1: Attendance (Left of girl) */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0.5 sm:left-4 top-[38%] sm:top-[40%] z-30 pointer-events-auto bg-white border border-slate-200/90 rounded-2xl p-2 sm:px-4 sm:py-3 shadow-xl shadow-slate-200/80 flex items-center gap-2 sm:gap-3 transition-transform hover:scale-105"
                >
                  <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-base font-black text-slate-900 leading-none">93.5%</p>
                    <p className="text-[9px] sm:text-xs text-slate-400 font-medium mt-0.5">Attendance</p>
                  </div>
                </motion.div>

                {/* FLOATING PILL 2: Overall Grade with Lucide Sparkles */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute right-0.5 sm:right-4 top-[26%] sm:top-[28%] z-30 pointer-events-auto bg-white border border-slate-200/90 rounded-2xl px-2.5 py-1.5 sm:px-4 sm:py-3 shadow-xl shadow-slate-200/80 flex items-center gap-2 sm:gap-2.5 transition-transform hover:scale-105"
                >
                  <span className="text-lg sm:text-2xl font-black text-emerald-600 leading-none">A+</span>
                  <div>
                    <p className="text-[9px] sm:text-xs text-slate-500 font-semibold leading-tight">
                      Overall Grade
                    </p>
                  </div>

                  {/* Lucide Sparkles around A+ badge */}
                  <div className="absolute -bottom-2 -right-1.5 pointer-events-none text-blue-600">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  </div>
                </motion.div>

                {/* Cutout Girl Image */}
                <img
                  src={studentGirlImg}
                  alt="Student girl holding books"
                  className="h-[280px] sm:h-[350px] w-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] select-none pointer-events-none"
                />
              </div>

              {/* --- BOTTOM VISUAL: Modern White SaaS Dashboard Window --- */}
              <div className="relative z-20 bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden">

                {/* Dashboard Topbar */}
                <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-slate-100 bg-white">
                  {/* Brand Logo */}
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="EDBA" className="h-6 w-auto object-contain" />
                  </div>

                  {/* Search Bar */}
                  <div className="flex-1 max-w-[200px] sm:max-w-xs mx-3 sm:mx-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-400 text-xs">
                      <Search className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                      <span className="truncate text-[11px] sm:text-xs">Search, Career Guardians</span>
                    </div>
                  </div>

                  {/* Header Utility Icons */}
                  <div className="flex items-center gap-2 sm:gap-2.5 text-slate-400">
                    <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-slate-600 cursor-pointer transition-colors" />
                    <Camera className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-slate-600 cursor-pointer transition-colors" />
                    <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4 hover:text-slate-600 cursor-pointer transition-colors" />
                  </div>
                </div>

                {/* Dashboard Body (Sidebar + Content) */}
                <div className="flex">

                  {/* Mini Sidebar (hidden on very small mobile) */}
                  <div className="hidden sm:block w-36 border-r border-slate-100 p-2.5 space-y-1 bg-slate-50/60">
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-blue-50 text-blue-700 font-bold text-xs">
                      <LayoutDashboard className="w-3.5 h-3.5 text-blue-600" />
                      <span>Dashboard</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>Students</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <CalendarCheck className="w-3.5 h-3.5 text-slate-400" />
                      <span>Attendance</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <FileText className="w-3.5 h-3.5 text-slate-400" />
                      <span>Examinations</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Timetable</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <Bell className="w-3.5 h-3.5 text-slate-400" />
                      <span>Announcements</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-600 text-xs hover:bg-slate-100/70 cursor-pointer transition-colors">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-slate-400" />
                      <span>Reports</span>
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 p-4 sm:p-5">

                    {/* Student Profile Row */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm ring-2 ring-blue-100">
                          RM
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900 leading-snug">Riya Mehta</p>
                          <p className="text-[11px] text-slate-400 font-medium">
                            Student ID: 2024-BCS-0147 | Class XI Science
                          </p>
                        </div>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200">
                        Active
                      </span>
                    </div>

                    {/* Stats 3-Box Grid */}
                    <div className="grid grid-cols-3 gap-2.5 py-3.5 border-b border-slate-100">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-base sm:text-lg font-black text-emerald-600 leading-none">93.5%</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Attendance</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-base sm:text-lg font-black text-emerald-600 leading-none">A+</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Overall Grade</p>
                      </div>
                      <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-center">
                        <p className="text-base sm:text-lg font-black text-emerald-600 leading-none">₹0</p>
                        <p className="text-[10px] text-slate-400 font-medium mt-1">Pending Fees</p>
                      </div>
                    </div>

                    {/* Recent Activity Feed */}
                    <div className="pt-3">
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2.5">
                        RECENT ACTIVITY
                      </p>
                      <div className="space-y-1.5 sm:space-y-2">
                        {recentActivities.map((act, idx) => (
                          <div
                            key={idx}
                            className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 text-xs"
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md border flex-shrink-0 ${act.badgeClass}`}
                              >
                                {act.tag}
                              </span>
                              <span className="text-slate-700 font-medium truncate text-[11px] sm:text-xs">
                                {act.text}
                              </span>
                            </div>
                            <span className="text-[10px] text-slate-400 flex-shrink-0 font-medium">
                              {act.time}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Text Content & Structured Metrics           */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col order-1 lg:order-2 items-center lg:items-start"
          >
            {/* Eyebrow Pill */}
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3 sm:mb-4 w-fit shadow-2xs self-center lg:self-start">
              <GraduationCap className="w-3 h-3 text-blue-600" aria-hidden="true" />
              Student Information & Management System
            </span>

            {/* Main Headline (Harmonized with Section 6 & 8) */}
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-4 sm:mb-5 text-center lg:text-left">
              Empowering Students Through{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                Connected Education
              </span>
            </h2>

            {/* Full 4-Paragraph Content formatted exactly like other sections */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              EDBA provides a centralized platform for managing student information and supporting students throughout their educational journey. By bringing essential academic records, attendance information, examination details, and institutional updates together, EDBA helps create a more organized and transparent educational experience.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              With access to relevant information through the platform, students and parents can stay informed about academic activities, attendance, examination-related updates, announcements, and other important information shared by the institution.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              Through integrated Student Management, Academics, Attendance, Examinations, Promotion, Certificates, and Communication capabilities, EDBA helps institutions maintain accurate student records, improve coordination, and support informed academic decisions.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Designed for schools, junior colleges, colleges, universities, and specialised educational institutions, EDBA supports a connected learning environment where students, educators, parents, and administrators can stay aligned throughout the academic journey.
            </p>

            {/* 4 Metrics in App Card Theme (matching ParentCommunicationPlatform / FeaturesGrid) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {metricStats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/20 transition-all duration-200 shadow-xs"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`h-7 w-7 rounded-lg flex items-center justify-center ${item.iconBg}`}>
                        <Icon className={`h-3.5 w-3.5 ${item.iconColor}`} />
                      </div>
                      <p className="text-lg font-black text-slate-900 leading-none">{item.value}</p>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-tight">{item.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Button */}
            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={handleOpenDemo}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer group active:scale-95 mx-auto lg:mx-0 text-center"
              >
                <span>Explore Student Management</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}




