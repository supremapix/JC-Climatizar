import React from 'react';
import { MAIN_CITIES, EXTRA_CITIES } from '../constants';

const CoverageArea: React.FC = () => {
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
                href={`/ar-condicionado-${city.slug}`}
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
          <p className="text-gray-600 leading-loose text-lg text-justify md:text-left">
            {EXTRA_CITIES.join(' • ')} e mais!
          </p>
          <div className="mt-8 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy p-6 rounded-xl text-center font-bold text-lg shadow-lg">
             📏 Raio de atendimento: 200 km a partir de Barracão-PR
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageArea;