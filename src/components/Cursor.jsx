import React, { useEffect, useRef } from 'react';

const styles = {
  dot: {
    position: 'fixed',
    width: 8,
    height: 8,
    background: 'var(--accent)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
    transition: 'transform 0.1s',
  },
  ring: {
    position: 'fixed',
    width: 32,
    height: 32,
    border: '1px solid rgba(0,229,255,0.4)',
    borderRadius: '50%',
    pointerEvents: 'none',
    zIndex: 9998,
    transform: 'translate(-50%, -50%)',
    transition: 'border-color 0.2s',
  },
};

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const shouldSkipCursor =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 900;

    if (shouldSkipCursor) return undefined;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(2)';
        ringRef.current.style.borderColor = 'var(--accent)';
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        ringRef.current.style.borderColor = 'rgba(0,229,255,0.4)';
      }
    };

    document.addEventListener('mousemove', onMove);
    rafRef.current = requestAnimationFrame(animate);

    const interactables = document.querySelectorAll('a, button, .skill-tag, .project-card');
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
      interactables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  if (typeof window !== 'undefined') {
    const shouldHideCursor =
      window.matchMedia('(pointer: coarse)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      window.innerWidth < 900;

    if (shouldHideCursor) return null;
  }

  return (
    <>
      <div ref={dotRef} style={styles.dot} />
      <div ref={ringRef} style={styles.ring} />
    </>
  );
}
