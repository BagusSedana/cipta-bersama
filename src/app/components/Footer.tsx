import { useState } from 'react';
import { ArrowRight, Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const footerLinks = [
    {
      title: t.footer.nav.legal,
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookies Settings', href: '#' }
      ]
    }
  ];

  return (
    <footer className="w-full relative overflow-hidden bg-black text-white">

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-16 pb-10 relative z-10">
        
        {/* Top Section: Brand & Links Grid */}
        <div className="grid border-b border-[#222222] pb-16 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand & Newsletter (Col 1-4) */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-5 mb-10">
                <div 
                  className="h-20 w-36 bg-[#0071C1]" 
                  style={{ 
                    WebkitMaskImage: 'url(/cb.webp)', 
                    WebkitMaskSize: 'contain', 
                    WebkitMaskRepeat: 'no-repeat', 
                    maskImage: 'url(/cb.webp)', 
                    maskSize: 'contain', 
                    maskRepeat: 'no-repeat' 
                  }} 
                  aria-label="Cipta Bersama - Premium Meat Supplier Logo" 
                />
              </div>
            </div>

            <div className="w-full">
              <p className="text-[11px] uppercase tracking-widest mb-4 font-bold text-gray-400">{t.footer.newsletter.title}</p>
              <form onSubmit={(e) => e.preventDefault()} className="relative w-full max-w-sm group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.footer.newsletter.placeholder}
                  className="w-full bg-[#0a0a0a] border border-[#333333] rounded-full py-4 pl-6 pr-14 outline-none text-[14px] text-white transition-all focus:border-white placeholder:text-gray-600 font-light"
                 
                  required
                />
                <button 
                  type="submit" 
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>
          </div>

          {/* Links (Col 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 pt-2">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <p className="font-bold text-[11px] mb-8 tracking-[0.2em] uppercase text-gray-500">
                  {section.title}
                </p>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="text-[15px] font-light transition-colors text-gray-300 hover:text-white"
                       
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Direct */}
            <div>
              <p className="font-bold text-[11px] mb-8 tracking-[0.2em] uppercase text-gray-500">
                Contact
              </p>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+6281294948588" className="text-[15px] font-light transition-colors text-gray-300 hover:text-white block">
                    +62 812-9494-8588
                  </a>
                </li>
                <li>
                  <a href="mailto:leo.mattatias@gmail.com" className="text-[15px] font-light transition-colors break-words text-gray-300 hover:text-white block">
                    leo.mattatias@gmail.com
                  </a>
                </li>
                <li>
                  <span className="text-[15px] font-light leading-relaxed block mt-6 text-gray-400">
                    Jalan Raya Kavling DPR No 49<br />Jakarta, Indonesia
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Social */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10">
          <p className="text-[14px] text-gray-500 font-light">
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>
          
          <div className="flex items-center gap-4">
              <a href="https://wa.me/6281294948588" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#0071C1] text-white flex items-center justify-center hover:bg-[#25D366] transition-all" aria-label="Contact us on WhatsApp">
                <Facebook className="w-[18px] h-[18px]" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#0071C1] text-white flex items-center justify-center hover:bg-[#25D366] transition-all" aria-label="Follow us on Instagram">
                <Instagram className="w-[18px] h-[18px]" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-11 h-11 rounded-full bg-[#0071C1] text-white flex items-center justify-center hover:bg-[#25D366] transition-all" aria-label="Connect with us on LinkedIn">
                <Linkedin className="w-[18px] h-[18px]" />
              </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
