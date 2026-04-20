import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';
import MobileMenu from './MobileMenu';

const links = ['about', 'skills', 'projects', 'experience', 'certificates', 'contact'];

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('about');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPosition = window.scrollY + 160;
      let current = links[0];

      links.forEach((link) => {
        const section = document.getElementById(link);
        if (section && scrollPosition >= section.offsetTop) {
          current = link;
        }
      });

      setActiveLink(current);
    };

    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (links.includes(hash)) setActiveLink(hash);
    };

    onScroll();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('hashchange', onHashChange);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between px-6 py-4 md:px-12"
      style={{
        background: scrolled ? 'var(--nav-bg-strong)' : 'var(--nav-bg)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? 'var(--shadow-soft)' : 'none',
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
              style={{
                color: activeLink === link ? 'var(--text)' : 'var(--muted)',
                textDecoration: activeLink === link ? 'underline' : 'none',
                textUnderlineOffset: '0.45rem',
                textDecorationColor: activeLink === link ? 'var(--accent)' : 'transparent',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.target.style.color = activeLink === link ? 'var(--text)' : 'var(--muted)')}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      <div className="desktop-nav-status hidden items-center gap-3 lg:flex">
        <button
          type="button"
          onClick={onToggleTheme}
          className="inline-flex items-center gap-2 rounded-full px-4 py-3 font-mono text-[0.68rem] uppercase tracking-[0.14em]"
          style={{
            color: 'var(--text)',
            background: 'rgba(148,163,184,0.06)',
            border: '1px solid rgba(148,163,184,0.14)',
          }}
        >
          {theme === 'dark' ? <FiSun size={14} /> : <FiMoon size={14} />}
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      <MobileMenu theme={theme} onToggleTheme={onToggleTheme} />

      <style>{`
        @keyframes navPulse{0%,100%{opacity:1}50%{opacity:0.3}}
        @media (max-width: 768px) {
          .desktop-nav-status { display: none !important; }
        }
      `}</style>
    </motion.nav>
  );
}
