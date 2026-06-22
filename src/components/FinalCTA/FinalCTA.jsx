import React from 'react';
import { motion } from 'framer-motion';
import styles from './FinalCTA.module.css';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const FinalCTA = () => {
  return (
    <section className={styles['finalcta-section']}>
      <div className={`${styles.blob} ${styles['blob-1']}`}></div>
      <div className={`${styles.blob} ${styles['blob-2']}`}></div>
      <div className={`container ${styles['content-wrapper']}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <h2 className={styles.headline} style={{ fontSize: '4rem', fontWeight: '900', color: '#7B5CF0', letterSpacing: '-0.02em', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Ready to go <span style={{ color: '#E2FC37' }}>viral?</span><br />
            Let's make it <span style={{ color: '#FD4E02' }}>loud.</span>
          </h2>
          <p style={{ color: '#7B5CF0', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '3rem' }}>
            Less lurking, more launching. Let's build something loud.
          </p>
        </motion.div>
        
          <AnimatedLayerButton>Start Project</AnimatedLayerButton>
      </div>
    </section>
  );
};

export default FinalCTA;
