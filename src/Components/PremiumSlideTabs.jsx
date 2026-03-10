import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Smartphone, Rocket, LineChart, Cloud, Cpu } from "lucide-react";
const PremiumSlideTabs = () => {
  const items = [
    {
      icon: <Code2 className="w-7 h-7 text-blue-600" />,
      title: "Web Development",
    },
    {
      icon: <Smartphone className="w-7 h-7 text-purple-600" />,
      title: "App Development",
    },
    {
      icon: <LineChart className="w-7 h-7 text-green-600" />,
      title: "Digital Marketing",
    },
    {
      icon: <Rocket className="w-7 h-7 text-pink-600" />,
      title: "IT Consultancy",
    },
    {
      icon: <Cloud className="w-7 h-7 text-cyan-600" />,
      title: "Cloud Solutions",
    },
    {
      icon: <Cpu className="w-7 h-7 text-yellow-600" />,
      title: "AI & Automation",
    },
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [items.length]);
  return (
    <div className="relative h-28 w-[90%] max-w-xl mx-auto flex items-center justify-center overflow-hidden ">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute flex flex-col items-center justify-center gap-2"
        >
          <div className="flex items-center gap-2 text-4xl">
            {items[index].icon}
            <h2 className="text-2xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent ">
              {items[index].title}
            </h2>
          </div>
          <div className="w-24 h-[2px] bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default PremiumSlideTabs;
