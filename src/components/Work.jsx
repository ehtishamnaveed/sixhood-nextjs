'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '../content/site';

gsap.registerPlugin(ScrollTrigger);

const pad = (value) => String(value).padStart(2, '0');

export default function Work() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [active, setActive] = useState(1);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const mm = gsap.matchMedia();

    // Desktop: pin the section and scroll the gallery sideways.
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const distance = () => track.scrollWidth - window.innerWidth;
      const cards = gsap.utils.toArray('.project', track);

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(Math.min(cards.length, Math.round(self.progress * (cards.length - 1)) + 1));
            section.style.setProperty('--progress', self.progress.toFixed(4));
          },
        },
      });

      cards.forEach((card) => {
        const image = card.querySelector('.project__image');
        gsap.fromTo(
          image,
          { xPercent: -6 },
          {
            xPercent: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left right',
              end: 'right left',
              scrub: true,
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="work" data-tone="dark" aria-labelledby="work-title" tabIndex={-1}>
      <div className="work__viewport">
        <div ref={trackRef} className="work__track">
          <header className="work__intro">
            <p className="label">Selected work</p>
            <h2 id="work-title" className="display work__title" data-reveal>
              <span className="line">
                <span className="line__inner">Shipped,</span>
              </span>
              <span className="line">
                <span className="line__inner">live, used.</span>
              </span>
            </h2>
            <p className="work__lede">
              Exam platforms, children&apos;s apps, stores and portals, running today for clients across Pakistan, the
              UAE and beyond.
            </p>
          </header>

          <ol className="work__list">
            {projects.map((project, index) => (
              <li key={project.name} className="project">
                <figure className="project__plate">
                  <img
                    className="project__image"
                    src={project.image}
                    alt={`${project.name} shown on a laptop and a phone`}
                    loading="lazy"
                    decoding="async"
                    width="1920"
                    height="1080"
                  />
                </figure>
                <div className="project__meta">
                  <p className="project__index">
                    {pad(index + 1)} / {pad(projects.length)}
                  </p>
                  <h3 className="project__name">{project.name}</h3>
                  <p className="project__kind">{project.kind}</p>
                  <p className="project__summary">{project.summary}</p>
                  <dl className="project__facts">
                    <div>
                      <dt>Sector</dt>
                      <dd>{project.sector}</dd>
                    </div>
                    <div>
                      <dt>Market</dt>
                      <dd>{project.region}</dd>
                    </div>
                    <div>
                      <dt>Platforms</dt>
                      <dd>{project.platforms}</dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="work__progress" aria-hidden="true">
        <span className="work__counter">
          {pad(active)} / {pad(projects.length)}
        </span>
        <span className="work__bar" />
      </div>
    </section>
  );
}
