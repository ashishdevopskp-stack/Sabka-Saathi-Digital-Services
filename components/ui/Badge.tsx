import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 shadow-sm backdrop-blur",
        className
      )}
    >
      <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
      {children}
    </span>
  );
}
