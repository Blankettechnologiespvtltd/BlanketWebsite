import React from "react";
import { motion } from "framer-motion";
import { Palette, Monitor, Sparkles, Users, PenTool, CheckCircle } from "lucide-react";
import Footer from "../Components/Footer";

const UIUXDesign = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[6em]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 -mt-31 text-white py-34 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          UI/UX Design Services
        </motion.h1>
        <p className="max-w-2xl text-xl mx-auto opacity-90">
          Transforming ideas into meaningful digital experiences.  
          Blanket Technologies crafts stunning, user-friendly interfaces that engage and convert — delivering seamless design solutions across <span className="font-semibold">Pan India</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1000&q=60"
            alt="UI UX Design"
            className=" h-[26rem] rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Creative & Human-Centered Design Approach
          </h2>
          <p className="text-gray-600 mb-6">
            Our UI/UX design team focuses on crafting intuitive and visually appealing interfaces. 
            We believe that great design isn’t just about beauty — it’s about solving problems, improving usability, and creating memorable digital experiences that strengthen your brand identity.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><CheckCircle className="text-pink-600 mr-2" /> Mobile App & Web App UI Design</li>
            <li className="flex items-center"><CheckCircle className="text-pink-600 mr-2" /> Wireframes, Prototypes & Interactive Mockups</li>
            <li className="flex items-center"><CheckCircle className="text-pink-600 mr-2" /> UX Research & User Journey Mapping</li>
            <li className="flex items-center"><CheckCircle className="text-pink-600 mr-2" /> Branding & Visual Identity Design</li>
            <li className="flex items-center"><CheckCircle className="text-pink-600 mr-2" /> Responsive, Conversion-Focused Interfaces</li>
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our UI/UX Design Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { step: "01", title: "Research", desc: "Understanding user needs, behaviors, and business goals.", icon: <Users className="mx-auto text-pink-600 w-10 h-10 mb-3" /> },
            { step: "02", title: "Wireframing", desc: "Structuring layout and information architecture.", icon: <Monitor className="mx-auto text-pink-600 w-10 h-10 mb-3" /> },
            { step: "03", title: "Design", desc: "Crafting visually engaging interfaces with attention to detail.", icon: <Palette className="mx-auto text-pink-600 w-10 h-10 mb-3" /> },
            { step: "04", title: "Prototyping", desc: "Creating interactive mockups for real user testing.", icon: <PenTool className="mx-auto text-pink-600 w-10 h-10 mb-3" /> },
            { step: "05", title: "Delivery", desc: "Finalizing assets & collaborating with developers for launch.", icon: <Sparkles className="mx-auto text-pink-600 w-10 h-10 mb-3" /> },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {phase.icon}
              <h3 className="text-2xl font-bold text-pink-600 mb-2">{phase.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Designing for Every Pixel, Every Experience 
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          From conceptualization to final prototype — Blanket Technologies offers
          world-class UI/UX design services across Pan India. We ensure every user
          touchpoint is engaging, consistent, and built to convert.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Start Your Design Journey
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default UIUXDesign;
