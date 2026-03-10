import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import StaggerContainer from '../ui/StaggerContainer';
import StaggerItem from '../ui/StaggerItem';
import { servicesData } from '../../data/content';
import Icons from '../ui/Icons';

export default function ServicesSection() {
    return (
        <section id="servicos" className="py-24 px-6 bg-zinc-950/50 border-y border-white/5 relative">
            <div className="max-w-7xl mx-auto">
                <FadeInSection>
                    <div className="mb-16 md:flex justify-between items-end">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Soluções Corporativas</h2>
                            <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Arquitetura digital desenvolvida para escalar.</h3>
                        </div>
                        <p className="text-zinc-500 md:max-w-xs mt-6 md:mt-0 font-light">Especialidade em produtos digitais de alto rendimento para empresas exigentes.</p>
                    </div>
                </FadeInSection>

                <StaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesData.map((service, index) => {
                        const IconRender = Icons[service.icon];
                        return (
                            <StaggerItem key={index}>
                                <div className="h-full bg-zinc-900 border border-white/5 hover:border-blue-500/30 p-8 md:p-10 rounded-2xl transition-all duration-500 hover:bg-zinc-900 group hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(37,99,235,0.1)]">
                                    <div className="flex flex-col md:flex-row gap-6">
                                        <div className="shrink-0 w-14 h-14 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-lg group-hover:rotate-3 group-hover:scale-110">
                                            {IconRender && <IconRender />}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-sans font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{service.title}</h4>
                                            <p className="text-zinc-400 mb-6 text-sm leading-relaxed font-light">{service.description}</p>
                                            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerContainer>
            </div>
        </section>
    );
}
