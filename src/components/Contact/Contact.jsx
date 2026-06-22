import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import styles from './Contact.module.css';
import { AnimatedLayerButton } from '../ui/animated-layer-button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', budget: '', projectType: '', message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', company: '', budget: '', projectType: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className={styles['contact-section']}>
      <div className="container">
        <div className={styles['contact-container']}>
          <div className={styles['contact-info']}>
            <h2>Initiate <span className="text-gradient-accent">Sequence</span></h2>
            <p>Ready to dominate your industry? Fill out the form below and our team will get back to you within 24 hours to schedule a discovery call.</p>
            
            <div className={styles['contact-details']}>
              <div className={styles['contact-item']}>
                <Mail size={24} />
                <span>tanu@pitchbrands.in</span>
              </div>
              <div className={styles['contact-item']}>
                <Phone size={24} />
                <span>+91 74834 11755, +91 73030 89104</span>
              </div>
              <div className={styles['contact-item']}>
                <MapPin size={24} />
                <span>sco 211, second floor, Pitchbrands office, Omaxe World Street, Sector 79, 121101, Faridabad</span>
              </div>
            </div>
          </div>

          <form className={styles['contact-form']} onSubmit={handleSubmit}>
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label>Name</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
              </div>
              <div className={styles['form-group']}>
                <label>Email</label>
                <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@company.com" />
              </div>
            </div>
            
            <div className={styles['form-row']}>
              <div className={styles['form-group']}>
                <label>Company</label>
                <input required type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" />
              </div>
              <div className={styles['form-group']}>
                <label>Budget</label>
                <select required name="budget" value={formData.budget} onChange={handleChange}>
                  <option value="" disabled>Select Budget</option>
                  <option value="10k-25k">$10k - $25k</option>
                  <option value="25k-50k">$25k - $50k</option>
                  <option value="50k-100k">$50k - $100k</option>
                  <option value="100k+">$100k+</option>
                </select>
              </div>
            </div>

            <div className={styles['form-group']}>
              <label>Project Type</label>
              <select required name="projectType" value={formData.projectType} onChange={handleChange}>
                <option value="" disabled>Select Service</option>
                <option value="branding">Branding & Identity</option>
                <option value="web">Web Development</option>
                <option value="marketing">Performance Marketing</option>
                <option value="content">Content Creation</option>
                <option value="full">Full Agency Retainer</option>
              </select>
            </div>

            <div className={styles['form-group']}>
              <label>Message</label>
              <textarea required name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your goals..."></textarea>
            </div>

            {isSuccess ? (
              <div className={styles['success-message']}>Transmission successful. We will be in touch.</div>
            ) : (
              <AnimatedLayerButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </AnimatedLayerButton>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
