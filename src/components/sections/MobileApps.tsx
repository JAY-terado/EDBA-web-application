import React, { useSyncExternalStore } from "react";
import { Smartphone, Download, ArrowUpRight } from "lucide-react";

const emptySubscribe = () => () => {};

export const MobileApps: React.FC = () => {
  const isAndroid = useSyncExternalStore(
    emptySubscribe,
    () => typeof navigator !== "undefined" && /android/i.test(navigator.userAgent || ""),
    () => false
  );

  const iosUrl = "https://apps.apple.com/in/app/edba/id6747445951";
  const androidUrl = "https://play.google.com/store/apps/details?id=com.edba.app&hl=en_IN&pli=1";

  return (
    <section id="mobile-apps" className="py-20 sm:py-28 smart-display-tight:py-12 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 smart-display-tight:mb-8">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200/70 mb-4 shadow-xs">
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            On the Go
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight text-slate-900 mt-2 mb-4 tracking-tight">
            Tailored Mobile Experiences for <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Every Role</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            EDBA delivers tailored, native iOS and Android experiences, custom-built for administrators, educators, students, and parents.
          </p>
        </div>

        {/* Download App Content & Buttons */}
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto text-center">
          <div className="bg-white border border-slate-200/90 hover:border-blue-300 p-8 sm:p-10 rounded-3xl w-full flex flex-col items-center gap-6 shadow-[0_12px_36px_-6px_rgba(15,23,42,0.06)] transition-all duration-300">
            <div className="h-16 w-16 flex items-center justify-center bg-blue-50 border border-blue-200/70 rounded-2xl shadow-sm text-blue-600">
              <Smartphone className="h-8 w-8" aria-hidden="true" />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Get EDBA on Your Mobile Device</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-normal">
                Experience EDBA&apos;s intelligent ecosystem directly in your pocket. Real-time notifications, attendance roll-calls, exam schedules, and direct campus messaging.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              <a
                href={iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  !isAndroid
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Apple App Store</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
              </a>

              <a
                href={androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isAndroid
                    ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg"
                    : "bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200"
                }`}
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Google Play Store</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
              </a>
            </div>

            <span className="text-xs text-slate-400 font-medium">
              Compatible with iOS 15+ and Android 9+
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileApps;
