import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import ScrollProcess from "../Components/ScrollProgress"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[4rem]">
      <ScrollProcess />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 -mt-20 text-white py-34 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          About Blanket Technologies
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Driving digital transformation with innovative IT services, software
          solutions, and strategic consultancy across India and beyond.
        </motion.p>
      </section>

      {/* Introduction */}
      {/* WHO WE ARE */}
<section className="max-w-7xl mx-auto py-10 px-6 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl font-bold mb-6 text-blue-800"
  >
    Who We Are
  </motion.h2>

  <div className="bg-white shadow-xl rounded-3xl p-6 md:p-14 max-w-5xl mx-auto border border-gray-100">
    <p className="text-gray-700 text-lg leading-relaxed">
      Blanket Technologies is a full-stack IT services and consultancy firm
      providing end-to-end digital solutions to startups, enterprises, and
      government sectors.
      <br /><br />
      From web and mobile app development to cloud, cybersecurity, and digital
      marketing — we help organizations unlock their full digital potential.
      <br /><br />
      With a Pan-India presence and growing international clients, we transform
      businesses into scalable digital ecosystems.
    </p>
  </div>
</section>

{/* MISSION & VISION */}
<section className="bg-gradient-to-b from-gray-50 to-white py-24">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

    {[{
      title: "Our Mission",
      desc: "Empower businesses through innovative digital solutions that simplify processes and drive measurable growth."
    },{
      title: "Our Vision",
      desc: "To become one of India’s most trusted IT consultancies delivering scalable and future-ready solutions."
    }].map((item, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -8 }}
        className="relative bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition border"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-20 rounded-3xl"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            {item.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</section>

{/* CORE VALUES */}
<section className="max-w-7xl mx-auto py-24 px-6 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl font-bold mb-14 text-blue-800"
  >
    Our Core Values
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-10">
    {[
      "Innovation First",
      "Transparency & Trust",
      "Client Success",
      "Execution Excellence",
      "Team Collaboration",
      "Continuous Growth",
    ].map((title, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -10, scale: 1.03 }}
        className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition border border-gray-100"
      >
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold mb-4 mx-auto">
          {i + 1}
        </div>

        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {title}
        </h3>

        <p className="text-gray-500 text-sm">
          Delivering consistent value through strong principles and execution.
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* EXPERTISE */}
<section className="bg-gray-100 py-24">
  <h2 className="text-4xl font-bold text-center text-blue-800 mb-14">
    Our Expertise
  </h2>

  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">
    {[
      "Web & App Development",
      "Digital Marketing",
      "Cloud & IT Consulting",
      "Software Integration",
      "Cybersecurity",
      "Technical Support",
    ].map((title, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-8 rounded-3xl shadow-md hover:shadow-2xl transition border"
      >
        <h3 className="text-xl font-semibold text-blue-700 mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-sm">
          Scalable, secure, and modern solutions tailored for business growth.
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* CTA */}
<section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-24 text-center px-6">
  <h2 className="text-4xl font-bold mb-6">
    Let’s Build Something Great
  </h2>

  <p className="max-w-2xl mx-auto mb-10 opacity-90 text-lg">
    Accelerate your business with cutting-edge digital solutions and expert
    technology consulting.
  </p>

  <a
    href="/contact"
    className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:scale-105 transition inline-block shadow-lg"
  >
    Get Started
  </a>
</section>

{/* TEAM */}
<section className="max-w-7xl mx-auto py-24 px-6 text-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="text-4xl font-bold mb-10 text-blue-800"
  >
    Leadership Team
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-12">
    {[
      {
        name: "Amit Kumar",
        role: "Founder & CEO",
        img: "/team1A.jpg",
      },
      {
        name: "Kapil Tamrakar",
        role: "Business Development Head",
        img: "/team2K.jpg",
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition border"
      >
        <img
          src={member.img}
          alt={member.name}
          className="w-36 h-36 rounded-full mx-auto mb-6 border-4 border-blue-600 object-cover"
        />

        <h3 className="text-xl font-semibold text-blue-700">
          {member.name}
        </h3>
        <p className="text-gray-500">{member.role}</p>
      </motion.div>
    ))}
  </div>
</section>

      <Footer />
    </div>
  );
};

export default AboutUs;
