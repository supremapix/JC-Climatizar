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
    // In a real app, this would send to a backend. 
    // Here we redirect to WhatsApp with the message pre-filled.
    const text = `Olá, meu nome é ${formData.name}. ${formData.message}`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-jc-navy/90 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
            
            <div className="text-center mb-16">
                <h2 className="font-bold text-3xl md:text-4xl mb-4 text-white">Entre em Contato</h2>
                <p className="text-gray-300 max-w-xl mx-auto">
                    Pronto para climatizar seu ambiente? Solicite um orçamento sem compromisso.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                
                {/* Contact Info */}
                <div className="w-full lg:w-1/3 space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-jc-gold rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Telefones</h3>
                            <p className="text-gray-300 hover:text-white transition-colors">
                                <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phoneDisplay}</a>
                            </p>
                            <p className="text-gray-300 hover:text-white transition-colors">
                                <a href={`https://wa.me/${COMPANY_INFO.whatsapp}`}>WhatsApp</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-jc-gold rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Email</h3>
                            <p className="text-gray-300 break-all">
                                <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-jc-gold rounded-full flex items-center justify-center text-jc-navy text-xl shrink-0">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Área de Atendimento</h3>
                            <p className="text-gray-300">
                                {COMPANY_INFO.address}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="w-full lg:w-2/3 bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-jc-gold">Nome</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-jc-gold text-white"
                                    placeholder="Seu nome"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium mb-2 text-jc-gold">Telefone / WhatsApp</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    required
                                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-jc-gold text-white"
                                    placeholder="(00) 00000-0000"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-jc-gold">Mensagem</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4}
                                required
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-jc-gold text-white"
                                placeholder="Descreva o que você precisa..."
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full bg-jc-gold hover:bg-white hover:text-jc-navy text-jc-navy font-bold py-4 rounded-lg transition-all text-lg"
                        >
                            Enviar Mensagem via WhatsApp
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Contact;