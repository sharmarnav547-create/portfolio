import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: "They completely redefined our digital presence. We saw a 300% increase in qualified leads within the first quarter.",
    name: "Elena Rodriguez",
    role: "CMO, Nexus Tech",
    initials: "ER"
  },
  {
    quote: "Not just an agency. They act like an extension of our own team. The design is futuristic and conversion rates are off the charts.",
    name: "James Chen",
    role: "Founder, Synth AI",
    initials: "JC"
  },
  {
    quote: "We wanted to look like the Apple of our industry. Futurism delivered exactly that. Our brand authority is unmatched now.",
    name: "Sarah Jenkins",
    role: "CEO, Quantum Dynamics",
    initials: "SJ"
  },
  {
    quote: "The interactive 3D experiences they built for us broke the internet. Absolutely incredible team to work with.",
    name: "Marcus Thorne",
    role: "Head of Digital, Vortex",
    initials: "MT"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles['testimonials-section']}>
      <div className="container">
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Client <span className="text-gradient-accent">Testimonials</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Don't just take our word for it.</p>
        </div>
      </div>
      
      <div style={{ overflow: 'hidden' }}>
        <div className={styles['marquee-wrapper']}>
          {/* Double array for infinite loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, index) => (
            <div key={index} className={styles['testimonial-card']}>
              <div className={styles.rating}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles['client-info']}>
                <div className={styles['client-avatar']}>{t.initials}</div>
                <div className={styles['client-details']}>
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
