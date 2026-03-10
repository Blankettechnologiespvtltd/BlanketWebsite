import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Cloud,
  Rocket,
  CheckCircle,
  Users,
  Cpu,
  Shield,
  Wrench,
  Zap,
} from "lucide-react";
import Footer from "../Components/Footer";

const AppDevelopment = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[6rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          App Development Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          At Blanket Technologies, we design and develop powerful, scalable, and
          engaging mobile apps for Android, iOS, and cross-platform needs.
          Delivering digital excellence to clients across{" "}
          <span className="font-semibold">Pan India</span>, we turn your business
          ideas into high-performing mobile experiences.
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
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=60"
            alt="App Development"
            className="rounded-2xl shadow-lg"
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
            Building Apps That Drive Growth 🚀
          </h2>
          <p className="text-gray-600 mb-6">
            We specialize in end-to-end app development services — from concept
            and design to deployment and post-launch support. Whether it’s a
            native mobile app or a hybrid solution, our team ensures performance,
            scalability, and exceptional user experience. We combine innovation
            with robust technology to help your business thrive in a
            mobile-first world.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Android & iOS App
              Development
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Cross-Platform Apps
              (React Native / Flutter)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Enterprise & Startup
              Solutions
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> API & Cloud Integration
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Security-First
              Architecture
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our App Development Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              step: "01",
              title: "Discovery & Research",
              desc: "We analyze your goals, target users, and competition to build a product strategy that aligns with your business.",
              icon: <Users className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "02",
              title: "Design & Prototyping",
              desc: "Our design team creates wireframes and interactive prototypes that visualize user flow and experience.",
              icon: <Smartphone className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "03",
              title: "Development",
              desc: "Our developers bring designs to life using modern technologies like React Native, Flutter, Kotlin, and Swift.",
              icon: <Code className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "04",
              title: "Testing & QA",
              desc: "Every app undergoes rigorous testing for performance, usability, and security to ensure top-notch quality.",
              icon: <Shield className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "05",
              title: "Deployment & Support",
              desc: "We publish the app on App Stores and provide continuous updates, analytics, and technical maintenance.",
              icon: <Rocket className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
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
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {phase.step}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Technologies We Work With
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            "React Native",
            "Flutter",
            "Swift",
            "Kotlin",
            "Node.js",
            "Firebase",
            "AWS / Google Cloud",
            "Figma / Adobe XD",
          ].map((tech, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow p-6 font-semibold text-gray-700 hover:text-blue-700 hover:shadow-md transition"
            >
              {tech}
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
            Why Choose Blanket Technologies?
          </h2>
          <p className="text-gray-600 mb-6">
            We don’t just build apps — we build long-term digital partnerships.
            Our process focuses on innovation, reliability, and measurable
            results. Whether you’re a startup looking to make a mark or a
            corporation seeking digital transformation, our team ensures your app
            stands out in performance, design, and scalability.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <Zap className="text-blue-700 mr-2" /> Agile Development Process
            </li>
            <li className="flex items-center">
              <Cpu className="text-blue-700 mr-2" /> Latest Tech Stack Integration
            </li>
            <li className="flex items-center">
              <Wrench className="text-blue-700 mr-2" /> End-to-End Maintenance & Support
            </li>
            <li className="flex items-center">
              <Cloud className="text-blue-700 mr-2" /> Scalable Cloud Architecture
            </li>
            <li className="flex items-center">
              <Users className="text-blue-700 mr-2" /> Dedicated Expert Team
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
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=1000&q=60"
            alt="App Team"
            className="rounded-2xl shadow-lg"
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
          Let’s Build the Future — One App at a Time 📱
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Join hands with Blanket Technologies to develop modern, secure, and
          user-driven mobile applications that make an impact. From concept to
          launch, we ensure your app reflects your brand and delivers results
          across <span className="font-semibold">Pan India</span>.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get a Free Project Consultation
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default AppDevelopment;
