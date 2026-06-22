import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const BrandingHero = () => {
  return (
    <section className="relative pt-32 pb-24 z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#FD4E02]/10 border border-[#FD4E02]/20 text-[#FD4E02] font-bold text-sm tracking-widest uppercase">
            Services / Branding
          </div>
          
          <div className="w-full max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/branding-banner.png" alt="Branding Marketing Banner" className="w-full h-auto object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase tracking-tight leading-[1.1] flex flex-col items-center justify-center">
            <span>Build A Brand People Remember.</span>
            <span className="text-gradient-accent mt-2">
              Built To Stand Out. Designed To Scale.
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 space-y-4">
            <p className="font-bold text-[#F20574] text-2xl">Anyone can design a logo.</p>
            <p>We build brands people recognize, trust, and talk about.</p>
            <p>From strategy and storytelling to visuals and voice, we help ambitious businesses create identities that don't just look good, they create impact. Every scroll, every post, every colour choice is a pitch. Brand identity is what makes people stop, trust, and remember you, before you've said a single word. We build identities that don't just look good. <span className="font-bold text-black italic">They mean something.</span></p>
          </div>

          <div className="flex justify-center">
            <AnimatedLayerButton className="w-auto px-12 py-4 h-16 text-xl">
              Let's build yours
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingHero;
