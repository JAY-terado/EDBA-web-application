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
      title: "Enrollment Pipeline Engine",
      desc: "Turn the admissions maze into a seamless pipeline. Guide prospective families through paperless applications, automated document verification, and smart interview scheduling straight into instant enrollment.",
      icon: UserPlus,
      color: "bg-blue-600 text-white shadow-md shadow-blue-500/20",
    },
    {
      title: "Automated Billing Engine",
      desc: "Automated campus commerce. Configure dynamic fee tiers, deploy hands-free recurring invoices, and accept secure global card payments powered by Stripe.",
      icon: CreditCard,
      color: "bg-cyan-500 text-white shadow-md shadow-cyan-500/20",
    },
    {
      title: "Roll-Call Automation Engine",
      desc: "Automate campus presence effortlessly. Log daily student and staff attendance through agile teacher mobile apps, touchless facial recognition, or secure biometric entryways.",
      icon: CalendarCheck2,
      color: "bg-teal-500 text-white shadow-md shadow-teal-500/20",
    },
    {
      title: "Assessment Evaluation Engine",
      desc: "Orchestrate academic evaluations effortlessly. Configure dynamic mark weightages, automate standard GPA calculations, and generate board-ready, print-perfect report cards with a single tap.",
      icon: FileSpreadsheet,
      color: "bg-indigo-600 text-white shadow-md shadow-indigo-500/20",
    },
    {
      title: "Resource Circulation Engine",
      desc: "Modernize media logistics across your campus. Enable self-serve digital catalog discovery, automate check-out and return logs, deploy hands-free return reminders, and track late-fee balances instantly.",
      icon: BookOpen,
      color: "bg-purple-600 text-white shadow-md shadow-purple-500/20",
    },
    {
      title: "Transit Logistics Engine",
      desc: "Orchestrate campus mobility with absolute precision. Deploy live vehicle telemetry, dynamic route optimization, automated boarding verification, and geo-fenced arrival alerts directly to parent networks.",
      icon: Bus,
      color: "bg-emerald-600 text-white shadow-md shadow-emerald-500/20",
    },
  ];

  return (
    <section id="solutions" className="py-20 sm:py-28 smart-display-tight:py-12 bg-white border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-4 shadow-xs">
            <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
            Platform Blueprint
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 mt-2 mb-3 sm:mb-4 tracking-tight">
            The Complete <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Campus Operating System</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Put your entire campus on autopilot. Seamlessly synchronize everything from back-office administration and classroom learning to Campus Mobility Network and parent engagement.
          </p>
        </div>

        {/* LMS Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {lmsFeatures.map((f, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex gap-4 sm:gap-5 group"
            >
              {/* Feature Icon container */}
              <div className={`h-12 w-12 rounded-xl flex items-center justify-center flex-shrink-0 ${f.color}`}>
                <f.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              
              <div>
                <h3 className="font-display font-semibold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
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
            className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline gap-1.5 group focus-visible:ring-2 focus-visible:ring-blue-600 rounded-sm"
          >
            <span>Explore the Platform Blueprint</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
