import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const work = [
  {
    date: '2024 — PRESENT',
    role: 'Tech Team Member',
    company: 'NIRBHECK — Cybersecurity Startup',
    desc: 'Working on the core tech team building cybersecurity tools and vulnerability analysis systems. Contributing to product development and threat detection features.',
    tags: ['Python', 'Security', 'Analysis'],
  },
  {
    date: '2024 — PRESENT',
    role: 'Marketing — Local Committee Member',
    company: 'IAESTE JECRC',
    desc: 'Managing marketing operations for international technical exchange programs. Coordinating outreach, event promotion, and student engagement for IAESTE\'s JECRC chapter.',
    tags: ['Marketing', 'Events', 'International'],
  },
  {
    date: '2024',
    role: 'Frontend Development Intern',
    company: 'CodeAlpha',
    desc: 'Built responsive frontend interfaces and React components as part of the internship program. Focused on clean UI implementation and modern web standards.',
    tags: ['React', 'HTML/CSS', 'JavaScript'],
  },
  {
    date: '2024 — PRESENT',
    role: 'Co-Founder',
    company: 'Seed Protein Startup',
    desc: 'Developing a B2C protein powder brand sourced from chia, flax, and sesame seeds — combining nutrition science with product entrepreneurship.',
    tags: ['Entrepreneurship', 'Product Dev'],
  },
];

const education = [
  {
    date: '2023 — 2027',
    role: 'B.Tech — Computer Science',
    company: 'JECRC University, Jaipur',
    desc: 'Specializing in AI/ML through the Samatrix program. Currently in 2nd year with a focus on machine learning, data structures, and full-stack development.',
    tags: ['AI/ML', 'Samatrix', 'B.Tech CS'],
  },
  {
    date: 'IN PROGRESS',
    role: 'Internship Application',
    company: 'CASCINATION AG — Switzerland (via IAESTE)',
    desc: "Pursuing an international technical internship at CASCINATION AG in Switzerland through IAESTE's global exchange program for engineering and science students.",
    tags: ['Switzerland', 'IAESTE', 'International'],
  },
];

function TimelineItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-6"
      style={{ paddingBottom: '2.5rem' }}
    >
      <div
        style={{
          position: 'absolute', left: '-0.35rem', top: 8,
          width: 12, height: 12,
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          transform: 'rotate(45deg)',
          borderRadius: 2,
        }}
      />

      <div className="mb-2 font-mono text-[0.68rem] uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
        {item.date}
      </div>
      <div className="mb-1 text-[1.1rem] font-bold tracking-[-0.02em]">
        {item.role}
      </div>
      <div className="mb-3 text-sm font-semibold md:text-[0.92rem]" style={{ color: 'var(--accent2)' }}>
        {item.company}
      </div>
      <div className="max-w-[520px] text-sm leading-7 md:text-[0.95rem]" style={{ color: 'var(--muted)' }}>
        {item.desc}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((t) => (
          <span
            key={t}
            className="rounded-full px-3 py-2 font-mono text-[0.62rem] uppercase tracking-[0.08em]"
            style={{
              border: '1px solid rgba(148,163,184,0.14)',
              color: 'var(--muted)',
              background: 'rgba(148,163,184,0.04)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function Timeline({ items }) {
  return (
    <div className="relative pl-4">
      <div
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: 1, background: 'linear-gradient(180deg, rgba(245,158,11,0.45), rgba(56,189,248,0.2), transparent)',
        }}
      />
      {items.map((item, i) => (
        <TimelineItem key={item.role + item.company} item={item} index={i} />
      ))}
    </div>
  );
}

const colLabel = (text) => (
  <div className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent2)' }}>
    {text}
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="section-shell px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Experience & Education" title="My Journey" />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-panel rounded-[30px] p-7 md:p-8">
            {colLabel('// Work Experience')}
            <Timeline items={work} />
          </div>
          <div className="glass-panel rounded-[30px] p-7 md:p-8">
            {colLabel('// Education')}
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
