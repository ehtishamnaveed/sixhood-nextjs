'use client';

import { useEffect, useRef, useState } from 'react';

const carouselData = [
  {
    title: 'Digital Design & Creative Direction',
    subtitle: 'Tailored digital interfaces, bespoke UI/UX architecture, and editorial visual polish that command attention.',
    tag: 'Design Direction',
    color: 'linear-gradient(145deg, #2b1836 0%, #150d1c 100%)',
    borderColor: 'rgba(196, 181, 253, 0.35)',
    accent: '#c4b5fd',
    image: '/assets/mockup3.webp',
  },
  {
    title: 'Bespoke Web Platforms',
    subtitle: 'High-velocity Next.js web applications engineered with zero lag, instant page loads, and lightning responsiveness.',
    tag: 'Web Platforms',
    color: 'linear-gradient(145deg, #162629 0%, #0c1518 100%)',
    borderColor: 'rgba(167, 243, 208, 0.35)',
    accent: '#a7f3d0',
    image: '/assets/live-pakimtehan.png',
  },
  {
    title: 'Luxury & Curated E-Commerce',
    subtitle: 'Immersive Shopify Plus storefronts with global currency handling, rapid product indexing, and friction-free checkout.',
    tag: 'Global Commerce',
    color: 'linear-gradient(145deg, #32162a 0%, #170b13 100%)',
    borderColor: 'rgba(251, 207, 232, 0.35)',
    accent: '#fbcfe8',
    image: '/assets/live-thapsusmarine.png',
  },
  {
    title: 'Motion & GSAP Interaction',
    subtitle: 'Silky smooth Lenis inertial scroll physics, custom GSAP micro-interactions, and direct partner collaboration.',
    tag: '60 FPS Flow',
    color: 'linear-gradient(145deg, #2f2219 0%, #16100c 100%)',
    borderColor: 'rgba(254, 215, 170, 0.35)',
    accent: '#fed7aa',
    image: '/assets/live-noorlingo.png',
  },
  {
    title: 'Brand Architecture & Systems',
    subtitle: 'Complete brand positioning, visual guidelines, typography pairings, and digital asset kits for visionary brands.',
    tag: 'Brand Systems',
    color: 'linear-gradient(145deg, #1c1c38 0%, #0d0d1b 100%)',
    borderColor: 'rgba(221, 214, 254, 0.35)',
    accent: '#ddd6fe',
    image: '/assets/mockup3.webp',
  },
];

export default function NayaPayCarousel() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(carouselData.length); // Start at middle clone set
  const [isAnimating, setIsAnimating] = useState(false);

  // Triple the items for seamless infinite illusion
  const clonedItems = [...carouselData, ...carouselData, ...carouselData];
  const totalItems = clonedItems.length;
  const originalLength = carouselData.length;

  const cardWidth = 340;
  const cardGap = 24;

  const updatePosition = (index, withTransition = true) => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const container = track.parentElement;
    if (!container) return;

    const containerWidth = container.clientWidth;
    const offset = containerWidth / 2 - cardWidth / 2 - index * (cardWidth + cardGap);

    track.style.transition = withTransition ? 'transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none';
    track.style.transform = `translateX(${offset}px)`;
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIdx = (currentIndex + 1) % totalItems;
    setCurrentIndex(nextIdx);

    // Infinite loop check
    if (nextIdx >= originalLength * 2) {
      setTimeout(() => {
        const resetIdx = originalLength + (nextIdx % originalLength);
        setCurrentIndex(resetIdx);
        updatePosition(resetIdx, false);
        setIsAnimating(false);
      }, 500);
    } else {
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIdx = (currentIndex - 1 + totalItems) % totalItems;
    setCurrentIndex(prevIdx);

    // Infinite loop check
    if (prevIdx < originalLength) {
      setTimeout(() => {
        const resetIdx = originalLength + (prevIdx % originalLength);
        setCurrentIndex(resetIdx);
        updatePosition(resetIdx, false);
        setIsAnimating(false);
      }, 500);
    } else {
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const selectCard = (index) => {
    if (index === currentIndex || isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    updatePosition(currentIndex, true);
  }, [currentIndex]);

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isAnimating]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => updatePosition(currentIndex, false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  // Touch Swipe Gesture support
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prevSlide();
      else nextSlide();
    }
  };

  return (
    <section className="py-20 sm:py-28 relative overflow-hidden z-10" aria-label="Interactive Studio Disciplines">
      {/* Background Soft Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #c4b5fd 0%, #fbcfe8 35%, #a7f3d0 75%, transparent 100%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* NayaPay Eyebrow & Title ("Ready. Set. Grow.") */}
        <div className="max-w-[760px] mx-auto mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-pill mb-4">
            <span className="w-2 h-2 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0] animate-pulse" />
            <span className="text-[12px] font-semibold tracking-wider text-text-secondary uppercase">
              Interactive Discipline Reel
            </span>
          </div>
          <h2 className="text-[40px] sm:text-[56px] lg:text-[68px] font-black text-white leading-[1] tracking-[-0.035em]">
            Ready. Set. <span className="text-aurora">Grow.</span>
          </h2>
          <p className="text-[16px] sm:text-[18px] text-text-secondary mt-4 leading-relaxed max-w-[580px] mx-auto">
            Explore our core studio capabilities. Click any card or use the controls below to navigate.
          </p>
        </div>

        {/* NayaPay Carousel Container */}
        <div
          className="relative w-full overflow-hidden py-10 select-none cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex items-center gap-6 transition-transform duration-500 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {clonedItems.map((item, idx) => {
              const realCenterIndex = currentIndex % originalLength;
              const thisItemRealIndex = idx % originalLength;
              const isActive = idx === currentIndex;

              return (
                <div
                  key={idx}
                  onClick={() => selectCard(idx)}
                  className={`relative shrink-0 rounded-3xl p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer overflow-hidden ${
                    isActive
                      ? 'scale-[1.08] z-20 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-2 ring-1'
                      : 'scale-[0.94] opacity-60 hover:opacity-85 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] border'
                  }`}
                  style={{
                    width: `${cardWidth}px`,
                    height: '460px',
                    background: item.color,
                    borderColor: isActive ? item.accent : 'rgba(255,255,255,0.1)',
                    ringColor: isActive ? `${item.accent}40` : 'transparent',
                  }}
                >
                  {/* Top Card Info */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: `${item.accent}20`,
                          color: item.accent,
                        }}
                      >
                        {item.tag}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: item.accent }} />
                      )}
                    </div>

                    <h3 className="text-[22px] font-black text-white leading-tight mb-2 text-left">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-white/70 leading-relaxed text-left line-clamp-3">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Card Visual Preview */}
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg mt-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* NayaPay Circular Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            type="button"
            className="group w-14 h-14 rounded-full bg-white/[0.06] border border-white/15 hover:border-white/40 hover:bg-white/[0.12] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Previous Slide"
          >
            <svg
              className="w-5 h-5 text-white/70 group-hover:text-white transition-colors rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[12px] font-mono text-white/60">
            <span className="text-[#a7f3d0] font-bold">0{(currentIndex % originalLength) + 1}</span>
            <span>/</span>
            <span>0{originalLength}</span>
          </div>

          <button
            onClick={nextSlide}
            type="button"
            className="group w-14 h-14 rounded-full bg-white/[0.06] border border-white/15 hover:border-white/40 hover:bg-white/[0.12] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
            aria-label="Next Slide"
          >
            <svg
              className="w-5 h-5 text-white/70 group-hover:text-white transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
