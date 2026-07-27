const projects = [
  {
    image: '/assets/mockup2.webp',
    title: 'Pakimtehan',
    category: 'Web Design',
    description: 'Online exam preparation platform for CSS, PMS, and One Paper tests serving students across Pakistan.',
  },
  {
    image: '/assets/mockup3.webp',
    title: 'Biz Tech',
    category: 'Web Design',
    description: 'Technology platform connecting clients, experts, and administrators to streamline business growth and digital transformation across the UAE.',
  },
  {
    image: '/assets/mockup4.webp',
    title: 'Thapsus Marine Solutions',
    category: 'E-Commerce & Web Design',
    description: 'Full e-commerce store and product catalogue for a Dubai-based NMEA-certified marine electronics supplier serving clients across the Middle East and Asia.',
  },
  {
    image: '/assets/mockup5.webp',
    title: 'Desert & Nile Artistry',
    category: 'Branding & E-Commerce',
    description: 'Brand identity and online shop for a Dubai-based artisanal brand selling handmade African heritage products, from beaded jewelry to handcrafted sandals.',
  },
  {
    image: '/assets/mockup6.webp',
    title: 'Crystal Coaching',
    category: 'Web Design',
    description: 'Personal website and booking platform for a certified life coaching practice based in Dubai, offering personal development and career coaching services.',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-surface">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-[540px] mb-16">
          <p className="text-primary text-[13px] font-semibold tracking-[0.15em] uppercase mb-5">
            Our work
          </p>
          <h2 className="text-[32px] md:text-[40px] font-bold leading-[1.15] tracking-[-0.01em] text-text-primary mb-5">
            Projects we're
            <br className="hidden sm:block" />
            proud of
          </h2>
          <p className="text-[16px] leading-[1.75] text-text-secondary">
            A selection of work we've delivered for clients across
            different industries. Each one built to solve a real problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl overflow-hidden border border-border bg-white"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={`${project.title} project mockup`}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <p className="text-[12px] font-semibold text-primary uppercase tracking-wide mb-2">
                  {project.category}
                </p>
                <h3 className="text-[18px] font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-[14px] leading-[1.6] text-text-secondary">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
