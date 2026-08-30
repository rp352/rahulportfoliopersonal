import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      // 1:1 Instant hardware tracking without any delay or interpolation jumping
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
        cursor.classList.add('cursor-hovered');
      } else {
        cursor.classList.remove('cursor-hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Outer Ring: Statically centered on cursor tip, expands purely via scale from center */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 -ml-3 -mt-3 w-6 h-6 rounded-full border border-[#E25822]/40 pointer-events-none transition-[border-color,background-color,transform] duration-200 ease-out will-change-transform [&.cursor-hovered]:scale-150 [&.cursor-hovered]:border-[#E25822] [&.cursor-hovered]:bg-[#E25822]/15"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
      {/* Center Precise Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-[2px] -mt-[2px] w-1 h-1 bg-[#E25822] rounded-full pointer-events-none shadow-[0_0_6px_#E25822]"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />
    </div>
  );
};

export default CustomCursor;
