import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const work = [
  {
    date: 'SEP 2025 — PRESENT',
    role: 'Head, Information Technology and Data Analytics',
    company: 'IAESTE India LC JECRC',
    desc: 'Leading the Information Technology and Data Analytics department, overseeing the organization’s website, maintenance portal, database workflows, and broader digital infrastructure while coordinating technical initiatives across the team.',
    tags: ['Leadership', 'Web Ops', 'Database', 'Technical Management'],
  },
  {
    date: 'JUN 2025 — JUL 2025',
    role: 'Data Analysis Intern',
    company: 'Samatrix Consulting Pvt. Ltd. | Remote',
    desc: 'Worked on projects spanning finance, healthcare, e-commerce, and sports, including stock risk modeling, A/B testing, queue optimization, IPL data analysis, and survival analysis using Python-based analytical workflows.',
    tags: ['Python', 'Data Analysis', 'Statistics', 'Simulation'],
  },
  {
    date: 'JUN 2025 — JUL 2025',
    role: 'Full-Stack Web Development Intern',
    company: 'IAESTE Burundi | Remote',
    desc: 'Selected for a global internship to build full-stack web applications using React.js, Node.js, APIs, and databases. Also developed the official website for IAESTE Burundi while gaining international collaborative software development experience.',
    tags: ['React.js', 'Node.js', 'APIs', 'Global Internship'],
  },
];

const education = [
  {
    date: '2023 — 2027',
    role: 'B.Tech — Computer Science (AI/ML - Samatrix)',
    company: 'JECRC University, Jaipur',
    desc: 'Currently in 3rd year, specializing in Artificial Intelligence and Machine Learning while continuing to build strength in full-stack development, data analysis, and practical product engineering.',
    tags: ['3rd Year', 'AI/ML', 'Full Stack', 'JECRC University'],
  },
  {
    date: '2020 — 2022',
    role: 'Senior Secondary Education',
    company: 'Asian Public School, Sohna, Haryana',
    desc: 'Completed secondary education before starting the B.Tech journey. This foundation led into your current technical track in Computer Science with AI/ML specialization.',
    tags: ['Schooling', 'Haryana', 'Academic Foundation'],
  },
  {
    date: '2018 — 2020',
    role: '9th - 10th CBSE',
    company: 'Raath International School',
    desc: 'Completed foundational school education under the CBSE curriculum before moving into senior secondary studies and later into Computer Science.',
    tags: ['CBSE', 'Raath International School', 'Schooling'],
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
