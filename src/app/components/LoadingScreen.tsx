import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hold the loading screen for a short duration
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onLoadingComplete, 800); // Allow time for fade out before unmounting
    }, 1800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#1A1A1A] flex items-center justify-center flex-col"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div 
              className="h-24 w-44 bg-[#0071C1]" 
              style={{ 
                WebkitMaskImage: 'url(/cb.webp)', 
                WebkitMaskSize: 'contain', 
                WebkitMaskRepeat: 'no-repeat', 
                WebkitMaskPosition: 'center',
                maskImage: 'url(/cb.webp)', 
                maskSize: 'contain', 
                maskRepeat: 'no-repeat',
                maskPosition: 'center'
              }} 
              aria-label="Cipta Bersama Logo Loading" 
            />
            
            {/* Elegant Loading Bar */}
            <div className="w-48 h-[2px] bg-[#333333] mt-8 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-[#0071C1] w-full"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
