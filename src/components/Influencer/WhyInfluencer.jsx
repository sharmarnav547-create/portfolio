import React from 'react';
import { motion } from 'framer-motion';

const WhyInfluencer = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-black/10 rounded-3xl p-10 md:p-16 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#E2FC37]/20 rounded-full blur-3xl -ml-16 -mt-16"></div>
          
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-black uppercase tracking-tight relative z-10">
            Why Influencer Marketing?
          </h2>
          
          <div className="space-y-6 text-xl text-gray-600 relative z-10">
            <p className="font-bold text-2xl text-[#7B5CF0]">
              Because honestly? People trust people, not scripted commercials.
            </p>
            
            <p>
              The best collaborations don't feel like advertising. They feel like a trusted recommendation from someone your audience already follows and values.
            </p>
            
            <p>
              We help brands create those connections—turning attention into trust and trust into action.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyInfluencer;
