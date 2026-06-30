import { cn } from "@/lib/cn";

const styles = `
  .lq-card {
    position: relative;
    background: rgba(255,255,255,0.66);
    backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 20px 50px rgba(29,29,31,0.09), 0 4px 14px rgba(232,68,90,0.06);
    transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s ease, background 0.4s ease;
  }
  .lq-card::before {
    content: ''; position: absolute; inset: -1px; z-index: 0; border-radius: inherit; padding: 1px;
    background: linear-gradient(140deg,
      rgba(255,255,255,0.85) 0%,
      rgba(255,160,90,0.36) 24%,
      rgba(240,80,80,0.10) 50%,
      rgba(232,68,90,0.32) 78%,
      rgba(255,255,255,0.7) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none;
  }
  .lq-card > * { position: relative; z-index: 1; }

  .lq-card.hover:hover {
    transform: translateY(-4px);
    background: rgba(255,255,255,0.82);
    box-shadow: 0 26px 60px rgba(29,29,31,0.12), 0 6px 18px rgba(232,68,90,0.10);
  }

  @media (prefers-reduced-motion: reduce) {
    .lq-card { transition: none; }
  }
`;

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Lift + brighten on hover. Off by default for static content cards. */
  hoverable?: boolean;
};

export function Card({ children, className, hoverable = false }: CardProps) {
  return (
    <div
      className={cn(
        "lq-card rounded-2xl p-6",
        hoverable && "hover",
        className
      )}
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {children}
    </div>
  );
}