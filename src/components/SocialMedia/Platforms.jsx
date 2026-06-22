import React from 'react';
import { motion } from 'framer-motion';

const InstagramIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedinIcon = ({ size, className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const platforms = [
  {
    name: "Instagram",
    desc: "Build brand awareness through engaging visuals, reels, stories, and creator collaborations.",
    icon: InstagramIcon,
    gradient: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    shadow: "shadow-[0_10px_30px_-10px_rgba(253,29,29,0.5)]"
  },
  {
    name: "Facebook",
    desc: "Reach communities, generate leads, and stay connected with your audience.",
    icon: FacebookIcon,
    gradient: "from-[#1877F2] to-[#0C5EBF]",
    shadow: "shadow-[0_10px_30px_-10px_rgba(24,119,242,0.5)]"
  },
  {
    name: "LinkedIn",
    desc: "Position your business as an industry leader through professional content and thought leadership.",
    icon: LinkedinIcon,
    gradient: "from-[#0A66C2] to-[#004182]",
    shadow: "shadow-[0_10px_30px_-10px_rgba(10,102,194,0.5)]"
  }
];

const Platforms = () => {
  return (
    <section className="py-24 relative z-10 text-black overflow-hidden">
      <div className="absolute inset-0 bg-white z-0"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
            Platforms We Manage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${platform.shadow}`}></div>
                
                <div className="bg-white border border-black/10 rounded-3xl p-10 h-full relative z-10 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${platform.gradient}`}></div>
                  
                  <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-white transition-colors duration-500 shadow-sm border border-gray-100">
                    <Icon size={32} className="text-black group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  
                  <h3 className="text-3xl font-black mb-4 text-black">
                    {platform.name}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {platform.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Platforms;
