'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    website: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    try {
      const body = new URLSearchParams()
      body.append('name', form.name)
      body.append('email', form.email)
      body.append('company', form.company)
      body.append('service', form.service)
      body.append('message', form.message)
      body.append('website', form.website)

      const res = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', company: '', service: '', message: '', website: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Could not reach the server. Please email us directly at info@sixhood.ca')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-24 md:py-32 bg-surface-alt">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="max-w-[540px] mx-auto text-center py-20">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="text-[28px] md:text-[32px] font-bold text-text-primary mb-3">
              Message sent
            </h2>
            <p className="text-[16px] leading-[1.75] text-text-secondary mb-8">
              Thanks for reaching out. We'll get back to you within one business day.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 text-[15px] font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface-alt">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24">
          <div>
            <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
              Get in touch
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary mb-5">
              Let's figure out
              <br className="hidden sm:block" />
              what you need
            </h2>
            <p className="text-[16px] leading-[1.75] text-text-secondary mb-8">
              Tell us a bit about where you're at and where you want to go.
              We'll be honest about whether we're the right fit.
            </p>

            <div className="space-y-5">
              <div>
                <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Email</p>
                <p className="text-[15px] text-text-primary">info@sixhood.ca</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Phone</p>
                <p className="text-[15px] text-text-primary">+1 (416) 555-0192</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Office</p>
                <p className="text-[15px] text-text-primary">Toronto, Ontario, Canada</p>
              </div>
              <div>
                <p className="text-[13px] font-semibold text-text-muted uppercase tracking-wide mb-1.5">Hours</p>
                <p className="text-[15px] text-text-primary">Mon to Fri, 8 AM to 6 PM EST</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 md:p-10 border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="name" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] bg-surface rounded-lg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-[15px] bg-surface rounded-lg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="you@company.ca"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="company" className="block text-[13px] font-medium text-text-secondary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-surface rounded-lg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                  placeholder="Company name"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-[13px] font-medium text-text-secondary mb-2">
                  What do you need help with?
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-[15px] bg-surface rounded-lg border border-border text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="cloud">Cloud Solutions</option>
                  <option value="security">Cybersecurity</option>
                  <option value="development">Software Development</option>
                  <option value="data">Data & Analytics</option>
                  <option value="managed">Managed IT Services</option>
                  <option value="digital">Digital Transformation</option>
                  <option value="other">Something else</option>
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-[13px] font-medium text-text-secondary mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 text-[15px] bg-surface rounded-lg border border-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                placeholder="What's going on, what are you trying to achieve, and what's your timeline?"
              />
            </div>

            {/* Honeypot: hidden from humans, bots fill it in */}
            <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
              <label htmlFor="website">Leave this empty</label>
              <input
                type="text"
                id="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {status === 'error' && (
              <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-[14px] text-red-700" role="alert">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-7 py-3.5 text-[15px] font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
