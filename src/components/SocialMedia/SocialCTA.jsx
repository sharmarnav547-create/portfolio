import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const SocialCTA = () => {
  return (
    <section className="py-32 relative z-10 text-black overflow-hidden text-center bg-gray-50 border-t border-black/10">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#7B5CF0]/10 blur-[100px] rounded-full pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black uppercase tracking-tight">
            We Help Brands Become Part of the Conversation.
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium mb-16">
            From scroll-stopping content to community engagement, we help brands show up where it matters. By combining creativity, strategy, and audience insights, we turn followers into an active community and keep your brand at the center of the conversation.
          </p>
          
          <div className="flex justify-center">
            <AnimatedLayerButton className="w-auto px-16 py-4 h-16 text-xl">
              Let's Talk
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialCTA;
