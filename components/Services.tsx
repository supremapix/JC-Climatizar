import React, { useEffect, useRef } from 'react';
import { SERVICES_LIST } from '../constants';

const Services: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove('opacity-0', 'translate-y-12');
              entry.target.classList.add('opacity-100', 'translate-y-0');
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    // Reduced py-24 to py-16 for mobile
    <section id="services" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-jc-navy font-black text-3xl md:text-5xl mb-4 relative inline-block">
            Nossos Serviços
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-jc-gold rounded-full"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4 md:mt-6 text-base md:text-lg px-4">
            Soluções completas com tecnologia de ponta para garantir o clima perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 perspective-1000">
          {SERVICES_LIST.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="bg-white p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-500 ease-out opacity-0 translate-y-12 relative overflow-hidden group preserve-3d md:service-card-hover border border-transparent cursor-pointer active:scale-[0.98]"
            >
              {/* Shining Effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-jc-gold/20 to-transparent transition-all duration-500 group-hover:left-full pointer-events-none z-10"></div>

              <div className="relative z-20">
                <div className="service-icon w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-jc-gold to-jc-goldDark rounded-full flex items-center justify-center text-jc-navy text-2xl md:text-3xl mb-6 md:mb-8 mx-auto shadow-lg transition-transform duration-500">
                  <i className={`fas ${service.icon}`}></i>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-jc-navy mb-3 md:mb-4 group-hover:text-jc-goldDark transition-colors text-center">{service.title}</h3>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed text-center mb-6">
                  {service.description}
                </p>

                <div className="text-center">
                    <button className="px-6 py-2 rounded-full border-2 border-jc-navy text-jc-navy font-semibold text-xs md:text-sm transition-all duration-300 relative overflow-hidden btn-more group-hover:border-jc-gold group-hover:text-jc-navy group-hover:scale-105">
                        <span className="relative z-10">Saiba Mais</span>
                        <div className="absolute inset-0 bg-jc-gold transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0 -z-0"></div>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;