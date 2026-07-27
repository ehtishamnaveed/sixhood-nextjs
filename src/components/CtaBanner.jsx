export default function CtaBanner() {
  return (
    <section className="relative py-20 md:py-28 selection-dark">
      <div className="absolute inset-0">
        <img
          src="/assets/cta-network.jpg"
          alt="Server room with network infrastructure and glowing status lights"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[#0d1117]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117]/70 to-[#0d1117]/30" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
        <p className="text-primary-light text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
          Ready to get started?
        </p>
        <h2 className="text-[32px] md:text-[44px] font-bold leading-[1.12] tracking-[-0.01em] text-white mb-5 max-w-[640px] mx-auto">
          Let's build something that moves your business forward
        </h2>
        <p className="text-[17px] leading-[1.7] text-white/60 max-w-[480px] mx-auto mb-9">
          Whether it's a quick fix or a full transformation, we'll figure
          out the right path together.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
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
            href="#projects"
            className="inline-flex items-center px-7 py-3.5 text-[15px] font-medium text-white/80 border border-white/20 rounded-lg hover:bg-white/10 hover:text-white transition-colors duration-200"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  )
}
