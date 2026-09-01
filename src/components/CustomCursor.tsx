import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    const dot = dotRef.current;
    const container = containerRef.current;
    if (!cursor || !ring || !dot || !container) return;

    let hasMoved = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMoved) {
        hasMoved = true;
        container.style.opacity = '1';
      }
      // Zero-latency 1:1 hardware translation direct to transform
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = !!(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        target.classList.contains('interactive-hover')
      );

      if (isInteractive) {
        ring.classList.add('cursor-hovered');
      } else {
        ring.classList.remove('cursor-hovered');
      }
    };

    const handleMouseLeave = () => {
      container.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (hasMoved) {
        container.style.opacity = '1';
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none opacity-0 transition-opacity duration-150"
    >
      {/* Outer Translation Shell (zero CSS transition on position for 1:1 instantaneous tracking) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        {/* Outer Ring: Handles smooth scale & color transition centered on cursor */}
        <div
          ref={ringRef}
          className="-ml-3 -mt-3 w-6 h-6 rounded-full border border-[#E25822]/40 pointer-events-none transition-[border-color,background-color,transform] duration-150 ease-out will-change-transform [&.cursor-hovered]:scale-150 [&.cursor-hovered]:border-[#E25822] [&.cursor-hovered]:bg-[#E25822]/15"
        />
      </div>

      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[2px] -mt-[2px] w-1 h-1 bg-[#E25822] rounded-full pointer-events-none shadow-[0_0_6px_#E25822] will-change-transform"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};

export default CustomCursor;
