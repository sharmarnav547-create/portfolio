import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const AttentionToAcquisition = () => {
  return (
    <section className="py-32 relative z-10 text-black overflow-hidden bg-white border-t border-black/5">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#E2FC37]/10 blur-[120px] rounded-full pointer-events-none -mr-40 -mt-40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-gray-50 border border-black/10 rounded-3xl p-10 mb-24 shadow-lg">
            <h3 className="text-3xl font-black uppercase tracking-widest text-black mb-6">
              Spending on ads but not sure it's working?
            </h3>
            <p className="text-xl text-gray-700 italic mb-8">
              Book a free competitor analysis, we'll audit what you're running and show you exactly where the leaks are.
            </p>
            <div className="flex justify-center">
              <AnimatedLayerButton className="w-auto px-10 py-3 h-14 text-lg">
                Get my free analysis
              </AnimatedLayerButton>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black mb-8 text-black uppercase tracking-tight">
            From Attention To Acquisition.
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-16 space-y-6 text-left">
            <p>
              Here's what most performance agencies miss, data without creative is just a spreadsheet. Creative without data is just art. The brands that win are running both together.
            </p>
            <p>
              At PitchBrands, our performance team and creative team sit in the same room. That means your ads are built to convert <span className="italic">and</span> built to stop the scroll, because in 2026, you need both to win.
            </p>
            <p>
              We don't set it and forget it. We test, iterate, and scale what's working.
            </p>
            <p className="font-bold text-[#FD4E02] text-2xl text-center py-8">
              Data tells us where to go. Creative gets us there.
            </p>
          </div>
          
          <div className="pt-8 border-t border-black/10">
            <h3 className="text-4xl font-black uppercase tracking-tight mb-4">Ready to go viral?</h3>
            <p className="text-2xl font-bold text-[#F20574] uppercase tracking-widest mb-10">Let's make it loud.</p>
            
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

export default AttentionToAcquisition;
