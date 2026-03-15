import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export function HeroSection({ isLoaded = true }: { isLoaded?: boolean }) {
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
        <div className="w-full">
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            >
              <button className="border border-[#0071C1]/20 bg-[#0071C1]/5 hover:bg-[#0071C1]/10 rounded-full px-5 py-2 inline-flex items-center transition-colors cursor-default">
                <span className="text-[12px] uppercase tracking-[0.3em] text-[#0071C1] font-bold">{t.hero.subtitle}</span>
              </button>
            </motion.div>
          </div>

          <motion.h1
            className="text-[#1A1A1A] mb-10"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.5rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.04em',
              fontWeight: 300
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 lg:whitespace-nowrap">
              <span className="text-[#1A1A1A]">{t.hero.title1}</span>
              <span className="font-medium text-[#0071C1]">{t.hero.title2}</span>
            </div>
          </motion.h1>

          <motion.p
            className="text-[#555555] text-[18px] lg:text-[22px] leading-[1.6] mb-14 max-w-2xl font-light"
            initial={{ opacity: 0, x: -30 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.hero.quote}
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6 mb-24"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="group bg-[#1A1A1A] text-white px-8 py-3.5 lg:px-10 lg:py-4 rounded-full font-medium text-[13px] uppercase tracking-widest hover:bg-[#0071C1] transition-all duration-500 shadow-lg flex items-center justify-center gap-3">
              {t.hero.btnExplore}
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform" />
            </button>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent text-[#1A1A1A] border border-[#E5E5E5] px-8 py-3.5 lg:px-10 lg:py-4 rounded-full font-medium text-[13px] uppercase tracking-widest hover:border-[#1A1A1A] transition-all duration-500 text-center">
              {t.hero.btnCorporate}
            </button>
          </motion.div>

          <div className="flex flex-wrap lg:flex-nowrap items-start justify-start gap-16 lg:gap-24 w-full">
            {[
              { val: "15+", label: t.hero.stat1, d: 0.4 },
              { val: "50+", label: t.hero.stat3, d: 0.6 }
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 + stat.d }}
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
            sizes="(max-width: 1024px) 100vw, 100vw"
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
