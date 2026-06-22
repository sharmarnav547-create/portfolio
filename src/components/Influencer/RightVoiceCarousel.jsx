import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const voiceTiers = [
  {
    title: "Celebrity Creators (1M+)",
    subtitle: "Mass awareness at scale",
    desc: "Perfect for product launches, nationwide campaigns, and brands looking to maximize visibility.",
    color: "#FD4E02"
  },
  {
    title: "Macro Influencers (100K-1M)",
    subtitle: "Reach with credibility",
    desc: "Ideal for brands that want strong exposure while maintaining authentic audience connections.",
    color: "#7B5CF0"
  },
  {
    title: "Niche Creators",
    subtitle: "Experts people trust",
    desc: "From beauty and fitness to tech and finance, niche creators bring authority and highly engaged communities.",
    color: "#E2FC37",
    textColor: "#000"
  },
  {
    title: "Micro Influencers",
    subtitle: "Smaller audience. Stronger connection.",
    desc: "Known for loyal communities and authentic engagement, making them powerful drivers of trust and conversions.",
    color: "#F20574"
  }
];

const RightVoiceCarousel = () => {
  const carouselRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 relative z-10 text-black overflow-hidden bg-gray-50 border-y border-black/5">
      <div className="container mx-auto px-4 max-w-6xl mb-12">
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-black uppercase tracking-tight">
          Find The Right Voice for Your Brand
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl">
          We don't believe in one-size-fits-all influencer marketing. Every campaign needs the right creator, audience, and strategy to make an impact.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div ref={carouselRef} className="cursor-grab overflow-hidden border border-black/10 rounded-3xl p-4 bg-white shadow-xl">
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-6"
            whileTap={{ cursor: "grabbing" }}
          >
            {voiceTiers.map((tier, index) => (
              <motion.div 
                key={index}
                className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl flex flex-col justify-between"
                style={{ backgroundColor: tier.color, color: tier.textColor || "#fff" }}
                whileHover={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-black mb-2 uppercase leading-tight">
                    {tier.title}
                  </h3>
                  <p className="font-bold text-lg mb-6 opacity-90">
                    {tier.subtitle}
                  </p>
                </div>
                <p className="text-lg leading-relaxed font-medium opacity-90">
                  {tier.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        <div className="flex justify-center mt-12">
          <AnimatedLayerButton>
            Let's make it happen
          </AnimatedLayerButton>
        </div>
      </div>
    </section>
  );
};

export default RightVoiceCarousel;
