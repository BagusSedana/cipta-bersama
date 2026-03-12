import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<'prime' | 'lamb' | 'secondary'>('prime');

  const categories = [
    { id: 'prime', label: 'Prime Cut' },
    { id: 'lamb', label: 'Lamb' },
    { id: 'secondary', label: 'Secondary Cut' },
  ] as const;

  const productData = {
    prime: {
      title: 'Our Product',
      subtitle: 'Prime Cut Selection',
      desc: 'Our flagship premium cuts meticulously selected for superior marbling, age, and tenderness. The definitive choice for steakhouse excellence.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=2000', // Verified Raw Cut
      items: ['Tenderloin', 'Striploin', 'T-Bone', 'Chuck Eye Roll', 'Short Rib', 'Sirloin', 'Ribeye', 'Top Sirloin', 'Flat Iron']
    },
    lamb: {
      title: 'Our Product',
      subtitle: 'Premium Lamb Selection',
      desc: 'Exceptional grass-fed lamb sourced from the pristine pastures of New Zealand and Australia, ensuring a clean flavor profile and unmatched tenderness.',
      image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&q=80&w=2000', // Verified Raw Lamb
      items: ['Lamb Rack', 'Lamb Leg', 'Lamb Shoulder', 'Lamb Loin', 'Lamb Shank', 'Lamb Ribs', 'Lamb Flap', 'Lamb Cube', 'Lamb Chops', 'Lamb Rump']
    },
    secondary: {
      title: 'Our Product',
      subtitle: 'Executive Secondary Cuts',
      desc: 'Versatile and immensely flavorful cuts favored by executive chefs for artisanal slow-roasting, gourmet braising, and signature stock preparations.',
      image: 'https://images.unsplash.com/photo-1551028150-64b9f398f678?auto=format&fit=crop&q=80&w=2000', // Verified Raw Secondary
      items: ['Chuck', 'Blade', 'Rump Steak', 'Inter Costal', 'Neck', 'Shin', 'Brisket', 'Flank', 'Tri Tip', 'Knuckle', 'Topside', 'Silverside', 'Rump']
    }
  };

  const activeData = productData[activeCategory];

  return (
    <section id="products" className="py-24 lg:py-40 relative bg-[#FFFFFF]" ref={ref}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-24">
          <motion.h2
            className="text-[#1A1A1A] font-light"
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', letterSpacing: '-0.04em', lineHeight: 1 }}
            initial={{ opacity: 0, x: -30 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <span className="font-normal text-[#1A1A1A]">Superior </span>
            <span className="font-bold text-[#0071C1]">Meat Catalog</span>
          </motion.h2>
          
          <motion.div
            className="flex flex-wrap gap-10 mt-16 border-b border-gray-100"
            initial={{ opacity: 0 }} 
            animate={isInView ? { opacity: 1 } : {}} 
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-6 text-[14px] font-bold tracking-[0.3em] uppercase transition-all duration-500 border-b-2 relative`}
                style={{
                  borderColor: activeCategory === cat.id ? '#0071C1' : 'transparent',
                  color: activeCategory === cat.id ? '#1A1A1A' : '#999999',
                }}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          <div className="order-2 lg:order-1 pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[2px] w-6 bg-[#0071C1]" />
                  <span className="text-[12px] uppercase tracking-[0.3em] text-[#0071C1] font-bold">Category Highlights</span>
                </div>
                <h4 className="text-[40px] lg:text-[56px] font-bold mb-10 text-[#1A1A1A]" style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                  {activeData.subtitle}
                </h4>
                <p className="text-[20px] leading-relaxed text-[#666666] mb-16 max-w-xl font-light" style={{ fontWeight: 300 }}>
                  {activeData.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
                  {activeData.items.map((item, idx) => (
                    <motion.div 
                      key={item} 
                      className="group flex items-center justify-between py-4 border-b border-gray-100 hover:border-[#0071C1]/50 transition-all duration-300"
                    >
                      <span className="text-[17px] font-medium text-[#1A1A1A] group-hover:text-[#0071C1] transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-[500px] lg:h-[800px] overflow-hidden rounded-3xl shadow-xl bg-gray-100 flex items-center justify-center"
              >
                <img
                  src={activeData.image}
                  alt={activeData.subtitle}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
