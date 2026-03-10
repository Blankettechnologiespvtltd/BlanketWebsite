import React from "react";
import { motion } from "framer-motion";
import { Layers, Rocket, BarChart3, Briefcase, Globe2 } from "lucide-react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";

const CaseStudies = () => {
  const navigate = useNavigate();
  const caseData = [
    {
      icon: <Briefcase size={38} className="text-blue-600 mb-4" />,
      industry: "E-Commerce & Retail",
      title: "Transforming Retail Experience with Full-Stack E-Commerce Development",
      challenge:
        "The client, a mid-sized retail brand, was struggling with low online conversions and inconsistent inventory management across their stores. Their legacy website was not mobile-friendly and lacked real-time analytics.",
      approach:
        "Blanket Technologies built a custom React-based eCommerce system integrated with Shopify and Node.js backend, along with AI-driven product recommendations and payment gateway automation.",
      result:
        "Post-deployment, the client saw a 68% boost in sales and an 82% improvement in website engagement within the first quarter. Their supply chain was fully digitized, reducing manual tasks by 70%.",
      metrics: [
        "✔ 68% Increase in Online Sales",
        "✔ 70% Manual Operations Reduced",
        "✔ 99.9% Uptime with Cloud Integration",
      ],
      img: "/marketing1.jpg",
    },
    {
      icon: <Globe2 size={38} className="text-blue-600 mb-4" />,
      industry: "Healthcare Technology",
      title: "Digital Health Platform for Remote Patient Management",
      challenge:
        "A leading hospital chain faced inefficiencies in patient appointment tracking, medical record storage, and teleconsultation management. Manual processes delayed patient responses and increased operational costs.",
      approach:
        "Our team designed a centralized digital health portal using Next.js and Firebase, enabling secure EHR management, real-time teleconsultation scheduling, and instant patient analytics dashboards.",
      result:
        "The hospital reported a 45% increase in doctor productivity, 80% faster patient onboarding, and 100% compliance with healthcare data regulations such as HIPAA.",
      metrics: [
        "✔ 80% Faster Patient Onboarding",
        "✔ 45% Doctor Productivity Boost",
        "✔ 100% HIPAA Compliance",
      ],
      img: "/case2.jpg",
    },
    {
      icon: <BarChart3 size={38} className="text-blue-600 mb-4" />,
      industry: "Banking & Financial Services",
      title: "AI-Based Credit Risk and Loan Automation Platform",
      challenge:
        "A regional bank wanted to modernize its manual loan approval system that took up to 7 days per application. Fraud detection and credit risk assessment were entirely manual, causing frequent delays.",
      approach:
        "Blanket Technologies developed an AI-powered microservice solution using Python, TensorFlow, and Node.js for automated document scanning, KYC validation, and credit scoring.",
      result:
        "Loan approvals became 10x faster, risk errors reduced by 72%, and the client saved ₹1.2 Cr annually in manpower costs.",
      metrics: [
        "✔ 10x Faster Loan Approvals",
        "✔ 72% Fewer Risk Errors",
        "✔ ₹1.2 Cr Annual Operational Savings",
      ],
      img: "/cloud.jpg",
    },
    {
      icon: <Rocket size={38} className="text-blue-600 mb-4" />,
      industry: "Startups & SaaS",
      title: "End-to-End MVP & Cloud Deployment for a SaaS Product",
      challenge:
        "A new-age startup needed an MVP in less than 60 days to pitch to investors. They lacked tech infrastructure and in-house resources for deployment and scalability.",
      approach:
        "We built and deployed a scalable MVP using React, Node.js, and AWS Lambda functions, implementing CI/CD for automated deployment and monitoring using CloudWatch.",
      result:
        "The startup successfully raised its Seed Round post-launch and scaled from 100 to 10,000 users within three months.",
      metrics: [
        "✔ MVP Delivered in 45 Days",
        "✔ 99.9% Server Uptime",
        "✔ 10K Active Users in 3 Months",
      ],
      img: "/support1.jpg",
    },
  ];

  return (
    <div className="mt-20">
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-pink-700 to-indigo-700 text-white py-24 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Case Studies & Client Success Stories
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg leading-relaxed text-gray-100"
        >
          Discover how <span className="font-semibold">Blanket Technologies</span> 
          has empowered global enterprises through data-driven IT transformation, 
          cloud modernization, and strategic consultancy — delivering measurable business impact.
        </motion.p>
      </div>

      {/* Case Studies */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-16">
        {caseData.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <img src={study.img} alt={study.title} className="w-full h-60 object-cover" />
            <div className="p-8">
              <div className="flex items-center justify-center">{study.icon}</div>
              <p className="text-sm uppercase text-gray-500 tracking-wide mb-2">
                {study.industry}
              </p>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">{study.title}</h3>
              <h4 className="font-semibold text-gray-700 mb-1">Client Challenge:</h4>
              <p className="text-gray-600 mb-3">{study.challenge}</p>
              <h4 className="font-semibold text-gray-700 mb-1">Our Approach:</h4>
              <p className="text-gray-600 mb-3">{study.approach}</p>
              <h4 className="font-semibold text-gray-700 mb-1">Impact:</h4>
              <p className="text-gray-600 mb-4">{study.result}</p>
              <ul className="text-left space-y-2 text-gray-700">
                {study.metrics.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <Layers size={16} className="text-blue-600" /> {m}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Global Reach */}
      <div className="bg-white py-20 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">
          Global Reach. Measurable Impact.
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          With delivery centers across India and clients in 15+ countries, Blanket Technologies
          has become a trusted digital transformation partner. Our expertise spans ERP, CRM,
          data analytics, cybersecurity, and next-gen app development — helping businesses
          innovate faster and scale smarter.
        </p>
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
          {[
            { number: "150+", label: "Enterprise Projects Delivered" },
            { number: "30+", label: "Global Clients Served" },
            { number: "98%", label: "Client Retention Rate" },
            { number: "10+", label: "Years of Industry Excellence" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-3xl font-bold text-blue-700 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-800 py-16 text-center text-white px-6">
        <h3 className="text-3xl font-bold mb-4">
          Let’s Create the Next Industry Success Story — Yours.
        </h3>
        <p className="max-w-3xl mx-auto text-gray-100 mb-6 leading-relaxed">
          Whether you’re a startup looking to scale or an enterprise optimizing global operations,
          Blanket Technologies delivers tailored IT strategies that drive efficiency and measurable growth.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition" onClick={()=>navigate("/contact")}>
          Schedule a Consultation
        </button>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default CaseStudies;
