"use client";

import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { InteractiveBackground } from "./InteractiveBackground";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import Link from "next/link";
import { Footer } from "./Footer";
import { DetailedContent } from "@/lib/content";

interface DetailLayoutProps {
  content: DetailedContent;
  category: string;
}

export function DetailLayout({ content, category }: DetailLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col selection:bg-orange-100 selection:text-orange-900">
      <InteractiveBackground />
      <Navbar />
      
      <main className="flex-1 pt-36 pb-24 relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          
          {/* Breadcrumbs */}
          <nav className="mb-12 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400 backdrop-blur-sm bg-white/30 w-fit px-6 py-3 rounded-full border border-white/50 shadow-sm relative z-20">
            <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
            <span className="text-slate-300">/</span>
            <span className="text-slate-500">{category}</span>
            <span className="text-slate-300">/</span>
            <span className="text-orange-600">{content.title}</span>
          </nav>
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 border border-white/80 shadow-sm mb-8 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-700">{content.subtitle}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
                {content.title} <span className="inline-block hover:scale-110 hover:rotate-12 transition-transform duration-300">{content.icon}</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl font-medium">
                {content.longDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-6 text-lg font-bold shadow-[0_10px_40px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_50px_rgba(249,115,22,0.4)] transition-all">
                  Start Your Project
                </Button>
                {content.deliverable && (
                  <div className="flex items-center gap-4 px-8 py-5 bg-white/60 border border-white/80 rounded-full backdrop-blur-xl shadow-lg shadow-slate-200/50">
                    <div className="flex flex-col">
                      <span className="text-[9px] font-black text-orange-500 uppercase tracking-[0.2em] mb-1">Deliverable</span>
                      <span className="text-sm font-bold text-slate-800">{content.deliverable}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 relative"
            >
              <div className={`absolute -inset-10 bg-gradient-to-br ${content.gradient || 'from-orange-500 to-rose-500'} opacity-20 blur-3xl rounded-full`} />
              <Card className="relative overflow-hidden border-white/80 bg-white/60 backdrop-blur-3xl rounded-[3rem] p-10 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${content.gradient || 'from-orange-500 to-rose-500'}" />
                <h3 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-4">
                  <span className="flex items-center justify-center h-10 w-10 rounded-xl bg-orange-100 text-orange-600 text-xl">✨</span>
                  Key Features
                </h3>
                <div className="grid grid-cols-1 gap-5">
                  {content.features.map((feature, i) => (
                    <motion.div 
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                      className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white/50 transition-colors border border-transparent hover:border-white/80 cursor-default group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-sm shadow-md group-hover:scale-110 transition-transform">✓</div>
                      <p className="text-slate-700 font-bold leading-tight group-hover:text-slate-900 transition-colors pt-1">{feature}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Deep Dive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full p-10 bg-gradient-to-br from-white/80 to-white/40 border-white/80 backdrop-blur-2xl rounded-[3rem] shadow-xl hover:shadow-2xl transition-shadow">
                <div className="h-16 w-16 rounded-[1.5rem] bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-8 shadow-sm">🎯</div>
                <h4 className="text-2xl font-black text-slate-900 mb-6">Core Benefits</h4>
                <ul className="space-y-5">
                  {content.benefits.map(benefit => (
                    <li key={benefit} className="text-base text-slate-700 font-bold flex items-start gap-4 group">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform flex-shrink-0" />
                      <span className="leading-snug">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <Card className="h-full p-10 bg-gradient-to-br from-white/80 to-white/40 border-white/80 backdrop-blur-2xl rounded-[3rem] shadow-xl hover:shadow-2xl transition-shadow flex flex-col justify-between">
                <div>
                  <div className="h-16 w-16 rounded-[1.5rem] bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center text-3xl mb-8 shadow-sm">🛠️</div>
                  <h4 className="text-2xl font-black text-slate-900 mb-6">Technology Stack & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    {(content.technologies || ["Next.js", "Tailwind", "TypeScript", "Framer Motion", "MongoDB"]).map(tech => (
                      <span key={tech} className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-black text-slate-800 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-orange-300 transition-all cursor-default uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-10 p-6 bg-slate-900 text-slate-300 rounded-[2rem] text-sm leading-relaxed font-medium shadow-inner">
                  <span className="text-white font-bold block mb-2 text-base">Enterprise-Grade Infrastructure</span>
                  We utilize robust technologies to ensure your {content.title} is not only functional but also future-proof and highly secure. Our team stays updated with the latest industry standards to provide the most efficient solutions capable of massive scale.
                </p>
              </Card>
            </motion.div>
          </div>

          {/* Premium Prose CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden bg-slate-950 p-10 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            {/* Dark Mode Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-8 md:text-5xl tracking-tight leading-[1.1]">
                  Why Choose Sabka Saathi for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">{content.title}</span>?
                </h2>
                <div className="space-y-6 text-slate-300 font-medium text-lg leading-relaxed">
                   <p>
                     In the digital age, {content.title.toLowerCase()} is more than a technical requirement—it&apos;s a strategic advantage. At Sabka Saathi, we approach every {content.slug} project with a unique blend of creativity and engineering excellence. As a GST-registered agency, we bring corporate transparency and high-fidelity results.
                   </p>
                   <p>
                     Our process for {content.slug} is rooted in deep industry research and user-centric design principles. Whether building a complex SaaS platform or a localized CRM, we ensure the final product drives actual business revenue.
                   </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
                <h5 className="text-2xl font-black text-white mb-4">Ready to Deep Dive?</h5>
                <p className="text-slate-400 mb-10 text-lg">Let&apos;s discuss how {content.title} can transform your business operations and accelerate your growth trajectory.</p>
                
                <Link href="/#contact">
                  <Button size="lg" className="w-full rounded-2xl py-8 text-xl font-bold bg-white text-slate-900 hover:bg-orange-50 hover:text-orange-600 transition-colors border-none">
                    Book a Strategy Call →
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}

