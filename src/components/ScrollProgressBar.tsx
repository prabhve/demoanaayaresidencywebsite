import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E29600] via-[#F8BB13] to-[#E29600] origin-left z-50 pointer-events-none shadow-[0_1px_8px_rgba(226,150,0,0.6)]"
      style={{ scaleX }}
    />
  );
};
