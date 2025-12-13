import React from 'react';
import Logo from './Logo';
import { COMPANY_INFO, NAVIGATION_LINKS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="light" className="mb-4 scale-75 origin-left" />
            <p className="text-sm leading-relaxed">
              Referência em climatização, oferecendo serviços de alta qualidade e compromisso com o conforto do cliente.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-jc-gold hover:text-jc-navy transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-jc-gold hover:text-jc-navy transition-colors">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Links Rápidos
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-jc-gold"></span>
            </h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-jc-gold transition-colors flex items-center gap-2">
                    <i className="fas fa-chevron-right text-xs"></i> {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Serviços
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-jc-gold"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2"><i className="fas fa-check text-jc-gold text-xs"></i> Instalação</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-jc-gold text-xs"></i> Manutenção</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-jc-gold text-xs"></i> Higienização</li>
              <li className="flex items-center gap-2"><i className="fas fa-check text-jc-gold text-xs"></i> Projetos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 relative inline-block">
              Fale Conosco
              <span className="absolute -bottom-2 left-0 w-10 h-1 bg-jc-gold"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fab fa-whatsapp text-jc-gold mt-1"></i>
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-jc-gold mt-1"></i>
                <span className="break-all">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;