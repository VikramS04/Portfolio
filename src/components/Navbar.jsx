import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const links = ['about', 'skills', 'projects', 'experience', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        background: scrolled ? 'rgba(7,17,31,0.86)' : 'rgba(7,17,31,0.56)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
        boxShadow: scrolled ? '0 10px 40px rgba(2, 8, 23, 0.18)' : 'none',
      }}
    >
      <a href="#hero" className="flex items-center gap-3 no-underline">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-2xl font-mono text-sm font-bold"
          style={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(56,189,248,0.2))',
            color: 'var(--text)',
            border: '1px solid rgba(148,163,184,0.16)',
          }}
        >
          VS
        </span>
        <span className="hidden md:block">
          <span className="block text-sm font-semibold tracking-[0.18em]" style={{ color: 'var(--text)' }}>
            VIKRAM SAINI
          </span>
          <span className="block font-mono text-[0.68rem] uppercase tracking-[0.22em]" style={{ color: 'var(--muted)' }}>
            Portfolio
          </span>
        </span>
      </a>

      <ul className="desktop-nav-links hidden list-none gap-8 lg:flex">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className="font-mono text-xs uppercase tracking-[0.18em] no-underline transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = 'var(--muted)')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="desktop-nav-status hidden items-center gap-3 lg:flex">
        <span
          className="inline-block h-2 w-2 rounded-full"
          style={{ background: 'var(--accent3)', animation: 'navPulse 2s infinite' }}
        />
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
          Open to internships & collaborations
        </span>
      </div>

      <MobileMenu />

      <style>{`
        @keyframes navPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @media (max-width: 768px) {
          .desktop-nav-status { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
