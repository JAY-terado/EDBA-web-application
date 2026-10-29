import React from "react";
import { MapPin, Bell, Radio } from "lucide-react";

export const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-20 sm:py-28 smart-display-tight:py-12 bg-slate-950 text-white relative overflow-hidden border-b border-slate-900">
      <div className="absolute top-0 right-0 h-96 w-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 smart-display-tight:mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-teal-400 bg-teal-950/60 border border-teal-800/60 px-3.5 py-1.5 rounded-full mb-4 shadow-xs">
            <Radio className="w-3.5 h-3.5 text-teal-400 animate-pulse" aria-hidden="true" />
            Safety First
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] text-white mt-2 mb-3 sm:mb-4 tracking-tight leading-tight">
            Real-Time <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-400">Student Safety</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
            Keep track of student location and status from transit to classrooms. Integrated RFID tracking gates and institute bus GPS modules keep parents updated.
          </p>
        </div>

        {/* Safety widgets mockups grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bus Tracker widget */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-teal-400" aria-hidden="true" />
                <span className="text-sm font-semibold text-white font-display">Bus Route GPS Tracker</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Route 12B - Evening</span>
            </div>

            {/* Simulated Map layout */}
            <div className="bg-slate-950 border border-slate-800 h-44 rounded-xl relative overflow-hidden mb-6 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
              
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                <path
                  d="M 50 120 Q 150 40, 220 80 T 320 30"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="4"
                />
                <path
                  d="M 50 120 Q 150 40, 220 80"
                  fill="none"
                  stroke="#14b8a6"
                  strokeWidth="4"
                  strokeDasharray="4 4"
                  className="animate-pulse"
                />
              </svg>

              {/* Waypoints */}
              <div className="absolute left-[50px] top-[120px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-slate-700 border-2 border-slate-900"></span>
                <span className="text-[10px] text-slate-400 font-bold mt-1">Institute</span>
              </div>
              
              {/* Current Active Bus Icon */}
              <div className="absolute left-[220px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center text-white border-2 border-slate-950 shadow-lg shadow-teal-500/40 animate-bounce">
                  <MapPin className="h-3.5 w-3.5 fill-white" aria-hidden="true" />
                </span>
                <span className="text-[10px] bg-teal-600 text-white font-bold px-1.5 py-0.5 rounded shadow mt-1">Bus 12</span>
              </div>

              <div className="absolute left-[320px] top-[30px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-slate-700 border-2 border-slate-900"></span>
                <span className="text-[10px] text-slate-400 font-bold mt-1">Terminal</span>
              </div>
            </div>

            {/* Bus Info footer */}
            <div className="flex justify-between items-center bg-slate-950 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-xs text-slate-400 block uppercase font-medium tracking-wider">Bus Status</span>
                <span className="text-xs font-semibold text-slate-200">En Route - Next Stop: Oak Ridge Ave</span>
              </div>
              <div className="text-right">
                <span className="text-xs text-teal-400 block font-semibold uppercase tracking-wider">ETA</span>
                <span className="text-xs font-bold text-white">3:14 PM (In 8 mins)</span>
              </div>
            </div>
          </div>

          {/* Right Gates Check-in widget */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-teal-400" aria-hidden="true" />
                <span className="text-sm font-semibold text-white font-display">RFID Gate Entry Logs</span>
              </div>
              <span className="text-xs text-slate-400 font-medium">Gate 2 - Active</span>
            </div>

            {/* List of Gate Checks */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-white">AJ</div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">Alex Jenkins</span>
                    <span className="text-xs text-slate-400">Grade 5 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                    Checked Out
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">3:05 PM (Gate 1)</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-white">LM</div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">Luke Miller</span>
                    <span className="text-xs text-slate-400">Grade 12 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                    Checked Out
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">3:02 PM (Gate 1)</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-slate-800 flex items-center justify-center font-bold text-xs text-white">SH</div>
                  <div>
                    <span className="text-xs font-semibold text-slate-200 block">Sophie Harris</span>
                    <span className="text-xs text-slate-400">Grade 8 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold bg-teal-500/10 text-teal-400 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                    Checked In
                  </span>
                  <span className="text-xs text-slate-400 block mt-1">8:14 AM (Gate 2)</span>
                </div>
              </div>
            </div>

            {/* Safety alert message description */}
            <div className="flex gap-3 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800/50 items-start">
              <div className="p-1.5 rounded-md bg-teal-600/20 text-teal-400 flex items-center justify-center">
                <Bell className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Parents receive push notifications and SMS instantly when their children check-in at institute or tap their cards to board buses.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Safety;
