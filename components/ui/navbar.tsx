"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Close menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "/projects" },
    { label: "EXPERIENCE", href: "/experience" },
    { label: "EDUCATION", href: "/education" },
    { label: "WRITING", href: "/writing" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 pointer-events-none">
      <nav className="flex items-center justify-between max-w-screen-2xl mx-auto pointer-events-auto">
        {/* Menu Button */}
        <div className="relative">
          <button
            ref={buttonRef}
            type="button"
            className="p-2 transition-colors duration-300 z-50 text-neutral-400 hover:text-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
            ) : (
              <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
            )}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                ref={menuRef}
                className="absolute top-full left-0 w-[200px] md:w-[240px] bg-black shadow-2xl mt-2 ml-4 p-6 rounded-2xl z-[100] border border-white/10"
              >
                <div className="flex flex-col space-y-4">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block text-xl md:text-2xl font-bold tracking-tight cursor-pointer transition-colors duration-300"
                        style={{
                          color: isActive ? "#D6FF00" : "white",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#D6FF00";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = isActive ? "#D6FF00" : "white";
                        }}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Signature */}
        <Link href="/" className="text-4xl text-white hover:text-[#D6FF00] transition-colors" style={{ fontFamily: "'Brush Script MT', 'Lucida Handwriting', cursive" }}>
          A
        </Link>
        
        {/* Placeholder for balance */}
        <div className="w-10"></div>
      </nav>
    </header>
  );
}
