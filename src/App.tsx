import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <Header isScrolled={isScrolled} />
        
        <main>
          <AnimatePresence>
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Achievements />
            <Contact />
          </AnimatePresence>
        </main>
        
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;