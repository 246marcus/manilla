// ui/Button.tsx
"use client";

import React from "react";

interface ButtonProps extends React.PropsWithChildren {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant = "primary",
  icon,
  children,
  className: extraClassName, // rename to avoid collision
}) => {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 text-sm";

  const variants = {
    primary: "text-white hover:opacity-90 transform hover:scale-105",
    secondary:
      "bg-white text-blue-600 border border-white hover:bg-gray-50 hover:scale-105 transform",
    ghost:
      "bg-transparent text-white border border-white hover:bg-white hover:text-blue-600 transform hover:scale-105",
  };

  const getStyle = () => {
    if (variant === "primary") {
      return { background: "#281AC9" };
    }
    return {};
  };

  // merge base styles, variant styles, and any extra classes from props
  const className = `${baseStyle} ${variants[variant]} ${extraClassName || ""}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {label || children}
    </>
  );

  return href ? (
    <a href={href} className={className} style={getStyle()}>
      {content}
    </a>
  ) : (
    <button onClick={onClick} className={className} style={getStyle()}>
      {content}
    </button>
  );
};

export default Button;
