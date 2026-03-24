import React from "react";
import { Link } from "react-router";
import Footer from "../Components/Footer";
import AutoCarousel from "../Components/AutoCarousel";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      subtitle: "Front-End and Back-End",
      desc: "We build responsive, scalable web apps using React, Next.js, and modern tech stacks.",
      image: "/webdev.jpg",
      link: "/web-designing",
    },

    {
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      desc: "Crafting intuitive designs that deliver outstanding user experiences.",
      image: "/uiux.jpg",
      link: "/ui-ux-designing",
    },
    {
      title: "Testing",
      subtitle: "Quality Assurance",
      desc: "Ensuring your product performs perfectly across all devices and environments.",
      image: "/testing.jpg",
      link: "/web-testing",
    },
    {
      title: "Mobile Development",
      subtitle: "iOS and Android Applications",
      desc: "Creating high-performance mobile applications with seamless experiences.",
      image: "/mobile.jpg",
      link: "/app-development",
    },
    {
      title: "Digital Marketing",
      subtitle:
        "we help brands grow digitally through data-driven marketing strategies, creativity, and cutting-edge technologies.",
      desc: "we help brands grow digitally through data-driven marketing strategies, creativity, and cutting-edge technologies.",
      image: "/mobile.jpg",
      link: "/digital-marketing",
    },
    {
      title: "Payment Gateway ",
      subtitle:
        "we help brands grow digitally through data-driven marketing strategies, creativity, and cutting-edge technologies.",
      desc: "Secure, seamless, and scalable online payment solutions for your business. ",
      link: "/payment-gateway",
    },
    //     {
    //   title: "SAP",
    //   subtitle: "Front-End and Back-End",
    //   desc: "We build responsive, scalable web apps using React, Next.js, and modern tech stacks.",
    //   image: "/webdev.jpg",
    //   link: "/web-designing",
    // },
  ];
  const counsaltancyServices = [
    {
      title: "RPO Services",
      subtitle: "Technology Advisory",
      desc: "Blanket Technologies offers professional RPO (Recruitment Process Outsourcing) solutions to help organizations hire top-quality talent faster, at lower cost, and with complete transparency.",
      image: "/it-consultancy.jpg",
      link: "/RPO",
    },
    {
      title: "Payroll Services",
      subtitle: "Technology Advisory",
      desc: "Streamline your payroll operations with automation, compliance, and accuracy— giving you more time to focus on growing your business.",
      image: "/it-consultancy.jpg",
      link: "/Payroll",
    },
    {
      title: "Global Search",
      subtitle: "Technology Advisory",
      desc: "Global Search is a central intelligent search engine inside your organization. Instead of opening 10 different modules, you can instantly find customers, employees, files, invoices, attendance records, and more — within seconds.",
      image: "/it-consultancy.jpg",
      link: "/GlobalSearch",
    },
    {
      title: "Executive Search",
      subtitle: "Technology Advisory",
      desc: "Finding the right leadership is crucial for business success. We help you identify, assess, and recruit high-impact leaders who drive organizational growth.",
      image: "/it-consultancy.jpg",
      link: "/ExecutiveSearch",
    },
    {
      title: "Contract Staffing",
      subtitle: "Technology Advisory",
      desc: "We help companies scale their teams rapidly with pre-vetted talent across IT, non-IT, engineering, support, and administrative roles.",
      image: "/it-consultancy.jpg",
      link: "/ContractStaffing",
    },
    {
      title: "Permanent Hiring",
      subtitle: "Technology Advisory",
      desc: "Our recruitment experts carefully evaluate candidates based not only on skills but also cultural alignment, stability, and growth potential—ensuring long-term retention and performance.",
      image: "/it-consultancy.jpg",
      link: "/PermanentHiring",
    },
    {
      title: "Project Based Hiring",
      subtitle: "Technology Advisory",
      desc: "It is ideal for companies that require flexibility, speed, and project-focused expertise while maintaining cost-efficiency and operational agility.",
      image: "/it-consultancy.jpg",
      link: "/ProjectBasedHiring",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100   mt-9 pb-0">
      <h1 className="text-4xl font-bold text-center  text-white  pt-46 -mt-25 h-[23rem] bg-blue-950 mb-10">
        Our Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((svc, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow border hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{svc.title}</h2>
            <p className="text-gray-600 mb-4">{svc.desc}</p>
            <Link
              to={svc.link}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-center mt-7 mb-10">
        Recruitment Services
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {counsaltancyServices.map((svc, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow border hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{svc.title}</h2>
            <p className="text-gray-600 mb-4">{svc.desc}</p>
            <Link
              to={svc.link}
              className="text-blue-600 font-medium hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
      <AutoCarousel />
      <Footer />
    </div>
  );
};

export default Services;
