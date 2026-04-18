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
import Contact from './components/Contact';
import Footer from './components/Footer';
import SeoManager from './components/SeoManager';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onDone={() => setLoaded(true)} />
      {loaded && (
        <>
          <SeoManager />
          <ScrollProgress />
          <Cursor />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
