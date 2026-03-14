import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function AboutSection() {
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
               className="relative w-full h-[400px] lg:h-[650px] overflow-hidden rounded-[32px] shadow-2xl bg-[#EBE9E1]" 
               initial={{ opacity: 0, scale: 0.9 }} 
               animate={isInView ? { opacity: 1, scale: 1 } : {}} 
               transition={{ duration: 1.2, delay: 0.4 }}
             >
                <img 
                  src="/welcome.webp" 
                  alt="Cipta Bersama - Premium Meat Supplier Jakarta" 
                  className="w-full h-full object-cover"
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
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">Welcome</span>
              </div>
              <p className="text-[24px] lg:text-[28px] leading-[1.6] text-[#1A1A1A] font-light italic" style={{ letterSpacing: '-0.01em' }}>
                "At Cipta Bersama Company, we are committed to delivering the highest-quality frozen meat products with freshness you can trust. With a focus on sustainable sourcing, modern processing methods, and strict quality control, we strive to provide products that not only satisfy the palate but also ensure safety and reliability."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={isInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-8">
                <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">About Us</span>
              </div>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light">
                Our company was established in 2008 and offers a wide range of high-quality imported beef and lamb products sourced from the United States, New Zealand, Australia, and Brazil. We are committed to providing maximum satisfaction to our customers. In addition, we also serve the needs of restaurants, modern markets, cafes, and hotels.
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
                  <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">Vision & Mission</span>
              </div>
              <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">Vision</h5>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light mb-10">
                To become a leading meat supplier company, widely recognized for the consistent quality of its products, well-prepared freshness, and customer trust. We are committed to providing meat that meets premium standards.
              </p>
              
              <h5 className="font-medium text-[#1A1A1A] mb-3 text-[18px]">Mission</h5>
              <p className="text-[16px] xl:text-[18px] leading-[1.8] text-[#666666] font-light">
                We strive to provide high-quality meat to all customers, ranging from households and restaurants to the culinary industry, by ensuring that every product goes through a strict selection, sorting, and distribution process in accordance with food safety standards. The company focuses on maintaining the freshness and quality of its meat through modern storage technology and an efficient logistic system.
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
            <div className="relative w-full h-[250px] lg:h-[320px] rounded-[24px] overflow-hidden mb-10 shadow-lg bg-[#EBE9E1]">
              <img 
                src="/visi.webp" 
                alt="Premium Quality Meat Preparation" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-10">
              <span className="text-[12px] font-bold uppercase tracking-[0.3em] text-[#0071C1]">Our Value</span>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-5">
              {['Professionalism', 'Innovation', 'Quality', 'Customer Satisfaction'].map((val, idx) => (
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
