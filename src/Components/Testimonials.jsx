import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Benjamin Scott",
    position: "Technology Executive, JovaTech",
    review:
      "Blanket Technologies completely transformed our digital presence. The website they built is fast, modern, and user-friendly.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sophia Harris",
    position: "Marketing Head, BisionPro",
    review:
      "Their digital marketing team delivered beyond expectations. We saw 200% growth in leads within two months!",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    name: "Matthew Robinson",
    position: "Technical Lead, HkyZone",
    review:
      "Professional, creative, and result-oriented. Blanket Technologies is our go-to partner for every web project.",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Mia Allen",
    position: "Product Manager, CloudSyn",
    review:
      "Their attention to detail and support after delivery are unmatched. Highly recommend their services!",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // 👇 Auto slide function (this runs every 5 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <section className="bg-gray-100 py-16 mt-10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-lg rounded-2xl p-8 md:p-10"
            >
              <Quote className="mx-auto text-blue-600 w-10 h-10 mb-4" />
              <p className="text-gray-700 text-lg italic mb-6">
                "{current.review}"
              </p>
              <div className="flex flex-col items-center">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-16 h-16 rounded-full mb-3"
                />
                <h4 className="text-xl font-semibold text-gray-800">
                  {current.name}
                </h4>
                <p className="text-blue-600">{current.position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 flex justify-between items-center px-3">
            <button
              onClick={prev}
              className="bg-white shadow-md p-2 rounded-full hover:bg-blue-50 transition"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="bg-white shadow-md p-2 rounded-full hover:bg-blue-50 transition"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            ></div>
          ))}

          
        </div>
        
          
      </div>
    </section>
  );
};

export default Testimonials;
