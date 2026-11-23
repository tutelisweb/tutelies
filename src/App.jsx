import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import DetailedServices from "./components/DetailedServices";
import Sectors from "./components/Sectors";
import Approach from "./components/Approach";
import Dpdp from "./components/Dpdp";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // All in-page navigation is managed here.
  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerOffset = 86;
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-tutelis-navy text-white">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero onNavigate={scrollToSection} />
        <Services />
        <DetailedServices onNavigate={scrollToSection} />
        <Sectors />
        <Approach />
        <Dpdp onNavigate={scrollToSection} />
        <About />
        <Contact />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
