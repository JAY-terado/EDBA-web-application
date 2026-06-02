import React from "react";
import { 
  UserPlus, 
  CreditCard, 
  CalendarCheck2, 
  FileSpreadsheet, 
  BookOpen, 
  Bus, 
  ArrowRight 
} from "lucide-react";

export default function LmsSolutions() {
  const lmsFeatures = [
    {
      title: "Student Admissions",
      desc: "Digital application forms, document validation pipelines, parent interviews scheduling, and automatic registration.",
      icon: UserPlus,
      color: "bg-blue-600 text-white shadow-md shadow-blue-500/10",
    },
    {
      title: "Fee Management",
      desc: "Custom fee structures, automatic recurring invoices, digital receipts generation, and integration with Stripe & cards.",
      icon: CreditCard,
      color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/10",
    },
    {
      title: "Attendance Tracker",
      desc: "Track student and staff daily attendance using dynamic teacher roll-call apps, face recognition, or biometric entry logs.",
      icon: CalendarCheck2,
      color: "bg-teal-500 text-white shadow-md shadow-teal-500/10",
    },
    {
      title: "Exams & Grading",
      desc: "Easily set exam marks weightages, generate print-ready student report cards, and calculate standard GPA grades.",
      icon: FileSpreadsheet,
      color: "bg-indigo-500 text-white shadow-md shadow-indigo-500/10",
    },
    {
      title: "Library System",
      desc: "Search resources via OPAC (Online Public Access Catalog), log book transactions, send auto-reminders, and calculate fine logs.",
      icon: BookOpen,
      color: "bg-purple-500 text-white shadow-md shadow-purple-500/10",
    },
    {
      title: "Transport System",
      desc: "Real-time institute bus GPS tracking, dynamic route mapping, passenger boarding logs, and parent arrival notification alerts.",
      icon: Bus,
      color: "bg-emerald-500 text-white shadow-md shadow-emerald-500/10",
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            Module Directory
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Comprehensive Institute LMS Solution
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            Automate every aspect of your institute. From the administrative back-office to classrooms, transport, and parent communications.
          </p>
        </div>

        {/* LMS Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {lmsFeatures.map((f, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl neu-card flex gap-5"
            >
              {/* Feature Icon container */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                <f.icon className="h-5 w-5" />
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-base text-zinc-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* See All Features Link */}
        <div className="text-center">
          <a
            href="#cta"
            className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 hover:underline gap-1 group"
          >
            Explore LMS Module Guide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
