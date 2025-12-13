import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

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
              {/* Optimized Image with Picture Tag */}
              <picture>
                  <source 
                    media="(max-width: 768px)" 
                    srcSet="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=70&w=600&auto=format&fit=crop&fm=webp" 
                    type="image/webp" 
                  />
                  <source 
                    media="(min-width: 769px)" 
                    srcSet="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop&fm=webp" 
                    type="image/webp" 
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                    alt="Equipe JC Climatizar" 
                    className="w-full h-64 md:h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="800"
                    height="600"
                  />
              </picture>
              
              <div className="absolute inset-0 bg-jc-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-0 right-0 bg-jc-gold p-6 md:p-8 rounded-tl-3xl shadow-lg z-10">
                <p className="text-jc-navy font-black text-4xl md:text-5xl leading-none">10<span className="text-2xl md:text-3xl">+</span></p>
                <p className="text-jc-navy font-bold text-xs md:text-sm uppercase tracking-wider mt-1">Anos de<br/>Experiência</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 reveal">
            <h2 className="text-jc-navy font-black text-3xl md:text-5xl mb-6 md:mb-8 leading-tight">
              Excelência em <br/>
              <div className="mt-2 md:mt-4 inline-block transform origin-left hover:scale-105 transition-transform duration-300">
                <Logo className="h-16 md:h-20" />
              </div>
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