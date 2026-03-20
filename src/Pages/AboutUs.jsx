import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
import ScrollProcess from "../Components/ScrollProgress"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[5rem]">
      <ScrollProcess />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-700 to-indigo-700 text-white py-20 px-6 text-center">
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
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-blue-700"
        >
          Who We Are
        </motion.h2>
        <p className="text-gray-600 max-w-4xl mx-auto text-2xl">
          Blanket Technologies is a full-stack IT services and consultancy firm
          providing end-to-end digital solutions to startups, enterprises, and
          government sectors. From web and mobile app development to cloud,
          cybersecurity, and digital marketing — we help organizations unlock
          their full digital potential.
          <br />
          <br />
          With a Pan-India presence and a growing network of international
          clients, we combine innovation, strategy, and execution to transform
          businesses into scalable digital ecosystems.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To empower businesses through technology innovation, delivering
              cutting-edge digital solutions that simplify complex business
              processes, enhance operational efficiency, and drive measurable
              results. We aim to be a trusted technology partner for companies
              seeking long-term digital growth and sustainable success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become one of India’s most respected IT consultancies by
              delivering innovative, ethical, and scalable digital solutions.
              Our vision is to bridge the gap between technology and business,
              making digital excellence accessible to every organization, big or
              small.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-6 text-blue-700"
        >
          Our Core Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              desc: "We constantly experiment, adapt, and innovate to build digital products that stand out in the market.",
            },
            {
              title: "Transparency & Trust",
              desc: "We maintain clear communication, honesty, and integrity in every project and client relationship.",
            },
            {
              title: "Client Success",
              desc: "Our success is measured by our clients’ growth — we work as their strategic technology partner, not just a vendor.",
            },
            {
              title: "Excellence in Execution",
              desc: "We combine modern design principles, agile methodology, and robust coding standards for top-quality results.",
            },
            {
              title: "Team Collaboration",
              desc: "We believe in people, teamwork, and shared success — fostering an environment of learning and growth.",
            },
            {
              title: "Continuous Improvement",
              desc: "We evolve with technology — upgrading our skills and solutions to stay ahead of market trends.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Our Expertise</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            {
              title: "Web & App Development",
              desc: "Modern, responsive, and scalable websites and mobile apps built using cutting-edge technologies.",
            },
            {
              title: "Digital Marketing & Branding",
              desc: "Comprehensive online marketing strategies to boost visibility, engagement, and conversions.",
            },
            {
              title: "IT Consulting & Cloud Solutions",
              desc: "Helping enterprises adopt cloud and automation technologies for improved performance and scalability.",
            },
            {
              title: "Software Integration",
              desc: "Streamlining your digital ecosystem by integrating ERP, CRM, and third-party platforms seamlessly.",
            },
            {
              title: "Cybersecurity",
              desc: "Protecting your data and digital assets through secure frameworks and proactive monitoring systems.",
            },
            {
              title: "Technical Support",
              desc: "24×7 dedicated support and maintenance ensuring business continuity and reliability.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Partner With Blanket Technologies
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Ready to accelerate your business transformation? Join hands with our
          IT experts and experience next-level digital innovation, performance,
          and growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Connect With Us
        </a>
      </section>
      {/* Team Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-blue-700"
        >
          Meet Our Leadership Team
        </motion.h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          The people behind Blanket Technologies are passionate innovators,
          skilled engineers, and visionary leaders. Together, we strive to
          deliver excellence, innovation, and long-term value to every client we
          serve.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
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
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col items-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-blue-600"
              />
              <h3 className="text-xl font-semibold text-blue-700">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
