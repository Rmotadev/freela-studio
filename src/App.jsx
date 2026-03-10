import React, { Suspense, lazy, useEffect, useState } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import Preloader from './components/ui/Preloader';

// Critical components loaded directly (above the fold)
import HeroSection from './components/sections/HeroSection';
import TrustedBySection from './components/sections/TrustedBySection';

// Lazy loaded components (below the fold)
const ExpertiseSection = lazy(() => import('./components/sections/ExpertiseSection'));
const ServicesSection = lazy(() => import('./components/sections/ServicesSection'));
const PortfolioSection = lazy(() => import('./components/sections/PortfolioSection'));
const ProcessSection = lazy(() => import('./components/sections/ProcessSection'));
const TestimonialsSection = lazy(() => import('./components/sections/TestimonialsSection'));
const FAQSection = lazy(() => import('./components/sections/FAQSection'));
const CTASection = lazy(() => import('./components/sections/CTASection'));

// Simple loading fallback
const SectionLoader = () => <div className="py-24 flex justify-center items-center"><div className="w-8 h-8 rounded-full border-t-2 border-b-2 border-blue-500 animate-spin"></div></div>;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulador de Carregamento para a Experiência Premium (Preloader)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); // 2.8 segundos de loader inicial glorioso

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return; // Não iniciar rolagem antes de liberar o site

    // Timeout brutal para garantir que a HeroSection pintou todas as fontes antes do Lenis calcular a altura
    const initTimer = setTimeout(() => {
      const lenis = new Lenis({
        duration: 2.2, // Aumentado para desacelerar MUITO a transição
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothWheel: true,
        wheelMultiplier: 0.6, // Amortece o salto que as rodinhas de mouses baratos dão
        mouseMultiplier: 0.6,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }, 100); // 100ms de folga após o preloader sair

    return () => clearTimeout(initTimer);
  }, [isLoading]);

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-[#050505] text-zinc-300 antialiased font-body selection:bg-blue-500/30 selection:text-white">

        <AnimatePresence mode="wait">
          {isLoading && <Preloader key="preloader" />}
        </AnimatePresence>

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
          .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          html { scroll-behavior: smooth; }
        `}} />

        <Header />

        <main>
          <HeroSection />
          <TrustedBySection />

          <Suspense fallback={<SectionLoader />}>
            <ExpertiseSection />
            <ServicesSection />
            <PortfolioSection />
            <ProcessSection />
            <TestimonialsSection />
            <FAQSection />
            <CTASection />
          </Suspense>
        </main>

        <Footer />
        <FloatingWhatsApp />

      </div>
    </HelmetProvider>
  );
}
