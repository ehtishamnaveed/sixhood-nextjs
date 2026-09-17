'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    image: '/assets/mockup1.webp',
    title: 'Aura Studio Showcase',
    category: 'Digital Experience',
    tag: 'Web Experience',
    impact: 'Award-Winning Motion Design',
    stack: ['Creative Direction', 'GSAP Motion', 'Next.js', 'Lenis'],
    description:
      'Immersive digital studio showcase featuring fluid Lenis inertial scrolling, bespoke editorial layouts, and subtle Aurora ambient illumination.',
  },
  {
    image: '/assets/mockup2.webp',
    title: 'Pakimtehan Examination Hub',
    category: 'Digital Learning Platform',
    tag: 'Digital Platform',
    impact: '50K+ Active Candidates',
    stack: ['Web Application', 'UI/UX Design', 'User Journeys', 'Cloud'],
    description:
      'Comprehensive digital testing and structured learning environment engineered with intuitive test timers, clear results analysis, and responsive mobile testing.',
  },
  {
    image: '/assets/mockup3.webp',
    title: 'Biz Tech Collaborative Portal',
    category: 'Client & Partner Hub',
    tag: 'Digital Platform',
    impact: 'Seamless Onboarding',
    stack: ['Platform Design', 'Design Systems', 'Interactive UI'],
    description:
      'Unified digital workspace connecting enterprise clients, domain specialists, and executive administrators across the UAE with streamlined workflows.',
  },
  {
    image: '/assets/mockup4.webp',
    title: 'Thapsus Marine Systems',
    category: 'Curated E-Commerce',
    tag: 'E-Commerce',
    impact: 'Global Distribution Reach',
    stack: ['Shopify Plus', 'Product Catalog', 'UX Architecture'],
    description:
      'Specialized marine electronics digital catalog and commerce platform serving commercial fleets and boatbuilders across the Middle East and Asia.',
  },
  {
    image: '/assets/mockup5.webp',
    title: 'Desert & Nile Heritage',
    category: 'Luxury Brand & Artisanal Shop',
    tag: 'E-Commerce',
    impact: 'High-Touch Brand Experience',
    stack: ['Art Direction', 'Headless Store', 'Visual Storytelling'],
    description:
      'Artisanal luxury e-commerce experience celebrating African heritage with expressive photography, dynamic currency routing, and fluid checkout.',
  },
  {
    image: '/assets/mockup6.webp',
    title: 'Crystal Executive Coaching',
    category: 'Executive Booking Hub',
    tag: 'Web Experience',
    impact: 'High Conversion Rate',
    stack: ['Brand Identity', 'Direct Booking Flow', 'Minimalist UI'],
    description:
      'Bespoke digital booking and client engagement environment for elite executive leadership coaching and career advisement in Dubai.',
  },
];

export default function Work() {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.tag === activeFilter || p.category.includes(activeFilter));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.work-header',
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
        '.work-card-anim',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
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
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Selected Work"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="work-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fed7aa] shadow-[0_0_8px_#fed7aa]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-secondary">
                Selected Portfolio
              </span>
            </div>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[56px] font-black leading-[1.02] tracking-[-0.03em] text-white mb-4">
              Featured work.
              <br />
              <span className="text-aurora">Crafted with intention.</span>
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.7] text-text-secondary">
              A curated selection of bespoke websites, digital platforms, and brand experiences
              created for ambitious clients across Canada and internationally.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Web Experience', 'Digital Platform', 'E-Commerce'].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[12px] font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'btn-aurora text-void shadow-lg'
                    : 'glass-pill text-text-secondary hover:text-white hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="work-card-anim group rounded-2xl glass-panel border-white/5 hover:border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Card Image Showcase */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#07080b]/60">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-80" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase rounded-full bg-[#07080b]/80 border border-white/10 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Impact Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 text-[11px] font-mono font-semibold rounded-full bg-white/[0.08] text-[#a7f3d0] backdrop-blur-md border border-white/10">
                    {project.impact}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-[20px] font-bold text-white mb-2.5 group-hover:text-aurora transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] leading-[1.7] text-text-secondary mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Tech/Design Stack Pills */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.03] text-text-muted border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
