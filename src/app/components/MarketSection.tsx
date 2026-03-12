import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function MarketSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectors = [
    { name: 'Restaurant', percentage: 35, desc: 'Fine Dining & Casual Cluster' },
    { name: 'Hotel', percentage: 33, desc: 'International Luxury Hospitality' },
    { name: 'Cafe', percentage: 20, desc: 'High-Volume Specialty Bistro' },
    { name: 'Catering', percentage: 12, desc: 'Premium Events & MICE' },
  ];

  return (
    <section className="py-24 lg:py-44 bg-[#FAFAFA] text-[#1A1A1A] relative overflow-hidden" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-24 lg:mb-40">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.22,1,0.36,1] }}>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-12 bg-[#0071C1]" />
              <p className="text-[13px] uppercase tracking-[0.5em] font-bold text-[#0071C1]">
                Market Reach
              </p>
            </div>
            <h2 className="font-light text-[#1A1A1A] mb-10" style={{ fontSize: 'clamp(3rem, 5.5vw, 5.5rem)', letterSpacing: '-0.04em', lineHeight: 1 }}>
              Supporting the <br/><span className="font-bold text-[#0071C1]">entire F&B ecosystem</span>
            </h2>
            <p className="text-[18px] lg:text-[22px] leading-[1.8] text-[#555555] font-light max-w-xl">
              We define the supply chain for Indonesia's culinary vanguard.
            </p>
          </motion.div>
          
          <motion.div 
            className="relative h-[400px] lg:h-[550px] overflow-hidden rounded-[40px] shadow-2xl bg-gray-100"
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={isInView ? { opacity: 1, scale: 1 } : {}} 
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            {/* VERIFIED CULINARY IMAGE */}
            <img 
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=2000" 
              alt="Culinary Market Reach" 
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, idx) => (
            <motion.div 
              key={sector.name}
              className="bg-white p-12 lg:p-14 flex flex-col justify-between group rounded-[32px] border border-gray-100 shadow-sm transition-all duration-300"
              style={{ minHeight: '300px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + idx * 0.15 }}
            >
              <div>
                <p className="text-[12px] tracking-[0.3em] font-bold text-[#999999] uppercase mb-4 tracking-widest">{sector.name}</p>
                <p className="text-[16px] text-[#666666] font-light">{sector.desc}</p>
              </div>
              <div className="flex items-end gap-3 mt-12">
                <span className="text-[64px] lg:text-[80px] font-bold text-[#1A1A1A]">{sector.percentage}</span>
                <span className="text-[24px] text-[#0071C1] font-bold pb-4 group-hover:scale-125 transition-transform duration-500">%</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
