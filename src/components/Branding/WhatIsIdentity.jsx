import React from 'react';
import { motion } from 'framer-motion';

const WhatIsIdentity = () => {
  return (
    <section className="py-24 relative z-10 text-black bg-gray-50 border-y border-black/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
            What Brand Identity Actually Is
          </h2>
          
          <p className="text-2xl font-bold text-[#7B5CF0] uppercase tracking-widest mb-8">
            Not just a logo. A whole vibe.
          </p>
          
          <div className="text-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              Brand identity is the full personality of your business, how it looks, sounds, feels, and shows up in the world. It's the difference between a brand people scroll past and one they screenshot, share, and trust with their money.
            </p>
            <p className="font-medium">
              We design identities that are unmistakably you, sharp enough to stop the scroll, deep enough to build loyalty.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsIdentity;
