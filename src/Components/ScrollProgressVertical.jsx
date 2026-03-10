import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgressVertical = () => {
  const { scrollYProgress } = useScroll();

  // Smooth animation effect
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 bg-gradient-to-b from-blue-500 via-sky-400 to-cyan-300 origin-top z-50"
      style={{ scaleY }}
    />
  );
};

export default ScrollProgressVertical;
