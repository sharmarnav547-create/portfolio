import React from 'react';
import { motion } from 'framer-motion';

const SocialHero = () => {
  return (
    <section className="relative pt-32 pb-24 z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 text-[#1DA1F2] font-bold text-sm tracking-widest uppercase">
            Services / Social Media Marketing
          </div>
          
          <div className="w-full max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/social-media-banner.png" alt="Social Media Marketing Banner" className="w-full h-auto object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-black uppercase tracking-tight leading-[1.2] flex flex-col items-center justify-center">
            <span>Grow Beyond Likes.</span>
            <span className="text-gradient-accent mt-2">
              Build a Brand People Remember.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="font-bold text-black">Myth:</span> Social media marketing = posting & scheduling. <br />
            <span className="font-bold text-black">Reality:</span> It's about making people stop scrolling. <br /><br />
            We create content that's real, relatable, and impossible to ignore—so your brand gets noticed, remembered, and talked about.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialHero;
