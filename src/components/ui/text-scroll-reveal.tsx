import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface TextScrollRevealProps {
  children: string;
  className?: string;
  highlightClass?: string;
}

export const TextScrollReveal: React.FC<TextScrollRevealProps> = ({
  children,
  className = '',
  highlightClass = 'text-[#f4f4f6]',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 50%'],
  });

  const words = children.split(' ');

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            highlightClass={highlightClass}
          >
            {word}
          </Word>
        );
      })}
    </p>
  );
};

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlightClass?: string;
}

const Word: React.FC<WordProps> = ({ children, progress, range, highlightClass }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span
        style={{ opacity, y }}
        className={`transition-colors duration-200 ${highlightClass}`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextScrollReveal;
