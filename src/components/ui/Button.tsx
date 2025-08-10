// ui/Button.tsx
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  icon?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  children,
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center gap-2 px-6 py-3 font-semibold transition-all duration-200 text-sm"; // removed rounded-lg

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-blue-600 border border-blue-600 hover:bg-gray-50",
    ghost:
      "bg-transparent text-white border border-white hover:bg-white hover:text-blue-600",
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <span>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
