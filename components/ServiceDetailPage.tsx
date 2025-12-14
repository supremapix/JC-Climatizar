import React, { useEffect } from 'react';
import { COMPANY_INFO, DETAILED_SERVICES } from '../constants';

interface ServiceDetailPageProps {
  id: string;
}

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ id }) => {
  const service = DETAILED_SERVICES.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 text-center">
        <h1 className="text-2xl font-bold">Serviço não encontrado</h1>
        <a href="#/servicos" className="text-jc-gold underline mt-4 block">Voltar para Serviços</a>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-jc-navy text-white overflow-hidden">
        {/* Background Image - Manutenção de ar condicionado */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/instalacao-e-manutencao-ar-condicionado-marmiteiros-1_1765725199587.webp" 
            alt="Manutenção de ar condicionado" 
            className="w-full h-full object-cover opacity-20"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-jc-navy/90 via-jc-navy/85 to-[#0f1729]/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
           <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md mb-6 border border-white/20 shadow-lg animate-fadeInUp">
             <i className={`fas ${service.icon} text-3xl md:text-4xl text-jc-gold`}></i>
           </div>
           
           <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
             {service.title}
           </h1>
           
           <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
             {service.subtitle}
           </p>

           <div className="mt-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#details" 
                className="inline-flex items-center gap-2 text-jc-gold font-bold uppercase tracking-widest hover:text-white transition-colors animate-bounce"
              >
                Saiba Mais <i className="fas fa-chevron-down"></i>
              </a>
           </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section id="details" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            
            {/* Left: Description */}
            <div className="lg:w-1/2">
               <h2 className="text-3xl font-bold text-jc-navy mb-6 border-l-4 border-jc-gold pl-6">
                 Sobre o Serviço
               </h2>
               <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                 {service.description}
               </p>
               <p className="text-gray-600 leading-relaxed mb-8 text-base font-light">
                 {service.longDescription}
               </p>

               <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-jc-navy">
                 <h3 className="font-bold text-xl text-jc-navy mb-6 flex items-center gap-2">
                   <i className="fas fa-check-circle text-green-500"></i> O que está incluído:
                 </h3>
                 <ul className="space-y-4">
                   {service.features.map((feature, idx) => (
                     <li key={idx} className="flex items-start gap-3 text-gray-700">
                       <span className="w-2 h-2 rounded-full bg-jc-gold mt-2 shrink-0"></span>
                       <span className="font-light">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

            {/* Right: CTA & Image Card */}
            <div className="lg:w-1/2 w-full sticky top-32">
               <div className="bg-white rounded-3xl overflow-hidden shadow-2xl group">
                 <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white font-bold text-lg">
                      <i className="fas fa-certificate text-jc-gold mr-2"></i> Qualidade Garantida
                    </div>
                 </div>
                 
                 <div className="p-8 md:p-10 text-center">
                    <h3 className="text-2xl font-black text-jc-navy mb-2">Precisa deste serviço?</h3>
                    <p className="text-gray-500 mb-8 font-light">
                      Solicite um orçamento sem compromisso. Nossa equipe atende em todo o Sudoeste do Paraná.
                    </p>

                    <a 
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para *${service.title}*`}
                      target="_blank"
                      className="w-full block bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-black py-4 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all text-lg mb-4"
                    >
                      <i className="fab fa-whatsapp text-xl mr-2"></i> {service.ctaText.toUpperCase()}
                    </a>
                    
                    <p className="text-xs text-gray-400">
                      <i className="fas fa-shield-alt"></i> Resposta rápida em horário comercial.
                    </p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED NAV */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-10">Outros Serviços</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {DETAILED_SERVICES.filter(s => s.id !== id).map(other => (
              <a 
                key={other.id}
                href={`#/servicos/${other.id}`}
                className="bg-white hover:bg-jc-navy hover:text-white text-gray-600 px-6 py-3 rounded-full font-bold shadow-sm hover:shadow-lg transition-all border border-gray-200"
              >
                {other.title}
              </a>
            ))}
             <a 
                href="#/servicos"
                className="bg-transparent border-2 border-jc-navy text-jc-navy hover:bg-jc-navy hover:text-white px-6 py-3 rounded-full font-bold transition-all"
              >
                Ver Todos
              </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;