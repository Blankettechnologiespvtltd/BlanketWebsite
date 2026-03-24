import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Globe, Code, Monitor, Rocket, ShieldCheck } from "lucide-react";
import Footer from "../Components/Footer";

const WebDevelopment = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[6em]">
      {/* HERO SECTION */}
      <section className=" bg-gradient-to-b from-[#1B3C73] to-purple-400 -mt-31 text-white py-34 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Web Development Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-3xl mx-auto text-lg md:text-xl opacity-90"
        >
          At <strong>Blanket Technologies</strong>, we craft scalable, high-performance
          web solutions that empower your business across <span className="font-semibold">Pan India</span>.  
          Our goal is simple — build websites that perform, convert, and grow.
        </motion.p>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12  ">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/webdev.jpg"
            alt="Corporate Web Design"
            className="  h-[24rem] rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transforming Ideas into Digital Experiences 
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you’re an enterprise, startup, or growing brand — we design and
            develop websites that communicate your story, engage users, and
            accelerate your online success.  
            Our development process blends creativity, technology, and strategy to deliver measurable results.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center"><CheckCircle className="text-blue-600 mr-2" /> Tailor-made UI/UX Designs</li>
            <li className="flex items-center"><CheckCircle className="text-blue-600 mr-2" /> SEO-Optimized & Mobile Responsive</li>
            <li className="flex items-center"><CheckCircle className="text-blue-600 mr-2" /> Secure & Scalable Architecture</li>
            <li className="flex items-center"><CheckCircle className="text-blue-600 mr-2" /> Fast-loading & High-performance Sites</li>
            <li className="flex items-center"><CheckCircle className="text-blue-600 mr-2" /> 24/7 Maintenance & Technical Support</li>
          </ul>
        </motion.div>
      </section>

      {/* SERVICE FEATURES */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Our Web Development Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We leverage modern frameworks and cutting-edge technologies to create web
            solutions that drive growth and innovation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { icon: Code, title: "Custom Web Applications", desc: "Dynamic and fully customized web apps built on modern frameworks like React.js, Next.js, and Node.js." },
            { icon: Monitor, title: "Corporate Websites", desc: "Professional and elegant websites designed to enhance your brand credibility and engagement." },
            { icon: ShieldCheck, title: "E-Commerce Platforms", desc: "End-to-end secure online stores with smooth checkout and real-time analytics integration." },
            { icon: Rocket, title: "Performance Optimization", desc: "We optimize speed, SEO, and user experience to boost visibility and conversions." },
            { icon: Globe, title: "Cross-Platform Compatibility", desc: "Responsive designs that look perfect on every device — desktop, tablet, and mobile." },
            { icon: CheckCircle, title: "Continuous Support", desc: "We offer reliable technical maintenance and updates to keep your site running flawlessly." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-sm hover:shadow-lg rounded-2xl p-8 text-left"
            >
              <item.icon className="text-blue-600 w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Our Web Development Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We follow a transparent, step-by-step approach to ensure every project is delivered with excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { step: "01", title: "Discovery", desc: "Understanding your goals, audience, and project scope." },
            { step: "02", title: "Planning", desc: "Wireframing, strategy, and tech-stack selection." },
            { step: "03", title: "Design", desc: "Creating UI/UX mockups that match your brand identity." },
            { step: "04", title: "Development", desc: "Frontend & backend integration using latest technologies." },
            { step: "05", title: "Launch & Support", desc: "Deployment, testing, and ongoing technical assistance." },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">{phase.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PAN INDIA CTA */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white py-20 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4"
        >
          Delivering Excellence Across Pan India 
        </motion.h3>
        <p className="max-w-3xl mx-auto text-lg mb-8 opacity-90">
          From Mumbai to Delhi, Bengaluru to Hyderabad — we empower Indian businesses 
          with world-class digital solutions. Our remote-first team ensures you receive 
          consistent communication, transparent progress, and on-time delivery.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get Your Free Project Consultation
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default WebDevelopment;
