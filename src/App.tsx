import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { ModelShowcase } from './components/ModelShowcase';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './i18n';

function App() {
  useEffect(() => {
    document.title = 'Flash - AI-Powered Code Review';
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <ModelShowcase />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;