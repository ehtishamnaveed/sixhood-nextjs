'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const showcaseRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-pill-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current.children,
          { y: 50, opacity: 0, rotateX: 10 },
          { y: 0, opacity: 1, rotateX: 0, duration: 1.1, stagger: 0.12 },
          '-=0.5'
        )
        .fromTo(
          subtextRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          '-=0.6'
        )
        .fromTo(
          showcaseRef.current,
          { y: 60, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2 },
          '-=0.6'
        )
        .fromTo(
          statsRef.current.children,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 },
          '-=0.8'
        );

      // Parallax scroll scrub on showcase card
      gsap.to(showcaseRef.current, {
        y: 80,
        scale: 0.98,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      // Animated counters
      const counters = statsRef.current.querySelectorAll('[data-target]');
      counters.forEach((el) => {
        const target = parseFloat(el.getAttribute('data-target') || '0');
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          delay: 0.8,
          onUpdate: () => {
            el.innerText = Math.round(obj.val).toLocaleString();
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col justify-center items-center overflow-hidden z-10"
      aria-label="Introduction"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        
        {/* Minimalist Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-8 hero-pill-badge hover:border-white/20 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#c4b5fd] shadow-[0_0_10px_#c4b5fd] animate-pulse" />
          <span className="text-[11px] sm:text-[12px] font-semibold tracking-[0.2em] uppercase text-text-secondary">
            Toronto · Creative Design & Digital Studio
          </span>
        </div>

        {/* Hero Main Headline */}
        <div ref={headlineRef} className="max-w-[980px] mx-auto mb-8">
          <h1 className="text-[44px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-black leading-[0.96] tracking-[-0.035em] text-white">
            <span>Design that inspires.</span>
            <br />
            <span className="text-aurora-glow">Crafted without compromise.</span>
          </h1>
        </div>

        {/* Hero Subtitle */}
        <div ref={subtextRef} className="max-w-[660px] mx-auto mb-10 sm:mb-12">
          <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.65] text-text-secondary font-normal">
            We craft iconic web experiences, bespoke digital platforms, and distinctive brand identities
            for forward-thinking businesses and visionary brands worldwide.
          </p>
        </div>

        {/* Call to Actions */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          <a
            href="#contact"
            className="btn-aurora text-[13px] sm:text-[14px] uppercase tracking-wider font-bold px-8 py-4 inline-flex items-center gap-2.5 group"
          >
            <span>Start a Project</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>

          <a
            href="#work"
            className="btn-glass text-[13px] sm:text-[14px] uppercase tracking-wider font-medium px-8 py-4 inline-flex items-center gap-2"
          >
            <span>Explore Work</span>
            <svg className="w-4 h-4 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats Grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-[1040px] mx-auto mb-16"
        >
          {[
            { target: 12, suffix: '+', label: 'Years of Craft', sub: 'Refined creative excellence' },
            { target: 340, suffix: '+', label: 'Projects Delivered', sub: 'Across 14 global markets' },
            { target: 98, suffix: '%', label: 'Client Retention', sub: 'Long-term partnerships' },
            { target: 100, suffix: '%', label: 'Bespoke Execution', sub: 'Tailored to your brand' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 sm:p-6 rounded-2xl text-left border-white/5 hover:border-white/15 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-[28px] sm:text-[34px] lg:text-[40px] font-black text-white tracking-tight mb-1 flex items-baseline">
                <span data-target={item.target}>0</span>
                <span className="text-aurora ml-0.5 text-[22px] sm:text-[26px]">
                  {item.suffix}
                </span>
              </div>
              <p className="text-[12px] sm:text-[13px] font-semibold text-white/90 mb-0.5">
                {item.label}
              </p>
              <p className="text-[11px] text-text-muted">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Elegant Design Showcase Gallery Preview */}
        <div
          ref={showcaseRef}
          className="max-w-[1060px] mx-auto rounded-3xl glass-panel-glow border-white/10 overflow-hidden text-left shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] relative group"
        >
          {/* Card Header Bar */}
          <div className="px-6 py-4 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#fda4af]/80" />
              <span className="w-3 h-3 rounded-full bg-[#fed7aa]/80" />
              <span className="w-3 h-3 rounded-full bg-[#a7f3d0]/80" />
              <span className="ml-2 text-[12px] font-medium text-text-muted">
                Featured Creative Direction
              </span>
            </div>
            <div className="flex items-center gap-2 text-[12px] text-[#a7f3d0]">
              <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-pulse" />
              <span>Studio Portfolio</span>
            </div>
          </div>

          {/* Card Visual Content */}
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#0e1017]/90 to-[#07080b]/90 grid md:grid-cols-3 gap-8 items-center">
            <div className="space-y-3">
              <span className="text-[11px] uppercase tracking-widest text-[#c4b5fd] font-bold block">
                Brand & Aesthetics
              </span>
              <h3 className="text-[22px] font-bold text-white leading-snug">
                Minimalist elegance meeting fluid motion.
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                Clean typography, intentional white space, and subtle ambient gradients designed to elevate your brand story.
              </p>
            </div>

            {/* Visual Aurora Art Frame */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-white/25 transition-colors">
              <img
                src="/assets/mockup1.webp"
                alt="Digital showcase preview"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] text-white">
                <span className="font-semibold">Web Experience</span>
                <span className="text-[#a7f3d0] font-mono">2026 Edition</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-text-muted block">Interaction</span>
                <p className="text-[14px] text-white font-medium">Lenis Inertial Scroll</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-text-muted block">Motion</span>
                <p className="text-[14px] text-white font-medium">GSAP ScrollTrigger Choreography</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-text-muted block">Palette</span>
                <p className="text-[14px] text-aurora font-medium">Aurora Mixed Gradient</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
