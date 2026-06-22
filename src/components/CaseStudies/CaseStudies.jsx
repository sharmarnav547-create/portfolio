import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './CaseStudies.module.css';
import { GlowCard } from '../ui/spotlight-card';

const caseStudies = [
  {
    client: "Project Nova",
    challenge: "Stagnant growth and outdated visual identity in a highly competitive tech market.",
    solution: "Complete rebrand, 3D web experience, and aggressive TikTok performance marketing.",
    metrics: [
      { label: "Revenue", value: "+340%" },
      { label: "CPA", value: "-45%" },
      { label: "Followers", value: "2.1M" }
    ]
  },
  {
    client: "Aether Dynamics",
    challenge: "High customer acquisition cost and low lifetime value.",
    solution: "Implementation of a high-ticket sales funnel and community-driven content strategy.",
    metrics: [
      { label: "ROAS", value: "4.8x" },
      { label: "LTV", value: "+120%" },
      { label: "Leads", value: "15k+" }
    ]
  },
  {
    client: "Quantum Wear",
    challenge: "Low brand awareness for a futuristic streetwear brand.",
    solution: "Viral influencer campaigns and interactive augmented reality lookbooks.",
    metrics: [
      { label: "Views", value: "85M" },
      { label: "Sales", value: "+600%" },
      { label: "Virality", value: "Top 1%" }
    ]
  }
];

const CaseStudies = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section id="case-studies" className={styles['casestudies-section']} ref={targetRef} style={{ height: '200vh' }}>
      <div style={{ position: 'sticky', top: '100px', overflow: 'hidden' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Proven <span className="text-gradient-accent">Dominance</span></h2>
        </div>
        
        <motion.div style={{ x }} className={styles['horizontal-scroll-container']}>
          {/* Add empty space to start so first card aligns with container */}
          <div style={{ width: '10vw' }}></div>
          {caseStudies.map((study, index) => (
            <GlowCard key={index} customSize glowColor="orange" className={styles['case-card']}>
              <div className={styles['client-name']}>{study.client}</div>
              <div className={styles['challenge-solution']}>
                <div className={styles['cs-block']}>
                  <h4>The Challenge</h4>
                  <p>{study.challenge}</p>
                </div>
                <div className={styles['cs-block']}>
                  <h4>The Solution</h4>
                  <p>{study.solution}</p>
                </div>
              </div>
              <div className={styles['metrics-grid']}>
                {study.metrics.map((m, i) => (
                  <div key={i} className={styles['metric-box']}>
                    <div className={styles['metric-value']}>{m.value}</div>
                    <div className={styles['metric-label']}>{m.label}</div>
                  </div>
                ))}
              </div>
            </GlowCard>
          ))}
          <div style={{ width: '10vw' }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
