import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Process.module.css';

const steps = [
  { id: "01", title: "Discovery" },
  { id: "02", title: "Strategy" },
  { id: "03", title: "Creation" },
  { id: "04", title: "Launch" },
  { id: "05", title: "Optimization" }
];

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className={styles['process-section']} ref={ref}>
      <div className="container">
        <motion.div 
          className={styles['section-header']}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2>How We Build <span className="text-gradient-accent">Authority</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>A scientifically proven process to engineer growth.</p>
        </motion.div>

        <div className={styles['process-grid']}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles['process-card']}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles['process-step']}>{step.id}</div>
              <h3>{step.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
