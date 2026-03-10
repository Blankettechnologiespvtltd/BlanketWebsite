import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Globe,
  Users,
  Target,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  BarChart3,
  Zap,
} from "lucide-react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";

const Consultancy = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      <section className="bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-linear-to-r from-pink-700 to-indigo-700 text-white py-24 px-6 text-center overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6"
          >
            Empowering Enterprises Through Smart IT Consultancy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-100"
          >
            At <span className="font-semibold">Blanket Technologies</span>, we
            don’t just solve problems — we architect future-ready solutions.
            From cloud migration to digital transformation, our consultancy
            ensures your business leads with innovation, agility, and growth.
          </motion.p>
        </div>

        {/* Who We Are */}
        <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            src="/cteam.jpg"
            alt="Consulting Team"
            className="rounded-2xl shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-700 mb-5">
              Transforming IT Strategy into Business Value
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We understand that technology isn’t just about systems — it’s
              about **enabling success**. Our consultancy integrates technical
              excellence with business intelligence, helping organizations
              evolve through smarter, data-driven decisions.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Whether you’re optimizing existing systems or redefining your
              entire IT roadmap, we deliver actionable insights and measurable
              impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our global consultants bring over a decade of experience across
              sectors like fintech, manufacturing, healthcare, and e-commerce —
              ensuring every engagement is strategic, scalable, and secure.
            </p>
          </motion.div>
        </div>

        {/* Core Services */}
        <div className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              Our Strategic Consultancy Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end consulting services that drive operational
              excellence and digital agility. From IT strategy to implementation
              — we guide you every step of the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
            {[
              {
                icon: <Lightbulb size={42} className="text-blue-600 mb-4" />,
                title: "Digital Transformation",
                desc: "We help you redefine your business model using emerging technologies that drive innovation and scalability.",
              },
              {
                icon: <Globe size={42} className="text-blue-600 mb-4" />,
                title: "Cloud Strategy & Migration",
                desc: "Seamless transition to secure, scalable cloud infrastructures — optimized for performance and cost-efficiency.",
              },
              {
                icon: <Users size={42} className="text-blue-600 mb-4" />,
                title: "Enterprise IT Strategy",
                desc: "Craft a robust digital backbone aligned with your business vision, enabling long-term competitive advantage.",
              },
              {
                icon: <Target size={42} className="text-blue-600 mb-4" />,
                title: "Process Automation (RPA)",
                desc: "Reduce manual tasks and boost productivity through intelligent automation powered by AI and machine learning.",
              },
              {
                icon: <TrendingUp size={42} className="text-blue-600 mb-4" />,
                title: "Data Analytics & Insights",
                desc: "Leverage real-time analytics and visualization to make informed decisions that accelerate business performance.",
              },
              {
                icon: <Cpu size={42} className="text-blue-600 mb-4" />,
                title: "Infrastructure Optimization",
                desc: "Modernize your IT ecosystem for improved uptime, security, and scalability with expert-led consulting.",
              },
              {
                icon: <ShieldCheck size={42} className="text-blue-600 mb-4" />,
                title: "Cybersecurity Consulting",
                desc: "Fortify your systems with proactive risk assessment, compliance management, and next-gen protection frameworks.",
              },
              {
                icon: <Layers size={42} className="text-blue-600 mb-4" />,
                title: "ERP & CRM Consulting",
                desc: "Seamlessly implement ERP and CRM systems that unify operations and enhance customer engagement.",
              },
              {
                icon: <BarChart3 size={42} className="text-blue-600 mb-4" />,
                title: "Business Intelligence Solutions",
                desc: "Turn data into strategic advantage using BI tools, dashboards, and predictive analytics.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
              >
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-6xl mx-auto py-20 px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            Why Choose Blanket Technologies?
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-12">
            Our consulting approach focuses on **clarity, collaboration, and
            measurable results**. With our dedicated experts and agile
            methodology, we ensure your business evolves confidently in the
            digital era.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Global Expertise",
                desc: "With clients in 10+ countries, we bring international perspectives and best practices to every engagement.",
              },
              {
                title: "Tailored Frameworks",
                desc: "No one-size-fits-all — every strategy is custom-designed for your specific business environment.",
              },
              {
                title: "End-to-End Partnership",
                desc: "From idea to execution, our consultants guide you through every step of your digital journey.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-blue-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-700 py-20 text-center text-white px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 opacity-10 bg-[url('/pattern-bg.png')] bg-cover bg-center"
          ></motion.div>
          <h3 className="text-3xl font-bold mb-4 relative z-10">
            Ready to Redefine Your IT Strategy?
          </h3>
          <p className="max-w-3xl mx-auto text-gray-100 mb-6 leading-relaxed relative z-10">
            Partner with Blanket Technologies — your trusted IT consultancy
            partner for modernization, automation, and transformation. Let’s
            unlock your digital potential together.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition relative z-10"
           onClick={()=>navigate("/contact")}>
            Schedule a Free Consultation
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Consultancy;
