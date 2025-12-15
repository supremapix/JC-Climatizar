import React, { useState } from 'react';
import { ALL_CITIES, COMPANY_INFO } from '../constants';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "O que é PMOC e por que minha empresa precisa?",
    answer: "O PMOC (Plano de Manutenção, Operação e Controle) é exigido pela Lei Federal 13.589/2018 para ambientes climatizados de uso público ou coletivo. Empresas que não possuem PMOC podem ser multadas pela Vigilância Sanitária. O plano garante a qualidade do ar interno, prevenindo doenças respiratórias e mantendo a eficiência energética dos equipamentos. A JC Climatizar elabora e executa o PMOC para sua empresa, emitindo laudos técnicos e ART (Anotação de Responsabilidade Técnica)."
  },
  {
    question: "Qual a diferença entre manutenção preventiva e corretiva?",
    answer: "A manutenção preventiva é realizada periodicamente (a cada 3 a 6 meses) para evitar problemas futuros. Inclui limpeza de filtros, verificação de gás, testes elétricos e lubrificação. Já a manutenção corretiva é feita quando o equipamento já apresenta falhas, como falta de refrigeração, vazamentos ou ruídos. A preventiva é mais econômica a longo prazo, pois evita consertos caros e prolonga a vida útil do aparelho em até 40%."
  },
  {
    question: "Vocês trabalham com sistemas VRF/VRV?",
    answer: "Sim! Trabalhamos com sistemas VRF (Variable Refrigerant Flow) e VRV (Variable Refrigerant Volume), que são tecnologias de climatização de alta eficiência para grandes empreendimentos. Esses sistemas permitem controle individual de temperatura em cada ambiente, economia de energia de até 50% e são ideais para prédios comerciais, hotéis, hospitais e indústrias. Nossa equipe é certificada para instalação, manutenção e comissionamento de sistemas VRF/VRV das principais marcas."
  },
  {
    question: "Qual a importância do vácuo na instalação?",
    answer: "O vácuo é uma etapa obrigatória na instalação de ar condicionado. Ele remove toda a umidade e ar do sistema de tubulação antes de liberar o gás refrigerante. Sem o vácuo adequado, a umidade pode se misturar ao gás, causando corrosão interna, perda de eficiência e falha prematura do compressor. Instalações sem vácuo também perdem a garantia de fábrica. A JC Climatizar utiliza bomba de vácuo profissional e manômetros digitais para garantir o procedimento correto."
  },
  {
    question: "Como calcular a quantidade de BTUs ideal?",
    answer: "O cálculo de BTUs depende de vários fatores: tamanho do ambiente (m²), quantidade de pessoas, incidência de sol, quantidade de equipamentos eletrônicos e tipo de atividade. Em média, para um ambiente residencial com pé-direito padrão, utiliza-se cerca de 600 a 800 BTUs por m². Um quarto de 15m² com 2 pessoas e incidência solar moderada precisa de aproximadamente 9.000 a 12.000 BTUs. Nossa equipe faz o dimensionamento correto gratuitamente durante a visita técnica."
  },
  {
    question: "Quais cidades vocês atendem?",
    answer: `Atendemos toda a região Sudoeste do Paraná em um raio de 200km a partir de nossa sede em Barracão-PR. As principais cidades atendidas incluem: ${ALL_CITIES.slice(0, 15).map(c => c.name).join(', ')}, entre outras. Também realizamos atendimento internacional em Bernardo de Irigoyen, na Argentina, a apenas 15km da fronteira. Para outras localidades, consulte disponibilidade pelo WhatsApp.`
  },
  {
    question: "Vocês vendem equipamentos de ar condicionado?",
    answer: "Nossa especialidade é a instalação e manutenção. Não vendemos equipamentos diretamente, mas orientamos nossos clientes na escolha do melhor aparelho (marca, modelo e capacidade) para cada necessidade. Trabalhamos com todas as marcas do mercado: LG, Samsung, Gree, Midea, Daikin, Fujitsu, Carrier, Springer, entre outras. Também podemos indicar parceiros comerciais de confiança para a compra do equipamento."
  },
  {
    question: "Qual a garantia dos serviços?",
    answer: "Todos os nossos serviços possuem garantia. Instalações têm garantia de 90 dias sobre a mão de obra, desde que o equipamento seja mantido conforme orientações técnicas. Importante: para manter a garantia de fábrica do aparelho (geralmente 1 a 3 anos), a instalação deve ser feita por profissional habilitado com vácuo e teste de estanqueidade, como fazemos em todos os serviços. Emitimos nota fiscal e laudo técnico para sua segurança."
  }
];

const FAQItem: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-jc-navy text-base md:text-lg pr-4">{item.question}</span>
        <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-jc-gold text-jc-navy transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <i className="fas fa-chevron-down text-sm"></i>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 md:px-6 pb-5 md:pb-6 text-gray-600 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-jc-gold/10 text-jc-gold font-bold uppercase tracking-widest text-xs md:text-sm px-4 py-2 rounded-full mb-4">
            Tire suas dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-jc-navy mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre ar condicionado, manutenção preventiva, PMOC e nossos serviços.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Não encontrou o que procurava?
          </p>
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Olá! Tenho uma dúvida sobre ar condicionado`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-jc-gold to-jc-goldDark text-jc-navy font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <i className="fab fa-whatsapp text-xl"></i>
            Fale Conosco pelo WhatsApp
          </a>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqData.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": item.answer
            }
          }))
        })
      }} />
    </section>
  );
};

export default FAQ;
