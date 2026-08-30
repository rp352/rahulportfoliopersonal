import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.15,
  baseRotation = 0,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom 60%',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word mr-[0.28em] transition-colors" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    if (baseRotation !== 0) {
      gsap.fromTo(
        el,
        { transformOrigin: '0% 50%', rotate: baseRotation },
        {
          ease: 'none',
          rotate: 0,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: 'top bottom',
            end: rotationEnd,
            scrub: true,
          },
        }
      );
    }

    const wordElements = el.querySelectorAll<HTMLElement>('.word');

    const anim = gsap.fromTo(
      wordElements,
      {
        opacity: baseOpacity,
        filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
        willChange: 'opacity, filter',
      },
      {
        ease: 'none',
        opacity: 1,
        filter: 'blur(0px)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top 85%',
          end: wordAnimationEnd,
          scrub: 1.2,
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) {
        anim.scrollTrigger.kill();
      }
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
  ]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <div className={`${textClassName}`}>{splitText}</div>
    </div>
  );
};

export default ScrollReveal;
