import React, { useEffect } from 'react';
import { COMPANY_INFO, ALL_CITIES } from '../constants';

interface CityPageProps {
  slug: string;
}

const CityPage: React.FC<CityPageProps> = ({ slug }) => {
  // 1. Determine City Name
  // Lookup in the unified city list to find the correct display name with accents
  const cityData = ALL_CITIES.find(c => c.slug === slug);
  
  // Fallback if not found in list (e.g. url typed manually but not in constants)
  const cityName = cityData 
    ? cityData.name 
    : slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // 2. SEO & Meta Tags Update
  useEffect(() => {
    const pageTitle = `Ar Condicionado em ${cityName}: Instalação e Manutenção | JC Climatizar`;
    const pageDesc = `Procurando ar condicionado em ${cityName}? A JC Climatizar oferece instalação, limpeza, manutenção e infraestrutura com garantia. Atendimento rápido em ${cityName} e região. Peça seu orçamento!`;

    document.title = pageTitle;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDesc);

    // Scroll to top on load
    window.scrollTo(0, 0);
  }, [cityName]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    const text = `Olá! Vi o site e gostaria de um orçamento para *${cityName}*:
    
    *Nome:* ${data.nome}
    *Telefone:* ${data.telefone}
    *Serviço:* ${data.servico}
    *Mensagem:* ${data.mensagem}`;
    
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
       
      {/* =========================================
          1. HERO SECTION (H1 + CTA)
          ========================================= */}
      <section className="relative bg-jc-navy text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image - Manutenção de ar condicionado */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/instalacao-e-manutencao-ar-condicionado-marmiteiros-1_1765725199587.webp" 
            alt="Manutenção de ar condicionado" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-jc-navy/90 via-jc-navy/85 to-[#0f1729]/80"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
             <nav className="text-xs md:text-sm text-gray-400 mb-6 font-medium uppercase tracking-wider">
                <a href="/" className="hover:text-jc-gold transition-colors">Home</a> <span className="mx-2">/</span> 
                <a href="/#coverage" className="hover:text-jc-gold transition-colors">Cidades</a> <span className="mx-2">/</span>
                <span className="text-jc-gold">{cityName}</span>
             </nav>
             
             <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Instalação de Ar Condicionado em <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-jc-gold to-jc-goldDark">
                    {cityName}
                </span>
             </h1>
             
             <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                Empresa referência em climatização atendendo <strong>{cityName}</strong>. 
                Instalação, manutenção preventiva e limpeza com técnicos certificados.
             </p>

             <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                 <a href="#city-contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-black py-4 px-8 rounded-full shadow-[0_0_25px_rgba(255,215,0,0.3)] hover:shadow-[0_0_35px_rgba(255,215,0,0.5)] transition-all transform hover:-translate-y-1 text-lg">
                    <i className="fab fa-whatsapp text-xl"></i>
                    ORÇAMENTO GRÁTIS EM {cityName.toUpperCase()}
                 </a>
                 <a href="#services-detail" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold py-4 px-8 rounded-full border-2 border-white/20 hover:bg-white/20 transition-all">
                    Ver Nossos Serviços
                 </a>
             </div>

             {/* Trust Badges */}
             <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base font-semibold text-gray-300">
                <div className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-400"></i> Atendimento Rápido
                </div>
                <div className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-400"></i> Garantia de Serviço
                </div>
                <div className="flex items-center gap-2">
                    <i className="fas fa-check-circle text-green-400"></i> Nota Fiscal
                </div>
             </div>
        </div>
      </section>

      {/* =========================================
          2. INTRODUÇÃO & BENEFÍCIOS (SEO Content)
          ========================================= */}
      <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                  
                  {/* Left: Content */}
                  <div className="lg:w-3/5">
                      <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6 border-l-4 border-jc-gold pl-4">
                          Soluções Completas de Climatização para {cityName}
                      </h2>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                          Se você busca conforto térmico para sua residência ou empresa em <strong>{cityName}</strong>, a JC Climatizar é a sua parceira ideal. Com o clima variável da nossa região, ter um equipamento funcionando perfeitamente não é apenas comodidade, é qualidade de vida.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                          Atuamos em {cityName} oferecendo serviços de alta qualidade, desde o projeto e venda até a <strong>instalação e manutenção de ar-condicionado</strong>. Nossa equipe técnica é treinada para trabalhar com todas as marcas (LG, Samsung, Gree, Midea, Daikin, etc.) e modelos (Split Hi-Wall, Cassete, Piso Teto, Multi Split).
                      </p>

                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                          <h3 className="text-xl font-bold text-jc-navy mb-4">Por que escolher a JC Climatizar em {cityName}?</h3>
                          <ul className="space-y-3">
                              {[
                                  `📍 Atendimento presencial rápido em ${cityName}`,
                                  "🛠️ Técnicos certificados e com ferramentas de ponta",
                                  "💰 Orçamento transparente e sem surpresas",
                                  "❄️ Especialistas em dimensionamento térmico (BTUs corretos)",
                                  "🤝 Pós-venda e garantia real sobre a instalação"
                              ].map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                                      <span className="text-jc-gold mt-1"><i className="fas fa-star"></i></span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>

                  {/* Right: Image/Map Placeholder */}
                  <div className="lg:w-2/5 w-full">
                      <div className="bg-gray-100 rounded-3xl p-2 shadow-inner">
                          <div className="bg-white rounded-2xl p-6 shadow-md">
                              <div className="aspect-square bg-gradient-to-br from-jc-navy to-gray-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                  {/* Abstract representation of map/technician */}
                                  <i className="fas fa-map-marked-alt text-9xl text-white/10 group-hover:scale-110 transition-transform duration-700"></i>
                                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                                      <div className="w-20 h-20 bg-jc-gold rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce-slow">
                                          <i className="fas fa-tools text-3xl text-jc-navy"></i>
                                      </div>
                                      <p className="font-bold text-xl">Atendemos em</p>
                                      <p className="font-black text-2xl text-jc-gold uppercase">{cityName}</p>
                                  </div>
                              </div>
                              <div className="mt-6 text-center">
                                  <p className="text-gray-500 text-sm mb-2">Base operacional próxima a você</p>
                                  <a href="#city-contact" className="text-jc-navy font-bold hover:text-jc-gold transition-colors flex items-center justify-center gap-2">
                                      Agendar Visita <i className="fas fa-arrow-right"></i>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* =========================================
          3. DETALHES DOS SERVIÇOS (Service Description)
          ========================================= */}
      <section id="services-detail" className="py-16 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-black text-jc-navy mb-4">Nossos Serviços em {cityName}</h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                      Oferecemos um portfólio completo para garantir o funcionamento ideal do seu equipamento.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Service 1 */}
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-jc-gold">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-jc-navy text-2xl mb-6">
                          <i className="fas fa-screwdriver-wrench"></i>
                      </div>
                      <h3 className="text-xl font-bold text-jc-navy mb-3">Instalação de Ar-Condicionado</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Instalação profissional seguindo rigorosamente as normas dos fabricantes para não perder a garantia. Realizamos o cálculo de BTUs ideal para seu espaço em {cityName}.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2">
                          <li>• Instalação de Split Hi-Wall e Inverter</li>
                          <li>• Instalação de Cassete e Piso Teto</li>
                          <li>• Teste de estanqueidade e vácuo</li>
                      </ul>
                  </div>

                  {/* Service 2 */}
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-jc-navy">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-jc-navy text-2xl mb-6">
                          <i className="fas fa-pump-soap"></i>
                      </div>
                      <h3 className="text-xl font-bold text-jc-navy mb-3">Limpeza e Higienização</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Respire ar puro! Nossa limpeza profunda remove fungos, bactérias e ácaros, prevenindo doenças respiratórias e melhorando o rendimento do aparelho.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2">
                          <li>• Limpeza de filtros e serpentinas</li>
                          <li>• Aplicação de bactericida</li>
                          <li>• Limpeza da bandeja de dreno</li>
                      </ul>
                  </div>

                  {/* Service 3 */}
                  <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-jc-gold">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-jc-navy text-2xl mb-6">
                          <i className="fas fa-tools"></i>
                      </div>
                      <h3 className="text-xl font-bold text-jc-navy mb-3">Manutenção e Conserto</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Seu ar-condicionado parou de gelar, está pingando ou fazendo barulho? Nossa equipe em {cityName} diagnostica e resolve o problema rapidamente.
                      </p>
                      <ul className="text-sm text-gray-500 space-y-2">
                          <li>• Recarga de gás refrigerante</li>
                          <li>• Troca de capacitor e peças</li>
                          <li>• Reparo de vazamentos</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* =========================================
          4. PERGUNTAS FREQUENTES (FAQ)
          ========================================= */}
      <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
              <h2 className="text-3xl font-black text-jc-navy text-center mb-10">
                  Dúvidas Comuns sobre Ar Condicionado em {cityName}
              </h2>

              <div className="space-y-4">
                  {[
                      {
                          q: `Vocês cobram visita técnica em ${cityName}?`,
                          a: "Para a maioria das regiões centrais de atendimento, o orçamento é gratuito e sem compromisso. Entre em contato pelo WhatsApp para confirmarmos a disponibilidade para seu bairro."
                      },
                      {
                          q: "Qual o prazo para instalação após o agendamento?",
                          a: `Nossa equipe busca atender com a máxima agilidade. Geralmente conseguimos agendar a instalação em ${cityName} dentro de 24h a 72h, dependendo da demanda sazonal.`
                      },
                      {
                          q: "Vocês vendem o aparelho ou apenas instalam?",
                          a: "Trabalhamos principalmente com a instalação e manutenção. No entanto, podemos assessorar você na compra do melhor equipamento (marca e BTUs) para sua necessidade em lojas parceiras ou online."
                      },
                      {
                          q: "O serviço tem garantia?",
                          a: "Sim! Todos os nossos serviços de instalação e manutenção possuem garantia técnica. Prezamos pela total satisfação dos nossos clientes em toda a região."
                      }
                  ].map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-jc-gold transition-colors bg-gray-50">
                          <h3 className="font-bold text-lg text-jc-navy mb-2 flex items-center gap-2">
                              <i className="far fa-question-circle text-jc-gold"></i> {faq.q}
                          </h3>
                          <p className="text-gray-600 ml-7">{faq.a}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* =========================================
          5. CTA & FORMULÁRIO (Conversion)
          ========================================= */}
      <section id="city-contact" className="py-16 md:py-24 bg-[#1a2844] relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-jc-gold rounded-full filter blur-[100px] opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-[100px] opacity-20"></div>

          <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl">
                  <div className="text-center mb-10">
                      <span className="text-jc-gold font-bold tracking-widest uppercase text-sm">Entre em contato</span>
                      <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">
                          Solicite seu Orçamento para {cityName}
                      </h2>
                      <p className="text-gray-300">
                          Preencha o formulário abaixo e nossa equipe retornará rapidamente pelo WhatsApp.
                      </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                          <input 
                            type="text" 
                            name="nome" 
                            placeholder="Seu Nome Completo" 
                            required 
                            className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-jc-gold outline-none transition-colors"
                          />
                          <input 
                            type="tel" 
                            name="telefone" 
                            placeholder="WhatsApp (com DDD)" 
                            required 
                            className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-jc-gold outline-none transition-colors"
                          />
                      </div>
                      
                      <select 
                        name="servico" 
                        required
                        className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-5 py-4 text-white focus:border-jc-gold outline-none transition-colors appearance-none"
                      >
                          <option value="" className="bg-jc-navy text-gray-400">Selecione o Serviço Desejado</option>
                          <option value="Instalação" className="bg-jc-navy">Instalação de Ar Condicionado</option>
                          <option value="Manutenção" className="bg-jc-navy">Manutenção Preventiva</option>
                          <option value="Limpeza" className="bg-jc-navy">Limpeza e Higienização</option>
                          <option value="Infraestrutura" className="bg-jc-navy">Infraestrutura (Obras)</option>
                          <option value="Outro" className="bg-jc-navy">Outro Assunto</option>
                      </select>
                      
                      <textarea 
                        name="mensagem" 
                        placeholder="Descreva brevemente sua necessidade..." 
                        rows={4} 
                        className="w-full bg-gray-900/50 border border-gray-600 rounded-xl px-5 py-4 text-white placeholder-gray-400 focus:border-jc-gold outline-none transition-colors"
                      ></textarea>
                      
                      <button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-black py-5 rounded-xl hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all transform hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                      >
                          <i className="fab fa-whatsapp text-2xl"></i> ENVIAR SOLICITAÇÃO AGORA
                      </button>
                  </form>
                  
                  <p className="text-center text-gray-500 text-sm mt-6">
                      <i className="fas fa-lock"></i> Seus dados estão seguros. Responderemos apenas sobre o orçamento.
                  </p>
              </div>
          </div>
      </section>
    </div>
  );
};

export default CityPage;