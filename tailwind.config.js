/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:      '#080c10',
        bg2:     '#0d1117',
        bg3:     '#111820',
        card:    '#0d1520',
        border:  '#1e2a38',
        accent:  '#00e5ff',
        accent2: '#7c3aed',
        accent3: '#10b981',
        muted:   '#64748b',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
