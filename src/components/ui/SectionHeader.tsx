import React from "react";

export interface SectionHeaderProps {
  eyebrow?: string;
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  dark?: boolean;
}

/**
 * SectionHeader primitive
 * Standardized eyebrow badge pill (with optional icon), H2 headline, and contextual lead paragraph.
 * Strictly adheres to Phase 1 typography scale:
 * - H2: text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight
 * - Lead: text-base sm:text-lg text-slate-600 (or text-slate-400 on dark)
 * - Header spacing: mb-12 sm:mb-16
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  icon: Icon,
  title,
  lead,
  align = "center",
  className = "",
  dark = false,
}) => {
  const isCenter = align === "center";

  return (
    <div
      className={`mb-12 sm:mb-16 smart-display-tight:mb-8 ${
        isCenter ? "text-center max-w-3xl mx-auto" : "text-left max-w-2xl"
      } ${className}`}
    >
      {eyebrow && (
        <div className="mb-3 sm:mb-4">
          <span
            className={`text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-xs ${
              dark
                ? "text-blue-400 bg-blue-950/60 border border-blue-800/60"
                : "text-blue-700 bg-blue-50/90 border border-blue-200/70"
            }`}
          >
            {Icon && <Icon className="h-3.5 w-3.5 flex-shrink-0" aria-hidden={true} />}
            <span>{eyebrow}</span>
          </span>
        </div>
      )}

      <h2
        className={`font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mt-1 mb-3 sm:mb-4 ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={`text-base sm:text-lg leading-relaxed font-normal ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
