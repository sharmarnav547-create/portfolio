import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const checklistItems = [
  "Build brand awareness",
  "Grow an engaged community",
  "Increase trust and credibility",
  "Drive leads and sales",
  "Stay relevant and top-of-mind"
];

const WhySocialMatters = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-8 text-black uppercase tracking-tight leading-[1.1]">
                Why Social Media <span className="text-[#FD4E02]">Marketing Matters</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Your audience is already scrolling, discovering brands, and making decisions online. A strong social media presence helps you stay visible, build trust, and turn everyday interactions into real business growth.
              </p>
              
              <p className="font-bold text-2xl text-[#7B5CF0] mt-8 p-6 bg-[#7B5CF0]/5 rounded-2xl border border-[#7B5CF0]/20">
                Because brands that connect are the brands people remember.
              </p>
            </motion.div>
          </div>

          {/* Right Checklist */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-black/10 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E2FC37]/30 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="space-y-6 relative z-10">
                {checklistItems.map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 text-[#F20574]">
                      <CheckCircle2 size={32} />
                    </div>
                    <span className="text-2xl font-bold text-gray-800">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhySocialMatters;
