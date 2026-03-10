import React from 'react';
import { motion } from 'framer-motion';

const FadeInSection = ({ children, delay = 0, className = "" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.8,
                delay: delay / 1000,
                ease: [0.25, 0.25, 0, 1]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;
