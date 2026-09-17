'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: '01',
    image: '/assets/live-pakimtehan.png',
    title: 'Pak Imtehan',
    subtitle: 'Competitive Examination & Learning Hub',
    category: 'Digital Platform',
    year: '2025',
    client: 'A&R Multi Biz · Pakistan',
    impact: '50,000+ Active Candidates · 25-Year Past Papers',
    liveUrl: 'https://pakimtehan.com',
    deliverables: ['Platform Architecture', 'Timed Exam Simulation', 'Candidate Dashboard', 'Mobile-Responsive UI'],
    overview:
      'Engineered a comprehensive competitive examination preparation platform serving CSS and PMS aspirants across Pakistan with real-time test simulations, performance analytics, and structured study syllabi.',
    accentColor: '#c4b5fd',
    enterFrom: 'right', // 1st: enters from Right
  },
  {
    id: '02',
    image: '/assets/live-thapsusmarine.png',
    title: 'Thapsus Marine',
    subtitle: 'NMEA Marine Equipment & Commerce',
    category: 'Curated E-Commerce',
    year: '2025',
    client: 'Thapsus Marine Solutions · Dubai & Singapore',
    impact: 'Multi-Region B2B Distribution · Instant Search',
    liveUrl: 'https://thapsusmarine.com',
    deliverables: ['E-Commerce UX', 'Technical Spec Filters', 'Shopify Plus Setup', 'Global Logistics Routing'],
    overview:
      'Full digital product catalogue and high-reliability e-commerce shop for a Dubai-based NMEA-certified marine electronics supplier serving commercial shipping fleets and luxury yacht builders across the Middle East and Asia.',
    accentColor: '#a7f3d0',
    enterFrom: 'left', // 2nd: enters from Left
  },
  {
    id: '03',
    image: '/assets/mockup3.webp',
    title: 'Biz Tech',
    subtitle: 'Enterprise Client & Specialist Portal',
    category: 'Digital Platform',
    year: '2025',
    client: 'Biz Tech Global · UAE',
    impact: '3.4x Faster Onboarding · Zero Paperwork',
    liveUrl: '#',
    deliverables: ['Enterprise UI/UX', 'Design Systems', 'Workflow Optimization', 'Client Hub'],
    overview:
      'Unified enterprise collaboration environment connecting corporate leaders, management consultants, and administrative teams across the UAE to streamline digital business initiatives and project tracking.',
    accentColor: '#fed7aa',
    enterFrom: 'right', // 3rd: enters from Right
  },
  {
    id: '04',
    image: '/assets/live-noorlingo.png',
    title: 'Noor Lingo',
    subtitle: 'Neuroscience-Powered Learning Platform',
    category: 'Educational Platform',
    year: '2026',
    client: 'NoorLingo Labs · Global',
    impact: '82% Vocabulary Coverage · 100 Mini-Games',
    liveUrl: 'https://noorlingo.app',
    deliverables: ['App UI/UX', 'Gamified Lesson Paths', 'Interactive Audio Flow', 'Cross-Device Web Platform'],
    overview:
      'Neuroscience-powered language learning experience designed to master high-frequency Quranic Arabic through bite-sized interactive lessons, spaced repetition algorithms, and engaging gamified mini-games.',
    accentColor: '#fbcfe8',
    enterFrom: 'left', // 4th: enters from Left
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Refresh ScrollTrigger to ensure accurate layout calculation
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    const ctx = gsap.context(() => {
      const cards = section.querySelectorAll('.work-stack-card');

      cards.forEach((card, index) => {
        const project = projects[index];
        const isFromLeft = project.enterFrom === 'left';
        const initialX = isFromLeft ? -100 : 100;

        // 1. Entrance animation: alternating Right then Left as each card enters viewport
        gsap.fromTo(
          card,
          {
            x: initialX,
            opacity: 0,
            scale: 0.96,
          },
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 55%',
              scrub: 0.8,
            },
          }
        );

        // 2. Stacking depth: as the NEXT card stacks on top, smoothly scale down and dim this card
        if (index < cards.length - 1) {
          const nextCard = cards[index + 1];
          gsap.to(card, {
            scale: 0.94,
            filter: 'brightness(0.6)',
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 60%',
              end: 'top 25%',
              scrub: true,
            },
          });
        }
      });
    }, section);

    return () => {
      clearTimeout(timer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative py-28 sm:py-36 bg-[#07080b] z-20"
      aria-label="Featured Work"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Massive Monumental Headline */}
        <div className="mb-16 sm:mb-24 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
            <span className="text-[12px] font-semibold tracking-wider text-text-secondary uppercase">
              Production Portfolio · 2025 — 2026
            </span>
          </div>

          <h2 className="text-[52px] sm:text-[76px] md:text-[100px] lg:text-[124px] xl:text-[140px] font-black leading-[0.9] tracking-[-0.045em] text-white mb-8">
            <span>Featured work.</span>
            <br />
            <span className="text-aurora">Crafted with intention.</span>
          </h2>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-text-secondary text-[14px]">
            <p className="max-w-[560px]">
              Four iconic digital deliverables spanning competitive examination platforms, luxury marine commerce, enterprise collaboration, and language education.
            </p>
            <div className="flex items-center gap-2 font-mono text-[13px] text-white">
              <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-pulse" />
              <span>04 Selected Flagships</span>
            </div>
          </div>
        </div>

        {/* Stacking Cards Container */}
        <div className="space-y-16 sm:space-y-24">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="work-stack-card sticky top-24 sm:top-28 lg:top-32 rounded-3xl glass-panel-glow border-white/15 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.85)] transition-all duration-500 will-change-transform cursor-pointer group"
              onClick={() => setSelectedProject(project)}
              style={{
                zIndex: 10 + idx,
                background:
                  idx % 2 === 0
                    ? 'radial-gradient(800px circle at 85% 20%, rgba(196, 181, 253, 0.12), transparent 70%), rgba(14, 16, 23, 0.95)'
                    : 'radial-gradient(800px circle at 15% 20%, rgba(167, 243, 208, 0.12), transparent 70%), rgba(14, 16, 23, 0.95)',
              }}
            >
              {/* Browser-Style Top Header Bar */}
              <div className="px-6 py-4 border-b border-white/10 bg-white/[0.03] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-[#fda4af]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#fed7aa]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#a7f3d0]/80" />
                  <span className="ml-3 text-[12px] font-mono text-text-muted truncate max-w-[280px]">
                    {project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : `${project.title.toLowerCase().replace(/\s+/g, '')}.com`}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[12px] font-mono">
                  <span className="text-white/70 font-semibold">{project.year}</span>
                  <span className="px-3 py-1 rounded-full bg-white/[0.05] text-[#a7f3d0] border border-white/10 font-bold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Card Main Body */}
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 p-6 sm:p-8 lg:p-12 items-center">
                
                {/* Visual Live Screenshot */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group-hover:border-white/30 transition-colors">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity" />

                  {/* Live badge */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-[11px] font-mono text-[#a7f3d0] flex items-center gap-1.5 shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-pulse" />
                      <span>Live Production</span>
                    </div>
                  )}

                  {/* Floating Action Pill */}
                  <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full glass-panel text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border border-white/20 group-hover:bg-aurora-gradient group-hover:text-void transition-all">
                    Inspect ↗
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="space-y-5 flex flex-col justify-between h-full py-1">
                  <div>
                    <div className="flex items-center gap-2 text-[12px] font-mono text-text-muted mb-2">
                      <span className="text-white font-bold text-[14px]">{project.id}</span>
                      <span>/ 04</span>
                      <span>—</span>
                      <span className="uppercase tracking-wider">{project.client}</span>
                    </div>

                    <h3 className="text-[30px] sm:text-[40px] font-black text-white leading-tight tracking-tight group-hover:text-aurora transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-aurora font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-[14px] leading-[1.7] text-text-secondary">
                      {project.overview}
                    </p>
                  </div>

                  {/* Impact Tag & Deliverables */}
                  <div className="space-y-4 pt-5 border-t border-white/10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#a7f3d0]/10 border border-[#a7f3d0]/25 text-[#a7f3d0] text-[12px] font-mono font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] animate-pulse" />
                      {project.impact}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-text-muted"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-2 text-[13px] font-semibold text-white group-hover:text-aurora transition-colors">
                      <span>Explore Case Study Details</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-2xl animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-[840px] w-full rounded-3xl glass-panel-glow border-white/15 p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl space-y-6 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-mono font-bold text-white">{selectedProject.id}</span>
                <span className="text-text-muted">/</span>
                <span className="text-[12px] font-mono uppercase text-[#a7f3d0] font-semibold">{selectedProject.category}</span>
                <span className="text-text-muted">·</span>
                <span className="text-[12px] font-mono text-text-muted">{selectedProject.year}</span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Real Screenshot in Device Frame */}
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Title & Overview */}
            <div>
              <h3 className="text-[28px] sm:text-[36px] font-black text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-[15px] font-medium text-aurora mb-4">
                {selectedProject.subtitle}
              </p>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                {selectedProject.overview}
              </p>
            </div>

            {/* Client and Metrics */}
            <div className="grid sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Client & Market
                </span>
                <p className="text-[14px] font-semibold text-white">{selectedProject.client}</p>
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-1">
                  Demonstrated Impact
                </span>
                <p className="text-[14px] font-semibold text-[#a7f3d0]">{selectedProject.impact}</p>
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted block mb-2.5">
                Scope of Deliverables
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedProject.deliverables.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-[12px] font-mono rounded-full bg-white/[0.04] text-white border border-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {selectedProject.liveUrl && selectedProject.liveUrl !== '#' ? (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-aurora text-[12px] font-bold uppercase tracking-wider px-6 py-3 inline-flex items-center gap-2"
                >
                  <span>Visit Live Website</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </a>
              ) : (
                <span className="text-[12px] font-mono text-text-muted">
                  Bespoke Enterprise Environment · Private Production
                </span>
              )}

              <a
                href="#contact"
                onClick={() => setSelectedProject(null)}
                className="btn-glass text-[12px] font-semibold uppercase tracking-wider px-5 py-2.5"
              >
                Inquire for Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
