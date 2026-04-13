"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export const faqs = [
  {
    question: "How long does it take to complete a website or app?",
    answer: "The timeline depends on your requirements and project complexity. Most standard websites are completed within a few days, while advanced projects may take longer. We always aim for fast delivery without compromising quality."
  },
  {
    question: "I don’t have technical knowledge. Can I still work with you?",
    answer: "Absolutely. Our process is simple and beginner-friendly. We guide you step-by-step and handle all technical aspects so you can focus on your business."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. Every website we create is fully responsive and optimized for mobile, tablet, and desktop devices."
  },
  {
    question: "Can I update or manage my website later?",
    answer: "Yes. We build user-friendly systems so you can easily update content. We also provide guidance if you need help managing your website."
  },
  {
    question: "Do you provide support after project completion?",
    answer: "Yes. We provide support and assistance even after delivery to ensure everything runs smoothly."
  },
  {
    question: "Will my business get customers through your services?",
    answer: "Our goal is to help you build a strong online presence and reach the right audience. Results depend on multiple factors like your business type, market, and consistency."
  },
  {
    question: "Do you provide digital marketing services?",
    answer: "Yes. We offer digital marketing solutions to help your business grow and attract more customers online."
  },
  {
    question: "What information do I need to get started?",
    answer: "You only need basic details like: Business name, Services/products, and Contact details. We guide you with everything else."
  },
  {
    question: "Can you create custom solutions for my business?",
    answer: "Yes. Every business is different, so we provide customized solutions based on your goals and requirements."
  },
  {
    question: "Is my data safe with you?",
    answer: "Yes. We maintain strict privacy and security standards. Your information is kept confidential and used only for service purposes."
  },
  {
    question: "Do you work with clients outside my city?",
    answer: "Yes. We work with clients across India through online communication and smooth delivery processes."
  },
  {
    question: "What makes your service different?",
    answer: "We focus on simple and practical solutions, clear communication, and real results—not false promises."
  },
  {
    question: "Can I request changes during the project?",
    answer: "Yes. Minor changes can be discussed during the development process. We ensure your final product matches your expectations."
  },
  {
    question: "Do you help with business growth strategy?",
    answer: "Yes. We don’t just build — we guide you with strategies to grow your business online."
  },
  {
    question: "How do I get started?",
    answer: "It’s simple: Contact us → Discuss your requirement → Get started."
  }
];

export function FAQSection({ limit }: { limit?: number }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const displayFaqs = limit ? faqs.slice(0, limit) : faqs;

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {displayFaqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="group"
        >
          <div 
            className={cn(
               "border rounded-[2rem] transition-all duration-300 overflow-hidden",
               activeIndex === index 
                ? "bg-white border-orange-200 shadow-xl shadow-orange-500/5 ring-1 ring-orange-100" 
                : "bg-white/50 border-slate-100 hover:border-slate-300"
            )}
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
            >
              <span className={cn(
                "text-lg font-bold transition-colors",
                activeIndex === index ? "text-orange-600" : "text-slate-800"
              )}>
                {faq.question}
              </span>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                activeIndex === index ? "bg-orange-500 text-white rotate-180" : "bg-slate-100 text-slate-500"
              )}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-8 text-slate-600 font-medium leading-relaxed">
                    <p className="border-t border-slate-50 pt-6">
                        {faq.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}

      {!limit && (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 p-8 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <h3 className="text-2xl font-black text-white mb-4 relative z-10">Still Have Questions?</h3>
            <p className="text-slate-400 font-medium mb-8 relative z-10">
                Feel free to reach out — we’re here to help you at every step.
            </p>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
                 <a href="tel:9431673018" className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl text-white font-bold transition-all">
                    <MessageCircle className="w-5 h-5 text-orange-400" />
                    +91 9431673018
                 </a>
            </div>
        </motion.div>
      )}
    </div>
  );
}
