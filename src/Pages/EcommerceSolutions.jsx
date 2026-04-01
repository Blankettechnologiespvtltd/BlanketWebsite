import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Globe, ShieldCheck, Rocket, BarChart3, Users, Layers, CheckCircle, Zap, Settings } from "lucide-react";
import Footer from "../Components/Footer";

const EcommerceSolutions = () => {
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
          Ecommerce Solutions & Development Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Empower your business with scalable, feature-rich, and conversion-focused ecommerce platforms. Blanket Technologies provides end-to-end ecommerce development, integration, and growth optimization across <span className="font-semibold">Pan India</span>.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=60"
            alt="Ecommerce Solutions"
            className="rounded-2xl shadow-lg"
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
            Build, Scale & Grow Your Online Store with Ease
          </h2>
          <p className="text-gray-600 mb-6">
            Our ecommerce experts create dynamic, secure, and highly customizable online stores tailored to your brand’s identity and target market. We integrate advanced tools for analytics, marketing automation, and customer engagement to drive maximum ROI.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center"><CheckCircle className="text-indigo-700 mr-2" /> Custom Ecommerce Website Development</li>
            <li className="flex items-center"><CheckCircle className="text-indigo-700 mr-2" /> WooCommerce, Shopify, Magento, & Headless Solutions</li>
            <li className="flex items-center"><CheckCircle className="text-indigo-700 mr-2" /> Seamless Payment & Logistics Integration</li>
            <li className="flex items-center"><CheckCircle className="text-indigo-700 mr-2" /> Mobile-Optimized & High-Performance Platforms</li>
          </ul>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800  mb-8">Core Features of Our Ecommerce Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <ShoppingBag className="w-10 h-10  text-indigo-700 mx-auto mb-3" />, title: "Custom Storefront Design", desc: "Beautiful and responsive store layouts designed to match your brand and engage customers." },
            { icon: <Globe className="w-10 h-10 text-indigo-700 mx-auto mb-3" />, title: "Global Reach", desc: "Multi-currency and multi-language support for international ecommerce operations." },
            { icon: <ShieldCheck className="w-10 h-10 text-indigo-700 mx-auto mb-3" />, title: "Secure Checkout", desc: "End-to-end encryption and fraud prevention for safe transactions." },
            { icon: <Users className="w-10 h-10 text-indigo-700 mx-auto mb-3" />, title: "Customer Management", desc: "Integrated CRM tools to understand and engage your buyers effectively." },
            { icon: <BarChart3 className="w-10 h-10 text-indigo-700 mx-auto mb-3" />, title: "Analytics & Insights", desc: "Powerful analytics dashboard to track performance, conversions, and revenue growth." },
            { icon: <Rocket className="w-10 h-10 text-indigo-700 mx-auto mb-3" />, title: "Scalable Architecture", desc: "Cloud-ready solutions built to handle growing demand and product catalogs." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className=" p-6 rounded-2xl bg-indigo-50 hover:bg-indigo-200 hover:border-2 hover:border-indigo-500 shadow hover:shadow-lg transition"
            >
              {feature.icon}
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Development Process</h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            { step: "01", title: "Requirement Analysis", desc: "We analyze your business needs, market, and competitors to outline an effective ecommerce strategy.", icon: <Layers className="mx-auto text-indigo-700 w-10  h-10 mb-3" /> },
            { step: "02", title: "Design & UI Planning", desc: "Crafting a user-centric design that ensures effortless navigation and high engagement.", icon: <Settings className="mx-auto text-indigo-700 w-10 h-10 mb-3" /> },
            { step: "03", title: "Development & Integration", desc: "Building your store with cutting-edge technologies and secure third-party integrations.", icon: <Zap className="mx-auto text-indigo-700 w-10 h-10 mb-3" /> },
            { step: "04", title: "Testing & Optimization", desc: "Rigorous testing for speed, security, and performance before launch.", icon: <ShieldCheck className="mx-auto text-indigo-700 w-10 h-10 mb-3" /> },
            { step: "05", title: "Deployment & Support", desc: "We launch your platform and provide continuous support to ensure smooth operations.", icon: <Rocket className="mx-auto text-indigo-700 w-10 h-10 mb-3" /> },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6  rounded-xl  bg-indigo-50 hover:bg-indigo-100 hover:border-2 hover:border-purple-500 shadow-sm hover:shadow-md transition"
            >
              {phase.icon}
              <h3 className="text-2xl font-bold text-blue-900 mb-2">{phase.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className=" bg-purple-600 text-white py-16 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Transform Your Retail Business with Blanket Technologies 
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          From small startups to large enterprises, we empower brands to go digital with modern ecommerce ecosystems. Get a robust, secure, and scalable platform that grows with your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get a Free Ecommerce Consultation
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default EcommerceSolutions;
