'use client';

import { useEffect } from 'react';
import Logo from './Logo';

// The ink screen splits along the logo's bolt angle. Pure CSS, so it also finishes without JS.
export default function Intro() {
  useEffect(() => {
    try {
      sessionStorage.setItem('ft-intro', '1');
    } catch {}
  }, []);

  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__half intro__half--a" />
      <div className="intro__half intro__half--b" />
      <div className="intro__seam" />
      <Logo variant="full" className="intro__mark" fill="#efeef4" />
    </div>
  );
}
