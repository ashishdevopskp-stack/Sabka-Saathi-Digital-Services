"use client";

import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600&display=swap');

  .lq-btn {
    position: relative; overflow: hidden;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    display: inline-flex; align-items: center; justify-content: center;
    border: none; cursor: pointer; white-space: nowrap;
    transition: transform 0.35s cubic-bezier(0.25,1,0.5,1), box-shadow 0.35s ease, background 0.3s ease, color 0.3s ease;
  }
  .lq-btn:active { transform: scale(0.97); }
  .lq-btn:disabled { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
  .lq-btn:focus-visible {
    outline: 2px solid #e8445a; outline-offset: 2px;
  }

  /* sizes */
  .lq-btn.size-sm { font-size: 0.8rem; padding: 0.55rem 1.1rem; border-radius: 10px; gap: 0.35rem; }
  .lq-btn.size-md { font-size: 0.88rem; padding: 0.8rem 1.6rem; border-radius: 12px; gap: 0.4rem; }
  .lq-btn.size-lg { font-size: 0.96rem; padding: 1rem 2.1rem; border-radius: 14px; gap: 0.45rem; }

  /* primary — liquid gradient */
  .lq-btn.primary {
    color: #fff;
    background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 38%, #e8445a 72%, #c0392b 100%);
    box-shadow: 0 2px 12px rgba(232,68,90,0.26), inset 0 1px 0 rgba(255,255,255,0.22);
  }
  .lq-btn.primary:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 8px 24px rgba(232,68,90,0.32), inset 0 1px 0 rgba(255,255,255,0.26);
  }

  /* secondary — glass */
  .lq-btn.secondary {
    color: #1d1d1f;
    background: rgba(255,255,255,0.72);
    backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    border: 1px solid rgba(0,0,0,0.06);
  }
  .lq-btn.secondary:hover:not(:disabled) {
    transform: translateY(-1px);
    background: rgba(255,255,255,0.9);
    box-shadow: 0 6px 18px rgba(255,107,53,0.12);
  }

  /* tertiary — plain text, Apple link style */
  .lq-btn.tertiary {
    color: #e8445a; background: transparent; padding-inline: 0.2rem;
  }
  .lq-btn.tertiary:hover:not(:disabled) { color: #c0392b; }

  /* dark — Apple-style solid black */
  .lq-btn.dark {
    color: #fff; background: #1d1d1f;
    box-shadow: 0 2px 10px rgba(0,0,0,0.16);
  }
  .lq-btn.dark:hover:not(:disabled) {
    background: #000;
    transform: translateY(-1px);
  }

  .lq-btn-ripple {
    position: absolute; border-radius: 50%; transform: scale(0);
    background: rgba(255,255,255,0.3); pointer-events: none;
    animation: lqRipple 0.5s ease-out forwards;
  }
  @keyframes lqRipple { to { transform: scale(3.4); opacity: 0; } }

  @media (prefers-reduced-motion: reduce) {
    .lq-btn { transition: none; }
    .lq-btn-ripple { animation: none; display: none; }
  }
`;

type Variant = "primary" | "secondary" | "tertiary" | "dark";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

function ripple(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const dot = document.createElement("span");
  dot.className = "lq-btn-ripple";
  dot.style.width = dot.style.height = `${size}px`;
  dot.style.left = `${e.clientX - rect.left - size / 2}px`;
  dot.style.top = `${e.clientY - rect.top - size / 2}px`;
  el.appendChild(dot);
  dot.addEventListener("animationend", () => dot.remove());
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, onClick, ...rest }, ref) => (
    <button
      ref={ref}
      className={`lq-btn ${variant} size-${size} ${className}`}
      onClick={(e) => {
        if (variant !== "tertiary") ripple(e);
        onClick?.(e);
      }}
      {...rest}
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {children}
    </button>
  )
);
Button.displayName = "Button";

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ variant = "primary", size = "md", className = "", children, onClick, ...rest }, ref) => (
    <a
      ref={ref}
      className={`lq-btn ${variant} size-${size} ${className}`}
      onClick={(e) => {
        if (variant !== "tertiary") ripple(e);
        onClick?.(e);
      }}
      {...rest}
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      {children}
    </a>
  )
);
ButtonLink.displayName = "ButtonLink";