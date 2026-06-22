import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Audit & Research",
    desc: "We analyze your brand, audience, competitors, and current social performance and research on the trends that go with your brands.",
    color: "#FD4E02"
  },
  {
    title: "Strategy Development",
    desc: "We create a customized roadmap including content calendar, Content ideas that aligned with your business goals.",
    color: "#F20574"
  },
  {
    title: "Content Creation",
    desc: "Our team develops engaging content tailored for each platform that engage and connect your audience smoothly.",
    color: "#7B5CF0"
  },
  {
    title: "Publishing & Management",
    desc: "We schedule, manage, and optimize your social presence consistently.",
    color: "#E2FC37",
    textColor: "#000"
  },
  {
    title: "Measure & Improve",
    desc: "Through data and insights, we continuously refine strategies for better results.",
    color: "#000000"
  }
];

const Framework = () => {
  return (
    <section className="py-32 relative z-10 text-black bg-white border-t border-black/5">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            Our Framework
          </h2>
          <p className="text-2xl font-bold text-[#FD4E02] uppercase tracking-widest">
            Strategy First. Content Second.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-white hidden md:flex items-center justify-center text-white font-black z-10 shadow-lg" style={{ backgroundColor: step.color, color: step.textColor || '#fff' }}>
                    {index + 1}
                  </div>
                  
                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-5/12"
                  >
                    <div className="bg-gray-50 border border-black/10 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-2 h-full transition-all duration-300 group-hover:w-full opacity-10" style={{ backgroundColor: step.color }}></div>
                      
                      <div className="md:hidden w-10 h-10 rounded-full mb-4 flex items-center justify-center text-white font-black" style={{ backgroundColor: step.color, color: step.textColor || '#fff' }}>
                        {index + 1}
                      </div>
                      
                      <h3 className="text-2xl font-black mb-3 uppercase relative z-10" style={{ color: step.color }}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
