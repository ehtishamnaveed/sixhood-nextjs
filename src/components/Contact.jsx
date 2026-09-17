'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Arrow from './Arrow';
import { contact, projectTypes, timelines } from '../content/site';

gsap.registerPlugin(ScrollTrigger);

const EMPTY_FORM = { name: '', email: '', company: '', message: '', website: '' };
const SEND_FAILED = "Your brief didn't send.";

function ChoiceGroup({ legend, name, options, value, onChange }) {
  return (
    <fieldset className="choices">
      <legend className="field__label">{legend}</legend>
      <div className="choices__options">
        {options.map((option) => (
          <label key={option} className="choice">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function Contact() {
  const marqueeRef = useRef(null);
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [sentTo, setSentTo] = useState('');

  useEffect(() => {
    const onSelect = (event) => {
      if (projectTypes.includes(event.detail)) setProjectType(event.detail);
    };
    window.addEventListener('flastech:select-project-type', onSelect);
    return () => window.removeEventListener('flastech:select-project-type', onSelect);
  }, []);

  // The headline marquee drifts on its own and speeds up with scroll velocity.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const loop = gsap.to('.marquee__track', { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });
      ScrollTrigger.create({
        trigger: marqueeRef.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const boost = 1 + Math.min(Math.abs(self.getVelocity()) / 400, 5);
          gsap.to(loop, { timeScale: boost, duration: 0.2, overwrite: true });
          gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.2, ease: 'power2.out' });
        },
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    setError('');

    const body = new URLSearchParams({
      ...form,
      service: projectType,
      timeline,
    });

    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      const data = await response.json();
      if (!data.success) {
        setError(data.error || SEND_FAILED);
        setStatus('error');
        return;
      }
      setSentTo(form.email);
      setForm(EMPTY_FORM);
      setStatus('sent');
    } catch {
      // Network failure or a host that can't run the PHP endpoint.
      setError(SEND_FAILED);
      setStatus('error');
    }
  };

  const marqueeText = (
    <>
      <span>Start a project</span>
      <span className="marquee__bolt" />
      <span>Tell us what you&apos;re building</span>
      <span className="marquee__bolt" />
    </>
  );

  return (
    <section id="contact" className="contact" data-tone="dark" aria-labelledby="contact-title" tabIndex={-1}>
      <div ref={marqueeRef} className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {marqueeText}
          {marqueeText}
        </div>
      </div>

      <div className="shell contact__grid">
        <div className="contact__intro">
          <p className="label">Contact</p>
          <h2 id="contact-title" className="contact__title">
            Tell us what you&apos;re building. We reply within one business day.
          </h2>
          <dl className="contact__details">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className="text-link">
                  {contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{contact.city}</dd>
            </div>
          </dl>
        </div>

        <div className="contact__panel">
          {status === 'sent' ? (
            <div className="form-done" role="status">
              <h3 className="form-done__title">Brief sent.</h3>
              <p>
                We&apos;ll reply to <strong>{sentTo}</strong> within one business day.
              </p>
              <button type="button" className="text-link" onClick={() => setStatus('idle')}>
                Send another brief
              </button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <ChoiceGroup
                legend="What do you need?"
                name="service"
                options={projectTypes}
                value={projectType}
                onChange={setProjectType}
              />
              <ChoiceGroup
                legend="When do you want to launch?"
                name="timeline"
                options={timelines}
                value={timeline}
                onChange={setTimeline}
              />

              <div className="form__row">
                <label className="field">
                  <span className="field__label">Name</span>
                  <input name="name" autoComplete="name" required value={form.name} onChange={handleChange} />
                </label>
                <label className="field">
                  <span className="field__label">Email</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label className="field">
                <span className="field__label">
                  Company <span className="field__optional">optional</span>
                </span>
                <input name="company" autoComplete="organization" value={form.company} onChange={handleChange} />
              </label>

              <label className="field">
                <span className="field__label">Project details</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  maxLength={5000}
                  placeholder="What should it do, who is it for, and is anything already built?"
                  value={form.message}
                  onChange={handleChange}
                />
              </label>

              <div className="form__trap" aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
                </label>
              </div>

              {status === 'error' && (
                <p className="form__error" role="alert">
                  {error} Try again, or email us at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </p>
              )}

              <button type="submit" className="btn btn--iris" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending brief…' : 'Send project brief'}
                <Arrow />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
