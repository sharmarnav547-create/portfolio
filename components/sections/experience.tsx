"use client";

import { motion } from "framer-motion";

const experiences = [
  { year: "2023", title: "Started learning web development." },
  { year: "2024", title: "Built personal websites and frontend projects." },
  { year: "2025", title: "Started developing full-stack applications and AI tools." },
  { year: "2026", title: "Actively building SaaS products and client-ready applications." },
];

export function ExperienceSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          Experience
        </h1>

        <div className="grid md:grid-cols-[1fr_300px] gap-16">
          {/* Timeline */}
          <div className="relative border-l-2 border-white/10 pl-8 space-y-12 py-4">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 + 0.3 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-black border-2 border-[#D6FF00]" />
                
                <h3 className="text-[#D6FF00] font-mono text-xl font-bold mb-2">{exp.year}</h3>
                <p className="text-neutral-300 text-lg md:text-xl">{exp.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Summary Sidebar */}
          <div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Student Developer</h3>
              <p className="text-[#D6FF00] font-mono text-sm mb-8">2023 - Present</p>

              <h4 className="text-neutral-400 uppercase tracking-widest text-xs font-bold mb-4">Focus Areas</h4>
              <ul className="space-y-3">
                <li className="text-neutral-200">Frontend Development</li>
                <li className="text-neutral-200">Backend Development</li>
                <li className="text-neutral-200">AI Integration</li>
                <li className="text-neutral-200">Product Design</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
