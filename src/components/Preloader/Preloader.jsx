import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styles from './Preloader.module.css';
import { Logo } from '../ui/Logo';

const Preloader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      width: "100%",
      transition: { duration: 1.5, ease: "easeInOut" }
    });
  }, [controls]);

  return (
    <motion.div 
      className={styles.preloader}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <motion.div 
        className={styles['logo-container']}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-center scale-150 mb-8">
          <Logo style={{ fontSize: '1.2rem' }} />
        </div>
      </motion.div>

      <div className={styles['progress-bar-container']}>
        <motion.div 
          className={styles['progress-bar']}
          animate={controls}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
