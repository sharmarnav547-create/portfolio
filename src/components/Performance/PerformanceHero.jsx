import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const PerformanceHero = () => {
  return (
    <section className="relative pt-32 pb-24 z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#E2FC37]/30 border border-[#E2FC37]/50 text-black font-bold text-sm tracking-widest uppercase">
            Services / Performance Marketing
          </div>
          
          <div className="w-full max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/performance-banner.png" alt="Performance Marketing Banner" className="w-full h-auto object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase tracking-tight leading-[1.1] flex flex-col items-center justify-center">
            <span>Vibes don't pay the bills.</span>
            <span className="text-gradient-accent mt-2">
              Results do.
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10 space-y-6">
            <p className="font-bold text-[#7B5CF0] text-3xl uppercase tracking-widest">
              Growth that's built to scale.
            </p>
            <p className="font-bold text-black text-2xl">
              Clicks are easy. Revenue is harder.
            </p>
            <p>
              Performance marketing is where creativity meets cold, hard data. Every rupee you spend should be working, targeting the right person, at the right moment, with the right message. That's not luck. That's what we do. No vague metrics. No fluffy reports. Just campaigns that convert, scale, and make your CAC your competitor's nightmare.
            </p>
            <p className="italic text-black font-medium">
              From Meta Ads and Google Ads to full-funnel growth strategies, we help brands turn attention into action.
            </p>
            <p className="font-bold text-[#FD4E02] text-xl bg-[#FD4E02]/5 inline-block px-6 py-2 rounded-xl">
              Built for businesses that want results, not vanity metrics
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <AnimatedLayerButton className="w-auto px-12 py-4 h-16 text-xl">
              Let's run it
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PerformanceHero;
