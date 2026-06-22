import React from 'react';
import { Footer as AnimatedFooter } from '../ui/modem-animated-footer';
import { Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

const Footer = () => {
  const socialLinks = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>,
      href: "#",
      label: "GitHub",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:tanu@pitchbrands.in",
      label: "Email",
    },
  ];

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <AnimatedFooter
      brandName="Pitchbrands"
      brandDescription={
        <div className="flex flex-col gap-4 text-left sm:text-center w-full">
          <p>We build attention, growth, authority, and revenue. The world's most advanced digital agency.</p>
          <div className="flex flex-col gap-1 text-sm mt-4 text-zinc-500">
            <p><strong>Address:</strong> sco 211, second floor, Pitchbrands office, Omaxe World Street, Sector 79, 121101, Faridabad</p>
            <p><strong>Phone:</strong> +91 74834 11755, +91 73030 89104</p>
            <p><strong>Email:</strong> tanu@pitchbrands.in</p>
          </div>
        </div>
      }
      socialLinks={socialLinks}
      navLinks={navLinks}
      creatorName="PitchBrands"
      creatorUrl="#"
      brandIcon={<Logo className="scale-75 md:scale-90" />}
    />
  );
}

export default Footer;
