import React from 'react';
import Icons from '../ui/Icons';

export default function Footer() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <footer className="bg-[#020202] border-t border-white/5 py-16 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                <div className="md:col-span-2">
                    <div className="font-sans font-bold text-2xl text-white flex items-center gap-2 tracking-tight mb-4">
                        <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                            <Icons.Code />
                        </div>
                        Freela<span className="text-zinc-500">Studio</span>
                    </div>
                    <p className="text-zinc-500 font-light max-w-sm mb-8">
                        Arquitetura e design de interfaces para empresas que buscam o mais alto patamar de autoridade digital.
                    </p>
                    <p className="text-sm text-zinc-600">
                        FreelaStudio &copy; {new Date().getFullYear()} - Todos os direitos reservados.
                    </p>
                </div>

                <div>
                    <h5 className="text-white font-semibold mb-6">Navegação</h5>
                    <ul className="space-y-4 text-sm text-zinc-500 font-light">
                        <li><button onClick={() => scrollTo('expertise')} className="hover:text-white transition-colors" aria-label="Navegar para A Agência">A Agência</button></li>
                        <li><button onClick={() => scrollTo('servicos')} className="hover:text-white transition-colors" aria-label="Navegar para Serviços Corporativos">Serviços Corporativos</button></li>
                        <li><button onClick={() => scrollTo('portfolio')} className="hover:text-white transition-colors" aria-label="Navegar para Cases de Estudo">Cases de Estudo</button></li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-white font-semibold mb-6">Contato</h5>
                    <ul className="space-y-4 text-sm text-zinc-500 font-light">
                        <li><a href="mailto:contato@freelastudio.com" className="hover:text-white transition-colors divide-x divide-zinc-700">contato@freelastudio.com</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="https://dribbble.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Behance / Dribbble</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
