import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  yOffset?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = '100%',
  delay = 0.2,
  yOffset = 40,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
