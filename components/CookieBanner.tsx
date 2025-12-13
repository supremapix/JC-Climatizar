import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given/denied
    const consent = localStorage.getItem('jc_cookie_consent');
    if (!consent) {
      // Delay showing slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('jc_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('jc_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-jc-navy/95 backdrop-blur-md border-t border-jc-gold/30 p-4 md:p-6 z-[10000] shadow-[0_-5px_20px_rgba(0,0,0,0.3)] animate-fadeInUp">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex-1 text-center md:text-left">
          <p className="text-white text-sm md:text-base leading-relaxed">
            <i className="fas fa-cookie-bite text-jc-gold mr-2 text-xl"></i>
            <strong>Respeitamos sua privacidade.</strong> Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site. 
            Ao continuar navegando, você concorda com nossa <a href="#" className="text-jc-gold hover:underline font-bold">Política de Privacidade</a>.
          </p>
        </div>

        <div className="flex gap-3 shrink-0">
          <button 
            onClick={handleDecline}
            className="px-4 py-2 rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 text-sm font-medium transition-colors"
          >
            Recusar
          </button>
          <button 
            onClick={handleAccept}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] font-bold text-sm transition-all transform hover:-translate-y-0.5"
          >
            Aceitar Cookies
          </button>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;