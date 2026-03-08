import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { portfolioData } from '../../data/content';
import Icons from '../ui/Icons';

export default function PortfolioSection() {
    return (
        <section id="portfolio" className="py-24 px-6 relative">
            <div className="absolute inset-0 bg-grid opacity-50"></div>
            <div className="max-w-7xl mx-auto relative z-10">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Cases de Sucesso</h2>
                        <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">A excelência evidenciada na prática.</h3>
                        <p className="text-zinc-400 max-w-2xl mx-auto font-light">Projetos rigorosos que redefiniram o posicionamento de mercado de nossos clientes.</p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.map((item, index) => (
                        <FadeInSection key={index} delay={index * 150}>
                            <div className="group cursor-pointer">
                                <div className="relative w-full aspect-[4/3] bg-zinc-900 rounded-2xl overflow-hidden mb-6 border border-white/10 shadow-lg">
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <img
                                        src={item.image}
                                        alt={`Interface do projeto para o cliente ${item.client}`}
                                        className="absolute inset-0 w-full h-full object-cover object-top opacity-60 transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-zinc-950/80 backdrop-blur-md text-xs font-bold px-3 py-1.5 rounded text-zinc-300 border border-white/10 uppercase tracking-widest">
                                            {item.tag}
                                        </span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-sans font-bold text-white mb-2">{item.client}</h4>
                                <p className="text-zinc-400 mb-4 font-light text-sm">{item.type}</p>

                                <div className="flex items-center gap-3 py-3 border-t border-white/5">
                                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                        <Icons.Chart />
                                    </div>
                                    <span className="text-sm font-medium text-zinc-300">{item.result}</span>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
