import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  {
    num: '01',
    name: 'Safelancer',
    desc: 'A sustainable shopping web app that surfaces eco-friendly product alternatives and scores items by their environmental impact. Built with a focus on real-world UX and social good.',
    stack: ['React', 'CSS3', 'JavaScript', 'API Integration'],
    live: null,
    github: null,
    badge: 'CONCEPT',
  },
  {
    num: '02',
    name: 'Praatika',
    desc: 'Responsive e-commerce platform promoting Indian artisan crafts with a detailed navbar, multi-section layout, and smooth UX. A celebration of heritage meets modern web.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    live: null,
    github: null,
    badge: 'SHOWCASE',
  },
  {
    num: '03',
    name: 'Amazon Clone',
    desc: 'Pixel-perfect front-end replica of Amazon\'s shopping interface — complete with product cards, cart logic, nav, and responsive design for all screen sizes.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: null,
    github: null,
    badge: null,
  },
  {
    num: '04',
    name: 'Chrome Link Saver',
    desc: 'A lightweight Chrome extension for saving, organizing, and quickly accessing links across browsing sessions. Minimal UI, maximum productivity.',
    stack: ['JavaScript', 'Chrome API', 'HTML/CSS'],
    live: null,
    github: null,
    badge: null,
  },
  {
    num: '05',
    name: 'Blackjack Game',
    desc: 'Interactive browser-based Blackjack with full game logic, animated card dealing, score tracking, and responsive layout. Clean UI meets classic casino vibes.',
    stack: ['JavaScript', 'HTML5', 'CSS Animations'],
    live: null,
    github: null,
    badge: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell px-6 py-20 md:px-12" style={{ background: 'rgba(11,23,40,0.58)' }}>
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Featured Work" title="Projects" />

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-base leading-8 md:text-lg" style={{ color: 'var(--muted)' }}>
            I kept the project section honest: rather than fake links, this version focuses on the ideas,
            execution, and directions I have been exploring. More code is available directly on GitHub.
          </p>
          <a
            href="https://github.com/VikramS04"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 font-mono text-xs uppercase tracking-[0.16em] no-underline"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.18)',
              color: 'var(--text)',
            }}
          >
            Explore GitHub Profile
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: projects.length * 0.07 }}
            className="glass-panel flex min-h-[260px] flex-col items-center justify-center rounded-[30px] border border-dashed text-center"
          >
            <div className="mb-2 font-mono text-4xl" style={{ color: 'var(--accent)' }}>+</div>
            <div className="font-mono text-[0.72rem] uppercase tracking-[0.18em]" style={{ color: 'var(--muted)' }}>
              More work can be added as new projects ship
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="glass-panel project-card relative flex h-full cursor-default flex-col overflow-hidden rounded-[30px] p-7 transition-all duration-300"
      style={{
        border: hovered ? '1px solid rgba(245,158,11,0.35)' : '1px solid rgba(148,163,184,0.14)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      <div
        style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(140deg, rgba(245,158,11,0.12) 0%, transparent 45%, rgba(56,189,248,0.08) 100%)',
          opacity: hovered ? 1 : 0.55,
          transition: 'opacity 0.3s',
          pointerEvents: 'none',
        }}
      />

      {p.badge && (
        <div
          className="absolute right-5 top-5 rounded-full px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.14em]"
          style={{
            background: 'rgba(52,211,153,0.12)',
            border: '1px solid rgba(52,211,153,0.22)',
            color: 'var(--accent3)',
          }}
        >
          {p.badge}
        </div>
      )}

      <div className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
        {p.num} —
      </div>
      <div className="mb-3 text-xl font-bold tracking-[-0.02em]">
        {p.name}
      </div>
      <div className="mb-6 flex-1 text-sm leading-7 md:text-[0.95rem]" style={{ color: 'var(--muted)' }}>
        {p.desc}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.08em]"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.18)',
              color: 'var(--accent2)',
            }}
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4">
        {p.live && <a href={p.live} style={linkStyle}>Live Demo</a>}
        {p.github && <a href={p.github} style={linkStyle}>GitHub</a>}
        {!p.live && !p.github && (
          <span style={metaStyle}>Portfolio summary card</span>
        )}
      </div>
    </motion.div>
  );
}

const linkStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
  color: 'var(--text)',
  textDecoration: 'none',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  transition: 'all 0.2s',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '0.75rem 1rem',
  borderRadius: '999px',
  border: '1px solid rgba(148,163,184,0.14)',
  background: 'rgba(148,163,184,0.05)',
};

const metaStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.68rem',
  color: 'var(--muted)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};
