import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseSection from './components/WhyChooseSection';
import StudentOffersSection from './components/StudentOffersSection';
import ReviewsSection from './components/ReviewsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A1628] antialiased selection:bg-[#1565C0] selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <StudentOffersSection />
        <ReviewsSection />
        <GallerySection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
