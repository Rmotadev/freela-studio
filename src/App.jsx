import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

import HeroSection from './components/sections/HeroSection';
import TrustedBySection from './components/sections/TrustedBySection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import ServicesSection from './components/sections/ServicesSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import FAQSection from './components/sections/FAQSection';
import CTASection from './components/sections/CTASection';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#050505] text-zinc-300 antialiased font-body selection:bg-blue-500/30 selection:text-white">

        {/* Gestão de Metas de SEO (Headless) */}
        <Helmet>
          <title>FreelaStudio | Engenharia Digital de Alta Performance</title>
          <meta name="description" content="Elevamos a presença digital de empresas que buscam liderar seus mercados. Desenvolvemos interfaces sofisticadas focadas em conversão e autoridade." />
          <meta property="og:title" content="FreelaStudio | Alta Performance Web" />
          <meta property="og:description" content="Desenvolvimento focado em Vendas e Autoridade para o mercado B2B." />
          <meta property="og:type" content="website" />
          <meta name="theme-color" content="#050505" />
        </Helmet>

        {/* Estilos Base Globais */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
          .bg-grid {
            background-size: 30px 30px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            animation: pan 90s linear infinite;
          }
        `}} />

        <Header />

        <main>
          <HeroSection />
          <TrustedBySection />
          <ExpertiseSection />
          <ServicesSection />
          <PortfolioSection />
          <ProcessSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
        </main>

        <Footer />
        <FloatingWhatsApp />

      </div>
    </HelmetProvider>
  );
}
