"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white">
      <div className="relative">
        {/* Main Logo Loader */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-24 h-24 relative z-10 flex items-center justify-center"
        >
          <div className="text-4xl">🚀</div>
        </motion.div>

        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 -m-4 border-2 border-dashed border-orange-500/30 rounded-full"
        />

        {/* Pulsing Light */}
        <div className="absolute inset-0 blur-3xl bg-orange-500/10 rounded-full scale-150 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 block mb-2">
          Initializing Engine
        </span>
        <div className="flex items-center gap-1.5 justify-center">
          <span className="text-base font-black text-slate-900">Sabka</span>
          <span className="text-base font-black text-orange-500 italic">Saathi</span>
        </div>
      </motion.div>
      
      {/* Bottom Progress Bar Mimic */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-slate-50">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-orange-400 to-rose-500"
        />
      </div>
    </div>
  );
}
