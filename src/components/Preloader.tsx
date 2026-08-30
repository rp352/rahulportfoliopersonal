import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'initial' | 'rp' | 'line' | 'text' | 'scale' | 'wipe'>('initial');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 0.0s: Screen is completely dark
    const t1 = setTimeout(() => setPhase('rp'), 200);        // 0.2s: "RP" appears with subtle fade
    const t2 = setTimeout(() => setPhase('line'), 500);      // 0.5s: Thin horizontal line expands from center
    const t3 = setTimeout(() => setPhase('text'), 800);      // 0.8s: "RAHUL PARIHARIA" fades in
    const t4 = setTimeout(() => setPhase('scale'), 1200);    // 1.2s: Loading content subtly scales down
    const t5 = setTimeout(() => setPhase('wipe'), 1450);     // 1.4s: Vertical wipe transition reveals portfolio
    const t6 = setTimeout(() => {
      setIsDone(true);
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {phase !== 'wipe' ? (
        <motion.div
          key="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0c] text-[#f4f4f6] select-none"
        >
          <motion.div
            animate={
              phase === 'scale'
                ? { scale: 0.95, opacity: 0.85 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center space-y-6"
          >
            {/* Monogram RP */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={phase !== 'initial' ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-extrabold text-6xl md:text-8xl tracking-tight text-[#f4f4f6]"
            >
              RP
            </motion.div>

            {/* Expanding Center Horizontal Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={
                phase === 'line' || phase === 'text' || phase === 'scale'
                  ? { scaleX: 1 }
                  : { scaleX: 0 }
              }
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-32 md:w-48 h-[1px] bg-gradient-to-r from-transparent via-[#E25822] to-transparent origin-center"
            />

            {/* Subtext RAHUL PARIHARIA */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={
                phase === 'text' || phase === 'scale'
                  ? { opacity: 1, letterSpacing: '0.22em' }
                  : { opacity: 0, letterSpacing: '0.3em' }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs md:text-sm text-[#8e8e9b] uppercase font-medium"
            >
              Rahul Pariharia
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="preloader-curtain"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#0a0a0c] pointer-events-none flex flex-col justify-end p-8 border-b border-white/10"
        >
          <div className="flex justify-between items-center text-xs font-mono text-[#8e8e9b]">
            <span>INITIALIZING EDITORIAL VIEW</span>
            <span>2026</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
