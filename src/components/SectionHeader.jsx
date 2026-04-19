import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title }) {
  return (
    <div className="mb-10">
      <div
        className="mb-3 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.24em]"
        style={{ color: 'var(--accent2)' }}
      >
        <span className="inline-block h-px w-8" style={{ background: 'var(--accent2)' }} />
        {label}
        <span
          className="inline-block h-2 w-2 rotate-45"
          style={{ background: 'var(--accent)' }}
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl text-[clamp(1.8rem,3.2vw,3rem)] font-extrabold leading-none tracking-[-0.03em]"
      >
        {title}
      </motion.h2>
    </div>
  );
}
