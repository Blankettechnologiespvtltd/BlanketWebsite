import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaGlobe,
  FaCogs,
} from "react-icons/fa";
import myPhoto from "../src/assets/myphoto.jpg"; // ✅ Update this path

const AnimatedHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${myPhoto})` }}
      />

      {/* 🔹 Animated Gradient Background */}
      <motion.div
        className="absolute w-[150%] h-[150%] bg-gradient-to-r from-blue-800 via-cyan-600 to-blue-800 opacity-40 blur-3xl"
        animate={{
          x: ["0%", "-15%", "0%"],
          y: ["0%", "10%", "0%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🔹 Floating Neon Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-cyan-400/40 rounded-full blur-2xl"
          style={{
            width: `${15 + Math.random() * 35}px`,
            height: `${15 + Math.random() * 35}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🔹 Floating Icons (React, Rocket, Code, etc) */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-[15%] left-[10%] text-cyan-400/30 text-6xl">
          <FaReact />
        </div>
        <div className="absolute bottom-[10%] right-[15%] text-blue-400/30 text-5xl">
          <FaRocket />
        </div>
        <div className="absolute top-[20%] right-[20%] text-cyan-300/30 text-5xl">
          <FaCode />
        </div>
        <div className="absolute bottom-[15%] left-[20%] text-blue-500/30 text-6xl">
          <FaCogs />
        </div>
      </motion.div>

      {/* 🔹 Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Building the Future with
          <br />
          <span className="text-cyan-400">Technology & Innovation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Blanket Technologies — Elevate your digital presence with
          <br />
          smart, scalable & creative IT solutions.
        </motion.p>

        {/* 🔹 Animated Icon Row */}
        <motion.div
          className="flex items-center justify-center gap-10 mb-10 text-4xl text-cyan-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
            <FaLaptopCode title="Web Development" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, rotate: -10 }}>
            <FaGlobe title="Digital Marketing" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.3, rotate: 10 }}>
            <FaRocket title="Innovation" />
          </motion.div>
        </motion.div>

        {/* 🔹 Button */}
        <motion.button
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 25px #00ffff88",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 rounded-full text-white font-semibold shadow-lg transition-all"
        >
          Explore Our Services 🚀
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AnimatedHero;
