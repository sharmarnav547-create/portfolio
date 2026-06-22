import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, PenTool, BarChart3, Users, MonitorPlay, MessageSquare } from 'lucide-react';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const services = [
  {
    title: "Content Strategy",
    desc: "We build a content plan designed around your audience, goals, and brand personality.",
    icon: LayoutDashboard,
    color: "#FD4E02"
  },
  {
    title: "Content Creation",
    desc: "Content designed to stop the scroll and keep people engaged including carousel, content calendar, reels, graphics and short form content.",
    icon: MonitorPlay,
    color: "#F20574"
  },
  {
    title: "Social Media Management",
    desc: "Your audience is online every day. We make sure your brand is too—with consistent content, timely engagement, and a social presence.",
    icon: Users,
    color: "#7B5CF0"
  },
  {
    title: "Community Engagement",
    desc: "We help brands build stronger relationships by actively engaging with their audience in DMs, groups and Communities.",
    icon: MessageSquare,
    color: "#E2FC37",
    textColor: "#000"
  },
  {
    title: "Social Campaigns",
    desc: "We don't just market brands—we tell their story, real narratives, real connections, real impact. Because the best content feels human.",
    icon: BarChart3,
    color: "#FD4E02"
  },
  {
    title: "Data-Backed Decisions",
    desc: "We don't rely on guesswork. By tracking reach, engagement, audience behavior, content performance, and conversions, we turn insights into strategies that drive real growth. Every decision is backed by data—helping your brand grow smarter, not harder.",
    icon: PenTool,
    color: "#7B5CF0"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-24 relative z-10 text-black bg-gray-50 border-y border-black/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
            Content People Actually Want to See
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-xl text-gray-600 font-medium">
            <p>Let's be honest.</p>
            <p className="text-[#F20574] font-bold text-2xl">Nobody opens Instagram hoping to see another boring sales post.</p>
            <p>People follow brands that entertain, educate, inspire, or make them feel something.</p>
            <p>That's why we focus on creating content that fits naturally into the feed while keeping your brand impossible to ignore.</p>
          </div>
        </div>

        <h3 className="text-3xl font-black mb-10 text-center uppercase tracking-widest text-[#7B5CF0]">What We Do</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-black/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: service.color, color: service.textColor || '#fff' }}
                >
                  <Icon size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-[#FD4E02] transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16">
          <AnimatedLayerButton className="w-auto px-16 py-4 h-16 text-xl">
            Enquire Now
          </AnimatedLayerButton>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
