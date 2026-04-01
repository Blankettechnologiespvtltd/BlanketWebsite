import React from "react";
import Footer from "../Components/Footer";

const GlobalSearch = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-900 -mt-2">
      
      {/* HERO */}
      <section className="w-full py-20 bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mt-14 mb-6">  Global Search - Find Anything Instantly</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
         A powerful universal search that scans every module, document,  
            contact & record — all from a single search bar.
        </p>
      </section>
      

      {/* WHAT IS GLOBAL SEARCH */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">What is Global Search?</h2>
          <p className="text-gray-600 leading-relaxed">
            Global Search is a central intelligent search engine inside your organization.  
            Instead of opening 10 different modules, you can instantly find customers, 
            employees, files, invoices, attendance records, and more — within seconds.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It uses smart indexing to deliver relevant results at high speed and with
            maximum accuracy.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-10">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Unified Search Bar",
              desc: "Search across all modules — HR, CRM, Payroll, Finance & more."
            },
            {
              title: "Smart Filters",
              desc: "Filter results by module, date, status, employee, category, etc."
            },
            {
              title: "Document Search",
              desc: "Search inside PDFs, Excel sheets, images & internal files."
            },
            {
              title: "Relevance Ranking",
              desc: "Most accurate and useful results appear first."
            },
            {
              title: "Role-Based Security",
              desc: "Users only see data they have permission to access."
            },
            {
              title: "High-Speed Indexing",
              desc: "Results load in milliseconds — no lag, no delay."
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-xl transition duration-200 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">Advantages</h2>

          <ul className="text-gray-700 space-y-3 leading-relaxed">
            <li>✔ Reduces searching time by 80% for teams.</li>
            <li>✔ Boosts productivity and fast decision making.</li>
            <li>✔ Removes complex navigation across modules.</li>
            <li>✔ Helps new employees quickly find information.</li>
            <li>✔ Gives quick access to critical business insights.</li>
            <li>✔ Saves hours of manual searching daily.</li>
          </ul>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold text-center mb-8">How Global Search Works</h2>

          <div className="space-y-4 text-gray-700">
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 1:</span> User enters any keyword.
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 2:</span> System scans all database indexes.
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 3:</span> Role-based permissions are applied.
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 4:</span> Results are grouped module-wise.
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 5:</span> User applies smart filters.
            </div>
            <div className="p-5 bg-gray-100 rounded-lg shadow-sm">
              <span className="font-semibold">Step 6:</span> User opens record details.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Upgrade Your Platform With Global Search
          </h2>
          <p className="text-lg mb-8">
            Give your users the fastest and smartest way to find information instantly.
          </p>
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow hover:scale-105 transition">
            Request Free Demo
          </button>
        </div>
      </section> */}
        <Footer />
    </div>
  );
};

export default GlobalSearch;
