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
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Welcome Message</span>
                </div>
              </div>
              <p className="text-[20px] lg:text-[24px] leading-[1.6] text-[#1A1A1A] font-light italic" style={{ letterSpacing: '-0.01em' }}>
                "At Cipta Bersama Company, we are committed to delivering the highest-quality frozen meat products with freshness you can trust. With a focus on sustainable sourcing, modern processing methods, and strict quality control, we strive to provide products that not only satisfy the palate but also ensure safety and reliability."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                  <span className="text-[14px] font-medium text-[#1A1A1A]">About Us</span>
                </div>
              </div>
              <p className="text-[18px] lg:text-[20px] leading-[1.8] text-[#555555] font-light">
                Our company was established in 2008 and offers a wide range of high-quality imported beef and lamb products sourced from the United States, New Zealand, Australia, and Brazil. We are committed to providing maximum satisfaction to our customers. In addition, we also serve the needs of restaurants, modern markets, cafes, and hotels.
              </p>

              <div className="flex items-center gap-4 mb-6 mt-16">
                <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Vision & Mission</span>
                </div>
              </div>
              <h5 className="font-medium text-[#1A1A1A] mb-2 text-[18px] lg:text-[20px]">Vision Company</h5>
              <p className="text-[16px] lg:text-[18px] leading-[1.8] text-[#555555] font-light mb-8">
                To become a leading meat supplier company, widely recognized for the consistent quality of its products, well-prepared freshness, and customer trust. We are committed to providing meat that meets premium standards.
              </p>
              
              <h5 className="font-medium text-[#1A1A1A] mb-2 text-[18px] lg:text-[20px]">Mission Company</h5>
              <p className="text-[16px] lg:text-[18px] leading-[1.8] text-[#555555] font-light">
                We strive to provide high-quality meat to all customers, ranging from households and restaurants to the culinary industry, by ensuring that every product goes through a strict selection, sorting, and distribution process in accordance with food safety standards. The company focuses on maintaining the freshness and quality of its meat through modern storage technology and an efficient logistic system.
              </p>
              
              <div className="flex items-center gap-4 mb-6 mt-16">
                <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                  <span className="text-[14px] font-medium text-[#1A1A1A]">Our Value</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Professionalism', 'Innovation', 'Quality', 'Customer Satisfaction'].map((val, idx) => (
                  <div key={idx} className="bg-[#F6F5F2] p-5 lg:p-6 rounded-3xl border border-[#EBEBEB] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 transition-all duration-500 cursor-default flex items-center justify-center text-center">
                    <p className="text-[15px] lg:text-[16px] font-medium text-[#1A1A1A]">{val}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
