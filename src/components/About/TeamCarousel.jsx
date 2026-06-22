import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    id: 1,
    name: "Alex Vance",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Head of Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Marcus Thorne",
    role: "Lead Performance Marketer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Art Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "David Kim",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Olivia Trent",
    role: "Copy Chief",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const TeamCarousel = () => {
  return (
    <section className="py-24 relative z-10 text-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
          Our Team
        </h2>
        <div className="w-24 h-1 bg-[#7B5CF0] mx-auto mt-4"></div>
      </div>

      <div className="w-full relative flex overflow-x-hidden">
        {/* We use framer motion to infinitely translate the container */}
        <motion.div 
          className="flex whitespace-nowrap gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30
          }}
        >
          {/* Double the array to create seamless infinite loop */}
          {[...teamMembers, ...teamMembers].map((member, idx) => (
            <div 
              key={`${member.id}-${idx}`} 
              className="flex-shrink-0 w-72 md:w-80 h-[400px] relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 hover:border-[#FD4E02] transition-colors"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-2xl font-black text-white">{member.name}</h4>
                <p className="text-[#FD4E02] font-semibold">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamCarousel;
