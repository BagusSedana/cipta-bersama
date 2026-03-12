import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Clients', id: 'clients' },
    { label: 'Facility', id: 'warehouse' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5'
            : 'bg-[#F4F9FF]/80 backdrop-blur-sm'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-5">
              <svg width="42" height="32" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <path d="M 28 8 A 12 12 0 1 0 28 32" stroke="#0071C1" strokeWidth="7" strokeLinecap="square" />
                <path d="M 18 6 H 38 A 9 9 0 0 1 38 20 H 22" stroke="#8DC63F" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M 18 34 H 40 A 9 9 0 0 0 40 20 H 22" stroke="#8DC63F" strokeWidth="6" strokeLinecap="square" strokeLinejoin="miter" />
                <path d="M 18 6 V 34" stroke="#8DC63F" strokeWidth="6" strokeLinecap="square" />
              </svg>
              <div className="flex flex-col justify-center leading-[1.05] text-left">
                <span className="text-[17px] font-semibold text-[#1A1A1A] tracking-[0.05em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cipta</span>
                <span className="text-[17px] font-semibold text-[#1A1A1A] tracking-[0.05em]" style={{ fontFamily: 'DM Sans, sans-serif' }}>Bersama</span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[13px] text-[#1A1A1A]/55 hover:text-[#1A1A1A] transition-colors duration-200"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400 }}
                >
                  {link.label}
                </button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="bg-[#0071C1] text-white px-5 py-2 text-[13px] rounded-full hover:bg-[#005a9c] transition-all duration-200"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Learn More
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#1A1A1A]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors text-2xl"
                  style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="mt-4 bg-[#1A1A1A] text-white px-8 py-3 rounded-full text-[14px]"
                style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 500 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
