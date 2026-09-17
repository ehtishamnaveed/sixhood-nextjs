'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AmbientAurora() {
  const containerRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  const orb3Ref = useRef(null);
  const orb4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll movements tied to page scroll via ScrollTrigger
      gsap.to(orb1Ref.current, {
        y: 400,
        x: 80,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
        },
      });

      gsap.to(orb2Ref.current, {
        y: 600,
        x: -120,
        scale: 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.5,
        },
      });

      gsap.to(orb3Ref.current, {
        y: -300,
        x: 100,
        scale: 1.2,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.8,
        },
      });

      gsap.to(orb4Ref.current, {
        y: -450,
        x: -80,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2.2,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Orb 1: Violet/Lavender (Top-Left) */}
      <div
        ref={orb1Ref}
        className="absolute -top-[20vw] -left-[15vw] w-[60vw] h-[60vw] rounded-full blur-[140px] opacity-[0.22] animate-pulse-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(196, 181, 253, 0.9) 0%, rgba(196, 181, 253, 0) 70%)',
        }}
      />

      {/* Orb 2: Rose/Pink Blush (Top-Right) */}
      <div
        ref={orb2Ref}
        className="absolute -top-[10vw] -right-[15vw] w-[55vw] h-[55vw] rounded-full blur-[150px] opacity-[0.24] animate-pulse-subtle"
        style={{
          animationDelay: '-3s',
          background: 'radial-gradient(circle, rgba(251, 207, 232, 0.9) 0%, rgba(251, 207, 232, 0) 70%)',
        }}
      />

      {/* Orb 3: Warm Peach/Apricot Glow (Mid-Left) */}
      <div
        ref={orb3Ref}
        className="absolute top-[45vh] -left-[20vw] w-[50vw] h-[50vw] rounded-full blur-[160px] opacity-[0.18] animate-pulse-subtle"
        style={{
          animationDelay: '-5s',
          background: 'radial-gradient(circle, rgba(254, 215, 170, 0.85) 0%, rgba(254, 215, 170, 0) 70%)',
        }}
      />

      {/* Orb 4: Mint/Aquamarine Cyan (Mid/Bottom-Right) */}
      <div
        ref={orb4Ref}
        className="absolute top-[60vh] -right-[15vw] w-[55vw] h-[55vw] rounded-full blur-[150px] opacity-[0.20] animate-pulse-subtle"
        style={{
          animationDelay: '-2s',
          background: 'radial-gradient(circle, rgba(167, 243, 208, 0.85) 0%, rgba(167, 243, 208, 0) 70%)',
        }}
      />

      {/* Subtle fine tech grid overlay */}
      <div className="absolute inset-0 bg-subtle-grid opacity-60" />

      {/* Subtle vignette darkening at edges for cinematic contrast */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#07080b]/40 to-[#07080b]/90 pointer-events-none" />
    </div>
  );
}
