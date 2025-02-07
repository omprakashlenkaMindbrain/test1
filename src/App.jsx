import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Smooth scroll setup
    gsap.to("body", { duration: 0.5, opacity: 1, ease: "power2.inOut" });
    
    // Initialize scroll animations
    ScrollTrigger.batch(".animate-on-scroll", {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out"
        });
      },
      once: true
    });
  }, []);


  return (
    <div className={`${isDark ? 'dark bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen transition-colors duration-300`}>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} /> */}
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;