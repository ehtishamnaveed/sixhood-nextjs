'use client';

import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cap-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.cap-card',
        { y: 50, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="cap-header max-w-[720px] mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fbcfe8] shadow-[0_0_8px_#fbcfe8]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">
              What We Do
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black leading-[1.02] tracking-[-0.03em] text-white mb-5">
            Artistry & precision.
            <br />
            <span className="text-aurora">Elevating every digital touchpoint.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-text-secondary">
            From initial creative concept to finished interactive experience, our studio crafts bespoke digital products
            that captivate audiences and drive meaningful business growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="cap-card group relative p-8 rounded-2xl glass-panel border-white/5 hover:border-white/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-aurora-purple group-hover:text-white group-hover:bg-aurora-gradient group-hover:shadow-[0_0_25px_rgba(196,181,253,0.5)] transition-all duration-300">
                    {cap.icon}
                  </div>
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-white/[0.04] border border-white/10 text-[#a7f3d0]">
                    {cap.badge}
                  </span>
                </div>

                <span className="text-[11px] font-mono tracking-wider text-text-muted uppercase mb-1 block">
                  {cap.tag}
                </span>

                <h3 className="text-[20px] font-bold text-white mb-3 tracking-tight group-hover:text-aurora transition-colors duration-200">
                  {cap.title}
                </h3>

                <p className="text-[14px] leading-[1.7] text-text-secondary mb-6">
                  {cap.description}
                </p>
              </div>

              {/* Feature Tags List */}
              <div className="pt-5 border-t border-white/5">
                <ul className="grid grid-cols-2 gap-2">
                  {cap.features.map((feat) => (
                    <li key={feat} className="text-[12px] text-text-muted flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-aurora-lavender opacity-60" />
                      <span className="truncate">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ambient bottom line glow on hover */}
              <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-aurora-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
