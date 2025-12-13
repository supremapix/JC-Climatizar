import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const FloatingButtons: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Base classes with responsive sizing (smaller on mobile)
  const baseClasses = "w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex items-center justify-center text-white text-xl md:text-2xl shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_6px_25px_rgba(255,200,0,0.6)] transition-all duration-300 cursor-pointer border-2 border-white/30 z-[9999]";

  return (
    <div className="fixed right-4 bottom-4 md:right-5 md:bottom-5 z-[9999] flex flex-col gap-3">
      {/* WhatsApp - Green Gradient */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${baseClasses} bg-gradient-to-br from-[#25D366] to-[#128C7E]`} 
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Phone - Gold Gradient */}
      <a 
        href={`tel:${COMPANY_INFO.phone}`} 
        className={`${baseClasses} bg-gradient-to-br from-jc-gold to-jc-goldDark text-jc-navy`} 
        aria-label="Ligar"
      >
        <i className="fas fa-phone-alt"></i>
      </a>

      {/* Email - Red Gradient */}
      <a 
        href={`mailto:${COMPANY_INFO.email}`} 
        className={`${baseClasses} bg-gradient-to-br from-jc-red to-jc-redDark`} 
        aria-label="Email"
      >
        <i className="fas fa-envelope"></i>
      </a>

      {/* Back to Top - Navy Gradient */}
      <button 
        onClick={scrollToTop} 
        className={`${baseClasses} bg-gradient-to-br from-jc-navy to-[#0f1729] text-jc-gold transform transition-all duration-300 ${showTopBtn ? 'scale-100 opacity-100' : 'scale-0 opacity-0 h-0 w-0 overflow-hidden m-0 border-0'}`}
        aria-label="Voltar ao topo"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default FloatingButtons;