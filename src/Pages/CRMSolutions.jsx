
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Globe,
  Briefcase,
  UserCheck,
  FileText,
  Clock,
  Layers,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import Footer from "../Components/Footer";

const StaffingSolutions = () => {
  const services = [
    {
      icon: <Users className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Recruitment Process Outsourcing (RPO)",
      desc: "Transform your hiring with a fully managed recruitment engine. We handle workforce planning, talent sourcing, screening, interview management, offer rollout and seamless onboarding — helping you reduce hiring costs while improving candidate quality and time-to-hire.",
    },
    {
      icon: <FileText className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Payroll & Workforce Administration",
      desc: "End-to-end payroll processing designed for accuracy, compliance, and transparency. We manage salary processing, tax compliance, statutory filings, reimbursements, leave records, and employee benefits administration.",
    },
    {
      icon: <Globe className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Global Talent Search",
      desc: "Hire beyond geographical boundaries with our international recruitment expertise. We enable cross-border hiring, global talent mapping, compliance support, and remote workforce deployment strategies.",
    },
    {
      icon: <UserCheck className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Executive & Leadership Search",
      desc: "Strategic leadership hiring through confidential headhunting and market intelligence. We identify CXOs, senior executives, and leadership talent aligned with your company vision, culture, and growth roadmap.",
    },
    {
      icon: <Clock className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Contract & Temporary Staffing",
      desc: "Flexible workforce solutions for project-based needs, seasonal demand, and specialized skill gaps. Quickly scale teams without long-term employment commitments while maintaining workforce agility.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Permanent Hiring",
      desc: "Build a strong long-term workforce with carefully vetted full-time professionals. Our structured screening and evaluation process ensures the right cultural and technical fit for sustained business growth.",
    },
    {
      icon: <Layers className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Project-Based Hiring",
      desc: "Deploy dedicated teams and niche specialists for critical business initiatives including digital transformation, enterprise system implementation, product launches, and expansion projects.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-indigo-600 mb-4" />,
      title: "Comprehensive Recruitment Services",
      desc: "Complete talent acquisition lifecycle management covering job profiling, candidate sourcing, resume screening, technical assessments, interview coordination, background verification, and onboarding support.",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white py-16 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 mt-10"
        >
          Strategic Staffing & Recruitment Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg opacity-90"
        >
          We help organizations build high-performing teams through smart
          hiring strategies, global talent access, and flexible workforce
          models. From leadership hiring to large-scale recruitment and payroll
          management, our solutions are designed to scale with your business.
        </motion.p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="/contact"
            className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Request Talent Consultation
          </a>
          
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="staffing"
          className="rounded-2xl shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Workforce Solutions That Drive Business Growth
          </h2>
          <p className="text-gray-600 mb-6">
            Our staffing specialists combine recruitment expertise with
            technology-driven processes to deliver high-quality talent faster,
            optimize workforce costs, and improve operational efficiency across
            industries.
          </p>

          <ul className="space-y-3">
            {[
              "Access to pre-qualified and industry-ready professionals",
              "Reduced hiring cycle time with AI-assisted screening",
              "Flexible engagement models for evolving workforce needs",
              "Complete compliance, documentation and onboarding support",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700">
                <CheckCircle className="w-5 h-5 text-indigo-600 mt-1" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Our Staffing Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Flexible, scalable, and industry-focused hiring solutions designed
            for modern businesses and global enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Build High-Performance Teams with Confidence
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Partner with our recruitment specialists to attract top talent,
          streamline workforce operations, and scale your teams with reduced
          risk and maximum efficiency.
        </p>
        <a
          href="/contact"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
        >
          Speak to Staffing Experts
        </a>
      </section>

      <Footer />
    </div>
  );
};

export default StaffingSolutions;