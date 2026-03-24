import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  Lock,
  Globe,
  Cpu,
  BarChart3,
  Zap,
  Layers,
  Rocket,
  CheckCircle,
  Settings,
  Banknote,
  Smartphone,
} from "lucide-react";
import Footer from "../Components/Footer";
const PaymentGateway = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#1B3C73] -mt-20 text-white py-30 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Payment Gateway Integration Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          Secure, seamless, and scalable online payment solutions for your
          business. Blanket Technologies delivers advanced Payment Gateway
          integration services trusted by businesses across{" "}
          <span className="font-semibold">Pan India</span>, ensuring smooth
          transactions and unbeatable reliability.
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
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1000&q=60"
            alt="Payment Integration"
            className="h-[17rem] mt-13 rounded-2xl shadow-lg"
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
            Empower Your Business with Smart Payment Solutions
          </h2>
          <p className="text-gray-600 mb-6">
            In today’s digital-first world, businesses need robust and flexible
            payment solutions to manage online transactions securely. Blanket
            Technologies provides **end-to-end payment gateway integration**,
            supporting credit cards, UPI, wallets, and global payment systems
            like Stripe, PayPal, Razorpay, and more.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Seamless multi-platform
              integration (Web & Mobile)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> PCI-DSS Compliant &
              100% Secure
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Support for global
              currencies & payment modes
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-cyan-700 mr-2" /> Real-time reporting
              & transaction analytics
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Key Features of Our Payment Gateway Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <ShieldCheck className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "Advanced Security",
              desc: "End-to-end encryption, tokenization, and SSL layers to protect sensitive user data from fraud and unauthorized access.",
            },
            {
              icon: <CreditCard className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "Multi-Mode Payments",
              desc: "Accept payments via UPI, debit/credit cards, wallets, and bank transfers with instant confirmations.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "Real-Time Analytics",
              desc: "Get instant transaction reports, refund summaries, and performance dashboards through your admin panel.",
            },
            {
              icon: <Cpu className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "API & SDK Integration",
              desc: "Flexible APIs and mobile SDKs that easily integrate with your existing platforms and tech stack.",
            },
            {
              icon: <Smartphone className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "Mobile Optimized Checkout",
              desc: "Deliver a frictionless experience across devices with optimized mobile payment interfaces.",
            },
            {
              icon: <Lock className="w-10 h-10 text-cyan-700 mx-auto mb-3" />,
              title: "Fraud Detection System",
              desc: "AI-powered fraud analysis and pattern detection to flag suspicious transactions instantly.",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Integration Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              step: "01",
              title: "Requirement Gathering",
              desc: "We assess your platform, transaction model, and compliance needs.",
              icon: <Layers className="mx-auto text-cyan-700 w-10 h-10 mb-3" />,
            },
            {
              step: "02",
              title: "Gateway Selection",
              desc: "Based on your needs, we recommend the most suitable payment gateway (Razorpay, Stripe, PayU, etc.).",
              icon: <Settings className="mx-auto text-cyan-700 w-10 h-10 mb-3" />,
            },
            {
              step: "03",
              title: "Integration & Customization",
              desc: "We integrate the API and customize checkout experiences for smooth flow.",
              icon: <Cpu className="mx-auto text-cyan-700 w-10 h-10 mb-3" />,
            },
            {
              step: "04",
              title: "Testing & Security Validation",
              desc: "We perform sandbox testing and PCI compliance checks for safety.",
              icon: <ShieldCheck className="mx-auto text-cyan-700 w-10 h-10 mb-3" />,
            },
            {
              step: "05",
              title: "Go Live & Monitoring",
              desc: "Once deployed, we continuously monitor and optimize payment performance.",
              icon: <Rocket className="mx-auto text-cyan-700 w-10 h-10 mb-3" />,
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              {phase.icon}
              <h3 className="text-2xl font-bold text-cyan-700 mb-2">{phase.step}</h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Supported Platforms */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Supported Payment Gateways
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          We integrate all major Indian and international gateways with seamless API compatibility and security protocols.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {["Razorpay", "Paytm", "PayU", "Stripe", "CCAvenue", "Paypal"].map(
            (pg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className=" bg-gradient-to-r from-black to-[#1B3C73] py-6 text-white px-4 rounded-xl shadow hover:shadow-lg transition text-lg font-semibold text-gray-800"
              >
                {pg}
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black to-[#1B3C73] text-white py-16 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Accept Payments Securely With Blanket Technologies 
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Transform your business with fast, secure, and reliable payment
          processing. From integration to analytics — we deliver complete
          payment infrastructure that scales with your growth.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-cyan-800 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Request a Free Consultation
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default PaymentGateway;
