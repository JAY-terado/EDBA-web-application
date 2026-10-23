import React, { useState } from "react";
import { motion } from "framer-motion";
import { Radio, MessageSquare, Play, Video, Users, BookOpen, ArrowRight } from "lucide-react";

export default function LiveClasses() {
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    {
      icon: Video,
      title: "Live Streaming Sessions",
      desc: "Teachers stream live classes directly through the platform with HD quality.",
    },
    {
      icon: MessageSquare,
      title: "Interactive Live Chat",
      desc: "Students and parents join, interact, and communicate through real-time chat.",
    },
    {
      icon: BookOpen,
      title: "Recorded Classroom Highlights",
      desc: "Recorded sessions and short learning videos help students catch up on missed lessons.",
    },
    {
      icon: Users,
      title: "Parent Participation",
      desc: "Parents can join live classes, stay informed, and follow their child's learning journey.",
    },
  ];

  return (
    <section id="live-classes" className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Video Player Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Main Video Player Card */}
            <div className="relative bg-slate-950 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/40 border border-slate-800/60">
              {/* Video Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative flex items-center justify-center">
                {/* Grid dot overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
                
                {/* Camera feed simulation */}
                <div className="absolute top-4 right-4 w-24 h-16 bg-slate-800 rounded-lg border border-slate-700 overflow-hidden flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">T</span>
                  </div>
                </div>

                {/* LIVE badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-red-600 rounded-full">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  <span className="text-white text-xs font-bold uppercase tracking-wide">Live</span>
                </div>

                {/* Participant count */}
                <div className="absolute top-4 left-20 flex items-center gap-1.5 px-3 py-1 bg-slate-800/80 backdrop-blur-sm rounded-full border border-slate-700">
                  <Users className="w-3 h-3 text-slate-300" />
                  <span className="text-slate-300 text-xs font-medium">147 watching</span>
                </div>

                {/* Center play button */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="relative z-10 h-16 w-16 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer group"
                  aria-label="Play live class"
                >
                  <Play className="h-7 w-7 text-white fill-white ml-1 group-hover:scale-110 transition-transform" />
                </button>

                {/* Content label overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-950/90 to-transparent">
                  <p className="text-white text-sm font-semibold">Introduction to Organic Chemistry</p>
                  <p className="text-slate-400 text-xs mt-0.5">Prof. Ananya Sharma • Class XI Science</p>
                </div>
              </div>

              {/* Bottom Controls Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-t border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="h-7 w-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">A</div>
                  <div>
                    <p className="text-white text-xs font-semibold">Prof. Ananya Sharma</p>
                    <p className="text-teal-400 text-xs">Presenting</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-2.5 py-1 bg-blue-600/20 border border-blue-500/30 rounded-md">
                    <span className="text-blue-400 text-xs font-semibold">Chat Active</span>
                  </div>
                  <div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center">
                    <Radio className="h-4 w-4 text-teal-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Live Chat Bubble */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 right-0 sm:-right-4 w-56 sm:w-64 bg-white rounded-2xl shadow-xl border border-slate-200/80 p-3 sm:p-4 z-10"
            >
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
                <MessageSquare className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">Live Chat</span>
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="space-y-2">
                {[
                  { initials: "RP", name: "Rahul P.", msg: "Can you explain the last equation again?" },
                  { initials: "SM", name: "Sneha M.", msg: "Got it! Thank you 🙏" },
                  { initials: "AP", name: "Amit's Parent", msg: "Very clear explanation!" },
                ].map((chat, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 text-[9px] font-bold flex items-center justify-center flex-shrink-0">{chat.initials}</div>
                    <div>
                      <span className="text-blue-700 text-[10px] font-semibold">{chat.name}: </span>
                      <span className="text-slate-600 text-[10px]">{chat.msg}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Viewers badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-200 px-3.5 py-2.5 flex items-center gap-2"
            >
              <div className="flex -space-x-1.5">
                {["#2D76C4","#06b6d4","#8b5cf6"].map((c,i) => (
                  <div key={i} className="h-5 w-5 rounded-full border-2 border-white" style={{background: c}} />
                ))}
              </div>
              <span className="text-xs font-bold text-slate-700">+147 joined</span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-5 w-fit shadow-xs">
              <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" aria-hidden="true" />
              Live Classroom
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-5">
              Live Classes &amp; <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-sky-600 to-cyan-500">
                Interactive Learning
              </span>
            </h2>

            <p className="text-slate-700 font-semibold text-lg leading-snug mb-3">
              Bring Teachers, Students, and Parents Together in Real Time
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              Conduct live classes through the EDBA platform, allowing teachers to connect with students and parents through an interactive digital learning experience.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-4 font-normal">
              Teachers can stream live sessions, while students and parents can join, interact, and communicate through live chat. Important updates, discussions, and information can be highlighted and easily accessed when needed.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-8 font-normal">
              Recorded classroom highlights and short learning videos can also be made available alongside the live session, helping students quickly catch up on missed lessons and stay connected with their learning journey.
            </p>

            {/* Feature pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                    <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 mb-0.5">{feat.title}</p>
                      <p className="text-xs text-slate-500 font-normal leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer w-fit group"
            >
              <span>See Live Classroom in Action</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
