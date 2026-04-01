import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Bug,
  Zap,
  ShieldCheck,
  Code,
  Cpu,
  Layers,
  BarChart3,
  Eye,
  Wrench,
  Globe,
  Clock,
  Rocket,
} from "lucide-react";
import Footer from "../Components/Footer";

const WebTesting = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 -mt-20 text-white py-30 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Web Application Testing Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Ensure your website and applications deliver **flawless performance, reliability, and user experience** with our end-to-end Web Testing solutions.  
          Blanket Technologies provides comprehensive QA & Testing services for businesses across <span className="font-semibold">Pan India</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/cyber2.jpg"
            alt="Web Testing Team"
            className="h-[22rem] mt-7 rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Comprehensive Quality Assurance for Web Applications
          </h2>
          <p className="text-gray-600 mb-6">
            Our testing experts ensure that your web applications perform seamlessly
            across devices, browsers, and operating systems. From functional to performance and security testing,  
            we guarantee precision, stability, and user satisfaction at every stage of development.
          </p>

          {/* <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Functional & Regression Testing
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Compatibility & Cross-Browser Testing
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Performance, Load & Stress Testing
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Security & Vulnerability Testing
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Automated Testing & Continuous Integration
            </li>
          </ul> */}
          <ul className="space-y-3 text-gray-700">
  <li className="flex items-center">
    <CheckCircle className="text-blue-700 mr-2" /> Functional & Regression Testing
  </li>
  <li className="flex items-center">
    <CheckCircle className="text-blue-700 mr-2" /> Compatibility & Cross-Browser Testing
  </li>
  <li className="flex items-center">
    <CheckCircle className="text-blue-700 mr-2" /> Performance, Load & Stress Testing
  </li>
  <li className="flex items-center">
    <CheckCircle className="text-blue-700 mr-2" /> Security & Vulnerability Testing
  </li>
  <li className="flex items-center">
    <CheckCircle className="text-blue-700 mr-2" /> Automated Testing & Continuous Integration
  </li>
</ul>
        </motion.div>
      </section>

 

      {/* Testing Types Section */}
      <section className="py-16 bg-white">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
    Our Web Testing Process
  </h2>

  <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
    {[
      {
        step: "01",
        title: "Requirement Analysis",
        desc: "Understanding project scope, test goals, and business logic to define test objectives.",
        icon: <Layers className="mx-auto text-blue-200 w-10 h-10 mb-3" />,
      },
      {
        step: "02",
        title: "Test Planning",
        desc: "Creating a detailed test plan covering tools, test cases, and resource allocation.",
        icon: <Wrench className="mx-auto text-blue-200 w-10 h-10 mb-3" />,
      },
      {
        step: "03",
        title: "Test Case Design",
        desc: "Developing precise, reusable test cases and automation scripts for coverage.",
        icon: <Code className="mx-auto text-blue-200 w-10 h-10 mb-3" />,
      },
      {
        step: "04",
        title: "Execution & Bug Tracking",
        desc: "Running tests, identifying defects, and ensuring timely bug resolutions.",
        icon: <Bug className="mx-auto text-blue-200 w-10 h-10 mb-3" />,
      },
      {
        step: "05",
        title: "Reporting & Optimization",
        desc: "Generating detailed reports with metrics, insights, and improvement recommendations.",
        icon: <BarChart3 className="mx-auto text-blue-200 w-10 h-10 mb-3" />,
      },
    ].map((phase, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="p-6 bg-blue-700 text-white rounded-xl shadow-sm hover:shadow-lg hover:bg-indigo-700 transition"
      >
        {phase.icon}
        <h3 className="text-2xl font-bold text-white mb-2">{phase.step}</h3>
        <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
        <p className="text-blue-100">{phase.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Testing Types Section */}
<section className="bg-gray-100 py-16 px-6 text-center">
  <h2 className="text-3xl font-bold text-gray-800 mb-8">
    Types of Web Testing We Offer
  </h2>

  <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    {[
      {
        icon: <ShieldCheck className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Security Testing",
        desc: "Identify potential vulnerabilities and threats to ensure your web application is safe from cyber risks.",
      },
      {
        icon: <Cpu className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Performance & Load Testing",
        desc: "Simulate real-world user traffic and monitor system behavior under stress conditions.",
      },
      {
        icon: <Eye className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Usability Testing",
        desc: "Ensure a smooth, intuitive, and user-friendly experience for all target users.",
      },
      {
        icon: <Clock className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Regression Testing",
        desc: "Verify that recent updates or code changes haven’t introduced new defects or affected functionality.",
      },
      {
        icon: <Zap className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Automation Testing",
        desc: "Utilize tools like Selenium, Cypress, and Playwright to enhance speed and test coverage.",
      },
      {
        icon: <Rocket className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
        title: "Deployment & Maintenance Testing",
        desc: "Ensure flawless post-deployment functionality and continuous performance monitoring.",
      },
    ].map((service, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 hover:text-white transition"
      >
        {service.icon}
        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
        <p className="text-gray-600 group-hover:text-blue-100">
          {service.desc}
        </p>
      </motion.div>
    ))}
  </div>
</section>

{/* Why Choose Us Section */}
<section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h2 className="text-3xl font-bold text-gray-800 mb-4">
      Why Choose Blanket Technologies for QA & Testing?
    </h2>

    <p className="text-gray-600 mb-6">
      With years of expertise in web testing and QA automation, our certified professionals
      ensure that every release is secure, stable, and high-performing.
    </p>

    <ul className="space-y-3 text-gray-700">
      <li className="flex items-center">
        <ShieldCheck className="text-blue-700 mr-2" /> Experienced QA Engineers
      </li>
      <li className="flex items-center">
        <Bug className="text-blue-700 mr-2" /> Zero-Bug Delivery Approach
      </li>
      <li className="flex items-center">
        <Cpu className="text-blue-700 mr-2" /> Automation + Manual Hybrid Testing
      </li>
      <li className="flex items-center">
        <Globe className="text-blue-700 mr-2" /> Pan-India QA Coverage
      </li>
      <li className="flex items-center">
        <BarChart3 className="text-blue-700 mr-2" /> Transparent Reporting System
      </li>
    </ul>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <img
      src="cyber1.jpg"
      alt="QA Testing"
      className="h-[22rem] ml-15 rounded-2xl shadow-lg"
    />
  </motion.div>
</section>

{/* CTA Section */}
<section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 text-center px-6">
  <motion.h3
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold mb-4"
  >
    Deliver Perfection with Blanket Technologies QA Solutions
  </motion.h3>

  <p className="text-lg max-w-2xl mx-auto mb-6">
    Let’s make your web application fast, secure, and error-free.
  </p>

  <a
    href="/contact"
    className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
  >
    Request a Free QA Consultation
  </a>
</section>
      <Footer/>
    </div>
  );
};

export default WebTesting;
