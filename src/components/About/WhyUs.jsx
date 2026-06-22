import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
  {
    num: "1",
    title: "We Make Brands Scroll-Stopping",
    desc: "Content and creatives that grab attention instantly."
  },
  {
    num: "2",
    title: "Growth > Vanity Metrics",
    desc: "We're focused on leads, sales, and real business impact."
  },
  {
    num: "3",
    title: "Trend-Aware, Not Trend-Chasers",
    desc: "We know what's working right now—and how to make it work for your brand."
  },
  {
    num: "4",
    title: "Strategy Meets Creativity",
    desc: "Good-looking content is great. Content that performs is better."
  },
  {
    num: "5",
    title: "Built to Scale with You",
    desc: "From startup mode to growth mode, we're with you every step of the way."
  }
];

const WhyUs = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            Why Pitch Brands?
          </h2>
          <div className="w-24 h-1 bg-[#FD4E02] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-black/10 rounded-2xl p-8 hover:border-[#7B5CF0] transition-colors duration-300 group shadow-lg hover:shadow-xl"
            >
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-2xl font-black text-[#FD4E02] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(253,78,2,0.15)]">
                {reason.num}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-[#7B5CF0] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
