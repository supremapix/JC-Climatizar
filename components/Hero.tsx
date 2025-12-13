import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const PHRASES = [
  "Climatização Profissional em Curitiba",
  "Conforto Térmico para Sua Casa ou Empresa",
  "Instalação e Manutenção de Ar Condicionado",
  "Atendimento 24 Horas em Curitiba e Região",
  "Especialistas em Climatização Há Mais de 10 Anos"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = PHRASES[phraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(50);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, typingSpeed]);

  return (
    <section id="hero" className="relative h-screen min-h-[650px] flex items-center justify-center bg-[#0f1729] overflow-hidden">
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(2px_2px_at_20%_30%,rgba(255,215,0,0.3),transparent),radial-gradient(2px_2px_at_60%_70%,rgba(255,215,0,0.2),transparent)] bg-[length:200%_200%] animate-float"></div>
      </div>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="Técnico de ar condicionado" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-jc-navy via-jc-navy/95 to-[#0f1729]/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
        <div className="mb-8 inline-block bg-jc-gold/10 backdrop-blur-sm border border-jc-gold/30 rounded-full px-6 py-2 shadow-[0_0_15px_rgba(255,215,0,0.2)]">
            <span className="text-jc-gold font-bold uppercase tracking-widest text-sm">
                <i className="fas fa-star mr-2"></i> Qualidade Premium
            </span>
        </div>
        
        {/* Typewriter Text Area - Fixed Height to prevent jumping */}
        <div className="min-h-[120px] md:min-h-[160px] flex items-center justify-center mb-6">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg max-w-4xl mx-auto">
              <span className="typewriter-cursor text-jc-gold text-shadow-sm">
                {text}
              </span>
            </h1>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Garantia de conforto e ar puro para sua família. Técnicos certificados e atendimento rápido.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="group relative px-10 py-5 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-bold text-lg rounded-full transition-all transform hover:-translate-y-1 overflow-hidden animate-pulse-slow shadow-[0_10px_30px_rgba(255,215,0,0.4)] hover:shadow-[0_15px_40px_rgba(255,215,0,0.6)]"
          >
             <span className="relative z-10 flex items-center gap-2 uppercase tracking-wide">
                <i className="fab fa-whatsapp text-2xl"></i>
                Solicitar Orçamento
            </span>
            <div className="absolute inset-0 bg-white/40 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
          </a>
          
          <a 
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-jc-gold text-white hover:text-jc-gold font-bold text-lg rounded-full transition-all backdrop-blur-sm hover:bg-white/5"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 w-full z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-gray-50 fill-current">
          <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;