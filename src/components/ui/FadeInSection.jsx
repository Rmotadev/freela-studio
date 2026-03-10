import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, className = "", direction = "up", blur = true }) => {
    const getInitialY = () => {
        if (direction === "up") return 30;
        if (direction === "down") return -30;
        return 0;
    };

    const getInitialX = () => {
        if (direction === "left") return 30;
        if (direction === "right") return -30;
        return 0;
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: getInitialY(),
                x: getInitialX(),
                filter: blur ? "blur(10px)" : "blur(0px)"
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                filter: "blur(0px)"
            }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: delay / 1000,
                ease: [0.25, 0.25, 0, 1] // Curva out-quart (Premium)
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
