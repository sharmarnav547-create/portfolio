import React from 'react';
import { motion } from 'framer-motion';

const NotJustPosting = () => {
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
            Not just posting. <span className="text-[#F20574]">Performing.</span>
          </h2>
          
          <div className="text-xl md:text-2xl text-gray-700 leading-relaxed space-y-6">
            <p>
              There's a difference between a brand that posts and a brand that <span className="italic font-bold">shows up</span>. Consistency matters, sure, but content without strategy is just noise. Without the right hooks, formats, and voice, even the most beautiful reel disappears in 48 hours.
            </p>
            <p className="font-bold text-black border-l-4 border-[#7B5CF0] pl-6 text-left italic">
              We engineer content that's built to perform, on the algorithm, in the feed, and in your audience's head long after they've scrolled past.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NotJustPosting;
