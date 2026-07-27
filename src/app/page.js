import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const About = dynamic(() => import("../components/About"), { ssr: true });
const Services = dynamic(() => import("../components/Services"), { ssr: true });
const Projects = dynamic(() => import("../components/Projects"), { ssr: true });
const WhyUs = dynamic(() => import("../components/WhyUs"), { ssr: true });
const CtaBanner = dynamic(() => import("../components/CtaBanner"), { ssr: true });
const Contact = dynamic(() => import("../components/Contact"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Projects />
        <WhyUs />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
