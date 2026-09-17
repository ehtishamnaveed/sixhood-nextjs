'use client';

import Arrow from './Arrow';
import { services } from '../content/site';

export default function Services() {
  const selectService = (value) => {
    window.dispatchEvent(new CustomEvent('flastech:select-project-type', { detail: value }));
  };

  return (
    <section id="services" className="services" data-tone="light" aria-labelledby="services-title" tabIndex={-1}>
      <div className="shell">
        <header className="section-head">
          <p className="label">What we build</p>
          <h2 id="services-title" className="display section-head__title" data-reveal>
            <span className="line">
              <span className="line__inner">Five things,</span>
            </span>
            <span className="line">
              <span className="line__inner">done properly.</span>
            </span>
          </h2>
        </header>

        <ul className="services__list">
          {services.map((service) => (
            <li key={service.title} className="service" data-fade>
              <h3 className="service__title">{service.title}</h3>
              <p className="service__summary">{service.summary}</p>
              <ul className="service__stack" aria-label={`Typical ${service.title.toLowerCase()} stack`}>
                {service.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {/* The link's ::after stretches over the whole row. */}
              <a href="#contact" className="service__cta" onClick={() => selectService(service.formValue)}>
                Start a project<span className="sr-only">: {service.title}</span>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
