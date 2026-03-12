import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MapPin, Building2, Truck, Ruler } from 'lucide-react';

export function WarehouseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const metrics = [
    { value: '5,000+', unit: 'SQM', label: 'Storage Area' },
    { value: '-18°C', unit: '', label: 'Cold Storage Temp' },
    { value: '300+', unit: 'Orders', label: 'Per Day Capacity' },
  ];

  const facilities = [
    { icon: Ruler, title: '5,000+ SQM Area', desc: 'Kapasitas penyimpanan raksasa untuk tonase tinggi.' },
    { icon: Building2, title: 'Cold Storage -18°C', desc: 'Suhu konstan demi mutu premium yang terjaga.' },
    { icon: Truck, title: 'Central Distribution', desc: 'Armada mandiri, distribusi ke seluruh Nusantara.' },
  ];

  return (
    <section id="warehouse" className="relative overflow-hidden bg-white text-[#1A1A1A]" ref={ref}>

      {/* VERIFIED FACILITY IMAGE - NO WHITE OVERLAYS */}
      <div className="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden bg-[#0A0A0A]">
        <img
          src="https://images.unsplash.com/photo-1615937657715-bc7b4b7962c1?auto=format&fit=crop&q=80&w=2000"
          alt="Cipta Bersama Premium Cold Storage Logistics"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Dark Vignette only */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/40" />

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
                      className="text-[48px] lg:text-[72px] font-bold text-white leading-none drop-shadow-2xl" 
                      style={{ letterSpacing: '-0.04em' }}
                    >
                      {m.value}
                    </span>
                    {m.unit && <span className="text-[18px] text-[#8DC63F] font-extrabold group-hover:scale-125 transition-transform duration-500">{m.unit}</span>}
                  </div>
                  <p className="text-[12px] text-white/90 uppercase tracking-[0.3em] font-bold mt-2 group-hover:text-white transition-all duration-500">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-24 lg:py-40 relative z-10 bg-white">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          <div className="lg:col-span-5">
            <motion.div className="flex items-center gap-4 mb-10" initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
              <div className="h-[2px] w-12 bg-[#0071C1]" />
              <p className="text-[13px] uppercase tracking-[0.5em] text-[#0071C1] font-bold">Infrastructure Excellence</p>
            </motion.div>
            <motion.h2 className="font-light text-[#1A1A1A] mb-10" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1, delay: 0.2 }}>
              Nationwide <br />
              <span className="font-bold text-[#0071C1]">Cold Chain Control</span>
            </motion.h2>
            <div className="mt-16 pt-16 border-t border-gray-100">
              <p className="text-[18px] lg:text-[20px] leading-[1.8] text-[#555555] font-light">
                Our facilities utilize high-performance <span className="text-[#1A1A1A] font-bold">Industrial Refrigeration</span> and systematic inventory management to preserve the flavor and integrity of every premium cut.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-6">
            {facilities.map((fac, idx) => (
              <motion.div key={idx} className="group flex items-start gap-8 p-10 rounded-3xl border border-gray-50 bg-[#FAFAFA]" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 + idx * 0.15 }}>
                <div className="w-16 h-16 shrink-0 rounded-2xl bg-[#0071C1]/5 border border-[#0071C1]/10 flex items-center justify-center">
                  <fac.icon className="w-7 h-7 text-[#0071C1]" />
                </div>
                <div className="pt-2">
                  <h4 className="text-[20px] lg:text-[24px] font-bold text-[#1A1A1A] mb-4">{fac.title}</h4>
                  <p className="text-[16px] lg:text-[18px] text-[#666666] leading-relaxed">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
