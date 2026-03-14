import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

// 15 real client logos uploaded by user
const logos = [
  { id: 1, src: '/mitra/gran.png', alt: 'Gran Melia Hotels & Resorts' },
  { id: 2, src: '/mitra/swiss.png', alt: 'Swiss-Belhotel International' },
  { id: 3, src: '/mitra/kristal.png', alt: 'Kristal Hotel' },
  { id: 4, src: '/mitra/newseoul.png', alt: 'New Seoul' },
  { id: 5, src: '/mitra/indocater.png', alt: 'Indocater' },
  { id: 6, src: '/mitra/mulia.png', alt: 'Hotel Mulia Senayan' },
  { id: 7, src: '/mitra/century.png', alt: 'Century Park Hotel' },
  { id: 8, src: '/mitra/food.png', alt: 'The FoodHall' },
  { id: 9, src: '/mitra/mu.png', alt: 'Mu Gung Hwa' },
  { id: 10, src: '/mitra/chung.png', alt: 'Chung Gi Wa' },
  { id: 11, src: '/mitra/solitaire.png', alt: 'JHL Solitaire' },
  { id: 12, src: '/mitra/grand.png', alt: 'Grand Hyatt Jakarta' },
  { id: 13, src: '/mitra/ranch.png', alt: '99 Ranch Market' },
  { id: 14, src: '/mitra/pangan.png', alt: 'PanganSari' },
  { id: 15, src: '/mitra/papaya.png', alt: 'Papaya Fresh Gallery' },
];

const row1 = [...logos.slice(0, 8), ...logos.slice(0, 8)];
const row2 = [...logos.slice(7, 15), ...logos.slice(7, 15)];

function MarqueeRow({ items, reverse = false }: { items: typeof logos; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden w-full py-4 lg:py-6">
      <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-[200px] z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, #FAFAFA 10%, transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-[200px] z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, #FAFAFA 10%, transparent)' }} />
      <motion.div
        className="flex gap-12 lg:gap-20 w-max items-center"
        animate={{ x: reverse ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 120, ease: 'linear', repeat: Infinity }}
      >
        {[...items, ...items, ...items, ...items].map((logo, i) => (
          <div
            key={`${logo.id}-${i}`}
            className="flex-shrink-0 w-[220px] lg:w-[340px] h-32 lg:h-48 flex items-center justify-center hover:scale-110 transition-transform duration-500 px-4"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-[120%] h-[120%] object-contain filter "
              style={{ maxHeight: '120%', maxWidth: '120%' }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function ClientsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="clients" className="py-12 lg:py-20 bg-[#FAFAFA] border-y border-[#EAEAEA]" ref={ref}>

      {/* — CLIENT LOGOS — Compact Premium Showcase — */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mb-10 lg:mb-16">
        <motion.div
          className="flex flex-col items-center justify-center text-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center mb-8">
            <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.clients.subtitle}</span>
            </div>
          </div>
          
          <h2 className="text-[#1A1A1A] font-bold pb-2" style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
             {t.clients.title}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-[#666666] max-w-2xl font-light mt-4">
             {t.clients.desc}
          </p>
        </motion.div>
      </div>

      <div className="w-full relative space-y-4">
        {/* Row 1 */}
        <MarqueeRow items={row1} reverse={false} />

        {/* Row 2 */}
        <MarqueeRow items={row2} reverse={true} />
      </div>

    </section>
  );
}
