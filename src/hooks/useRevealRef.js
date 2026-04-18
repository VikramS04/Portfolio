import { useEffect, useRef } from 'react';

/**
 * Returns a ref. Attach it to any element to get a
 * scroll-triggered fade-up reveal via Framer Motion's
 * whileInView — or use this hook to apply CSS classes.
 */
export function useRevealRef(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in-view');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -50px 0px', ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
