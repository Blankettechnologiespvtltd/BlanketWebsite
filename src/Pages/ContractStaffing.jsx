import React from "react";
import Footer from "../Components/Footer";

const ContractStaffing = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800 mt-22">
      {/* Hero Section */}
      <section className="w-full py-20 bg-gradient-to-r  from-pink-600 to-purple-600 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contract Staffing Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Flexible, scalable, and reliable workforce solutions tailored to meet your project and operational needs.
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">What is Contract Staffing?</h2>
          <p className="mb-4 leading-relaxed">
            Contract staffing allows businesses to hire skilled professionals for a specific duration or project without the long-term commitment of full-time employment. It offers flexibility, cost-efficiency, and quick resource deployment.
          </p>
          <p className="leading-relaxed">
            We help companies scale their teams rapidly with pre-vetted talent across IT, non-IT, engineering, support, and administrative roles.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">Industries We Support</h3>
          <ul className="space-y-3 list-disc pl-6">
            <li>Information Technology (IT)</li>
            <li>Manufacturing & Engineering</li>
            <li>Healthcare & Pharma</li>
            <li>Finance & Accounting</li>
            <li>E-commerce & Retail</li>
            <li>BPO / KPO / Customer Support</li>
          </ul>
        </div>
      </section>

      {/* Our Services */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Contract Staffing Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Short-Term Staffing</h3>
              <p>Ideal for short-duration projects, seasonal demands, or urgent workforce needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Long-Term Contracting</h3>
              <p>Hire skilled professionals on a long-term contract without full-time liabilities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Project-Based Staffing</h3>
              <p>Get a team or individual experts for specific projects with defined timelines.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">On-Site Staffing Support</h3>
              <p>We provide on-ground workforce support for operations, logistics, and admin needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Remote Contract Staffing</h3>
              <p>Scale your remote team quickly with reliable remote professionals.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Skill-Based Contracting</h3>
              <p>We supply experienced talent for IT, design, engineering, HR, finance & more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Companies Prefer Our Staffing Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Fast Hiring</h3>
              <p>We deliver pre-screened candidates quickly for urgent project requirements.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Complete Compliance Handling</h3>
              <p>We manage payroll, attendance, statutory compliance, and documentation.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Cost-Effective Hiring</h3>
              <p>Reduce recruitment overheads and optimize workforce costs.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Dedicated Account Managers</h3>
              <p>We provide continuous support to ensure smooth workforce operations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Zero Administrative Hassle</h3>
              <p>You focus on business while we handle the workers end-to-end.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Quality Workforce</h3>
              <p>We provide trained, reliable, and professional contract employees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-purple-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Skilled Workforce on Contract?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6 opacity-90">
          Let us help you hire the right talent quickly and effortlessly.
        </p>
        <button className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-200 transition-all">
          Contact Us
        </button>
      </section> */}
      <Footer />
    </div>
  );
};

export default ContractStaffing;
