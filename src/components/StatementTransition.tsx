import React from 'react';
import { motion } from 'framer-motion';

export const StatementTransition: React.FC = () => {
  return (
    <section className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto select-none">
      
      {/* Top subtle decorative rule */}
      <div className="w-20 h-[1px] bg-[#E25822] mb-12" />

      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        
        {/* Line 1: Still early. */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[clamp(2.2rem,5vw,5rem)] tracking-[-0.03em] text-[#565662] leading-[1.08]"
          >
            Still early.
          </motion.div>
        </div>

        {/* Line 2: But I'm building. */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[clamp(2.2rem,5vw,5rem)] tracking-[-0.03em] text-[#9a9aa6] leading-[1.08]"
          >
            But I'm building.
          </motion.div>
        </div>

        {/* Line 3: And I'm just getting started. */}
        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.95, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-[clamp(2.2rem,5vw,5rem)] tracking-[-0.03em] text-[#f4f4f6] leading-[1.08] flex items-baseline flex-wrap"
          >
            <span>And I'm just getting started</span>
            <span className="text-[#E25822] ml-1">.</span>
          </motion.div>
        </div>

      </div>

      {/* Editorial footer tag */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between font-mono text-xs text-[#8e8e9b]"
      >
        <span>FIRST YEAR IDENTITY • CLASS OF 2029</span>
        <span className="text-[#E25822]">PRIDE IN THE CRAFT</span>
      </motion.div>

    </section>
  );
};
