import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const PHRASES = [
  "Climatização Profissional em Barracão-PR",
  "Atendemos Todo o Sudoeste do Paraná",
  "Atendemos Santa Catarina e Argentina",
  "Instalação e Manutenção de Ar Condicionado",
  "Cobertura de 200km - Atendimento Rápido",
  "Especialistas em Climatização Há Mais de 10 Anos",
  "🌎 Atendemos na Argentina - Bernardo de Irigoyen",
  "Serviço Internacional - Brasil e Argentina"
];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = PHRASES[phraseIndex];
    let timer: ReturnType<typeof setTimeout>;

    // Configuration - Adjusted for smoother feel
    const typeSpeed = 50;    // Faster typing (was 80)
    const deleteSpeed = 25;  // Faster deleting (was 40)
    const pauseTime = 2500;  // Longer pause to read (was 2000)

    if (isDeleting) {
      if (text === '') {
        // Finished deleting, switch to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      } else {
        // Deleting characters
        timer = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (text === currentPhrase) {
        // Finished typing, pause then delete
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        // Typing characters
        timer = setTimeout(() => {
          setText(currentPhrase.slice(0, text.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    // Changed min-h to 100dvh for better mobile browser support
    <section id="hero" className="relative h-[100dvh] min-h-[600px] flex items-center justify-center bg-[#0f1729] overflow-hidden">
      
      {/* Animated Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none hero-particles"></div>

      {/* Background Image with Overlay - Manutenção de ar condicionado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/stock_images/air_conditioning_mai_034b1531.jpg" 
          alt="Manutenção de ar condicionado" 
          className="w-full h-full object-cover object-center opacity-15 transition-opacity duration-700"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-jc-navy via-jc-navy/95 to-[#0f1729]/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white pt-20 md:pt-0">
        <div className="flex flex-wrap justify-center gap-3 mb-6 md:mb-8">
            <span className="inline-block bg-jc-gold/10 backdrop-blur-sm border border-jc-gold/30 rounded-full px-4 py-1.5 md:px-6 md:py-2 shadow-[0_0_15px_rgba(255,215,0,0.2)] text-jc-gold font-bold uppercase tracking-widest text-xs md:text-sm">
                <i className="fas fa-map-marker-alt mr-2"></i> Barracão e Sudoeste do PR
            </span>
             <span className="inline-block px-4 py-1.5 md:px-6 md:py-2 rounded-full shadow-[0_0_15px_rgba(116,172,223,0.4)] text-white uppercase tracking-widest text-xs md:text-sm badge-international">
                🌎 Atendemos na Argentina
            </span>
        </div>
        
        {/* Typewriter Text Area */}
        {/* Fixed height to prevent layout shifts. Flex center to align text in the middle of the box. */}
        <div className="h-[140px] sm:h-[160px] md:h-[200px] flex items-center justify-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-lg max-w-5xl mx-auto px-2">
              <span className="typewriter-text text-jc-gold text-shadow-sm min-h-[1.2em] inline-block">
                {text}
                {/* Non-breaking space to keep cursor height when text is empty is handled by min-h on span, 
                    but adding a space or pipe can help if needed. CSS border handles cursor. */}
              </span>
            </h1>
        </div>
        
        <p className="text-base md:text-xl text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-light px-4">
          Especialistas em Ar Condicionado na Região de Barracão. Atendimento no Sudoeste do Paraná com raio de 200km.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="w-full sm:w-auto group relative px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-bold text-base md:text-lg rounded-full transition-all transform hover:-translate-y-1 overflow-hidden animate-pulse-slow shadow-lg"
          >
             <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wide">
                <i className="fab fa-whatsapp text-xl md:text-2xl"></i>
                Solicitar Orçamento
            </span>
            <div className="absolute inset-0 bg-white/50 rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500 opacity-30"></div>
          </a>
          
          <a 
            href="#coverage"
            className="w-full sm:w-auto px-8 py-3 md:px-8 md:py-4 bg-white/5 border-2 border-white/20 hover:border-jc-gold text-white hover:text-jc-gold font-bold text-base md:text-lg rounded-full transition-all backdrop-blur-sm hover:bg-white/5 text-center"
          >
            Ver Cidades Atendidas
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