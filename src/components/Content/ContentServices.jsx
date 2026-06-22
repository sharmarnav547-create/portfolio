import React from 'react';
import { motion } from 'framer-motion';
import { Video, Camera, PenTool, CalendarClock } from 'lucide-react';
import { AnimatedLayerButton } from '../ui/animated-layer-button';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Reels & Shorts",
    desc: "Six seconds to earn attention. Three to lose it. We script, shoot, and edit short-form video content built for the way people actually consume, fast, visual, and straight to the point. Hooks that hold. Edits that hit.",
    icon: Video,
    color: "#FD4E02"
  },
  {
    title: "Photo & Video Production",
    desc: "From product shoots to brand films and social content, we create assets that look premium and feel authentic. We handle the full production, concept, shoot, edit, delivery. On-brand, on-brief, always on point.",
    icon: Camera,
    color: "#F20574"
  },
  {
    title: "Copywriting",
    desc: "Words that work. Whether it's a caption, a website headline, an ad script, or an email, we write in your voice, unmistakenly.",
    icon: PenTool,
    color: "#7B5CF0"
  },
  {
    title: "Content Calendars",
    desc: "Winging it every week is not a content strategy. Consistency builds brands. We build structured, platform-specific content calendars that map out what goes up, when, and why, so your brand never goes quiet and never goes off-brand.",
    icon: CalendarClock,
    color: "#E2FC37",
    textColor: "#000"
  }
];

const ContentServices = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110 shadow-sm"
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-black/10 rounded-3xl p-10 max-w-4xl mx-auto text-center shadow-lg"
        >
          <h3 className="text-3xl font-black uppercase tracking-widest text-black mb-6">
            Posting consistently but not seeing results?
          </h3>
          <p className="text-xl text-gray-700 italic mb-8">
            Book a free content audit, we'll tell you exactly what's working, what isn't, and what your feed should look like.
          </p>
          <div className="flex justify-center">
            <AnimatedLayerButton className="w-auto px-10 py-3 h-14 text-lg flex items-center gap-2">
              Get my free audit <ArrowUpRight size={20} />
            </AnimatedLayerButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContentServices;
