import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const StrategyFirst = () => {
  return (
    <section className="py-32 relative z-10 text-black overflow-hidden bg-white border-t border-black/5">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-10 text-black uppercase tracking-tight text-center">
            Strategy first. <span className="text-[#FD4E02]">Aesthetics second.</span> <br/> Always both.
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-16 space-y-6">
            <p>
              Here's the truth most content agencies won't tell you, pretty content that nobody sees is a waste of a budget. Viral content that doesn't convert is a waste of momentum.
            </p>
            <p>
              Great content sits at the intersection of both. It looks like you, sounds like you, and is engineered to perform on every platform it touches.
            </p>
            <p>
              At PitchBrands, our content team and strategy team work as one. That means every reel has a hook designed to hold. Every caption has a job to do. Every calendar is built around what your audience actually wants to see, not what we think looks cool.
            </p>
            <p className="font-bold text-black text-2xl text-center py-8">
              More Than Content. Brand Momentum.
            </p>
          </div>
          
          <div className="pt-8 border-t border-black/10 text-center">
            <h3 className="text-4xl font-black uppercase tracking-tight mb-4">Ready to go viral?</h3>
            <p className="text-2xl font-bold text-[#7B5CF0] uppercase tracking-widest mb-10">Let's make it loud.</p>
            
            <div className="flex justify-center">
              <AnimatedLayerButton className="w-auto px-16 py-4 h-16 text-xl">
                Get in touch
              </AnimatedLayerButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StrategyFirst;
