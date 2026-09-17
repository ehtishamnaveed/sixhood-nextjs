'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Arrow from './Arrow';
import IridescentField from './IridescentField';
import { services } from '../content/site';

gsap.registerPlugin(ScrollTrigger);

const HEADLINE = ['Built fast.', 'Built to last.'];

function HeadlineLines() {
  return HEADLINE.map((line) => (
    <span key={line} className="cut__line">
      {line}
    </span>
  ));
}

export default function Hero() {
  const sectionRef = useRef(null);
  const cutRef = useRef(null);

  useEffect(() => {
    const cut = cutRef.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const introPlaying = !document.documentElement.classList.contains('intro-seen') && !reduce;

    const ctx = gsap.context(() => {
      if (reduce) {
        gsap.set('[data-hero-in]', { opacity: 1 });
        return;
      }

      const vw = (amount) => () => (window.innerWidth * amount) / 100;
      const [slideA, slideB] = cut.querySelectorAll('.cut__slide');
      gsap.set('.cut__seam', { xPercent: -50, yPercent: -50, rotation: 45 });

      // Load: the two halves slide together along the cut, then the seam flashes.
      gsap
        .timeline({ delay: introPlaying ? 0.95 : 0.1, defaults: { ease: 'expo.out' } })
        .fromTo(slideA, { x: vw(-6), y: vw(6), opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1.3 }, 0)
        .fromTo(slideB, { x: vw(6), y: vw(-6), opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 1.3 }, 0)
        .fromTo('.cut__seam', { scaleY: 0, opacity: 1 }, { scaleY: 1, duration: 0.55, ease: 'power3.inOut' }, 0.5)
        .to('.cut__seam', { opacity: 0, duration: 0.8, ease: 'power2.out' }, 1.05)
        .fromTo('[data-hero-in]', { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.2, stagger: 0.08 }, 0.55);

      // Scroll: the halves shear apart along the bolt and open a gap.
      gsap
        .timeline({
          scrollTrigger: { trigger: sectionRef.current, start: 'top top', end: 'bottom top', scrub: true },
        })
        .to(cut.querySelector('.cut__piece--a'), { x: vw(-8), y: vw(5), ease: 'none' }, 0)
        .to(cut.querySelector('.cut__piece--b'), { x: vw(8), y: vw(-5), ease: 'none' }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="top" className="hero" data-tone="light" aria-labelledby="hero-title">
      <IridescentField className="hero__field" />

      <div className="hero__inner">
        <h1 id="hero-title" className="cut" ref={cutRef}>
          <span className="sr-only">Built fast. Built to last.</span>
          <span className="cut__piece cut__piece--a" aria-hidden="true">
            <span className="cut__slide">
              <HeadlineLines />
            </span>
          </span>
          <span className="cut__piece cut__piece--b" aria-hidden="true">
            <span className="cut__slide">
              <HeadlineLines />
            </span>
          </span>
          <span className="cut__seam" aria-hidden="true" />
        </h1>

        <div className="hero__foot">
          <p className="hero__lede" data-hero-in>
            FlasTech designs, engineers and ships web platforms, mobile apps and e-commerce for companies in Canada, the
            UAE and Pakistan.
          </p>
          <div className="hero__actions" data-hero-in>
            <a className="btn" href="#contact">
              Start a project
              <Arrow />
            </a>
            <a className="text-link" href="#work">
              See our work
            </a>
          </div>
        </div>

        <div className="hero__index" data-hero-in>
          <ul className="hero__services" aria-label="What we build">
            {services.map((service) => (
              <li key={service.title}>{service.title}</li>
            ))}
          </ul>
          <span className="hero__location">Software house · Toronto</span>
        </div>
      </div>
    </section>
  );
}
