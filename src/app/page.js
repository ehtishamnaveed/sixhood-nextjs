import Intro from '../components/Intro';
import Motion from '../components/Motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Statement from '../components/Statement';
import Services from '../components/Services';
import Work from '../components/Work';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Process />
        <Contact />
      </main>
      <Footer />
      {/* Last, so scroll triggers are created after the pinned Work section. */}
      <Motion />
    </>
  );
}
