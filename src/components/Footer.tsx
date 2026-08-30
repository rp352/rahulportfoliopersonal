import React from 'react';
import { motion } from 'framer-motion';
import { scrollToTarget } from '../lib/scroll';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    scrollToTarget(0);
  };

  return (
    <footer className="relative pt-24 md:pt-36 pb-16 px-6 md:px-12 max-w-7xl mx-auto select-none border-t border-white/10">
      
      {/* Massive Editorial Monogram / Statement */}
      <div className="space-y-4 mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extrabold text-[clamp(2.5rem,7.5vw,7.5rem)] tracking-[-0.03em] text-[#f4f4f6] leading-[1.02]"
        >
          RAHUL PARIHARIA
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-xs sm:text-sm md:text-base text-[#8e8e9b] tracking-widest uppercase"
        >
          Building. Learning. Iterating.
        </motion.p>
      </div>

      {/* Bottom Footer Bar with Large Whitespace */}
      <div className="pt-10 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-[#8e8e9b]">
        
        {/* Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/rp352"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f4f4f6] transition-colors"
          >
            GitHub
          </a>
          <span className="text-white/20">•</span>
          <a
            href="https://www.linkedin.com/in/rahul-pariharia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#f4f4f6] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-white/20">•</span>
          <a
            href="mailto:rahul.pariharia2025@lpu.in"
            className="hover:text-[#f4f4f6] transition-colors"
          >
            Email
          </a>
        </div>

        {/* Center / Back to top */}
        <button
          onClick={scrollToTop}
          className="hover:text-[#E25822] transition-colors flex items-center space-x-1.5 self-start sm:self-auto group cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <span className="transform group-hover:-translate-y-0.5 transition-transform">↑</span>
        </button>

        {/* Copyright */}
        <div className="text-[#8e8e9b]">
          © 2026 Rahul Pariharia. All rights reserved.
        </div>

      </div>

    </footer>
  );
};
