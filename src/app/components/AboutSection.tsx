import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-28 lg:py-44 relative overflow-hidden bg-white" ref={ref}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
             {/* VERIFIED RAW MEAT IMAGE */}
             <motion.div 
               className="relative w-full h-[400px] lg:h-[600px] overflow-hidden rounded-[32px] shadow-2xl bg-[#EBE9E1]" 
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

          <div className="lg:col-span-8 mt-10 lg:mt-0">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Left Column: Intro & About */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col gap-20"
              >
                <div>
                  <div className="mb-6">
                    <span className="text-[12px] font-medium tracking-widest uppercase text-[#888888] border-b border-[#E5E5E5] pb-2">Welcome</span>
                  </div>
                  <p className="text-[22px] lg:text-[26px] leading-[1.6] text-[#1A1A1A] font-light italic" style={{ letterSpacing: '-0.01em' }}>
                    "At Cipta Bersama Company, we are committed to delivering the highest-quality frozen meat products with freshness you can trust. With a focus on sustainable sourcing, modern processing methods, and strict quality control, we strive to provide products that not only satisfy the palate but also ensure safety and reliability."
                  </p>
                </div>

                <div>
                  <div className="mb-6">
                    <span className="text-[12px] font-medium tracking-widest uppercase text-[#888888] border-b border-[#E5E5E5] pb-2">About Us</span>
                  </div>
                  <p className="text-[16px] xl:text-[17px] leading-[1.8] text-[#666666] font-light">
                    Our company was established in 2008 and offers a wide range of high-quality imported beef and lamb products sourced from the United States, New Zealand, Australia, and Brazil. We are committed to providing maximum satisfaction to our customers. In addition, we also serve the needs of restaurants, modern markets, cafes, and hotels.
                  </p>
                </div>
              </motion.div>

              {/* Right Column: Vision, Mission, Values */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.8, delay: 0.65 }}
                className="flex flex-col gap-14"
              >
                <div>
                  <div className="mb-6">
                     <span className="text-[12px] font-medium tracking-widest uppercase text-[#888888] border-b border-[#E5E5E5] pb-2">Vision & Mission</span>
                  </div>
                  <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">Vision</h5>
                  <p className="text-[16px] xl:text-[17px] leading-[1.8] text-[#666666] font-light mb-10">
                    To become a leading meat supplier company, widely recognized for the consistent quality of its products, well-prepared freshness, and customer trust. We are committed to providing meat that meets premium standards.
                  </p>
                  
                  <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">Mission</h5>
                  <p className="text-[16px] xl:text-[17px] leading-[1.8] text-[#666666] font-light">
                    We strive to provide high-quality meat to all customers, ranging from households and restaurants to the culinary industry, by ensuring that every product goes through a strict selection, sorting, and distribution process in accordance with food safety standards. The company focuses on maintaining the freshness and quality of its meat through modern storage technology and an efficient logistic system.
                  </p>
                </div>
                
                <div className="mt-4">
                  <div className="mb-8">
                    <span className="text-[12px] font-medium tracking-widest uppercase text-[#888888] border-b border-[#E5E5E5] pb-2">Our Value</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 lg:gap-5">
                    {['Professionalism', 'Innovation', 'Quality', 'Customer Satisfaction'].map((val, idx) => (
                      <div key={idx} className="bg-transparent py-4 text-center border-t border-b border-[#EBEBEB]">
                        <p className="text-[14px] lg:text-[15px] text-[#1A1A1A] tracking-wider uppercase font-medium text-xs">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
