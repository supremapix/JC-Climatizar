import React from 'react';
import { COMPANY_INFO, MAIN_CITIES } from '../constants';

interface CityPageProps {
  slug: string;
}

const CityPage: React.FC<CityPageProps> = ({ slug }) => {
  // Find city name from slug, format it nicely
  const foundCity = MAIN_CITIES.find(c => c.slug === slug);
  const cityName = foundCity ? foundCity.name : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const text = `Olá! Gostaria de um orçamento para ${cityName}:
    
    Nome: ${data.nome}
    Telefone: ${data.telefone}
    Serviço: ${data.servico}
    Mensagem: ${data.mensagem}`;
    
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
       {/* City Hero */}
      <section className="relative bg-jc-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent)] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
             <nav className="text-sm text-gray-400 mb-6 font-medium">
                <a href="/" className="hover:text-jc-gold">Início</a> &gt; 
                <a href="/#coverage" className="hover:text-jc-gold ml-1">Cidades</a> &gt; 
                <span className="text-white ml-1">{cityName}</span>
             </nav>
             
             <h1 className="text-3xl md:text-5xl font-black mb-4">Ar Condicionado em <span className="text-jc-gold">{cityName} - PR</span></h1>
             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Instalação, Manutenção e Assistência Técnica Especializada.<br/>
                🚗 Atendimento rápido saindo de Barracão.
             </p>

             <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-white/20">
                    ✅ Orçamento Grátis
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-white/20">
                    ✅ Garantia Total
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 border border-white/20">
                    ✅ Técnicos Certificados
                </span>
             </div>

             <a href="#city-contact" className="inline-block bg-jc-gold hover:bg-jc-goldDark text-jc-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:-translate-y-1">
                 SOLICITAR ORÇAMENTO GRÁTIS
             </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
          <div className="container mx-auto px-4">
              <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6">
                      🏙️ Ar Condicionado em {cityName}: Conforto para Sua Casa ou Empresa
                  </h2>
                  
                  <div className="float-right ml-6 mb-6 w-full md:w-1/3 bg-gray-100 rounded-xl p-4 border border-gray-200">
                      <div className="aspect-video bg-gray-300 rounded-lg mb-2 flex items-center justify-center text-gray-500 text-xs">
                          Imagem representativa
                      </div>
                      <p className="text-xs text-gray-500 italic text-center">Atendimento em {cityName}</p>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                      {cityName}, localizada no Sudoeste do Paraná, é uma cidade que combina desenvolvimento econômico com qualidade de vida. Com temperaturas que variam significativamente ao longo do ano, ter um sistema de climatização eficiente não é luxo, mas necessidade. A <strong>JC Climatizar</strong>, sediada em Barracão-PR, atende {cityName} com excelência e rapidez, oferecendo soluções completas em ar condicionado.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                      O clima da região sul do Brasil apresenta verões quentes e invernos frios, tornando essencial contar com equipamentos de climatização de qualidade. Nossa equipe especializada conhece profundamente as particularidades climáticas de {cityName} e está preparada para dimensionar o sistema ideal para cada ambiente, seja residencial ou comercial.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-8">
                      Com mais de 10 anos de experiência no mercado de climatização, a JC Climatizar se destaca pela qualidade dos serviços prestados e pelo compromisso com a satisfação do cliente. Atendemos {cityName} com a mesma dedicação e profissionalismo que nos tornaram referência na região, garantindo instalações seguras, manutenções preventivas eficazes e assistência técnica sempre que necessário.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-jc-navy p-6 my-8 rounded-r-xl">
                      <p className="font-bold text-jc-navy text-lg mb-2">💬 Precisa de ar condicionado em {cityName}?</p>
                      <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ar condicionado em ${cityName}`} className="inline-flex items-center gap-2 text-whatsappDark font-black hover:underline">
                          <i className="fab fa-whatsapp text-xl"></i> FALAR NO WHATSAPP AGORA
                      </a>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-jc-navy mb-4 mt-10">
                      🔧 Instalação de Ar Condicionado em {cityName}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                      A instalação de ar condicionado requer conhecimento técnico, experiência e uso de equipamentos adequados. Em {cityName}, a JC Climatizar realiza instalações seguindo rigorosamente as normas técnicas e recomendações dos fabricantes, garantindo o funcionamento perfeito do equipamento e sua durabilidade.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                      Nosso processo de instalação em {cityName} começa com uma visita técnica (quando necessário) ou avaliação detalhada, onde identificamos o melhor local para instalação da unidade interna e externa. Trabalhamos com as principais marcas do mercado: LG, Samsung, Midea, Gree, Springer, Carrier e Fujitsu.
                  </p>

                   <h3 className="text-xl md:text-2xl font-bold text-jc-navy mb-4 mt-10">
                      🛡️ Manutenção e Limpeza em {cityName}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                      Para garantir a saúde de sua família ou colaboradores, a limpeza periódica do ar condicionado é fundamental. Realizamos a higienização completa em {cityName}, eliminando fungos, bactérias e ácaros que se acumulam no aparelho. Além disso, nossa manutenção preventiva ajuda a economizar energia e prolongar a vida útil do seu equipamento.
                  </p>

              </article>
          </div>
      </section>

      {/* Form Section */}
      <section id="city-contact" className="py-16 bg-[#1a2844] text-white">
          <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                  <h2 className="text-3xl font-black text-center mb-2">📝 Solicite um Orçamento</h2>
                  <p className="text-center text-gray-400 mb-8">Atendimento prioritário para {cityName}</p>
                  
                  <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md space-y-4">
                      <input 
                        type="text" 
                        name="nome" 
                        placeholder="Seu Nome Completo" 
                        required 
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:border-jc-gold outline-none transition-colors"
                      />
                      <input 
                        type="tel" 
                        name="telefone" 
                        placeholder="WhatsApp (com DDD)" 
                        required 
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:border-jc-gold outline-none transition-colors"
                      />
                      <select 
                        name="servico" 
                        required
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:border-jc-gold outline-none transition-colors text-gray-300"
                      >
                          <option value="">Selecione o Serviço</option>
                          <option value="Instalação">Instalação de Ar Condicionado</option>
                          <option value="Manutenção">Manutenção Preventiva</option>
                          <option value="Limpeza">Limpeza e Higienização</option>
                          <option value="Assistência">Assistência Técnica</option>
                          <option value="Outro">Outro</option>
                      </select>
                      <textarea 
                        name="mensagem" 
                        placeholder="Descreva sua necessidade..." 
                        rows={4} 
                        className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:border-jc-gold outline-none transition-colors"
                      ></textarea>
                      
                      <button type="submit" className="w-full bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-black py-4 rounded-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all transform hover:-translate-y-1">
                          ENVIAR VIA WHATSAPP
                      </button>
                  </form>
              </div>
          </div>
      </section>
    </div>
  );
};

export default CityPage;