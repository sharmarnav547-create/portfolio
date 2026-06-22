import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, PenTool, Video, Target, Code } from 'lucide-react';
import styles from './Services.module.css';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const servicesData = [
  {
    id: 1,
    title: "Social Media Management",
    icon: <Share2 size={28} />,
    desc: "We don't just post. We build cult-like followings across all major platforms.",
    benefits: ["Platform-specific strategy", "Community management", "Trend analysis"],
    outcome: "10x Engagement Rate"
  },
  {
    id: 2,
    title: "Branding",
    icon: <PenTool size={28} />,
    desc: "Visual identities that demand respect and establish absolute authority.",
    benefits: ["Visual Identity", "Brand Guidelines", "Voice & Tone definition"],
    outcome: "Unforgettable Brand Recall"
  },
  {
    id: 3,
    title: "Content Creation",
    icon: <Video size={28} />,
    desc: "High-retention video and static content engineered for virality.",
    benefits: ["Short-form video", "High-end photography", "Copywriting"],
    outcome: "Viral Distribution"
  },
  {
    id: 4,
    title: "Performance Marketing",
    icon: <Target size={28} />,
    desc: "Data-driven ad campaigns designed for maximum ROAS and scalability.",
    benefits: ["Media Buying", "A/B Testing", "Conversion Tracking"],
    outcome: "300%+ Average ROAS"
  },
  {
    id: 5,
    title: "Web Development",
    icon: <Code size={28} />,
    desc: "Premium, high-conversion web experiences that dominate your industry.",
    benefits: ["Custom React/Vite", "3D WebGL", "SEO Optimization"],
    outcome: "Industry-Leading Conversion Rates"
  }
];

const Services = () => {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section id="services" className={styles['services-section']}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', color: '#7B5CF0' }}>Five ways we make you <span style={{ color: '#FD4E02' }}>unmissable.</span></h2>
          <p style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>ONE STUDIO. FIVE SERVICES. ZERO MEDIOCRITY.</p>
        </div>

        <div className={styles['services-grid']}>
          {servicesData.map((service) => (
            <motion.div
              layout
              key={service.id}
              className={styles['service-card']}
              onHoverStart={() => setExpandedId(service.id)}
              onHoverEnd={() => setExpandedId(null)}
              whileHover={{ y: -5 }}
              transition={{ layout: { duration: 0.3, type: "spring" } }}
            >
              <motion.div layout className={styles['service-icon']}>
                {service.icon}
              </motion.div>
              <motion.h3 layout className={styles['service-title']}>{service.title}</motion.h3>
              <motion.p layout className={styles['service-desc']}>{service.desc}</motion.p>
              
              <AnimatePresence>
                {expandedId === service.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={styles['service-expanded']}
                  >
                    <ul className={styles['benefits-list']}>
                      {service.benefits.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                    <div className={styles.outcome}>
                      <span>Expected Outcome</span>
                      <p>{service.outcome}</p>
                    </div>
                    <AnimatedLayerButton className={styles['service-cta']}>Explore Service</AnimatedLayerButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
