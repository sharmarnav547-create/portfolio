import React from 'react';
import { motion } from 'framer-motion';
import { Target, Search, BarChart4, Repeat2, Calculator } from 'lucide-react';

const services = [
  {
    title: "Meta Ads: Instagram & Facebook",
    desc: "Reach the right people at the right time. We build scroll-stopping creatives paired with precise targeting, interest stacks, lookalikes, retargeting funnels, so your ads reach people ready to buy, not just browse.",
    icon: Target,
    color: "#FD4E02"
  },
  {
    title: "Google Ads: Search & Performance Max",
    desc: "Capture intent at its peak. When someone's searching for exactly what you sell, we make sure you're the first thing they find, and the first one they click.",
    icon: Search,
    color: "#F20574"
  },
  {
    title: "Conversion Tracking & Analytics",
    desc: "What gets measured gets improved. We set up proper tracking, reporting, and attribution systems so every marketing decision is backed by data, not guesswork.",
    icon: BarChart4,
    color: "#7B5CF0"
  },
  {
    title: "Retargeting",
    desc: "Most people don't buy the first time. We help you stay visible, nurture interest, and bring potential customers back when they're ready to take action. We build campaigns that re-engage, nurture, and convert without spamming anyone's inbox.",
    icon: Repeat2,
    color: "#E2FC37",
    textColor: "#000"
  },
  {
    title: "Media Planning & Budget Strategy",
    desc: "Where should your money actually go? We map it out, platform by platform, audience by audience, so every rupee has a job and nothing gets wasted on gut feelings.",
    icon: Calculator,
    color: "#000000"
  }
];

const PerformanceServices = () => {
  return (
    <section className="py-24 relative z-10 text-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-black uppercase tracking-tight">
            Everything You Need To Turn <br /> <span className="text-[#FD4E02]">Marketing Into Revenue</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Make the 4th and 5th items span wider if needed, or just let them wrap
            // For a 5 item grid, we can span the last two to look balanced
            const spanClass = index > 2 ? "lg:col-span-3 md:col-span-2" : "";
            
            // Wait, spanning 3 columns for one item is huge. Let's just use normal grid and let it wrap naturally.
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white border border-black/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group`}
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
      </div>
    </section>
  );
};

export default PerformanceServices;
