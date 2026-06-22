import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatedLayerButton } from '../ui/animated-layer-button';
import { Logo } from '../ui/Logo';
import { DemoOne } from '../ui/demo';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full h-[90px] z-50 flex items-center px-4 lg:px-8 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="flex w-full items-center max-w-[1400px] mx-auto justify-between">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="#home" className="block w-max">
            <Logo />
          </a>
        </div>

        {/* Center: Mega Menu */}
        <div className="hidden lg:flex flex-row flex-1 justify-center items-center">
          <DemoOne />
        </div>

        {/* Right: CTA Button */}
        <div className="flex flex-shrink-0 items-center justify-end">
          <AnimatedLayerButton>
            Start Project
          </AnimatedLayerButton>
          
          {/* Mobile menu button */}
          <button className="lg:hidden text-black hover:text-[#FD4E02] transition-colors ml-4" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
