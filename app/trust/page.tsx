import { Navbar } from "@/components/Navbar";
import { InteractiveBackground } from "@/components/InteractiveBackground";
import { TrustContent } from "@/components/TrustContent";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trust, Transparency & Legal | Sabka Saathi",
  description:
    "Learn about Sabka Saathi Digital Services, our founder Ashish Kumar, our privacy policy, terms of service, and commitment to transparency & verified services.",
};

export default function TrustPage() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900 bg-slate-50">
      <InteractiveBackground />
      <Navbar />

      <main className="flex-1 pt-32 pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          <TrustContent />
        </div>
      </main>
      
      {/* Shared Footer */}
      <footer className="bg-slate-950 py-24 text-white relative z-10 overflow-hidden border-t border-white/5 mt-0">
        <div className="container mx-auto px-4 max-w-7xl relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-5 text-center md:text-left">
              <h3 className="text-3xl font-black mb-6 tracking-tight uppercase">SABKA SAATHI</h3>
              <p className="text-slate-400 max-w-sm mb-10 text-lg mx-auto md:mx-0">
                Premium software development agency specializing in Next.js, CRM automation, and high-fidelity digital transformation.
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="tel:+919431673018" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">📱</a>
                <a href="mailto:helpsabkasaathi@gmail.com" className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">📧</a>
              </div>
            </div>
            
            <div className="md:col-span-3 text-center md:text-left">
              <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-orange-500 text-[11px]">Platform</h4>
              <ul className="space-y-5 text-slate-300 font-bold text-sm">
                <li><Link href="/" className="hover:text-white hover:translate-x-2 transition-all inline-block">Home</Link></li>
                <li><Link href="/#expertise" className="hover:text-white hover:translate-x-2 transition-all inline-block">Expertise</Link></li>
                <li><Link href="/#how-it-works" className="hover:text-white hover:translate-x-2 transition-all inline-block">Process</Link></li>
                <li><Link href="/trust" className="hover:text-white hover:translate-x-2 transition-all inline-block">Legal & Trust</Link></li>
              </ul>
            </div>
            
            <div className="md:col-span-4 text-center md:text-left">
              <h4 className="font-black mb-8 uppercase tracking-[0.2em] text-orange-500 text-[11px]">Regional Hubs</h4>
              <ul className="space-y-6 text-slate-300 font-bold text-sm">
                <li className="flex flex-col gap-1">
                  <Link href="/location/bihar" className="hover:text-white transition-colors">Bihar Development Center</Link>
                  <span className="text-xs font-medium text-slate-500">Patna, Sheikhpura</span>
                </li>
                <li className="flex flex-col gap-1">
                  <Link href="/location/gujarat" className="hover:text-white transition-colors">Gujarat Business Hub</Link>
                  <span className="text-xs font-medium text-slate-500">Ahmedabad, Bhavnagar</span>
                </li>
                <li className="flex flex-col gap-1">
                  <Link href="/location/maharashtra" className="hover:text-white transition-colors">Maharashtra Tech Pivot</Link>
                  <span className="text-xs font-medium text-slate-500">Pune, Mumbai</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <p>© 2026 SABKA SAATHI DIGITAL SERVICES. ALL RIGHTS RESERVED.</p>
            <p className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-slate-400">GSTIN: 10LAHPK8872L1Z3</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
