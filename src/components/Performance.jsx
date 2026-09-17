'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benchmarks = [
  {
    title: 'Visual Polish & Bespoke Art Direction',
    description: 'Every interface is individually conceived and crafted from scratch. Zero generic templates or recycled layouts.',
    flastechValue: '100% Bespoke',
    industryValue: 'Template-based',
    percentage: 100,
    status: 'Artisan Quality',
  },
  {
    title: 'Interaction Fluidity & 60fps Motion',
    description: 'Silky smooth Lenis scrolling, natural inertial gestures, and seamless GSAP micro-interactions across all viewports.',
    flastechValue: '60 FPS',
    industryValue: 'Choppy/Default',
    percentage: 96,
    status: 'Fluid Motion',
  },
  {
    title: 'Brand Recall & Audience Engagement',
    description: 'Compelling digital experiences that hold visitor attention longer and convert passive viewers into loyal advocates.',
    flastechValue: '+180% Dwell Time',
    industryValue: 'Baseline',
    percentage: 85,
    status: 'High Impact',
  },
  {
    title: 'Execution Speed & Project Momentum',
    description: 'Direct collaboration with senior designers and creative developers, ensuring rapid turnarounds without endless bureaucracy.',
    flastechValue: '2x Faster',
    industryValue: 'Multi-agency lag',
    percentage: 90,
    status: 'Swift Delivery',
  },
];

export default function Performance() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.perf-header',
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
        '.bench-card',
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

      const bars = section.querySelectorAll('.bench-fill');
      bars.forEach((bar) => {
        const width = bar.getAttribute('data-width') || '0%';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: width,
            duration: 1.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
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
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="perf-header max-w-[700px] mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">
              Craft & Precision
            </span>
          </div>
          <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black leading-[1.02] tracking-[-0.03em] text-white mb-5">
            Standards that set
            <br />
            <span className="text-aurora">your brand apart.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] leading-[1.7] text-text-secondary">
            Great digital design is felt as much as it is seen. We combine refined typography,
            sculpted color palettes, and cinematic motion to deliver undeniable distinction.
          </p>
        </div>

        {/* Benchmarks Interactive Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {benchmarks.map((item) => (
            <div
              key={item.title}
              className="bench-card p-8 rounded-2xl glass-panel border-white/5 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-[18px] font-bold text-white mb-1.5 group-hover:text-aurora transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <span className="shrink-0 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#a7f3d0]/10 text-[#a7f3d0] border border-[#a7f3d0]/20">
                  {item.status}
                </span>
              </div>

              {/* Visual Metric Comparison */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                <div className="flex justify-between items-baseline text-[13px]">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-aurora-purple" />
                    FlasTech Standard
                  </span>
                  <span className="font-mono text-[18px] font-bold text-aurora">
                    {item.flastechValue}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    className="bench-fill h-full bg-aurora-gradient rounded-full shadow-[0_0_12px_rgba(196,181,253,0.4)]"
                    data-width={`${item.percentage}%`}
                    style={{ width: '0%' }}
                  />
                </div>

                <div className="flex justify-between items-center text-[11px] text-text-muted font-mono pt-1">
                  <span>Standard Benchmark: {item.industryValue}</span>
                  <span className="text-[#a7f3d0]">Uncompromising Quality</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="glass-panel-glow p-8 sm:p-10 rounded-2xl border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-[20px] font-bold text-white">
              Ready to elevate your digital presence?
            </h4>
            <p className="text-[14px] text-text-secondary">
              Let&apos;s discuss how intentional design and fluid motion can transform your brand.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-aurora text-[13px] uppercase tracking-wider font-bold px-7 py-3.5 whitespace-nowrap"
          >
            Start a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
