import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const stats = [
  { num: '5+', label: 'Projects explored' },
  { num: '2', label: 'Core domains' },
  { num: '2nd', label: 'Year B.Tech' },
  { num: '24/7', label: 'Learning mode' },
];

const infoRows = [
  { key: '// location', val: 'Jaipur, Rajasthan, India' },
  { key: '// focus', val: 'AI/ML · Frontend · Product-oriented builds' },
  { key: '// profiles', val: 'LinkedIn + GitHub updated in this portfolio' },
  { key: '// seeking', val: 'Internships · collaborative work · growth-focused teams' },
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
      className="section-shell px-6 py-20 md:px-12"
      style={{ background: 'rgba(11,23,40,0.58)' }}
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="About Me" title="Who I Am" />

        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <div className="glass-panel rounded-[30px] p-6 font-mono text-[0.8rem] leading-8">
                <div className="mb-4 flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div><Kw>const</Kw> <Pr>vikram</Pr> = {'{'}</div>
                <div>&nbsp;&nbsp;<Pr>name</Pr>: <Str>"Vikram Saini"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>education</Pr>: <Str>"B.Tech CSE, JECRC University"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>track</Pr>: <Str>"AI/ML + Frontend Development"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>currentFocus</Pr>: [<Str>"React"</Str>, <Str>"Tailwind"</Str>, <Str>"ML Foundations"</Str>],</div>
                <div>&nbsp;&nbsp;<Pr>email</Pr>: <Str>"vikramsaini7723@gmail.com"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>mindset</Pr>: <Str>"Learn fast, ship clean, improve continuously"</Str>,</div>
                <div>&nbsp;&nbsp;<Pr>status</Pr>: <Str>"Open to opportunities"</Str></div>
                <div>{'}'};</div>
              </div>
            </Reveal>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="glass-panel rounded-[24px] p-5">
                    <div className="font-mono text-[1.8rem] font-extrabold leading-none" style={{ color: 'var(--accent)' }}>
                      {s.num}
                    </div>
                    <div className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="left">
            <div className="glass-panel rounded-[32px] p-7 md:p-8">
              <p className="mb-5 text-base leading-8 md:text-lg" style={{ color: 'var(--muted)' }}>
                I am a <strong style={{ color: 'var(--text)' }}>2nd-year Computer Science student</strong> at
                {' '}JECRC University, Jaipur, currently growing at the intersection of{' '}
                <strong style={{ color: 'var(--accent)' }}>AI/ML</strong> and{' '}
                <strong style={{ color: 'var(--accent2)' }}>modern frontend development</strong>.
              </p>
              <p className="mb-5 text-base leading-8 md:text-lg" style={{ color: 'var(--muted)' }}>
                My work so far reflects curiosity and range: building interfaces, contributing in team settings,
                and taking on practical roles that sharpen both technical and communication skills.
              </p>
              <p className="text-base leading-8 md:text-lg" style={{ color: 'var(--muted)' }}>
                This portfolio now leans into a cleaner, stronger presentation style because the goal is not only
                to show projects, but to show that I care about the craft behind how they are presented.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                {infoRows.map((row) => (
                  <div
                    key={row.key}
                    className="rounded-[22px] px-5 py-4 md:flex md:items-center md:gap-4"
                    style={{
                      background: 'rgba(148,163,184,0.05)',
                      border: '1px solid rgba(148,163,184,0.12)',
                    }}
                  >
                    <span className="block min-w-[130px] font-mono text-[0.7rem] uppercase tracking-[0.16em]" style={{ color: 'var(--accent2)' }}>
                      {row.key}
                    </span>
                    <span className="mt-2 block text-sm md:mt-0 md:text-base" style={{ color: 'var(--text)' }}>
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
const Num = ({ children }) => <span style={{ color: '#f59e0b' }}>{children}</span>;
