import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1000&auto=format&fit=crop" 
                alt="Equipe JC Climatizar" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 right-0 bg-jc-gold p-6 rounded-tl-3xl">
                <p className="text-jc-navy font-bold text-4xl">10+</p>
                <p className="text-jc-navy font-semibold text-sm uppercase">Anos de Experiência</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-jc-navy font-bold text-3xl md:text-4xl mb-6">
              Sobre a <span className="text-jc-gold bg-jc-navy px-2">JC Climatizar</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Somos uma empresa especializada em soluções de climatização, comprometida em levar conforto e bem-estar para sua casa ou empresa.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Com uma equipe técnica altamente qualificada, trabalhamos com as melhores marcas do mercado e seguimos rigorosos padrões de qualidade na instalação, manutenção e higienização de aparelhos de ar condicionado. Nosso foco é a satisfação total do cliente, oferecendo agilidade, transparência e preço justo.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Técnicos Certificados",
                "Garantia nos Serviços",
                "Atendimento Personalizado",
                "Ferramentas de Alta Tecnologia"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-jc-navy font-medium">
                  <i className="fas fa-check-circle text-jc-gold text-xl"></i>
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contact" className="inline-block bg-jc-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-jc-navy/90 transition-colors">
              Fale Conosco
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;