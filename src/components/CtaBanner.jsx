'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const containerRef = useRef(null);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-content-box',
        { y: 40, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 sm:py-28 relative overflow-hidden z-10"
      aria-label="Call to Action"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cta-content-box relative rounded-3xl glass-panel-glow border-white/15 p-10 sm:p-16 lg:p-20 overflow-hidden text-center">
          
          {/* Internal Ambient Aurora Glow */}
          <div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[380px] rounded-full blur-[140px] opacity-35 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, #c4b5fd 0%, #fbcfe8 40%, #a7f3d0 80%, transparent 100%)',
            }}
          />

          <div className="relative z-10 max-w-[800px] mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0]" />
              <span className="text-[12px] font-semibold tracking-wider uppercase text-text-secondary">
                Creative Collaboration
              </span>
            </div>

            <h2 className="text-[40px] sm:text-[54px] lg:text-[68px] font-black leading-[1.02] tracking-[-0.035em] text-white">
              Ready to create something <br />
              <span className="text-aurora">extraordinary together?</span>
            </h2>

            <p className="text-[16px] sm:text-[19px] leading-[1.7] text-text-secondary font-normal max-w-[620px] mx-auto">
              Whether you are launching a new digital venture, redesigning your flagship web experience,
              or crafting an iconic brand system — our senior leads are ready.
            </p>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#contact"
                className="btn-aurora text-[13px] sm:text-[14px] uppercase tracking-wider font-bold px-9 py-4 inline-flex items-center gap-2.5"
              >
                <span>Initiate a Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>

              <a
                href="mailto:info@flastech.ca"
                className="btn-glass text-[13px] sm:text-[14px] uppercase tracking-wider font-medium px-8 py-4 inline-flex items-center gap-2"
              >
                <span>Email Studio Directly</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
