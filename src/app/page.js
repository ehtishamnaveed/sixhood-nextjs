'use client';

import dynamic from 'next/dynamic';

import LenisProvider from '../components/LenisProvider';
import AmbientAurora from '../components/AmbientAurora';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

const ScrollingTicker = dynamic(() => import('../components/ScrollingTicker'), { ssr: false });
const NayaPayCarousel = dynamic(() => import('../components/NayaPayCarousel'), { ssr: true });
const Capabilities = dynamic(() => import('../components/Capabilities'), { ssr: true });
const ApprovalWorkflow = dynamic(() => import('../components/ApprovalWorkflow'), { ssr: true });
const Performance = dynamic(() => import('../components/Performance'), { ssr: true });
const Work = dynamic(() => import('../components/Work'), { ssr: true });
const AssuranceSlider = dynamic(() => import('../components/AssuranceSlider'), { ssr: true });
const WhyFlastech = dynamic(() => import('../components/WhyFlastech'), { ssr: true });
const CtaBanner = dynamic(() => import('../components/CtaBanner'), { ssr: true });
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

export default function Home() {
  return (
    <LenisProvider>
      {/* Dynamic Mixed Aurora Gradient Background */}
      <AmbientAurora />

      {/* Floating Navigation */}
      <Navbar />

      {/* Main Page Flow */}
      <main id="main" className="relative z-10">
        <Hero />
        <ScrollingTicker />
        <NayaPayCarousel />
        <Capabilities />
        <ApprovalWorkflow />
        <Performance />
        <Work />
        <AssuranceSlider />
        <WhyFlastech />
        <CtaBanner />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </LenisProvider>
  );
}
