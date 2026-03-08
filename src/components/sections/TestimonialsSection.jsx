import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import { testimonialsData } from '../../data/content';
import Icons from '../ui/Icons';

export default function TestimonialsSection() {
    return (
        <section id="depoimentos" className="py-24 px-6 relative overflow-hidden bg-zinc-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto relative z-10">
                <FadeInSection>
                    <div className="mb-16 text-center">
                        <h2 className="text-sm font-semibold text-blue-500 uppercase tracking-widest mb-3">Reconhecimento</h2>
                        <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Referendado por líderes de mercado.</h3>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialsData.map((item, index) => (
                        <FadeInSection key={index} delay={index * 150}>
                            <div className="bg-zinc-900/60 p-8 rounded-2xl border border-white/5 flex flex-col h-full hover:bg-zinc-900 transition-colors">
                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Icons.Star key={star} />)}
                                </div>
                                <p className="text-zinc-300 leading-relaxed font-light italic mb-8 grow">"{item.text}"</p>
                                <div className="flex items-center gap-4 mt-auto">
                                    <img src={item.avatar} alt={`Foto de perfil de ${item.name}`} className="w-12 h-12 rounded-full object-cover border-2 border-zinc-800 grayscale" loading="lazy" />
                                    <div>
                                        <p className="font-bold text-white font-sans text-sm">{item.name}</p>
                                        <p className="text-xs text-zinc-500">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
