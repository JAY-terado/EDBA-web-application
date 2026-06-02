import React from "react";
import { ShieldCheck, MapPin, Bell, Radio, UserCheck } from "lucide-react";

export default function Safety() {
  return (
    <section id="safety" className="py-24 bg-zinc-950 text-white relative overflow-hidden border-b border-zinc-900">
      <div className="absolute top-0 right-0 h-96 w-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-400 bg-blue-950/40 border border-blue-900/50 px-3 py-1 rounded-full mb-4 inline-block">
            Safety First
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-3 mb-6">
            Real-Time Student Safety
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed font-normal">
            Keep track of student location and status from transit to classrooms. Integrated RFID tracking gates and institute bus GPS modules keep parents updated.
          </p>
        </div>

        {/* Safety widgets mockups grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Bus Tracker widget */}
          <div className="lg:col-span-6 neu-card-dark rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-semibold text-white font-display">Bus Route GPS Tracker</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">Route 12B - Evening</span>
            </div>

            {/* Simulated Map layout */}
            <div className="bg-zinc-950 border border-zinc-800 h-44 rounded-xl relative overflow-hidden mb-6 flex items-center justify-center">
              {/* Map grid representation */}
              <div className="absolute inset-0 grid-bg-dark opacity-40"></div>
              
              {/* Route line */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 50 120 Q 150 40, 220 80 T 320 30"
                  fill="none"
                  stroke="#27272a"
                  strokeWidth="4"
                />
                <path
                  d="M 50 120 Q 150 40, 220 80"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="4"
                  strokeDasharray="4 4"
                  className="animate-[dash_2s_linear_infinite]"
                />
              </svg>

              {/* Waypoints */}
              <div className="absolute left-[50px] top-[120px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-zinc-700 border-2 border-zinc-900"></span>
                <span className="text-[8px] text-zinc-500 font-bold mt-1">Institute</span>
              </div>
              
              {/* Current Active Bus Icon */}
              <div className="absolute left-[220px] top-[80px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white border-2 border-zinc-950 shadow-lg shadow-blue-500/40 animate-bounce">
                  <MapPin className="h-3.5 w-3.5 fill-white" />
                </span>
                <span className="text-[8px] bg-blue-600 text-white font-bold px-1 rounded shadow mt-1">Bus 12</span>
              </div>

              <div className="absolute left-[320px] top-[30px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-zinc-700 border-2 border-zinc-900"></span>
                <span className="text-[8px] text-zinc-500 font-bold mt-1">Terminal</span>
              </div>
            </div>

            {/* Bus Info footer */}
            <div className="flex justify-between items-center bg-zinc-950 p-4 rounded-xl border border-zinc-800">
              <div>
                <span className="text-[9px] text-zinc-500 block uppercase font-mono tracking-wider">Bus Status</span>
                <span className="text-xs font-semibold text-zinc-200">En Route - Next Stop: Oak Ridge Ave</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-emerald-400 block font-semibold uppercase tracking-wider">ETA</span>
                <span className="text-xs font-bold text-white">3:14 PM (In 8 mins)</span>
              </div>
            </div>
          </div>

          {/* Right Gates Check-in widget */}
          <div className="lg:col-span-6 neu-card-dark rounded-2xl p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2">
                <Radio className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-semibold text-white font-display">RFID Gate Entry Logs</span>
              </div>
              <span className="text-[10px] text-zinc-500 font-mono">Gate 2 - Active</span>
            </div>

            {/* List of Gate Checks */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center p-3 bg-zinc-950 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-white">AJ</div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">Alex Jenkins</span>
                    <span className="text-[9px] text-zinc-500">Grade 5 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Checked Out
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-1">3:05 PM (Gate 1)</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-zinc-950 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-white">LM</div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">Luke Miller</span>
                    <span className="text-[9px] text-zinc-500">Grade 12 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Checked Out
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-1">3:02 PM (Gate 1)</span>
                </div>
              </div>

              <div className="flex justify-between items-center p-3 bg-zinc-950 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-white">SH</div>
                  <div>
                    <span className="text-xs font-semibold text-zinc-200 block">Sophie Harris</span>
                    <span className="text-[9px] text-zinc-500">Grade 8 Student</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded-full">
                    Checked In
                  </span>
                  <span className="text-[9px] text-zinc-500 block mt-1">8:14 AM (Gate 2)</span>
                </div>
              </div>
            </div>

            {/* Safety alert message description */}
            <div className="flex gap-3 bg-zinc-950/80 p-3.5 rounded-xl border border-zinc-800/50 items-start">
              <div className="p-1 rounded-md bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <Bell className="h-4 w-4" />
              </div>
              <p className="text-[10px] text-zinc-400 leading-relaxed">
                Parents receive push notifications and SMS instantly when their children check-in at institute or tap their cards to board buses.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
