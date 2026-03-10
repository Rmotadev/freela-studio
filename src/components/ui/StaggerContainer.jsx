import React from 'react';
import { motion } from 'framer-motion';

export default function StaggerContainer({ children, staggerDelay = 0.1, delayChildren = 0, className = "" }) {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: delayChildren
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
