export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
              About us
            </p>
            <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary mb-6">
              We're the IT team
              <br className="hidden sm:block" />
              you don't have to hire
            </h2>
            <p className="text-[16px] leading-[1.75] text-text-secondary mb-5">
              SixHood started in 2014 with a simple idea: businesses deserve
              IT partners who pick up the phone, explain things in plain
              language, and actually fix problems, not just send invoices.
            </p>
            <p className="text-[16px] leading-[1.75] text-text-secondary mb-8">
              Based in Toronto, we work with companies across Canada who need
              reliable cloud infrastructure, solid security, and custom software
              without the runaround that big consultancies are known for.
            </p>

            <div className="relative rounded-xl overflow-hidden">
              <img
                src="/assets/about-team.jpg"
                alt="SixHood team members collaborating at a whiteboard during a strategy session"
                className="w-full h-[280px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
            </div>
          </div>

          <div className="space-y-0">
            {[
              {
                title: 'We speak human',
                desc: 'No jargon dumps. We explain what we\'re doing and why it matters to your business.',
              },
              {
                title: 'We answer our phones',
                desc: 'Real people in Toronto. When something breaks at 2 PM or 2 AM, you reach someone who can help.',
              },
              {
                title: 'We own our work',
                desc: 'If we build it and something goes wrong, that\'s on us. No passing the buck.',
              },
              {
                title: 'We grow with you',
                desc: 'Whether you\'re 10 people or 1,000, our approach scales with your actual needs, not a bloated enterprise package.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="py-7 border-b border-border first:border-t"
              >
                <div className="flex items-start gap-5">
                  <span className="text-[13px] font-bold text-primary mt-0.5 shrink-0">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[17px] font-semibold text-text-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.65] text-text-secondary">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
