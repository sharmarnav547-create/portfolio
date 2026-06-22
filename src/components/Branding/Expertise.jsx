import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Layers, BookOpen, MessageSquare, BookMarked, Box } from 'lucide-react';

const expertiseItems = [
  {
    title: "Logo Design",
    desc: "Your logo is doing a lot of heavy lifting. We make sure it's built for it. Clean, memorable, and loaded with meaning. No generic gradients. No forgettable marks. We create visual identities that feel fresh, relevant, and built to last, not trendy for six months.",
    icon: PenTool,
    color: "#FD4E02"
  },
  {
    title: "Visual Identity",
    desc: "Colours, typography, imagery, layouts, everything that makes your brand feel like something before a word is read. We build visual systems that work across every platform, every format.",
    icon: Layers,
    color: "#F20574"
  },
  {
    title: "Visual Identity System",
    desc: "Colors. Typography. Imagery. Layouts. Design language. Everything that makes your brand feel like something before a word is read. We build visual systems that work across every platform, every format.",
    icon: BookOpen,
    color: "#7B5CF0"
  },
  {
    title: "Brand Messaging",
    desc: "What you say matters. How you say it matters even more. We craft your brand voice, tagline, and core messaging so every caption, ad, and email sounds like you, human, confident and unmistakable yours.",
    icon: MessageSquare,
    color: "#E2FC37",
    textColor: "#000"
  },
  {
    title: "Brand Guidelines",
    desc: "Consistency is what turns a good brand into a great one. We document every rule. No more guessing. Your brand playbook keeps every designer, marketer, and team member aligned so your brand looks and sounds the same everywhere.",
    icon: BookMarked,
    color: "#FD4E02"
  },
  {
    title: "Packaging & Collateral",
    desc: "From business cards to product packaging, we make sure your brand hits different in the physical world too. Because first impressions exist offline as well.",
    icon: Box,
    color: "#000000"
  }
];

const Expertise = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
            Our Expertise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
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
                  style={{ backgroundColor: item.color, color: item.textColor || '#fff' }}
                >
                  <Icon size={28} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-black group-hover:text-[#FD4E02] transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
