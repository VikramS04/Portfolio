import React, { useState } from 'react';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeoManager from './components/SeoManager';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [theme, setTheme] = useState('dark');

  React.useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <SeoManager />
          <ScrollProgress />
          <Cursor />
          <Navbar theme={theme} onToggleTheme={toggleTheme} />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
