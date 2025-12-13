import React, { useState } from 'react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, meu nome é ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0f1729] text-white">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-jc-navy rounded-full blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-jc-gold rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
                <span className="text-jc-gold font-bold uppercase tracking-wider text-sm mb-2 block">Fale Conosco</span>
                <h2 className="font-black text-3xl md:text-5xl mb-6 text-white">Solicite seu Orçamento</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-jc-gold to-transparent mx-auto"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                
                {/* Contact Info */}
                <div className="w-full lg:w-1/3 space-y-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-jc-gold/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-jc-gold to-jc-goldDark rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0 shadow-lg">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Telefones</h3>
                                <p className="text-gray-300 hover:text-jc-gold transition-colors">
                                    <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneDisplay}</a>
                                </p>
                                <p className="text-gray-300 hover:text-jc-gold transition-colors">
                                    <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>WhatsApp</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-jc-gold/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-jc-gold to-jc-goldDark rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0 shadow-lg">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Email</h3>
                                <p className="text-gray-300 break-all hover:text-jc-gold transition-colors">
                                    <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-jc-gold/50 transition-colors">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-jc-gold to-jc-goldDark rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0 shadow-lg">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-1">Atendimento</h3>
                                <p className="text-gray-300">
                                    {COMPANY_INFO.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full lg:w-2/3 bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label htmlFor="name" className="block text-sm font-bold mb-2 text-jc-gold uppercase tracking-wider">Nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-jc-gold text-white transition-all group-hover:border-gray-600"
                                    placeholder="Seu nome completo"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="group">
                                <label htmlFor="phone" className="block text-sm font-bold mb-2 text-jc-gold uppercase tracking-wider">WhatsApp</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required
                                    className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-jc-gold text-white transition-all group-hover:border-gray-600"
                                    placeholder="(00) 00000-0000"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="group">
                            <label htmlFor="message" className="block text-sm font-bold mb-2 text-jc-gold uppercase tracking-wider">Mensagem</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4}
                                required
                                className="w-full bg-gray-900/50 border border-gray-700 rounded-xl px-4 py-4 focus:outline-none focus:border-jc-gold text-white transition-all group-hover:border-gray-600 resize-none"
                                placeholder="Descreva sua necessidade (instalação, manutenção, limpeza...)"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-gradient-to-r from-jc-gold to-jc-goldDark hover:from-white hover:to-white hover:text-jc-navy text-jc-navy font-black py-5 rounded-xl transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            ENVIAR VIA WHATSAPP <i className="fab fa-whatsapp ml-2"></i>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Contact;