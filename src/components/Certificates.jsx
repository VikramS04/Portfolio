import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { siteContent } from '../content/siteContent';

const certificateGroups = [
  {
    title: 'Web Development',
    items: [
      'React by Udemy',
      'HTML, CSS, JavaScript and PHP by Udemy',
      'Full Stack Web Development',
      'Full Stack Intern Internship by IAESTE',
    ],
  },
  {
    title: 'Databases and Programming',
    items: [
      'Relational Databases and SQL by Udemy',
      'Data Structures and OOP with C++',
      'Python Programming by Udemy',
      'JavaScript Project Course by Udemy',
    ],
  },
  {
    title: 'AI, Data and Analysis',
    items: [
      'Foundation to AI, Data Science and Data Analytics by Samatrix.io',
      'Data Analysis Internship Completion by Samatrix.io',
      'Deep Learning by Samatrix',
      'Advanced Machine Learning by Samatrix',
      'Natural Language Processing in Python',
    ],
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="section-shell px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Certificates & Resume" title="Proof of Work and Learning" />

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificateGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="glass-panel rounded-[30px] p-6"
              >
                <div className="mb-5 font-mono text-[0.72rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent2)' }}>
                  {group.title}
                </div>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] px-4 py-4 text-sm leading-7 md:text-[0.95rem]"
                      style={{
                        background: 'rgba(148,163,184,0.05)',
                        border: '1px solid rgba(148,163,184,0.12)',
                        color: 'var(--text)',
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel flex flex-col justify-between rounded-[34px] p-7 md:p-8"
          >
            <div>
              <div className="mb-3 font-mono text-[0.72rem] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>
                Download Resume
              </div>
              <h3 className="mb-4 text-3xl font-bold tracking-[-0.03em]">Keep a copy of my resume</h3>
              <p className="mb-6 text-sm leading-8 md:text-base" style={{ color: 'var(--muted)' }}>
                Download the latest version of my resume to review my internships, projects, certifications,
                and academic background in one place.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={siteContent.resumeFile}
                download
                className="inline-flex w-full items-center justify-center rounded-full px-5 py-4 font-mono text-[0.76rem] uppercase tracking-[0.16em] no-underline"
                style={{
                  background: 'linear-gradient(135deg, var(--accent), #f97316)',
                  color: '#08111b',
                }}
              >
                Download Resume PDF
              </a>

              <a
                href={siteContent.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full px-5 py-4 font-mono text-[0.76rem] uppercase tracking-[0.16em] no-underline"
                style={{
                  background: 'rgba(148,163,184,0.06)',
                  border: '1px solid rgba(148,163,184,0.14)',
                  color: 'var(--text)',
                }}
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
