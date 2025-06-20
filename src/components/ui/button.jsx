// src/components/ui/button.jsx
import React from "react";
import { cn } from "../../lib/utils";

export const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  outline: "border border-white/30 bg-transparent text-white hover:bg-white/10",
  ghost: "bg-transparent text-white hover:bg-white/5",
};

export const Button = React.forwardRef(
  (
    { className = "", variant = "default", size = "md", children, ...props },
    ref
  ) => {
    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          buttonVariants[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
