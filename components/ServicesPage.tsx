import React, { useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const detailedServices = [
    {
      id: "instalacao",
      title: "Instalação de Ar Condicionado",
      icon: "fa-screwdriver-wrench",
      description: "Instalação técnica seguindo rigorosamente os manuais dos fabricantes para garantir a vida útil do equipamento e a validade da garantia.",
      details: [
        "Instalação de Split Hi-Wall (Comum e Inverter)",
        "Instalação de Multi-Split (Bi, Tri, Quadri)",
        "Instalação de Piso Teto e Cassete (Linha Comercial)",
        "Teste de estanqueidade (Pressurização com Nitrogênio)",
        "Vácuo no sistema (Item obrigatório para garantia)",
        "Dimensionamento de carga térmica (Cálculo de BTUs)"
      ],
      color: "from-blue-500 to-blue-700"
    },
    {
      id: "manutencao",
      title: "Manutenção Preventiva & PMOC",
      icon: "fa-clipboard-check",
      description: "A manutenção preventiva reduz o consumo de energia em até 30% e aumenta a durabilidade do seu aparelho.",
      details: [
        "Verificação de pressão do gás refrigerante",
        "Medição de corrente elétrica e tensão",
        "Lubrificação de motores e turbinas",
        "Verificação de drenos e bandejas",
        "PMOC (Plano de Manutenção, Operação e Controle) para empresas",
        "Emissão de laudos técnicos e ART"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      id: "limpeza",
      title: "Higienização Profunda",
      icon: "fa-pump-soap",
      description: "Eliminamos fungos, bactérias e ácaros que causam doenças respiratórias. Ar puro e saudável para sua família e colaboradores.",
      details: [
        "Desmontagem da carenagem para limpeza interna",
        "Aplicação de produtos bactericidas e fungicidas certificados",
        "Limpeza de filtros e serpentinas",
        "Higienização da turbina e bandeja de dreno",
        "Eliminação de odores desagradáveis"
      ],
      color: "from-teal-500 to-teal-700"
    },
    {
      id: "infraestrutura",
      title: "Infraestrutura para Obras",
      icon: "fa-hard-hat",
      description: "Preparo completo da tubulação durante a obra ou reforma, deixando o ambiente pronto para receber o ar condicionado futuramente sem quebra-quebra.",
      details: [
        "Passagem de tubulação de cobre",
        "Instalação de dreno embutido",
        "Cabeamento elétrico de comando",
        "Cortes em alvenaria com acabamento",
        "Projetos para arquitetos e construtoras"
      ],
      color: "from-orange-500 to-orange-700"
    }
  ];

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-jc-navy text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-jc-navy to-jc-navy/80"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
                Nossos <span className="text-jc-gold">Serviços</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Soluções completas em climatização com tecnologia de ponta, equipe qualificada e garantia de execução.
            </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
            <div className="grid gap-12">
                {detailedServices.map((service, index) => (
                    <div 
                        key={index} 
                        id={service.id}
                        className={`flex flex-col md:flex-row gap-8 items-center bg-white rounded-3xl p-8 md:p-12 shadow-xl border-l-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} hover:shadow-2xl transition-shadow duration-300`}
                        style={{ borderLeftColor: index === 0 ? '#3B82F6' : index === 1 ? '#22C55E' : index === 2 ? '#14B8A6' : '#F97316' }}
                    >
                        
                        {/* Icon/Image Area */}
                        <div className={`w-full md:w-1/3 flex justify-center`}>
                            <div className={`w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg text-white text-6xl md:text-7xl transform hover:scale-110 transition-transform duration-500`}>
                                <i className={`fas ${service.icon}`}></i>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="w-full md:w-2/3">
                            <h2 className="text-3xl font-black text-jc-navy mb-4 flex items-center gap-3">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="font-bold text-gray-800 mb-4 uppercase text-sm tracking-wider">O que inclui:</h3>
                                <ul className="grid md:grid-cols-2 gap-3">
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base">
                                            <i className="fas fa-check-circle text-green-500 mt-1"></i>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8">
                                <a 
                                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de um orçamento para ${service.title}`}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 bg-jc-navy text-white px-8 py-3 rounded-full font-bold hover:bg-jc-gold hover:text-jc-navy transition-all shadow-md"
                                >
                                    <i className="fab fa-whatsapp"></i> Solicitar Orçamento
                                </a>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="py-20 bg-[#1a2844] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-jc-gold rounded-full filter blur-[150px] opacity-10"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
              <div className="max-w-4xl mx-auto">
                  <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-2 text-jc-gold font-bold mb-6 border border-jc-gold/30">
                      🏢 LINHA COMERCIAL E INDUSTRIAL
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black mb-6">Projetos para Empresas</h2>
                  <p className="text-xl text-gray-300 mb-10 leading-relaxed">
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

      {/* FAQ Specific */}
      <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-3xl">
              <h2 className="text-3xl font-black text-jc-navy text-center mb-10">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-jc-navy mb-2">Quanto custa a instalação?</h3>
                      <p className="text-gray-600">O valor varia de acordo com a capacidade (BTUs) do aparelho e a complexidade do local (altura, distância da tubulação). Entre em contato para um orçamento exato.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-jc-navy mb-2">Qual a diferença entre manutenção preventiva e limpeza?</h3>
                      <p className="text-gray-600">A limpeza foca na higienização (lavagem). A manutenção preventiva inclui a limpeza E a verificação técnica de componentes elétricos e mecânicos para evitar quebras.</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm">
                      <h3 className="font-bold text-jc-navy mb-2">Vocês atendem quais marcas?</h3>
                      <p className="text-gray-600">Trabalhamos com todas as principais marcas do mercado: LG, Samsung, Gree, Daikin, Midea, Springer, Fujitsu, Elgin, entre outras.</p>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default ServicesPage;