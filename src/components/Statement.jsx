'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATEMENT =
  'Most software ships late, runs over budget and turns brittle the moment it grows. We work the other way: a small senior team, a working build in your hands every week, and code the next developer will be glad to inherit.';

const FACTS = [
  { term: 'Based in', detail: 'Toronto, Canada' },
  { term: 'Clients in', detail: 'Canada, UAE, Pakistan' },
  { term: 'Ships to', detail: 'Web, iOS, Android, Windows' },
];

export default function Statement() {
  const textRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current.querySelectorAll('.statement__word'),
        { opacity: 0.14 },
        {
          opacity: 1,
          stagger: 0.04,
          ease: 'none',
          scrollTrigger: { trigger: textRef.current, start: 'top 78%', end: 'bottom 52%', scrub: true },
        }
      );
    }, textRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="statement" data-tone="light" aria-labelledby="statement-title">
      <div className="shell statement__grid">
        <h2 id="statement-title" className="label statement__label">
          Why teams hire us
        </h2>
        <p ref={textRef} className="statement__text">
          {STATEMENT.split(' ').map((word, index) => (
            <span key={index} className="statement__word">
              {word}{' '}
            </span>
          ))}
        </p>
        <dl className="statement__facts" data-fade>
          {FACTS.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
