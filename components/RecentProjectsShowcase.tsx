"use client";

import { motion } from "framer-motion";
import {
  Sparkles, ChevronLeft, ChevronRight, Loader2,
  Monitor, Smartphone, ArrowUpRight,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { fetchRecentProjects, RecentProject } from "@/lib/recentProject";

const LockIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="7" height="7" viewBox="0 0 10 10" fill="none" {...props}>
    <rect x="2" y="4.2" width="6" height="4.4" rx="1" stroke="#10b981" strokeWidth="1" />
    <path d="M3.2 4.2V3a1.8 1.8 0 0 1 3.6 0v1.2" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

interface RecentCardProps {
  project: RecentProject;
  isDragging: boolean;
  isActive: boolean;
}

function RecentCard({ project, isDragging, isActive }: RecentCardProps) {
  const [iframeLoading, setIframeLoading] = useState(true);
  const isMobile = project.type === "mobile";
  const accent = project.accentColor || "#f59e0b";

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (isDragging) e.preventDefault();
      }}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] snap-center select-none"
    >
      <div className="relative rounded-2xl border border-slate-200/70 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
        {/* Chrome bar */}
        <div className="h-7 sm:h-8 bg-slate-50 border-b border-slate-200/70 flex items-center px-3 justify-between shrink-0">
          <div className="flex gap-1 sm:gap-1.5 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
          <div className="bg-white border border-slate-200/60 rounded px-2 py-0.5 text-[8px] sm:text-[9px] text-slate-400 font-medium truncate max-w-[150px] flex items-center justify-center gap-1">
            <LockIcon />
            <span className="truncate">{project.url.replace("https://", "")}</span>
          </div>
          <div className="w-6 sm:w-8" />
        </div>

        {/* Preview */}
        <div className="relative w-full aspect-[4/3] bg-white overflow-hidden">
          {isActive ? (
            <>
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 pointer-events-none">
                  <Loader2 className="w-5 h-5 text-orange-500 animate-spin mb-2" />
                  <span className="text-[8px] uppercase font-bold tracking-widest text-slate-400">
                    Loading Preview...
                  </span>
                </div>
              )}
              <iframe
                src={project.url}
                title={project.title}
                className="w-full h-full border-0 block bg-white"
                loading="lazy"
                onLoad={() => setIframeLoading(false)}
                style={{ pointerEvents: "none" }}
              />
              {/* transparent overlay so the card, not the iframe, receives drag/click */}
              <div className="absolute inset-0 z-10" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-50 to-orange-50/20 flex flex-col items-center justify-center p-4 text-center">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center mb-2"
                style={{ backgroundColor: `${accent}1a`, color: accent }}
              >
                <Sparkles className="w-4 h-4" />
              </div>
              <h5 className="text-[10px] sm:text-xs font-black text-slate-800 tracking-tight">
                {project.title}
              </h5>
            </div>
          )}
        </div>

        {/* Type badge */}
        <div className="absolute top-9 sm:top-10 right-2.5 z-20">
          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-slate-200/70 text-[8px] font-black uppercase tracking-widest text-slate-500 shadow-sm">
            {isMobile ? <Smartphone className="w-2.5 h-2.5" /> : <Monitor className="w-2.5 h-2.5" />}
            {project.type}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex items-start justify-between mt-3.5 px-0.5">
        <div className="min-w-0">
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
            {project.category}
          </span>
          <h4 className="text-sm font-black text-slate-800 mt-0.5 truncate">{project.title}</h4>
        </div>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:rotate-45"
          style={{ backgroundColor: `${accent}14`, color: accent }}
        >
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </a>
  );
}

export function RecentProjectsShowcase() {
  const [recentProjects, setRecentProjects] = useState<RecentProject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // Pulls from the independent `recentProjects` collection, in the
        // exact order the admin set — nothing here is time-based, and
        // nothing here reads from the `projects` collection.
        const data = await fetchRecentProjects();
        setRecentProjects(data);
      } catch (err) {
        console.error("Failed to load recent projects", err);
        setLoadError(true);
      } finally {
        setLoadingProjects(false);
      }
    })();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const dragTicking = useRef(false);
  const scrollTicking = useRef(false);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const sliderRef = useRef<HTMLDivElement>(null);

  const triggerPause = () => {
    setIsPaused(true);
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => setIsPaused(false), 1200);
  };

  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    e.preventDefault();
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    triggerPause();
    setTimeout(() => setIsDragging(false), 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const pageX = e.pageX;
    const offsetLeft = sliderRef.current.offsetLeft;

    if (!dragTicking.current) {
      requestAnimationFrame(() => {
        if (sliderRef.current && isMouseDown) {
          const x = pageX - offsetLeft;
          const walk = x - startX;
          sliderRef.current.scrollLeft = scrollLeftState - walk;
          if (Math.abs(walk) > 5) setIsDragging(true);
        }
        dragTicking.current = false;
      });
      dragTicking.current = true;
    }
  };

  const handleScroll = () => {
    if (!sliderRef.current) return;
    if (!scrollTicking.current) {
      requestAnimationFrame(() => {
        if (sliderRef.current) {
          const { scrollLeft, clientWidth } = sliderRef.current;
          const cards = sliderRef.current.children;
          let closestIndex = 0;
          let closestDistance = Infinity;
          const containerCenter = scrollLeft + clientWidth / 2;

          for (let i = 0; i < cards.length; i++) {
            const card = cards[i] as HTMLElement;
            const cardCenter = card.offsetLeft + card.clientWidth / 2;
            const distance = Math.abs(cardCenter - containerCenter);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = i;
            }
          }

          if (closestIndex !== visibleIndex) setVisibleIndex(closestIndex);
          if (closestIndex !== activeIndex) setActiveIndex(closestIndex);
        }
        scrollTicking.current = false;
      });
      scrollTicking.current = true;
    }
  };

  const scroll = (direction: "left" | "right") => {
    triggerPause();
    const targetIndex = direction === "left" ? activeIndex - 1 : activeIndex + 1;
    if (targetIndex >= 0 && targetIndex < recentProjects.length) {
      scrollToCard(targetIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!sliderRef.current) return;
    triggerPause();
    const cards = sliderRef.current.children;
    if (cards[index]) {
      const card = cards[index] as HTMLElement;
      const containerWidth = sliderRef.current.clientWidth;
      const targetScroll = card.offsetLeft - (containerWidth - card.clientWidth) / 2;
      sliderRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  if (loadingProjects) {
    return (
      <section className="py-24 flex items-center justify-center">
        <Loader2 className="w-6 h-6 animate-spin text-orange-500" />
      </section>
    );
  }

  // Fail quietly — don't show a broken section if Firestore errors or there's no data yet.
  if (loadError || recentProjects.length === 0) return null;

  return (
    <section id="recent-projects" className="py-16 md:py-24 relative overflow-hidden bg-white">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap");
        #recent-projects, #recent-projects * { font-family: "DM Sans", sans-serif; }
        #recent-projects .slider-track::-webkit-scrollbar { display: none; }
      `}</style>

      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-orange-50/60 rounded-full blur-[120px] -ml-48 -mt-48 pointer-events-none" />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-3 h-3" />
              Fresh Off the Build
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 italic">Projects.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm md:text-base leading-relaxed">
            A hand-picked selection of our favorite work across desktop and mobile.
          </p>
        </div>

        <div className="relative group/slider">
          <button
            onClick={() => scroll("left")}
            disabled={activeIndex === 0}
            className="absolute left-[-14px] top-[38%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl items-center justify-center text-slate-800 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex cursor-pointer disabled:opacity-0"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scroll("right")}
            disabled={activeIndex === recentProjects.length - 1}
            className="absolute right-[-14px] top-[38%] -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl items-center justify-center text-slate-800 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex cursor-pointer disabled:opacity-0"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            onTouchStart={() => setIsMouseDown(true)}
            onTouchEnd={() => {
              setIsMouseDown(false);
              triggerPause();
            }}
            className={`slider-track relative flex w-full gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory py-4 cursor-grab select-none px-1 ${
              isMouseDown ? "cursor-grabbing" : ""
            }`}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {recentProjects.map((project, index) => {
              const isActive = Math.abs(index - visibleIndex) <= 2;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.4 }}
                >
                  <RecentCard project={project} isDragging={isDragging} isActive={isActive} />
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-2 mt-8">
            {recentProjects.map((project, idx) => (
              <button
                key={`${project.id}-dot`}
                onClick={() => scrollToCard(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? "w-5 bg-orange-500" : "w-1.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}