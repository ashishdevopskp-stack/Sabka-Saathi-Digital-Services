"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Eye, Smartphone, Laptop, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const projects = [
  {
    title: "EcoSphere SaaS Dashboard",
    category: "Web Development",
    image: "/projects/web-1.png",
    type: "Web",
    icon: <Laptop className="w-4 h-4" />,
    description: "A comprehensive sustainability tracking platform for corporate environmental impact.",
    tags: ["React", "Next.js", "Three.js"],
    color: "from-blue-600 to-cyan-500"
  },
  {
    title: "FinFlow Mobile Wallet",
    category: "Mobile App",
    image: "/projects/mobile-1.png",
    type: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    description: "Next-generation fintech application featuring real-time crypto tracking and instant payments.",
    tags: ["React Native", "Firebase", "Web3"],
    color: "from-rose-500 to-orange-500"
  },
  {
    title: "LuxeFashion E-commerce",
    category: "Web Development",
    image: "/projects/web-2.png",
    type: "Web",
    icon: <Laptop className="w-4 h-4" />,
    description: "High-end retail experience with immersive 3D product previews and seamless checkout.",
    tags: ["Next.js", "Tailwind", "Shopify"],
    color: "from-emerald-500 to-teal-400"
  },
  {
    title: "HealthTrack Pro",
    category: "Mobile App",
    image: "/projects/mobile-2.png",
    type: "Mobile",
    icon: <Smartphone className="w-4 h-4" />,
    description: "Integrated health monitoring system with wearable sync and AI-driven insights.",
    tags: ["Flutter", "Node.js", "AI"],
    color: "from-indigo-600 to-purple-500"
  }
];

export function PortfolioShowcase() {
  return (
    <section id="portfolio" className="py-24 md:py-32 relative overflow-hidden bg-white">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-slate-50 rounded-full blur-[120px] -mr-1/4 -mt-1/4" />
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Sparkles className="w-3 h-3" />
              Work Done
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
              Website & Mobile <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 italic">Excellence.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-sm text-lg leading-relaxed">
            A curated selection of our most impactful digital transformations. We build products that define market standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Card className="group relative overflow-hidden rounded-[3rem] border-slate-100 shadow-2xl shadow-slate-200/50 hover:shadow-orange-500/10 transition-all duration-700 h-full flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-6 left-6 flex gap-2">
                    <Badge className="bg-white/90 backdrop-blur-md text-slate-900 border-none px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                      {project.icon}
                      {project.type}
                    </Badge>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                        <Eye className="w-6 h-6" />
                      </div>
                      <div className="w-14 h-14 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-[0.2em] bg-clip-text text-transparent bg-gradient-to-r ${project.color} mb-3 block`}>
                      {project.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 font-medium leading-relaxed mb-8">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-slate-50 text-slate-400 text-[10px] font-black uppercase tracking-wider border border-slate-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[100px] rounded-full -mr-48 -mt-48" />
          <h3 className="text-3xl md:text-5xl font-black text-white mb-6 relative z-10 leading-tight">
            Ready to Build Your <br />
            Next <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-400 italic">Masterpiece?</span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg font-medium relative z-10">
            Let&apos;s turn your ideas into high-performance digital solutions. Join our roster of successful businesses.
          </p>
          <div className="relative z-10">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-black text-xl px-12 py-6 rounded-2xl shadow-2xl shadow-orange-500/20 transition-all hover:scale-105 active:scale-95">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
