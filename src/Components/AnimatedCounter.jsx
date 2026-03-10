import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const AnimatedCounter = ({ target, duration = 2, startAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const end = parseInt(target);
    const totalFrames = duration * 60; // smooth 60fps
    const increment = end / totalFrames;

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [target, duration, startAnimation]);

  return (
    <motion.span
      className="font-bold text-3xl text-blue-600"
      initial={{ opacity: 0, y: 20 }}
      animate={startAnimation ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      {count}+
    </motion.span>
  );
};

export default AnimatedCounter;
