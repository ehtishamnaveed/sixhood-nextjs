'use client';

import { useEffect, useRef, useState, createContext, useContext } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext(null);

export function useLenisContext() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const lenisRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initialize Lenis with refined inertia settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
      smoothTouch: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      if (typeof window !== 'undefined') {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          setScrollProgress(Math.min(100, Math.max(0, (e.scroll / totalHeight) * 100)));
        }
      }
    });

    // Run GSAP ticker with Lenis raf
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // Refresh ScrollTrigger once DOM is ready
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(timer);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {/* Scroll Progress Bar at the top with Aurora Mixed Gradient */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[9999] pointer-events-none">
        <div
          className="h-full bg-aurora-gradient shadow-[0_0_12px_rgba(251,207,232,0.6)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {children}
    </LenisContext.Provider>
  );
}
