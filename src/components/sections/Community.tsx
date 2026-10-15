import React from "react";
import { MessageSquare, Users, CalendarDays, Bell } from "lucide-react";

interface CommunityPoint {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}

const COMMUNITY_POINTS: CommunityPoint[] = [
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

export const Community: React.FC = () => {
  return (
    <section id="community" className="py-16 sm:py-20 lg:py-24 smart-display-tight:py-12 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Text Block */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-wider uppercase text-blue-700 bg-blue-50/90 px-3.5 py-1.5 rounded-full border border-blue-200/70 mb-4 inline-block shadow-xs">
              Communication Hub
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-[42px] leading-tight text-slate-900 mt-2 mb-4 tracking-tight">
              Connected Institute Community
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              Bridge the communication gap between administrators, teachers, parents, and students with real-time updates and notifications.
            </p>

            <div className="space-y-4">
              {COMMUNITY_POINTS.map((p, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-3 sm:p-3.5 rounded-2xl hover:bg-white hover:border-slate-200/80 border border-transparent hover:shadow-sm transition-all duration-200"
                >
                  <div className="mt-1 p-2.5 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-1">{p.title}</h3>
                    <p className="text-slate-600 text-sm font-normal leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mobile / Message Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-sm bg-slate-950 rounded-[2.5rem] p-4 sm:p-5 shadow-2xl border-4 border-slate-800">
              {/* Speaker & camera slot */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-24 bg-slate-800 rounded-b-xl flex items-center justify-center">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900 inline-block mr-2"></span>
                <span className="h-1 w-8 rounded bg-slate-950 inline-block"></span>
              </div>

              {/* Chat Interface Header */}
              <div className="flex items-center gap-3 pt-6 pb-3 border-b border-slate-900 mb-4">
                <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                  P
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Mrs. Priya Sharma</div>
                  <div className="text-[10px] text-emerald-400 font-medium">Class 5 Science Teacher</div>
                </div>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3 h-72 sm:h-80 overflow-y-auto pr-1 flex flex-col justify-end">
                {/* Teacher Msg */}
                <div className="flex gap-2 items-end max-w-[85%]">
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-slate-900 border border-slate-800/80 rounded-2xl px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed">
                    Namaste! Just wanted to share that Aarav did an amazing job on his Science project today.
                  </div>
                </div>

                {/* Parent Reply */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 rounded-2xl px-3.5 py-2.5 text-[11px] text-white max-w-[85%] font-medium leading-relaxed shadow-sm">
                    That is so wonderful to hear! Thank you for the update, Priya Ma&apos;am. Did he submit the project file?
                  </div>
                </div>

                {/* Teacher Msg */}
                <div className="flex gap-2 items-end max-w-[85%]">
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-[9px] text-white font-bold flex-shrink-0">
                    P
                  </div>
                  <div className="bg-slate-900 border border-slate-800/80 rounded-2xl px-3.5 py-2.5 text-[11px] text-slate-300 leading-relaxed">
                    Yes, he did! I have uploaded the marks and feedback directly to the Student Portal. You can check it there.
                  </div>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-4 pt-3 border-t border-slate-900 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium ml-1">Write your reply...</span>
                <button
                  type="button"
                  className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Send
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Community;
