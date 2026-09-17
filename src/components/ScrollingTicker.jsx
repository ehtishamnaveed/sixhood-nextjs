'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ScrollingTicker() {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(tickerRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 35,
        ease: 'none',
      });
    }, tickerRef);

    return () => ctx.revert();
  }, []);

  const marqueeItems = [
    { text: 'Bespoke Web Experiences', category: 'Design' },
    { text: 'Cinematic GSAP Motion', category: 'Interaction' },
    { text: 'Lenis Inertial Scrolling', category: 'Fluidity' },
    { text: 'Distinctive Brand Identities', category: 'Branding' },
    { text: 'Curated Digital Commerce', category: 'E-Commerce' },
    { text: 'Minimalist Aesthetic Polish', category: 'Visuals' },
    { text: 'Custom Web Platforms', category: 'Platforms' },
    { text: 'Artisan Typography & Systems', category: 'Editorial' },
    { text: 'Aurora Mixed Gradient Palette', category: 'Color' },
    { text: 'Toronto-Based Creative Studio', category: 'Location' },
  ];

  return (
    <div
      className="relative overflow-hidden py-4 border-y border-white/5 bg-[#07080b]/90 backdrop-blur-xl z-20"
      aria-hidden="true"
    >
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#07080b] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#07080b] to-transparent z-10 pointer-events-none" />

      <div ref={tickerRef} className="flex gap-12 whitespace-nowrap w-max select-none">
        {[...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/[0.04] text-[#c4b5fd] border border-white/5">
              {item.category}
            </span>
            <span className="text-[13px] font-semibold text-text-secondary tracking-wide uppercase">
              {item.text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-aurora-gradient shadow-[0_0_8px_rgba(196,181,253,0.8)]" />
          </div>
        ))}
      </div>
    </div>
  );
}
