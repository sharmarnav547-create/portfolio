import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const InfluencerCTA = () => {
  return (
    <section className="py-32 relative z-10 text-black overflow-hidden text-center border-t border-black/10 mt-12 bg-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-[#FD4E02]/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black uppercase tracking-tight">
            Ready To Find the Right Creators?
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Whether you're launching a new product or scaling an established brand, we'll help you build creator partnerships that deliver real impact.
          </p>
          
          <div className="flex justify-center mt-8">
            <AnimatedLayerButton className="w-auto px-16 py-4 h-16 text-xl">
              Let's Talk
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerCTA;
