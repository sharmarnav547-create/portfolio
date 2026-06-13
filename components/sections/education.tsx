"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Terminal } from "lucide-react";

export function EducationSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          Education
        </h1>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12">
          {/* Main Education */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#D6FF00]/10 rounded-xl text-[#D6FF00]">
                <BookOpen className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">IIT Student</h2>
            </div>
            
            <h3 className="text-xl font-bold mb-6 text-neutral-300">Learning Areas:</h3>
            <ul className="space-y-4">
              {['Computer Science', 'Programming', 'Artificial Intelligence', 'Modern Web Development'].map((area, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-lg text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-[#D6FF00]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Self Taught Stack */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-[#D6FF00]/10 rounded-xl text-[#D6FF00]">
                <Code className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-white">Additional Learning</h2>
            </div>
            
            <p className="text-neutral-400 mb-8 text-lg">Self-taught technologies and frameworks mastered through hands-on project building.</p>

            <div className="grid grid-cols-2 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Python'].map((tech, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-neutral-300 bg-black/50 p-3 rounded-lg border border-white/5">
                  <Terminal className="w-4 h-4 text-[#D6FF00]" />
                  <span className="font-mono text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
