import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";

const ERPSoftware = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#1B3C73] -mt-20 text-white py-30 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          ERP Software Solutions for Smarter Business Operations
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Blanket Technologies delivers cutting-edge ERP software that
          centralizes your business data, automates workflows, and enhances
          decision-making — empowering enterprises across India to grow faster,
          smarter, and more efficiently.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-blue-700"
        >
          What is ERP & Why It Matters?
        </motion.h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          Enterprise Resource Planning (ERP) software integrates all core
          business functions — finance, HR, inventory, procurement, production,
          and customer relationship management — into one unified platform.
          With our ERP systems, companies eliminate data silos, streamline
          operations, reduce costs, and gain real-time visibility into business
          performance. Our ERP platforms are scalable, cloud-ready, and tailored
          to suit diverse industries — from manufacturing and retail to
          healthcare and logistics.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">
            Key Features of Our ERP Software
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Centralized Data Management",
                desc: "Access all critical information from a single dashboard, improving collaboration across departments.",
              },
              {
                title: "Automated Workflows",
                desc: "Eliminate repetitive tasks with automated processes that boost productivity and reduce manual errors.",
              },
              {
                title: "Custom Modules",
                desc: "Build ERP modules specific to your business like HRM, Inventory, Accounting, and CRM.",
              },
              {
                title: "Cloud Integration",
                desc: "Secure, scalable cloud solutions ensuring seamless access from any location, anytime.",
              },
              {
                title: "Real-Time Reporting",
                desc: "Advanced analytics and reporting tools provide actionable insights for strategic decisions.",
              },
              {
                title: "Multi-Branch & Multi-Currency Support",
                desc: "Perfect for businesses operating across regions or globally with multi-currency management.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">
          Our ERP Development Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              step: "01",
              title: "Requirement Analysis",
              desc: "We assess your business structure, workflows, and pain points to design a custom ERP roadmap.",
            },
            {
              step: "02",
              title: "System Design",
              desc: "Create architecture, data models, and module layouts ensuring scalability and performance.",
            },
            {
              step: "03",
              title: "Development",
              desc: "Frontend and backend development using modern frameworks like React, Node.js, and PostgreSQL.",
            },
            {
              step: "04",
              title: "Testing & Deployment",
              desc: "Rigorous testing for functionality, security, and scalability before deployment.",
            },
            {
              step: "05",
              title: "Training & Support",
              desc: "Post-launch employee training and technical maintenance to ensure smooth operation.",
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-2">
                {phase.step}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Transform Your Business with a Custom ERP Solution
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          Whether you’re managing operations across cities or scaling a growing
          enterprise, Blanket Technologies provides end-to-end ERP solutions
          that evolve with your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get a Free Consultation
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default ERPSoftware;
