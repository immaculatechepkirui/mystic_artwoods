import Footer from '../components/Footer'
import ServicesCarousel from '../components/ServicesCarousel';
import HomeHero from '../components/HomeHero';
import AboutServicesSection from '../components/AboutServicesSection';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <div>
      <HomeHero />
      <AboutServicesSection />
      <ServicesCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}