import React from 'react';
import { motion } from 'framer-motion';

const DecodeStrategy = () => {
  return (
    <section className="py-24 relative z-10 text-black bg-gray-50 border-t border-black/5">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black uppercase tracking-tight">
            We don't just design. <span className="text-[#F20574]">We decode.</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-8 font-medium">
            <p>
              Before we touch a single pixel, we ask the hard questions. Who are you really? Who are you for? What do you want people to feel the moment they land on your page?
            </p>
            <p className="p-6 bg-white border border-black/10 rounded-2xl shadow-sm italic text-2xl text-[#FD4E02]">
              Great brand identity isn't decoration. It's a strategy with aesthetics on top. And that's exactly how we build it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DecodeStrategy;
