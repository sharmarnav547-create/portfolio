import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Funnel.module.css';

const funnelStages = [
  { id: 'attention', name: '1 ATTENTION', desc: "We capture eyeballs using high-impact, scroll-stopping creative." },
  { id: 'interest', name: '2 INTEREST', desc: "We hold attention with compelling narratives and irresistible hooks." },
  { id: 'consideration', name: '3 CONSIDERATION', desc: "We build trust and authority through social proof and deep-dive content." },
  { id: 'conversion', name: '4 CONVERSION', desc: "We engineer seamless paths to purchase with optimized UX." },
  { id: 'loyalty', name: '5 LOYALTY', desc: "We turn customers into evangelists for ultimate LTV." },
];

const Funnel = () => {
  const [activeStage, setActiveStage] = useState(funnelStages[0]);

  return (
    <section className={styles['funnel-section']}>
      <div className="container">
        <div className={styles['funnel-container']}>
          <div className={styles['funnel-info']}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '24px', fontWeight: '900', color: '#7B5CF0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>FUNNEL</h2>
            <p style={{ color: '#7B5CF0', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '2rem', fontWeight: '500' }}>
              Every stage has a job. Hover over any stage to see how we move people from a thumb-stop to a loyal customer.
            </p>
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginBottom: '12px' }}>
                {activeStage.name}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {activeStage.desc}
              </p>
            </motion.div>
          </div>

          <div className={styles['funnel-visual']}>
            <div className={styles['data-flow']}>
              <motion.div
                className={styles.particle}
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            
            {funnelStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className={`${styles['funnel-stage']} ${styles[`stage-${index}`]} ${activeStage.id === stage.id ? styles.active : ''}`}
                onHoverStart={() => setActiveStage(stage)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stage.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funnel;
