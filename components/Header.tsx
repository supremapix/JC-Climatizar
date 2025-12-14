import React, { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Style change on scroll
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show logic (only on scroll down significantly)
      if (currentScrollY > lastScrollY && currentScrollY > 500) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu when route changes or scrolling
  useEffect(() => {
    const handleResize = () => setIsMobileMenuOpen(false);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 animate-slideDown ${
        isScrolled || isMobileMenuOpen ? 'bg-jc-navy shadow-[0_5px_30px_rgba(0,0,0,0.3)]' : 'bg-jc-navy/95 backdrop-blur-md'
      } ${isHidden && !isMobileMenuOpen ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className={`container mx-auto px-4 md:px-8 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        
        <a href="/" className="flex-shrink-0 group animate-fadeInScale z-50 relative">
          {/* Logo scales slightly on mobile to save space */}
          <div className="scale-90 md:scale-100 origin-left">
            <Logo className="transition-transform duration-300 group-hover:scale-105 group-hover:rotate-2" />
          </div>
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

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-white text-3xl focus:outline-none z-50 p-2 active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir Menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-jc-navy/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
        }`}
      >
        <div className="flex flex-col w-full max-w-xs gap-6 p-4">
          {NAVIGATION_LINKS.map((link, idx) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-xl font-bold text-center py-3 border-b border-white/10 hover:text-jc-gold transition-colors animate-fadeInUp"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {link.name}
            </a>
          ))}
           <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold text-jc-navy text-center py-4 rounded-xl font-black text-lg mt-4 shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <i className="fab fa-whatsapp"></i> Falar no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;