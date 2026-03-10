import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TypewriterText({ text, speed = 80, delay = 0, className = "" }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        let currentString = "";
        let currentIndex = 0;
        let typingInterval;
        let startTimeout;

        const startTyping = () => {
            setIsTyping(true);
            setDisplayedText('');
            currentString = "";
            currentIndex = 0;

            typingInterval = setInterval(() => {
                if (currentIndex < text.length) {
                    currentString += text[currentIndex];
                    setDisplayedText(currentString);
                    currentIndex++;
                } else {
                    clearInterval(typingInterval);
                    setIsTyping(false);
                    // Inicia o próximo ciclo (Deleta tudo e escreve novamente após 3 segundos)
                    setTimeout(() => {
                        startTyping();
                    }, 3000);
                }
            }, speed);
        };

        // Delay inicial da primeira montagem
        startTimeout = setTimeout(() => {
            startTyping();
        }, delay * 1000);

        return () => {
            clearInterval(typingInterval);
            clearTimeout(startTimeout);
        };
    }, [text, speed, delay]);

    return (
        <span className={`${className} inline-flex items-center`}>
            <span>{displayedText}</span>
            <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="inline-block w-[3px] h-[1em] bg-blue-500 ml-1 translate-y-1"
            />
        </span>
    );
}
