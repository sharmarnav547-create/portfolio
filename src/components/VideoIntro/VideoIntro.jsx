import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import styles from './VideoIntro.module.css';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const VideoIntro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" className={styles['video-section']} ref={ref}>
      <div className="container">
        <motion.div 
          className={styles['video-container']}
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={styles['video-inner']}>
            <div className={styles['video-placeholder']}></div>
            <AnimatedLayerButton className={styles['play-button']}>
              <Play size={32} fill="currentColor" style={{ marginLeft: '4px' }} />
            </AnimatedLayerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoIntro;
