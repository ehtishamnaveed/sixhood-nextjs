export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface-alt border-t border-border">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-10">
          <div>
            <a href="#" className="inline-flex items-center mb-5" aria-label="SixHood - Home">
              <img src="/assets/logo2.svg" alt="" className="h-12 w-auto" aria-hidden="true" width={160} height={48} decoding="async" />
            </a>
            <p className="text-[14px] leading-[1.7] text-text-secondary max-w-[280px]">
              Canadian IT solutions for businesses that want their
              technology to actually work. Based in Toronto, serving
              companies coast to coast.
            </p>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-text-primary uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {['Cloud Solutions', 'Cybersecurity', 'Software Development', 'Data & Analytics', 'Managed IT', 'Digital Transformation'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-[14px] text-text-secondary hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-text-primary uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {['About', 'Case Studies', 'Careers', 'Blog', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-[14px] text-text-secondary hover:text-primary transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[13px] font-semibold text-text-primary uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-[14px] text-text-secondary">info@sixhood.ca</li>
              <li className="text-[14px] text-text-secondary">+1 (416) 555-0192</li>
              <li className="text-[14px] text-text-secondary">Toronto, ON, Canada</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-md bg-white border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200" aria-label="Twitter / X">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white border border-border flex items-center justify-center text-text-muted hover:text-primary hover:border-primary/30 transition-colors duration-200" aria-label="GitHub">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-text-muted">
            &copy; {year} SixHood Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[13px] text-text-muted hover:text-primary transition-colors duration-200">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
