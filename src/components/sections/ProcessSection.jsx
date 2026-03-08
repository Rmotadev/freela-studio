import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { processData } from '../../data/content';

export default function ProcessSection() {
    return (
        <section id="processo" className="py-24 px-6 bg-zinc-950 border-t border-white/5">
            <div className="max-w-4xl mx-auto">
                <FadeInSection>
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Metodologia</h2>
                        <h3 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">Um processo previsível e cirúrgico.</h3>
                        <p className="text-zinc-400">Eliminamos o risco do seu investimento através de uma gestão de projeto transparente.</p>
                    </div>
                </FadeInSection>

                <div className="space-y-12">
                    {processData.map((item, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                                <div className="shrink-0 font-sans font-extrabold text-5xl md:text-7xl text-zinc-800 group-hover:text-blue-500/50 transition-colors duration-500">
                                    {item.step}
                                </div>
                                <div className="pt-2 md:pt-4">
                                    <h4 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h4>
                                    <p className="text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
