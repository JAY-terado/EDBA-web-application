import React from "react";
import { Shield, Sparkles, UserCheck, MessageCircle, CreditCard, Award, GraduationCap, MapPin } from "lucide-react";

export default function MobileApps() {
  const apps = [
    {
      role: "Admins",
      title: "Institute LMS Admin",
      color: "border-blue-600/30 shadow-blue-500/5",
      accentBg: "bg-blue-600",
      accentText: "text-blue-500",
      widgets: [
        { label: "Today's Collection", val: "$24,500", icon: CreditCard, color: "text-blue-500" },
        { label: "Staff Present", val: "98.2%", icon: UserCheck, color: "text-emerald-500" },
      ],
    },
    {
      role: "Teachers",
      title: "Classroom Manager",
      color: "border-cyan-600/30 shadow-cyan-500/5",
      accentBg: "bg-cyan-600",
      accentText: "text-cyan-500",
      widgets: [
        { label: "Pending Gradings", val: "14 tests", icon: Award, color: "text-cyan-500" },
        { label: "Active Live Stream", val: "Grade 8 Sc.", icon: Sparkles, color: "text-purple-500" },
      ],
    },
    {
      role: "Students",
      title: "Student Portal Mobile",
      color: "border-teal-600/30 shadow-teal-500/5",
      accentBg: "bg-teal-600",
      accentText: "text-teal-500",
      widgets: [
        { label: "Today's Assignments", val: "3 pending", icon: GraduationCap, color: "text-teal-500" },
        { label: "Calculus Quiz Score", val: "92 / 100", icon: Award, color: "text-emerald-500" },
      ],
    },
    {
      role: "Parents",
      title: "EDBA Parent App",
      color: "border-indigo-600/30 shadow-indigo-500/5",
      accentBg: "bg-indigo-600",
      accentText: "text-indigo-500",
      widgets: [
        { label: "Bus Location", val: "ETA 8 mins", icon: MapPin, color: "text-indigo-500" },
        { label: "Recent Messages", val: "2 unread", icon: MessageCircle, color: "text-amber-500" },
      ],
    },
  ];

  return (
    <section id="mobile-apps" className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            On the Go
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Mobile Apps for Everyone
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            EDBA delivers tailored, native iOS and Android experiences, custom-built for every stakeholder in the institute ecosystem.
          </p>
        </div>

        {/* 4 Cards Phones */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="p-6 neu-card rounded-2xl flex flex-col items-center"
            >
              {/* Role Title */}
              <div className="mb-4 text-center">
                <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block">PORTAL FOR</span>
                <span className="text-base font-bold text-zinc-900 font-display">{app.role}</span>
              </div>

              {/* Mobile Phone Mock */}
              <div className={`w-full max-w-[200px] aspect-[9/18] bg-zinc-950 border-4 border-zinc-800 rounded-3xl p-3 shadow-lg relative flex flex-col ${app.color}`}>
                
                {/* Speaker top notches */}
                <div className="h-3 w-16 bg-zinc-800 rounded-b-lg absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span className="h-0.5 w-4 rounded bg-zinc-900"></span>
                </div>

                {/* Phone screen UI */}
                <div className="mt-3 flex-grow flex flex-col justify-between">
                  {/* Phone Header */}
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-900/60 mb-2">
                    <span className="text-[9px] font-bold text-white font-mono">{app.title}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  </div>

                  {/* Widgets List */}
                  <div className="space-y-2 flex-grow">
                    {app.widgets.map((w, wIdx) => (
                      <div key={wIdx} className="bg-zinc-900/60 border border-zinc-850 p-2 rounded-lg flex items-center gap-2">
                        <w.icon className={`h-3 w-3 ${w.color}`} />
                        <div>
                          <span className="text-[7px] text-zinc-500 block uppercase font-mono tracking-wider">{w.label}</span>
                          <span className="text-[9px] font-bold text-white leading-none">{w.val}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* App brand footer */}
                  <div className="pt-2 border-t border-zinc-900/60 flex items-center justify-center gap-1">
                    <div className={`h-3 w-3 rounded-md ${app.accentBg} flex items-center justify-center text-[6px] text-white font-black`}>E</div>
                    <span className="text-[8px] text-zinc-500 font-bold uppercase tracking-wider">EDBA Portal</span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
