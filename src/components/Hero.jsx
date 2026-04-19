import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

const roles = [
  '3rd Year B.Tech CSE (AI/ML) @ JECRC University',
  'Head of IT & Data Analytics @ IAESTE India LC JECRC',
  'Data Analysis Intern @ Samatrix Consulting',
  'Full-Stack Web Development Intern @ IAESTE Burundi',
  'Hackathon Builder Working on Practical Products',
];

const profileHighlights = ['Full Stack', 'AI/ML', 'Data Analysis', 'Leadership'];

const quickStats = [
  { value: '3rd Year', label: 'B.Tech CSE (AI/ML)' },
  { value: '2025', label: 'Internship year' },
  { value: '2027', label: 'Expected graduation' },
];

const featureCards = [
  {
    title: 'Product-focused',
    text: 'Clean interfaces, scalable flows, and practical problem solving.',
  },
  {
    title: 'Hands-on',
    text: 'Internships, hackathons, full-stack builds, and technical leadership.',
  },
];

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const tagRef = useRef(null);
  const tiRef = useRef(0);
  const ciRef = useRef(0);
  const delRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    function tick() {
      const el = tagRef.current;
      if (!el) return;
      const txt = roles[tiRef.current];
      if (!delRef.current && ciRef.current <= txt.length) {
        el.textContent = txt.slice(0, ciRef.current++);
        const delay = ciRef.current === txt.length ? 1800 : 55;
        timerRef.current = setTimeout(tick, delay);
      } else if (!delRef.current) {
        delRef.current = true;
        timerRef.current = setTimeout(tick, 600);
      } else if (ciRef.current > 0) {
        el.textContent = txt.slice(0, --ciRef.current);
        timerRef.current = setTimeout(tick, 28);
      } else {
        delRef.current = false;
        tiRef.current = (tiRef.current + 1) % roles.length;
        timerRef.current = setTimeout(tick, 300);
      }
    }

    timerRef.current = setTimeout(tick, 1400);
    return () => clearTimeout(timerRef.current);
  }, []);

  function handleCardMove(event) {
    if (window.innerWidth < 1024) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    setTilt({ x, y });
  }

  return (
    <section
      id="hero"
      className="section-shell relative overflow-hidden px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-32"
      style={{ minHeight: '100vh' }}
    >
      <div
        className="pointer-events-none absolute left-[-8rem] top-20 h-72 w-72 rounded-full blur-3xl"
        style={{ background: 'rgba(245,158,11,0.18)' }}
      />
      <div
        className="pointer-events-none absolute right-[-5rem] top-32 h-80 w-80 rounded-full blur-3xl"
        style={{ background: 'rgba(56,189,248,0.16)' }}
      />

      <div className="relative z-[1] mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <motion.div
            className="glass-panel relative overflow-hidden rounded-[32px] p-4 md:rounded-[38px] md:p-5"
            onMouseMove={handleCardMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <div
              className="absolute inset-x-6 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(245,158,11,0.8), rgba(56,189,248,0.8), transparent)',
              }}
            />

            <div className="relative overflow-hidden rounded-[24px] md:rounded-[30px]">
              <img
                src={siteContent.heroImage}
                alt={siteContent.name}
                className="hero-avatar h-[320px] w-full object-cover object-top sm:h-[420px] md:h-[560px]"
              />
              <div
                className="absolute inset-x-0 bottom-0 p-5 md:p-6"
                style={{
                  background:
                    'linear-gradient(180deg, transparent, var(--hero-overlay-top) 55%, var(--hero-overlay-bottom) 100%)',
                }}
              >
                <div
                  className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.18em]"
                  style={{ color: 'var(--accent2)' }}
                >
                  Full-Stack Web Developer
                </div>
                <div className="max-w-sm text-xl font-semibold leading-tight tracking-[-0.03em] md:text-2xl">
                  Building products with cleaner interfaces, clearer logic, and stronger execution.
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-4 grid gap-3 sm:grid-cols-2"
            >
              {featureCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[22px] px-4 py-4"
                  style={{
                    background: 'rgba(148,163,184,0.05)',
                    border: '1px solid rgba(148,163,184,0.12)',
                  }}
                >
                  <div
                    className="mb-1 font-mono text-[0.66rem] uppercase tracking-[0.18em]"
                    style={{ color: 'var(--accent)' }}
                  >
                    {item.title}
                  </div>
                  <div className="text-sm leading-6" style={{ color: 'var(--muted)' }}>
                    {item.text}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.18em]"
            style={{
              color: 'var(--text)',
              border: '1px solid rgba(148,163,184,0.16)',
              background: 'rgba(148,163,184,0.06)',
            }}
          >
            <span style={{ color: 'var(--accent)' }}>&gt;</span>
            <span ref={tagRef} />
            <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
            <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
          </motion.div>

          <h1 className="mb-5 max-w-3xl text-[clamp(2.8rem,6vw,5.2rem)] font-bold leading-[0.98] tracking-[-0.05em]">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-sm uppercase tracking-[0.2em] md:text-base"
              style={{ color: 'var(--accent2)' }}
            >
              Hi, I&apos;m
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 block"
            >
              Vikram Saini
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.62 }}
            className="mb-5 max-w-2xl font-mono text-[0.76rem] uppercase tracking-[0.18em]"
            style={{ color: 'var(--muted)' }}
          >
            Full-Stack Web Developer · AI/ML Student · Jaipur, India
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-7 max-w-2xl text-base leading-8 md:text-xl"
            style={{ color: 'var(--muted)' }}
          >
            I build responsive products, backend systems, and data-driven solutions with a strong
            focus on clarity, usability, and real-world execution. My work spans web development,
            data analysis, hackathons, and technical leadership through IAESTE India LC JECRC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mb-7 flex flex-wrap gap-3"
          >
            {profileHighlights.map((item) => (
              <span
                key={item}
                className="chip px-4 py-2 font-mono text-[0.72rem] uppercase tracking-[0.12em]"
                style={{ color: 'var(--text)' }}
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mb-8 flex flex-wrap gap-4"
          >
            <a href="#projects" style={btnPrimary}>
              View Projects
            </a>
            <a href={siteContent.resumeFile} download style={btnOutline}>
              Download Resume
            </a>
            <a href={siteContent.linkedin} target="_blank" rel="noreferrer" style={btnGhost}>
              LinkedIn
            </a>
            <a href={siteContent.github} target="_blank" rel="noreferrer" style={btnGhost}>
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.12 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {quickStats.map((item) => (
              <div key={item.label} className="glass-panel rounded-[24px] p-5">
                <div
                  className="mb-2 font-mono text-xs uppercase tracking-[0.18em]"
                  style={{ color: 'var(--accent2)' }}
                >
                  {item.label}
                </div>
                <div className="text-lg font-semibold tracking-[-0.02em]">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const btnPrimary = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.95rem 1.5rem',
  background: 'linear-gradient(135deg, var(--accent), #f97316)',
  color: '#08111b',
  fontWeight: 800,
  fontSize: '0.82rem',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  borderRadius: '999px',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
  boxShadow: '0 12px 32px rgba(245,158,11,0.28)',
};

const btnOutline = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.95rem 1.5rem',
  background: 'rgba(56,189,248,0.08)',
  color: 'var(--text)',
  fontWeight: 700,
  fontSize: '0.82rem',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  borderRadius: '999px',
  border: '1px solid rgba(56,189,248,0.22)',
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
};

const btnGhost = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.5rem',
  padding: '0.95rem 1.5rem',
  background: 'rgba(148,163,184,0.06)',
  color: 'var(--text)',
  fontWeight: 700,
  fontSize: '0.82rem',
  letterSpacing: '0.1em',
  textDecoration: 'none',
  borderRadius: '999px',
  border: '1px solid rgba(148,163,184,0.14)',
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
};
