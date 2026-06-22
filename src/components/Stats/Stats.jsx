import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Stats.module.css';

const StatCounter = ({ from, to, suffix, label }) => {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = from;
      const end = to;
      const duration = 2000;
      let startTime = null;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function for smooth deceleration
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        const currentCount = Math.floor(start + (end - start) * easeOutQuart);
        
        setCount(currentCount);

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, from, to]);

  return (
    <div className={styles['stat-card']} ref={ref}>
      <div className={styles['stat-value-container']}>
        <span className={styles['stat-value']}>{count}</span>
        <span className={styles['stat-suffix']}>{suffix}</span>
      </div>
      <div className={styles['stat-label']}>{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className={styles['stats-section']}>
      <div className="container">
        <div className={styles['stats-grid']}>
          <StatCounter from={0} to={100} suffix="M+" label="Views Generated" />
          <StatCounter from={0} to={500} suffix="+" label="Campaigns" />
          <StatCounter from={0} to={95} suffix="%" label="Retention" />
          <StatCounter from={0} to={50} suffix="+" label="Brands" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
