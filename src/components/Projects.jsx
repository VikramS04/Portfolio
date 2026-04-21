import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const projects = [
  {
    num: '01',
    name: 'Track-it',
    desc: 'A full-stack finance app built with React, Node.js, Express, and MongoDB, featuring JWT authentication, secure transactions, and category-based expense tracking. Includes an interactive dashboard with real-time insights and responsive design, deployed via Vercel and Render.',
    stack: ['Node.js', 'MySQL', 'REST APIs', 'Authentication', 'RBAC'],
    live: 'https://track-it-mocha-six.vercel.app/',
    github: 'https://github.com/VikramS04/Track-It-Frontend',
    badge: 'PERSONAL PROJECT',
  },
  {
    num: '02',
    name: 'Krishi AI',
    desc: 'A full-stack agriculture support platform built during a hackathon to help farmers with data-backed decisions. It combines a React frontend, Express backend, MySQL data workflows, and AI/ML-assisted crop guidance and agricultural insights.',
    stack: ['React.js', 'Express.js', 'MySQL', 'REST APIs', 'Machine Learning'],
    live: 'https://krishi-ai-ecru.vercel.app/',
    github: 'https://github.com/VikramS04/KrishiAi',
    badge: 'HACKATHON',
  },
  // {
  //   num: '03',
  //   name: 'ManuSight',
  //   desc: 'A simulated FMCG production monitoring system designed to track machine-level output, downtime events, and fault thresholds. The architecture was planned to adapt to IoT-style ingestion and automated performance reporting.',
  //   stack: ['System Design', 'Reporting', 'Industrial Monitoring', 'Data Workflows'],
  //   live: null,
  //   github: null,
  //   badge: 'SYSTEM DESIGN',
  // },
  {
    num: '03',
    name: 'Safelance',
    desc: 'A freelancer client payment app listed in your resume project work. It reflects your interest in practical web products that solve trust, workflow, and payment-related problems through web interfaces.',
    stack: ['Full Stack', 'Product UI', 'Payments', 'Web App'],
    live: null,
    github: null,
    badge: 'HACKATHON',
  },
  {
    num: '04',
    name: 'Data Analysis Internship Projects',
    desc: 'A set of applied internship projects covering stock risk modeling (VaR), IPL data analysis, A/B testing simulation, hypothesis testing, and survival analysis using Kaplan-Meier and Cox regression.',
    stack: ['Python', 'Statistics', 'A/B Testing', 'Survival Analysis', 'Data Analysis'],
    live: 'https://drive.google.com/drive/u/1/folders/10oropKDW0tXnB1v6IegY4D2BEuv5PsY3',
    github: null,
    badge: 'INTERNSHIP',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell px-6 py-16 md:px-12 md:py-20" style={{ background: 'var(--section-bg)' }}>
      <div className="section-container">
        <SectionHeader label="Featured Work" title="Projects" />

        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
            A curated selection of projects showcasing my work across full-stack development, backend systems, system design, and data analysis. Each project reflects a focus on solving real-world problems through scalable and practical solutions.
          </p>
          <a
            href="https://github.com/VikramS04"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full px-4 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] no-underline"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.18)',
              color: 'var(--text)',
            }}
          >
            Explore GitHub Profile
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}

          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: projects.length * 0.07 }}
            className="glass-panel flex min-h-[220px] flex-col items-center justify-center rounded-[24px] border border-dashed text-center"
          >
            <div className="mb-2 font-mono text-3xl" style={{ color: 'var(--accent)' }}>+</div>
            <div className="font-mono text-[0.66rem] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
              More work can be added as new projects ship
            </div>
          </motion.div> */}
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
      className="glass-panel project-card relative flex h-full cursor-default flex-col overflow-hidden rounded-[24px] p-5 transition-all duration-300"
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
          className="absolute right-4 top-4 rounded-full px-3 py-1 font-mono text-[0.56rem] uppercase tracking-[0.12em]"
          style={{
            background: 'rgba(52,211,153,0.12)',
            border: '1px solid rgba(52,211,153,0.22)',
            color: 'var(--accent3)',
          }}
        >
          {p.badge}
        </div>
      )}

      <div className="mb-3 font-mono text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
        {p.num} —
      </div>
      <div className="mb-2 text-[1.05rem] font-bold tracking-[-0.02em]">
        {p.name}
      </div>
      <div className="mb-5 flex-1 text-[0.92rem] leading-6" style={{ color: 'var(--muted)' }}>
        {p.desc}
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.08em]"
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
        {p.live && <a href={p.live} style={linkStyle} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        {p.github && <a href={p.github} style={linkStyle} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {!p.live && !p.github && (
          <span style={metaStyle}>Portfolio summary card</span>
        )}
      </div>
    </motion.div>
  );
}

const linkStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.62rem',
  color: 'var(--text)',
  textDecoration: 'none',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  transition: 'all 0.2s',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.3rem',
  padding: '0.65rem 0.9rem',
  borderRadius: '999px',
  border: '1px solid rgba(148,163,184,0.14)',
  background: 'rgba(148,163,184,0.05)',
};

const metaStyle = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.62rem',
  color: 'var(--muted)',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
};
