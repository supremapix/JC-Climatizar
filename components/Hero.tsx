import React from 'react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" 
          alt="Técnico de ar condicionado" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jc-navy/80 to-jc-navy/60"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center text-white pt-20">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Conforto e Qualidade <br />
          <span className="text-jc-gold">Para Seu Ambiente</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Especialistas em instalação, manutenção e limpeza de ar condicionado. 
          Atendimento residencial e comercial com garantia de serviço.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
            className="bg-jc-gold hover:bg-white text-jc-navy px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] flex items-center justify-center gap-2"
          >
            <i className="fab fa-whatsapp"></i>
            Solicitar Orçamento
          </a>
          <a 
            href="#services"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-jc-navy text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            Nossos Serviços
          </a>
        </div>
      </div>

      {/* Decorative Curve at bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto text-gray-50 fill-current">
          <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;