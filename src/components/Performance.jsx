'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: '100% Bespoke Craft',
    desc: 'Individually conceived from a blank canvas. Zero generic themes or recycled component templates.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    color: '#c4b5fd',
  },
  {
    title: 'Make it yours',
    desc: 'Put your brand name front and center with cohesive design systems and source code ownership.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: '#fbcfe8',
  },
  {
    title: 'Beyond borders',
    desc: 'Global edge hosting, multi-currency commerce, and international localization out of the box.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582" />
      </svg>
    ),
    color: '#fed7aa',
  },
  {
    title: 'Fluid motion at 60 FPS',
    desc: 'Silky smooth Lenis inertial scroll and natural GSAP micro-interactions across every device.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    color: '#a7f3d0',
  },
  {
    title: 'Senior leads only',
    desc: 'Direct partner collaboration. Work with principal designers and engineers from day one.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: '#ddd6fe',
  },
  {
    title: 'Enduring stewardship',
    desc: 'We stay on your product after launch for ongoing brand evolution, creative iterations, and visual refinement.',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    color: '#a7f3d0',
  },
];

export default function Performance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.bento-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3D Perspective Tilt on Bento Cards
      const cards = section.querySelectorAll('.bento-card');
      cards.forEach((card) => {
        const onMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          const rotateX = (-y / rect.height) * 6;
          const rotateY = (x / rect.width) * 6;
          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            ease: 'power2.out',
            duration: 0.4,
          });
        };

        const onMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            ease: 'power3.out',
            duration: 0.6,
          });
        };

        card.addEventListener('mousemove', onMouseMove);
        card.addEventListener('mouseleave', onMouseLeave);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="performance"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Quality Benchmarks"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NayaPay Business Bento Card Holder */}
        <div className="space-y-6 mb-24">
          
          {/* Wide Top Card (NayaPay "businesscard1" style) */}
          <div className="bento-card rounded-3xl p-8 sm:p-12 lg:p-14 glass-panel border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden relative shadow-2xl bg-gradient-to-r from-white/[0.04] via-white/[0.01] to-transparent">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4 text-left">
                <span className="text-[12px] font-mono text-[#a7f3d0] uppercase tracking-wider font-semibold">
                  Creative Direction
                </span>
                <h3 className="text-[32px] sm:text-[44px] font-black text-white leading-tight">
                  Crafted from scratch, <br />
                  <span className="text-aurora">never templated.</span>
                </h3>
                <p className="text-[15px] sm:text-[16px] text-text-secondary leading-relaxed">
                  Every interface, typographic rhythm, and digital layout is custom-designed for your brand.
                  Zero generic frameworks or recycled templates.
                </p>
                <div className="pt-2 flex items-center gap-6 text-[13px] font-medium text-white/90">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#a7f3d0]" />
                    Original UI Systems
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c4b5fd]" />
                    Complete Source Ownership
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 relative">
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl relative">
                  <img
                    src="/assets/live-thapsusmarine.png"
                    alt="Custom Interface System"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Studio Design Tokens (NayaPay animated visual style) */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3.5 py-2 rounded-xl glass-panel border-white/20 shadow-2xl flex items-center gap-2 animate-bounce pointer-events-none" style={{ animationDuration: '4s' }}>
                  <span className="w-2 h-2 rounded-full bg-[#a7f3d0]" />
                  <span className="text-[11px] font-mono text-white font-bold">60 FPS Motion</span>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-3.5 py-2 rounded-xl glass-panel border-white/20 shadow-2xl flex items-center gap-2 animate-bounce pointer-events-none" style={{ animationDuration: '5s', animationDelay: '1s' }}>
                  <span className="w-2 h-2 rounded-full bg-[#c4b5fd]" />
                  <span className="text-[11px] font-mono text-white font-bold">Original UI Architecture</span>
                </div>
              </div>
            </div>
          </div>

          {/* Row of Two Cards Below (NayaPay "cardsrow2" style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Left Card */}
            <div className="bento-card rounded-3xl p-8 sm:p-10 glass-panel border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between space-y-8 bg-gradient-to-br from-[#c4b5fd]/10 to-transparent">
              <div className="text-left space-y-3">
                <span className="text-[12px] font-mono text-[#c4b5fd] uppercase tracking-wider font-semibold">
                  Interaction Fluidity
                </span>
                <h3 className="text-[26px] sm:text-[32px] font-black text-white leading-tight">
                  Make interaction feel like second nature.
                </h3>
                <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed">
                  Silky smooth Lenis inertial scroll physics and responsive micro-interactions that make exploring your site feel effortless.
                </p>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                <img
                  src="/assets/live-noorlingo.png"
                  alt="Interaction Fluidity"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bento-card rounded-3xl p-8 sm:p-10 glass-panel border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-between space-y-8 bg-gradient-to-br from-[#fed7aa]/10 to-transparent">
              <div className="text-left space-y-3">
                <span className="text-[12px] font-mono text-[#fed7aa] uppercase tracking-wider font-semibold">
                  Brand Systems
                </span>
                <h3 className="text-[26px] sm:text-[32px] font-black text-white leading-tight">
                  Divide and conquer with unified assets.
                </h3>
                <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed">
                  Comprehensive component libraries, token paired styles, and typography hierarchies so your brand scales seamlessly.
                </p>
              </div>

              <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                <img
                  src="/assets/mockup3.webp"
                  alt="Unified Brand Assets"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>

        {/* NayaPay Business 6-Item Benefits Grid ("visacard-benefits" style) */}
        <div className="text-left mb-12">
          <span className="text-[13px] font-semibold text-[#a7f3d0] tracking-wider uppercase block mb-2">
            The FlasTech Standard
          </span>
          <h3 className="text-[32px] sm:text-[44px] font-black text-white leading-tight">
            Everything done with intention.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl glass-panel border-white/10 hover:border-white/20 transition-all duration-300 text-left space-y-4 hover:-translate-y-1"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                style={{
                  backgroundColor: `${b.color}15`,
                  borderColor: `${b.color}35`,
                  color: b.color,
                }}
              >
                {b.icon}
              </div>
              <h4 className="text-[18px] font-bold text-white tracking-tight">
                {b.title}
              </h4>
              <p className="text-[14px] text-text-secondary leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>

        {/* NayaPay Break Banner */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl glass-panel-glow border-white/15 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-[24px] sm:text-[30px] font-black text-white">
              We run the creative craft, you run the show.
            </h4>
            <p className="text-[15px] text-text-secondary mt-1">
              Direct access to our senior design leads. Turnaround in weeks, not quarters.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-aurora text-[14px] uppercase tracking-wider font-bold px-8 py-4 whitespace-nowrap shrink-0"
          >
            Let&apos;s talk Business
          </a>
        </div>

      </div>
    </section>
  );
}

