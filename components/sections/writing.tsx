"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const articles = [
  { title: "How I Built My First Full Stack Project", readTime: "5 min read" },
  { title: "Lessons From Building SaaS Products As A Student", readTime: "8 min read" },
  { title: "Why Design Matters In Development", readTime: "4 min read" },
  { title: "My Developer Journey", readTime: "6 min read" },
];

export function WritingSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-6xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          Writing
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {articles.map((article, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-all duration-300"
            >
              <div className="absolute top-8 right-8">
                <span className="px-3 py-1 bg-[#D6FF00]/10 text-[#D6FF00] rounded-full text-xs font-bold uppercase tracking-widest">
                  Coming Soon
                </span>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-[#D6FF00] transition-colors pr-24">
                  {article.title}
                </h2>
                
                <div className="flex items-center justify-between mt-12">
                  <div className="flex items-center text-neutral-500 text-sm space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-neutral-400 group-hover:bg-[#D6FF00] group-hover:text-black transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
