import React from "react";
import Footer from "../Components/Footer";

const RPO = () => {
  return (
    <div className="pt-28  px-6 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 leading-[1.2] inline-block">
          Recruitment Process Outsourcing (RPO)
        </h1>

        <p className="text-gray-600 mt-5 text-lg leading-relaxed">
          Blanket Technologies offers professional RPO (Recruitment Process Outsourcing) 
          solutions to help organizations hire top-quality talent faster, at lower cost, 
          and with complete transparency. Our expert recruiters act as an extended part of 
          your HR department — ensuring you get the right candidates, streamlined hiring 
          processes, and a fully optimized recruitment ecosystem.  
          <br /><br />
          Whether you're a startup building your first team or an enterprise scaling rapidly, 
          our RPO model adapts to your hiring goals, job role complexity, and industry needs. 
          From sourcing and screening to onboarding, we convert your hiring challenges into 
          a structured, data-driven, and efficient system.
        </p>

        {/* Why Choose RPO */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Our RPO Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {[
              "Up to 40% Faster Hiring",
              "Reduced Recruitment Costs",
              "Dedicated Hiring Managers",
              "End-to-End Candidate Management",
              "High-Quality Talent Pipeline",
              "Real-Time Reporting & Analytics",
              "Multi-Channel Talent Sourcing",
              "AI-Driven Screening & Shortlisting",
              "Expertise Across Multiple Domains",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800 text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* RPO Models */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our RPO Engagement Models
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "Full-Cycle ",
                desc: "We manage the complete hiring operation including sourcing, screening, interviews, selection, and onboarding."
              },
              {
                title: "Project-Based ",
                desc: "Ideal for short-term or urgent hiring needs such as seasonal hiring, expansions, or new project launches."
              },
              {
                title: "On-Demand ",
                desc: "Flexible hiring support whenever you need recruitment assistance. Scale up or down as needed."
              },
              {
                title: "Hybrid ",
                desc: "Combine your in-house HR team with our expert recruiters to achieve maximum hiring efficiency."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-xl shadow border-l-4 border-cyan-400 hover:shadow-md transition">
                <h3 className="font-bold text-gray-800 text-xl">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our RPO Hiring Process
          </h2>

          <div className="space-y-5">
            {[
              "Understanding Your Hiring Requirements & Company Culture",
              "Sourcing Talent Through Job Portals, LinkedIn, Social Media & Internal Database",
              "AI-Based Screening, Candidate Shortlisting & Skill Evaluation",
              "Scheduling Interviews With HR & Technical Teams",
              "Final Selection, Salary Negotiation & Offer Management",
              "Smooth Onboarding, Background Verification & Joining Follow-up",
            ].map((step, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow hover:shadow-md transition border-l-4 border-blue-400"
              >
                <span className="font-semibold text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "IT & Software Development",
              "Ecommerce & Retail",
              "Banking & Finance",
              "Healthcare & Pharma",
              "Manufacturing",
              "Telecommunications",
              "Startups & Tech Companies",
              "EdTech & Learning Platforms",
              "Logistics & Supply Chain",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Technology & Tools We Use
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Applicant Tracking Systems (ATS)",
              "AI-Based Resume Screening Tools",
              "HRM & CRM Platforms",
              "Payroll & HR Automation Tools",
              "Video Interview Platforms",
              "Skill Assessment & Testing Tools",
            ].map((tool, i) => (
              <div key={i} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
                <p className="font-semibold text-gray-700">{tool}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions (FAQ)
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is RPO and how does it work?",
                a: "RPO is a service where a company outsources its recruitment operations to a specialized agency like us. We manage sourcing, interviews, onboarding, and more."
              },
              {
                q: "Is RPO only for large companies?",
                a: "No, startups and mid-size businesses use RPO to hire faster without building a large HR team."
              },
              {
                q: "How soon can you start hiring?",
                a: "Our team can begin sourcing candidates within 24–48 hours after requirement onboarding."
              },
              {
                q: "Is RPO cost-effective?",
                a: "Yes! Companies save 30–50% on hiring costs using RPO compared to traditional recruitment."
              }
            ].map((item, i) => (
              <div key={i} className="p-5 bg-white rounded-xl shadow border-l-4 border-blue-500">
                <h4 className="font-semibold text-lg text-gray-800">{item.q}</h4>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center py-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build a High-Performance Workforce?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Get expert recruitment support and hire top-quality talent faster, smarter, and cost-effectively.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-cyan-600 transition"
          >
            Get RPO Consultation
          </a>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default RPO;
