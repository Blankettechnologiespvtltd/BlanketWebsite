import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Target, Users, TrendingUp, Cpu, Globe } from "lucide-react";

const ConsultancySection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Strategic IT Consulting",
      desc: "We craft custom technology strategies that align perfectly with your business goals, ensuring long-term scalability and growth.",
    },
    {
      icon: Cpu,
      title: "Digital Transformation",
      desc: "Empower your business with cloud, automation, and AI-driven digital solutions to stay ahead of competition.",
    },
    {
      icon: Target,
      title: "Project Planning & Execution",
      desc: "We help businesses plan, manage, and execute projects with precision using agile methodologies and expert guidance.",
    },
    {
      icon: Users,
      title: "Dedicated Tech Teams",
      desc: "Hire our experienced professionals who work as an extension of your in-house team, ensuring consistent performance.",
    },
    {
      icon: TrendingUp,
      title: "Business Process Optimization",
      desc: "We streamline your business processes using analytics and technology to boost productivity and reduce costs.",
    },
    {
      icon: Globe,
      title: "Global IT Support",
      desc: "Get 24/7 global technical support and maintenance services to ensure your digital systems run flawlessly.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-gray-50 py-20 px-6 md:px-12">
      {/* Heading Section */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Transform Your Business with{" "}
          <span className="text-blue-600">Expert IT Consultancy</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 leading-relaxed"
        >
          At Blanket Technologies, we help businesses leverage technology to drive growth, 
          efficiency, and innovation. From strategic planning to end-to-end implementation — 
          we’ve got you covered.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all border border-gray-100"
          >
            <div className="bg-blue-100 w-14 h-14 flex items-center justify-center rounded-xl mb-5">
              <item.icon className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-3">
          Ready to Elevate Your Business?
        </h3>
        <p className="text-gray-600 mb-6">
          Let’s discuss how our experts can help you scale your digital presence and boost ROI.
        </p>
        <a
  href="tel:+919876543210"
  className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 shadow-lg inline-flex items-center gap-2"
>
   Get Free Consultation
</a>

      </motion.div>
    </section>
  );
};

export default ConsultancySection;
