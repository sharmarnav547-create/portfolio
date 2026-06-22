import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './WhyWeExist.module.css';

const WhyWeExist = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why" className={styles['story-section']} ref={ref}>
      <div className="container">
        <motion.div 
          className={styles['story-header']}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
            Why we exist - About us & Objectives
          </p>
          <h2 className={styles.quote}>
            "Posting isn't a strategy.<br/>
            <span className={styles.highlight}>Being unforgettable is.</span>"
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginTop: '2rem', maxWidth: '800px', marginInline: 'auto', lineHeight: '1.6' }}>
            In a feed that never sleeps, attention isn't just valuable, it's everything. And attention without strategy is just noise with better lighting. We exist to change that. PitchBrands is where bold creative meets ruthless performance, building brands that don't just show up in the feed, but own it. Because being seen is good. Being unforgettable is the business.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeExist;
