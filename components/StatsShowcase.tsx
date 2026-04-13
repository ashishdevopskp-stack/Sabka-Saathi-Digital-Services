"use client";

import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect } from "react";
import OrbitImages from "./OrbitImages";

function StatCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="flex items-baseline justify-center">
      <motion.span className="text-5xl font-bold tracking-tighter text-slate-900 md:text-7xl">
        {rounded}
      </motion.span>
      <span className="text-3xl font-bold text-primary md:text-5xl">{suffix}</span>
    </div>
  );
}

const images = [
  "https://picsum.photos/id/1/300/300",
  "https://picsum.photos/id/2/300/300",
  "https://picsum.photos/id/3/300/300",
  "https://picsum.photos/id/4/300/300",
  "https://picsum.photos/id/5/300/300",
  "https://picsum.photos/id/6/300/300",
];

/**
 * StatsShowcase Component
 * ----------------------
 * Displays key agency milestones and branch locations with orbiting background imagery.
 * 
 * Technical Implementation:
 * - background: OrbitImages component uses R3F-style orbit logic for background depth.
 * - Mobile Layout (< md): 2-column grid for the "Strategic Branches" and "Retention Rates" cards.
 * - StatCounter: Motion-based counter component for landing page impact.
 */
export function StatsShowcase() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Background Orbits - Deep Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-30 select-none overflow-hidden">
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <OrbitImages
            images={images}
            shape="ellipse"
            radiusX={800}
            radiusY={600}
            rotation={-8}
            duration={40}
            itemSize={120}
            responsive={true}
            showPath={false}
          />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center gap-16 text-center">
          
          {/* Main Hero Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
             <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-orange-500">Trusted By Many</p>
             <StatCounter value={100} suffix="+" />
             <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-4xl">Local Businesses Served Across India</h2>
          </motion.div>

          {/* Secondary Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-4 md:gap-8 lg:max-w-5xl">
            
            {/* Projects Delivered */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group relative rounded-2xl border border-white/40 bg-white/10 p-4 md:p-10 shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20"
            >
               <div className="flex flex-col items-start text-left">
                  <span className="text-2xl md:text-4xl mb-2 md:mb-4">🚀</span>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                    <span className="text-3xl md:text-5xl font-bold text-slate-900">50</span>
                    <span className="text-lg md:text-2xl font-bold text-orange-500">+</span>
                  </div>
                  <h3 className="mt-1 text-xs md:text-2xl font-bold text-slate-900">Projects Delivered</h3>
                  <p className="mt-3 text-[10px] md:text-sm text-slate-600 leading-snug">High-quality digital solutions completed with excellence.</p>
               </div>
            </motion.div>

            {/* Branches / Coverage */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="group relative rounded-2xl border border-white/40 bg-white/10 p-4 md:p-10 shadow-2xl backdrop-blur-xl transition-all hover:bg-white/20"
            >
               <div className="flex flex-col items-start text-left">
                  <span className="text-2xl md:text-4xl mb-2 md:mb-4">📍</span>
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-2">
                    <span className="text-3xl md:text-5xl font-bold text-slate-900">3</span>
                    <span className="text-[10px] md:text-xl font-bold text-orange-500 leading-tight">Strategic Hubs</span>
                  </div>
                  <div className="mt-4 hidden md:flex flex-wrap gap-2">
                    {["Gujarat", "Bihar", "Maharashtra"].map(state => (
                      <span key={state} className="rounded-full bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-600 border border-orange-200">
                        {state}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-[10px] md:text-sm text-slate-600 leading-snug">Serving clients all over India from our local offices.</p>
               </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Subtle floor gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent shadow-[0_4px_20px_rgba(255,149,0,0.1)]" />
    </section>
  );
}
