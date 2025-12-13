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

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // Remove loading screen when React mounts
    const loader = document.getElementById('loading-screen');
    if (loader) {
      loader.style.opacity = '0';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }

    // Handle back/forward browser buttons
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple Client-Side Router logic
  // If path starts with /ar-condicionado-, render CityPage
  if (currentPath.startsWith('/ar-condicionado-')) {
    const slug = currentPath.replace('/ar-condicionado-', '');
    return (
      <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-jc-gold selection:text-jc-navy">
        <Header />
        <main>
          <CityPage slug={slug} />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    );
  }

  // Default Main Page
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
    </div>
  );
};

export default App;