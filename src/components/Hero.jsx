'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const dashboardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        '.hero-pill-badge',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.5'
        )
        .fromTo(
          subtextRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          ctaRef.current.children,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
          '-=0.5'
        )
        .fromTo(
          dashboardRef.current,
          { y: 60, opacity: 0, scale: 0.96 },
          { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' },
          '-=0.6'
        );

      // 3D Mouse Parallax Tilt for Dashboard Mockup
      const el = dashboardRef.current;
      if (el) {
        const onMouseMove = (e) => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 8;
          const rotateY = (x / rect.width) * 8;
          gsap.to(el, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1200,
            ease: 'power2.out',
            duration: 0.5,
          });
        };

        const onMouseLeave = () => {
          gsap.to(el, {
            rotateX: 0,
            rotateY: 0,
            ease: 'power3.out',
            duration: 0.8,
          });
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);

        return () => {
          el.removeEventListener('mousemove', onMouseMove);
          el.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden z-10"
      aria-label="Introduction"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-full blur-[160px] opacity-25 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, #fbcfe8 35%, #fed7aa 70%, transparent 100%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        
        {/* NayaPay Clean Top Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-8 hero-pill-badge">
          <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
          <span className="text-[12px] font-medium tracking-wider text-text-secondary uppercase">
            Toronto · Flás Tech Design &amp; Digital Studio
          </span>
        </div>

        {/* NayaPay-Inspired Giant Bold Main Landing Heading */}
        <div ref={headlineRef} className="max-w-[1060px] mx-auto mb-6">
          <h1 className="text-[48px] sm:text-[72px] md:text-[96px] lg:text-[112px] font-black leading-[0.95] tracking-[-0.04em] text-white uppercase">
            YOU&apos;RE IN <br />
            <span className="text-aurora">BUSINESS.</span>
          </h1>
        </div>

        {/* NayaPay-Style Subtitle */}
        <div ref={subtextRef} className="max-w-[700px] mx-auto mb-10">
          <p className="text-[17px] sm:text-[20px] md:text-[22px] leading-[1.6] text-text-secondary font-normal">
            Bespoke digital design, high-velocity web platforms, and curated e-commerce.
            All unified in one world-class studio.
          </p>
        </div>

        {/* NayaPay Action Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
          <a
            href="#contact"
            className="btn-aurora text-[14px] uppercase tracking-wider font-bold px-9 py-4 inline-flex items-center gap-2.5 shadow-xl hover:scale-105 transition-transform"
          >
            <span>Get Started</span>
            <svg
              className="w-4 h-4"
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
            className="btn-glass text-[14px] uppercase tracking-wider font-medium px-9 py-4 inline-flex items-center gap-2 hover:bg-white/[0.08] transition-colors"
          >
            <span>Explore Work</span>
            <svg className="w-4 h-4 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* NayaPay-Inspired Featured Dashboard Visual */}
        <div
          ref={dashboardRef}
          className="relative max-w-[1140px] mx-auto rounded-3xl p-3 sm:p-4 bg-white/[0.04] border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.85)] backdrop-blur-2xl"
        >
          {/* Mockup Browser Window Frame */}
          <div className="rounded-2xl bg-[#090b10] border border-white/10 overflow-hidden shadow-2xl">
            {/* Top Browser Bar */}
            <div className="px-5 py-3.5 border-b border-white/10 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#fda4af]/90" />
                <span className="w-3 h-3 rounded-full bg-[#fed7aa]/90" />
                <span className="w-3 h-3 rounded-full bg-[#a7f3d0]/90" />
                <span className="ml-3 text-[11px] font-mono text-text-muted hidden sm:inline-block">
                  https://flastech.ca/studio-flagship
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono text-text-muted">
                <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-pulse" />
                <span>Live Studio Showcase</span>
              </div>
            </div>

            {/* Dashboard Visual Content */}
            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-6 text-left items-center">
              {/* Left Column: Studio Overview & Stats */}
              <div className="md:col-span-5 space-y-6">
                <div>
                  <span className="text-[12px] font-semibold text-[#a7f3d0] tracking-wider uppercase block mb-1">
                    Bespoke Platform Suite
                  </span>
                  <h3 className="text-[26px] sm:text-[32px] font-black text-white leading-tight">
                    Plan, craft, and scale your brand identity.
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-relaxed mt-2">
                    Unified creative direction, custom UI/UX design, and production engineering tailored for visionary brands.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[24px] font-black text-white tracking-tight">100%</div>
                    <div className="text-[12px] text-text-muted">Bespoke Design</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[24px] font-black text-[#a7f3d0] tracking-tight">60 FPS</div>
                    <div className="text-[12px] text-text-muted">Fluid Motion</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[24px] font-black text-[#c4b5fd] tracking-tight">340+</div>
                    <div className="text-[12px] text-text-muted">Launches</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-[24px] font-black text-[#fbcfe8] tracking-tight">98%</div>
                    <div className="text-[12px] text-text-muted">Client Retention</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Live Showcase Preview Cards */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-black/60 border border-white/10 p-4 space-y-3 hover:border-white/20 transition-colors">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                    <img
                      src="/assets/live-pakimtehan.png"
                      alt="Pak Imtehan Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[15px] font-bold text-white">Pak Imtehan</h4>
                      <p className="text-[11px] text-text-muted">Learning &amp; Exam Hub</p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#a7f3d0]/10 text-[#a7f3d0] border border-[#a7f3d0]/20">
                      Live
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl bg-black/60 border border-white/10 p-4 space-y-3 hover:border-white/20 transition-colors">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-black">
                    <img
                      src="/assets/live-thapsusmarine.png"
                      alt="Thapsus Marine"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[15px] font-bold text-white">Thapsus Marine</h4>
                      <p className="text-[11px] text-text-muted">Marine Equipment &amp; Commerce</p>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-[#c4b5fd]/10 text-[#c4b5fd] border border-[#c4b5fd]/20">
                      Commerce
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

