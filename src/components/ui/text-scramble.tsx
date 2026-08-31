import { useEffect, useRef } from 'react';
import { motion, MotionProps } from 'framer-motion';

export type TextScrambleProps = {
  children: string;
  duration?: number;
  speed?: number;
  characterSet?: string;
  className?: string;
  trigger?: boolean;
  onScrambleComplete?: () => void;
} & MotionProps;

const defaultChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

export function TextScramble({
  children,
  duration = 0.6,
  speed = 0.03,
  characterSet = defaultChars,
  className,
  trigger = true,
  onScrambleComplete,
  ...props
}: TextScrambleProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  const isScramblingRef = useRef(false);

  const scramble = () => {
    if (isScramblingRef.current || !textRef.current) return;
    isScramblingRef.current = true;

    const steps = Math.floor(duration / speed);
    let step = 0;

    const interval = setInterval(() => {
      if (!textRef.current) {
        clearInterval(interval);
        isScramblingRef.current = false;
        return;
      }

      let scrambled = '';
      const progress = step / steps;

      for (let i = 0; i < children.length; i++) {
        if (children[i] === ' ' || children[i] === '>') {
          scrambled += children[i];
          continue;
        }

        if (i < progress * children.length) {
          scrambled += children[i];
        } else {
          scrambled += characterSet[Math.floor(Math.random() * characterSet.length)];
        }
      }

      textRef.current.textContent = scrambled;
      step++;

      if (step > steps) {
        clearInterval(interval);
        if (textRef.current) {
          textRef.current.textContent = children;
        }
        isScramblingRef.current = false;
        onScrambleComplete?.();
      }
    }, speed * 1000);
  };

  useEffect(() => {
    if (trigger) {
      scramble();
    }
  }, [trigger, children]);

  return (
    <motion.div
      className={`cursor-pointer select-none ${className || ''}`}
      onMouseEnter={scramble}
      {...props}
    >
      <span ref={textRef}>{children}</span>
    </motion.div>
  );
}

export default TextScramble;
