export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[680px] flex items-center selection-dark">
      <div className="absolute inset-0">
        <img
          src="/assets/hero-workspace.jpg"
          alt="Person working on a laptop with data and code on screen"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[#0d1117]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/60 via-[#0d1117]/30 to-transparent" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-[620px]">
          <p className="text-primary-light text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            Toronto, Canada
          </p>

          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold leading-[1.08] tracking-[-0.02em] text-white mb-6">
            Technology that actually works for{' '}
            <span className="text-primary-light">your business</span>
          </h1>

          <p className="text-[17px] lg:text-[19px] leading-[1.7] text-white/65 max-w-[520px] mb-9">
            We help Canadian businesses run better technology. Cloud, security,
            software, we handle the complex stuff so your team can focus
            on what they do best.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-[#0d1117] bg-primary-light rounded-lg hover:bg-white transition-colors duration-200"
            >
              Talk to us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-7 py-3.5 text-[15px] font-medium text-white/80 border border-white/20 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200"
            >
              See our services
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden max-w-[600px]">
            {[
              { stat: '10+', label: 'Years in business' },
              { stat: '200+', label: 'Clients served' },
              { stat: '99.9%', label: 'Uptime guarantee' },
              { stat: '24/7', label: 'Support available' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 backdrop-blur-sm px-5 py-4">
                <div className="text-[22px] font-bold text-white mb-1">{item.stat}</div>
                <div className="text-[11px] font-medium text-white/50 uppercase tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
