'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Why Us', href: '#whyus' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-md">
        Skip to content
      </a>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <a href="#" className="flex items-center" aria-label="SixHood - Home">
            <img src="/assets/logo2.svg" alt="" className={`h-12 w-auto transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} aria-hidden="true" width={160} height={48} decoding="async" />
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-4 py-2 text-[14px] font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-text-secondary hover:text-text-primary'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className={`ml-3 px-5 py-2.5 text-[14px] font-semibold rounded-lg transition-colors duration-200 ${
                scrolled
                  ? 'text-white bg-primary hover:bg-primary-dark'
                  : 'text-[#0d1117] bg-primary-light hover:bg-white'
              }`}
            >
              Get in Touch
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 -mr-2"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-5 flex flex-col gap-[5px]">
              <span className={`block h-[1.5px] transition-all duration-300 origin-center ${scrolled ? 'bg-text-primary' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
              <span className={`block h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-text-primary' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-[1.5px] transition-all duration-300 origin-center ${scrolled ? 'bg-text-primary' : 'bg-white'} ${isOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
            </div>
          </button>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="md:hidden bg-white pb-6 border-t border-border pt-4 shadow-lg" role="menu">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-2 py-3 text-[15px] font-medium text-text-secondary hover:text-text-primary transition-colors"
                role="menuitem"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-5 py-3 text-center text-[15px] font-semibold text-white bg-primary rounded-lg"
              role="menuitem"
            >
              Get in Touch
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
