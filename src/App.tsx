import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setLenis } from './lib/scroll';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { BottomDock } from './components/BottomDock';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CurrentlyExploring } from './components/CurrentlyExploring';
import { Projects } from './components/Projects';
import { StatementTransition } from './components/StatementTransition';
import { Experience } from './components/Experience';
import { Certificates } from './components/Certificates';
import { Education } from './components/Education';
import { PersonalDetail } from './components/PersonalDetail';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export const App: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Initialize Ultra-Smooth Lenis Scroll with GSAP Ticker Sync
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    setLenis(lenis);

    // Sync Lenis scroll with GSAP ScrollTrigger updates
    lenis.on('scroll', ScrollTrigger.update);

    // Hook Lenis into GSAP's Ticker for buttery smooth frame-locked rendering
    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  // Recalculate ScrollTrigger positions once preloader finishes and DOM fully reveals
  useEffect(() => {
    if (loadingComplete) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [loadingComplete]);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f4f4f6] relative bg-grain overflow-x-hidden selection:bg-[#E25822] selection:text-[#ffffff]">
      
      {/* Frame 00: Minimal Cinematic Preloader */}
      <Preloader onComplete={() => setLoadingComplete(true)} />

      {/* Subtle Custom Magnetic Cursor */}
      <CustomCursor />

      {/* Fixed Header */}
      <Navbar />

      {/* Bottom Floating Animated Navigation Dock */}
      <BottomDock />

      {/* Main Storytelling Flow */}
      <main className={`relative z-10 transition-opacity duration-1000 ${loadingComplete ? 'opacity-100' : 'opacity-95'}`}>
        
        {/* Frame 01 & 02: Hero & Scroll Interpolation */}
        <Hero />

        {/* Frame 03: Who Am I / About */}
        <About />

        {/* Frame 04: Currently Exploring */}
        <CurrentlyExploring />

        {/* Frame 05, 06, 07: Selected Work / Projects & Conceptual Previews */}
        <Projects />

        {/* Frame 08: Manifesto / "Still early. But I'm building." Transition */}
        <StatementTransition />

        {/* Frame 09: Experience */}
        <Experience />

        {/* Frame 10: Certificates & Continuous Learning */}
        <Certificates />

        {/* Frame 11: Education Timeline */}
        <Education />

        {/* Frame 12: Personal Detail (Football) */}
        <PersonalDetail />

        {/* Frame 13: Contact / "Let's Build Something" */}
        <Contact />

      </main>

      {/* Frame 14: Final Screen & Footer */}
      <Footer />

    </div>
  );
};

export default App;
