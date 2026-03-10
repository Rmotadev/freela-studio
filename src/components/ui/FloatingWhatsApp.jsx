import React from 'react';
import Icons from '../ui/Icons';
import { generateWhatsAppLink } from '../../data/content';
import FadeInSection from '../ui/FadeInSection';

export default function FloatingWhatsApp() {
    return (
        <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#051a0d] border border-[#25D366]/30 text-[#25D366] p-4 rounded-full shadow-2xl hover:bg-[#25D366] hover:text-black hover:scale-105 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Agendar via WhatsApp"
        >
            <div className="animate-bounce">
                <Icons.WhatsApp />
            </div>
        </a>
    );
}
