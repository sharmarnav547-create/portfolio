import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    num: "1",
    title: "Brand Awareness",
    desc: "Increase your brand's visibility and reach the right audience at scale."
  },
  {
    num: "2",
    title: "Community Engagement",
    desc: "Build meaningful connections and encourage conversations around your brand."
  },
  {
    num: "3",
    title: "Lead Generation",
    desc: "Attract potential customers and turn interest into valuable business opportunities."
  },
  {
    num: "4",
    title: "User-Generated Content",
    desc: "Leverage authentic content created by real users to build trust and credibility."
  },
  {
    num: "5",
    title: "Sales Growth",
    desc: "Drive conversions and turn audience engagement into measurable revenue."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            Why Brands Choose PitchBrands
          </h2>
          <p className="text-xl text-[#FD4E02] font-semibold uppercase tracking-wider">
            More than Influencer Marketing, we provide
          </p>
        </div>

        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-black/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 hover:border-[#FD4E02] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-3xl font-black text-[#7B5CF0] group-hover:scale-110 transition-transform duration-300 group-hover:bg-[#FD4E02] group-hover:text-white">
                {benefit.num}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-black group-hover:text-[#FD4E02] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
