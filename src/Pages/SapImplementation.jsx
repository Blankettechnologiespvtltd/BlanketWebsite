
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";
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
  const navigate = useNavigate();

  const services = [
    { title: "SAP S/4HANA Implementation", desc: "Deploy next-generation ERP with SAP S/4HANA solutions.", icon: <Settings size={28} /> },
    { title: "SAP Migration", desc: "Migrate legacy SAP systems to modern SAP platforms.", icon: <RefreshCcw size={28} /> },
    { title: "SAP Integration", desc: "Integrate SAP with third-party applications.", icon: <Share2 size={28} /> },
    { title: "SAP Consulting", desc: "Expert consulting to build the right SAP roadmap.", icon: <Lightbulb size={28} /> },
    { title: "SAP Customization", desc: "Customize SAP modules based on business requirements.", icon: <Wrench size={28} /> },
    { title: "SAP Support", desc: "Continuous monitoring and support services.", icon: <LifeBuoy size={28} /> },
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
      <section className="bg-gradient-to-b from-[#1B3C73] to-purple-400 text-white py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mt-6 mb-5"
        >
          SAP Services & Implementation
        </motion.h1>

        <p className="max-w-2xl mx-auto mb-8 text-white">
          Accelerate your digital transformation with expert SAP implementation
          services. We help businesses deploy SAP solutions efficiently and
          maximize ROI.
        </p>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <h2 className="text-4xl font-bold text-center mb-16">Our SAP Implementation Services</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1D4ED8] to-[#0B3C5D] text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="text-[#38BDF8] mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-blue-100 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-16">Our Implementation Process</h2>

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
        <h2 className="text-4xl font-bold text-center mb-16">Benefits of SAP Implementation</h2>

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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Business with Advanced SAP Digital Solutions</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Empower your organization with
            <span className="font-semibold text-gray-800"> real-time insights</span>,
            <span className="font-semibold text-gray-800"> intelligent automation</span>, and
            <span className="font-semibold text-gray-800"> connected operations</span>.
            SAP helps businesses simplify complexity and accelerate performance.
            <span className="font-semibold text-gray-800"> SAP S/4HANA</span> unifies
            your processes, data, and analytics into one intelligent digital core.
          </p>
        </div>

        <div className="bg-[#DBEAFE] p-8 rounded-2xl shadow-sm mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">What is SAP S/4HANA?</h3>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            SAP S/4HANA is the next-generation business suite built on the SAP HANA in-memory database.
            It delivers real-time analytics, predictive capabilities, and streamlined workflows across departments,
            helping enterprises operate faster and smarter.
          </p>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">Key Business Areas Supported</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Finance and Accounting",
              "Sales and Marketing",
              "Supply Chain Management",
              "Manufacturing",
              "Human Resources",
              "Procurement",
              "Asset Management",
              "Research & Development",
            ].map((item, i) => (
              <div
                key={i}
                className="group flex items-center gap-4 bg-white border border-blue-700 p-5 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 cursor-pointer"
              >
                <div className="bg-[#DBEAFE] text-[#1D4ED8] p-2 rounded-lg group-hover:bg-[#1D4ED8] group-hover:text-white transition">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-medium text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-[#1D4ED8] to-[#0B3C5D] text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
        <p className="text-lg mb-10 opacity-90">Partner with certified SAP experts to accelerate your digital journey.</p>
        <button
          className="bg-white text-[#0B3C5D] px-10 py-4 rounded-full font-bold shadow-xl hover:bg-[#38BDF8] hover:text-white hover:scale-105 transition"
          onClick={() => navigate("/contact")}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default SapImplementation;
// During my internship as a Software Engineer Intern, I worked on multiple frontend development tasks with a 
// focus on building responsive user interfaces, implementing authentication systems, and improving overall user
//  experience. My approach was hands-on, where I actively contributed to real-world projects and enhanced 
// existing applications.

// Core Development Work
// During this period, I worked on several projects that helped me gain practical experience in frontend
//  development.
// I developed a Task Manager interface where I designed and structured the UI for task creation and management.
//  This helped me understand how to build interactive interfaces and manage dynamic content using JavaScript.
// I also worked on implementing a complete authentication system, including Login and Signup functionality
//  with role-based access. I designed user-friendly forms, handled input validation, and ensured a smooth user
//  flow. I implemented role-based UI logic to differentiate between Admin and User access, improving both
//  usability and security.
// Additionally, I developed a responsive Interior Design website where I focused on creating visually 
// appealing
//  layouts using HTML, CSS, and Tailwind CSS. I ensured proper responsiveness across different devices
//  and maintained a clean and modern design structure.

// Authentication & Security Implementation
// Implemented authentication features including Login and Signup with proper validation and error handling.
//  I worked on role-based redirection, ensuring users are directed to appropriate dashboards based on their
// roles.
// I also implemented secure authentication practices such as JWT-based authentication, protected routes, and
//  role-based access control (RBAC). Additionally, I handled auto logout functionality to manage token 
// expiration and unauthorized access (401/403 responses).
// This experience helped me understand real-world authentication workflows and frontend security practices.



// Form Handling & User Experience Enhancements
// I implemented client-side validation using JavaScript, including required field checks, email 
// format validation, and password constraints. I added real-time error handling to provide immediate
//  feedback to users.
// To enhance user experience, I optimized API interactions by adding loaders during API calls, 
// disabling buttons to prevent duplicate submissions, and clearly handling success and error responses. 
// These improvements ensured smooth communication between frontend and backend systems.

// Company Website Enhancement
// I worked on improving the existing company website by updating UI components and adding new pages.
//  I ensured consistency in design, improved navigation, and enhanced overall usability.
// My work involved modifying existing code, optimizing layouts, and aligning new features with the 
// current design system. This gave me practical exposure to working on live projects and maintaining
//  production-level applications.
// I also successfully deployed the website and ensured smooth functionality in a live environment.
//  Additionally, I managed version control using Git by regularly pushing and maintaining code while
//  following proper development workflows.
// Content Development (True-View)
// Apart from development work, I contributed to content-related tasks for the True-View platform.
//  I worked on structuring and organizing content, ensuring proper formatting, and aligning it with
//   user experience goals.

// Technical Skills & Learning
// Frontend Technologies: HTML, CSS, Tailwind CSS, JavaScript
// Framework: React 
// Authentication: JWT-based authentication
// Other Skills: Responsive Design, API Integration, Form Validation
// Database Knowledge: SQL 
// Final Summary
// Overall, during my 3.5-month internship, I worked on multiple frontend projects including building 
// applications from scratch and enhancing existing systems. I gained hands-on experience in UI development, 
// authentication systems, and real-world project workflows.
// This experience has strengthened my technical skills, improved my problem-solving ability, and provided
//  me with a solid foundation in frontend development.

// Next Planning
// Going forward, I aim to further strengthen my frontend development skills by working more deeply with 
// React and building scalable, component-based applications. I plan to improve my understanding of state 
// management, performance optimization, and advanced UI/UX practices to develop more efficient and 
// high-quality user interfaces.
// I also intend to enhance my knowledge of full-stack development by improving backend integration 
// skills, working with APIs more efficiently, and gaining a deeper understanding of database handling.
//  Additionally, I plan to follow best coding practices, improve code quality, and contribute more 
// effectively to real-world projects and production-level applications.

