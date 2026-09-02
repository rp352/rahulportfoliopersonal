'use client';

import { Children, useEffect, useState } from 'react';
import {
  AnimatePresence,
  AnimatePresenceProps,
  motion,
  Transition,
  Variants,
} from 'framer-motion';
import { cn } from '../../lib/utils';

export type TextLoopProps = {
  children: React.ReactNode;
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
  trigger?: boolean;
  mode?: AnimatePresenceProps['mode'];
};

export function TextLoop({
  children,
  className,
  interval = 2,
  transition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  variants,
  onIndexChange,
  trigger = true,
  mode = 'popLayout',
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    if (!trigger || items.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % items.length;
        onIndexChange?.(nextIndex);
        return nextIndex;
      });
    }, interval * 1000);

    return () => clearInterval(intervalId);
  }, [items.length, interval, onIndexChange, trigger]);

  const motionVariants: Variants = {
    initial: { y: 16, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -16, opacity: 0 },
    ...variants,
  };

  return (
    <span
      className={cn(
        'relative inline-flex overflow-hidden whitespace-nowrap align-baseline',
        className
      )}
    >
      <AnimatePresence mode={mode} initial={false}>
        <motion.span
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          variants={motionVariants}
          className="inline-block"
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default TextLoop;
