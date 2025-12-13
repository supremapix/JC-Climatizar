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

  const btnClasses = "w-[60px] h-[60px] rounded-full bg-gradient-to-br from-jc-gold to-jc-goldDark text-jc-navy flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer border-2 border-white/20";

  return (
    <div className="fixed right-5 bottom-5 z-[9999] flex flex-col gap-3">
      {/* WhatsApp */}
      <a 
        href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={btnClasses} 
        aria-label="WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Phone */}
      <a 
        href={`tel:${COMPANY_INFO.phone}`} 
        className={btnClasses} 
        aria-label="Ligar"
      >
        <i className="fas fa-phone-alt"></i>
      </a>

      {/* Email */}
      <a 
        href={`mailto:${COMPANY_INFO.email}`} 
        className={btnClasses} 
        aria-label="Email"
      >
        <i className="fas fa-envelope"></i>
      </a>

      {/* Back to Top */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          className={`${btnClasses} bg-jc-navy text-white hover:bg-jc-navy/90`} 
          aria-label="Voltar ao topo"
          style={{ background: '#1a2844', color: '#FFD700' }}
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;