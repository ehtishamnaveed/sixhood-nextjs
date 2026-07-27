const reasons = [
  {
    title: 'Based in Toronto, built for Canada',
    description:
      'We know Canadian regulations, business culture, and what it takes to operate in this market. Our team is here, not outsourced, not offshore.',
  },
  {
    title: 'Certified people, not certified salespeople',
    description:
      'Our engineers hold AWS, Azure, CISSP, and PMP certifications. But more importantly, they\'ve actually shipped production systems.',
  },
  {
    title: 'Honest estimates and timelines',
    description:
      'We quote what it costs. If something changes, we tell you before it becomes a surprise line item. No one likes budget shocks.',
  },
  {
    title: 'We stick around after launch',
    description:
      'Most IT firms disappear after the invoice clears. We offer ongoing support because we know the real work starts after go-live.',
  },
]

export default function WhyUs() {
  return (
    <section id="whyus" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
              Why SixHood
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary mb-5">
              IT consulting that
              <br className="hidden sm:block" />
              doesn't feel like consulting
            </h2>
            <p className="text-[16px] leading-[1.75] text-text-secondary mb-8">
              We're not here to sell you a bloated transformation program.
              We're here to make your technology work better, starting today.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-8">
              <img
                src="/assets/toronto-skyline.jpg"
                alt="Toronto skyline with the CN Tower, representing SixHood's Canadian roots"
                className="w-full h-[240px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </div>

            <div className="inline-block px-4 py-2 rounded-lg bg-surface-alt border border-border">
              <p className="text-[14px] text-text-secondary">
                <span className="font-semibold text-text-primary">98%</span> client retention rate since 2014
              </p>
            </div>
          </div>

          <div>
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="py-8 border-b border-border first:border-t first:pt-8 last:pb-0"
              >
                <div className="flex gap-5">
                  <span className="text-[48px] font-bold text-border leading-none shrink-0 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold text-text-primary mb-2 mt-1">
                      {reason.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-text-secondary max-w-[480px]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-12 p-7 rounded-xl bg-surface-alt border border-border">
              <h3 className="text-[17px] font-semibold text-text-primary mb-4">
                Industries we work with
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Financial Services',
                  'Healthcare',
                  'Retail & E-Commerce',
                  'Manufacturing',
                  'Government',
                  'Energy',
                ].map((industry) => (
                  <span
                    key={industry}
                    className="px-3.5 py-1.5 text-[13px] font-medium text-text-secondary border border-border rounded-md bg-white"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
