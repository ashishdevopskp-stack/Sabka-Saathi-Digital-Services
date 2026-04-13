"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
  size?: "md" | "lg";
} & HTMLMotionProps<"button">;

const baseClass =
  "inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

const sizeClass = {
  md: "px-6 py-3 text-sm",
  lg: "px-10 py-5 text-lg",
};

const variantClass = {
  primary:
    "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_10px_30px_rgba(79,140,255,0.35)] hover:shadow-[0_15px_35px_rgba(79,140,255,0.45)]",
  outline:
    "border border-slate-300/80 bg-white/70 text-slate-800 hover:border-primary/40 hover:bg-white",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseClass, variantClass[variant], sizeClass[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
