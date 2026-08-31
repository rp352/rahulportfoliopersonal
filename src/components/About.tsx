import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sentenceData = [
  {
    id: 0,
    text: "I'm Rahul, a Computer Science student at Lovely Professional University. I'm interested in AI, web development, automation and building useful digital products.",
    className: "text-2xl sm:text-3xl md:text-4xl text-[#f4f4f6] font-light leading-[1.3] tracking-tight",
    border: false,
  },
  {
    id: 1,
    text: "I'm still early in my journey, so I'm not here to pretend I've already done everything.",
    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#c4c4cc] font-light leading-[1.35] tracking-tight",
    border: false,
  },
  {
    id: 2,
    text: "I'm here to show what I'm learning, what I'm building, and where I'm going.",
    className: "text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#ffffff] font-medium leading-[1.35] tracking-tight",
    border: true,
  },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);
  const step1DotRef = useRef<HTMLDivElement>(null);
  const step2DotRef = useRef<HTMLDivElement>(null);
  const step3DotRef = useRef<HTMLDivElement>(null);

  // Split text into individual spans for React Bits word-by-word reveal
  const splitWords = (text: string) => {
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word mr-[0.28em]" key={index}>
          {word}
        </span>
      );
    });
  };

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const s1 = s1Ref.current;
    const s2 = s2Ref.current;
    const s3 = s3Ref.current;
    if (!section || !container || !s1 || !s2 || !s3) return;

    const ctx = gsap.context(() => {
      const s1Words = s1.querySelectorAll<HTMLElement>('.word');
      const s2Words = s2.querySelectorAll<HTMLElement>('.word');
      const s3Words = s3.querySelectorAll<HTMLElement>('.word');

      // Initial state: s1 visible, s2 and s3 hidden with GPU layer hints
      gsap.set(s1, { opacity: 1, y: 0, willChange: 'opacity, transform' });
      gsap.set(s1Words, { opacity: 0.18, y: 2, willChange: 'opacity, transform' });

      gsap.set(s2, { opacity: 0, y: 20, willChange: 'opacity, transform' });
      gsap.set(s2Words, { opacity: 0.18, y: 2, willChange: 'opacity, transform' });

      gsap.set(s3, { opacity: 0, y: 20, willChange: 'opacity, transform' });
      gsap.set(s3Words, { opacity: 0.18, y: 2, willChange: 'opacity, transform' });

      // GSAP Master Scroll Timeline with Pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 12%',
          end: '+=160%',
          pin: container,
          pinSpacing: true,
          scrub: 0.5,
          anticipatePin: 1,
        },
      });

      // ==========================================
      // PHASE 1: Sentence 1 words reveal
      // ==========================================
      tl.to(s1Words, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 1,
        ease: 'none',
      });

      // Hold sentence 1 briefly
      tl.to({}, { duration: 0.3 });

      // Sentence 1 fades out upward
      tl.to(s1, {
        opacity: 0,
        y: -20,
        duration: 0.45,
        ease: 'power2.inOut',
      });

      // ==========================================
      // PHASE 2: Sentence 2 takes its place & words reveal
      // ==========================================
      tl.to(s2, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (step1DotRef.current && step2DotRef.current) {
        tl.to(step1DotRef.current, { backgroundColor: 'rgba(255, 255, 255, 0.2)', scaleX: 0.5, transformOrigin: 'left center', duration: 0.25 }, '<');
        tl.to(step2DotRef.current, { backgroundColor: '#E25822', scaleX: 2, transformOrigin: 'left center', duration: 0.25 }, '<');
      }

      tl.to(s2Words, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 1,
        ease: 'none',
      });

      // Hold sentence 2 briefly
      tl.to({}, { duration: 0.3 });

      // Sentence 2 fades out upward
      tl.to(s2, {
        opacity: 0,
        y: -20,
        duration: 0.45,
        ease: 'power2.inOut',
      });

      // ==========================================
      // PHASE 3: Sentence 3 takes its place & words reveal
      // ==========================================
      tl.to(s3, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      if (step2DotRef.current && step3DotRef.current) {
        tl.to(step2DotRef.current, { backgroundColor: 'rgba(255, 255, 255, 0.2)', scaleX: 1, transformOrigin: 'left center', duration: 0.25 }, '<');
        tl.to(step3DotRef.current, { backgroundColor: '#E25822', scaleX: 2, transformOrigin: 'left center', duration: 0.25 }, '<');
      }

      tl.to(s3Words, {
        opacity: 1,
        y: 0,
        stagger: 0.04,
        duration: 1,
        ease: 'none',
      });

      // Hold sentence 3 at the end before releasing pin
      tl.to({}, { duration: 0.4 });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 px-6 sm:px-10 md:px-14 max-w-7xl mx-auto select-none"
    >
      {/* Pinned Container containing constant 'WHO AM I?' and in-place sentence replacer */}
      <div ref={containerRef} className="w-full">
        
        {/* Top Border Rule */}
        <div className="w-full h-[1px] bg-white/10 mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Constant 'WHO AM I?' & Spec Sheet */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 z-10">
            <div>
              <div className="font-mono text-xs text-[#E25822] tracking-widest uppercase mb-2 flex items-center space-x-2">
                <span>01 — ABOUT</span>
              </div>
              
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-[#f4f4f6]">
                WHO AM I?
              </h2>

              {/* Progress Indicator */}
              <div className="flex items-center space-x-2 mt-4 font-mono text-[10px] text-[#8e8e9b]">
                <div className="flex space-x-1.5 items-center">
                  <div ref={step1DotRef} className="h-1 w-6 rounded-full bg-[#E25822] origin-left will-change-transform" />
                  <div ref={step2DotRef} className="h-1 w-3 rounded-full bg-white/20 origin-left will-change-transform" />
                  <div ref={step3DotRef} className="h-1 w-3 rounded-full bg-white/20 origin-left will-change-transform" />
                </div>
                <span className="pl-2">SCROLL TO ADVANCE</span>
              </div>
            </div>

            {/* Quick Metadata Spec Sheet */}
            <div className="pt-5 border-t border-white/10 space-y-2.5 font-mono text-xs text-[#8e8e9b]">
              <div className="flex justify-between items-center py-0.5">
                <span>LOCATION</span>
                <span className="text-[#f4f4f6]">Thane, MH, India</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span>ACADEMIC</span>
                <span className="text-[#f4f4f6]">B.Tech CSE @ LPU</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span>TIMELINE</span>
                <span className="text-[#f4f4f6]">2025 — 2029</span>
              </div>
              <div className="flex justify-between items-center py-0.5">
                <span>STATUS</span>
                <span className="text-[#E25822] flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E25822] animate-pulse" />
                  Building & Learning
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: In-Place Single-Spot Pinned Text Replacer */}
          <div className="lg:col-span-8 relative min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex items-center p-6 sm:p-8 rounded-2xl bg-white/[0.015] border border-white/5 overflow-hidden">
            
            {/* Sentence 1 (Phase 1) */}
            <div
              ref={s1Ref}
              className={`absolute inset-x-6 sm:inset-x-8 ${sentenceData[0].className}`}
            >
              {splitWords(sentenceData[0].text)}
            </div>

            {/* Sentence 2 (Phase 2 - Takes exact same place) */}
            <div
              ref={s2Ref}
              className={`absolute inset-x-6 sm:inset-x-8 ${sentenceData[1].className}`}
            >
              {splitWords(sentenceData[1].text)}
            </div>

            {/* Sentence 3 (Phase 3 - Takes exact same place with terracotta border) */}
            <div
              ref={s3Ref}
              className={`absolute inset-x-6 sm:inset-x-8 border-l-4 border-[#E25822] pl-5 sm:pl-7 ${sentenceData[2].className}`}
            >
              {splitWords(sentenceData[2].text)}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
