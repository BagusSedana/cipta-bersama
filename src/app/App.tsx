import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ClientsSection } from './components/ClientsSection';
import { MarketSection } from './components/MarketSection';

import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SEO } from './components/SEO';
import { FloatingWA } from './components/ui/FloatingWA';
import { LanguageProvider } from '../i18n/LanguageContext';
import { LoadingScreen } from './components/LoadingScreen';
import { useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LanguageProvider>
      <div className={`min-h-screen bg-[#F8F5EF] ${isLoading ? 'h-screen overflow-hidden' : ''}`} style={{ fontFamily: 'DM Sans, sans-serif' }}>
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        <SEO />
        <Navigation />
        <main>
          <HeroSection isLoaded={!isLoading} />
          <AboutSection />
          <ProductsSection />
          <ClientsSection />
          <MarketSection />

          {/* Restored Cold Storage Image Banner with Text */}
          <section className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
            <img
              src="/coldStorageCb.png"
              alt="Cipta Bersama Premium Cold Storage Logistics Jakarta"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 1024px) 100vw, 100vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Superimposed Text */}
            <div className="relative z-10 text-center px-6">
              <h3 className="text-white font-light tracking-wider text-[24px] lg:text-[36px] mb-2">Cold Storage Capacity</h3>
              <p className="text-[#0071C1] font-medium text-[48px] lg:text-[72px] tracking-tighter leading-none">
                -21°C <span className="text-white text-[24px] lg:text-[36px] font-light mx-2">to</span> -22°C
              </p>
            </div>
          </section>

          {/* Map Location Section Restored */}
          <section className="w-full h-[50vh] min-h-[400px] border-t border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=House+of+Rily,+Jl.+Benda+Raya+Kav.+DPR+No.49,+RT.7/RW.11,+Ciganjur,+Kec.+Jagakarsa,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12630&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
              title="Lokasi Gudang Cipta Bersama - House of Rily"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </section>
          
          <ContactSection />
        </main>
        <Footer />
        <FloatingWA />
      </div>
    </LanguageProvider>
  );
}