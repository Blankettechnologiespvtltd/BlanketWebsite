import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "AI and Data Analytics",
    desc: "Harness the power of artificial intelligence and data analytics to unlock real-time insights, streamline operations, and make data-driven business decisions. Our AI solutions enable automation, predictive modeling, and performance optimization to stay ahead of the competition.",
    img: "ai.jpg",
  },
  {
    title: "Cloud Transformation",
    desc: "Empower your digital infrastructure with scalable, secure, and reliable cloud solutions. From migration to management, we help enterprises modernize systems, reduce costs, and enhance collaboration through next-gen cloud platforms.",
    img: "cloud1.jpg",
  },
  {
    title: "Cognitive Business Operations",
    desc: "Reinvent your business operations with automation, cognitive intelligence, and AI-driven insights. Our approach integrates machine learning and process optimization to build smarter, adaptive, and efficient business workflows.",
    img: "cyber2.jpg",
  },
  {
    title: "Consulting & Strategy",
    desc: "Our consulting experts work alongside your leadership team to craft data-backed strategies that drive growth, operational excellence, and digital transformation. We bring global experience and cutting-edge technology together for impactful change.",
    img: "/Consulting & Strategy.jpg",
  },
  {
    title: "Cybersecurity & Compliance",
    desc: "Protect your digital ecosystem with enterprise-grade security solutions. From threat intelligence to cloud protection and data privacy, we ensure your organization stays resilient in the evolving cybersecurity landscape.",
    img: "/Cybersecurity & Compliance.jpg",
  },
  {
    title: "Digital Marketing",
    desc: "Boost your brand visibility and conversion rates with tailored marketing strategies that combine SEO, social media, automation, and analytics. Our digital solutions deliver measurable ROI and strong customer engagement.",
    img: "/Digital Marketing.jpg",
  },
  {
    title: "Web & App Development",
    desc: "From intuitive UI/UX design to scalable backend systems, we develop high-performance web and mobile applications that enhance customer experience and accelerate business growth.",
    img: "/Web & App Development.jpg",
  },
];

const fadeVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

const AutoCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 px-5 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="uppercase text-gray-400 text-sm tracking-widest mb-2">
          Services
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mb-10">
          Transform Your Business With Advanced Technologies
        </h3>

        <div className="relative h-[480px] md:h-[520px] overflow-hidden rounded-3xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              variants={fadeVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col md:flex-row items-center justify-center bg-gray-800"
            >
              <img
                src={services[current].img}
                alt={services[current].title}
                className="w-full md:w-1/2 h-60 md:h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
              />
              <div className="p-8 md:p-12 text-left md:w-1/2">
                <h4 className="text-2xl md:text-3xl font-semibold mb-4">
                  {services[current].title}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {services[current].desc}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots navigation */}
        <div className="flex justify-center mt-8 space-x-3">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-all ${
                current === i ? "bg-white w-8" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoCarousel;
