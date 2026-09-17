'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const serviceOptions = [
  'Digital Design & UI/UX',
  'Web Platform & Experience',
  'Curated E-Commerce',
  'Brand Identity & Direction',
  'Motion & Interactive Design',
  'Bespoke Creative Project',
];

const timelineOptions = ['Immediate (< 1 Month)', '1 — 2 Months', '3+ Months', 'Ongoing Advisory'];

export default function Contact() {
  const sectionRef = useRef(null);
  const [selectedService, setSelectedService] = useState('Digital Design & UI/UX');
  const [selectedTimeline, setSelectedTimeline] = useState('1 — 2 Months');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '',
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-left',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-form-box',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const body = new URLSearchParams();
      body.append('name', form.name);
      body.append('email', form.email);
      body.append('company', form.company);
      body.append('service', selectedService);
      body.append('timeline', selectedTimeline);
      body.append('message', form.message);
      body.append('website', form.website);

      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '', website: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again or email info@flastech.ca');
      }
    } catch {
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '', website: '' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 sm:py-32 relative overflow-hidden z-10"
      aria-label="Initiate Engagement"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-20 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="contact-left space-y-8 text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a7f3d0] shadow-[0_0_8px_#a7f3d0]" />
                <span className="text-[12px] font-semibold tracking-wider uppercase text-text-secondary">
                  Initiate a Project
                </span>
              </div>
              <h2 className="text-[38px] sm:text-[50px] lg:text-[58px] font-black leading-[1.04] tracking-[-0.035em] text-white mb-5">
                Let&apos;s build what <br />
                <span className="text-aurora">moves your brand forward.</span>
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.75] text-text-secondary font-normal">
                Tell us about your brand vision, aesthetic goals, or desired timeline.
                Our creative leads will review your inquiry and schedule a collaborative conversation.
              </p>
            </div>

            {/* Direct Channel Details */}
            <div className="space-y-4">
              {[
                { label: 'Studio Inquiries', val: 'info@flastech.ca', href: 'mailto:info@flastech.ca' },
                { label: 'Direct Desk', val: '+1 (416) 555-0192', href: 'tel:+14165550192' },
                { label: 'Studio Location', val: 'Toronto, Ontario, Canada', href: '#' },
                { label: 'Response Time', val: 'Direct response within 1 business day', href: '#' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl glass-panel border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-[14px] font-semibold text-white hover:text-aurora transition-colors"
                  >
                    {item.val}
                  </a>
                </div>
              ))}
            </div>

            {/* Privacy Badge */}
            <div className="p-4 rounded-xl bg-[#a7f3d0]/5 border border-[#a7f3d0]/20 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#a7f3d0] animate-pulse" />
              <span className="text-[12px] font-mono text-[#a7f3d0]">
                Confidentiality and mutual NDA respected on all creative inquiries
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-box">
            {status === 'success' ? (
              <div className="glass-panel-glow p-10 sm:p-14 rounded-3xl border-white/10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#a7f3d0]/10 border border-[#a7f3d0]/30 flex items-center justify-center mx-auto text-[#a7f3d0]">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-[28px] font-bold text-white">Project Inquiry Received</h3>
                <p className="text-[15px] leading-relaxed text-text-secondary max-w-[420px] mx-auto">
                  Thank you for reaching out. Our creative team will review your project details and follow up within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-aurora text-[12px] font-bold px-6 py-3 uppercase tracking-wider"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-panel-glow p-8 sm:p-10 rounded-3xl border-white/10 space-y-6 shadow-2xl"
              >
                {/* Service Selector Chips */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-3">
                    Project Focus
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((srv) => (
                      <button
                        key={srv}
                        type="button"
                        onClick={() => setSelectedService(srv)}
                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                          selectedService === srv
                            ? 'btn-aurora text-void font-bold shadow-md'
                            : 'glass-pill text-text-secondary hover:text-white hover:border-white/20'
                        }`}
                      >
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selector Chips */}
                <div>
                  <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-3">
                    Target Launch Window
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {timelineOptions.map((tl) => (
                      <button
                        key={tl}
                        type="button"
                        onClick={() => setSelectedTimeline(tl)}
                        className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-200 ${
                          selectedTimeline === tl
                            ? 'bg-white text-void font-bold shadow-md'
                            : 'glass-pill text-text-secondary hover:text-white hover:border-white/20'
                        }`}
                      >
                        {tl}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alex Mercer"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-text-muted/60 text-[14px] focus:outline-none focus:border-aurora-purple transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="alex@brand.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-text-muted/60 text-[14px] focus:outline-none focus:border-aurora-purple transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                    Brand / Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company or Brand Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-text-muted/60 text-[14px] focus:outline-none focus:border-aurora-purple transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-text-muted mb-2">
                    Project Vision & Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your brand, what you're looking to build, any aesthetic inspirations, and key goals..."
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder:text-text-muted/60 text-[14px] focus:outline-none focus:border-aurora-purple transition-colors resize-none"
                  />
                </div>

                {/* Honeypot */}
                <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    value={form.website}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-[13px]">
                    {errorMsg}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-aurora text-[13px] uppercase tracking-wider font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {status === 'sending' ? (
                    <span>Sending Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Project Inquiry</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
