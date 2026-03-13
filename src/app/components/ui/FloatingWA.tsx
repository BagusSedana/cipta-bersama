import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export function FloatingWA() {
  const whatsappUrl = "https://wa.me/6281294948588?text=Halo%20Cipta%20Bersama,%20saya%20ingin%20bertanya%20tentang%20produk%20daging%20premium.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25 group-hover:hidden" />
      <MessageCircle className="w-6 h-6 relative z-10" />
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 bg-[#1A1A1A] text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#1A1A1A] rotate-45" />
      </div>
    </motion.a>
  );
}
