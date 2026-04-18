import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const categories = [
  {
    title: '// AI & Machine Learning',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'OpenCV', 'NLP'],
    hot: ['Python', 'TensorFlow', 'PyTorch'],
  },
  {
    title: '// Frontend Development',
    tags: ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    hot: ['React.js'],
  },
  {
    title: '// Data & Big Data',
    tags: ['Data Analysis', 'Matplotlib', 'Seaborn', 'SQL', 'Jupyter', 'Apache Spark'],
    hot: ['Data Analysis'],
  },
  {
    title: '// Tools & Platforms',
    tags: ['Git / GitHub', 'VS Code', 'Linux', 'Node.js', 'Figma', 'Vercel', 'Docker'],
    hot: ['Git / GitHub'],
  },
  {
    title: '// Cybersecurity (NIRBHECK)',
    tags: ['Network Security', 'Vulnerability Analysis', 'Ethical Hacking', 'Python Scripts'],
    hot: [],
  },
  {
    title: '// Soft Skills',
    tags: ['Marketing', 'Team Leadership', 'Entrepreneurship', 'Technical Writing', 'Event Management'],
    hot: [],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell px-6 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader label="Technical Skills" title="What I Work With" />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel relative overflow-hidden rounded-[28px] p-6"
            >
              <div
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent2))' }}
              />

              <div
                className="mb-5 font-mono text-[0.7rem] uppercase tracking-[0.18em]"
                style={{ color: 'var(--accent)' }}
              >
                {cat.title}
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.tags.map((tag) => (
                  <SkillTag key={tag} hot={cat.hot.includes(tag)}>{tag}</SkillTag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTag({ children, hot }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <span
      className="skill-tag"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.68rem',
        padding: '0.48rem 0.85rem',
        borderRadius: 999,
        border: hovered
          ? '1px solid rgba(245,158,11,0.55)'
          : hot
          ? '1px solid rgba(56,189,248,0.35)'
          : '1px solid rgba(148,163,184,0.12)',
        color: hovered
          ? 'var(--text)'
          : hot
          ? 'var(--accent2)'
          : 'var(--muted)',
        background: hovered
          ? 'rgba(245,158,11,0.12)'
          : hot
          ? 'rgba(56,189,248,0.08)'
          : 'rgba(148,163,184,0.03)',
        letterSpacing: '0.05em',
        transition: 'all 0.2s',
        cursor: 'default',
      }}
    >
      {children}
    </span>
  );
}
