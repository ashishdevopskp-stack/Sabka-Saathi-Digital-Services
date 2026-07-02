"use client";

import { motion } from "framer-motion";
import { Sparkles, Loader2, Monitor, Smartphone, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { fetchRecentProjects, Project } from "@/lib/project";

const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="8" height="8" viewBox="0 0 10 10" fill="none" {...props}>
    <rect x="2" y="4.2" width="6" height="4.4" rx="1" stroke="#10b981" strokeWidth="1" />
    <path d="M3.2 4.2V3a1.8 1.8 0 0 1 3.6 0v1.2" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

interface RecentProjectCardProps {
  project: Project;
  index: number;
}

function RecentProjectCard({ project, index }: RecentProjectCardProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const TypeIcon = project.type === "mobile" ? Smartphone : Monitor;

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="group block select-none"
    >
      <div className="w-full aspect-[16/10] relative rounded-t-xl border-[5px] border-slate-800 bg-slate-900 overflow-hidden shadow-xl flex flex-col z-10 transition-transform duration-300 group-hover:-translate-y-1">
        <div className="h-6 sm:h-7 bg-slate-50 border-b border-slate-200/80 flex items-center px-2.5 sm:px-3 justify-between shrink-0 z-20">
          <div className="flex gap-1 sm:gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>

          <div className="bg-white border border-slate-200/60 rounded px-2 sm:px-2.5 py-0.5 text-[8px] sm:text-[9px] text-slate-400 font-medium truncate max-w-[110px] sm:max-w-[180px] text-center flex items-center justify-center gap-1 shadow-sm">
            <LockIcon />
            <span className="truncate">{project.url.replace("https://", "")}</span>
          </div>

          <div className="w-6 sm:w-8 flex justify-end text-slate-300">
            <TypeIcon className="w-3 h-3" />
          </div>
        </div>

        <div className="relative w-full flex-1 bg-white overflow-hidden z-10">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-20 pointer-events-none">
              <Loader2 className="w-5 h-5 text-orange-500 animate-spin mb-2" />
              <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-widest text-slate-400">Loading Preview...</span>
            </div>
          )}

          <iframe
            src={project.url}
            title={project.title}
            className="w-full h-full border-none block bg-white"
            loading="lazy"
            onLoad={() => setIframeLoading(false)}
          />

          {/* Invisible overlay so the whole card is a single click target and the
              iframe's own scroll/interaction doesn't hijack the click. */}
          <div className="absolute inset-0 z-30 bg-transparent" />
        </div>
      </div>

      <div className="w-full h-2 sm:h-2.5 bg-slate-800 rounded-b-lg shadow-lg border-t border-slate-700 flex justify-center items-start shrink-0 z-20">
        <div className="w-10 sm:w-16 h-0.5 sm:h-1 bg-slate-950/40 rounded-b-md" />
      </div>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{project.category}</span>
          <h4 className="text-xs sm:text-sm font-black text-slate-800 mt-0.5 flex items-center gap-1">
            {project.title}
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h4>
        </div>
      </div>
    </motion.a>
  );
}

export function RecentProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchRecentProjects(6);
        setProjects(data);
      } catch (err) {
        console.error("Failed to load recent projects", err);
      } finally {
        setLoadingProjects(false);
      }
    })();
  }, []);

  if (loadingProjects) {
    return (
      <section className="py-24 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
      </section>
    );
  }

  if (projects.length === 0) {
    return null;
  }

  return (
    <section id="recent-projects" className="py-16 md:py-20 relative overflow-hidden bg-white border-t border-slate-100">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap');
        #recent-projects, #recent-projects * { font-family: 'DM Sans', sans-serif; }
      `}</style>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4"
          >
            <Sparkles className="w-3 h-3" />
            Fresh Off The Build
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 uppercase">
            Recent Projects
          </h2>
          <p className="text-slate-500 font-semibold text-xs sm:text-sm leading-relaxed max-w-xl">
            The latest sites we've shipped, added straight from the admin dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <RecentProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}