'use client';

import { useEffect, useState } from 'react';
import FlasTechLogo from './FlasTechLogo';

export default function Footer() {
  const [torontoTime, setTorontoTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'America/Toronto',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTorontoTime(new Intl.DateTimeFormat('en-CA', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const copyEmail = () => {
    const email = 'info@flastech.ca';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <footer
      id="footer"
      data-footer=""
      className="relative pt-24 pb-8 bg-[#050608] border-t border-white/10 text-white overflow-hidden z-20"
      aria-label="Site Footer"
    >
      {/* Background Soft Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[340px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, #fbcfe8 35%, #a7f3d0 75%, transparent 100%)',
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Eyebrow Bar (Indisea Style) */}
        <div className="flex items-center justify-between pb-8 border-b border-white/10 mb-14">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
            <span className="text-[12px] font-medium tracking-wider text-white/70">
              Available for Q2 &amp; Q3 commissions
            </span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono text-white/60">
            <span className="text-[#c4b5fd]">TORONTO HQ:</span>
            <span className="text-white font-medium">{torontoTime || '12:00:00 PM EST'}</span>
          </div>
        </div>

        {/* 4-Column Architectural Grid (Directly matching indisea.com structure) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Column 1: Brand / Description (span 4) */}
          <div className="lg:col-span-4 flex flex-col justify-between pr-0 lg:pr-8">
            <div className="space-y-4">
              <a href="#" className="inline-block group focus:outline-none">
                <FlasTechLogo variant="light" height={32} />
              </a>
              <p className="text-[14px] leading-relaxed text-text-secondary max-w-[320px]">
                We design and engineer bespoke digital flagships, web experiences, and curated commerce for forward-thinking brands worldwide.
              </p>
            </div>

            <div className="pt-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-medium text-white/70">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0]" />
                Toronto, Ontario &bull; Global Delivery
              </span>
            </div>
          </div>

          {/* Column 2: Navigation (span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
              Navigation
            </span>
            <a href="#" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Home
            </a>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Disciplines
            </a>
            <a href="#work" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Featured Work
            </a>
            <a href="#performance" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Craft Standards
            </a>
            <a href="#why" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Studio Philosophy
            </a>
            <a href="#contact" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Initiate Project
            </a>
          </div>

          {/* Column 3: Studio Disciplines & Capabilities (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
              Studio
            </span>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Digital Flagships &amp; UI/UX
            </a>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Bespoke Web Platforms
            </a>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Curated E-Commerce
            </a>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Motion &amp; Interaction Design
            </a>
            <a href="#capabilities" className="text-[14px] text-text-secondary hover:text-white transition-colors">
              Brand Systems &amp; Guidelines
            </a>
            <span className="text-[12px] font-mono text-white/40 mt-1">
              TORONTO · DUBAI · GLOBAL
            </span>
          </div>

          {/* Column 4: Contact & Direct Inquiries (span 3, Indisea copy email style) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
              Contact
            </span>

            {/* Interactive Copy Email Button */}
            <button
              onClick={copyEmail}
              type="button"
              className="group inline-flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-white/20 text-left transition-all"
              aria-label="Copy email address"
            >
              <div className="flex flex-col">
                <span className="text-[13px] font-mono text-white group-hover:text-aurora transition-colors">
                  {copied ? 'Copied to Clipboard!' : 'info@flastech.ca'}
                </span>
                <span className="text-[10px] text-text-muted">
                  {copied ? 'Ready to paste in your client' : 'Click to copy email address'}
                </span>
              </div>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${copied ? 'scale-125 text-[#a7f3d0]' : 'text-white/40 group-hover:text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {copied ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 17.25v2.25A2.25 2.25 0 0113.5 21.75h-7.5A2.25 2.25 0 013.75 19.5V7.5a2.25 2.25 0 012.25-2.25h2.25m3 0H18a2.25 2.25 0 012.25 2.25v10.5A2.25 2.25 0 0118 20.25H9.75a2.25 2.25 0 01-2.25-2.25V9a2.25 2.25 0 012.25-2.25z"
                  />
                )}
              </svg>
            </button>

            <a
              href="tel:+14165550192"
              className="text-[14px] text-text-secondary hover:text-white transition-colors"
            >
              +1 (416) 555-0192
            </a>

            <div className="text-[13px] leading-relaxed text-text-muted mt-1">
              Bay Street, Financial District<br />
              Toronto, ON M5J 2T3, Canada
            </div>
          </div>

        </div>

        {/* Massive Full-Width Typography Wordmark (Directly matching indisea.com data-wordmark) */}
        <div className="py-10 sm:py-14 select-none overflow-hidden border-t border-white/10">
          <div
            className="w-full text-center flex items-center justify-center pointer-events-none"
            style={{
              letterSpacing: '-0.06em',
            }}
          >
            <span
              className="text-[70px] sm:text-[120px] md:text-[170px] lg:text-[220px] xl:text-[260px] font-black uppercase leading-[0.8] block tracking-tighter"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(196, 181, 253, 0.08) 50%, rgba(255, 255, 255, 0.02) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              FLÁS TECH
            </span>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Designed on Earth, and Back to Top (Direct Indisea match) */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-text-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} FlasTech Inc. All rights reserved.</span>
            <span>
              Designed &amp; engineered with intention on Earth.
            </span>
          </div>

          {/* Indisea-Style Back to Top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="group flex-none whitespace-nowrap inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-widest text-text-secondary hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white group-hover:-translate-y-0.5 transition-all">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
