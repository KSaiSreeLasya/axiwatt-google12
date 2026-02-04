
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { View } from '../App';

interface NavbarProps {
  onOpenConsultation: () => void;
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; view: View }[] = [
    { label: 'Home', view: 'home' },
    { label: 'About', view: 'about' },
    { label: 'Products', view: 'products' },
    { label: 'Technology', view: 'technology' },
    { label: 'Process', view: 'process' },
    { label: 'Partners', view: 'partners' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-8 transition-all duration-700 ${
        scrolled ? 'bg-white/95 backdrop-blur-xl py-5 shadow-sm border-b border-[#e8e4df]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-16">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('home')} 
            className="text-3xl md:text-4xl font-serif tracking-widest luxury-text-gradient cursor-pointer outline-none"
          >
            AXIWATT
          </motion.button>
          
          <div className="hidden xl:flex items-center gap-10 text-[12px] tracking-[0.25em] uppercase font-semibold text-[#635e5a]">
            {navItems.map((item) => (
              <motion.button
                key={item.view}
                whileHover={{ y: -1, color: '#b9975b' }}
                onClick={() => onNavigate(item.view)}
                className={`transition-colors px-1 py-1 relative ${
                  currentView === item.view ? 'text-[#2c2825]' : 'text-[#635e5a]'
                }`}
              >
                {item.label}
                {currentView === item.view && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#b9975b]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: '#2c2825', color: '#fff' }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpenConsultation}
          className="group relative px-8 py-3.5 text-[12px] tracking-[0.2em] uppercase overflow-hidden transition-all duration-500 border border-[#dcd7d0] font-bold text-[#2c2825]"
        >
          <span className="relative z-10">Private Consultation</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};
