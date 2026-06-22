import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Handshake, PenTool, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: "discover",
    title: "Discover",
    icon: Search,
    desc: "We identify creators whose audience aligns with your brand.",
    color: "#FD4E02"
  },
  {
    id: "collaborate",
    title: "Collaborate",
    icon: Handshake,
    desc: "We build authentic partnerships that feel natural, not forced.",
    color: "#7B5CF0"
  },
  {
    id: "create",
    title: "Create",
    icon: PenTool,
    desc: "Creators produce content that resonate with their communities.",
    color: "#F20574"
  },
  {
    id: "grow",
    title: "Grow",
    icon: TrendingUp,
    desc: "Track engagement, awareness, and conversions with clear reporting.",
    color: "#E2FC37"
  }
];

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            How We Make It Happen
          </h2>
          <p className="text-xl font-bold text-[#7B5CF0] uppercase tracking-widest mb-6">
            From Strategy to Results
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Influencer marketing isn't just about finding creators. It's about finding the right creators, crafting the right script, and measuring the results.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-16">
          {/* Tabs */}
          <div className="flex flex-col gap-4 w-full lg:w-1/3">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = activeStep.id === step.id;
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step)}
                  className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border ${
                    isActive 
                      ? 'bg-white border-[#7B5CF0] shadow-lg scale-105' 
                      : 'bg-transparent border-transparent hover:bg-gray-50'
                  }`}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                      isActive ? 'text-white' : 'bg-gray-100 text-gray-500'
                    }`}
                    style={{ backgroundColor: isActive ? step.color : undefined }}
                  >
                    <Icon size={24} />
                  </div>
                  <span className={`text-xl font-bold uppercase tracking-wide ${isActive ? 'text-black' : 'text-gray-500'}`}>
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-gray-50 border border-black/10 rounded-3xl p-10 md:p-16 h-full min-h-[300px] flex items-center relative overflow-hidden">
              {/* Animated Accent Background */}
              <motion.div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                animate={{ backgroundColor: activeStep.color }}
                transition={{ duration: 0.5 }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <activeStep.icon size={40} color={activeStep.color} />
                    <h3 className="text-4xl font-black uppercase text-black" style={{ color: activeStep.color }}>
                      {activeStep.title}
                    </h3>
                  </div>
                  <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                    {activeStep.desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
