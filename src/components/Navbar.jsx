'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import FlasTechLogo from './FlasTechLogo';

export default function Navbar() {
  const navContainerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navContainerRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 }
      );
    }, navContainerRef);

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Disciplines', href: '#capabilities' },
    { label: 'Workflow', href: '#workflow' },
    { label: 'Craft', href: '#performance' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Studio', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-5"
    >
      <div
        className={`max-w-[1300px] mx-auto rounded-full transition-all duration-500 px-4 sm:px-6 py-3 flex items-center justify-between ${
          isScrolled
            ? 'glass-panel-glow bg-[#07080b]/80 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl'
            : 'glass-panel bg-[#07080b]/40 border-white/5 backdrop-blur-md'
        }`}
      >
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="FlasTech Home"
        >
          <FlasTechLogo variant="light" height={28} className="group-hover:scale-105 transition-transform duration-300" />
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-3.5 py-1.5 text-[13px] font-medium text-text-secondary hover:text-white rounded-full transition-all duration-200 hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Studio Status + CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[12px] font-medium text-text-muted px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
            <span>Accepting Select Projects</span>
          </div>

          <a
            href="#contact"
            className="btn-aurora text-[12px] uppercase tracking-wider px-5 py-2 font-bold inline-flex items-center gap-1.5"
          >
            <span>Start Project</span>
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>

        {/* Mobile Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="#contact"
            className="btn-aurora text-[11px] uppercase tracking-wider px-3.5 py-1.5 font-bold"
          >
            Project
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-[1240px] rounded-2xl glass-panel-glow bg-[#07080b]/95 p-6 border-white/10 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-[15px] font-medium text-text-secondary hover:text-white hover:bg-white/[0.05] rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[12px] text-text-muted flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0]" />
                Toronto Studio
              </span>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-aurora text-[12px] font-bold px-4 py-2 uppercase tracking-wider"
              >
                Start Project
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
