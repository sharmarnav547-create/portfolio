import React from 'react';
import { motion } from 'framer-motion';

const InfluencerHero = () => {
  return (
    <section className="relative pt-32 pb-24 z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#7B5CF0]/10 border border-[#7B5CF0]/20 text-[#7B5CF0] font-bold text-sm tracking-widest uppercase">
            Services / Influencer Marketing
          </div>
          
          <div className="w-full max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/influencer-banner.png" alt="Influencer Marketing Banner" className="w-full h-auto object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8 text-black uppercase tracking-tight leading-[1.2] flex flex-col items-center justify-center">
            <span>Collaboration that</span>
            <span className="text-gradient-accent mt-2">
              grows your business.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build authentic partnerships with creators to increase visibility, engagement and growth with Pitchbrands.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfluencerHero;
