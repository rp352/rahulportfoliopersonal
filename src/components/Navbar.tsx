import React, { useState, useEffect } from 'react';
import { scrollToTarget } from '../lib/scroll';

interface NavbarProps {
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0c]/85 backdrop-blur-md py-4 border-b border-white/5 shadow-2xl'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between">
        
        {/* Left: Brand Monogram & Name */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => scrollToTarget(0)}
            className="flex items-center space-x-3 text-left focus:outline-none group cursor-pointer"
          >
            {/* Terracotta RP Monogram */}
            <span className="font-display font-black text-2xl tracking-tighter text-[#E25822] group-hover:scale-105 transition-transform">
              RP
            </span>
            <span className="font-mono text-xs tracking-widest text-[#f4f4f6] uppercase font-semibold">
              RAHUL PARIHARIA
            </span>
          </button>
        </div>

        {/* Right: Quick Get in Touch Button */}
        <div className="flex items-center space-x-4 font-mono text-xs tracking-wider">
          <button
            onClick={() => scrollToTarget('#contact', { offset: -60 })}
            className="px-3.5 py-1.5 rounded-full border border-white/15 text-[#f4f4f6] hover:border-[#E25822] hover:bg-[#E25822]/10 transition-all uppercase flex items-center space-x-1.5 group cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <span className="text-[#E25822] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
          </button>
        </div>

      </div>
    </header>
  );
};
