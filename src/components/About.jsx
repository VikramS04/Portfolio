import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const stats = [
  { num: '3rd', label: 'Year B.Tech' },
  { num: '2027', label: 'Graduation target' },
  { num: '2025', label: 'Internship year' },
  { num: '5+', label: 'Projects & case builds' },
];

const infoRows = [
  { key: '// location', val: 'Jaipur, Rajasthan, India' },
  { key: '// focus', val: 'Full-stack web development · AI/ML · data analysis' },
  { key: '// leadership', val: 'Head of IT & Data Analytics, IAESTE India LC JECRC' },
  { key: '// seeking', val: 'Internships · global exposure · growth-focused teams' },
];

function Reveal({ children, delay = 0, direction = 'up' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="section-shell px-6 py-16 md:px-12 md:py-20"
      style={{ background: 'var(--section-bg)' }}
    >
      <div className="section-container">
        <SectionHeader label="About Me" title="Who I Am" />

        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <Reveal>
              <div className="glass-panel rounded-[26px] p-5 font-mono text-[0.75rem] leading-7">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div><Kw>const</Kw> <Pr>vikram</Pr> = {'{'}</div>
                <div>&nbsp;&nbsp;<Pr>name</Pr>: <Str>"Vikram Saini"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>education</Pr>: <Str>"B.Tech CSE (AI/ML), JECRC University"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>year</Pr>: <Str>"3rd Year"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>currentFocus</Pr>: [<Str>"React"</Str>, <Str>"Node.js"</Str>, <Str>"Data Analysis"</Str>],</div>
                <div>&nbsp;&nbsp;<Pr>email</Pr>: <Str>"vikramsaini7723@gmail.com"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>leadership</Pr>: <Str>"Head of IT & Data Analytics @ IAESTE LC JECRC"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>status</Pr>: <Str>"Open to opportunities"</Str></div>
                <div>{'}'};</div>
              </div>
            </Reveal>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="glass-panel rounded-[20px] p-4">
                    <div className="font-mono text-[1.5rem] font-extrabold leading-none" style={{ color: 'var(--accent)' }}>
                      {s.num}
                    </div>
                    <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="glass-panel rounded-[28px] p-6 md:p-7">
              <p className="mb-4 text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
                I am a <strong style={{ color: 'var(--text)' }}>3rd-year Computer Science student</strong> at
                {' '}JECRC University, Jaipur, specializing in <strong style={{ color: 'var(--accent)' }}>AI/ML under the Samatrix track</strong> while actively building strength in{' '}
                <strong style={{ color: 'var(--accent2)' }}>full-stack web development</strong>.
              </p>
              <p className="mb-4 text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
                My recent work reflects both technical depth and range: a <strong style={{ color: 'var(--text)' }}>Data Analysis Internship at Samatrix Consulting Pvt. Ltd.</strong>,
                a <strong style={{ color: 'var(--text)' }}>Full-Stack Web Development Internship with IAESTE Burundi</strong>, and ongoing leadership in technical operations at IAESTE India LC JECRC.
              </p>
              <p className="text-[0.97rem] leading-7 md:text-base" style={{ color: 'var(--muted)' }}>
                I enjoy working across product UI, APIs, databases, and problem-solving environments like hackathons.
                That mix of execution, learning speed, and ownership is what I want this portfolio to communicate.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                {infoRows.map((row) => (
                  <div
                    key={row.key}
                    className="rounded-[18px] px-4 py-3.5 md:flex md:items-center md:gap-4"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.12)',
                    }}
                  >
                    <span className="block min-w-[120px] font-mono text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: 'var(--accent2)' }}>
                      {row.key}
                    </span>
                    <span className="mt-2 block text-sm md:mt-0 md:text-[0.95rem]" style={{ color: 'var(--text)' }}>
                      {row.val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// Syntax highlight helpers
const Kw = ({ children }) => <span style={{ color: '#7c3aed' }}>{children}</span>;
const Pr = ({ children }) => <span style={{ color: '#00e5ff' }}>{children}</span>;
const Str = ({ children }) => <span style={{ color: '#10b981' }}>{children}</span>;
