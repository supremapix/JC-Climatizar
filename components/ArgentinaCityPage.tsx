import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../constants';

const ArgentinaCityPage: React.FC = () => {
  const [lang, setLang] = useState<'pt' | 'es'>('pt');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
       
       {/* HERO BILÍNGUE */}
      <section className="relative bg-gradient-to-br from-jc-navy to-[#0f1729] text-white py-20 overflow-hidden">
         {/* Background Image - Manutenção de ar condicionado */}
         <div className="absolute inset-0 z-0">
           <img 
             src="/instalacao-e-manutencao-ar-condicionado-marmiteiros-1_1765725199587.webp" 
             alt="Manutenção de ar condicionado" 
             className="w-full h-full object-cover opacity-40"
           />
         </div>
         <div className="absolute inset-0 bg-gradient-to-br from-jc-navy/90 via-jc-navy/85 to-[#0f1729]/80"></div>
         
         {/* Language Toggle */}
         <div className="absolute top-24 right-4 md:right-10 z-20 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20 flex">
             <button 
                onClick={() => setLang('pt')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === 'pt' ? 'bg-jc-gold text-jc-navy shadow-md' : 'text-white hover:bg-white/10'}`}
             >
                 🇧🇷 Português
             </button>
             <button 
                onClick={() => setLang('es')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${lang === 'es' ? 'bg-jc-argentina text-white shadow-md' : 'text-white hover:bg-white/10'}`}
             >
                 🇦🇷 Español
             </button>
         </div>

         <div className="container mx-auto px-4 relative z-10">
             <nav className="text-sm text-gray-400 mb-8 font-medium">
                <a href="/" className="hover:text-jc-gold">Início</a> &gt; 
                <a href="/#argentina" className="hover:text-jc-gold ml-1">Argentina</a> &gt; 
                <span className="text-white ml-1">Bernardo de Irigoyen</span>
             </nav>

             {/* PORTUGUÊS CONTENT */}
             <div className={`${lang === 'pt' ? 'block' : 'hidden'} animate-fadeInUp`}>
                <div className="flex items-center gap-4 text-4xl mb-6">
                    <span className="animate-wave">🇧🇷</span>
                    <span className="text-2xl text-gray-500">→</span>
                    <span className="animate-wave [animation-delay:0.5s]">🇦🇷</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    Ar Condicionado em <span className="text-jc-argentina">Bernardo de Irigoyen</span> - Argentina
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Atendimento Internacional Especializado<br/>
                  <span className="text-jc-gold font-bold">🇦🇷 Instalação, Manutenção e Assistência Técnica</span><br/>
                  🚗 Apenas 15 km de Barracão-PR (Fronteira Brasil-Argentina)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl">
                    {[
                        {icon: '🗣️', text: 'Atendimento Bilíngue'},
                        {icon: '⚡', text: '220V Compatível'},
                        {icon: '🚗', text: 'Atendimento Rápido'},
                        {icon: '💰', text: 'Aceitamos BRL ou ARS'}
                    ].map((feat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                            <div className="text-2xl mb-2">{feat.icon}</div>
                            <div className="text-sm font-bold">{feat.text}</div>
                        </div>
                    ))}
                </div>

                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Gostaria de orçamento para Bernardo de Irigoyen`} className="inline-block bg-jc-gold hover:bg-jc-goldDark text-jc-navy font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all hover:-translate-y-1">
                    📱 SOLICITAR ORÇAMENTO (PORTUGUÊS)
                </a>
             </div>

             {/* ESPAÑOL CONTENT */}
             <div className={`${lang === 'es' ? 'block' : 'hidden'} animate-fadeInUp`}>
                <div className="flex items-center gap-4 text-4xl mb-6">
                    <span className="animate-wave">🇦🇷</span>
                    <span className="text-2xl text-gray-500">←</span>
                    <span className="animate-wave [animation-delay:0.5s]">🇧🇷</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
                    Aire Acondicionado en <span className="text-jc-argentina">Bernardo de Irigoyen</span> - Argentina
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                  Atención Internacional Especializada<br/>
                  <span className="text-jc-gold font-bold">🇦🇷 Instalación, Mantenimiento y Asistencia Técnica</span><br/>
                  🚗 Sólo 15 km desde Barracão-BR (Frontera Brasil-Argentina)
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl">
                    {[
                        {icon: '🗣️', text: 'Atención Bilingüe'},
                        {icon: '⚡', text: '220V Compatible'},
                        {icon: '🚗', text: 'Atención Rápida'},
                        {icon: '💰', text: 'BRL o ARS'}
                    ].map((feat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                            <div className="text-2xl mb-2">{feat.icon}</div>
                            <div className="text-sm font-bold">{feat.text}</div>
                        </div>
                    ))}
                </div>

                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola! Me gustaría un presupuesto para Bernardo de Irigoyen`} className="inline-block bg-jc-argentina hover:bg-jc-argentinaDark text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(116,172,223,0.4)] transition-all hover:-translate-y-1">
                    📱 SOLICITAR PRESUPUESTO (ESPAÑOL)
                </a>
             </div>

         </div>
      </section>

      {/* SECTION 1: INTRODUÇÃO / INTRODUCCIÓN */}
      <section className="py-16">
          <div className="container mx-auto px-4">
              <article className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-xl border-t-8 border-jc-argentina">
                  
                  {/* PORTUGUÊS */}
                  <div className={`${lang === 'pt' ? 'block' : 'hidden'}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6 border-b-2 border-gray-100 pb-4">
                          🏙️ Ar Condicionado em Bernardo de Irigoyen: Qualidade Brasileira na Argentina
                      </h2>
                      
                      <div className="float-right ml-6 mb-6 w-full md:w-1/3 bg-gray-100 rounded-xl p-4 border border-gray-200">
                          <div className="aspect-video bg-gray-300 rounded-lg mb-2 flex items-center justify-center text-gray-500 text-xs">
                              Imagem representativa
                          </div>
                          <p className="text-xs text-gray-500 italic text-center">Bernardo de Irigoyen, Misiones</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Bernardo de Irigoyen é uma cidade argentina localizada na província de Misiones, na região nordeste da Argentina, fazendo fronteira direta com o Brasil. Com aproximadamente 9.500 habitantes, a cidade tem uma economia baseada principalmente na agricultura, comércio e turismo de fronteira. Sua proximidade com Barracão-PR, a apenas 15 quilômetros, torna o atendimento da <strong>JC Climatizar</strong> extremamente rápido e eficiente.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        O clima subtropical da região exige sistemas de climatização eficientes tanto para residências quanto para estabelecimentos comerciais. Com verões quentes que podem ultrapassar os 35°C e invernos moderados, ter um ar condicionado de qualidade não é luxo, é necessidade. A JC Climatizar, com mais de 10 anos de experiência no mercado brasileiro, agora leva sua expertise para território argentino, oferecendo serviços completos de instalação, manutenção e assistência técnica.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-8">
                        Nossa equipe está preparada para atender clientes argentinos com atendimento bilíngue (português e espanhol), equipamentos compatíveis com a voltagem 220V padrão na Argentina, e toda a documentação necessária para importação de equipamentos quando necessário. Entendemos as particularidades do mercado argentino e estamos prontos para oferecer soluções personalizadas.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-jc-argentina p-6 my-8 rounded-r-xl">
                          <h3 className="text-jc-navy font-bold text-lg mb-4">🌟 Por que escolher a JC Climatizar em Bernardo de Irigoyen?</h3>
                          <ul className="space-y-2">
                             {[
                                 'Proximidade: Apenas 15 km da fronteira - atendimento rápido',
                                 'Experiência Internacional: Conhecemos ambos os mercados (BR/AR)',
                                 'Atendimento Bilíngue: Comunicação clara em português e espanhol',
                                 'Equipamentos Compatíveis: 220V padrão argentino',
                                 'Pagamento Flexível: Aceitamos Real (BRL) e Peso Argentino (ARS)',
                                 'Garantia Internacional: Mesma qualidade, sem fronteiras'
                             ].map((item, idx) => (
                                 <li key={idx} className="flex gap-2 text-sm text-gray-700">
                                     <span className="text-green-500">✅</span> {item}
                                 </li>
                             ))}
                          </ul>
                      </div>

                       <div className="text-center mt-8">
                           <p className="font-bold text-gray-600 mb-2">💬 Mora em Bernardo de Irigoyen e precisa de ar condicionado?</p>
                           <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Sou de Bernardo de Irigoyen e preciso de orçamento`} className="inline-flex items-center gap-2 text-whatsappDark font-black hover:underline text-lg">
                              <i className="fab fa-whatsapp"></i> FALAR NO WHATSAPP (PORTUGUÊS)
                          </a>
                       </div>
                  </div>

                   {/* ESPAÑOL */}
                  <div className={`${lang === 'es' ? 'block' : 'hidden'}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6 border-b-2 border-gray-100 pb-4">
                          🏙️ Aire Acondicionado en Bernardo de Irigoyen: Calidad Brasileña en Argentina
                      </h2>
                      
                      <div className="float-right ml-6 mb-6 w-full md:w-1/3 bg-gray-100 rounded-xl p-4 border border-gray-200">
                          <div className="aspect-video bg-gray-300 rounded-lg mb-2 flex items-center justify-center text-gray-500 text-xs">
                              Imagen representativa
                          </div>
                          <p className="text-xs text-gray-500 italic text-center">Bernardo de Irigoyen, Misiones</p>
                      </div>

                      <p className="text-gray-700 leading-relaxed mb-6">
                        Bernardo de Irigoyen es una ciudad argentina ubicada en la provincia de Misiones, en la región noreste de Argentina, haciendo frontera directa con Brasil. Con aproximadamente 9.500 habitantes, la ciudad tiene una economía basada principalmente en la agricultura, comercio y turismo de frontera. Su proximidad con Barracão-PR, a sólo 15 kilómetros, hace que la atención de <strong>JC Climatizar</strong> sea extremadamente rápida y eficiente.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        El clima subtropical de la región requiere sistemas de climatización eficientes tanto para residencias como para establecimientos comerciales. Con veranos calientes que pueden superar los 35°C e inviernos moderados, tener un aire acondicionado de calidad no es un lujo, es una necesidad. JC Climatizar, con más de 10 años de experiencia en el mercado brasileño, ahora lleva su experiencia a territorio argentino, ofreciendo servicios completos de instalación, mantenimiento y asistencia técnica.
                      </p>
                      
                      <p className="text-gray-700 leading-relaxed mb-8">
                        Nuestro equipo está preparado para atender clientes argentinos con atención bilingüe (portugués y español), equipos compatibles con el voltaje 220V estándar en Argentina, y toda la documentación necesaria para importación de equipos cuando sea necesario. Entendemos las particularidades del mercado argentino y estamos listos para ofrecer soluciones personalizadas.
                      </p>

                      <div className="bg-blue-50 border-l-4 border-jc-argentina p-6 my-8 rounded-r-xl">
                          <h3 className="text-jc-navy font-bold text-lg mb-4">🌟 ¿Por qué elegir JC Climatizar en Bernardo de Irigoyen?</h3>
                          <ul className="space-y-2">
                             {[
                                 'Proximidad: Sólo 15 km de la frontera - atención rápida',
                                 'Experiencia Internacional: Conocemos ambos mercados (BR/AR)',
                                 'Atención Bilingüe: Comunicación clara en portugués y español',
                                 'Equipos Compatibles: 220V estándar argentino',
                                 'Pago Flexible: Aceptamos Real (BRL) y Peso Argentino (ARS)',
                                 'Garantía Internacional: Misma calidad, sin fronteras'
                             ].map((item, idx) => (
                                 <li key={idx} className="flex gap-2 text-sm text-gray-700">
                                     <span className="text-green-500">✅</span> {item}
                                 </li>
                             ))}
                          </ul>
                      </div>

                       <div className="text-center mt-8">
                           <p className="font-bold text-gray-600 mb-2">💬 ¿Vive en Bernardo de Irigoyen y necesita aire acondicionado?</p>
                           <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hola! Soy de Bernardo de Irigoyen y necesito un presupuesto`} className="inline-flex items-center gap-2 text-whatsappDark font-black hover:underline text-lg">
                              <i className="fab fa-whatsapp"></i> HABLAR POR WHATSAPP (ESPAÑOL)
                          </a>
                       </div>
                  </div>

              </article>
          </div>
      </section>

      {/* SECTION 2: INSTALAÇÃO / INSTALACIÓN */}
      <section className="py-16 bg-gray-100">
           <div className="container mx-auto px-4">
              <article className="max-w-4xl mx-auto">
                 {/* PORTUGUÊS */}
                  <div className={`${lang === 'pt' ? 'block' : 'hidden'}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6">🔧 Instalação Profissional de Ar Condicionado</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                          Realizamos a instalação de diversos modelos de ar condicionado (Split, Cassete, Piso Teto) seguindo rigorosamente os padrões de qualidade. Garantimos um serviço limpo, rápido e eficiente, respeitando a estética do seu ambiente.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 mt-6">
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Infraestrutura para tubulação</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Instalação elétrica 220V</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Suportes reforçados</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Testes de pressão e vácuo</li>
                      </ul>
                  </div>

                  {/* ESPAÑOL */}
                  <div className={`${lang === 'es' ? 'block' : 'hidden'}`}>
                      <h2 className="text-2xl md:text-3xl font-bold text-jc-navy mb-6">🔧 Instalación Profesional de Aire Acondicionado</h2>
                      <p className="text-gray-700 leading-relaxed mb-4">
                          Realizamos la instalación de diversos modelos de aire acondicionado (Split, Cassette, Piso Techo) siguiendo estrictamente los estándares de calidad. Garantizamos un servicio limpio, rápido y eficiente, respetando la estética de su ambiente.
                      </p>
                       <ul className="grid md:grid-cols-2 gap-4 mt-6">
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Infraestructura para tuberías</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Instalación eléctrica 220V</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Soportes reforzados</li>
                          <li className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">✨ Pruebas de presión y vacío</li>
                      </ul>
                  </div>
              </article>
           </div>
      </section>

       {/* FINAL CTA */}
       <section className="py-16 bg-jc-navy text-white text-center">
            <div className="container mx-auto px-4">
                 {/* PORTUGUÊS */}
                 <div className={`${lang === 'pt' ? 'block' : 'hidden'}`}>
                    <h2 className="text-3xl font-black mb-4">Pronto para climatizar seu ambiente?</h2>
                    <p className="mb-8 text-gray-300">Entre em contato agora mesmo e agende uma visita técnica em Bernardo de Irigoyen.</p>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Orçamento Bernardo de Irigoyen`} className="inline-block bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                        SOLICITAR ORÇAMENTO AGORA
                    </a>
                 </div>
                 {/* ESPAÑOL */}
                 <div className={`${lang === 'es' ? 'block' : 'hidden'}`}>
                    <h2 className="text-3xl font-black mb-4">¿Listo para climatizar su ambiente?</h2>
                    <p className="mb-8 text-gray-300">Póngase en contacto ahora mismo y programe una visita técnica en Bernardo de Irigoyen.</p>
                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Presupuesto Bernardo de Irigoyen`} className="inline-block bg-gradient-to-r from-jc-argentina to-jc-argentinaDark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all">
                        SOLICITAR PRESUPUESTO AHORA
                    </a>
                 </div>
            </div>
       </section>

    </div>
  );
};

export default ArgentinaCityPage;