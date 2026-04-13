"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function AnimatedNumber({ value }: { value: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return <motion.span>{rounded}</motion.span>;
}
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { LiquidOrb3D } from "@/components/LiquidOrb3D";


export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-2 pb-24 md:pb-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,149,0,0.15),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(255,210,0,0.12),transparent_35%)]" />
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative flex min-h-[calc(100vh-140px)] max-h-[900px] flex-col items-center justify-between overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/45 px-6 py-10 shadow-[0_20px_50px_rgba(39,83,166,0.18)] backdrop-blur-xl md:px-16">


          <Image
            src="/hero-scene.svg"
            alt=""
            fill
            className="pointer-events-none rounded-[2rem] object-cover opacity-95"
            priority
          />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.08)_40%,rgba(255,255,255,0.24)_100%)]" />

          {/* Central Content Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative z-30 flex flex-col items-center text-center gap-6"
          >
            <Badge className="w-fit">Next-Gen Digital Solutions</Badge>
            
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-950 md:text-6xl lg:text-7xl">
              Building Digital Excellence with <span className="text-orange-600">Sabka Saathi</span>
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              We transform your ideas into powerful, scalable software. From custom web 
              platforms to cutting-edge mobile apps, we deliver solutions that drive growth.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="rounded-full px-10 py-4 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
                Start a Project
              </Button>
              <Button variant="outline" className="rounded-full px-10 py-4 bg-white/50 backdrop-blur-sm border-white/60">
                Our Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Live Performance Panel - Bottom Left */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-10 bottom-10 z-40 hidden flex-col gap-5 2xl:flex"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="group relative w-56 overflow-hidden rounded-2xl border border-white/70 bg-white/20 p-5 shadow-[0_12px_40px_rgba(255,149,0,0.12)] backdrop-blur-md"
            >
              {/* Pulsing Live Indicator */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-orange-500/80">Live</span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Live Projects</p>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-2xl text-orange-500">🚀</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900 group-hover:scale-110 transition-transform duration-300">
                    <AnimatedNumber value={8} />
                  </span>
                </div>
              </div>
              <p className="mt-1 text-[10px] text-slate-400">Successfully running</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="group relative w-56 overflow-hidden rounded-2xl border border-white/70 bg-white/20 p-5 shadow-[0_12px_40px_rgba(255,149,0,0.12)] backdrop-blur-md"
            >
               {/* Pulsing Live Indicator */}
               <div className="absolute right-4 top-4 flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-500/80">Live</span>
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Active Experts</p>
              <div className="mt-3 flex items-baseline gap-2 text-3xl font-bold text-slate-900">
                <span className="text-2xl">👥</span>
                <span className="group-hover:scale-110 transition-transform duration-300">
                   <AnimatedNumber value={30} />
                </span>
              </div>
              <div className="mt-2 flex gap-3 text-[10px] font-medium text-slate-500">
                <span className="flex items-center gap-1">👨 <span className="text-slate-900">17</span> Male</span>
                <span className="flex items-center gap-1">👩 <span className="text-slate-900">13</span> Female</span>
              </div>
              
              {/* Subtle background glow for the card */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-orange-400/5 blur-3xl" />
            </motion.div>
          </motion.div>

          {/* Massive Central Orb (Layered) */}
          <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-50 md:scale-100 opacity-30 md:opacity-100">
            <LiquidOrb3D />
          </div>




          <div className="absolute right-5 bottom-10 hidden h-32 w-32 items-center justify-center md:flex">
            <svg className="absolute h-full w-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              <text className="fill-slate-500 font-mono text-[8px] font-bold uppercase tracking-[0.2em]">
                <textPath xlinkHref="#circlePath">
                  • Scroll Down • Scroll Down • Scroll Down
                </textPath>
              </text>
            </svg>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 bg-white/30 text-slate-600 backdrop-blur-sm">
              <span className="text-xl">↓</span>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
