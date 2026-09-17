'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page-wide motion: smooth scrolling, in-page anchors and scroll reveals.
export default function Motion() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let lenis = null;
    let tick = null;

    if (!reduce) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      window.__lenis = lenis;
      lenis.on('scroll', ScrollTrigger.update);
      tick = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
    }

    const onClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute('href');
      const target = hash === '#' || hash === '#top' ? document.body : document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      const focusTarget = () => {
        if (target === document.body) return;
        target.focus({ preventScroll: true });
      };
      if (lenis) {
        lenis.scrollTo(target === document.body ? 0 : target, { duration: 1.4, force: true, onComplete: focusTarget });
      } else {
        target.scrollIntoView();
        focusTarget();
      }
      if (hash.length > 1) history.replaceState(null, '', hash);
    };
    document.addEventListener('click', onClick);

    const ctx = gsap.context(() => {
      if (reduce) return;

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        const lines = el.querySelectorAll('.line__inner');
        gsap.from(lines, {
          yPercent: 110,
          duration: 1.2,
          stagger: 0.09,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        });
      });

      gsap.utils.toArray('[data-fade]').forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 1.1,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        });
      });
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);

    return () => {
      document.removeEventListener('click', onClick);
      window.removeEventListener('load', refresh);
      ctx.revert();
      if (tick) gsap.ticker.remove(tick);
      lenis?.destroy();
      window.__lenis = null;
    };
  }, []);

  return null;
}
