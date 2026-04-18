import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const scaleX = useSpring(progress, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: 2,
        background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
        transformOrigin: '0%',
        scaleX,
        zIndex: 9999,
      }}
    />
  );
}
