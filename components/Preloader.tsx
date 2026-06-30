"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');

  .pl-wrap {
    position: fixed; inset: 0; z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    background: #f2f2f4;
    overflow: hidden;
  }

  /* ambient liquid blobs drifting behind the loader */
  .pl-blob {
    position: absolute; border-radius: 50%;
    filter: blur(60px); pointer-events: none;
  }
  .pl-blob.a {
    width: 380px; height: 380px;
    background: radial-gradient(circle, rgba(255,140,66,0.35), transparent 70%);
    top: -8%; left: -6%;
    animation: plDrift 7s ease-in-out infinite;
  }
  .pl-blob.b {
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(232,68,90,0.30), transparent 70%);
    bottom: -10%; right: -8%;
    animation: plDrift 8.5s ease-in-out infinite reverse;
  }
  @keyframes plDrift {
    0%, 100% { transform: translate(0,0) scale(1); }
    50%      { transform: translate(4%,-5%) scale(1.12); }
  }

  /* the liquid blob loader itself — morphing border-radius, Apple-fluid */
  .pl-blob-core {
    position: relative;
    width: 92px; height: 92px;
    background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 38%, #e8445a 72%, #c0392b 100%);
    box-shadow:
      0 10px 36px rgba(232,68,90,0.32),
      inset 0 1px 0 rgba(255,255,255,0.35);
    animation: plMorph 2.6s ease-in-out infinite, plSpin 7s linear infinite;
  }
  @keyframes plMorph {
    0%   { border-radius: 42% 58% 64% 36% / 45% 45% 55% 55%; }
    25%  { border-radius: 58% 42% 38% 62% / 60% 40% 60% 40%; }
    50%  { border-radius: 50% 50% 33% 67% / 55% 62% 38% 45%; }
    75%  { border-radius: 36% 64% 58% 42% / 48% 55% 45% 52%; }
    100% { border-radius: 42% 58% 64% 36% / 45% 45% 55% 55%; }
  }
  @keyframes plSpin { to { transform: rotate(360deg); } }

  /* glossy highlight sweep on the blob */
  .pl-blob-core::before {
    content: ''; position: absolute; inset: 0;
    border-radius: inherit;
    background: linear-gradient(160deg, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.00) 55%);
    pointer-events: none;
  }

  /* frosted ring orbiting the blob */
  .pl-ring {
    position: absolute; inset: -16px;
    border-radius: 50%;
    border: 1.5px solid rgba(255,107,53,0.22);
    animation: plSpin 4s linear infinite reverse;
  }
  .pl-ring::before {
    content: ''; position: absolute; top: -3px; left: 50%;
    width: 6px; height: 6px; margin-left: -3px;
    border-radius: 50%;
    background: #ff6b35;
    box-shadow: 0 0 10px rgba(255,107,53,0.8);
  }

  .pl-word {
    font-family: 'DM Sans', sans-serif; font-weight: 600;
    font-size: 1.3rem; letter-spacing: 0.28em; text-transform: uppercase;
    color: #1d1d1f;
  }
  .pl-sub {
    font-family: 'DM Sans', sans-serif; font-weight: 400;
    font-size: 0.68rem; letter-spacing: 0.24em; text-transform: uppercase;
    background: linear-gradient(135deg, #ff8c42 0%, #e8445a 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (prefers-reduced-motion: reduce) {
    .pl-blob, .pl-blob-core, .pl-ring { animation: none; }
  }
`;

export function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const hasPreloaded = sessionStorage.getItem("hasPreloaded");
    if (hasPreloaded) {
      setShow(false);
    } else {
      const timer = setTimeout(() => {
        setShow(false);
        sessionStorage.setItem("hasPreloaded", "true");
      }, 1600);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="pl-wrap"
        >
          <style dangerouslySetInnerHTML={{ __html: styles }} />

          <div className="pl-blob a" />
          <div className="pl-blob b" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="relative flex items-center justify-center" style={{ width: 124, height: 124 }}>
              <div className="pl-ring" />
              <div className="pl-blob-core" />
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pl-word mt-8"
            >
              Sabka Saathi
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="pl-sub mt-2"
            >
              Digital Excellence
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}