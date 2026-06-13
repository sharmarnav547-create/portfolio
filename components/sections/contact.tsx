"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col justify-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter uppercase text-[#D6FF00]" style={{ fontFamily: "'Fira Code', monospace" }}>
          Let's Build Something Great
        </h1>
        <p className="text-xl md:text-2xl text-neutral-400 mb-16 max-w-2xl">
          I'm currently available for new projects, opportunities, and collaborations. Let's discuss how we can work together.
        </p>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12">
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <a 
              href="tel:+918628952900" 
              className="flex items-center space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 hover:bg-[#D6FF00]/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D6FF00] group-hover:text-black transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-bold">Call Now</div>
                <div className="text-2xl font-bold group-hover:text-[#D6FF00] transition-colors">+91 86289 52900</div>
              </div>
            </a>

            <a 
              href="https://wa.me/918628952900" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#D6FF00]/50 hover:bg-[#D6FF00]/5 transition-all group"
            >
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#D6FF00] group-hover:text-black transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="text-neutral-400 text-sm mb-1 uppercase tracking-wider font-bold">WhatsApp</div>
                <div className="text-2xl font-bold group-hover:text-[#D6FF00] transition-colors">+91 86289 52900</div>
              </div>
            </a>
          </motion.div>

          {/* Form Placeholder / CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">Send a Message</h3>
            <p className="text-neutral-400 mb-8 text-lg">
              Prefer writing? Reach out to me directly and I'll get back to you as soon as possible.
            </p>
            <button className="w-full py-4 bg-[#D6FF00] text-black font-bold rounded-xl text-lg hover:scale-[1.02] transition-transform flex justify-center items-center space-x-2">
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
