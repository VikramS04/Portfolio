import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../content/siteContent';

const roles = [
  'B.Tech CSE (AI/ML), 3rd Year - JECRC University',
  'Head, Information Technology & Data Analytics - IAESTE LC JECRC',
  'Data Analysis Intern - Samatrix Consulting',
  'Full-Stack Developer Intern - IAESTE Burundi',
  'Building Real-World Systems & Hackathon Projects',
];

const profileHighlights = ['Full-Stack', 'Backend Systems', 'AI/ML', 'Data & Analytics'];

const quickStats = [
  { value: '3rd Year', label: 'B.Tech CSE (AI/ML)' },
  { value: 'Opportunities', label: 'Seeking' },
  { value: '2027', label: 'Graduating' },
];

const featureCards = [
  {
    title: 'Product-focused',
    text: 'Designing systems that are intuitive, scalable, and built to solve actual problems.',
  },
  {
    title: 'Hands-on',
    text: 'Learning by building - through internships, hackathons, and end-to-end projects.',
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
      className="section-shell relative overflow-hidden px-6 pb-14 pt-24 md:px-12 md:pb-16 md:pt-28"
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

      <div className="section-container relative z-[1] grid items-start gap-6 lg:grid-cols-[1fr_0.96fr] lg:items-center lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2"
        >
          <motion.div
            className="glass-panel relative overflow-hidden rounded-[28px] p-3 md:rounded-[32px] md:p-4"
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
                className="hero-avatar h-[300px] w-full object-cover object-top sm:h-[390px] md:h-[500px]"
              />
              <div
                className="absolute inset-x-0 top-0 p-4 md:hidden"
                style={{
                  background: 'linear-gradient(180deg, var(--hero-overlay-bottom) 0%, transparent 100%)',
                }}
              >
                <div
                  className="font-mono text-[0.68rem] uppercase tracking-[0.18em]"
                  style={{ color: 'var(--accent2)' }}
                >
                  Hey, I&apos;m
                </div>
                <div className="mt-2 text-[clamp(1.8rem,7vw,2.7rem)] font-bold leading-none tracking-[-0.04em]">
                  Vikram Saini
                </div>
              </div>
              <div
                className="absolute inset-x-0 bottom-0 p-4 md:p-5"
                style={{
                  background:
                    'linear-gradient(180deg, transparent, var(--hero-overlay-top) 55%, var(--hero-overlay-bottom) 100%)',
                }}
              >
                <div
                  className="mb-2 font-mono text-[0.78rem] uppercase tracking-[0.18em]"
                  style={{ color: '#A829D6', fontWeight: 900, WebkitTextStroke: '0.08px black', }}
                >
                  Full-Stack Developer
                </div>
                <div className="max-w-sm text-lg font-semibold leading-tight tracking-[-0.03em] md:text-[1.35rem]">
                  I build products that balance clean design, solid backend logic, and real-world usability.
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-3 grid gap-3 sm:grid-cols-2"
            >
              {featureCards.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] px-4 py-3.5"
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
                  <div className="text-[0.92rem] leading-6" style={{ color: 'var(--muted)' }}>
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
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.18em]"
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

          <h1 className="mb-4 hidden max-w-3xl text-[clamp(2.5rem,5vw,4.4rem)] font-bold leading-[0.98] tracking-[-0.05em] md:block">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="block font-mono text-sm uppercase tracking-[0.2em] md:text-base"
              style={{ color: 'var(--accent2)' }}
            >
              Hey, I&apos;m
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
            className="mb-4 max-w-2xl font-mono text-[0.7rem] uppercase tracking-[0.18em]"
            style={{ color: 'var(--muted)' }}
          >
            Full-Stack Developer · AI/ML Enthusiast · Jaipur, India
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mb-6 max-w-2xl text-[0.98rem] leading-7 md:text-[1.06rem]"
            style={{ color: 'var(--muted)' }}
          >
           I build full-stack applications, backend systems, and data-driven solutions focused on solving real-world problems. My work spans web development, system design, and analytics, with hands-on experience through hackathons, projects, and leadership at IAESTE India LC JECRC.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mb-6 flex flex-wrap gap-2.5"
          >
            {profileHighlights.map((item) => (
              <span
                key={item}
                className="chip px-3.5 py-1.5 font-mono text-[0.66rem] uppercase tracking-[0.12em]"
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
            className="mb-7 flex flex-wrap gap-3"
          >
            <a href="#projects" style={btnPrimary}>
              View Projects
            </a>
            <a href={siteContent.resumeFile} target="_blank" rel="noreferrer" style={btnOutline}>
              View Resume
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
            className="grid gap-3 sm:grid-cols-3"
          >
            {quickStats.map((item) => (
              <div key={item.label} className="glass-panel rounded-[20px] p-4">
                <div
                  className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.16em]"
                  style={{ color: 'var(--accent2)' }}
                >
                  {item.label}
                </div>
                <div className="text-base font-semibold tracking-[-0.02em]">{item.value}</div>
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
  padding: '0.82rem 1.25rem',
  background: 'linear-gradient(135deg, var(--accent), #f97316)',
  color: '#08111b',
  fontWeight: 800,
  fontSize: '0.74rem',
  letterSpacing: '0.09em',
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
  padding: '0.82rem 1.25rem',
  background: 'rgba(56,189,248,0.08)',
  color: 'var(--text)',
  fontWeight: 700,
  fontSize: '0.74rem',
  letterSpacing: '0.09em',
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
  padding: '0.82rem 1.25rem',
  background: 'rgba(148,163,184,0.06)',
  color: 'var(--text)',
  fontWeight: 700,
  fontSize: '0.74rem',
  letterSpacing: '0.09em',
  textDecoration: 'none',
  borderRadius: '999px',
  border: '1px solid rgba(148,163,184,0.14)',
  cursor: 'pointer',
  fontFamily: 'var(--font-mono)',
  textTransform: 'uppercase',
};
