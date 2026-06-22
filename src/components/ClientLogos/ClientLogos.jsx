import React from 'react';
import styles from './ClientLogos.module.css';

const logos = [
  "NEXUS", "SYNTH", "AURA", "QUANTUM", "CYBER", "ECHO", "STELLAR", "VORTEX"
];

const ClientLogos = () => {
  return (
    <section className={styles['logos-section']}>
      <div className={styles['marquee-container']}>
        {/* Render twice for infinite loop effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles['logo-item']}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientLogos;
