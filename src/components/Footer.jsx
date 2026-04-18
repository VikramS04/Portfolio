import React from 'react';
import { siteContent } from '../content/siteContent';

export default function Footer() {
  return (
    <footer
      className="flex flex-col justify-between gap-3 border-t px-6 py-8 text-center md:flex-row md:px-12 md:text-left"
      style={{ borderColor: 'rgba(148,163,184,0.12)' }}
    >
      <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
        © 2026 {siteContent.name} — Built with React, Vite, Tailwind and motion
      </div>
      <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em]" style={{ color: 'var(--muted)' }}>
        {siteContent.location}
      </div>
    </footer>
  );
}
