
import React from "react";
import Footer from "../Components/Footer";

const RPO = () => {
  return (
    <div className="bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white text-center py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Recruitment Process Outsourcing
          </h1>

          <p className="text-lg leading-relaxed text-blue-100">
            RPO solutions to help organizations hire top-quality talent faster,
            reduce costs, and streamline hiring with a structured system.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">

        {/* Why Choose */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Why Choose Our RPO Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
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
                className="p-6 bg-white rounded-2xl shadow hover:shadow-lg text-center transition"
              >
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Models */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Our RPO Engagement Models
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "Full-Cycle",
                desc: "Complete hiring lifecycle from sourcing to onboarding.",
              },
              {
                title: "Project-Based",
                desc: "Short-term hiring for expansions or urgent needs.",
              },
              {
                title: "On-Demand",
                desc: "Flexible recruitment support as needed.",
              },
              {
                title: "Hybrid",
                desc: "Combine in-house HR with expert recruiters.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow border-l-4 border-indigo-500 hover:shadow-md transition"
              >
                <h3 className="font-bold text-gray-800 text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Our RPO Hiring Process
          </h2>

          <div className="space-y-5">
            {[
              "Understanding requirements & company culture",
              "Sourcing via job portals & LinkedIn",
              "AI-based screening & shortlisting",
              "Interview scheduling & coordination",
              "Offer & negotiation management",
              "Onboarding & follow-up",
            ].map((step, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow border-l-4 border-indigo-400"
              >
                <span className="text-gray-800">{step}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "IT & Software",
              "Ecommerce & Retail",
              "Banking & Finance",
              "Healthcare",
              "Manufacturing",
              "Telecom",
              "Startups",
              "EdTech",
              "Logistics",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl shadow hover:shadow-lg text-center"
              >
                <h3 className="font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            Technology & Tools
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "ATS Systems",
              "AI Resume Screening",
              "HRM & CRM Tools",
              "Payroll Automation",
              "Video Interviews",
              "Skill Testing Tools",
            ].map((tool, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow text-center"
              >
                <p className="text-gray-700 font-medium">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
            FAQ
          </h2>

          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                q: "What is RPO?",
                a: "Outsourcing recruitment to experts for faster hiring.",
              },
              {
                q: "Who can use RPO?",
                a: "Startups, SMEs, and enterprises.",
              },
              {
                q: "How fast can you start?",
                a: "Within 24–48 hours.",
              },
              {
                q: "Is it cost-effective?",
                a: "Yes, saves up to 50% hiring cost.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl shadow border-l-4 border-indigo-500"
              >
                <h4 className="font-semibold text-gray-800">{item.q}</h4>
                <p className="text-gray-600 mt-2">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Ready to Build a High-Performance Workforce?
          </h3>

          <p className="text-gray-600 mb-6">
            Hire faster, smarter, and cost-effectively.
          </p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-[#1B3C73] to-indigo-700 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition"
          >
            Get RPO Consultation
          </a>
        </section>

      </div>

      <Footer />
    </div>
  );
};

export default RPO;