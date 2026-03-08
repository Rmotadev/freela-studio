import React from 'react';
import FadeInSection from '../ui/FadeInSection';

export default function ExpertiseSection() {
    return (
        <section id="expertise" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <FadeInSection>
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">O Engenheiro</h2>
                        <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6 leading-tight">
                            Não somos apenas uma agência. Somos seus parceiros técnicos.
                        </h3>
                        <p className="text-zinc-400 leading-relaxed mb-6 font-light">
                            A maioria dos sites corporativos sofre de três problemas crônicos: lentidão, design genérico incompatível com o valor da marca, e falha em conduzir o visitante a uma ação clara.
                        </p>
                        <p className="text-zinc-400 leading-relaxed mb-8 font-light">
                            Meu foco é eliminar essas fricções. Aliando os mais modernos frameworks de JavaScript (React/Next.js) com um design editorial e rigoroso focado em dados, crio ativos digitais que não apenas impressionam, mas que tornam a venda do seu serviço inevitável.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="text-4xl font-sans font-bold text-white mb-1"><span className="text-blue-500">+</span>8<span className="text-lg text-zinc-500 font-medium">anos</span></h4>
                                <p className="text-sm text-zinc-500">de experiência técnica refinada</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-sans font-bold text-white mb-1"><span className="text-blue-500">+</span>50</h4>
                                <p className="text-sm text-zinc-500">projetos corporativos entregues</p>
                            </div>
                        </div>
                    </FadeInSection>

                    <FadeInSection delay={200}>
                        <div className="relative animate-float">
                            <div className="absolute -inset-4 border border-white/5 bg-zinc-900/50 rounded-2xl transform rotate-3"></div>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-4/5 md:aspect-square bg-zinc-900">
                                <img
                                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop"
                                    alt="Tela de código limpo e editor de interface"
                                    className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent"></div>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>
    );
}
