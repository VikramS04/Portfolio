import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

const links = ['about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

export default function MobileMenu({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle menu"
        className="mobile-menu-btn hidden cursor-pointer flex-col gap-[5px] rounded-xl border border-white/10 bg-white/5 p-3"
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={
              open
                ? i === 0
                  ? { rotate: 45, y: 7 }
                  : i === 1
                  ? { opacity: 0 }
                  : { rotate: -45, y: -7 }
                : { rotate: 0, y: 0, opacity: 1 }
            }
            style={{
              display: 'block',
              width: 22, height: 1.5,
              background: 'var(--text)',
              transformOrigin: 'center',
            }}
          />
        ))}
      </button>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-4 right-4 top-20 z-[99] flex flex-col gap-1 rounded-[28px] p-5"
            style={{
              background: 'var(--mobile-menu-bg)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-strong)',
            }}
          >
            <button
              type="button"
              onClick={onToggleTheme}
              className="mb-3 flex items-center justify-center gap-2 rounded-2xl px-3 py-4 font-mono text-[0.8rem] uppercase tracking-[0.16em]"
              style={{
                color: 'var(--text)',
                border: '1px solid rgba(148,163,184,0.08)',
                background: 'rgba(148,163,184,0.04)',
              }}
            >
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link}`}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-2xl px-3 py-4 font-mono text-[0.8rem] uppercase tracking-[0.16em] no-underline"
                style={{
                  color: 'var(--text)',
                  border: '1px solid rgba(148,163,184,0.08)',
                  background: 'rgba(148,163,184,0.04)',
                }}
              >
                <span style={{ color: 'var(--accent)', fontSize: '0.65rem' }}>0{i + 1}</span>
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile-only styles */}
      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
