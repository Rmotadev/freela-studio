import React from 'react';
import Icons from '../ui/Icons';
import StaggerContainer from '../ui/StaggerContainer';
import StaggerItem from '../ui/StaggerItem';
import TypewriterText from '../ui/TypewriterText';
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
            {/* Background Premium: Grid Tecnológico Suave */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)] pointer-events-none z-0"></div>

            {/* Glowing Orbs Animados (Efeito Glass/Depth) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-float z-0"></div>
            <div className="absolute top-[10%] right-[-10%] w-[30vw] h-[30vw] max-w-[500px] max-h-[500px] bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-float-delayed z-0"></div>

            <StaggerContainer staggerDelay={0.15} className="max-w-4xl mx-auto text-center relative z-10">
                <StaggerItem>
                    <div className="mx-auto w-fit inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-[#0a1228] mb-8">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-blue-300 text-xs font-semibold uppercase tracking-wider">Disponibilidade Limitada: 2 Projetos</span>
                    </div>
                </StaggerItem>

                <StaggerItem>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                        Posicionamento Premium <br className="hidden md:block" />
                        <TypewriterText
                            text="& Alta Conversão."
                            delay={0.5}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500"
                        />
                    </h1>
                </StaggerItem>

                <StaggerItem>
                    <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Desenvolvemos plataformas web sofisticadas e Landing Pages focadas em conversão que transformam visitantes casuais em leads corporativos altamente qualificados. Chega de perder mercado por um design genérico.
                    </p>
                </StaggerItem>

                <StaggerItem>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                        <a
                            href={generateWhatsAppLink()} target="_blank" rel="noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-zinc-200 transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 active:scale-95"
                        >
                            Solicitar Consultoria Gratuita
                            <div className="group-hover:translate-x-1 transition-transform">
                                <Icons.ArrowRight />
                            </div>
                        </a>
                        <button
                            onClick={() => scrollTo('portfolio')}
                            className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/5 transition-colors cursor-pointer hover:scale-105 active:scale-95"
                        >
                            Ver Cases de Sucesso
                        </button>
                    </div>
                </StaggerItem>
            </StaggerContainer>
        </section>
    );
}
