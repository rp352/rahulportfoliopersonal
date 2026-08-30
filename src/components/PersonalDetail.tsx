import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const PersonalDetail: React.FC = () => {
  const [isKicked, setIsKicked] = useState(false);

  const handleKick = () => {
    setIsKicked(true);
    setTimeout(() => setIsKicked(false), 800);
  };

  return (
    <section className="relative py-24 md:py-36 px-6 md:px-12 max-w-5xl mx-auto select-none">
      
      {/* Top subtle line */}
      <div className="w-full h-[1px] bg-white/10 mb-16" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
        
        {/* Left text */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-xs text-[#8e8e9b] uppercase tracking-widest block mb-3"
          >
            WHEN I'M NOT CODING
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-5xl sm:text-7xl tracking-tight text-[#f4f4f6]"
          >
            Football<span className="text-[#E25822]">.</span>
          </motion.h3>

          <p className="font-mono text-xs text-[#8e8e9b] mt-3">
            Strategy, high-tempo teamwork & weekend matches.
          </p>
        </div>

        {/* Right: Minimalist Interactive Geometric Ball / Orbit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onClick={handleKick}
          className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-white/10 flex items-center justify-center cursor-pointer group hover:border-[#E25822]/40 transition-colors"
        >
          {/* Subtle Outer Orbit Ring */}
          <div className="absolute inset-2 rounded-full border border-dashed border-white/5 animate-[spin_20s_linear_infinite]" />

          {/* Minimalist Football Icon / Circle with Hexagon Motif */}
          <motion.div
            animate={
              isKicked
                ? {
                    rotate: [0, 360, 720],
                    scale: [1, 1.25, 1],
                    x: [0, 15, -15, 0],
                  }
                : {
                    y: [0, -6, 0],
                  }
            }
            transition={
              isKicked
                ? { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
                : { duration: 4, repeat: Infinity, ease: 'easeInOut' }
            }
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#15151a] border border-white/20 flex items-center justify-center text-[#f4f4f6] relative shadow-lg group-hover:border-[#E25822] transition-colors"
          >
            {/* Geometric Pentagon Center */}
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-[#8e8e9b] group-hover:text-[#E25822] transition-colors"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <polygon points="12 2 2 8.5 6 19 18 19 22 8.5" />
              <line x1="12" y1="2" x2="12" y2="10" />
              <line x1="2" y1="8.5" x2="9" y2="13" />
              <line x1="22" y1="8.5" x2="15" y2="13" />
              <line x1="6" y1="19" x2="9" y2="13" />
              <line x1="18" y1="19" x2="15" y2="13" />
              <polygon points="12 10 9 13 9 17 15 17 15 13" />
            </svg>
          </motion.div>

          <span className="absolute -bottom-6 font-mono text-[10px] text-[#8e8e9b] opacity-0 group-hover:opacity-100 transition-opacity">
            CLICK TO KICK ⚽
          </span>
        </motion.div>

      </div>

    </section>
  );
};
