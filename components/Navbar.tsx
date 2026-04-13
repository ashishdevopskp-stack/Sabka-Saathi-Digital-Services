"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Trust", href: "/trust" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler as EventListener);
    return () => window.removeEventListener("beforeinstallprompt", handler as EventListener);
  }, []);

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

  return (
    <header className="sticky top-4 z-50 px-4">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/60 bg-white/30 px-5 py-3 shadow-[0_8px_35px_rgba(35,72,145,0.2)] backdrop-blur-xl md:px-7">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-auto object-contain scale-110"
            priority
          />
          <span className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            SABKA-SAATHI
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-700 hover:text-orange-600 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button onClick={handleInstall}>Download App</Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/60 bg-white/70 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="text-lg">{open ? "X" : "|||"}</span>
        </button>
      </nav>

      <div
        className={cn(
          "mx-auto mt-3 w-full max-w-7xl overflow-hidden rounded-2xl border border-white/60 bg-white/75 shadow-lg backdrop-blur-xl md:hidden",
          open ? "max-h-96 p-4" : "max-h-0 p-0 border-transparent"
        )}
      >
        <div className="flex flex-col gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-all"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={handleInstall} className="mt-2 w-full">Download App</Button>
        </div>
      </div>
    </header>
  );
}
