"use client";

import React, { useEffect, useState } from "react";

export default function MobileApps() {
  const [downloadLink, setDownloadLink] = useState("https://apps.apple.com/in/app/edba/id6747445951");

  useEffect(() => {
    if (typeof window !== "undefined" && navigator) {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      if (/android/i.test(userAgent)) {
        setDownloadLink("https://play.google.com/store/apps/details?id=com.edba.app&hl=en_IN&pli=1");
      } else {
        // Default to iOS App Store
        setDownloadLink("https://apps.apple.com/in/app/edba/id6747445951");
      }
    }
  }, []);

  return (
    <section id="mobile-apps" className="py-24 bg-[#f1f3f6] border-b border-zinc-200/50">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4 inline-block">
            On the Go
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 mt-3 mb-6">
            Mobile Apps for Everyone, Should try
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed font-normal">
            EDBA delivers tailored, native iOS and Android experiences, custom-built for every stakeholder in the institute ecosystem.
          </p>
        </div>

        {/* Download App Content & Button */}
        <div className="flex flex-col items-center justify-center max-w-lg mx-auto text-center">
          <div className="neu-card p-8 rounded-2xl w-full flex flex-col items-center gap-6">
            <div className="h-14 flex items-center justify-center bg-white border border-zinc-200/40 px-5 py-2.5 rounded-2xl shadow-inner shadow-zinc-100/50">
              <img src="/logo.png" alt="EDBA Logo" className="h-6 w-auto" />
            </div>

            <div>
              <h3 className="font-display font-bold text-xl text-zinc-950 mb-2">Get EDBA on Your Device</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Experience EDBA's AI-Powered ecosystem directly on your mobile device. Click below to download the application.
              </p>
            </div>

            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 transition-all rounded-xl shadow-lg shadow-blue-500/15 hover:shadow-xl cursor-pointer"
            >
              Download Application
            </a>
          </div>
        </div>

        {/* Commented out original 4 screens mockups code as requested
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="p-6 neu-card rounded-2xl flex flex-col items-center">
            <div className="mb-6 text-center">
              <span className="text-xs text-zinc-400 font-bold uppercase tracking-wider block mb-1">PORTAL FOR Admins</span>
            </div>
            <div className="w-full max-w-[210px] aspect-[9/19] bg-zinc-950 border-[6px] border-zinc-800 rounded-[2.5rem] p-1.5 shadow-xl relative flex flex-col">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900 relative shadow-inner">
                <img src="/IMG_3474.PNG" className="w-full h-full object-cover object-top" />
              </div>
            </div>
          </div>
        </div>
        */}

      </div>
    </section>
  );
}
