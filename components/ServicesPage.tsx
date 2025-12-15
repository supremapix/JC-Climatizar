import React, { useEffect, useRef } from 'react';
import { COMPANY_INFO, DETAILED_SERVICES } from '../constants';

const ServicesPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
        const revealElements = sectionRef.current.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen" ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative bg-jc-navy text-white py-20 overflow-hidden">
        {/* Background Image - Manutenção de ar condicionado */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/instalacao-e-manutencao-ar-condicionado-marmiteiros-1_1765725199587.webp" 
            alt="Manutenção de ar condicionado" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-jc-navy/90 via-jc-navy/85 to-[#0f1729]/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center reveal">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
                Nossos <span className="text-jc-gold">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                Clique em um serviço abaixo para ver todos os detalhes, preços e benefícios.
            </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {DETAILED_SERVICES.map((service, index) => (
                    <a 
                        href={`/servicos/${service.id}`}
                        key={index} 
                        className="group flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 reveal"
                    >
                        {/* Image Side - Optimized */}
                        <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative bg-gray-200">
                             <div className="absolute inset-0 bg-jc-navy/20 group-hover:bg-transparent transition-colors z-10"></div>
                             <img 
                                src={service.heroImage}
                                alt={service.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                loading="lazy"
                             />
                             <div className="absolute bottom-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full text-jc-navy shadow-lg">
                                <i className={`fas ${service.icon} text-xl`}></i>
                             </div>
                        </div>

                        {/* Content Side */}
                        <div className="md:w-3/5 p-8 flex flex-col justify-center">
                            <h2 className="text-2xl font-black text-jc-navy mb-2 group-hover:text-jc-goldDark transition-colors">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 mb-6 line-clamp-3 font-light leading-relaxed">
                                {service.description}
                            </p>
                            
                            <div className="mt-auto">
                                <span className="inline-flex items-center gap-2 text-jc-navy font-bold uppercase text-sm tracking-wider group-hover:text-jc-goldDark">
                                    Ver Detalhes Completos <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
                                </span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="py-20 bg-[#1a2844] text-white relative overflow-hidden reveal">
          <div className="absolute top-0 right-0 w-96 h-96 bg-jc-gold rounded-full filter blur-[150px] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
              <div className="max-w-4xl mx-auto">
                  <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-jc-gold font-bold mb-6 border border-jc-gold/30">
                      🏢 LINHA COMERCIAL E INDUSTRIAL
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6">Projetos para Empresas</h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light">
                      Atendemos escritórios, lojas, mercados, indústrias e grandes empreendimentos. 
                      Oferecemos contratos de manutenção (PMOC) para garantir que sua empresa esteja 
                      em conformidade com a Lei 13.589/2018.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <i className="fas fa-file-contract text-4xl text-jc-gold mb-4"></i>
                          <h3 className="font-bold text-xl mb-2">Contratos Mensais</h3>
                          <p className="text-sm text-gray-400">Atendimento prioritário e preventivo.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <i className="fas fa-file-signature text-4xl text-jc-gold mb-4"></i>
                          <h3 className="font-bold text-xl mb-2">Laudos e ART</h3>
                          <p className="text-sm text-gray-400">Responsabilidade técnica garantida.</p>
                      </div>
                      <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                          <i className="fas fa-project-diagram text-4xl text-jc-gold mb-4"></i>
                          <h3 className="font-bold text-xl mb-2">Projetos VRF/VRV</h3>
                          <p className="text-sm text-gray-400">Sistemas de alta eficiência energética.</p>
                      </div>
                  </div>

                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Gostaria de falar sobre um projeto comercial`}
                    className="inline-block bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-black py-4 px-10 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:scale-105 transition-transform"
                  >
                      FALAR COM ENGENHARIA
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;