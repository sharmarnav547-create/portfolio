import React from 'react';
import { motion } from 'framer-motion';

const AdsEarnKeep = () => {
  return (
    <section className="py-24 relative z-10 text-black bg-gray-50 border-y border-black/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight leading-[1.1]">
                What Performance <br/> Marketing Actually Means
              </h2>
            </motion.div>
          </div>

          <div className="w-full lg:w-7/12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-black/10 rounded-3xl p-8 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F20574]/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-3xl font-black uppercase tracking-widest text-[#F20574]">
                  Ads that earn their keep.
                </h3>
                
                <p className="text-xl text-gray-700 leading-relaxed font-medium">
                  Most brands are paying for reach. We optimize for revenue. There's a difference, and your bank account knows it.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Performance marketing isn't about spending more. It's about spending smarter. Where every campaign has a clear job: drive clicks, generate leads, close sales. We build, test, and scale paid campaigns across Meta, Google, and beyond, backed by data, sharpened by creative, and measured by outcomes that actually matter to your business.
                </p>

                <div className="pt-4">
                  <span className="inline-block px-6 py-3 bg-black text-white font-bold text-lg rounded-xl">
                    No spray and pray. No budget burning. Just performance.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdsEarnKeep;
