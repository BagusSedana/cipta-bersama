import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Building2, Truck, Ruler } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function WarehouseSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const metrics = [
    { value: '5,000+', unit: 'SQM', label: 'Storage Area' },
    { value: '-18°C', unit: '', label: 'Cold Storage Temp' },
    { value: '300+', unit: 'Orders', label: 'Per Day Capacity' },
  ];

  const facilities = [
    { icon: Building2, title: t.warehouse.facilities[0].title, desc: t.warehouse.facilities[0].desc },
    { icon: Truck, title: t.warehouse.facilities[1].title, desc: t.warehouse.facilities[1].desc },
    { icon: Ruler, title: t.warehouse.facilities[2].title, desc: t.warehouse.facilities[2].desc },
    { icon: MapPin, title: t.warehouse.facilities[3].title, desc: t.warehouse.facilities[3].desc },
  ];

  return (
    <section id="warehouse" className="relative overflow-hidden bg-white text-[#1A1A1A]" ref={ref}>

      {/* VERIFIED FACILITY IMAGE - NO WHITE OVERLAYS */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-[#0A0A0A]">
        <img
          src="/coldStorageCb.png"
          alt="Cipta Bersama Premium Cold Storage Logistics Jakarta"
          className="w-full h-full object-cover opacity-70"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 1024px) 100vw, 100vw"
        />
        {/* Dark Vignette only at the bottom for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Floating metrics on image */}
        <div className="absolute bottom-20 lg:bottom-32 left-0 right-0 z-20">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="flex flex-wrap gap-12 lg:gap-24">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  className="group cursor-default"
                >
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="text-[48px] lg:text-[72px] font-medium text-white leading-none drop-shadow-2xl" 
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      {m.value}
                    </span>
                    {m.unit && <span className="text-[18px] text-[#8DC63F] font-bold group-hover:scale-125 transition-transform duration-500">{m.unit}</span>}
                  </div>
                  <p className="text-[12px] text-white/90 uppercase tracking-[0.3em] font-medium mt-2 group-hover:text-white transition-all duration-500">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-40 relative z-10 bg-white">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-5">
            <motion.div className="flex items-center mb-8" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.warehouse.subtitle}</span>
              </div>
            </motion.div>
            <motion.h2 className="font-light text-[#1A1A1A] mb-10" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>
              {(() => {
                const titleStr = t.warehouse.title;
                // Specifically format to match Compro's break and color
                if (titleStr.toLowerCase().includes('comprehensive meat solutions')) {
                  return (
                    <>
                      <span className="font-medium text-[#1A1A1A]">Comprehensive</span>
                      <br/>
                      <span className="font-medium text-[#0071C1]">Meat Solutions</span>
                    </>
                  );
                }
                
                // Fallback for ID translations to render as half-and-half if needed
                const words = titleStr.split(' ');
                const mid = Math.floor(words.length / 2);
                return (
                  <>
                    <span className="font-medium text-[#1A1A1A]">{words.slice(0, mid).join(' ')}</span><br/>
                    <span className="font-medium text-[#0071C1]">{words.slice(mid).join(' ')}</span>
                  </>
                );
              })()}
            </motion.h2>
            <div className="mt-16 pt-16 border-t border-gray-100">
              <p className="text-[18px] lg:text-[20px] leading-[1.8] text-[#555555] font-light">
                {t.warehouse.desc}
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            {facilities.map((fac, idx) => (
              <motion.div key={idx} className="group flex items-start gap-8 p-10 rounded-3xl border border-gray-50 bg-[#FAFAFA] hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-default" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 + idx * 0.15 }}>
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0071C1]/5 border border-[#0071C1]/10 flex items-center justify-center">
                  <fac.icon className="w-7 h-7 text-[#0071C1]" />
                </div>
                <div className="pt-2">
                  <p className="text-[20px] lg:text-[24px] font-medium text-[#1A1A1A] mb-4">{fac.title}</p>
                  <p className="text-[16px] lg:text-[18px] text-[#666666] leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] min-h-[400px] border-t border-gray-100 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=House+of+Rily,+Jl.+Benda+Raya+Kav.+DPR+No.49,+RT.7/RW.11,+Ciganjur,+Kec.+Jagakarsa,+Kota+Jakarta+Selatan,+Daerah+Khusus+Ibukota+Jakarta+12630&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
          title="Lokasi Gudang Cipta Bersama - House of Rily"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy">
        </iframe>
      </div>
    </section>
  );
}
