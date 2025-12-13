// Replace this URL with the actual uploaded logo path or a hosted URL
export const COMPANY_INFO = {
  name: "JC Climatizar",
  whatsapp: "5549991333133",
  phone: "+5546991333133",
  phoneDisplay: "(46) 99133-3133",
  secondaryPhone: "+5549991333133",
  secondaryPhoneDisplay: "(49) 99133-3133",
  email: "contato@jcinstalacoes.com.br",
  address: "Rua Gabriel Missio, 26 - Barracão - PR",
  zip: "85700-000",
  fullAddress: "Rua Gabriel Missio, 26 - CEP: 85700-000, Barracão - PR",
  cnpj: "15.078.460/0001-00",
  region: "Sudoeste do Paraná"
};

export const NAVIGATION_LINKS = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '#/servicos' }, // Point to new page
  { name: 'Cidades Atendidas', href: '/#coverage' },
  { name: '🇦🇷 Argentina', href: '/#argentina' },
  { name: 'Sobre', href: '/#about' },
  { name: 'Contato', href: '/#contact' },
];

export const SERVICES_LIST = [
  {
    title: "Instalação",
    description: "Instalação profissional de ar condicionado split, cassete e piso teto, seguindo todas as normas técnicas.",
    icon: "fa-screwdriver-wrench",
    id: "instalacao"
  },
  {
    title: "Manutenção Preventiva",
    description: "Evite problemas futuros e garanta a qualidade do ar com nossos planos de manutenção periódica.",
    icon: "fa-clipboard-check",
    id: "manutencao"
  },
  {
    title: "Limpeza e Higienização",
    description: "Eliminação de fungos e bactérias, garantindo um ar mais saudável para sua família ou empresa.",
    icon: "fa-pump-soap",
    id: "limpeza"
  },
  {
    title: "Projetos Comerciais",
    description: "Soluções personalizadas de climatização para escritórios, lojas e grandes ambientes.",
    icon: "fa-building",
    id: "infraestrutura"
  }
];

export const DETAILED_SERVICES = [
  {
    id: "instalacao",
    title: "Instalação de Ar Condicionado",
    subtitle: "Garantia, Segurança e Eficiência Energética",
    icon: "fa-screwdriver-wrench",
    heroImage: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=2069&auto=format&fit=crop",
    description: "A instalação é a etapa mais importante para a vida útil do seu ar condicionado. Uma instalação mal feita pode gerar vazamentos de gás, alto consumo de energia e quebra prematura do compressor.",
    longDescription: "Nossa equipe segue rigorosamente os manuais de cada fabricante (LG, Samsung, Gree, Daikin, Midea, etc.), utilizando ferramentas de precisão como bomba de vácuo, manômetros digitais e tubulação de cobre de alta qualidade. Não arrisque seu investimento com instalações fora do padrão.",
    features: [
      "Instalação de Split Hi-Wall, Cassete e Piso Teto",
      "Tubulação 100% Cobre (não usamos alumínio)",
      "Isolamento térmico blindado individual",
      "Vácuo no sistema (obrigatório para garantia)",
      "Teste de estanqueidade com Nitrogênio",
      "Suportes reforçados e nivelamento a laser",
      "Acabamento estético impecável"
    ],
    ctaText: "Agendar Instalação"
  },
  {
    id: "manutencao",
    title: "Manutenção Preventiva",
    subtitle: "Aumente a vida útil do seu aparelho e economize energia",
    icon: "fa-clipboard-check",
    heroImage: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
    description: "A falta de manutenção é a principal causa de quebra de ar condicionado. A preventiva detecta falhas antes que elas parem seu equipamento.",
    longDescription: "Além de garantir o conforto térmico, a manutenção preventiva reduz o consumo de energia em até 30%. Para empresas, oferecemos o PMOC (Plano de Manutenção, Operação e Controle), exigido pela Lei 13.589/2018, garantindo a qualidade do ar e a regularidade fiscal do seu negócio.",
    features: [
      "Verificação da pressão do gás refrigerante",
      "Medição de corrente e tensão elétrica",
      "Lubrificação de motores e rolamentos",
      "Verificação de drenos e bandejas",
      "Reaperto de conexões elétricas",
      "Testes de rendimento térmico",
      "Emissão de laudos técnicos e ART"
    ],
    ctaText: "Solicitar Plano de Manutenção"
  },
  {
    id: "limpeza",
    title: "Limpeza e Higienização",
    subtitle: "Ar puro e saudável livre de fungos e bactérias",
    icon: "fa-pump-soap",
    heroImage: "https://plus.unsplash.com/premium_photo-1663040182602-06927909dc40?q=80&w=2070&auto=format&fit=crop",
    description: "Você sabia que o ar condicionado sujo pode acumular 10x mais bactérias que um banheiro público? Proteja a saúde da sua família.",
    longDescription: "Nosso processo de higienização é profundo. Não limpamos apenas o filtro; desmontamos a carenagem para acessar a turbina e a serpentina, onde a sujeira realmente se esconde. Utilizamos produtos bactericidas e fungicidas certificados pela ANVISA, eliminando odores e prevenindo doenças respiratórias.",
    features: [
      "Desmontagem completa da carenagem",
      "Aplicação de produto bactericida profissional",
      "Limpeza da turbina (ventilador interno)",
      "Limpeza da serpentina (evaporadora)",
      "Desobstrução do sistema de dreno",
      "Higienização de filtros e aletas",
      "Eliminação de mau cheiro"
    ],
    ctaText: "Agendar Higienização"
  },
  {
    id: "infraestrutura",
    title: "Infraestrutura para Obras",
    subtitle: "Prepare sua obra para receber ar condicionado sem quebra-quebra",
    icon: "fa-hard-hat",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop",
    description: "Construindo ou reformando? A hora de pensar no ar condicionado é agora. Deixe tudo pronto para uma instalação futura perfeita.",
    longDescription: "Realizamos o projeto e a execução da infraestrutura (pré-instalação) em obras residenciais e comerciais. Passamos as tubulações de cobre, cabos de comando e drenos dentro da parede, deixando apenas as caixas de espera visíveis. Isso garante estética, valoriza o imóvel e evita quebrar paredes depois da pintura pronta.",
    features: [
      "Cortes em alvenaria com precisão",
      "Passagem de tubulação de cobre e cabos PP",
      "Instalação de caixas de passagem polar",
      "Drenos embutidos com teste de vazão",
      "Pressurização das linhas com nitrogênio",
      "Mapeamento das tubulações para evitar furos",
      "Parceria com arquitetos e engenheiros"
    ],
    ctaText: "Cotar Infraestrutura"
  }
];


export const MAIN_CITIES = [
  { name: "Barracão", slug: "barracao", type: "sede" },
  { name: "Bom Jesus do Sul", slug: "bom-jesus-do-sul" },
  { name: "Realeza", slug: "realeza" },
  { name: "Ampére", slug: "ampere" },
  { name: "Santo Antônio do Sudoeste", slug: "santo-antonio-sudoeste" },
  { name: "Pinhal de São Bento", slug: "pinhal-sao-bento" },
  { name: "Capanema", slug: "capanema" },
  { name: "Planalto", slug: "planalto" },
  { name: "Pranchita", slug: "pranchita" },
];

export const EXTRA_CITIES = [
  "Dionísio Cerqueira", "São João", "Renascença", "Marmeleiro", 
  "Francisco Beltrão", "Pato Branco", "Chopinzinho", "Coronel Vivida", 
  "Dois Vizinhos", "Salto do Lontra", "Salgado Filho", "Nova Prata do Iguaçu", 
  "Verê", "Enéas Marques", "Flor da Serra do Sul", "Manfrinópolis", 
  "Pérola d'Oeste", "Santa Izabel do Oeste", "Boa Esperança do Iguaçu", "Cruzeiro do Iguaçu"
];

// Utility to create URL-friendly slugs
export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

// Unified list of all cities with slugs
export const ALL_CITIES = [
  ...MAIN_CITIES,
  ...EXTRA_CITIES.map(city => ({
    name: city,
    slug: slugify(city),
    type: 'extra'
  }))
];