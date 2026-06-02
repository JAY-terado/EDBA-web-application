import React from "react";
import { MessageSquare, Users, CalendarDays, Bell, CheckCircle } from "lucide-react";

export default function Community() {
  const points = [
    {
      title: "Parent-Teacher Messaging",
      desc: "Direct two-way messaging between teachers and parents with built-in translation and read receipts.",
      icon: MessageSquare,
    },
    {
      title: "Institute Announcement Board",
      desc: "Broadcast notifications, weather alerts, newsletters, and policy changes to all accounts in one click.",
      icon: Bell,
    },
    {
      title: "Event Calendar Sync",
      desc: "Sync holidays, sports days, exams, and parent meetings directly with Google Calendar and Apple Calendar.",
      icon: CalendarDays,
    },
    {
      title: "Digital Notice Board",
      desc: "Pin announcements directly on student and teacher portal homepages, with mandatory review confirmations.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
              Communication Hub
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
              Connected Institute Community
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              Bridge the communication gap between administrators, teachers, parents, and students with real-time updates and notifications.
            </p>

            <div className="space-y-6">
              {points.map((p, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="mt-1 p-2 rounded-lg bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/10">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900 mb-1">{p.title}</h3>
                    <p className="text-zinc-500 text-sm font-normal leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mobile / Message Mockup */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-sm bg-zinc-950 rounded-3xl p-4 shadow-2xl border-4 border-zinc-800">
              {/* Speaker & camera slot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-zinc-800 rounded-b-xl flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-900 inline-block mr-2"></span>
                <span className="h-1 w-8 rounded bg-zinc-950 inline-block"></span>
              </div>

              {/* Chat Interface Header */}
              <div className="flex items-center gap-3 pt-6 pb-3 border-b border-zinc-900 mb-4">
                <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                  P
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Mrs. Priya Sharma</div>
                  <div className="text-[9px] text-emerald-400 font-medium">Class 5 Science Teacher</div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 h-80 overflow-y-auto pr-1 flex flex-col justify-end">
                {/* Teacher Msg */}
                <div className="flex gap-2 items-end max-w-[85%]">
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl px-3 py-2 text-[11px] text-zinc-300">
                    Namaste! Just wanted to share that Aarav did an amazing job on his Science project today. 🌟
                  </div>
                </div>

                {/* Parent Reply */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-2xl px-3 py-2 text-[11px] text-white max-w-[85%] font-medium">
                    That is so wonderful to hear! Thank you for the update, Priya Ma'am. Did he submit the project file?
                  </div>
                </div>

                {/* Teacher Msg */}
                <div className="flex gap-2 items-end max-w-[85%]">
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800/80 rounded-2xl px-3 py-2 text-[11px] text-zinc-300">
                    Yes, he did! I have uploaded the marks and feedback directly to the Student Portal. You can check it there.
                  </div>
                </div>

                {/* Notification Bubble */}
                <div className="mx-auto bg-zinc-900/60 border border-zinc-800/60 rounded-xl py-1.5 px-3 text-[9px] text-zinc-400 text-center font-medium max-w-[90%]">
                  ⚡ New Invoice Paid: Science Lab Fee (₹1,200)
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 font-medium ml-1">Write your reply...</span>
                <button className="px-3 py-1 neu-btn-blue text-white text-[10px] font-bold rounded-lg">
                  Send
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
