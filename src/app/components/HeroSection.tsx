import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // PARALLAX WITHOUT OPACITY FADE
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="home" className="bg-[#FFFFFF] overflow-hidden relative pt-20 lg:pt-28" ref={containerRef}>
      
      {/* Top Text Content Area */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-20 mb-12 lg:mb-20">
        <div className="max-w-4xl">
          
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={false}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-8 bg-[#0071C1]" />
                <span className="text-[12px] uppercase tracking-[0.4em] text-[#0071C1] font-medium">{t.hero.subtitle}</span>
              </div>
            </motion.div>
          </div>

          <motion.h1
            className="text-[#1A1A1A] mb-10"
            style={{
              fontSize: 'clamp(3.5rem, 6vw, 6rem)',
              lineHeight: 1,
              letterSpacing: '-0.04em',
              fontWeight: 300
            }}
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {(() => {
              const title1 = t.hero.title1;
              const title2 = t.hero.title2;
              
              if (title1 === 'Eminent Purveyor' && title2 === 'for Gastronomic Excellence') {
                return (
                  <>
                    <span className="text-[#1A1A1A] inline-block">Eminent Purveyor</span>
                    <br className="hidden md:block"/>
                    <span className="font-medium text-[#0071C1] inline-block -mt-2 lg:-mt-4">for Gastronomic Excellence</span>
                  </>
                );
              }
              
              if (title1 === 'Penyedia Paripurna' && title2 === 'untuk Ekselensi Gastronomi') {
                return (
                  <>
                    <span className="text-[#1A1A1A] inline-block">Penyedia Paripurna</span>
                    <br className="hidden md:block"/>
                    <span className="font-medium text-[#0071C1] inline-block -mt-2 lg:-mt-4">untuk Ekselensi Gastronomi</span>
                  </>
                );
              }

              return (
                <>
                  <span className="text-[#1A1A1A]">{title1}</span> <br className="hidden md:block"/>
                  <span className="font-medium text-[#0071C1]">{title2}</span>
                </>
              );
            })()}
          </motion.h1>

          <motion.p
            className="text-[#555555] text-[18px] lg:text-[22px] leading-[1.6] mb-14 max-w-2xl font-light"
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.quote}
          </motion.p>

          <motion.div 
            className="flex flex-wrap items-center gap-6 mb-24"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#1A1A1A] text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-full font-medium text-[13px] uppercase tracking-widest hover:bg-[#0071C1] transition-all duration-500 shadow-lg flex items-center justify-center gap-3">
              {t.hero.btnExplore}
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent text-[#1A1A1A] border border-[#E5E5E5] px-8 py-3.5 lg:px-10 lg:py-4 rounded-full font-medium text-[13px] uppercase tracking-widest hover:border-[#1A1A1A] transition-all duration-500 text-center">
              {t.hero.btnCorporate}
            </button>
          </motion.div>

          <div className="grid grid-cols-2 lg:flex lg:flex-nowrap items-start justify-between gap-6 lg:gap-8 w-full">
             {[
               { val: "15+", label: t.hero.stat1, d: 0.4 },
               { val: "900+", label: t.hero.stat2, d: 0.5 },
               { val: "50+", label: t.hero.stat3, d: 0.6 },
               { val: "100%", label: t.hero.stat4, d: 0.7 }
             ].map((stat, i) => (
               <motion.div 
                 key={i}
                 className="flex flex-col gap-2"
                 initial={false}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: stat.d }}
               >
                 <div className="text-[36px] lg:text-[52px] font-medium text-[#1A1A1A] leading-none" style={{ letterSpacing: '-0.04em' }}>
                   {stat.val}
                 </div>
                 <div className="text-[11px] text-[#0071C1] font-medium uppercase tracking-[0.2em]">{stat.label}</div>
               </motion.div>
             ))}
          </div>

        </div>
      </div>

      {/* VERIFIED RAW MEAT IMAGE - ELIMINATED ALL WHITE OVERLAYS */}
      <motion.div
        className="w-full mt-10 lg:mt-16 relative z-10"
        style={{ y }}
      >
        <div className="w-full h-[500px] lg:h-[850px] relative overflow-hidden bg-[#1A1A1A]">
          <img 
            src="/hero.webp"
            alt="Premium Raw Beef Purveyor Cipta Bersama Jakarta"
            className="w-full h-full object-cover"
            width={1920}
            height={850}
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          {/* Subtle Red Overlay */}
          <div className="absolute inset-0 bg-red-800/20 mix-blend-overlay" />
          {/* Subtle Dark Vignette at bottom only */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </motion.div>

    </section>
  );
}
