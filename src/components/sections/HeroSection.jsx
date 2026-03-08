import React from 'react';
import Icons from '../ui/Icons';
import FadeInSection from '../ui/FadeInSection';
import { generateWhatsAppLink } from '../../data/content';

export default function HeroSection() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="relative pt-40 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 bg-grid z-0"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none z-0 animate-float-delayed"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeInSection>
                    <div className="mx-auto w-fit inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm mb-8">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Disponibilidade Limitada: 2 Projetos</span>
                    </div>
                </FadeInSection>

                <FadeInSection delay={150}>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        Engenharia Digital de <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Alta Performance.
                        </span>
                    </h1>
                </FadeInSection>

                <FadeInSection delay={300}>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Elevamos a presença digital de empresas que buscam liderar seus mercados. Desenvolvemos interfaces sofisticadas e arquiteturas robustas focadas 100% em conversão e autoridade.
                    </p>
                </FadeInSection>

                <FadeInSection delay={450}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href={generateWhatsAppLink()} target="_blank" rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.1)]"
                        >
                            Solicitar Consultoria Gratuita
                            <div className="group-hover:translate-x-1 transition-transform">
                                <Icons.ArrowRight />
                            </div>
                        </a>
                        <button
                            onClick={() => scrollTo('portfolio')}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                        >
                            Ver Cases de Sucesso
                        </button>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}
