import React, { useState } from 'react';
import FadeInSection from '../ui/FadeInSection';
import { faqData } from '../../data/content';
import Icons from '../ui/Icons';

function FAQAccordion({ faq, isOpen, onClick }) {
    return (
        <div
            className={`border-b ${isOpen ? 'border-blue-500/50' : 'border-white/10 hover:border-white/30'} transition-all duration-300 cursor-pointer pb-4`}
            onClick={onClick}
        >
            <button
                className="py-4 flex items-center justify-between group w-full text-left"
                aria-expanded={isOpen}
            >
                <h4 className="font-semibold text-white pr-8 text-lg group-hover:text-blue-300 transition-colors">{faq.q}</h4>
                <div className="text-zinc-500 shrink-0">
                    <Icons.ChevronDown open={isOpen} />
                </div>
            </button>
            <div
                className={`text-zinc-400 overflow-hidden transition-all duration-300 ease-in-out font-light ${isOpen ? 'max-h-60 pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                aria-hidden={!isOpen}
            >
                <p className="leading-relaxed">{faq.a}</p>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-24 px-6 border-t border-white/5">
            <div className="max-w-3xl mx-auto">
                <FadeInSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-4">Perguntas Frequentes</h2>
                    </div>
                </FadeInSection>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <FadeInSection key={index} delay={index * 100}>
                            <FAQAccordion
                                faq={faq}
                                isOpen={openFaq === index}
                                onClick={() => toggleFaq(index)}
                            />
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
