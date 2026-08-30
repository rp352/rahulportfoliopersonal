import Lenis from 'lenis';

let lenisInstance: Lenis | null = null;

export const setLenis = (lenis: Lenis | null) => {
  lenisInstance = lenis;
};

export const getLenis = () => lenisInstance;

export const scrollToTarget = (
  target: string | number | HTMLElement,
  options?: { offset?: number }
) => {
  if (lenisInstance) {
    lenisInstance.scrollTo(target as any, options);
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (typeof target === 'number') {
    window.scrollTo({ top: target, behavior: 'smooth' });
  } else if (target instanceof HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};
