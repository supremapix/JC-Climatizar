import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CoverageArea from './components/CoverageArea';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import CityPage from './components/CityPage';
import ArgentinaCityPage from './components/ArgentinaCityPage';
import ServicesPage from './components/ServicesPage';
import ServiceDetailPage from './components/ServiceDetailPage';
import CookieBanner from './components/CookieBanner';
import EnhancedSEO from './components/EnhancedSEO';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
};

const HomePage: React.FC = () => (
  <>
    <EnhancedSEO
      title="Instalação e Manutenção de Ar Condicionado"
      description="JC Climatizar - Especialistas em instalação, manutenção e higienização de ar condicionado em Barracão-PR e região. Atendemos todo o Sudoeste do Paraná e Argentina. Orçamento grátis!"
      canonicalUrl="/"
      keywords="ar condicionado, instalação ar condicionado, manutenção ar condicionado, limpeza ar condicionado, Barracão, Paraná, climatização"
      type="local_business"
    />
    <Hero />
    <Services />
    <CoverageArea />
    <About />
    <Contact />
  </>
);

const ServicesIndexPage: React.FC = () => (
  <>
    <EnhancedSEO
      title="Nossos Serviços de Climatização"
      description="Conheça todos os serviços da JC Climatizar: instalação, manutenção preventiva, limpeza e higienização de ar condicionado. Atendemos residências e empresas."
      canonicalUrl="/servicos"
      keywords="serviços ar condicionado, instalação, manutenção, limpeza, higienização, climatização comercial"
      type="service"
    />
    <ServicesPage />
  </>
);

const ServiceDetailWrapper: React.FC<{ serviceId: string }> = ({ serviceId }) => {
  const serviceNames: Record<string, string> = {
    'instalacao': 'Instalação de Ar Condicionado',
    'manutencao': 'Manutenção Preventiva de Ar Condicionado',
    'limpeza': 'Limpeza e Higienização de Ar Condicionado',
    'infraestrutura': 'Infraestrutura para Ar Condicionado em Obras'
  };

  const serviceDescriptions: Record<string, string> = {
    'instalacao': 'Instalação profissional de ar condicionado split, cassete e piso teto. Garantia de fábrica preservada, tubulação 100% cobre, vácuo no sistema.',
    'manutencao': 'Manutenção preventiva de ar condicionado para aumentar a vida útil do equipamento e economizar até 30% de energia. PMOC para empresas.',
    'limpeza': 'Limpeza e higienização profunda de ar condicionado. Eliminação de fungos, bactérias e mau cheiro. Ar mais saudável para sua família.',
    'infraestrutura': 'Infraestrutura para ar condicionado em obras. Tubulação embutida, drenos e cabos passados antes do acabamento. Evite quebra-quebra!'
  };

  return (
    <>
      <EnhancedSEO
        title={serviceNames[serviceId] || 'Serviço'}
        description={serviceDescriptions[serviceId] || 'Serviço especializado de climatização'}
        canonicalUrl={`/servicos/${serviceId}`}
        keywords={`${serviceNames[serviceId]}, ar condicionado, Barracão, Paraná, climatização`}
        type="service"
        service={{
          name: serviceNames[serviceId] || 'Serviço',
          description: serviceDescriptions[serviceId] || '',
          provider: 'JC Climatizar'
        }}
      />
      <ServiceDetailPage id={serviceId} />
    </>
  );
};

const CityPageWrapper: React.FC<{ slug: string }> = ({ slug }) => {
  const cityName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');

  return (
    <>
      <EnhancedSEO
        title={`Ar Condicionado em ${cityName}`}
        description={`Instalação e manutenção de ar condicionado em ${cityName}. JC Climatizar atende toda a região com qualidade e preço justo. Solicite seu orçamento!`}
        canonicalUrl={`/ar-condicionado-${slug}`}
        keywords={`ar condicionado ${cityName}, instalação ar condicionado ${cityName}, manutenção ar condicionado ${cityName}`}
        type="local_business"
        city={cityName}
        service={{
          name: `Ar Condicionado em ${cityName}`,
          description: `Serviços de climatização em ${cityName}`,
          provider: 'JC Climatizar'
        }}
      />
      <CityPage slug={slug} />
    </>
  );
};

const ArgentinaPageWrapper: React.FC = () => (
  <>
    <EnhancedSEO
      title="Aire Acondicionado en Bernardo de Irigoyen"
      description="Instalación y mantenimiento de aire acondicionado en Bernardo de Irigoyen, Argentina. JC Climatizar - Atendemos la región fronteriza con Brasil. Presupuesto gratis!"
      canonicalUrl="/ar-condicionado-bernardo-irigoyen"
      keywords="aire acondicionado, Bernardo de Irigoyen, Argentina, instalación, mantenimiento, climatización"
      type="local_business"
      city="Bernardo de Irigoyen"
    />
    <ArgentinaCityPage />
  </>
);

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/servicos" element={<Layout><ServicesIndexPage /></Layout>} />
        <Route path="/servicos/instalacao" element={<Layout><ServiceDetailWrapper serviceId="instalacao" /></Layout>} />
        <Route path="/servicos/manutencao" element={<Layout><ServiceDetailWrapper serviceId="manutencao" /></Layout>} />
        <Route path="/servicos/limpeza" element={<Layout><ServiceDetailWrapper serviceId="limpeza" /></Layout>} />
        <Route path="/servicos/infraestrutura" element={<Layout><ServiceDetailWrapper serviceId="infraestrutura" /></Layout>} />
        <Route path="/ar-condicionado-bernardo-irigoyen" element={<Layout><ArgentinaPageWrapper /></Layout>} />
        <Route path="/ar-condicionado-barracao" element={<Layout><CityPageWrapper slug="barracao" /></Layout>} />
        <Route path="/ar-condicionado-bom-jesus-do-sul" element={<Layout><CityPageWrapper slug="bom-jesus-do-sul" /></Layout>} />
        <Route path="/ar-condicionado-realeza" element={<Layout><CityPageWrapper slug="realeza" /></Layout>} />
        <Route path="/ar-condicionado-ampere" element={<Layout><CityPageWrapper slug="ampere" /></Layout>} />
        <Route path="/ar-condicionado-santo-antonio-sudoeste" element={<Layout><CityPageWrapper slug="santo-antonio-sudoeste" /></Layout>} />
        <Route path="/ar-condicionado-pinhal-sao-bento" element={<Layout><CityPageWrapper slug="pinhal-sao-bento" /></Layout>} />
        <Route path="/ar-condicionado-capanema" element={<Layout><CityPageWrapper slug="capanema" /></Layout>} />
        <Route path="/ar-condicionado-planalto" element={<Layout><CityPageWrapper slug="planalto" /></Layout>} />
        <Route path="/ar-condicionado-pranchita" element={<Layout><CityPageWrapper slug="pranchita" /></Layout>} />
        <Route path="/ar-condicionado-dionisio-cerqueira" element={<Layout><CityPageWrapper slug="dionisio-cerqueira" /></Layout>} />
        <Route path="/ar-condicionado-sao-joao" element={<Layout><CityPageWrapper slug="sao-joao" /></Layout>} />
        <Route path="/ar-condicionado-renascenca" element={<Layout><CityPageWrapper slug="renascenca" /></Layout>} />
        <Route path="/ar-condicionado-marmeleiro" element={<Layout><CityPageWrapper slug="marmeleiro" /></Layout>} />
        <Route path="/ar-condicionado-francisco-beltrao" element={<Layout><CityPageWrapper slug="francisco-beltrao" /></Layout>} />
        <Route path="/ar-condicionado-pato-branco" element={<Layout><CityPageWrapper slug="pato-branco" /></Layout>} />
        <Route path="/ar-condicionado-chopinzinho" element={<Layout><CityPageWrapper slug="chopinzinho" /></Layout>} />
        <Route path="/ar-condicionado-coronel-vivida" element={<Layout><CityPageWrapper slug="coronel-vivida" /></Layout>} />
        <Route path="/ar-condicionado-dois-vizinhos" element={<Layout><CityPageWrapper slug="dois-vizinhos" /></Layout>} />
        <Route path="/ar-condicionado-salto-do-lontra" element={<Layout><CityPageWrapper slug="salto-do-lontra" /></Layout>} />
        <Route path="/ar-condicionado-salgado-filho" element={<Layout><CityPageWrapper slug="salgado-filho" /></Layout>} />
        <Route path="/ar-condicionado-nova-prata-do-iguacu" element={<Layout><CityPageWrapper slug="nova-prata-do-iguacu" /></Layout>} />
        <Route path="/ar-condicionado-vere" element={<Layout><CityPageWrapper slug="vere" /></Layout>} />
        <Route path="/ar-condicionado-eneas-marques" element={<Layout><CityPageWrapper slug="eneas-marques" /></Layout>} />
        <Route path="/ar-condicionado-flor-da-serra-do-sul" element={<Layout><CityPageWrapper slug="flor-da-serra-do-sul" /></Layout>} />
        <Route path="/ar-condicionado-manfrinopolis" element={<Layout><CityPageWrapper slug="manfrinopolis" /></Layout>} />
        <Route path="/ar-condicionado-perola-doeste" element={<Layout><CityPageWrapper slug="perola-doeste" /></Layout>} />
        <Route path="/ar-condicionado-santa-izabel-do-oeste" element={<Layout><CityPageWrapper slug="santa-izabel-do-oeste" /></Layout>} />
        <Route path="/ar-condicionado-boa-esperanca-do-iguacu" element={<Layout><CityPageWrapper slug="boa-esperanca-do-iguacu" /></Layout>} />
        <Route path="/ar-condicionado-cruzeiro-do-iguacu" element={<Layout><CityPageWrapper slug="cruzeiro-do-iguacu" /></Layout>} />
        <Route path="*" element={<Layout><HomePage /></Layout>} />
      </Routes>
    </>
  );
};

export default App;
