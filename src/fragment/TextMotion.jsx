import React from 'react';
import { motion } from 'framer-motion';

const TextMotion = ({ children }) => {
  const rubberBandAnimation = {
    whileHover: {
      scale: [
        1,
        1.25,
        0.85,
        1.15,
        0.95,
        1
      ],
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
        repeat: 1,
        repeatType: 'reverse'
      }
    },
    initial: {
      scale: 1 // Skala awal saat tidak dihover
    }

  };

  return (
    <motion.div
      {...rubberBandAnimation}
      style={{
        display: 'inline-block',
        lineHeight: '1em', // Adjusted to '1em' to maintain proper line height
        letterSpacing: '3px',
        gap: '10px'
      }}
    >
      {children}
    </motion.div>
  );
};

export default TextMotion;
