import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  '> initializing portfolio.exe',
  '> loading modules...',
  '> compiling skills...',
  '> ready.',
];

export default function Loader({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Advance lines every 500ms
    const lineTimer = setInterval(() => {
      setLineIndex((prev) => {
        if (prev < lines.length - 1) return prev + 1;
        clearInterval(lineTimer);
        return prev;
      });
    }, 480);

    // Progress bar over ~2.2s
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2.2;
      });
    }, 44);

    // Exit after 2.6s
    const exitTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onDone, 700);
    }, 2600);

    return () => {
      clearInterval(lineTimer);
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: 'var(--bg)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'flex-start',
            padding: '3rem',
          }}
        >
          {/* Grid background */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(0,229,255,0.03) 1px,transparent 1px),' +
              'linear-gradient(90deg,rgba(0,229,255,0.03) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }} />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '1.3rem',
              fontWeight: 800, color: 'var(--accent)',
              marginBottom: '3rem', letterSpacing: '0.08em',
            }}
          >
            VS.dev
          </motion.div>

          {/* Terminal lines */}
          <div style={{ marginBottom: '2.5rem', minHeight: 120 }}>
            {lines.slice(0, lineIndex + 1).map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  color: i === lineIndex ? 'var(--accent)' : 'var(--muted)',
                  marginBottom: '0.5rem',
                  letterSpacing: '0.05em',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}
              >
                {line}
                {i === lineIndex && (
                  <span style={{ animation: 'blink 0.8s step-end infinite' }}>█</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%', maxWidth: 400 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
              color: 'var(--muted)', marginBottom: '0.5rem',
            }}>
              <span>LOADING</span>
              <span>{Math.min(100, Math.round(progress))}%</span>
            </div>
            <div style={{
              width: '100%', height: 2,
              background: 'var(--border)',
              position: 'relative', overflow: 'hidden',
            }}>
              <motion.div
                style={{
                  position: 'absolute', left: 0, top: 0, bottom: 0,
                  background: 'linear-gradient(90deg, var(--accent2), var(--accent))',
                  width: `${progress}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            </div>
          </div>

          <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
