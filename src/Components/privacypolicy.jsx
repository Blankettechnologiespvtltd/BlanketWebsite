import React from "react";

import Footer from "./Footer";

const PrivacyPolicyPage = () =>{
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 text-gray-800 mt-8">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow rounded-2xl">
        <h1 className="text-3xl font-semibold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Effective Date: 2025</p>

        <p className="mb-6">
          This Privacy Policy explains how our company collects, uses, stores, and
          protects your personal information while offering Consultancy and IT
          Services. By using our website or services, you agree to the terms
          described in this policy.
        </p>

        <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
        <p className="mb-4">We may collect the following categories of data:</p>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Your Name, Email, Phone Number</li>
          <li>Company/Business Information</li>
          <li>Project Requirements & Service Details</li>
          <li>IP Address, Browser Type, Device Information</li>
          <li>Website Usage Analytics</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>To provide Consultancy & IT Solutions</li>
          <li>To improve user experience and service quality</li>
          <li>To communicate about projects, updates, invoices</li>
          <li>To improve website performance and security</li>
          <li>To send service-related notifications</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">3. Data Sharing</h2>
        <p className="mb-6">
          We do <strong>not</strong> sell or rent your personal information. We only share
          your data with trusted third-party service providers such as hosting,
          analytics, or tools required to deliver our services.
        </p>

        <h2 className="text-xl font-bold mb-2">4. Cookies & Tracking</h2>
        <p className="mb-6">
          Our website may use cookies for better performance and analytics. You can
          disable cookies anytime from your browser settings.
        </p>

        <h2 className="text-xl font-bold mb-2">5. Data Protection</h2>
        <p className="mb-6">
          We use industry‑standard security practices including encryption, access
          restrictions, and monitoring to keep your data safe.
        </p>

        <h2 className="text-xl font-bold mb-2">6. Your Rights</h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Request access to your data</li>
          <li>Request correction of incorrect data</li>
          <li>Request deletion of stored data</li>
          <li>Withdraw consent for communication</li>
        </ul>

        <h2 className="text-xl font-bold mb-2">7. Contact Us</h2>
        <p className="mb-6">
          If you have any questions regarding this Privacy Policy, feel free to
          contact us:
        </p>
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p>Email: support@blanket-technologies.com</p>
          <p>Phone: +91 9220973566</p>
        </div>

       
        
      </div>
       <Footer/>

    </div>
  );
};

export default PrivacyPolicyPage;