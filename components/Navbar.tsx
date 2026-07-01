"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/LiquidButton";
import {
  Menu, X, ChevronDown,
  Home, Info, LayoutGrid, Building2, ShieldCheck,
  Newspaper, Mail, HelpCircle, Search as SearchIcon,
  Globe, Smartphone, Cpu, Calculator, Briefcase, Megaphone, Cloud,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Custom SVG icons (no trademarked logos, no emoji) ─────────── */
const AndroidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v2M5 11h14M6 11c0-3.3 2.7-6 6-6s6 2.7 6 6M6 11v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-6M9 19v3M15 19v3M4 12v3M20 12v3" />
  </svg>
);

const IosIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <line x1="10" y1="19" x2="14" y2="19" />
  </svg>
);

/* ── Site structure: pages + subpages ───────────────────────────
   Services carries subpages sourced from your expertiseContent
   slugs in lib/content.ts — update this list if that file changes. */
interface SubLink {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}
interface NavLink {
  label: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  children?: SubLink[];
}

const serviceLinks: SubLink[] = [
  { label: "Website Development", href: "/expertise/web-development", icon: Globe },
  { label: "Mobile App Development", href: "/expertise/mobile-app", icon: Smartphone },
  { label: "iOS App Development", href: "/expertise/ios-app", icon: IosIcon },
  { label: "Android App Development", href: "/expertise/android-app", icon: AndroidIcon },
  { label: "Custom Software", href: "/expertise/custom-software", icon: Cpu },
  { label: "Billing & Management", href: "/expertise/billing-system", icon: Calculator },
  { label: "ERP & CRM Solutions", href: "/expertise/erp-crm", icon: Briefcase },
  { label: "Digital Marketing", href: "/expertise/digital-marketing", icon: Megaphone },
  { label: "SEO Services", href: "/expertise/seo-services", icon: SearchIcon },
  { label: "Cloud Solutions", href: "/expertise/cloud-solutions", icon: Cloud },
];

const links: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: LayoutGrid, children: serviceLinks },
  { label: "Industries", href: "/industries", icon: Building2 },
  { label: "Trust", href: "/trust", icon: ShieldCheck },
  { label: "Blog", href: "/blog", icon: Newspaper },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "FAQ", href: "/faq", icon: HelpCircle },
  { label: "SEO", href: "/seo", icon: SearchIcon },
];

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const navStyles = `
  /* ── Liquid glass shell ─────────────────────────────────── */
  .nav-shell {
    position: relative;
    background: rgba(255,255,255,0.62);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.7);
    box-shadow:
      0 8px 32px rgba(232,68,90,0.12),
      0 1px 3px rgba(29,29,31,0.06),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }
  .nav-shell::before {
    content: ''; position: absolute; inset: -1px; border-radius: 999px; padding: 1.3px;
    pointer-events: none;
    background: linear-gradient(120deg,
      rgba(255,255,255,0.9) 0%,
      rgba(255,140,66,0.55) 28%,
      rgba(232,68,90,0.20) 52%,
      rgba(232,68,90,0.60) 78%,
      rgba(255,255,255,0.8) 100%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor; mask-composite: exclude;
  }

  /* ── Liquid link blob (the moving highlight) ───────────── */
  .nav-blob {
    position: absolute; inset: 0; z-index: 0; border-radius: 999px;
    background: linear-gradient(135deg, #ff8c42 0%, #ff6b35 45%, #e8445a 100%);
    box-shadow: 0 4px 14px rgba(232,68,90,0.35), inset 0 1px 0 rgba(255,255,255,0.35);
  }

  .nav-link { position: relative; z-index: 1; }

  /* ── Logo wordmark liquid shimmer ───────────────────────── */
  .nav-word {
    background: linear-gradient(100deg, #1d1d1f 0%, #ff6b35 35%, #1d1d1f 55%);
    background-size: 220% auto;
    -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: navWordShine 6s ease-in-out infinite;
  }
  @keyframes navWordShine {
    0%, 100% { background-position: 0% 50%; }
    50%      { background-position: 100% 50%; }
  }

  /* ── Mobile burger liquid morph ─────────────────────────── */
  .nav-burger {
    position: relative; overflow: hidden;
    background: linear-gradient(135deg, rgba(255,140,66,0.10), rgba(232,68,90,0.10));
  }
  .nav-burger::after {
    content: ''; position: absolute; inset: 0; z-index: 0; border-radius: inherit;
    background: radial-gradient(circle, rgba(232,68,90,0.30) 0%, transparent 70%);
    opacity: 0; transform: scale(0.6);
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1);
  }
  .nav-burger:active::after { opacity: 1; transform: scale(1.4); }

  /* ── Drawer liquid wave wash on open ─────────────────────── */
  .drawer-wave {
    position: absolute; top: 0; left: -40%; right: -40%; height: 220px;
    background: radial-gradient(ellipse at center, rgba(232,68,90,0.18) 0%, transparent 70%);
    filter: blur(10px); pointer-events: none;
  }

  /* ── Desktop mega-dropdown ───────────────────────────────── */
  .nav-dropdown {
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(24px) saturate(180%);
    -webkit-backdrop-filter: blur(24px) saturate(180%);
    border: 1px solid rgba(255,255,255,0.8);
    box-shadow:
      0 20px 50px rgba(29,29,31,0.12),
      0 4px 12px rgba(232,68,90,0.08);
  }
  .nav-dropdown-item:hover .nav-dropdown-icon {
    background: linear-gradient(135deg, #ff8c42 0%, #e8445a 100%);
    color: #fff;
    border-color: transparent;
  }

  @media (prefers-reduced-motion: reduce) {
    .nav-word { animation: none; }
  }
`;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const pathname = usePathname();
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler as EventListener);
    return () => window.removeEventListener("beforeinstallprompt", handler as EventListener);
  }, []);

  // Close mobile drawer automatically on route change
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      alert("App is already installed or your browser doesn't support PWA installation.");
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      setDeferredPrompt(null);
    }
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const isParentActive = (link: NavLink) =>
    isActive(link.href) || (link.children?.some((c) => pathname?.startsWith(c.href)) ?? false);

  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  };
  const closeDropdownDelayed = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 160);
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <style dangerouslySetInnerHTML={{ __html: navStyles }} />

      <nav className="nav-shell mx-auto flex w-full max-w-7xl items-center justify-between rounded-full px-5 py-3 md:px-7">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Sabka Saathi - Professional Software Development Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain scale-110"
            priority
          />
          <span className="nav-word text-xl font-bold tracking-tight uppercase">
            SABKA-SAATHI
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = isParentActive(link);
            const Icon = link.icon;
            const hasChildren = !!link.children?.length;

            return (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={hasChildren ? openDropdown : undefined}
                onMouseLeave={hasChildren ? closeDropdownDelayed : undefined}
              >
                <Link
                  href={link.href}
                  className="relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium"
                >
                  {active && (
                    <motion.span
                      layoutId="nav-liquid-blob"
                      className="nav-blob"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                    />
                  )}
                  <span
                    className={`nav-link flex items-center gap-1.5 transition-colors duration-300 ${
                      active ? "text-white" : "text-[#1d1d1f]/70 hover:text-[#e8445a]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5 shrink-0" />
                    {link.label}
                    {hasChildren && (
                      <ChevronDown
                        className={`h-3 w-3 shrink-0 transition-transform duration-300 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                </Link>

                {/* Desktop mega-dropdown */}
                {hasChildren && (
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                        className="nav-dropdown absolute left-1/2 top-[calc(100%+12px)] z-20 w-[560px] -translate-x-1/2 rounded-3xl p-4"
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdownDelayed}
                      >
                        <div className="grid grid-cols-2 gap-1.5">
                          {link.children!.map((child) => {
                            const ChildIcon = child.icon;
                            const childActive = pathname?.startsWith(child.href);
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="nav-dropdown-item flex items-center gap-3 rounded-2xl p-2.5 transition-colors duration-200 hover:bg-orange-50"
                              >
                                <span
                                  className={`nav-dropdown-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                                    childActive
                                      ? "border-transparent bg-gradient-to-br from-[#ff8c42] to-[#e8445a] text-white"
                                      : "border-orange-100 bg-orange-50 text-orange-500"
                                  }`}
                                >
                                  <ChildIcon className="h-4 w-4" />
                                </span>
                                <span className="text-[13px] font-semibold leading-tight text-[#1d1d1f]">
                                  {child.label}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                        <Link
                          href="/services"
                          className="mt-2 flex items-center justify-center gap-1.5 rounded-2xl bg-slate-50 px-4 py-2.5 text-xs font-black uppercase tracking-widest text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-600"
                        >
                          <LayoutGrid className="h-3.5 w-3.5" />
                          View All Services
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative z-10 hidden md:block">
          <Button onClick={handleInstall}>Download App</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="nav-burger relative z-10 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 text-[#1d1d1f] md:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="relative z-10 h-5 w-5" />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-[#1d1d1f]/35 backdrop-blur-sm md:hidden"
            />

            {/* Sliding liquid-glass drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 flex w-80 max-w-[85vw] flex-col justify-between overflow-hidden border-l border-white/50 bg-[rgba(255,255,255,0.94)] p-6 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="drawer-wave" aria-hidden="true" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#1d1d1f]/10 pb-5">
                    <span className="text-sm font-black uppercase tracking-wider text-[#1d1d1f]">
                      Menu
                    </span>
                    <button
                      type="button"
                      aria-label="Close menu"
                      onClick={() => setOpen(false)}
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#1d1d1f]/10 bg-white text-[#1d1d1f] transition-colors hover:bg-orange-50"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex max-h-[calc(100vh-200px)] flex-col gap-1 overflow-y-auto py-6">
                    {links.map((link, i) => {
                      const active = isParentActive(link);
                      const Icon = link.icon;
                      const hasChildren = !!link.children?.length;

                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 + i * 0.04, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="flex items-center gap-1">
                            <Link
                              href={link.href}
                              onClick={() => !hasChildren && setOpen(false)}
                              className={`flex flex-1 items-center gap-2.5 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                                active
                                  ? "bg-gradient-to-r from-[#ff8c42] to-[#e8445a] text-white shadow-md shadow-orange-500/25"
                                  : "text-[#1d1d1f] hover:bg-orange-50 hover:text-[#e8445a]"
                              }`}
                            >
                              <Icon className="h-4 w-4 shrink-0" />
                              {link.label}
                            </Link>

                            {hasChildren && (
                              <button
                                type="button"
                                aria-label={`Toggle ${link.label} submenu`}
                                onClick={() => setMobileServicesOpen((v) => !v)}
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                                  active ? "text-[#e8445a]" : "text-[#1d1d1f]/50"
                                } hover:bg-orange-50`}
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-300 ${
                                    mobileServicesOpen ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                            )}
                          </div>

                          {/* Mobile accordion subpages */}
                          {hasChildren && (
                            <AnimatePresence initial={false}>
                              {mobileServicesOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                  className="overflow-hidden pl-3"
                                >
                                  <div className="flex flex-col gap-0.5 border-l-2 border-orange-100 py-1 pl-3">
                                    {link.children!.map((child) => {
                                      const ChildIcon = child.icon;
                                      const childActive = pathname?.startsWith(child.href);
                                      return (
                                        <Link
                                          key={child.href}
                                          href={child.href}
                                          onClick={() => setOpen(false)}
                                          className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
                                            childActive
                                              ? "bg-orange-50 text-[#e8445a]"
                                              : "text-[#1d1d1f]/70 hover:bg-orange-50 hover:text-[#e8445a]"
                                          }`}
                                        >
                                          <ChildIcon className="h-3.5 w-3.5 shrink-0" />
                                          {child.label}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-[#1d1d1f]/10 pt-5">
                  <Button onClick={handleInstall} className="w-full rounded-xl py-3.5 font-bold">
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}