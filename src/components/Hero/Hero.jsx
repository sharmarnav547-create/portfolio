import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Hero.module.css';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const words = ["ATTENTION", "GROWTH", "AUTHORITY", "REVENUE"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className={styles.hero}>
      <div className={styles['hero-bg']}></div>
      <div className={`${styles.blob} ${styles['blob-1']}`}></div>
      <div className={`${styles.blob} ${styles['blob-2']}`}></div>
      
      <div className={`container ${styles['hero-container']}`}>
        <div className={styles['hero-content']}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className={styles.headline}>
              We make brands go viral<br/>
              or<br/>
              We don't do average.
            </h1>
            
            <p className={styles.subheadline}>
              Built for brands that refuse to be background noise. We mix sharp creative with data-backed execution, so your next post isn't just pretty, it's profitable. Let's get you talked about.
            </p>
            
            <div className={styles['cta-group']}>
              <AnimatedLayerButton>Start Project</AnimatedLayerButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
