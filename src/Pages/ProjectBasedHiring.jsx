import React from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router";

const ProjectBasedHiring = () => {
    const navigate = useNavigate();
  return (
    <div className="w-full bg-gray-50 text-gray-800 -mt-2">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-14">Project-Based Hiring Solutions</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-6">
          Deliver your projects on time with highly skilled professionals hired specifically for your project needs.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">What is Project-Based Hiring?</h2>
          <p className="mb-4 leading-relaxed">
            Project-Based Hiring helps organizations quickly bring in expert talent for short-term or long-term projects. Whether you're launching a new product, upgrading technology, expanding operations, or managing seasonal demand, project hiring ensures you get the specialized skills needed without full-time commitments.
          </p>
          <p className="leading-relaxed">
            It is ideal for companies that require flexibility, speed, and project-focused expertise while maintaining cost-efficiency and operational agility.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">Projects We Support</h3>
          <ul className="space-y-3 list-disc pl-6">
            <li>IT & Software Development Projects</li>
            <li>Digital Transformation Projects</li>
            <li>Marketing Campaigns & Creative Projects</li>
            <li>Engineering & Technical Projects</li>
            <li>Product Launch & Expansion Projects</li>
            <li>Finance, Audit & Compliance Projects</li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Project Hiring Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Specialized Project Talent</h3>
              <p>We provide industry-specific experts based on project requirements.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Team-Based Hiring</h3>
              <p>Get a complete project team — developers, designers, analysts, testers, etc.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Short-Term & Long-Term Projects</h3>
              <p>Flexible duration — from 1 month to multi-year project timelines.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Milestone-Based Hiring</h3>
              <p>Hire talent based on project phases or specific deliverables.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">On-Site & Remote Teams</h3>
              <p>Choose between on-premise, hybrid, or fully remote professionals.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Rapid Deployment</h3>
              <p>We deploy skilled professionals quickly to meet urgent project needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Companies Choose Our Project Hiring</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Highly Skilled Experts</h3>
              <p>Access to certified, experienced professionals with project-specific expertise.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cost-Efficient Hiring</h3>
              <p>Pay only for the duration and expertise you need — no long-term overheads.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Faster Project Execution</h3>
              <p>Boost productivity and deliver faster results with ready-to-work professionals.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Reduced Hiring Time</h3>
              <p>Avoid long hiring cycles — we provide quick turnarounds.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Flexible Workforce</h3>
              <p>Scale your project team up or down based on workload.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Dedicated Project Support</h3>
              <p>We assist throughout the project lifecycle to ensure smooth execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Ideal For Companies Who Need</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Quick Project Kickoff</h3>
              <p>Start projects immediately with the right experts ready to contribute.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Niche Skill Requirements</h3>
              <p>Hire specialists with unique skills not available in-house.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2">Temporary Extra Workforce</h3>
              <p>Manage workload spikes without long-term hiring commitments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Experts for Your Upcoming Project?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6 opacity-90">
          Hire skilled, experienced, and project-ready professionals effortlessly.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-200 transition-all" onClick={() => navigate('/contact')}>
          Contact Us
        </button>
      </section>
        <Footer />
    </div>
  );
};

export default ProjectBasedHiring;
