// import React from "react";

// function SapImplementation() {
//   const services = [
//     {
//       title: "SAP S/4HANA Implementation",
//       desc: "Deploy next-generation ERP with SAP S/4HANA solutions.",
//     },
//     {
//       title: "SAP Migration",
//       desc: "Migrate legacy SAP systems to modern SAP platforms.",
//     },
//     {
//       title: "SAP Integration",
//       desc: "Integrate SAP with third-party applications.",
//     },
//     {
//       title: "SAP Consulting",
//       desc: "Expert consulting to build the right SAP roadmap.",
//     },
//     {
//       title: "SAP Customization",
//       desc: "Customize SAP modules based on business requirements.",
//     },
//     {
//       title: "SAP Support",
//       desc: "Continuous monitoring and support services.",
//     },
//   ];

//   const steps = [
//     "Requirement Analysis",
//     "Planning & System Design",
//     "SAP Implementation",
//     "Testing & QA",
//     "Deployment & Go Live",
//     "Support & Optimization",
//   ];

//   const benefits = [
//     "Real-time data insights",
//     "Improved operational efficiency",
//     "Faster business processes",
//     "Better decision making",
//     "Scalable enterprise systems",
//     "Reduced operational costs",
//   ];

//   return (
//     <div className="font-sans text-gray-800">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r  from-pink-600 to-purple-600 text-white py-14 text-center px-6 mt-20">
//         <h1 className="text-4xl md:text-5xl font-bold mb-6">SAP Services & Implementation </h1>

//         <p className="max-w-2xl mx-auto mb-8">
//           Accelerate your digital transformation with expert SAP implementation
//           services. We help businesses deploy SAP solutions efficiently and
//           maximize ROI.
//         </p>

//         <button className="bg-white text-blue-900 px-6 py-3 rounded font-semibold">
//           Get Free Consultation
//         </button>
//       </section>

//       {/* Services Section */}
//       <section className="py-16 px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our SAP Implementation Services
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {services.map((service, index) => (
//             <div key={index} className="p-6 shadow-lg rounded-lg bg-white">
//               <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

//               <p className="text-gray-600">{service.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Implementation Process */}
//       <section className="py-16 bg-gray-50 px-6">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Our Implementation Process
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="p-6 bg-white shadow rounded-lg text-center"
//             >
//               <div className="text-blue-900 font-bold text-2xl mb-2">
//                 {index + 1}
//               </div>

//               <p className="font-semibold">{step}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section className="py-16 text-center px-6">
//         <h2 className="text-3xl font-bold mb-10">
//           Benefits of SAP Implementation
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//           {benefits.map((item, index) => (
//             <div key={index} className="bg-blue-50 p-6 rounded-lg">
//               {item}
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="flex flex-col justify-center items-center gap-6 ">
//         <h1 className="text-2xl font-bold   ">
//           Transform Your Business with Advanced SAP Industry & Digital Solutions
//         </h1>
//         <p className="w-[50rem] mb-5">
//           In today’s data-driven world, businesses need intelligent systems that
//           enable them to process information quickly and make real-time
//           decisions. SAP (Systems, Applications, and Products) is one of the
//           world’s leading enterprise software platforms designed to manage
//           business operations efficiently through powerful Enterprise Resource
//           Planning (ERP) solutions. Organizations across industries are
//           increasingly investing in SAP industry solutions because of their
//           ability to integrate multiple business processes through specialized
//           modules. Among these, SAP Business Suite solutions such as SAP S/4HANA
//           stand out as powerful platforms for modern digital enterprises.
//         </p>
//         <h1 className="text-2xl font-bold   ">What is SAP S/4HANA?</h1>
//         <p className="w-[50rem] mb-5">
//           SAP S/4HANA is the latest generation of the SAP Business Suite and
//           represents a major technological advancement in enterprise management
//           systems. Built on the SAP HANA in-memory database, it enables
//           businesses to process large volumes of data in real time. This modern
//           platform supports a wide range of critical business functions
//           including: Real-time analytics and reporting Predictive analysis and
//           simulation Business execution and planning Integrated data processing
//           across departments SAP S/4HANA has become a leading digital solution
//           for organizations looking to streamline operations, integrate
//           workflows, and enhance decision-making processes. It is widely used by
//           medium and large enterprises to improve operational efficiency and
//           gain deeper insights into business data.
//         </p>
//         <h1 className="text-2xl font-bold   ">
//       Key Business Areas Supported by SAP S/4HANA
//         </h1>
//         <p className="w-[50rem] mb-5">
//           SAP S/4HANA solutions empower organizations across multiple business functions, including:

// Finance and Accounting

// Marketing and Sales

// Supply Chain Management

// Manufacturing and Production

// Asset Management

// Human Resources

// Procurement and Sourcing

// Research and Development

// Embedded Analytics and Reporting

// By integrating these areas into a unified system, 
// businesses can improve collaboration, reduce inefficiencies,
//  and make faster data-driven decisions.
//         </p>
//       </section>

//       {/* Contact Section */}
//       {/* <section className="py-16 bg-gray-100 px-6">
//         <h2 className="text-3xl font-bold text-center mb-8">
//           Talk to Our SAP Experts
//         </h2>

//         <form className="max-w-xl mx-auto space-y-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="email"
//             placeholder="Email Address"
//             className="w-full p-3 border rounded"
//           />

//           <input
//             type="text"
//             placeholder="Company Name"
//             className="w-full p-3 border rounded"
//           />

//           <textarea
//             placeholder="Project Details"
//             className="w-full p-3 border rounded"
//           ></textarea>

//           <button className="w-full bg-blue-900 text-white py-3 rounded">
//             Submit
//           </button>
//         </form>
//       </section> */}
//     </div>
//   );
// }

// export default SapImplementation;
import React from "react";
import { Navigate, useNavigate } from "react-router";
import {
  Settings,
  RefreshCcw,
  Share2,
  Lightbulb,
  Wrench,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";

function SapImplementation() {
  const Navigate = useNavigate()
  const services = [
    {
      title: "SAP S/4HANA Implementation",
      desc: "Deploy next-generation ERP with SAP S/4HANA solutions.",
      icon: <Settings size={28} />,
    },
    {
      title: "SAP Migration",
      desc: "Migrate legacy SAP systems to modern SAP platforms.",
      icon: <RefreshCcw size={28} />,
    },
    {
      title: "SAP Integration",
      desc: "Integrate SAP with third-party applications.",
      icon: <Share2 size={28} />,
    },
    {
      title: "SAP Consulting",
      desc: "Expert consulting to build the right SAP roadmap.",
      icon: <Lightbulb size={28} />,
    },
    {
      title: "SAP Customization",
      desc: "Customize SAP modules based on business requirements.",
      icon: <Wrench size={28} />,
    },
    {
      title: "SAP Support",
      desc: "Continuous monitoring and support services.",
      icon: <LifeBuoy size={28} />,
    },
  ];

  const steps = [
    "Requirement Analysis",
    "Planning & System Design",
    "SAP Implementation",
    "Testing & QA",
    "Deployment & Go Live",
    "Support & Optimization",
  ];

  const benefits = [
    "Real-time data insights",
    "Improved operational efficiency",
    "Faster business processes",
    "Better decision making",
    "Scalable enterprise systems",
    "Reduced operational costs",
  ];

  return (
    <div className="font-sans text-gray-800 overflow-hidden">
      {/* Hero */}
      {/* <section className="relative bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white py-24 text-center px-6">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            SAP Services & Implementation
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10">
            Accelerate digital transformation with intelligent SAP solutions.
            We implement, optimize, and scale enterprise systems for modern
            businesses.
          </p>
          <button className="bg-white text-indigo-700 px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition">
            Get Free Consultation
          </button>
        </div>
      </section> */}
       <section className="bg-gradient-to-r  from-pink-600 to-purple-600 text-white py-20 text-center px-6 mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">SAP Services & Implementation </h1>

        <p className="max-w-2xl mx-auto mb-8">
         Accelerate your digital transformation with expert SAP implementation
          services. We help businesses deploy SAP solutions efficiently and
          maximize ROI.
       </p>

         <button className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold" onClick={()=> Navigate("/contact")}>
        Contact Us
       
         </button>
       </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our SAP Implementation Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="text-indigo-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Our Implementation Process
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="absolute -top-5 left-6 bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-lg">
                {index + 1}
              </div>
              <p className="font-semibold text-lg mt-6">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <h2 className="text-4xl font-bold text-center mb-16">
          Benefits of SAP Implementation
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-md p-6 rounded-xl"
            >
              <CheckCircle2 className="text-green-300" />
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto leading-relaxed">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Transform Your Business with Advanced SAP Industry & Digital Solutions
        </h2>
        <p className="text-gray-600 mb-10 text-lg">
          In today’s data-driven world, businesses need intelligent systems that
          enable real-time decision-making. SAP is a leading enterprise software
          platform that helps organizations manage operations through advanced
          ERP systems. SAP S/4HANA stands out as a powerful digital core that
          integrates business processes, analytics, and automation into one
          intelligent platform.
        </p>

        <h3 className="text-2xl font-bold ml-80 mb-4">What is SAP S/4HANA?</h3>
        <p className="text-gray-600 mb-10 text-lg">
          SAP S/4HANA is the next-generation business suite built on the SAP
          HANA in-memory database. It delivers real-time analytics, predictive
          capabilities, and streamlined workflows across departments, helping
          enterprises operate faster and smarter.
        </p>

        <h3 className="text-2xl font-bold ml-74 mb-6">
          Key Business Areas Supported
        </h3>

        <div className="grid md:grid-cols-2  gap-4">
          {[
            "Finance and Accounting",
            "Sales and Marketing",
            "Supply Chain Management",
            "Manufacturing",
            "Human Resources",
            "Procurement",
            "Asset Management",
            "R&D",
          ].map((item, i) => (
            <div key={i} className="flex items-center  gap-3 bg-gray-50 p-4 rounded-lg">
              <CheckCircle2 className="text-indigo-600" size={18} />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-600 to-indigo-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Enterprise?
        </h2>
        <p className="text-lg mb-10 opacity-90">
          Partner with certified SAP experts to accelerate your digital journey.
        </p>
        <button className="bg-white text-indigo-700 px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition" onClick={()=> Navigate("/contact")}>
     Contact Us
        </button>
      </section>
    </div>
  );
}

export default SapImplementation;