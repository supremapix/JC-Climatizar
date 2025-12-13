import React, { useEffect, useState } from 'react';
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

const App: React.FC = () => {
  // Use hash for routing to avoid 404s on static hosting without rewrite rules
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    // Remove loading screen when React mounts
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    // Handle hash changes
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // 1. Specific Service Detail Route (e.g., #/servicos/instalacao)
  // This must come BEFORE #/servicos check to match correctly
  if (currentHash.startsWith('#/servicos/')) {
    const serviceId = currentHash.replace('#/servicos/', '');
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
        <Header />
        <main>
          <ServiceDetailPage id={serviceId} />
        </main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </div>
    );
  }

  // 2. Services Index Page Route
  if (currentHash === '#/servicos') {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
        <Header />
        <main>
          <ServicesPage />
        </main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </div>
    );
  }

  // 3. Argentina Page Route
  if (currentHash === '#/ar-condicionado-bernardo-irigoyen') {
      return (
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
            <Header />
            <main>
                <ArgentinaCityPage />
            </main>
            <Footer />
            <FloatingButtons />
            <CookieBanner />
        </div>
      );
  }

  // 4. City Pages Route (e.g. #/ar-condicionado-barracao)
  if (currentHash.startsWith('#/ar-condicionado-')) {
    const slug = currentHash.replace('#/ar-condicionado-', '');
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
        <Header />
        <main>
          <CityPage slug={slug} />
        </main>
        <Footer />
        <FloatingButtons />
        <CookieBanner />
      </div>
    );
  }

  // 5. Default / Home Route
  // Handles empty hash, #, or anchor links like #services, #contact
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
      <Header />
      <main>
        <Hero />
        <Services />
        <CoverageArea />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
};

export default App;