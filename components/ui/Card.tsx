import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/60 bg-white/60 p-6 shadow-[0_15px_45px_rgba(46,89,180,0.12)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
