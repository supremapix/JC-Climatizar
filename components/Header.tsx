import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-jc-navy shadow-lg py-2' : 'bg-jc-navy/95 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        <a href="#" className="flex-shrink-0">
          <Logo variant="light" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-white hover:text-jc-gold font-medium transition-colors uppercase text-sm tracking-wider"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold hover:bg-jc-goldDark text-jc-navy px-6 py-2 rounded-full font-bold transition-all transform hover:-translate-y-0.5 shadow-md flex items-center gap-2"
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
              className="text-white hover:text-jc-gold py-2 border-b border-gray-700 last:border-0"
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold text-jc-navy text-center py-3 rounded-lg font-bold mt-2"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;