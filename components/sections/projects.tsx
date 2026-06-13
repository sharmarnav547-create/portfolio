"use client";

import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "PIN.CODES",
    status: "Active Project",
    desc: "A modern platform built to simplify digital workflows and provide users with fast, intuitive experiences.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Supabase"],
    isPrivate: false,
  },
  {
    title: "GullyScore",
    status: "Development",
    desc: "A cricket scoring platform featuring ball-by-ball scoring, team management, match statistics, and mobile-first design.",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    isPrivate: false,
  },
  {
    title: "AI Assistant",
    status: "Private",
    desc: "An AI-powered assistant capable of answering questions, automating tasks, and improving productivity.",
    tech: ["Python", "OpenAI API", "Node.js"],
    isPrivate: true,
  },
  {
    title: "Portfolio OS",
    status: "Personal",
    desc: "A highly interactive portfolio system with animations, route transitions, dark mode, and modern UI.",
    tech: ["Next.js", "Framer Motion"],
    isPrivate: false,
  },
];

export function ProjectsSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-16 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          Featured Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D6FF00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2 group-hover:text-[#D6FF00] transition-colors">{project.title}</h2>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase border border-white/20 text-neutral-400">
                      {project.status}
                    </span>
                  </div>
                  {project.isPrivate ? (
                    <div className="flex items-center space-x-2 text-rose-400 bg-rose-400/10 px-3 py-1 rounded-full text-xs font-mono">
                      <Lock className="w-3 h-3" />
                      <span>Private</span>
                    </div>
                  ) : null}
                </div>

                <p className="text-neutral-400 text-lg mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-md text-sm text-neutral-300">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                {!project.isPrivate && (
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 bg-[#D6FF00] text-black px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="flex items-center space-x-2 bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors">
                      <span>View Details</span>
                    </button>
                  </div>
                )}
                {project.isPrivate && (
                  <div className="text-neutral-500 text-sm font-mono border-t border-white/10 pt-4 mt-auto">
                    Source code reserved / private.
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
