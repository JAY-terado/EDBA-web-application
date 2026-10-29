import React from "react";
import { motion } from "framer-motion";
import { Bell, MessageSquare, CalendarCheck, CreditCard, Users, ArrowRight } from "lucide-react";
import { TabletMockup } from "./TabletMockup";

const communicationFeatures = [
  {
    icon: Bell,
    title: "Announcements & Notices",
    desc: "Send institutional updates, circulars, and announcements directly to parents through the platform.",
    color: "bg-blue-600",
  },
  {
    icon: MessageSquare,
    title: "Direct Messages",
    desc: "Facilitate two-way communication between educators, administrators, and parents.",
    color: "bg-indigo-600",
  },
  {
    icon: CalendarCheck,
    title: "Attendance Updates",
    desc: "Keep parents informed about their child's daily attendance status and leave requests.",
    color: "bg-cyan-600",
  },
  {
    icon: CreditCard,
    title: "Fees & Payment Visibility",
    desc: "Parents can view fee details, payment history, and pending amounts at any time.",
    color: "bg-teal-600",
  },
];

export default function ParentCommunicationPlatform() {
  return (
    <section
      id="parent-communication"
      className="py-20 sm:py-28 bg-white border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-14 items-start lg:items-center">

          {/* Top on Mobile / Left Row 1 on Desktop: Header & Intro text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:col-span-6 lg:col-start-1 lg:row-start-1 flex flex-col items-center lg:items-start"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-3 sm:mb-4 w-fit shadow-2xs self-center lg:self-start">
              <Users className="w-3 h-3 text-blue-600" aria-hidden="true" />
              Parent &amp; Institutional Communication
            </span>

            <h2 className="font-display font-extrabold text-2xl sm:text-4xl lg:text-[42px] leading-[1.15] text-slate-900 tracking-tight mb-4 sm:mb-5 text-center lg:text-left">
              Bringing Parents and Educational{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Institutions Closer Together
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              EDBA helps strengthen the connection between educational institutions and families by making important information and updates easier to share and access. Through centralized communication, parents can stay informed about their children's academic activities, attendance, announcements, and other important institutional updates.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-3 sm:mb-4 font-normal">
              With integrated features for Announcements, Messages, Attendance, Academics, and Fees &amp; Payments, EDBA supports transparent communication and helps parents remain actively involved in their children's educational journey.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              Designed for schools, colleges, and other educational institutions, EDBA helps make communication simpler, more accessible, and more effective.
            </p>
          </motion.div>

          {/* Middle on Mobile (under 'more effective.') / Right Column (spanning rows) on Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="my-3 lg:my-0 lg:col-span-6 lg:col-start-7 lg:row-start-1 lg:row-span-2 relative flex flex-col items-center justify-center w-full lg:self-center"
          >
            <TabletMockup />
          </motion.div>

          {/* Bottom on Mobile / Left Row 2 on Desktop: Features & CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="w-full lg:col-span-6 lg:col-start-1 lg:row-start-2 flex flex-col"
          >
            {/* Feature cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {communicationFeatures.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-200">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center flex-shrink-0 ${f.color}`}>
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800 mb-0.5">{f.title}</p>
                      <p className="text-xs text-slate-500 font-normal leading-snug">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-demo-modal"))}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer group active:scale-95 mx-auto lg:mx-0 text-center"
              >
                <span>See Parent Communication in Action</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 flex-shrink-0" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
