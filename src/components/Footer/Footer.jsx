import React from 'react';
import { Footer as AnimatedFooter } from '../ui/modem-animated-footer';
import { Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

const Footer = () => {
  const socialLinks = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
      href: "https://www.instagram.com/pitchbrands.in/",
      label: "Instagram",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>,
      href: "https://www.linkedin.com/company/pitchbrands/",
      label: "LinkedIn",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
      href: "https://www.facebook.com/profile.php?id=61590498193297",
      label: "Facebook",
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
