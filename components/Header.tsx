import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background and shadow logic
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 animate-slideDown ${
        isScrolled ? 'bg-jc-navy shadow-[0_5px_30px_rgba(0,0,0,0.3)] py-2' : 'bg-jc-navy/95 py-4 backdrop-blur-md'
      } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        <a href="#" className="flex-shrink-0 group">
          <Logo variant="light" className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white font-medium transition-colors uppercase text-sm tracking-wider relative py-2 overflow-hidden group"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[3px] bg-gradient-to-r from-jc-gold to-jc-goldDark transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5 rounded-full"></span>
            </a>
          ))}
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold hover:bg-jc-goldDark text-jc-navy px-6 py-2 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2 hover:shadow-[0_0_15px_rgba(255,215,0,0.5)]"
          >
            <i className="fab fa-whatsapp"></i>
            Orçamento
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-jc-navy border-t border-gray-700 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col p-4 gap-4">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-jc-gold py-2 border-b border-gray-700 last:border-0 font-medium"
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold text-jc-navy text-center py-3 rounded-lg font-bold mt-2 shadow-lg"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;