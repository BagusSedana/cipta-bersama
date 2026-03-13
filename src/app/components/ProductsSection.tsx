import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

// All product images to preload
const ALL_IMAGES = [
  '/daging/Tenderloin.png',
  '/daging/Striploin.png',
  '/daging/T Bone.png',
  '/daging/Chuck Eye Roll.png',
  '/daging/Short Rib.png',
  '/daging/Sirloin.png',
  '/daging/Ribeye.png',
  '/daging/Top Sirloin.png',
  '/daging/Flat Iron.png',
  '/daging/Lamb Rack.png',
  '/daging/Lamb Leg.png',
  '/daging/Lamb Shoulder.png',
  '/daging/Lamb Loin.png',
  '/daging/Lamb Shank.png',
  '/daging/Lamb Ribs.png',
  '/daging/Lamb Flap.png',
  '/daging/Lamb Cube.png',
  '/daging/Lamb Chops.png',
  '/daging/Lamb Rump.png',
  '/daging/Chuck.png',
  '/daging/Blade.png',
  '/daging/Rump Steak.png',
  '/daging/Inter Costal.png',
  '/daging/Neck.png',
  '/daging/Shin.png',
  '/daging/Brisket.png',
  '/daging/Flank.png',
  '/daging/Tri Tip.png',
  '/daging/Knuckle.png',
  '/daging/Topside.png',
  '/daging/Silverside.png',
  '/daging/Rump.png',
];

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState<'prime' | 'lamb' | 'secondary'>('prime');
  const [activeItem, setActiveItem] = useState<string | null>(null);

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
      image: '/daging/Tenderloin.png',
      items: ['Tenderloin', 'Striploin', 'T-Bone', 'Chuck Eye Roll', 'Short Rib', 'Sirloin', 'Ribeye', 'Top Sirloin', 'Flat Iron']
    },
    lamb: {
      title: 'Our Product',
      subtitle: 'Premium Lamb Selection',
      desc: 'Exceptional grass-fed lamb sourced from the pristine pastures of New Zealand and Australia, ensuring a clean flavor profile and unmatched tenderness.',
      image: '/daging/Lamb Rack.png',
      items: ['Lamb Rack', 'Lamb Leg', 'Lamb Shoulder', 'Lamb Loin', 'Lamb Shank', 'Lamb Ribs', 'Lamb Flap', 'Lamb Cube', 'Lamb Chops', 'Lamb Rump']
    },
    secondary: {
      title: 'Our Product',
      subtitle: 'Executive Secondary Cuts',
      desc: 'Versatile and immensely flavorful cuts favored by executive chefs for artisanal slow-roasting, gourmet braising, and signature stock preparations.',
      image: '/daging/Chuck.png',
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
            <span className="font-medium text-[#1A1A1A]">Meat Catalog</span>
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
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveItem(null);
                }}
                className={`pb-6 text-[14px] font-medium tracking-[0.2em] uppercase transition-all duration-500 border-b-2 relative`}
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
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-3 border border-[#E5E5E5] rounded-full px-5 py-2">
                    <span className="text-[12px] uppercase tracking-[0.2em] text-[#1A1A1A] font-medium">Category Highlights</span>
                  </div>
                </div>
                <h4 className="text-[40px] lg:text-[52px] font-medium mb-10 text-[#1A1A1A]" style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                  {activeData.subtitle}
                </h4>
                <p className="text-[20px] leading-relaxed text-[#666666] mb-16 max-w-xl font-light" style={{ fontWeight: 300 }}>
                  {activeData.desc}
                </p>

                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6"
                  variants={{
                    hidden: { opacity: 0 },
                    show: {
                      opacity: 1,
                      transition: { staggerChildren: 0.05 }
                    }
                  }}
                  initial="hidden"
                  animate="show"
                >
                  {activeData.items.map((item, idx) => (
                    <motion.div 
                      key={item} 
                      onClick={() => setActiveItem(item)}
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        show: { opacity: 1, y: 0 }
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex items-center justify-between py-5 border-b border-gray-100 hover:border-[#1A1A1A] cursor-pointer transition-all duration-300 ${activeItem === item ? 'border-[#1A1A1A]' : ''}`}
                    >
                      <span className={`text-[17px] font-normal transition-colors duration-300 ${activeItem === item ? 'text-[#1A1A1A]' : 'text-[#888888] group-hover:text-[#1A1A1A]'}`}>
                        {item}
                      </span>
                      <ChevronRight className={`w-5 h-5 transition-all duration-300 ${activeItem === item ? 'text-[#1A1A1A] translate-x-1' : 'text-gray-200 group-hover:text-[#1A1A1A] group-hover:translate-x-1'}`} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 lg:order-2">
            {/* Hidden preload: semua gambar di-load di background agar switching instan */}
            <div aria-hidden="true" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', opacity: 0, pointerEvents: 'none' }}>
              {ALL_IMAGES.map((src) => (
                <img key={src} src={src} alt="" width={1} height={1} fetchPriority="low" />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem || activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="w-full h-[500px] lg:h-[800px] overflow-hidden rounded-3xl bg-[#F6F5F2] flex items-center justify-center p-0 lg:p-0"
              >
                <img
                  src={activeItem ? `/daging/${activeItem === 'T-Bone' ? 'T Bone' : activeItem}.png` : activeData.image}
                  alt={activeItem || activeData.subtitle}
                  className="w-full h-full object-cover filter drop-shadow-xl hover:scale-110 transition-transform duration-1000 ease-out"
                  width={800}
                  height={800}
                  decoding="sync"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = activeData.image;
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
