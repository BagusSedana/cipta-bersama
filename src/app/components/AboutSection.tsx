import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-28 lg:py-44 relative overflow-hidden bg-white" ref={ref}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-32 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
             <motion.h2 
               className="text-[#1A1A1A] font-light tracking-tight mb-8" 
               style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', lineHeight: 1, letterSpacing: '-0.04em' }}
               initial={{ opacity: 0, x: -50 }} 
               animate={isInView ? { opacity: 1, x: 0 } : {}} 
               transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
             >
               A Legacy of <br/><span className="text-[#0071C1] font-medium">Absolute Quality</span>
             </motion.h2>

             <motion.div 
               className="w-32 h-[2px] bg-[#0071C1]" 
               initial={{ scaleX: 0 }} 
               animate={isInView ? { scaleX: 1 } : {}} 
               transition={{ duration: 0.8, delay: 0.3 }}
               style={{ transformOrigin: 'left' }}
             />

             {/* VERIFIED RAW MEAT IMAGE */}
             <motion.div 
               className="relative w-full h-[450px] md:h-[600px] mt-16 overflow-hidden rounded-[32px] bg-[#EBE9E1]" 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={isInView ? { opacity: 1, scale: 1 } : {}} 
               transition={{ duration: 1.2, delay: 0.4 }}
             >
                <img 
                  src="/introduction.webp" 
                  alt="Cipta Bersama - Premium Meat Supplier Jakarta" 
                  className="w-full h-full object-cover"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
             </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-24 lg:pt-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Introduction</span>
                </div>
              </div>
              <p className="text-[22px] lg:text-[28px] leading-[1.6] text-[#1A1A1A] font-light italic" style={{ letterSpacing: '-0.01em' }}>
                "At Cipta Bersama, we are committed to delivering the highest-quality frozen meat products with freshness you can trust. Bringing You Frozen Meats of Exceptional Quality and Taste."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Our Journey</span>
                </div>
              </div>
              <p className="text-[20px] lg:text-[24px] leading-[1.8] text-[#555555] font-light">
                Established in <span className="text-[#1A1A1A] font-medium">2008</span>, our company offers a specialized range of high-quality imported beef and lamb. Sourced meticulously from the United States, New Zealand, Australia, and Brazil, we pride ourselves on being the backbone of Indonesia's luxury F&B sector.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-16">
                <div className="bg-[#F6F5F2] p-6 lg:p-8 rounded-3xl border border-[#EBEBEB] hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-default overflow-hidden">
                  <h4 className="text-[32px] lg:text-[44px] font-medium text-[#1A1A1A] mb-2 leading-none">15+</h4>
                  <p className="text-[14px] lg:text-[15px] font-medium text-[#555555]">Years Excellence</p>
                </div>
                <div className="bg-[#F6F5F2] p-6 lg:p-8 rounded-3xl border border-[#EBEBEB] hover:-translate-y-2 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-default overflow-hidden">
                  <h4 className="text-[28px] lg:text-[44px] font-medium text-[#1A1A1A] mb-2 leading-none">Global</h4>
                  <p className="text-[14px] lg:text-[15px] font-medium text-[#555555]">Sourcing Network</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
