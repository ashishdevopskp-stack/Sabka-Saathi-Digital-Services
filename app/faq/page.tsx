"use client";

import { useEffect, useState, useRef, useCallback } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

  .ph-wrap {
    position: relative; overflow: hidden;
    padding: clamp(6.5rem, 14vw, 10.5rem) clamp(1.25rem, 4vw, 3rem) clamp(3.5rem, 7vw, 5.5rem);
    background: #f2f2f4;
    display: flex; flex-direction: column; align-items: center; text-align: center;
  }

  .ph-grain {
    position: absolute; inset: 0; z-index: 0; pointer-events: none; opacity: 0.02;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.78' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    animation: phGrain 0.26s steps(1) infinite;
  }
  @keyframes phGrain {
    0%   { background-position:   0px   0px; }
    25%  { background-position: -30px  12px; }
    50%  { background-position:  14px -22px; }
    75%  { background-position: -18px  28px; }
    100% { background-position:   0px   0px; }
  }

  .ph-glow-a {
    position: absolute; top: -18%; left: -10%; z-index: 0; pointer-events: none;
    width: 38vw; height: 38vw; max-width: 520px; max-height: 520px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,107,53,0.10) 0%, rgba(232,68,90,0.04) 48%, transparent 72%);
    filter: blur(8px);
  }
  .ph-glow-b {
    position: absolute; bottom: -22%; right: -12%; z-index: 0; pointer-events: none;
    width: 32vw; height: 32vw; max-width: 460px; max-height: 460px; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,140,66,0.08) 0%, transparent 70%);
    filter: blur(8px);
  }

  .ph-content { position: relative; z-index: 1; max-width: 760px; display: flex; flex-direction: column; align-items: center; }

  /* ── Badge ──────────────────────────────────────────────── */
  .ph-badge {
    position: relative;
    display: inline-flex; align-items: center; gap: 0.62rem;
    border-radius: 999px;
    padding: 0.46rem 1.35rem 0.46rem 0.92rem;
    background: rgba(255,255,255,0.76);
    backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
    color: rgba(0,0,0,0.58);
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(0.7rem, 1vw, 0.82rem); font-weight: 400;
    letter-spacing: 0.015em;
    margin-bottom: clamp(1.3rem, 2.6vw, 1.8rem);
    cursor: default;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04);
    opacity: 0; transform: translateY(14px) scale(0.92);
    transition: opacity 0.78s ease, transform 0.78s cubic-bezier(0.16,1,0.3,1);
  }
  .ph-badge.show { opacity: 1; transform: translateY(0) scale(1); }
  .ph-badge::before {
    content: ''; position: absolute; inset: -1px;
    border-radius: 999px; padding: 1.5px;
    background: linear-gradient(135deg,
      rgba(255,255,255,0.80)  0%,
      rgba(255,107,53,0.55)  28%,
      rgba(232,68,90,0.20)   52%,
      rgba(232,68,90,0.60)   76%,
      rgba(255,255,255,0.72) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
    pointer-events: none;
  }
  .ph-badge-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #ff6b35; box-shadow: 0 0 8px rgba(255,107,53,0.70);
    flex-shrink: 0;
    animation: phDotPulse 2.4s ease-in-out infinite 1s;
  }
  @keyframes phDotPulse {
    0%,100% { box-shadow: 0 0 8px rgba(255,107,53,.7),  0 0 0 0 rgba(255,107,53,.3); }
    50%     { box-shadow: 0 0 14px rgba(255,107,53,.9), 0 0 0 5px rgba(255,107,53,0); }
  }

  /* ── Headline ───────────────────────────────────────────── */
  .ph-title-wrap {
    perspective: 800px;
    display: flex; flex-wrap: wrap; justify-content: center;
    gap: 0.2em 0.28em; max-width: 760px;
    margin-bottom: clamp(1.2rem, 2.4vw, 1.6rem);
  }
  .ph-title-word {
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    font-size: clamp(2.1rem, 5.4vw, 4.2rem);
    color: #1d1d1f; letter-spacing: -0.02em; line-height: 1.1;
    display: inline-block;
    opacity: 0; transform: translateY(40px) rotateX(-20deg);
    transform-origin: 50% 100%;
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .ph-title-word.show { opacity: 1; transform: translateY(0) rotateX(0deg); }
  .ph-title-word.accent {
    background: linear-gradient(135deg, #ff8c42 0%, #e8445a 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Subtitle ───────────────────────────────────────────── */
  .ph-sub-wrap {
    max-width: 600px;
    opacity: 0; transform: translateY(18px);
    transition: opacity 0.85s ease, transform 0.85s ease;
  }
  .ph-sub-wrap.show { opacity: 1; transform: translateY(0); }
  .ph-sub {
    font-family: 'DM Sans', sans-serif; font-weight: 400;
    font-size: clamp(0.9rem, 1.28vw, 1.04rem);
    color: rgba(29,29,31,0.52); line-height: 1.7;
  }

  /* ── Trust points ───────────────────────────────────────── */
  .ph-trust {
    display: flex; align-items: center; gap: 1.2rem; flex-wrap: wrap; justify-content: center;
    margin-top: clamp(1.3rem, 2.6vw, 1.8rem);
    opacity: 0; transform: translateY(12px);
    transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
  }
  .ph-trust.show { opacity: 1; transform: translateY(0); }
  .ph-trust-chip {
    display: inline-flex; align-items: center; gap: 0.42rem;
    font-family: 'DM Sans', sans-serif; font-weight: 400;
    font-size: clamp(0.66rem, 0.92vw, 0.74rem);
    color: rgba(0,0,0,0.44); letter-spacing: 0.01em;
  }
  .ph-trust-dot {
    width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0;
    background: linear-gradient(135deg, #ff8c42 0%, #e8445a 100%);
  }
  .ph-trust-sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(0,0,0,0.16); }

  /* ── CTA ────────────────────────────────────────────────── */
  .ph-cta-wrap {
    margin-top: clamp(1.8rem, 3.6vw, 2.4rem);
    opacity: 0; transform: translateY(22px);
    transition: opacity 0.85s ease 0.12s, transform 0.85s ease 0.12s;
  }
  .ph-cta-wrap.show { opacity: 1; transform: translateY(0); }

  .ph-btn {
    position: relative; overflow: hidden;
    font-family: 'DM Sans', sans-serif; font-weight: 500;
    font-size: clamp(0.84rem, 1.1vw, 0.93rem);
    padding: 0.88rem 2.3rem; border-radius: 14px;
    text-decoration: none; cursor: pointer;
    display: inline-flex; align-items: center; justify-content: center; gap: 0.45rem;
    color: #fff;
    background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 38%, #e8445a 72%, #c0392b 100%);
    box-shadow:
      0 2px 12px rgba(232,68,90,0.28),
      0 1px 3px  rgba(0,0,0,0.10),
      inset 0 1px 0 rgba(255,255,255,0.22);
    transition: transform 0.38s cubic-bezier(0.25,1,0.5,1), box-shadow 0.38s ease;
  }
  .ph-btn:active { transform: scale(0.96) translateY(1px) !important; }
  .ph-btn:hover {
    transform: translateY(-2px) scale(1.025);
    box-shadow:
      0 8px 28px rgba(232,68,90,0.34),
      0 2px 8px  rgba(0,0,0,0.12),
      inset 0 1px 0 rgba(255,255,255,0.26);
  }
  .ph-btn-inner {
    position: relative; z-index: 2; pointer-events: none;
    transition: transform 0.38s cubic-bezier(0.25,1,0.5,1);
  }
  .ph-btn::before {
    content: ''; position: absolute; inset: 0; z-index: 1; border-radius: 14px;
    background: linear-gradient(160deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.00) 52%);
    pointer-events: none; transition: opacity 0.35s ease;
  }
  .ph-btn:hover::before { opacity: 0.72; }
  .ph-btn-ripple {
    position: absolute; border-radius: 50%; background: rgba(255,255,255,0.22);
    transform: scale(0); pointer-events: none;
    animation: phBtnRipple 0.52s ease-out forwards;
  }
  @keyframes phBtnRipple { to { transform: scale(4); opacity: 0; } }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

/* ── Timing (ms) — fires once on mount, no splash screen on inner pages ── */
const T = {
  BADGE: 80,
  TITLE_START: 200,
  TITLE_STEP: 100,
};

export interface PageHeroProps {
  badge: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  type?: string;
  trustPoints?: string[];
  ctaText?: string;
  ctaHref?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  subtitle,
  trustPoints = [],
  ctaText,
  ctaHref,
}: PageHeroProps) {
  const allWords = titleHighlight ? [...title.split(" "), titleHighlight] : title.split(" ");
  const accentIndex = titleHighlight ? allWords.length - 1 : -1;

  const [badgeShow, setBadgeShow] = useState(false);
  const [titleWords, setTitleWords] = useState<boolean[]>(allWords.map(() => false));
  const [subShow, setSubShow] = useState(false);
  const [trustShow, setTrustShow] = useState(false);
  const [ctaShow, setCtaShow] = useState(false);

  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const at = (fn: () => void, ms: number) => setTimeout(fn, ms);
    const titleEnd = T.TITLE_START + allWords.length * T.TITLE_STEP;

    const ids = [
      at(() => setBadgeShow(true), T.BADGE),
      ...allWords.map((_, i) =>
        at(() => setTitleWords(prev => { const next = [...prev]; next[i] = true; return next; }),
          T.TITLE_START + i * T.TITLE_STEP)
      ),
      at(() => setSubShow(true), titleEnd + 60),
      at(() => setTrustShow(true), titleEnd + 160),
      at(() => setCtaShow(true), titleEnd + 260),
    ];
    return () => ids.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── Magnetic + ripple CTA, same behaviour as Hero buttons ── */
  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;
    const inner = btn.querySelector<HTMLElement>(".ph-btn-inner");

    const onMove = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width / 2) * 0.30;
      const dy = (e.clientY - r.top - r.height / 2) * 0.30;
      btn.style.transform = `translate(${dx}px,${dy}px) scale(1.04)`;
      if (inner) inner.style.transform = `translate(${dx * 0.5}px,${dy * 0.5}px)`;
    };
    const onLeave = () => {
      btn.style.transform = "";
      if (inner) inner.style.transform = "";
    };
    const onClick = (e: MouseEvent) => {
      const r = btn.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ph-btn-ripple";
      const size = Math.max(r.width, r.height);
      ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px`;
      btn.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    };

    btn.addEventListener("mousemove", onMove);
    btn.addEventListener("mouseleave", onLeave);
    btn.addEventListener("click", onClick);
    return () => {
      btn.removeEventListener("mousemove", onMove);
      btn.removeEventListener("mouseleave", onLeave);
      btn.removeEventListener("click", onClick);
    };
  }, [ctaShow]);

  const useTrustDot = useCallback(() => <span className="ph-trust-dot" />, []);

  return (
    <header className="ph-wrap">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="ph-grain" aria-hidden="true" />
      <div className="ph-glow-a" aria-hidden="true" />
      <div className="ph-glow-b" aria-hidden="true" />

      <div className="ph-content">
        {/* Badge */}
        <div className={`ph-badge${badgeShow ? " show" : ""}`}>
          <span className="ph-badge-dot" />
          <span>{badge}</span>
        </div>

        {/* Headline */}
        <div className="ph-title-wrap" role="heading" aria-level={1}>
          {allWords.map((word, i) => (
            <span
              key={i}
              className={`ph-title-word${titleWords[i] ? " show" : ""}${i === accentIndex ? " accent" : ""}`}
              style={{ transitionDelay: `${i * 0.05}s` }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Subtitle */}
        <div className={`ph-sub-wrap${subShow ? " show" : ""}`}>
          <p className="ph-sub">{subtitle}</p>
        </div>

        {/* Trust points */}
        {trustPoints.length > 0 && (
          <div className={`ph-trust${trustShow ? " show" : ""}`} aria-hidden="true">
            {trustPoints.map((point, i) => (
              <span key={i} style={{ display: "contents" }}>
                {i > 0 && <span className="ph-trust-sep" />}
                <span className="ph-trust-chip">
                  {useTrustDot()}
                  {point}
                </span>
              </span>
            ))}
          </div>
        )}

        {/* CTA */}
        {ctaText && ctaHref && (
          <div className={`ph-cta-wrap${ctaShow ? " show" : ""}`}>
            <a href={ctaHref} className="ph-btn" ref={btnRef}>
              <span className="ph-btn-inner">{ctaText}</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}