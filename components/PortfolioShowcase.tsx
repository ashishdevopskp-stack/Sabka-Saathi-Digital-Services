"use client";

import { motion } from "framer-motion";
import { 
  ExternalLink, Sparkles, ChevronLeft, ChevronRight, 
  Wifi, Battery, Signal, Loader2
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/Button";

const phoneProjects = [
  {
    id: 1,
    title: "Jewellery Website",
    url: "https://jewellery-website-neon.vercel.app/",
    category: "E-commerce",
    accentColor: "#f59e0b"
  },
  {
    id: 2,
    title: "Travel Vista",
    url: "https://travelvista-website.vercel.app/",
    category: "Travel",
    accentColor: "#3b82f6"
  },
  {
    id: 3,
    title: "The Sizzling Plate",
    url: "https://thesizzlingplate.vercel.app/",
    category: "Restaurant",
    accentColor: "#ef4444"
  },
  {
    id: 4,
    title: "School Website",
    url: "https://school-website-aarvjs.vercel.app/",
    category: "Education",
    accentColor: "#8b5cf6"
  },
  {
    id: 5,
    title: "Salon Website",
    url: "https://salonaarvjs.vercel.app/",
    category: "Beauty & Salon",
    accentColor: "#ec4899"
  }
];

const ctaBackgrounds = [
  "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200",
  "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1200",
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200"
];

interface PhoneCardProps {
  project: typeof phoneProjects[0];
}

function PhoneCard({ project }: PhoneCardProps) {
  const [iframeLoading, setIframeLoading] = useState(true);

  return (
    <div 
      className="relative w-[270px] md:w-[280px] h-[570px] md:h-[590px] flex-shrink-0 snap-center transition-all duration-500 hover:scale-[1.02] select-none"
    >
      {/* Outer Phone Mockup Case */}
      <div 
        className="w-full h-full rounded-[2.8rem] md:rounded-[3.2rem] bg-slate-950 p-[8px] md:p-[10px] shadow-2xl border-4 md:border-8 border-slate-900 flex flex-col relative overflow-hidden transition-shadow duration-500"
        style={{
          boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 15px ${project.accentColor}15`
        }}
      >
        {/* Screen Bezel Glass */}
        <div className="relative w-full h-full rounded-[2.2rem] md:rounded-[2.6rem] bg-slate-900 overflow-hidden flex flex-col">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-slate-950 rounded-full z-30 flex items-center justify-between px-2.5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
            <span className="w-2.5 h-1 bg-slate-800 rounded-full" />
            <span className="w-1 h-1 rounded-full bg-blue-900/60" />
          </div>

          {/* Status Bar */}
          <div className="absolute top-0 inset-x-0 h-8 px-5 pt-2 flex justify-between items-center text-[8px] md:text-[9px] font-bold z-20 pointer-events-none select-none text-slate-700">
            <span>09:41</span>
            <div className="flex items-center gap-1.5">
              <Signal className="w-2.5 h-2.5" />
              <Wifi className="w-2.5 h-2.5" />
              <Battery className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Screen Viewport */}
          <div className="relative w-full h-full pt-8 pb-3 bg-white overflow-hidden flex flex-col animate-fadeIn">
            <div className="relative w-full h-full overflow-hidden bg-white">
              {iframeLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 z-10 pointer-events-none">
                  <Loader2 className="w-6 h-6 text-orange-500 animate-spin mb-2" />
                  <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400">Loading Demo...</span>
                </div>
              )}
              
              <iframe
                src={project.url}
                title={project.title}
                className="phone-iframe w-full h-full border-0 block bg-white"
                loading="lazy"
                onLoad={() => setIframeLoading(false)}
              />
            </div>
          </div>

          {/* Bottom Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-slate-800 rounded-full z-20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export function PortfolioShowcase() {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Drag states
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [paddingStyle, setPaddingStyle] = useState({ paddingLeft: '20px', paddingRight: '20px' });

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % ctaBackgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updatePadding = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPaddingStyle({
          paddingLeft: 'calc((100% - 270px) / 2)',
          paddingRight: 'calc((100% - 270px) / 2)'
        });
      } else if (width < 768) {
        setPaddingStyle({
          paddingLeft: 'calc((100% - 270px) / 2)',
          paddingRight: 'calc((100% - 270px) / 2)'
        });
      } else if (width < 1024) {
        setPaddingStyle({
          paddingLeft: 'calc((100% - 560px - 20px) / 2)', // 2 cards of 270px + 20px gap
          paddingRight: 'calc((100% - 560px - 20px) / 2)'
        });
      } else {
        // Desktop: 3 cards of 280px + 2 gaps of 24px = 888px
        setPaddingStyle({
          paddingLeft: 'calc((100% - 888px) / 2)',
          paddingRight: 'calc((100% - 888px) / 2)'
        });
      }
    };
    updatePadding();
    window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
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
    setTimeout(() => {
      setIsDragging(false);
    }, 50);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
  };

  const handleScroll = () => {
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
      if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const targetIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1;
    if (targetIndex >= 0 && targetIndex < phoneProjects.length) {
      scrollToCard(targetIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (sliderRef.current) {
      const cards = sliderRef.current.children;
      if (cards[index]) {
        const card = cards[index] as HTMLElement;
        const containerWidth = sliderRef.current.clientWidth;
        const targetScroll = card.offsetLeft - (containerWidth - card.clientWidth) / 2;
        
        sliderRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-50 rounded-full blur-[120px] -mr-1/4 -mt-1/4" />
      
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4"
            >
              <Sparkles className="w-3 h-3" />
              Work Done
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Website & Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 italic">Excellence.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-sm md:text-base leading-relaxed">
            A curated selection of our most impactful digital transformations. We build products that define market standards.
          </p>
        </div>

        {/* Premium Horizontal Phone Mockup Slider */}
        <div className="relative group/slider max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-center text-slate-800 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-slate-100 shadow-xl flex items-center justify-center text-slate-800 hover:text-orange-500 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover/slider:opacity-100 hidden md:flex cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slider Container */}
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onScroll={handleScroll}
            className={`relative flex w-full gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory py-8 cursor-grab select-none ${
              isMouseDown ? 'cursor-grabbing' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingLeft: paddingStyle.paddingLeft,
              paddingRight: paddingStyle.paddingRight,
              scrollPaddingLeft: paddingStyle.paddingLeft,
              scrollPaddingRight: paddingStyle.paddingRight
            }}
          >
            {phoneProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex-shrink-0 snap-center flex flex-col items-center"
              >
                <PhoneCard
                  project={project}
                />
                
                {/* Meta details below phone card */}
                <div className="text-center mt-4 select-none">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{project.category}</span>
                  <h4 className="text-sm font-black text-slate-800 mt-0.5">{project.title}</h4>
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] font-extrabold hover:underline inline-flex items-center gap-1 mt-1"
                    style={{ color: project.accentColor }}
                  >
                    Open Demo ↗
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Premium Clickable Pagination Dots */}
          <div className="flex justify-center items-center gap-2.5 mt-6 relative z-20">
            {phoneProjects.map((project, idx) => (
              <button
                key={project.id}
                onClick={() => scrollToCard(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx 
                    ? 'w-6' 
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
                style={{
                  backgroundColor: activeIndex === idx ? project.accentColor : undefined
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Improved Premium Ready to Build Masterpiece CTA Section with automatic background image slideshow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center rounded-[2.5rem] p-6 py-12 md:p-16 relative overflow-hidden text-center border border-white/5 shadow-2xl"
        >
          {/* Slideshow background layers */}
          {ctaBackgrounds.map((bg, idx) => (
            <div
              key={bg}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out -z-20 ${
                idx === bgIndex ? "opacity-55" : "opacity-0"
              }`}
              style={{ backgroundImage: `url(${bg})` }}
            />
          ))}

          {/* Premium Gradient Overlay Wrapper */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/70 via-slate-900/60 to-orange-950/40 -z-10 pointer-events-none" />

          {/* Dot patterns layer */}
          <div 
            className="absolute inset-0 opacity-[0.06] pointer-events-none" 
            style={{
              backgroundImage: "radial-gradient(#ff9500 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }} 
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full -mr-48 -mt-48 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-500/10 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none" />
          
          <h3 className="text-2xl sm:text-3xl md:text-4.5xl font-black text-white mb-5 relative z-10 leading-tight">
            Ready to Build Your <br />
            Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-50 to-orange-400 italic">Masterpiece?</span>
          </h3>
          <p className="text-slate-200 max-w-lg mx-auto mb-8 text-xs sm:text-sm md:text-base font-medium relative z-10 leading-relaxed px-4">
            Let&apos;s turn your vision into high-performance, scale-ready digital solutions. Partner with India&apos;s leading technology professionals.
          </p>
          <div className="relative z-10">
            <Link href="/contact">
              <Button variant="primary" size="lg" className="rounded-2xl shadow-xl shadow-orange-500/20 px-10 py-4.5 text-base md:text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
