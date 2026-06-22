import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';
import { ArrowUpRight } from 'lucide-react';

const ContentHero = () => {
  return (
    <section className="relative pt-32 pb-24 z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-8 px-4 py-1.5 rounded-full bg-[#7B5CF0]/10 border border-[#7B5CF0]/20 text-[#7B5CF0] font-bold text-sm tracking-widest uppercase">
            Services / Content
          </div>
          
          <div className="w-full max-w-6xl mx-auto mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <img src="/images/content-banner.png" alt="Content Marketing Banner" className="w-full h-auto object-cover" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-black uppercase tracking-tight leading-[1.1] flex flex-col items-center justify-center">
            <span className="text-2xl md:text-3xl text-gray-500 mb-4 tracking-normal">Most content gets ignored. <span className="text-black italic">Yours won't.</span></span>
            <span className="text-gradient-accent">
              Don't Just Post. Make An Impact.
            </span>
          </h1>
          
          <div className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 space-y-4">
            <p>
              Every day, your audience scrolls past thousands of posts. They stop for maybe three seconds, if something earns it. Content marketing is the art of earning those three seconds, then turning them into clicks, followers, DMs, and sales.
            </p>
            <p className="font-medium text-black">
              We don't make content for the sake of it. We make content that does a job, stops the scroll, starts the conversation, and sounds unmistakably like you.
            </p>
          </div>

          <div className="flex justify-center">
            <AnimatedLayerButton className="w-auto px-12 py-4 h-16 text-xl flex items-center gap-2">
              Let's create <ArrowUpRight size={24} />
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentHero;
