"use client";

import { motion } from "framer-motion";
import { Card } from "./ui/Card";
import Link from "next/link";
import { BlogPost } from "@/lib/blogs";

const styles = `
  .bc-link { font-family: 'DM Sans', sans-serif; }

  .bc-card { display: flex; flex-direction: column; height: 100%; }

  .bc-cat {
    font-weight: 500; font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase;
    border-radius: 999px; padding: 0.32rem 0.85rem;
    backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
  }
  .bc-cat.development { background: rgba(99,102,241,0.08); color: #6366f1; border: 1px solid rgba(99,102,241,0.14); }
  .bc-cat.enterprise   { background: rgba(168,85,247,0.08); color: #a855f7; border: 1px solid rgba(168,85,247,0.14); }
  .bc-cat.marketing    { background: rgba(255,140,66,0.10); color: #e8445a; border: 1px solid rgba(232,68,90,0.16); }
  .bc-cat.strategy     { background: rgba(29,29,31,0.05);   color: rgba(29,29,31,0.6); border: 1px solid rgba(29,29,31,0.08); }
  .bc-cat.default      { background: rgba(255,140,66,0.10); color: #e8445a; border: 1px solid rgba(232,68,90,0.16); }

  .bc-title {
    color: #1d1d1f; font-weight: 600; letter-spacing: -0.01em;
    transition: color 0.35s ease;
  }
  .bc-link:hover .bc-title {
    background: linear-gradient(135deg, #ff8c42, #e8445a);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }

  .bc-excerpt { color: rgba(29,29,31,0.5); }

  .bc-tag {
    font-weight: 500; font-size: 0.6rem; letter-spacing: 0.06em; text-transform: uppercase;
    color: rgba(29,29,31,0.4);
    background: rgba(0,0,0,0.03);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 8px; padding: 0.15rem 0.5rem;
  }

  .bc-footer { border-top: 1px solid rgba(0,0,0,0.06); }
  .bc-date { color: rgba(29,29,31,0.38); font-weight: 500; font-size: 0.62rem; letter-spacing: 0.08em; text-transform: uppercase; }

  .bc-read {
    color: #e8445a; font-weight: 600; font-size: 0.66rem; letter-spacing: 0.1em; text-transform: uppercase;
    display: inline-flex; align-items: center; gap: 0.3rem;
  }
  .bc-read svg { transition: transform 0.35s cubic-bezier(0.25,1,0.5,1); }
  .bc-link:hover .bc-read svg { transform: translateX(3px); }
`;

interface BlogCardProps {
  post: BlogPost & { tags?: string[] };
  index: number;
}

function categoryClass(category: string) {
  switch (category) {
    case "Development": return "development";
    case "Enterprise":  return "enterprise";
    case "Marketing":   return "marketing";
    case "Strategy":    return "strategy";
    default:            return "default";
  }
}

export function BlogCard({ post, index }: BlogCardProps) {
  const displayTags = post.tags || post.keywords || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className="h-full"
    >
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <Link href={`/blog/${post.slug}`} className="bc-link block group h-full">
        <Card hoverable className="bc-card rounded-[1.75rem] p-6">

          {/* Category */}
          <div className="flex items-center justify-between mb-4">
            <span className={`bc-cat ${categoryClass(post.category)}`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="bc-title text-base md:text-lg mb-2.5 leading-snug line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="bc-excerpt font-normal text-[11.5px] leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>

          {/* Tags */}
          {displayTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-6">
              {displayTags.slice(0, 3).map((tag) => (
                <span key={tag} className="bc-tag">
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer */}
          <div className="bc-footer mt-auto pt-4 flex items-center justify-between">
            <span className="bc-date">{post.date}</span>
            <span className="bc-read">
              Read more
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}