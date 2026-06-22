import React from 'react';
import { motion } from 'framer-motion';
import { GlowCard } from '../ui/spotlight-card';

const WhatIs = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <GlowCard customSize glowColor="purple" className="w-full text-center py-16 px-8 md:px-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-[#FD4E02] uppercase tracking-tight">
              What is Pitch brands?
            </h2>
            
            <div className="space-y-6 text-xl text-gray-600">
              <p className="font-bold text-black text-2xl">PitchBrands isn't your typical marketing agency.</p>
              
              <p>We create ideas that make brands impossible to ignore—turning attention into engagement and engagement into growth.</p>
              
              <p>From building brands to creating content and running high-performing campaigns, we help businesses stay relevant in a fast-moving digital world.</p>
              
              <div className="mt-12 p-8 bg-gray-50 rounded-xl border border-black/10 shadow-2xl">
                <p className="text-2xl font-bold text-[#7B5CF0] mb-2 uppercase">Because being online isn't enough.</p>
                <p className="text-4xl font-black text-black uppercase tracking-wider">You need to be remembered.</p>
              </div>
            </div>
          </motion.div>
        </GlowCard>
      </div>
    </section>
  );
};

export default WhatIs;
