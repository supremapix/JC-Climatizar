import React from 'react';
import { MAIN_CITIES, ALL_CITIES, slugify } from '../constants';

const CoverageArea: React.FC = () => {
  // Filter out main cities to get only extra cities for the list
  const extraCitiesList = ALL_CITIES.filter(c => c.type === 'extra');

  return (
    <section id="coverage" className="py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-jc-navy font-black text-3xl md:text-5xl mb-4">
                🌍 Área de Atendimento - Sudoeste do Paraná
            </h2>
            <p className="text-jc-goldDark text-xl md:text-2xl font-bold">
                Atendemos em um raio de 200km a partir de Barracão-PR
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {MAIN_CITIES.map((city, index) => (
            <a 
                href={`/#/ar-condicionado-${city.slug}`}
                key={index}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 border-2 flex flex-col items-center text-center group cursor-pointer ${
                    city.type === 'sede' 
                    ? 'bg-gradient-to-br from-jc-navy to-[#0f1729] text-white border-jc-gold transform md:-translate-y-4 hover:scale-105 shadow-xl z-10' 
                    : 'bg-white hover:-translate-y-2 border-transparent hover:border-jc-gold text-jc-navy'
                }`}
            >
                <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {city.type === 'sede' ? '🏢' : '📍'}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${city.type === 'sede' ? 'text-jc-gold' : 'text-jc-navy'}`}>
                    {city.name}
                </h3>
                {city.type === 'sede' && (
                    <span className="inline-block bg-jc-gold text-jc-navy px-4 py-1 rounded-full text-xs font-bold mb-3">
                        SEDE
                    </span>
                )}
                {city.type === 'sede' && (
                    <p className="text-gray-300 text-sm mb-1">Rua Gabriel Missio, 26</p>
                )}
                <p className={`text-sm ${city.type === 'sede' ? 'text-white font-semibold' : 'text-gray-500'}`}>
                    Atendimento {city.type === 'sede' ? 'Imediato' : 'Rápido'}
                </p>
                <span className="mt-4 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity text-jc-gold">
                    Ver Página Exclusiva →
                </span>
            </a>
          ))}
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-3xl border-l-8 border-jc-gold shadow-xl">
          <h4 className="text-jc-navy font-bold text-2xl mb-6 flex items-center gap-2">
            <i className="fas fa-map-marked-alt text-jc-gold"></i> Também atendemos:
          </h4>
          
          <div className="flex flex-wrap gap-3">
            {extraCitiesList.map((city, idx) => (
               <a 
                 key={idx}
                 href={`/#/ar-condicionado-${city.slug}`}
                 className="inline-block bg-gray-100 hover:bg-jc-navy hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-gray-200 hover:border-jc-gold"
               >
                 📍 {city.name}
               </a>
            ))}
            <span className="inline-block px-4 py-2 text-gray-500 text-sm italic">e toda a região!</span>
          </div>

          <div className="mt-8 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy p-6 rounded-xl text-center font-bold text-lg shadow-lg">
             📏 Raio de atendimento: 200 km a partir de Barracão-PR
          </div>
        </div>

        {/* International Section - Argentina */}
        <div id="argentina" className="mt-16 bg-gradient-to-br from-[#e8f4f8] to-[#d4e9f2] rounded-3xl p-8 md:p-12 border-4 border-jc-argentina relative overflow-hidden shadow-2xl">
            {/* Background Decor */}
            <div className="absolute -top-12 -right-12 text-[200px] opacity-5 rotate-[-15deg] pointer-events-none select-none">
                🌎
            </div>

            <div className="text-center mb-10 relative z-10">
                <h3 className="text-jc-navy font-black text-3xl md:text-4xl mb-2 text-shadow-sm">
                    🌎 Atendimento Internacional
                </h3>
                <p className="text-jc-argentinaDark font-bold text-lg">
                    Expandimos nossas fronteiras para levar climatização de qualidade à Argentina!
                </p>
            </div>

            {/* Flag Animation */}
            <div className="flex justify-center items-center gap-6 mb-10 text-6xl">
                <div className="animate-wave">🇧🇷</div>
                <div className="text-4xl animate-fly">✈️</div>
                <div className="animate-wave [animation-delay:0.5s]">🇦🇷</div>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
                 <h4 className="text-jc-navy font-bold text-2xl text-center mb-8 pb-4 border-b-4 border-jc-argentina">
                    🇦🇷 Argentina - Província de Misiones
                 </h4>

                 <div className="bg-gradient-argentina text-white p-8 md:p-10 rounded-3xl text-center shadow-xl mb-10 border-4 border-jc-gold relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                    <div className="absolute -top-6 -right-6 text-[120px] opacity-10 pointer-events-none select-none">🇦🇷</div>
                    
                    <div className="text-6xl mb-6 animate-bounce-slow">🏛️</div>
                    <h3 className="text-3xl md:text-4xl font-black mb-4">Bernardo de Irigoyen</h3>
                    
                    <span className="inline-block bg-jc-gold text-jc-navy px-6 py-2 rounded-full font-bold text-sm mb-6 shadow-md">
                        ARGENTINA
                    </span>
                    
                    <div className="space-y-2 text-lg">
                        <p>📍 Misiones, Argentina</p>
                        <p>🚗 15 km de Barracão (fronteira)</p>
                        <p>🕐 Atendimento rápido</p>
                        <p className="font-bold text-jc-gold">💬 Atendimento em Português e Espanhol</p>
                    </div>

                    <a href="/#/ar-condicionado-bernardo-irigoyen" className="inline-block bg-white text-jc-argentinaDark px-8 py-4 rounded-full font-bold text-lg mt-8 shadow-lg hover:bg-jc-gold hover:text-jc-navy hover:-translate-y-1 transition-all duration-300">
                        VER MAIS INFORMAÇÕES
                    </a>
                 </div>

                 <div className="bg-gray-50 p-8 rounded-2xl border-l-8 border-jc-argentina mb-10">
                    <h5 className="text-jc-navy font-bold text-xl mb-6">✨ Diferenciais do Atendimento Internacional:</h5>
                    <ul className="space-y-4">
                        {[
                            {icon: '🗣️', label: 'Atendimento Bilíngue:', text: 'Português e Espanhol'},
                            {icon: '⚡', label: 'Equipamentos Compatíveis:', text: '220V padrão argentino'},
                            {icon: '📋', label: 'Documentação:', text: 'Assistência com importação quando necessário'},
                            {icon: '🚗', label: 'Proximidade:', text: 'Apenas 15km da nossa sede'},
                            {icon: '💰', label: 'Pagamento Flexível:', text: 'Real (BRL) ou Peso Argentino (ARS)'},
                            {icon: '🔧', label: 'Assistência Rápida:', text: 'Técnicos especializados'},
                            {icon: '🏆', label: 'Garantia Internacional:', text: 'Mesma qualidade, sem fronteiras'}
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-gray-700 pb-2 border-b border-gray-200 last:border-0">
                                <span className="text-xl">{item.icon}</span>
                                <span><strong>{item.label}</strong> {item.text}</span>
                            </li>
                        ))}
                    </ul>
                 </div>

                 <div className="bg-gradient-to-br from-jc-navy to-[#0f1729] text-white p-8 rounded-2xl text-center">
                    <p className="text-xl font-bold mb-2">
                        ¿Necesita aire acondicionado en Bernardo de Irigoyen?
                    </p>
                    <p className="text-jc-gold italic mb-8">
                        Precisa de ar condicionado em Bernardo de Irigoyen?
                    </p>
                    
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                         <a href="https://wa.me/5549991333133?text=Hola! Me gustaría un presupuesto para Bernardo de Irigoyen" target="_blank" className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                            <i className="fab fa-whatsapp text-xl"></i> WHATSAPP (ESPAÑOL)
                        </a>
                         <a href="https://wa.me/5549991333133?text=Olá! Gostaria de um orçamento para Bernardo de Irigoyen" target="_blank" className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
                            <i className="fab fa-whatsapp text-xl"></i> WHATSAPP (PORTUGUÊS)
                        </a>
                    </div>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default CoverageArea;