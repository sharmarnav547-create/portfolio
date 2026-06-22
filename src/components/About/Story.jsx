import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
  return (
    <section className="py-24 relative z-10 text-black overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-black mb-8 text-[#7B5CF0] uppercase tracking-tight">
            The Story Behind PitchBrands
          </h1>
          
          <div className="space-y-6 text-xl text-gray-600 leading-relaxed text-left md:text-center">
            <p>PitchBrands started with a simple idea:</p>
            
            <p className="font-bold text-2xl text-black">Every brand is pitching itself every day.</p>
            
            <p>Every post, ad, website visit, and customer interaction is a chance to capture attention, build trust, and stand out.</p>
            
            <p>That's where the name <span className="text-[#FD4E02] font-semibold">PitchBrands</span> comes from.</p>
            
            <p>We believe great businesses already have something valuable to offer—the challenge is making sure the right people see it, remember it, and connect with it.</p>
            
            <p>That's why we help brands create a stronger digital presence, tell their story better, and turn attention into growth.</p>
            
            <p className="text-3xl font-black text-black mt-12 pt-8 border-t border-black/10">
              Because every unforgettable brand starts with a powerful pitch.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Story;
