'use client';

import { useState, useEffect, useRef } from 'react';

const assurances = [
  {
    tag: 'Engineering Velocity',
    badge: 'Zero Lag',
    title: 'Engineered for flawless velocity.',
    description:
      'We architect modern web platforms on Next.js and Tailwind with optimal asset compression, instantaneous page transitions, and zero unnecessary runtime bloat.',
    stat: '0.2s TTFB',
    statLabel: 'Global Edge Response',
    accent: '#a7f3d0',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    tag: 'Source Ownership',
    badge: '100% Yours',
    title: 'Complete source code ownership.',
    description:
      'Every line of CSS, GSAP choreography, and React component code belongs entirely to you. No proprietary builder locks, no hidden license royalties, and clean GitHub handover.',
    stat: '100%',
    statLabel: 'Client IP Ownership',
    accent: '#c4b5fd',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    tag: 'Privacy & Security',
    badge: 'Confidential',
    title: 'Enterprise privacy & NDA assurance.',
    description:
      'All creative directions, brand strategy decks, and prototype staging environments remain under strict non-disclosure. We safeguard your strategic launch advantages.',
    stat: 'Enterprise',
    statLabel: 'Encrypted Staging Hubs',
    accent: '#fbcfe8',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    tag: 'Direct Leadership',
    badge: 'Principal Access',
    title: 'Direct senior partner stewardship.',
    description:
      'You collaborate directly with principal creative leads and senior software engineers throughout your project lifecycle. Zero junior agency handoffs or account managers.',
    stat: '24/7',
    statLabel: 'Dedicated Partner Access',
    accent: '#fed7aa',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
];

export default function AssuranceSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = assurances.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  const current = assurances[activeSlide];

  return (
    <section
      className="py-20 sm:py-28 relative overflow-hidden z-10"
      aria-label="Studio Commitments & Guarantees"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Slider Frame */}
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 glass-panel border-white/15 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${current.accent} 0%, transparent 70%)`,
            }}
          />

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="flex items-center gap-3">
                <span
                  className="px-3 py-1 rounded-md text-[11px] font-mono font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: `${current.accent}20`,
                    color: current.accent,
                  }}
                >
                  {current.tag}
                </span>
                <span className="text-[12px] font-mono text-white/50">
                  {current.badge}
                </span>
              </div>

              <h3 className="text-[34px] sm:text-[46px] lg:text-[54px] font-black text-white leading-[1.05] tracking-tight">
                {current.title}
              </h3>

              <p className="text-[16px] sm:text-[18px] text-text-secondary leading-relaxed max-w-[560px]">
                {current.description}
              </p>

              {/* Stat & Progress Bar */}
              <div className="pt-4 flex items-center gap-8">
                <div>
                  <div className="text-[32px] sm:text-[40px] font-black text-white tracking-tight" style={{ color: current.accent }}>
                    {current.stat}
                  </div>
                  <div className="text-[12px] font-mono text-text-muted uppercase">
                    {current.statLabel}
                  </div>
                </div>

                <div className="hidden sm:block h-10 w-[1px] bg-white/10" />

                <div className="hidden sm:flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-pulse" />
                  <span className="text-[12px] font-mono text-white/70">
                    Active Guarantee 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual / Icon Accent */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                className="w-32 h-32 sm:w-44 sm:h-44 rounded-3xl flex items-center justify-center border shadow-2xl transition-all duration-700"
                style={{
                  backgroundColor: `${current.accent}12`,
                  borderColor: `${current.accent}35`,
                  color: current.accent,
                }}
              >
                <div className="scale-[2.5]">{current.icon}</div>
              </div>
            </div>

          </div>

          {/* Bottom Controls: Dot Indicators & Prev/Next Arrows (Matching NayaPay w-slider-nav & arrows) */}
          <div className="mt-12 pt-8 border-t border-white/10 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-2.5">
              {assurances.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  type="button"
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx
                      ? 'w-10 bg-white'
                      : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Circular Nav Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevSlide}
                type="button"
                className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/15 hover:border-white/40 hover:bg-white/[0.12] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous Assurance"
              >
                <svg className="w-4 h-4 text-white rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                type="button"
                className="w-11 h-11 rounded-full bg-white/[0.05] border border-white/15 hover:border-white/40 hover:bg-white/[0.12] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next Assurance"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
