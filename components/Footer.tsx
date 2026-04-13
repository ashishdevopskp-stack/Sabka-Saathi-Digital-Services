"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-950 py-24 text-white relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 max-w-7xl relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4 text-center md:text-left">
            <h3 className="text-3xl font-black mb-6 tracking-tight uppercase">SABKA SAATHI</h3>
            <p className="text-slate-400 max-w-sm mb-10 text-lg mx-auto md:mx-0 font-medium">
              Premium software development agency specializing in Next.js, CRM automation, and high-fidelity digital transformation.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="tel:+919431673018" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all shadow-lg active:scale-95">📱</a>
              <a href="mailto:helpsabkasaathi@gmail.com" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all shadow-lg active:scale-95">📧</a>
            </div>
          </div>
          
          <div className="md:col-span-2 text-center md:text-left">
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-orange-500 text-[11px]">Platform</h4>
            <ul className="space-y-5 text-slate-300 font-bold text-sm">
              <li><Link href="/" className="hover:text-white hover:translate-x-2 transition-all inline-block">Home</Link></li>
              <li><Link href="/services" className="hover:text-white hover:translate-x-2 transition-all inline-block">Services</Link></li>
              <li><Link href="/industries" className="hover:text-white hover:translate-x-2 transition-all inline-block">Industries</Link></li>
              <li><Link href="/trust" className="hover:text-white hover:translate-x-2 transition-all inline-block">Legal & Trust</Link></li>
              <li><Link href="/about" className="hover:text-white hover:translate-x-2 transition-all inline-block">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-white hover:translate-x-2 transition-all inline-block">FAQ</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-orange-500 text-[11px]">Contact</h4>
            <ul className="space-y-5 text-slate-300 font-bold text-sm">
              <li><Link href="/contact" className="hover:text-white hover:translate-x-2 transition-all inline-block">Get a Quote</Link></li>
              <li><a href="https://wa.me/919431673018" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:translate-x-2 transition-all inline-block">WhatsApp Support</a></li>
              <li className="text-slate-500 font-medium">9431673018</li>
              <li className="text-slate-500 font-medium lowercase">helpsabkasaathi@gmail.com</li>
            </ul>
          </div>
          
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-orange-500 text-[11px]">Regional Hubs</h4>
            <ul className="space-y-6 text-slate-300 font-bold text-sm">
              <li className="flex flex-col gap-1">
                <Link href="/location/bihar" className="hover:text-white transition-colors">Bihar Hub</Link>
                <span className="text-xs font-medium text-slate-500">Patna, Sheikhpura</span>
              </li>
              <li className="flex flex-col gap-1">
                <Link href="/location/gujarat" className="hover:text-white transition-colors">Gujarat Hub</Link>
                <span className="text-xs font-medium text-slate-500">Surat, Ahmedabad</span>
              </li>
              <li className="flex flex-col gap-1">
                <Link href="/location/maharashtra" className="hover:text-white transition-colors">Maharashtra Tech Pivot</Link>
                <span className="text-xs font-medium text-slate-500">Pune, Mumbai</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
          <p>© 2026 SABKA SAATHI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 items-center">
            <p className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400">GSTIN: 10LAHPK8872L1Z3</p>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}
