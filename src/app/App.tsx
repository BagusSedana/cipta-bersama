import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ClientsSection } from './components/ClientsSection';
import { MarketSection } from './components/MarketSection';
import { WarehouseSection } from './components/WarehouseSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { FloatingWA } from './components/ui/FloatingWA';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5EF]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
      <SEO />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
        <MarketSection />
        <WarehouseSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}