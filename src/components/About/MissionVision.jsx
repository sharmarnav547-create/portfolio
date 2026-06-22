import React from 'react';
import { motion } from 'framer-motion';

const MissionVision = () => {
  return (
    <section className="py-24 relative z-10 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 bg-gradient-to-br from-[#1a1a2e] to-[#111] border border-[#7B5CF0]/30 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7B5CF0]/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
              Our Mission
            </h3>
            
            <div className="space-y-4 text-xl text-gray-300 relative z-10">
              <p className="font-bold text-[#7B5CF0]">
                To build brands that people don't just notice—they connect with.
              </p>
              <p>
                At PitchBrands, our mission is to transform bold ideas into memorable digital experiences, helping businesses earn attention, build trust, and inspire action.
              </p>
              <p>
                In a world full of content, we help brands become unforgettable.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 bg-gradient-to-bl from-[#2a130c] to-[#111] border border-[#FD4E02]/30 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FD4E02]/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
            
            <h3 className="text-4xl font-black text-white uppercase tracking-tight mb-6 relative z-10">
              Our Vision
            </h3>
            
            <div className="space-y-4 text-xl text-gray-300 relative z-10">
              <p className="font-bold text-[#FD4E02]">
                To create brands that own attention, spark conversations, and stay relevant in a constantly evolving digital world.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
