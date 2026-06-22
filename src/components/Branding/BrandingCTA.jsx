import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const BrandingCTA = () => {
  return (
    <section className="py-32 relative z-10 text-black overflow-hidden text-center bg-white border-t border-black/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#F20574]/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-black uppercase tracking-tight">
            Ready to go viral?
          </h2>
          
          <p className="text-3xl md:text-4xl text-[#FD4E02] font-black uppercase tracking-widest mb-16">
            Let's make it loud.
          </p>
          
          <div className="flex justify-center">
            <AnimatedLayerButton className="w-auto px-16 py-4 h-16 text-xl">
              Get in touch
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingCTA;
