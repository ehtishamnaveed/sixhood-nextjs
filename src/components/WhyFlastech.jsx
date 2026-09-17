'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const principles = [
  {
    num: '01',
    title: 'Senior Creatives Only — Direct Collaboration',
    description:
      'You collaborate directly with principal designers and creative leads who craft your visual identity and digital interfaces. No intermediary layers or outsourced junior teams.',
    highlight: 'Direct Partner Access',
  },
  {
    num: '02',
    title: 'Purposeful Minimalism & Aesthetic Polish',
    description:
      'We eliminate visual noise and friction. Every typographic hierarchy, subtle color wash, and motion curve is intentionally chosen to elevate your brand presence.',
    highlight: 'Pure Intentionality',
  },
  {
    num: '03',
    title: 'Radical Transparency & Predictable Milestones',
    description:
      'Honest project scopes, transparent timelines, and clear deliverables from day one. You always know exactly where your project stands with zero surprise retainers.',
    highlight: 'Transparent Scopes',
  },
  {
    num: '04',
    title: 'Enduring Stewardship & Evolution',
    description:
      'Our commitment extends well beyond launch day. We partner with you for ongoing brand evolution, asset expansion, and continuous visual refinement.',
    highlight: 'Long-Term Partnership',
  },
];

const industries = [
  { name: 'Luxury & Lifestyle Brands', tag: 'Artisan refinement' },
  { name: 'Executive & Advisory Practices', tag: 'High-trust digital hubs' },
  { name: 'Modern Digital Ventures', tag: 'Scalable platforms' },
  { name: 'Curated E-Commerce & Retail', tag: 'Immersive shopping' },
  { name: 'Cultural & Heritage Studios', tag: 'Narrative storytelling' },
  { name: 'Creative Agencies & Collectives', tag: 'Collaborative craft' },
];

export default function WhyFlastech() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.why-left-content',
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
        '.why-principle-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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
      id="why"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Studio Philosophy"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">
          
          {/* Left Column (Sticky Philosophy Statement) */}
          <div className="why-left-content lg:sticky lg:top-32 lg:self-start space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-aurora-purple shadow-[0_0_8px_#c4b5fd]" />
                <span className="text-[12px] font-semibold tracking-wider uppercase text-text-secondary">
                  The FlasTech Philosophy
                </span>
              </div>
              <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-black leading-[1.04] tracking-[-0.035em] text-white mb-5">
                Creative partnership <br />
                <span className="text-aurora">grounded in craft.</span>
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.75] text-text-secondary font-normal">
                We believe exceptional digital work comes from focused collaboration, obsessive attention to detail,
                and an unwavering respect for your brand&apos;s unique voice.
              </p>
            </div>

            {/* Credibility Metric Badge (NayaPay + Riotters) */}
            <div className="p-8 rounded-3xl glass-panel-glow border-white/10 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#a7f3d0]/10 flex items-center justify-center text-[#a7f3d0] border border-[#a7f3d0]/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[24px] font-bold text-white tracking-tight">98% Client Retention</div>
                  <div className="text-[12px] text-text-muted">Over a decade of enduring client trust</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[12px] text-text-secondary font-mono">
                <span>STUDIO BASE</span>
                <span className="text-white">[ TORONTO, ON · GLOBAL ]</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="btn-aurora text-[13px] uppercase tracking-wider font-bold px-8 py-4 inline-flex items-center gap-2"
            >
              <span>Initiate a Project</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Right Column (Principles & Sectors) */}
          <div className="space-y-6">
            {principles.map((item) => (
              <div
                key={item.num}
                className="why-principle-card group p-8 sm:p-10 rounded-3xl glass-panel border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div className="text-[32px] sm:text-[44px] font-mono font-light text-white/30 group-hover:text-aurora transition-colors duration-300 select-none">
                    {item.num}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-[19px] font-bold text-white tracking-tight group-hover:text-aurora transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[14px] leading-[1.7] text-text-secondary">
                      {item.description}
                    </p>
                    <div className="pt-2">
                      <span className="inline-block text-[11px] font-mono font-semibold text-[#a7f3d0] bg-[#a7f3d0]/10 px-2.5 py-0.5 rounded-full border border-[#a7f3d0]/20">
                        {item.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Sectors Grid */}
            <div className="p-8 rounded-2xl glass-panel border-white/5 mt-10">
              <h3 className="text-[13px] font-mono uppercase tracking-[0.2em] text-white/80 font-bold mb-4">
                Sectors We Collaborate With
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div
                    key={ind.name}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col justify-between"
                  >
                    <span className="text-[13px] font-medium text-white">{ind.name}</span>
                    <span className="text-[11px] font-mono text-text-muted mt-1">{ind.tag}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
