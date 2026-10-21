import React from "react";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

/**
 * BentoCard primitive
 * Modular, elevated card surface adhering strictly to the EDBA .neu-card design tokens.
 * Restricted to translateY(-2px) and shadow bloom on hover without layout shifting.
 */
export const BentoCard: React.FC<BentoCardProps> = ({
  children,
  className = "",
  hoverable = true,
  ...props
}) => {
  return (
    <div
      className={`relative bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 p-6 sm:p-8 shadow-[0_1px_3px_0_rgba(15,23,42,0.03),0_10px_25px_-5px_rgba(15,23,42,0.05)] ${
        hoverable
          ? "hover:border-blue-200 hover:shadow-[0_4px_6px_-1px_rgba(15,23,42,0.04),0_18px_36px_-6px_rgba(45,118,196,0.1)] hover:-translate-y-0.5 transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default BentoCard;
