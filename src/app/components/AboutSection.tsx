import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-28 lg:py-44 relative overflow-hidden bg-white" ref={ref}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Block: Introduction & About */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-20 lg:mb-32">
          
          <div className="lg:col-span-5">
             {/* VERIFIED RAW MEAT IMAGE */}
             <motion.div 
               className="relative w-full h-[400px] lg:h-[650px] overflow-hidden rounded-[32px] shadow-2xl bg-[#EBE9E1] transition-shadow duration-500 hover:shadow-black/20" 
               initial={{ opacity: 0, scale: 0.95, y: 30 }} 
               animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} 
               whileHover={{ scale: 1.02 }}
               transition={{ 
                 duration: 1.4, 
                 ease: [0.22, 1, 0.36, 1], 
                 delay: 0.2,
                 scale: { duration: 0.6, ease: "easeOut" }
               }}
             >
                <img 
                  src="/infoGudang.png" 
                  alt="Cipta Bersama - Premium Meat Supplier Jakarta" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
             </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.about.subtitle}</span>
              </div>
              <p className="text-[24px] lg:text-[28px] leading-[1.6] text-[#1A1A1A] font-light italic" style={{ letterSpacing: '-0.01em' }}>
                "{t.about.p1}"
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.about.title}</span>
              </div>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light">
                {t.about.p2}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Bottom Block: Vision, Mission, Values */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start pt-16 lg:pt-24 border-t border-[#E5E5E5]">
          
          {/* Left: Vision & Mission */}
          <motion.div 
            className="lg:col-span-7 flex flex-col gap-12"
            initial={{ opacity: 0, y: 40 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div>
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-8">
                  <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.about.vision.title}</span>
              </div>
              <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">{t.about.vision.subtitle1}</h5>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light mb-10">
                {t.about.vision.desc1}
              </p>
              
              <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">{t.about.vision.subtitle2}</h5>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light">
                {t.about.vision.desc2}
              </p>
            </div>
          </motion.div>

          {/* Right: Our Value */}
          <motion.div 
            className="lg:col-span-5 flex flex-col"
            initial={{ opacity: 0, y: 40 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            {/* Added Image for Visual Balance */}
            <motion.div 
              className="relative w-full h-[250px] lg:h-[320px] rounded-[24px] overflow-hidden mb-10 shadow-lg bg-[#EBE9E1] transition-shadow duration-500 hover:shadow-black/20"
              initial={{ opacity: 0, scale: 0.95, y: 30 }} 
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}} 
              whileHover={{ scale: 1.05 }}
              transition={{ 
                duration: 1.4, 
                ease: [0.22, 1, 0.36, 1], 
                delay: 0.4,
                scale: { duration: 0.6, ease: "easeOut" }
              }}
            >
              <img 
                src="/visi.webp" 
                alt="Premium Quality Meat Preparation" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </motion.div>

            <div className="border border-[#E5E5E5] mt-10 rounded-full px-5 py-2 inline-flex items-center mb-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">{t.about.values.title}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {t.about.values.items.map((val, idx) => (
                <div key={idx} className="bg-[#FBFBF9] border border-[#EBEBEB] py-6 px-4 text-center rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                  <p className="text-[13px] lg:text-[14px] text-[#1A1A1A] tracking-wider uppercase font-medium">{val}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
