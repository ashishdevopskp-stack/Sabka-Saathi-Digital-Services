"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "Sabka Saathi transformed our legacy systems into a modern SaaS platform. Their expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Nisha Rao",
    feedback:
      "The mobile app they built for us is fast, intuitive, and loved by our users. Highly recommend their team!",
    rating: 5,
  },
  {
    name: "Ishan Kapoor",
    feedback:
      "Scaling our cloud infrastructure was seamless with their help. Professional and dedicated engineers.",
    rating: 4,
  },
];


export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Testimonials</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-950 md:text-5xl">Trusted By Industry Leaders</h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Card className="rounded-2xl p-8 text-center shadow-[0_20px_45px_rgba(33,71,145,0.18)]">
              <p className="text-lg leading-8 text-slate-700">
                &ldquo;{current.feedback}&rdquo;
              </p>
              <p className="mt-6 text-xl font-semibold text-slate-900">{current.name}</p>
              <p className="mt-2 text-amber-500">{"*".repeat(current.rating)}{".".repeat(5 - current.rating)}</p>
            </Card>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <Button
              variant="outline"
              onClick={() => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
            >
              Previous
            </Button>
            <Button onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}>Next</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
