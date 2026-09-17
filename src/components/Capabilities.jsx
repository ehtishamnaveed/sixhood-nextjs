'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Digital Design & Creative Direction',
    tag: 'Visual Identity & UI/UX',
    badge: 'Bespoke Craft',
    description:
      'We craft tailored digital interfaces, editorial layouts, and intuitive user experiences that turn brand visions into captivating visual narratives.',
    features: ['Custom UI/UX Architecture', 'Editorial Typography', 'Responsive Design Systems', 'Interactive Prototypes'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Bespoke Web Platforms',
    tag: 'Web Experiences',
    badge: 'High Performance',
    description:
      'High-velocity web applications, digital portals, and showcase sites engineered with clean code, lightning responsiveness, and seamless navigation.',
    features: ['Next.js & React Architecture', 'Client Portals & Hubs', 'API Integrations', 'Fluid Cross-Device Layouts'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    ),
    title: 'Luxury & Curated E-Commerce',
    tag: 'Digital Retail',
    badge: 'Seamless Journey',
    description:
      'Immersive digital shopping experiences for discerning brands, featuring rapid catalog indexing, fluid checkout flows, and elegant product storytelling.',
    features: ['Shopify Plus & Headless Stores', 'Custom Checkout Flows', 'Global Currency Support', 'Product Visualization'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Motion & GSAP Interaction',
    tag: 'Cinematic Flow',
    badge: 'Fluid Scroll',
    description:
      'Choreographed motion design, smooth Lenis scrolling, micro-interactions, and ScrollTrigger reveals that give your website an unmistakable luxury feel.',
    features: ['Lenis Inertial Scrolling', 'GSAP ScrollTrigger', 'Micro-Interactions', 'Interactive Cursor Motion'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'Brand Architecture & Systems',
    tag: 'Brand Identity',
    badge: 'Cohesive Vision',
    description:
      'Complete brand positioning, visual guidelines, typography pairings, and digital asset kits that ensure your brand speaks with authority across all touchpoints.',
    features: ['Brand Identity Guidelines', 'Typography Strategy', 'Color Palette Systems', 'Digital Asset Libraries'],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Digital Strategy & Conversion',
    tag: 'Growth & Impact',
    badge: 'Measurable Results',
    description:
      'Insight-led digital strategies designed to enhance brand prestige, increase engagement, streamline conversions, and scale your online market footprint.',
    features: ['Conversion Optimization', 'User Journey Mapping', 'Performance Tuning', 'SEO Architecture'],
  },
];

export default function Capabilities() {
  const sectionRef = useRef(null);

  const nayapayCards = [
    {
      title: 'Built for speed, made for business.',
      sub: 'High-velocity Next.js web applications and platforms engineered with zero lag, instant page loads, and lightning responsiveness.',
      tag: 'Web Platforms',
      badge: 'High Performance',
      gradient: 'from-[#c4b5fd]/15 to-transparent',
      img: '/assets/live-pakimtehan.png',
    },
    {
      title: 'Design that moves.\nExperiences that convert.',
      sub: 'Tailored digital interfaces, bespoke UI/UX architecture, and editorial visual polish that command attention and elevate brand prestige.',
      tag: 'Digital Design',
      badge: '100% Bespoke',
      gradient: 'from-[#fbcfe8]/15 to-transparent',
      img: '/assets/mockup3.webp',
    },
    {
      title: 'Curated commerce without borders.',
      sub: 'Immersive Shopify Plus storefronts with global currency handling, rapid product indexing, and friction-free checkout flows.',
      tag: 'E-Commerce',
      badge: 'Global Scale',
      gradient: 'from-[#a7f3d0]/15 to-transparent',
      img: '/assets/live-thapsusmarine.png',
    },
    {
      title: 'Quick turnarounds, zero hold up.',
      sub: 'Silky smooth Lenis inertial scroll physics, custom GSAP micro-interactions, and direct partner collaboration on every milestone.',
      tag: 'Motion & Flow',
      badge: '60 FPS Flow',
      gradient: 'from-[#fed7aa]/15 to-transparent',
      img: '/assets/live-noorlingo.png',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.nayapay-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
      ref={sectionRef}
      id="capabilities"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Capabilities"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* NayaPay Business Section Title */}
        <div className="max-w-[800px] mb-14 text-left">
          <div className="text-[13px] font-semibold text-[#a7f3d0] tracking-wider uppercase mb-3">
            Digital Studio Suite
          </div>
          <h2 className="text-[38px] sm:text-[52px] lg:text-[64px] font-black text-white leading-[1] tracking-[-0.035em]">
            Save time, scale faster <br />
            <span className="text-aurora">and stress less...</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary mt-4 leading-relaxed max-w-[620px]">
            We handle the design, engineering, and visual systems so you can focus on leading your business.
          </p>
        </div>

        {/* NayaPay Business 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {nayapayCards.map((card, idx) => (
            <div
              key={idx}
              className={`nayapay-card group relative rounded-3xl p-8 sm:p-10 glass-panel border-white/10 hover:border-white/25 transition-all duration-500 overflow-hidden flex flex-col justify-between hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-br ${card.gradient}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[12px] font-mono uppercase tracking-wider text-[#a7f3d0] font-semibold">
                    {card.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.05] border border-white/10 text-white/80">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-[26px] sm:text-[32px] font-black text-white leading-tight mb-3 whitespace-pre-line group-hover:text-aurora transition-colors">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[15px] text-text-secondary leading-relaxed mb-8">
                  {card.sub}
                </p>
              </div>

              {/* Card Image Preview */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-xl group-hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* NayaPay Business "For once, size doesn't matter" Split Feature Section */}
        <div className="rounded-3xl p-8 sm:p-14 lg:p-16 glass-panel-glow border-white/15 relative overflow-hidden shadow-2xl">
          {/* NayaPay Multi-Blob Animated Aurora Mesh Gradient */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div
              className="absolute -top-20 -left-20 w-[450px] h-[450px] rounded-full blur-[120px] animate-pulse"
              style={{ background: 'radial-gradient(circle, #c4b5fd 0%, transparent 70%)', animationDuration: '6s' }}
            />
            <div
              className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] animate-pulse"
              style={{ background: 'radial-gradient(circle, #fbcfe8 0%, transparent 70%)', animationDuration: '8s', animationDelay: '1s' }}
            />
            <div
              className="absolute -bottom-20 left-1/3 w-[450px] h-[450px] rounded-full blur-[130px] animate-pulse"
              style={{ background: 'radial-gradient(circle, #a7f3d0 0%, transparent 70%)', animationDuration: '7s', animationDelay: '2s' }}
            />
            <div
              className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full blur-[110px] animate-pulse"
              style={{ background: 'radial-gradient(circle, #fed7aa 0%, transparent 70%)', animationDuration: '9s', animationDelay: '3s' }}
            />
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center relative z-10">
            {/* Left Side: Headline & Bullet Points */}
            <div className="lg:col-span-6 space-y-8 text-left">
              <div>
                <h3 className="text-[34px] sm:text-[46px] lg:text-[54px] font-black text-white leading-[1.02] tracking-tight">
                  For once, size <br />
                  <span className="text-aurora">doesn&apos;t matter.</span>
                </h3>
                <p className="text-[16px] sm:text-[18px] text-text-secondary mt-3 leading-relaxed">
                  From ambitious startups to established market leaders, we&apos;ve got your back.
                </p>
              </div>

              {/* Bullet Points with Icons (Direct NayaPay Style with Hover Bounce) */}
              <div className="space-y-6 pt-2">
                <div className="split-bullet flex items-start gap-4 group p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-10 h-10 rounded-2xl bg-[#a7f3d0]/15 border border-[#a7f3d0]/30 flex items-center justify-center text-[#a7f3d0] shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white group-hover:text-[#a7f3d0] transition-colors">Time is money, save both.</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed">
                      No endless bureaucratic meetings or junior handoffs. Direct collaboration with senior design leads.
                    </p>
                  </div>
                </div>

                <div className="split-bullet flex items-start gap-4 group p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-10 h-10 rounded-2xl bg-[#c4b5fd]/15 border border-[#c4b5fd]/30 flex items-center justify-center text-[#c4b5fd] shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white group-hover:text-[#c4b5fd] transition-colors">Easy digital collaboration.</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed">
                      Transparent timelines, predictable milestones, and real-time design previews designed for total clarity.
                    </p>
                  </div>
                </div>

                <div className="split-bullet flex items-start gap-4 group p-3 rounded-2xl transition-all duration-300 hover:bg-white/[0.04]">
                  <div className="w-10 h-10 rounded-2xl bg-[#fed7aa]/15 border border-[#fed7aa]/30 flex items-center justify-center text-[#fed7aa] shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-white group-hover:text-[#fed7aa] transition-colors">Get your flagship live in weeks.</h4>
                    <p className="text-[14px] text-text-secondary leading-relaxed">
                      High-velocity sprints that take your brand from initial concept to live interactive deployment swiftly.
                    </p>
                  </div>
                </div>
              </div>

              {/* NayaPay Break Button */}
              <div className="pt-4">
                <a
                  href="#contact"
                  className="btn-aurora text-[13px] sm:text-[14px] uppercase tracking-wider font-bold px-8 py-3.5 inline-flex items-center gap-2"
                >
                  <span>Let&apos;s talk Business</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Side: Elevated Interactive Preview Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-black/60 border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#a7f3d0] animate-pulse" />
                    <span className="text-[12px] font-mono text-white font-semibold">
                      Client Collaboration Portal
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-text-muted">
                    Flás Tech · Toronto
                  </span>
                </div>

                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-white/10">
                  <img
                    src="/assets/live-pakimtehan.png"
                    alt="Platform Demonstration"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between text-[13px]">
                  <span className="text-text-secondary">Average Project Delivery</span>
                  <span className="font-bold text-[#a7f3d0]">2 — 3 Weeks Turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
