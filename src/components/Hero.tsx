import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { scrollToTarget } from '../lib/scroll';
import { TextScramble } from './ui/text-scramble';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const scrollToWork = () => {
    scrollToTarget('#work', { offset: -60 });
  };

  const scrollToAbout = () => {
    scrollToTarget('#about', { offset: -60 });
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full bg-[#0a0a0c] text-[#f4f4f6] flex flex-col justify-between pt-24 sm:pt-28 pb-6 px-6 sm:px-10 md:px-14 select-none overflow-hidden"
    >
      {/* Background Graphic Asset with clean masking to eliminate ghost text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/hero-retro-pc.jpg"
          alt="Rahul Pariharia Hero Retro Setup"
          className="w-full h-full object-cover object-center lg:object-right filter brightness-[0.95] contrast-[1.05]"
        />
        {/* Left Dark Mask covering background text so live typography is crisp */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[48%] bg-[#0a0a0c] z-0" />
        <div className="absolute inset-y-0 left-[47%] w-[16%] bg-gradient-to-r from-[#0a0a0c] to-transparent z-0 hidden lg:block" />
        
        {/* Right Dark Mask for Telemetry */}
        <div className="absolute inset-y-0 right-0 w-[20%] bg-[#0a0a0c] z-0 hidden lg:block" />
        <div className="absolute inset-y-0 right-[19%] w-[12%] bg-gradient-to-l from-[#0a0a0c] to-transparent z-0 hidden lg:block" />
        
        {/* Top and Bottom Vignettes */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0c] to-transparent z-0" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0a0a0c] to-transparent z-0" />
      </div>

      {/* Target Reticle / Crosshair */}
      <div className="absolute left-[37%] top-[10.5%] w-6 h-6 pointer-events-none opacity-50 hidden md:block z-10">
        <div className="w-full h-full rounded-full border border-white/25 relative flex items-center justify-center">
          <div className="absolute inset-x-[-5px] top-1/2 h-[1px] bg-white/40" />
          <div className="absolute inset-y-[-5px] left-1/2 w-[1px] bg-white/40" />
        </div>
      </div>

      {/* Main Responsive Interactive Canvas */}
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1600px] w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto relative z-10"
      >
        
        {/* =========================================
            LEFT COLUMN: Intro, Headline, Description, CTA
            ========================================= */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-4 sm:space-y-5 z-20 py-2">
          
          {/* Label: 01 -- INTRODUCTION */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center space-x-2 font-mono text-xs tracking-wider uppercase mb-1"
          >
            <span className="text-[#E25822] font-semibold">01 --</span>
            <span className="text-[#9a9aa6]">INTRODUCTION</span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-0.5 sm:space-y-1 font-sans font-extrabold tracking-[-0.035em]">
            
            {/* Hi, I'm Rahul. */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-[#ffffff] leading-[1.08]"
            >
              Hi, I'm Rahul.
            </motion.h1>

            {/* Computer Science Student */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] text-[#555562] leading-[1.12] whitespace-normal sm:whitespace-nowrap"
            >
              Computer Science Student
            </motion.h2>

            {/* building with code, AI & */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] text-[#555562] leading-[1.12] whitespace-normal sm:whitespace-nowrap"
            >
              building with code, AI &
            </motion.h2>

            {/* the web. (with square red/orange period) */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] text-[#555562] leading-[1.12] flex items-baseline"
            >
              <span>the web</span>
              <span className="inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#E25822] ml-1.5 mb-1" />
            </motion.h2>

          </div>

          {/* Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm text-[#8e8e9b] leading-relaxed max-w-sm pt-2"
          >
            I enjoy turning ideas into functional, thoughtful digital experiences. Currently exploring the intersection of design, development & intelligence.
          </motion.p>

          {/* VIEW MY WORK CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <button
              onClick={scrollToWork}
              className="inline-flex items-center space-x-3.5 group cursor-pointer focus:outline-none"
            >
              <span className="font-mono text-xs tracking-widest text-[#f4f4f6] uppercase font-medium group-hover:text-[#E25822] transition-colors">
                VIEW MY WORK
              </span>
              <span className="w-9 h-9 rounded-full border border-[#E25822]/60 group-hover:border-[#E25822] group-hover:bg-[#E25822]/10 transition-all flex items-center justify-center text-[#E25822]">
                <span className="text-sm transform group-hover:translate-x-0.5 transition-transform">→</span>
              </span>
            </button>
          </motion.div>

        </div>

        {/* Center Spacer Column (Ensures the background retro computer is centered and showcased) */}
        <div className="lg:col-span-4 xl:col-span-4 min-h-[300px] lg:min-h-[460px] pointer-events-none" />

        {/* =========================================
            RIGHT COLUMN: Telemetry, Currently Learning & Radar Widget
            ========================================= */}
        <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col justify-between h-[420px] pl-6 xl:pl-10 border-l border-white/5 py-4 z-20">
          
          {/* Top: // currently learning */}
          <div className="space-y-4">
            <div className="font-mono text-[11px] text-[#8e8e9b] leading-tight">
              // currently<br />learning
            </div>
            
            <div className="space-y-2 font-mono text-[10px] xl:text-[11px] text-[#71717e]">
              <TextScramble
                className="hover:text-[#f4f4f6] transition-colors"
                duration={0.5}
                speed={0.03}
              >
                &gt; SYSTEM DESIGN
              </TextScramble>
              <TextScramble
                className="hover:text-[#f4f4f6] transition-colors"
                duration={0.5}
                speed={0.03}
              >
                &gt; CLOUD COMPUTING
              </TextScramble>
              <TextScramble
                className="hover:text-[#f4f4f6] transition-colors"
                duration={0.5}
                speed={0.03}
              >
                &gt; UI/UX DESIGN
              </TextScramble>
              <TextScramble
                className="hover:text-[#f4f4f6] transition-colors"
                duration={0.5}
                speed={0.03}
              >
                &gt; NETWORKS
              </TextScramble>
            </div>
          </div>

          {/* Center-Bottom: Coordinate Radar Widget */}
          <div className="space-y-1.5">
            <div className="font-mono text-[10px] text-[#8e8e9b]">
              19.2183° N
            </div>
            <div className="w-16 h-16 border border-white/15 relative flex items-center justify-center bg-black/40 backdrop-blur-sm">
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10" />
              <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10" />
              <div className="w-1.5 h-1.5 bg-[#ffffff] shadow-[0_0_8px_#ffffff]" />
            </div>
          </div>

        </div>

      </motion.div>

      {/* =========================================
          BOTTOM BAR: Coordinates, Scroll Indicator, and Progress Ruler
          ========================================= */}
      <div className="max-w-[1600px] w-full mx-auto pt-5 border-t border-white/10 flex items-center justify-between z-20">
        
        {/* Left: Geolocation Coordinates */}
        <div className="flex items-start space-x-2 font-mono text-[10px] sm:text-[11px] text-[#60606e]">
          <span className="text-[#8e8e9b] font-bold">+</span>
          <div>
            <div>19.2183° N</div>
            <div>72.9781° E</div>
          </div>
        </div>

        {/* Center: SCROLL TO EXPLORE Button */}
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-1 font-mono text-[10px] text-[#8e8e9b] hover:text-[#E25822] transition-colors tracking-widest uppercase cursor-pointer group"
        >
          <span>SCROLL TO EXPLORE</span>
          <span className="text-xs transform group-hover:translate-y-1 transition-transform">︾</span>
        </button>

        {/* Right: Vertical Progress Ruler Markings */}
        <div className="flex items-center space-x-2 font-mono text-xs text-[#5c5c68]">
          <span className="text-[10px] text-[#E25822] font-semibold">01</span>
          <div className="w-6 h-[2px] bg-[#E25822]" />
        </div>

      </div>

    </section>
  );
};
