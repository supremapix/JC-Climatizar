import React, { useEffect, useRef } from 'react';
import Logo from './Logo';

const About: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
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
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe JC Climatizar" 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-jc-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              {/* Experience Badge */}
              <div className="absolute bottom-0 right-0 bg-jc-gold p-8 rounded-tl-3xl shadow-lg z-10">
                <p className="text-jc-navy font-black text-5xl leading-none">10<span className="text-3xl">+</span></p>
                <p className="text-jc-navy font-bold text-sm uppercase tracking-wider mt-1">Anos de<br/>Experiência</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-jc-navy font-black text-3xl md:text-5xl mb-8 leading-tight">
              Excelência em <br/>
              <div className="mt-4 inline-block transform origin-left hover:scale-105 transition-transform duration-300">
                <Logo className="h-20" />
              </div>
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos referência em soluções de climatização, unindo tecnologia e expertise técnica para proporcionar o máximo conforto térmico para residências e empresas.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Nossa equipe passa por treinamentos constantes e utiliza ferramentas de última geração, garantindo instalações limpas, seguras e duradouras. Transparência e preço justo são nossos pilares.
            </p>
            
            {/* Animated Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6 mb-10">
              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-jc-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                 <span className="stat-number text-3xl font-black text-jc-navy block mb-1 group-hover:text-jc-goldDark transition-colors" data-target="1500">0</span>
                 <span className="text-sm text-gray-500 font-medium uppercase">Projetos Entregues</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border-l-4 border-jc-gold shadow-sm group hover:bg-white hover:shadow-md transition-all">
                 <span className="stat-number text-3xl font-black text-jc-navy block mb-1 group-hover:text-jc-goldDark transition-colors" data-target="98">0</span>
                 <span className="text-sm text-gray-500 font-medium uppercase">% Satisfação</span>
              </div>
            </div>

            <a href="#contact" className="inline-block bg-jc-navy text-white px-10 py-4 rounded-lg font-bold hover:bg-jc-navy/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
              Fale com um Especialista
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;