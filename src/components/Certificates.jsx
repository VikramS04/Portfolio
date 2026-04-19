import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiExternalLink, FiFileText } from 'react-icons/fi';
import SectionHeader from './SectionHeader';
import { siteContent } from '../content/siteContent';

const certificateGroups = [
  {
    eyebrow: 'Frontend and Full Stack',
    title: 'Web development certificates',
    accent: 'var(--accent)',
    items: [
      'React by Udemy',
      'HTML, CSS, JavaScript and PHP by Udemy',
      'Full Stack Web Development',
      'Full Stack Intern Internship by IAESTE',
    ],
  },
  {
    eyebrow: 'Programming and Data',
    title: 'Core technical foundations',
    accent: 'var(--accent2)',
    items: [
      'Relational Databases and SQL by Udemy',
      'Data Structures and OOP with C++',
      'Python Programming by Udemy',
      'JavaScript Project Course by Udemy',
    ],
  },
  {
    eyebrow: 'AI and Analytics',
    title: 'AI, ML and analysis learning',
    accent: 'var(--accent3)',
    items: [
      'Foundation to AI, Data Science and Data Analytics by Samatrix.io',
      'Data Analysis Internship Completion by Samatrix.io',
      'Deep Learning by Samatrix',
      'Advanced Machine Learning by Samatrix',
      'Natural Language Processing in Python',
    ],
  },
];

const resumeHighlights = [
  'Internship and leadership experience',
  'Full-stack and AI/ML project work',
  'Certificates and academic background',
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-shell px-6 py-16 md:px-12 md:py-20">
      <div className="section-container">
        <SectionHeader label="Certificates & Resume" title="Credentials That Back The Work" />

        <div className="mb-8 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative overflow-hidden rounded-[28px] p-6 md:p-7"
          >
            <div
              className="absolute inset-x-8 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(245,158,11,0.75), rgba(56,189,248,0.75), transparent)',
              }}
            />
            <div className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent2)' }}>
              Snapshot
            </div>
            <h3 className="mb-4 max-w-xl text-[clamp(1.6rem,3vw,2.5rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              Structured learning across web development, data, and AI.
            </h3>
            <p className="max-w-2xl text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
              This section highlights the certificates and learning tracks that support the practical work
              shown throughout the portfolio. Instead of treating them like a long list, they are grouped by
              the skills they reinforce.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel relative overflow-hidden rounded-[28px] p-6 md:p-7"
          >
            <div
              className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full blur-3xl"
              style={{ background: 'rgba(56,189,248,0.18)' }}
            />
            <div className="relative z-[1]">
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: 'rgba(245,158,11,0.12)', color: 'var(--accent)' }}>
                <FiFileText size={20} />
              </div>
              <div className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
                Resume View
              </div>
              <h3 className="mb-4 text-[clamp(1.55rem,2.6vw,2.3rem)] font-bold leading-[1.04] tracking-[-0.04em]">
                Open my resume in one click.
              </h3>
              <p className="mb-5 text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
                Use the resume for a cleaner overview of my internships, certificates, project exposure,
                and education in one place.
              </p>

              <div className="mb-6 space-y-3">
                {resumeHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[18px] px-4 py-3"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.12)',
                    }}
                  >
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: 'var(--accent3)' }} />
                    <span className="text-sm md:text-[0.95rem]" style={{ color: 'var(--text)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteContent.resumeFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] no-underline"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), #f97316)',
                    color: '#08111b',
                  }}
                >
                  View Resume
                  <FiExternalLink size={15} />
                </a>
                <a
                  href={siteContent.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 font-mono text-[0.72rem] uppercase tracking-[0.16em] no-underline"
                  style={{
                    background: 'rgba(148,163,184,0.06)',
                    border: '1px solid rgba(148,163,184,0.14)',
                    color: 'var(--text)',
                  }}
                >
                  LinkedIn Profile
                  <FiArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-5 xl:grid-cols-3">
          {certificateGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel rounded-[26px] p-5 md:p-6"
            >
              <div className="mb-4 font-mono text-[0.64rem] uppercase tracking-[0.18em]" style={{ color: group.accent }}>
                {group.eyebrow}
              </div>
              <h3 className="mb-5 text-[1.15rem] font-bold tracking-[-0.02em]">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="rounded-[18px] px-4 py-3.5"
                    style={{
                      background:
                        itemIndex === 0 ? 'rgba(148,163,184,0.07)' : 'rgba(148,163,184,0.04)',
                      border: '1px solid rgba(148,163,184,0.12)',
                    }}
                  >
                    <div className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.16em]" style={{ color: group.accent }}>
                      Certificate
                    </div>
                    <div className="text-sm leading-6 md:text-[0.95rem]" style={{ color: 'var(--text)' }}>
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
