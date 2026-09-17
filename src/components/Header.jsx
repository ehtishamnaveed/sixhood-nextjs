'use client';

import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import LocalTime from './LocalTime';
import { contact, nav } from '../content/site';

export default function Header() {
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const menuRef = useRef(null);
  const [tone, setTone] = useState('light');
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  // Match the header ink to the section underneath it, and tuck it away while scrolling down.
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const probe = (headerRef.current?.offsetHeight || 72) / 2;
      const sections = document.querySelectorAll('[data-tone]');
      let current = 'light';
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= probe && rect.bottom > probe) current = section.dataset.tone;
      }
      setTone(current);
      setHidden(y > 160 && y > lastY + 2);
      if (y < lastY - 2 || y <= 160) setHidden(false);
      lastY = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const lenis = window.__lenis;
    if (!open) {
      lenis?.start();
      return;
    }
    lenis?.stop();
    const first = menuRef.current?.querySelector('a');
    first?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
      if (event.key === 'Tab' && menuRef.current) {
        const items = [menuButtonRef.current, ...menuRef.current.querySelectorAll('a')];
        const firstItem = items[0];
        const lastItem = items[items.length - 1];
        if (event.shiftKey && document.activeElement === firstItem) {
          event.preventDefault();
          lastItem.focus();
        } else if (!event.shiftKey && document.activeElement === lastItem) {
          event.preventDefault();
          firstItem.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        ref={headerRef}
        className={`site-header tone-${open ? 'dark' : tone}${hidden && !open ? ' is-hidden' : ''}`}
      >
        <a href="#top" className="site-header__logo" aria-label="FlasTech, back to top">
          <Logo variant="compact" />
        </a>

        <nav className="site-header__nav" aria-label="Primary">
          {nav.slice(0, 3).map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="site-header__cta">
            Start a project
          </a>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="site-header__menu-button"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>

      <div
        id="site-menu"
        ref={menuRef}
        className={`site-menu${open ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
      >
        <nav aria-label="Menu">
          <ul className="site-menu__list">
            {nav.map((item, index) => (
              <li key={item.href} style={{ '--i': index }}>
                <a href={item.href} className="site-menu__link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="site-menu__meta">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>
            {contact.city} · <LocalTime />
          </span>
        </div>
      </div>
    </>
  );
}
