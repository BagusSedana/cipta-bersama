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
               A Legacy of <br/><span className="text-[#0071C1] font-bold">Absolute Quality</span>
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
               className="relative w-full h-[450px] md:h-[600px] mt-16 overflow-hidden rounded-2xl shadow-xl bg-gray-100" 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={isInView ? { opacity: 1, scale: 1 } : {}} 
               transition={{ duration: 1.2, delay: 0.4 }}
             >
                <img 
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000" 
                  alt="Premium Raw Cut Selection" 
                  className="w-full h-full object-cover"
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
                <span className="text-[#0071C1] text-[12px] uppercase tracking-[0.4em] font-bold">
                  Introduction
                </span>
                <div className="h-[1px] flex-1 bg-gray-100" />
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
                <span className="text-[#0071C1] text-[12px] uppercase tracking-[0.4em] font-bold">
                  Our Journey
                </span>
                <div className="h-[1px] flex-1 bg-gray-100" />
              </div>
              <p className="text-[20px] lg:text-[24px] leading-[1.8] text-[#555555] font-light">
                Established in <span className="text-[#1A1A1A] font-bold">2008</span>, our company offers a specialized range of high-quality imported beef and lamb. Sourced meticulously from the United States, New Zealand, Australia, and Brazil, we pride ourselves on being the backbone of Indonesia's luxury F&B sector.
              </p>
              
              <div className="grid grid-cols-2 gap-12 mt-16">
                <div>
                  <h4 className="text-[44px] font-bold text-[#1A1A1A]">15+</h4>
                  <p className="text-[14px] text-gray-400 uppercase tracking-widest mt-2">Years Excellence</p>
                </div>
                <div>
                  <h4 className="text-[44px] font-bold text-[#1A1A1A]">Global</h4>
                  <p className="text-[14px] text-gray-400 uppercase tracking-widest mt-2">Sourcing Network</p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
