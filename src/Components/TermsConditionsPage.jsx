import React from "react";

import Footer from "./Footer";

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-gray-800 mt-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded-2xl">
        <h1 className="text-3xl font-semibold mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: 2025</p>

        <p className="mb-6">
          These Terms & Conditions govern your use of our Consultancy and IT
          Services. By accessing or using our website or services, you agree to comply
          with these terms. Please read them carefully before proceeding.
        </p>

        <h2 className="text-xl font-bold mb-2">1. Acceptance of Terms</h2>
        <p className="mb-6">
          By using our website, contacting us, or availing our services, you accept
          and agree to follow all policies, rules, and guidelines mentioned in this
          document. If you do not agree, please stop using our services immediately.
        </p>

        <h2 className="text-xl font-bold mb-2">2. Services Offered</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Business & IT Consultancy</li>
          <li>Website Development & Application Development</li>
          <li>Software Integration & Automation</li>
          <li>IT Infrastructure & Cloud Services</li>
          <li>Technical Support & Maintenance</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">3. Client Responsibilities</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Provide accurate project details and requirements</li>
          <li>Share necessary files, documents, or access credentials</li>
          <li>Make timely payments as per invoice or agreement</li>
          <li>Respond to requests and approvals promptly</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">4. Payments & Billing</h2>
        <p className="mb-4">By using our services, you agree to:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Pay all service charges as per the invoice</li>
          <li>Pay advance amounts where required</li>
          <li>Clear dues before final delivery of the project</li>
          <li>No refunds after the completion of work unless agreed beforehand</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">5. Project Timelines</h2>
        <p className="mb-6">
          Project delivery timelines depend on the scope of work, client approvals,
          communication, and availability of necessary resources. Delays caused due to
          client inaction are not our responsibility.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Use of Deliverables</h2>
        <p className="mb-6">
          All project deliverables, including code, designs, and documents, remain
          the company's property until the full payment is completed. Unauthorized
          copying, reselling, or sharing of our deliverables is strictly prohibited.
        </p>

        <h2 className="text-xl font-bold mb-2">7. Confidentiality</h2>
        <p className="mb-6">
          Both parties agree to maintain confidentiality of all shared materials,
          credentials, project details, and communication. Data will only be used for
          service-related purposes.
        </p>

        <h2 className="text-xl font-bold mb-2">8. Limitation of Liability</h2>
        <p className="mb-6">
          We are not liable for any direct or indirect damages such as data loss,
          business interruption, or financial losses resulting from service usage,
          unless specified in a written agreement.
        </p>

        <h2 className="text-xl font-bold mb-2">9. Third-Party Tools & Services</h2>
        <p className="mb-6">
          Some services may integrate third-party software, APIs, plugins, or
          platforms. We are not responsible for any issues arising from third-party
          system failures or changes.
        </p>

        <h2 className="text-xl font-bold mb-2">10. Termination of Services</h2>
        <p className="mb-6">
          We reserve the right to terminate services if the client violates terms,
          delays payments, or engages in inappropriate activity. Completed work until
          the termination point will still be chargeable.
        </p>

        <h2 className="text-xl font-bold mb-2">11. Updates to Terms</h2>
        <p className="mb-6">
          We may update these Terms & Conditions to reflect changes in services,
          policies, or regulations. Continued use of our website and services implies
          acceptance of updated terms.
        </p>

        <h2 className="text-xl font-bold mb-2">12. Contact Information</h2>
        <p className="mb-4">For any concerns or questions, contact us at:</p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p>Email: support@company.com</p>
          <p>Phone: +91 9876543210</p>
        </div>

      
      </div>
      <Footer/>
    </div>
  );
};

export default TermsConditionsPage;