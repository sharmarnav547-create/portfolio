import React from 'react';
import { Footer as AnimatedFooter } from '../ui/modem-animated-footer';
import { Mail, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Logo } from '../ui/Logo';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/pitchbrands.in/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/company/pitchbrands",
      label: "LinkedIn",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
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
