import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import About from '@/components/About';
import Services from '@/components/Services';
import SolarSavingsCalculator from '@/components/SolarSavingsCalculator';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Faq from '@/components/Faq';
import LocationMap from '@/components/LocationMap';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      {/* Sticky Header & Navigation */}
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section: Trust Metrics & Authorized Brands */}
        <StatsBar />

        {/* Section 3: About Us */}
        <About />

        {/* Section 4: Products & Services */}
        <Services />

        {/* Section: Interactive Solar Sizing & Savings Calculator */}
        <SolarSavingsCalculator />

        {/* Section 5: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 8: How It Works */}
        <Process />

        {/* Section 6: Photo Gallery */}
        <Gallery />

        {/* Section 7: Customer Reviews */}
        <Reviews />

        {/* Section 9: FAQs */}
        <Faq />

        {/* Section 10: Location & Map */}
        <LocationMap />

        {/* Section 11: Contact & WhatsApp Enquiry */}
        <ContactSection />
      </main>

      {/* Section 12: Footer */}
      <Footer />

      {/* WhatsApp Floating Action & Mobile Sticky Bar */}
      <FloatingWhatsApp />
    </div>
  );
}

