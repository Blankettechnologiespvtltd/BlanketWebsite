import React from "react";
import Footer from "../Components/Footer";

const ExecutiveSearch = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800 mt-22">

      <section className="w-full py-20 bg-gradient-to-r  from-pink-600 to-purple-600 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Search Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Finding the right leadership is crucial for business success. We help you identify, assess, and recruit high-impact leaders who drive organizational growth.
        </p>
      </section>


      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Why Executive Search?</h2>
          <p className="mb-4 leading-relaxed">
            Executive Search is a specialized recruitment approach designed for hiring senior-level and C-suite professionals. These roles demand strategic vision, strong leadership, and deep industry expertise, which requires a more thorough selection process.
          </p>
          <p className="leading-relaxed">
            Our team uses market insights, talent intelligence, and rigorous assessments to ensure we connect you with leaders who match your company culture and business objectives.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-3">Key Leadership Roles We Hire</h3>
          <ul className="space-y-3 list-disc pl-6">
            <li>Chief Executive Officer (CEO)</li>
            <li>Chief Operating Officer (COO)</li>
            <li>Chief Technology Officer (CTO)</li>
            <li>Chief Marketing Officer (CMO)</li>
            <li>Chief Financial Officer (CFO)</li>
            <li>Vice Presidents & Directors</li>
          </ul>
        </div>
      </section>

     
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Our Executive Search Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">1. Requirement Analysis</h3>
              <p className="leading-relaxed">We collaborate with your leadership team to understand the role, expectations, and ideal candidate profile.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">2. Talent Mapping</h3>
              <p className="leading-relaxed">Our research team identifies top talent from your industry using data, networking, and talent intelligence tools.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">3. Evaluation & Interviewing</h3>
              <p className="leading-relaxed">We assess leadership qualities, experience, strategic thinking, and cultural fit through structured evaluations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">4. Shortlisting</h3>
              <p className="leading-relaxed">Only the most suitable candidates are shortlisted and presented with detailed candidate reports.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">5. Final Interviews</h3>
              <p className="leading-relaxed">We coordinate and support final evaluations with your board or leadership team for smooth decision-making.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-2">6. Offer & Onboarding Support</h3>
              <p className="leading-relaxed">We assist with negotiations, onboarding guidance, and leadership integration for long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-10">Why Companies Trust Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Deep Industry Expertise</h3>
              <p>We understand multiple industries, enabling us to find leaders who align perfectly with your vision.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Confidential & Accurate Search</h3>
              <p>Your hiring process is handled with full confidentiality and precision.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2">Leadership-Focused Assessment</h3>
              <p>We evaluate candidates beyond resumes to ensure long-term leadership success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 bg-blue-700 text-white text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for the Right Leadership?</h2>
        <p className="text-lg max-w-3xl mx-auto mb-6 opacity-90">
          Let us help you hire visionary leaders who can transform your organization.
        </p>
        <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-full shadow hover:bg-gray-200 transition-all">
          Contact Us
        </button>
      </section> */}
      <Footer />
    </div>
  );
};

export default ExecutiveSearch;
