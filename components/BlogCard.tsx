"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <Card className="h-full p-8 bg-white/60 backdrop-blur-xl border-white/80 rounded-[2.5rem] hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 group-hover:-translate-y-2 border relative overflow-hidden flex flex-col">
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${post.gradient} opacity-5 blur-2xl group-hover:opacity-20 transition-opacity`} />
          
          <div className="flex items-center justify-between mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
              {post.category}
            </span>
            <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-125">
              {post.icon}
            </span>
          </div>

          <h3 className="text-2xl font-black text-slate-900 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-slate-500 font-medium text-sm line-clamp-3 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="mt-auto pt-6 border-t border-slate-100 flex flex-col gap-4">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden border border-white">
                  <User className="w-3 h-3 text-slate-400" />
                </div>
                <span className="text-[11px] font-black text-slate-700 uppercase">{post.author.name}</span>
              </div>
              <span className="text-orange-500 font-black text-xs uppercase tracking-widest flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all">
                Read More <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
