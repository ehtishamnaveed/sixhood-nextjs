'use client';

import { useEffect, useState } from 'react';
import FlasTechLogo from './FlasTechLogo';

export default function Footer() {
  const [torontoTime, setTorontoTime] = useState('');

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

  return (
    <footer className="relative pt-20 pb-12 bg-[#07080b] border-t border-white/5 overflow-hidden z-10">
      
      {/* Background Soft Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, #fbcfe8 30%, #a7f3d0 70%, transparent 100%)',
        }}
      />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-10 pb-16 border-b border-white/5">
          
          {/* Brand Column */}
          <div className="space-y-5">
            <a href="#" className="inline-block group focus:outline-none">
              <FlasTechLogo variant="light" height={32} />
            </a>
            <p className="text-[14px] leading-relaxed text-text-secondary max-w-[320px]">
              Bespoke digital design, high-end web platforms, and curated e-commerce experiences.
              Crafted with minimalist precision and fluid motion. Based in Toronto.
            </p>

            {/* Live Toronto Clock */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/5 text-[12px] font-mono text-text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
              <span>Toronto, Canada:</span>
              <span className="text-white font-semibold">{torontoTime || '12:00:00 PM EST'}</span>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/90 mb-5">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-[13px] text-text-secondary">
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Digital Design & UI/UX</a></li>
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Web Experiences</a></li>
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Curated E-Commerce</a></li>
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Motion & Interaction</a></li>
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Brand Architecture</a></li>
              <li><a href="#capabilities" className="hover:text-aurora transition-colors">Digital Strategy</a></li>
            </ul>
          </div>

          {/* Studio Navigation */}
          <div>
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/90 mb-5">
              Studio
            </h4>
            <ul className="space-y-2.5 text-[13px] text-text-secondary">
              <li><a href="#work" className="hover:text-aurora transition-colors">Selected Work</a></li>
              <li><a href="#performance" className="hover:text-aurora transition-colors">Craft Standards</a></li>
              <li><a href="#why" className="hover:text-aurora transition-colors">Studio Philosophy</a></li>
              <li><a href="#contact" className="hover:text-aurora transition-colors">Initiate Project</a></li>
              <li><a href="mailto:info@flastech.ca" className="hover:text-aurora transition-colors">Direct Desk</a></li>
            </ul>
          </div>

          {/* Studio Availability & Back to Top */}
          <div className="space-y-5">
            <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/90">
              Availability
            </h4>
            <div className="p-4 rounded-xl glass-panel border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-[12px] text-[#a7f3d0] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0]" />
                Accepting Select Projects
              </div>
              <div className="text-[12px] text-text-muted">
                Collaborating with visionary brands and enterprises worldwide.
              </div>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="w-full btn-glass text-[12px] uppercase tracking-wider py-2.5 font-mono flex items-center justify-center gap-2 hover:border-aurora-purple"
            >
              <span>Back to Top</span>
              <svg className="w-3.5 h-3.5 text-aurora-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

        </div>

        {/* Massive Typography Watermark */}
        <div className="pt-12 pb-6 text-center select-none opacity-[0.06] hover:opacity-[0.1] transition-opacity duration-500 overflow-hidden pointer-events-none">
          <span className="text-[60px] sm:text-[100px] md:text-[140px] lg:text-[180px] font-black tracking-[-0.05em] uppercase text-aurora whitespace-nowrap block">
            FLAS TECH
          </span>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-text-muted">
          <div>
            &copy; {new Date().getFullYear()} Flastech Inc. All rights reserved. Toronto, Canada.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="mailto:info@flastech.ca" className="hover:text-white transition-colors">Inquiries</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
