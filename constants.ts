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