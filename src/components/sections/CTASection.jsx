import React from 'react';
import FadeInSection from '../ui/FadeInSection';
import Icons from '../ui/Icons';
import { generateWhatsAppLink } from '../../data/content';

export default function CTASection() {
    return (
        <section className="py-32 px-6 relative overflow-hidden bg-zinc-950 border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <FadeInSection>
                    <div className="inline-flex items-center justify-center p-3 bg-zinc-900 border border-white/10 rounded-2xl mb-8">
                        <Icons.Shield />
                    </div>
                    <h2 className="text-4xl md:text-6xl font-sans font-extrabold text-white mb-8">
                        Pronto para elevar o padrão da sua marca?
                    </h2>
                    <p className="text-xl text-zinc-400 mb-12 font-light max-w-2xl mx-auto">
                        Projetos imersivos, de alto rendimento técnico e rigor visual aguardam o seu negócio. Agende uma call estratégica de 15 minutos, sem compromisso inicial.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href={generateWhatsAppLink()} target="_blank" rel="noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        >
                            Agendar Reunião Estratégica
                        </a>
                        <span className="text-sm text-zinc-500 flex items-center gap-2">
                            <Icons.CheckCircle /> Resposta executiva em até 2 horas.
                        </span>
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
}
