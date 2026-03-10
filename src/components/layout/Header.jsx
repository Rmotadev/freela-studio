import React from 'react';
import Icons from '../ui/Icons';
import { generateWhatsAppLink } from '../../data/content';

export default function Header() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/95 border-b border-white/5 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div
                    onClick={scrollToTop}
                    className="font-sans font-bold text-2xl text-white tracking-tight flex items-center gap-2 cursor-pointer"
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                        <Icons.Code />
                    </div>
                    Freela<span className="text-zinc-500 font-medium">Studio</span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    <button onClick={() => scrollTo('expertise')} className="hover:text-white transition-colors cursor-pointer">Expertise</button>
                    <button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors cursor-pointer">Soluções</button>
                    <button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors cursor-pointer">Cases de Sucesso</button>
                    <button onClick={() => scrollTo('processo')} className="hover:text-white transition-colors cursor-pointer">Metodologia</button>
                </nav>
                <a
                    href={generateWhatsAppLink()} target="_blank" rel="noreferrer"
                    className="hidden md:flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-all duration-300"
                >
                    Agendar Reunião
                </a>
            </div>
        </header>
    );
}
