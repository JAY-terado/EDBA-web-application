import React from "react";

export interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

/**
 * GradientText primitive
 * Applies accessible, brand-aligned linear text gradients without layout shifts.
 */
export const GradientText: React.FC<GradientTextProps> = ({
  children,
  gradient = "from-blue-600 via-indigo-600 to-cyan-500",
  className = "",
  ...props
}) => {
  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${gradient} inline-block ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default GradientText;
