'use client';

import React, {
  Children,
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import { cn } from '../../lib/utils';

const DOCK_HEIGHT = 96;
const DEFAULT_MAGNIFICATION = 68;
const DEFAULT_DISTANCE = 140;
const DEFAULT_PANEL_HEIGHT = 56;

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

export type DockItemProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};

export type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

export type DocContextType = {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

export type DockProviderProps = {
  children: React.ReactNode;
  value: DocContextType;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function DockProvider({ children, value }: DockProviderProps) {
  return <DockContext.Provider value={value}>{children}</DockContext.Provider>;
}

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within a DockProvider');
  }
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 180, damping: 14 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(() => {
    return Math.max(DOCK_HEIGHT, magnification + 16);
  }, [magnification]);

  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  return (
    <motion.div
      style={{
        height: height,
        scrollbarWidth: 'none',
      }}
      className="flex max-w-full items-end"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          'flex w-fit items-center gap-2 sm:gap-3 rounded-2xl bg-[#111115]/90 border border-white/10 px-3 py-2 shadow-2xl shadow-black/80',
          className
        )}
        style={{ height: panelHeight }}
        role="toolbar"
        aria-label="Navigation dock"
      >
        <DockProvider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockProvider>
      </motion.div>
    </motion.div>
  );
}

function DockItem({ children, className, onClick }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();
  const isHovered = useMotionValue(0);
  const rectRef = useRef<{ x: number; width: number } | null>(null);

  const updateRect = () => {
    if (ref.current) {
      const domRect = ref.current.getBoundingClientRect();
      rectRef.current = { x: domRect.x, width: domRect.width };
    }
  };

  useEffect(() => {
    updateRect();
    window.addEventListener('resize', updateRect, { passive: true });
    return () => window.removeEventListener('resize', updateRect);
  }, []);

  const mouseDistance = useTransform(mouseX, (val) => {
    if (val === Infinity) return Infinity;
    if (!rectRef.current) {
      updateRect();
    }
    const rect = rectRef.current ?? { x: 0, width: 40 };
    return val - (rect.x + rect.width / 2);
  });

  const widthTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [40, magnification, 40]
  );

  const width = useSpring(widthTransform, spring);

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      onMouseEnter={updateRect}
      onHoverStart={() => {
        updateRect();
        isHovered.set(1);
      }}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      className={cn(
        'relative inline-flex aspect-square items-center justify-center rounded-xl bg-white/[0.04] border border-white/5 hover:border-[#E25822]/40 hover:bg-[#E25822]/10 transition-colors cursor-pointer group',
        className
      )}
      tabIndex={0}
      role="button"
      onClick={onClick}
    >
      {Children.map(children, (child) =>
        React.isValidElement(child)
          ? cloneElement(child as React.ReactElement<any>, { width, isHovered })
          : child
      )}
    </motion.div>
  );
}

function DockLabel({ children, className, ...rest }: DockLabelProps) {
  const restProps = rest as Record<string, unknown>;
  const isHovered = restProps['isHovered'] as MotionValue<number> | undefined;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isHovered) return;
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.9 }}
          animate={{ opacity: 1, y: -12, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.9 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className={cn(
            'absolute -top-7 left-1/2 -translate-x-1/2 w-fit whitespace-nowrap rounded-md border border-white/10 bg-[#15151a]/95 px-2.5 py-0.5 font-mono text-[10px] tracking-wider uppercase text-[#f4f4f6] shadow-xl backdrop-blur-md pointer-events-none z-50',
            className
          )}
          role="tooltip"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className, ...rest }: DockIconProps) {
  const restProps = rest as Record<string, unknown>;
  const width = restProps['width'] as MotionValue<number> | undefined;

  const sizeTransform = useTransform(
    width ?? useMotionValue(40),
    [40, DEFAULT_MAGNIFICATION],
    [18, 28]
  );

  return (
    <motion.div
      style={{
        fontSize: sizeTransform,
      }}
      className={cn('flex items-center justify-center text-[#9a9aa6] group-hover:text-[#f4f4f6] transition-colors', className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
