import React from 'react';

export default function TrustedBySection() {
    return (
        <section className="py-10 border-y border-white/5 bg-[#050505] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <p className="text-center text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-6">Confiança estabelecida com empresas de alto nível</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <h5 className="text-xl font-sans font-bold text-white tracking-tighter">ACME<span className="font-light">Corp</span></h5>
                    <h5 className="text-xl font-sans font-bold text-white tracking-widest">GLOBAL<span className="text-blue-500">.</span></h5>
                    <h5 className="text-xl font-sans font-extrabold text-white uppercase italic">Nexus<span className="font-light">Tech</span></h5>
                    <h5 className="text-xl font-serif font-bold text-white tracking-tight">Vanguard</h5>
                    <h5 className="text-xl font-sans font-semibold text-white tracking-widest border-2 border-white px-2">ELEVATE</h5>
                </div>
            </div>
        </section>
    );
}
