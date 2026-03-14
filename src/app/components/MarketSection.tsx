import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function MarketSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectors = [
    { name: 'Restaurant', percentage: 30, desc: 'Fine Dining & Casual Cluster' },
    { name: 'Hotel', percentage: 35, desc: 'International Luxury Hospitality' },
    { name: 'Cafe', percentage: 20, desc: 'High-Volume Specialty Bistro' },
    { name: 'Catering', percentage: 15, desc: 'Premium Events & MICE' },
  ];

  return (
    <section className="py-24 lg:py-44 bg-[#FBFBF9] text-[#1A1A1A] relative overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 lg:mb-40">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.22,1,0.36,1] }}>
              <div className="border border-[#E5E5E5] rounded-full px-5 py-2 inline-flex items-center mb-8">
                <span className="text-[14px] font-medium text-[#1A1A1A]">Market Reach</span>
              </div>
            <h2 className="font-light text-[#1A1A1A] mb-8" style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Supporting the <br/><span className="font-medium text-[#0071C1]">entire F&B ecosystem</span>
            </h2>
            <p className="text-[18px] lg:text-[20px] leading-[1.6] text-[#555555] font-light max-w-lg mb-10">
              We define the supply chain for Indonesia's culinary vanguard.
            </p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-medium text-[15px] hover:bg-[#0071C1] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Mulai Kemitraan
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="bg-transparent text-[#1A1A1A] border border-[#E5E5E5] px-8 py-3 rounded-full font-medium text-[15px] hover:border-[#1A1A1A] hover:shadow-sm hover:-translate-y-0.5 transition-all duration-300">
                Hubungi Kami
              </button>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-[40px] shadow-2xl bg-gray-100"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* VERIFIED CULINARY IMAGE */}
            <img 
              src="/allMenu.webp" 
              alt="Culinary Market Reach" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={sector.name}
              className="bg-[#F6F5F2] p-8 rounded-3xl border border-[#EBEBEB] flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10 transition-all duration-500 cursor-default"
              style={{ minHeight: '280px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
            >
              <div className="mb-8">
                <p className="text-[15px] font-medium text-[#555555]">{sector.desc}</p>
              </div>
              <div className="mt-auto">
                <div className="flex items-baseline gap-1 mb-2">
                  <h4 className="text-[44px] font-medium text-[#1A1A1A] leading-none">{sector.percentage}</h4>
                  <span className="text-[20px] font-medium text-[#1A1A1A] leading-none">%</span>
                </div>
                <p className="text-[15px] font-medium text-[#555555] capitalize">{sector.name}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
