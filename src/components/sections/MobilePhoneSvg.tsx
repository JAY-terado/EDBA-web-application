import React from "react";
import phoneScreenImg from "@/assets/screens/s4img4-upscaled.webp";

interface MobilePhoneSvgProps {
  className?: string;
}

export const MobilePhoneSvg: React.FC<MobilePhoneSvgProps> = ({ className = "" }) => {
  return (
    <div
      className={`relative select-none pointer-events-none rounded-[32px] sm:rounded-[36px] bg-[#18191b] p-[6px] sm:p-[7px] shadow-[0_32px_64px_-16px_rgba(15,23,42,0.48),0_12px_28px_-8px_rgba(37,99,235,0.28)] border border-[#2e3036] box-border ${className}`}
    >
      {/* Metallic Inner Highlight Rim */}
      <div className="absolute inset-0 rounded-[31px] sm:rounded-[35px] border border-white/20 pointer-events-none z-20" />

      {/* Hardware Side Buttons */}
      <div className="absolute -left-[3px] top-12 sm:top-14 w-[3px] h-4 sm:h-5 bg-[#2a2b2e] rounded-l-sm" />
      <div className="absolute -left-[3px] top-18 sm:top-22 w-[3px] h-7 sm:h-8 bg-[#2a2b2e] rounded-l-sm" />
      <div className="absolute -left-[3px] top-28 sm:top-33 w-[3px] h-7 sm:h-8 bg-[#2a2b2e] rounded-l-sm" />
      <div className="absolute -right-[3px] top-20 sm:top-24 w-[3px] h-10 sm:h-12 bg-[#2a2b2e] rounded-r-sm" />

      {/* Screen Area with Authentic 4K App Screen */}
      <div className="relative rounded-[26px] sm:rounded-[29px] overflow-hidden bg-black aspect-[922/2048]">
        <img
          src={phoneScreenImg}
          alt="EDBA Student App"
          className="w-full h-full object-cover block"
          loading="eager"
          decoding="sync"
        />

        {/* Specular Glass Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 58%)",
          }}
        />
      </div>
    </div>
  );
};

export default MobilePhoneSvg;
