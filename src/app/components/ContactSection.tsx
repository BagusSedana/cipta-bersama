import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const company = formData.get('company');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const whatsappMessage = `Halo Cipta Bersama,%0A%0A*Inquiry Baru dari Website:*%0A%0A*Nama:* ${name}%0A*Perusahaan:* ${company}%0A*Email:* ${email}%0A*No. Telp:* ${phone}%0A%0A*Pesan:*%0A${message}`;
    
    window.open(`https://wa.me/6281294948588?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden bg-white text-[#1A1A1A]" ref={ref}>
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Sleek Layout Split */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-4">
            <div>
              <motion.div className="flex items-center gap-3 mb-8" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
                <div className="w-12 h-[1px] bg-[#0071C1] opacity-50" />
                <p className="text-[12px] uppercase tracking-[0.4em] text-[#0071C1] font-sans font-bold">
                   Partnership
                </p>
              </motion.div>
              
              <motion.h2 
                className="text-[#1A1A1A] font-light mx-auto mb-8"
                style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}
              >
                Corporate <br/><span className="font-bold text-[#0071C1]">Inquiry</span>
              </motion.h2>

              <motion.p
                className="text-[18px] leading-relaxed text-[#666666] mb-16 max-w-sm"
                style={{ fontWeight: 300 }}
                initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ready to elevate your culinary offerings? Provide us with your details and our team will get in touch to discuss wholesale opportunities.
              </motion.p>
            </div>
            
            {/* Promo Card Minimalist Update - Refined for Light Theme */}
            <motion.div 
              className="border-t border-b border-gray-100 py-10 flex flex-col gap-6"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="font-bold text-[24px] text-[#1A1A1A] tracking-tight">Mitra B2B Eksklusif</div>
              <p className="text-[18px] leading-[1.6] text-[#666666] font-light">
                 Fasilitas <span className="text-[#0071C1] font-bold">Pembayaran Tempo</span> 14 Hari.
              </p>
            </motion.div>
          </div>

          {/* High-End Minimalist Form - Refined for Light Theme */}
          <motion.div 
            className="lg:col-span-7 py-4 relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-16 relative z-10 w-full">
              <div className="grid xl:grid-cols-2 gap-16 xl:gap-12">
                <div className="relative group">
                  <input type="text" id="name" name="name" required className="peer w-full bg-transparent border-b border-gray-200 py-2 text-[18px] text-[#1A1A1A] outline-none transition-colors focus:border-[#0071C1] placeholder-transparent font-light" placeholder="Full Name" />
                  <label htmlFor="name" className="absolute left-0 top-2 text-[14px] text-gray-400 cursor-text transition-all peer-focus:-top-6 peer-focus:text-[11px] peer-focus:text-[#0071C1] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-[11px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#0071C1]">Full Name</label>
                </div>
                <div className="relative group">
                  <input type="text" id="company" name="company" required className="peer w-full bg-transparent border-b border-gray-200 py-2 text-[18px] text-[#1A1A1A] outline-none transition-colors focus:border-[#0071C1] placeholder-transparent font-light" placeholder="Company Name" />
                  <label htmlFor="company" className="absolute left-0 top-2 text-[14px] text-gray-400 cursor-text transition-all peer-focus:-top-6 peer-focus:text-[11px] peer-focus:text-[#0071C1] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-[11px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#0071C1]">Company Name</label>
                </div>
              </div>

              <div className="grid xl:grid-cols-2 gap-16 xl:gap-12">
                <div className="relative group">
                  <input type="email" id="email" name="email" required className="peer w-full bg-transparent border-b border-gray-200 py-2 text-[18px] text-[#1A1A1A] outline-none transition-colors focus:border-[#0071C1] placeholder-transparent font-light" placeholder="Email Address" />
                  <label htmlFor="email" className="absolute left-0 top-2 text-[14px] text-gray-400 cursor-text transition-all peer-focus:-top-6 peer-focus:text-[11px] peer-focus:text-[#0071C1] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-[11px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#0071C1]">Email Address</label>
                </div>
                <div className="relative group">
                  <input type="tel" id="phone" name="phone" required className="peer w-full bg-transparent border-b border-gray-200 py-2 text-[18px] text-[#1A1A1A] outline-none transition-colors focus:border-[#0071C1] placeholder-transparent font-light" placeholder="Phone Number" />
                  <label htmlFor="phone" className="absolute left-0 top-2 text-[14px] text-gray-400 cursor-text transition-all peer-focus:-top-6 peer-focus:text-[11px] peer-focus:text-[#0071C1] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-[11px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#0071C1]">Phone / WhatsApp</label>
                </div>
              </div>

              <div className="relative group pt-4">
                <textarea id="message" name="message" required rows={1} className="peer w-full bg-transparent border-b border-gray-200 py-2 text-[18px] text-[#1A1A1A] outline-none transition-colors focus:border-[#0071C1] placeholder-transparent resize-none font-light min-h-[40px]" placeholder="Message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-2 text-[14px] text-gray-400 cursor-text transition-all peer-focus:-top-6 peer-focus:text-[11px] peer-focus:text-[#0071C1] peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-[11px] peer-valid:uppercase peer-valid:tracking-widest peer-valid:text-[#0071C1]">How can we help you?</label>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="group relative overflow-hidden bg-[#1A1A1A] text-white rounded-full px-12 py-4 text-[13px] uppercase tracking-widest font-bold w-full sm:w-auto mt-6 flex items-center justify-center gap-4 hover:bg-[#0071C1] transition-all duration-300 shadow-xl shadow-gray-200">
                  <span className="relative z-10">Submit Inquiry</span> 
                  <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
