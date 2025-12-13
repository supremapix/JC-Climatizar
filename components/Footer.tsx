import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a2844] to-[#0f1729] text-white font-sans relative overflow-hidden">
      
      {/* Background Particles Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(255,215,0,0.03)_0%,transparent_50%)]"></div>
      </div>

      {/* Main Footer Section */}
      <div className="relative z-10 border-b border-jc-gold/20 pt-16 pb-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About */}
          <div className="space-y-6 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <Logo variant="light" className="scale-90 origin-left" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em climatização residencial e comercial. 
              Qualidade, confiança e atendimento de excelência em Curitiba e região.
            </p>
            <div className="flex gap-3">
               {[
                   { icon: 'fa-facebook-f', label: 'Facebook' },
                   { icon: 'fa-instagram', label: 'Instagram' },
                   { icon: 'fa-linkedin-in', label: 'LinkedIn' },
                   { icon: 'fa-whatsapp', label: 'WhatsApp', href: `https://wa.me/${COMPANY_INFO.whatsapp}` }
               ].map((social, idx) => (
                   <a 
                     key={idx}
                     href={social.href || '#'} 
                     aria-label={social.label}
                     className="w-11 h-11 rounded-full border-2 border-jc-gold text-jc-gold flex items-center justify-center text-lg transition-all duration-300 hover:bg-gradient-gold hover:text-jc-navy hover:-translate-y-1 hover:rotate-6 hover:shadow-[0_10px_25px_rgba(255,215,0,0.4)] bg-jc-gold/10"
                   >
                       <i className={`fab ${social.icon}`}></i>
                   </a>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
             <h4 className="text-jc-gold font-bold text-lg uppercase tracking-wider mb-6 pb-3 border-b-2 border-jc-gold/30 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-12 after:h-[2px] after:bg-jc-gold">
                Nossos Serviços
             </h4>
             <ul className="space-y-3">
                 {[
                     { name: 'Instalação de Ar Condicionado', href: '#services' },
                     { name: 'Manutenção Preventiva', href: '#services' },
                     { name: 'Limpeza e Higienização', href: '#services' },
                     { name: 'Assistência Técnica 24h', href: '#contact' },
                     { name: 'Projetos Personalizados', href: '#contact' },
                     { name: 'Orçamento Grátis', href: '#contact' }
                 ].map((item, idx) => (
                     <li key={idx}>
                         <a href={item.href} className="text-gray-300 hover:text-jc-gold text-sm transition-all duration-300 hover:pl-2 relative group flex items-center">
                             <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">→</span>
                             {item.name}
                         </a>
                     </li>
                 ))}
             </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-jc-gold font-bold text-lg uppercase tracking-wider mb-6 pb-3 border-b-2 border-jc-gold/30 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-12 after:h-[2px] after:bg-jc-gold">
                Onde Atendemos
             </h4>
             <ul className="space-y-3">
                 {[
                     'Curitiba - Todos os Bairros',
                     'Araucária',
                     'Pinhais',
                     'São José dos Pinhais',
                     'Colombo',
                     'Ver Todas as Cidades'
                 ].map((city, idx) => (
                     <li key={idx}>
                         <a href="#" className="text-gray-300 hover:text-jc-gold text-sm transition-all duration-300 hover:pl-2 flex items-center group">
                             <span className="w-0 overflow-hidden group-hover:w-4 transition-all duration-300">→</span>
                             {city}
                         </a>
                     </li>
                 ))}
             </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
             <h4 className="text-jc-gold font-bold text-lg uppercase tracking-wider mb-6 pb-3 border-b-2 border-jc-gold/30 relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-12 after:h-[2px] after:bg-jc-gold">
                Fale Conosco
             </h4>
             <ul className="space-y-4 mb-6">
                 <li className="flex items-start gap-3 text-sm text-gray-300">
                     <i className="fas fa-map-marker-alt text-jc-gold mt-1"></i>
                     <span>{COMPANY_INFO.address}</span>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-gray-300">
                     <i className="fas fa-phone-alt text-jc-gold mt-1"></i>
                     <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-jc-gold transition-colors">{COMPANY_INFO.phoneDisplay}</a>
                 </li>
                 <li className="flex items-start gap-3 text-sm text-gray-300">
                     <i className="fas fa-envelope text-jc-gold mt-1"></i>
                     <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-jc-gold transition-colors">{COMPANY_INFO.email}</a>
                 </li>
             </ul>
             
             <div className="bg-jc-gold/5 border-l-4 border-jc-gold p-4 rounded-r-lg">
                 <h5 className="text-jc-gold font-bold text-sm mb-2 flex items-center gap-2">
                     <i className="fas fa-clock"></i> Horário
                 </h5>
                 <p className="text-xs text-gray-400 mb-1">Segunda a Sexta: 8h às 18h</p>
                 <p className="text-xs text-jc-gold font-bold animate-pulse">🚨 Assistência 24h para Emergências</p>
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#0a0f1a] py-6 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
           
           <div className="text-gray-500 text-center md:text-left">
               <p className="mb-1">© {currentYear} <strong className="text-gray-400">JC CLIMATIZAR LTDA</strong></p>
               <p className="font-mono text-[10px] md:text-xs">CNPJ: 15.078.460/0001-00 • Todos os direitos reservados</p>
           </div>

           <div className="flex flex-col items-center md:items-end">
               <p className="text-gray-400 flex items-center gap-1 mb-1">
                   Desenvolvido com <span className="text-[#ff3366] animate-heartbeat text-lg drop-shadow-[0_0_8px_rgba(255,51,102,0.5)]">♥</span> por 
                   <a 
                     href="https://www.supremasite.com.br/" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-jc-gold font-bold hover:underline"
                   >
                       Suprema Sites Express
                   </a>
               </p>
               <p className="text-gray-600 text-xs">Criação de Sites Profissionais</p>
           </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;