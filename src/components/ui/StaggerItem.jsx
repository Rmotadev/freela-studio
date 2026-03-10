import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerItem({ children, className = "", direction = "up" }) {
    // Definindo o transform inicial dependendo da direção desejada
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

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: getInitialY(),
            x: getInitialX(),
            filter: "blur(10px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.25, 0, 1] // Curva suave (out-quart)
            }
        }
    };

    return (
        <motion.div variants={itemVariants} className={className}>
            {children}
        </motion.div>
    );
}
