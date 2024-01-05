'use client';

import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
};

const HandWave = () => {
  return (
    <motion.div
      className="inline-block"
      whileHover={{
        rotate: [0, 15, -15, 0],
        transition: { duration: 0.5 },
      }}
      initial={{
        opacity: 0,
        rotate: -90,
        scale: 0.65,
      }}
      animate={{
        opacity: 100,
        rotate: 0,
        scale: 1,
      }}
      transition={spring}
    >
      👋🏻
    </motion.div>
  );
};

export default HandWave;
