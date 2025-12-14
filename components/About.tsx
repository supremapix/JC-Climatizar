import React, { useEffect, useRef } from 'react';

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Stats Counter Logic
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = entry.target.querySelectorAll('.stat-number');
          counters.forEach((counter) => {
            const target = parseInt(counter.getAttribute('data-target') || '0');
            const duration = 2000; 
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.textContent = Math.ceil(current).toString();
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toString() + "+";
              }
            };
            updateCounter();
          });
          statsObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    // 2. Scroll Reveal Logic
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
        const revealElements = sectionRef.current.querySelectorAll('.reveal');
        revealElements.forEach(el => revealObserver.observe(el));
    }

    return () => {
        statsObserver.disconnect();
        revealObserver.disconnect();
    };
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          <div className="w-full md:w-1/2 reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="/Higienização_e_manutenção_que_fazem_a_diferença_1765726382785.png" 
                alt="Higienização e manutenção que fazem a diferença - JC Climatizar" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-jc-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-0 right-0 bg-jc-gold p-6 md:p-8 rounded-tl-3xl shadow-lg z-10">
                <p className="text-jc-navy font-black text-4xl md:text-5xl leading-none">10<span className="text-2xl md:text-3xl">+</span></p>
                <p className="text-jc-navy font-bold text-xs md:text-sm uppercase tracking-wider mt-1">Anos de<br/>Experiência</p>
              </div>
            </div>
            
            {/* Highlighted Phrase */}
            <div className="mt-6 bg-gradient-to-r from-jc-navy to-jc-navy/90 rounded-2xl p-6 shadow-xl">
              <p className="text-white text-xl md:text-2xl font-bold italic text-center">
                "Higienização e manutenção que fazem a diferença"
              </p>
              <p className="text-jc-gold text-center mt-2 font-semibold">jcclimatizar.pro</p>
            </div>
          </div>

          <div className="w-full md:w-1/2 reveal">
            <h2 className="text-jc-navy font-black text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">
              Excelência em serviços de climatização, do início ao fim.
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed font-light">
              Somos referência em soluções de climatização, unindo tecnologia e expertise técnica para proporcionar o máximo conforto térmico para residências e empresas.
            </p>
            <p className="text-gray-600 text-base mb-8 md:mb-10 leading-relaxed font-light">
              Nossa equipe passa por treinamentos constantes e utiliza ferramentas de última geração, garantindo instalações limpas, seguras e duradouras. Transparência e preço justo são nossos pilares.
            </p>
            
            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-jc-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                 <span className="stat-number text-2xl md:text-3xl font-black text-jc-navy block mb-1 group-hover:text-jc-goldDark transition-colors" data-target="1500">0</span>
                 <span className="text-xs md:text-sm text-gray-500 font-medium uppercase">Projetos Entregues</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-jc-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                 <span className="stat-number text-2xl md:text-3xl font-black text-jc-navy block mb-1 group-hover:text-jc-goldDark transition-colors" data-target="98">0</span>
                 <span className="text-xs md:text-sm text-gray-500 font-medium uppercase">% Satisfação</span>
              </div>
            </div>

            <div className="text-center md:text-left">
                <a href="#contact" className="inline-block bg-jc-navy text-white px-8 py-4 md:px-10 md:py-4 rounded-lg font-bold hover:bg-jc-navy/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-full md:w-auto text-center">
                  Fale com um Especialista
                </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;