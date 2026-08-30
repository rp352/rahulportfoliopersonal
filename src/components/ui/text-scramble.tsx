import { useEffect, useState } from 'react';
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
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    const steps = Math.floor(duration / speed);
    let step = 0;

    const interval = setInterval(() => {
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

      setDisplayText(scrambled);
      step++;

      if (step > steps) {
        clearInterval(interval);
        setDisplayText(children);
        setIsScrambling(false);
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
      {displayText}
    </motion.div>
  );
}

export default TextScramble;
