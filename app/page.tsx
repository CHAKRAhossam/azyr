import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import PoetrySlide from "@/components/PoetrySlide";
import Reservation from "@/components/Reservation";
import ScrollProgress from "@/components/ScrollProgress";
import Specialties from "@/components/Specialties";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Marquee />
        <PoetrySlide />
        <Menu />
        <Gallery />
        <WhyChoose />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
