import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%'],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="education" ref={containerRef} className="relative py-28 md:py-40 px-6 md:px-12 max-w-7xl mx-auto">
      
      {/* Top Header */}
      <div className="pb-12 border-b border-white/10 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs text-[#E25822] tracking-widest uppercase mb-4"
          >
            05 — EDUCATION
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f4f6]"
          >
            WHERE IT STARTED.
          </motion.h2>
        </div>

        <p className="font-mono text-xs text-[#8e8e9b] max-w-xs">
          Academic milestones from Thane foundations to Lovely Professional University.
        </p>
      </div>

      {/* Minimal Vertical Timeline */}
      <div className="relative max-w-4xl mx-auto pl-8 sm:pl-16">
        
        {/* Background Vertical Track */}
        <div className="absolute left-2.5 sm:left-4 top-0 bottom-0 w-[1px] bg-white/10" />

        {/* Animated Active Scroll Line - Pure GPU transform scaleY with zero layout reflows */}
        <motion.div
          style={{ scaleY }}
          className="absolute left-2.5 sm:left-4 top-0 bottom-0 w-[2px] bg-[#E25822] origin-top will-change-transform"
        />

        {/* Timeline Items */}
        <div className="space-y-16 sm:space-y-24">
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[35px] sm:-left-[59px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0a0c] border-2 border-[#E25822] group-hover:scale-125 transition-transform" />

              {/* Year Badge */}
              <div className="flex items-center space-x-3 mb-2">
                <span className="font-mono text-lg sm:text-xl font-bold text-[#E25822]">
                  {item.period.split(' - ')[1] || item.period}
                </span>
                {item.isCurrent && (
                  <span className="editorial-pill text-[10px]">
                    CURRENTLY PURSUING
                  </span>
                )}
                {item.score && !item.isCurrent && (
                  <span className="font-mono text-xs text-[#8e8e9b] bg-white/[0.03] border border-white/10 px-2 py-0.5 rounded">
                    Score: {item.score}
                  </span>
                )}
              </div>

              {/* Institution & Degree */}
              <div className="space-y-1 mb-4">
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#f4f4f6] tracking-tight">
                  {item.institution}
                </h3>
                <p className="font-sans text-base text-[#9a9aa6] font-medium">
                  {item.degree} {item.field ? `• ${item.field}` : ''}
                </p>
                <span className="font-mono text-xs text-[#8e8e9b] block">
                  {item.location}
                </span>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mt-4">
                {item.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="text-xs sm:text-sm text-[#8e8e9b] flex items-start space-x-2">
                    <span className="text-[#E25822] font-mono">•</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};
