import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Icons from './Icons';

export default function Preloader() {

    useEffect(() => {
        // Bloqueia a rolagem do corpo enquanto o Preloader estiver montado
        document.body.style.overflow = 'hidden';
        window.scrollTo(0, 0); // Garante que o usuario está no topo quando preloader sair

        return () => {
            // Libera a rolagem quando ele for desmontado
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Curva de aceleração de saída teatral (Custom Cubic Bezier)
            }}
            className="fixed inset-0 z-100 bg-[#050505] flex flex-col items-center justify-center pointer-events-none"
        >
            <div className="flex flex-col items-center gap-6">

                {/* Ícone Revelando */}
                <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: -90 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white"
                >
                    <Icons.Code />
                </motion.div>

                {/* Textos da Agência */}
                <div className="text-center overflow-hidden h-14">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
                        className="font-sans font-bold text-3xl md:text-5xl text-white tracking-tight"
                    >
                        Freela<span className="text-zinc-500">Studio</span>
                    </motion.div>
                </div>

                <div className="overflow-hidden h-8">
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
                        className="text-blue-500 text-sm tracking-[0.2em] uppercase font-semibold"
                    >
                        Engenharia Digital
                    </motion.div>
                </div>

                {/* Falsa Barra de Progresso Mininimalista */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "200px", opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
                    className="h-[2px] bg-zinc-800 mt-8 rounded-full overflow-hidden"
                >
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        transition={{ duration: 1.5, ease: "linear", delay: 0.5 }}
                        className="h-full w-full bg-blue-500"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
}
