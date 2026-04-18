# Vikram Saini — Portfolio

A dark, techy personal portfolio built with **React**, **Vite**, **Framer Motion**, **GSAP**, and **Tailwind CSS**.

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Opens at `http://localhost:5173`

### 3. Build for production
```bash
npm run build
```

---

## 📦 Tech Stack

| Library | Version | Purpose |
|---|---|---|
| React | 18 | UI framework |
| Vite | 8 | Dev server and bundler |
| Framer Motion | 11 | Scroll animations, transitions |
| GSAP | 3.12 | Hero animations |
| Tailwind CSS | 3.4 | Utility classes |
| React Icons | 5 | Icon set |

---

## 🗂 Project Structure

```
src/
├── App.jsx                    # Root component (includes Loader gate)
├── main.jsx                   # Vite entry point
├── index.css                  # Tailwind directives + CSS variables + responsive
├── components/
│   ├── Loader.jsx             # Intro terminal animation (2.6s)
│   ├── ScrollProgress.jsx     # Thin progress bar fixed to top
│   ├── Cursor.jsx             # Custom dot + trailing ring cursor
│   ├── Navbar.jsx             # Scroll-aware fixed nav
│   ├── MobileMenu.jsx         # Hamburger drawer for mobile
│   ├── Hero.jsx               # GSAP + Framer Motion + typewriter
│   ├── SectionHeader.jsx      # Reusable section header
│   ├── About.jsx              # Code block bio + stat cards
│   ├── Skills.jsx             # 6-category hover-reactive skill grid
│   ├── Projects.jsx           # 5 project cards with hover effects
│   ├── Experience.jsx         # Dual timeline (work + education)
│   ├── Contact.jsx            # Social links + email block
│   └── Footer.jsx
└── hooks/
    └── useRevealRef.js        # IntersectionObserver reveal hook
```

---

## 🎨 Customization

All color variables live in `src/index.css`:
```css
--accent:  #00e5ff;   /* Cyan */
--accent2: #7c3aed;   /* Purple */
--accent3: #10b981;   /* Green */
```

**Update your projects** → `src/components/Projects.jsx` (`projects` array)  
**Update your experience** → `src/components/Experience.jsx` (`work` + `education` arrays)  
**Update your social links** → `src/components/Contact.jsx` (`links` array)

---

## 🌐 Deploy to Vercel

```bash
npm run build
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deploys.
