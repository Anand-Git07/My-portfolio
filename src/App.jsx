import React, { useEffect } from 'react';
import './styles/global.css';

import Navbar    from './components/Navbar';
import Hero      from './components/Hero';
import About     from './components/About';
import Skills    from './components/Skills';
import Projects  from './components/Projects';
import Education from './components/Education';
import Contact   from './components/Contact';
import Footer    from './components/Footer';

const App = () => {
  // Cursor glow effect
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor-glow" id="cursor-glow" />
      <Navbar />

      <main>
        <Hero />
        <div className="divider" />
        <About />
        <div className="divider" />
        <Skills />
        <div className="divider" />
        <Projects />
        <div className="divider" />
        <Education />
        <div className="divider" />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
