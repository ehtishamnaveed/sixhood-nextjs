const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'Cloud Solutions',
    description:
      'Move to AWS, Azure, or GCP without the headaches. We handle migration, architecture, and day-to-day management so your systems just work.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Cybersecurity',
    description:
      'Threat detection, penetration testing, SOC monitoring, and compliance. We keep your data safe without making your team jump through hoops.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Software Development',
    description:
      'Custom applications, APIs, and platforms built by engineers who care about clean code and deadlines. React, Node, Python, you name it.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Data & Analytics',
    description:
      'Dashboards your team will actually use. We build reporting, pipelines, and ML solutions that turn messy data into clear decisions.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384 3.18a1.125 1.125 0 01-1.564-.39l-.828-1.41a1.125 1.125 0 01.196-1.442l5.384-3.18m1.564.39l5.384 3.18a1.125 1.125 0 01.196 1.442l-.828 1.41a1.125 1.125 0 01-1.564.39l-5.384-3.18m-1.564-.39L9.84 8.16m1.58 6.99l-5.384 3.18" />
      </svg>
    ),
    title: 'Managed IT Services',
    description:
      '24/7 monitoring, patching, helpdesk, and maintenance. Think of us as your IT department, just without the overhead.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Digital Transformation',
    description:
      'Modernize legacy systems, automate manual processes, and build a tech strategy that actually fits where your business is heading.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-16 md:py-24 bg-surface overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]" aria-hidden="true">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.8" fill="#c0c0b8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-grid)" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[540px] mb-16">
          <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            What we do
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary mb-5">
            Services built around
            <br className="hidden sm:block" />
            real business needs
          </h2>
          <p className="text-[16px] leading-[1.75] text-text-secondary">
            Every company's tech stack looks different. We figure out what
            you actually need and build solutions that fit, not the other
            way around.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 bg-white border border-border rounded-xl group relative"
            >
              <div className="w-11 h-11 rounded-lg bg-surface-alt flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                {service.icon}
              </div>
              <h3 className="text-[18px] font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-text-secondary">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
