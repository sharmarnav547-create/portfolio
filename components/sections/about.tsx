"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          About Me
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-neutral-400 mb-12 font-serif">
          Student Developer & Product Builder
        </h2>
        
        <div className="grid md:grid-cols-[2fr_1fr] gap-16">
          {/* Main Content */}
          <div className="space-y-6 text-lg md:text-xl text-neutral-300 leading-relaxed font-sans">
            <p>Hi, I&apos;m Arnav.</p>
            <p>
              I&apos;m a developer focused on building modern web applications, AI-powered tools, mobile-first experiences, and digital products.
            </p>
            <p>
              I enjoy turning ideas into functional products with clean design, great user experience, and scalable architecture.
            </p>
            <div className="pt-8">
              <h3 className="text-[#D6FF00] font-bold text-xl mb-4 tracking-wider uppercase">My Interests Include:</h3>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>Full-Stack Development</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>SaaS Products</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>AI Applications</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>Mobile Apps</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>UI/UX Design</span></li>
                <li className="flex items-center space-x-2"><span className="text-[#D6FF00]">•</span> <span>Startup Building</span></li>
              </ul>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-colors"
            >
              <div className="text-4xl font-bold text-[#D6FF00] mb-1 font-mono">10+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-widest">Personal Projects</div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-colors"
            >
              <div className="text-4xl font-bold text-[#D6FF00] mb-1 font-mono">1000+</div>
              <div className="text-sm text-neutral-400 uppercase tracking-widest">Hours Learning</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-colors"
            >
              <div className="text-2xl font-bold text-white mb-1">Class 11</div>
              <div className="text-sm text-neutral-400 uppercase tracking-widest">Student</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-colors"
            >
              <div className="text-2xl font-bold text-white mb-1">Since 2023</div>
              <div className="text-sm text-neutral-400 uppercase tracking-widest">Building Products</div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
