"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

interface BlogCardProps {
  post: BlogPost & { tags?: string[] };
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  const displayTags = post.tags || post.keywords || [];
  
  // Category-specific subtle colors
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Development":
        return "bg-blue-50/70 text-blue-600 border-blue-100/50";
      case "Enterprise":
        return "bg-purple-50/70 text-purple-600 border-purple-100/50";
      case "Marketing":
        return "bg-orange-50/70 text-orange-600 border-orange-100/50";
      case "Strategy":
        return "bg-slate-50/70 text-slate-600 border-slate-200/50";
      default:
        return "bg-orange-50/70 text-orange-600 border-orange-100/50";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="h-full"
    >
      <Link href={`/blog/${post.slug}`} className="block group h-full">
        <Card className="h-full bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[2rem] hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-500 group-hover:-translate-y-1 overflow-hidden flex flex-col p-6 relative z-0 before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:bg-gradient-to-t before:from-orange-50/60 before:to-orange-50/10 before:z-[-1] before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)] before:origin-bottom">
          
          {/* Category */}
          <div className="flex items-center justify-between mb-4">
            <span className={`inline-flex items-center px-3 py-1 rounded-full border text-[9px] font-black uppercase tracking-widest transition-all ${getCategoryStyles(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-lg font-black text-slate-900 mb-2.5 leading-snug group-hover:text-orange-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-slate-500 font-medium text-[11.5px] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {displayTags.slice(0, 3).map((tag) => (
                <span 
                  key={tag} 
                  className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50/50 border border-slate-100/40 rounded-lg px-2 py-0.5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer details */}
          <div className="mt-auto pt-4 border-t border-slate-100/60 flex items-center justify-between">
            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
              {post.date}
            </div>

            <span className="text-orange-500 font-black text-[9px] uppercase tracking-widest flex items-center gap-0.5 group-hover:translate-x-1 transition-all duration-300">
              Read More
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
