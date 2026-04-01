import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
import Footer from "../Components/Footer";
import Clients from "./Clients";
import { Link } from "react-router";

import Rpo from "./RPO";

import {
  Users,
  Globe2,
  Briefcase,
  UserCheck,
  Layers,
  FileText,
  Search,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";

function Staffing() {
  const navigate = useNavigate();

  // const services = [
  //   {
  //     title: "Recruitment Process Outsourcing (RPO)",
  //     desc: "End-to-end hiring solutions covering sourcing, screening, interview coordination, and onboarding to reduce time-to-hire and improve talent quality.",
  //     icon: <Users size={28} />,
  //     link: "/Rpo",
  //   },
  //   {
  //     title: "Payroll Management",
  //     desc: "Accurate payroll processing with statutory compliance, tax management, payslip generation, and workforce record administration.",
  //     icon: <FileText size={28} />,
  //    link: "/Payroll",
  //   },
  //   {
  //     title: "Global Talent Search",
  //     desc: "Hire skilled professionals across international markets with streamlined global sourcing and workforce expansion strategies.",
  //     icon: <Globe2 size={28} />,
  //      link: "/GlobalSearch",
  //   },
  //   {
  //     title: "Executive Search",
  //     desc: "Specialized leadership hiring for senior and C-level roles through strategic headhunting and confidential talent acquisition.",
  //     icon: <UserCheck size={28} />,
  //      link: "/ExecutiveSearch",
  //   },
  //   // {
  //   //   title: "Contract Staffing",
  //   //   desc: "Flexible staffing for short-term and long-term projects, enabling rapid team scaling based on workload and project demands.",
  //   //   icon: <Layers size={28} />,
  //   //   link: "/contract-staffing",
  //   // },
  //   {
  //     title: "Permanent Hiring",
  //     desc: "Full-time recruitment services focused on long-term cultural fit, performance, and workforce stability.",
  //     icon: <BadgeCheck size={28} />,
  //      link: "/PermanentHiring",
  //   },
  //   {
  //     title: "Project-Based Hiring",
  //     desc: "Deploy specialized professionals and dedicated teams for technology implementations and mission-critical projects.",
  //     icon: <Briefcase size={28} />,
  //      link: "/ProjectBasedHiring",
  //   },
    
  // ];
 
const services = [
  {
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "End-to-end hiring solutions covering sourcing, screening, interviews, and onboarding to reduce hiring time and improve talent quality across roles.",
    icon: <Users size={28} />,
    link: "/Rpo",
  },
  {
    title: "Payroll Management",
    desc: "Efficient payroll processing with compliance handling, tax management, payslip generation, and accurate workforce records for smooth operations.",
    icon: <FileText size={28} />,
    link: "/Payroll",
  },
  {
    title: "Global Talent Search",
    desc: "Hire skilled professionals globally through streamlined sourcing, talent acquisition strategies, and scalable workforce expansion across markets.",
    icon: <Globe2 size={28} />,
    link: "/GlobalSearch",
  },
  {
    title: "Executive Search",
    desc: "Strategic leadership hiring for senior and C-level roles using targeted headhunting, market insights, and confidential recruitment processes.",
    icon: <UserCheck size={28} />,
    link: "/ExecutiveSearch",
  },
  {
    title: "Permanent Hiring",
    desc: "Full-time recruitment focused on long-term performance, cultural alignment, employee retention, and building stable, high-performing teams.",
    icon: <BadgeCheck size={28} />,
    link: "/PermanentHiring",
  },
  {
    title: "Project-Based Hiring",
    desc: "Deploy skilled professionals and dedicated teams for project-based needs, ensuring timely delivery, flexibility, and success of critical initiatives.",
    icon: <Briefcase size={28} />,
    link: "/ProjectBasedHiring",
  },
];

  const steps = [
    "Workforce Requirement Analysis",
    "Talent Sourcing & Screening",
    "Interview & Evaluation Process",
    "Candidate Shortlisting",
    "Onboarding & Documentation",
    "Ongoing Workforce Support",
  ];

  const benefits = [
    "Faster hiring turnaround",
    "Access to pre-vetted talent pools",
    "Reduced HR operational workload",
    "Scalable workforce solutions",
    "Improved employee retention",
    "Compliance with labor regulations",
  ];

  return (
    <>
      <div className=" text-gray-800 overflow-hidden">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white py-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold p-4 mt-4 "
          >
            {" "}
            Staffing Solutions
          </motion.h1>

          <p className="max-w-2xl mx-auto  text-white/90 text-xl ">
            Build high-performing teams with flexible staffing solutions
            designed to meet evolving business demands. From permanent hiring to
            global recruitment, we deliver skilled professionals that drive
            growth.
          </p>
        </section>

       
        <section className="py-20 px-6 bg-[#F8FAFC]">
  <h2 className="text-4xl font-bold text-center -mt-10 mb-10">
    Our Staffing Services
  </h2>

  <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {services.map((service, index) => (
      <Link to={service.link} key={index} className="h-full">
        
        <div className="h-full flex flex-col justify-between 
        bg-gradient-to-br from-[#3d28b8] to-[#a18bc9] 
        text-white p-8 rounded-2xl shadow-lg 
        hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer">
          
          <div>
            <div className="text-[#38BDF8] mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3">{service.title}</h3>

            {/* fixed text height */}
            <p className="text-blue-100 leading-relaxed line-clamp-3 min-h-[80px]">
              {service.desc}
            </p>
          </div>

        </div>
      </Link>
    ))}
  </div>
</section>
        <Clients />
        {/* Process */}
        <section className="py-10 px-6 bg-white">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Staffing Process
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white border border-blue-100 p-8 rounded-2xl shadow-md hover:shadow-xl hover:bg-blue-100 hover:border-blue-300 transition"
              >
                <div className="absolute -top-5 left-6 bg-[#1D4ED8] text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <p className="font-semibold text-lg mt-6">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#0B3C5D] to-[#1D4ED8] text-white">
          <h2 className="text-4xl font-bold text-center mb-16">
            Benefits of Our Staffing Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20"
              >
                <CheckCircle2 className="text-[#38BDF8]" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          {/* <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Smart Hiring for Modern Businesses
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Modern organizations require agile hiring strategies to compete in
            dynamic markets. Our staffing solutions streamline recruitment,
            reduce operational costs, and ensure businesses get access to the
            right talent at the right time.
          </p>
        </div> */}

          {/* <div className="bg-[#DBEAFE] p-8 rounded-2xl shadow-sm mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            Flexible Workforce Models
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Choose from contract staffing, permanent hiring, project-based
            recruitment, or complete recruitment outsourcing models tailored to
            your operational and project needs.
          </p>
        </div> */}

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">
              Industries We Serve
            </h3>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    "Information Technology",
    "Financial Services & FinTech",
    "Pharmaceuticals & Healthcare",
    "Automotive & Electric Vehicles (EV)",
    "Renewable Energy",
    "Energy & Oil",
    "E-Commerce & Retail",
    "Telecommunications",
    "Electronics & Manufacturing",
    "Media & Entertainment",
    "Tourism & Hospitality",
    "FMCG (Fast-Moving Consumer Goods)"
  ].map((item, i) => (
    <div
      key={i}
      className="group flex items-center gap-4 
      bg-blue-100 border border-blue-100 
      p-5 rounded-xl shadow-sm 
      hover:shadow-lg hover:-translate-y-1 
      hover:bg-blue-200 hover:border-blue-300 
      transition-all duration-300 cursor-pointer"
    >
      <div
        className="bg-blue-100 text-blue-400 p-3 rounded-lg 
        group-hover:bg-blue-400 group-hover:text-white 
        transition duration-300"
      >
        <CheckCircle2 size={32} />
      </div>

      <span className="font-medium text-gray-700 group-hover:text-blue-600 transition">
        {item}
      </span>
    </div>
  ))}
</div>
            
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-[#0B3C5D] to-[#1D4ED8] text-white text-center">
          <h2 className="text-4xl font-bold mb-6">
            Build Your Winning Team Today
          </h2>
          <p className="text-lg mb-10 opacity-90">
            Partner with staffing experts to hire faster and scale smarter.
          </p>
          <button
            className="bg-white text-blue-950 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition"
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Staffing;
