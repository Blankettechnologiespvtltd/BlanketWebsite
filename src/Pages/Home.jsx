import React from "react";
import myPhoto from "../assets/myphoto.jpg";
import ScrollProgress from "../Components/ScrollProgress";
import { useNavigate } from "react-router";
import ConsultancySection from "../Components/ConsultancySection";
import StatsSection from "../Components/StatsSection";
import {
  FaReact,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaGlobe,
  FaCogs,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import { FaBriefcase, FaBullhorn } from "react-icons/fa";
import Carousel from "../Components/AutoCarousel";
import Footer from "../Components/Footer";
import PremiumSlideTabs from "../Components/PremiumSlideTabs";

const Home = () => {
  const navigate = useNavigate();

  const handleLearnMore = (url) => {
    navigate(url);
  };

  const services = [
    {
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
      title: "Web Development",
      desc: "High-performance, secure, scalable websites built to convert visitors into customers.",
      offer: "Talk to Web Expert ",
      benefits: "Fast, secure, and scalable online presence for your business.",
      images: ["/web1st.jpg", "/web2nd.jpg"],
    },
    {
      icon: <FaBullhorn className="text-green-600 text-4xl" />,
      title: "Digital Marketing",
      desc: "SEO & paid campaigns focused on traffic, leads, and conversions.",
      offer: "Get Growth Plan",
      benefits: "Increased engagement, traffic, and conversions.",
      images: ["/marketing1.jpg", "/marketing2.jpg"],
    },
    {
      icon: <FaGlobe className="text-purple-600 text-4xl" />,
      title: "Cloud Solutions",
      desc: "Cost-effective cloud setup & migration on AWS, Azure & GCP.",
      offer: "Book Cloud Consultation ",
      benefits: "Reduced costs with improved flexibility and security.",
      images: ["/cloud1.jpg", "/cloud2.jpg"],
    },
    {
      icon: <FaBriefcase className="text-orange-600 text-4xl" />,
      title: "Business Automation",
      desc: "CRM, ERP & workflows that save time and reduce operational cost. ",
      offer: "Automate My Business",
      benefits: "Optimized operations and improved productivity.",
      images: ["/automation1.jpg", "/automation2.jpg"],
    },
  ];

  const expertise = [
    {
      title: "Web Development",
      subtitle: "Front-End and Back-End",
      desc: "We build responsive, scalable web apps using React, Next.js, and modern tech stacks.",
      image: "/webdev.jpg",
      links: "/web-designing",
    },
    {
      title: "Digital Marketing",
      subtitle: "SEO, SEM, and Social Media",
      desc: "Empowering businesses with intelligent systems, automation, and data-driven insights.",
      image: "/ai.jpg",
      links: "/digital-marketing",
    },
    {
      title: "Cloud Solutions",
      subtitle: "AWS, Azure, and Google Cloud",
      desc: "Deploy, manage, and scale your applications securely in the cloud environment.",
      image: "/cloud.jpg",
      links: "/web-designing",
    },
    {
      title: "UI/UX Design",
      subtitle: "User-Centered Design",
      desc: "Crafting intuitive designs that deliver outstanding user experiences.",
      image: "/uiux.jpg",
      links: "/ui-ux-designing",
    },
    {
      title: "Testing",
      subtitle: "Quality Assurance",
      desc: "Ensuring your product performs perfectly across all devices and environments.",
      image: "/testing.jpg",
      links: "/web-testing",
    },
    {
      title: "Mobile Development",
      subtitle: "iOS and Android Applications",
      desc: "Creating high-performance mobile applications with seamless experiences.",
      image: "/mobile.jpg",
      links: "/app-development",
    },
  ];

  return (
    <div>
      <ScrollProgress />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white p-7 md:mt-20">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${myPhoto})` }}
        />

        {/* Soft gradient overlay (static) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 via-cyan-700/20 to-black opacity-60" />

        {/* Lightweight particles (reduced count) */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/20 rounded-full blur-2xl animate-pulse"
            style={{
              width: `${12 + (i % 3) * 10}px`,
              height: `${12 + (i % 3) * 10}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 18}%`,
            }}
            aria-hidden
          />
        ))}

        {/* Soft decorative icons (NO continuous JS animation) */}
        <div className="absolute top-6 left-6 text-cyan-400/20 text-6xl pointer-events-none">
          <FaReact />
        </div>
        <div className="absolute bottom-10 right-8 text-blue-400/20 text-5xl pointer-events-none">
          <FaRocket />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center  ">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text ">
           Scalable Web, Cloud & Digital Solutions That Help Businesses Grow Faster 
          </h1>

          <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 text-gray-300">
            We help startups, SMEs, and enterprises build high-performance websites, 
 
            <br />
            cloud systems, and digital platforms that deliver real business results. 

          </p>

          <div className="mb-5">
            <PremiumSlideTabs />
          </div>

          <button
            onClick={() => navigate("/services")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full text-white font-semibold shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
          >
            Explore Our Services 🚀
          </button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-24 bg-gray-950 text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
          <div className="space-y-7">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-[1.3] pb-1">
              Why Choose Blanket Technologies?
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              At Blanket Technologies, we understand that each business has
              unique challenges and opportunities. That’s why we tailor our
              services to your specific needs — combining expertise, innovation,
              and commitment that sets us apart.
              <br />
              <br />
              Being based in Noida, we understand local market trends and
              consumer behavior, giving your brand a competitive edge in the NCR
              region.
            </p>

            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <FaCogs />,
                title: "Innovative Solutions",
                desc: "Modern, scalable, customized solutions.",
              },
              {
                icon: <FaUsers />,
                title: "Expert Team",
                desc: "Skilled professionals across technologies.",
              },
              {
                icon: <FaRocket />,
                title: "Growth Focused",
                desc: "Result-driven strategies for faster growth.",
              },
              {
                icon: <FaShieldAlt />,
                title: "Trusted Partner",
                desc: "Transparency and quality you can rely on.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/70 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 text-center transition transform hover:-translate-y-1"
              >
                <div className="text-5xl text-cyan-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-200">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div> 
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT SERVICES */}
      <section className="py-15 bg-linear-to-r-b from-gray-50 to-white overflow-hidden -mb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
              Our <span className="text-blue-600">Expert IT Services</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Delivering high-impact IT solutions that elevate your business to
              the next level.
            </p>
          </div>

          {services.map((service, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-12 mb-20 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:opacity-90 transition">
                  {/* <span className="font-semibold">What We Offer:</span>{" "} */}
                  {service.offer}
                </button>
                <p className="text-green-600 font-medium">
                  <span className="font-semibold">Benefits:</span>{" "}
                  {service.benefits}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {service.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={service.title}
                    className="rounded-2xl shadow-xl h-56 w-full object-cover transition-transform duration-300 hover:-translate-y-2"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE GRID */}
      {/* <section className="py-7 bg-gray-50 text-center">
        <div className="max-w-6xl mx-auto px-6 mb-0">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-blue-600">Expertise</span>, Your Success
          </h2>

          <p className="text-gray-500 mt-2 mb-10">
            From Dynamic Web Development to Robust Cybersecurity – We’ve Got You
            Covered!
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, i) => (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl border border-transparent hover:border-purple-400 transition-all duration-500 group"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center text-white px-4">
                  <p className="text-sm mb-3">{item.desc}</p>
                  <button
                    className="mt-2 bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 rounded-full text-sm font-semibold cursor-pointer"
                    onClick={() => handleLearnMore(item.links)}
                  >
                    Learn More
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-600">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <p className="italic text-gray-500">
              “Ready to Elevate Your Business with Advanced IT Solutions? Let’s
              Connect!”
            </p>
            <h3 className="text-xl font-semibold mt-3">Schedule a Visit</h3>
            <button
              onClick={() => navigate("/contact")}
              className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:opacity-90 transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section> */}

      {/* TRUST / STATS */}
      <section className="relative overflow-hidden py-10 bg-linear-to-br from-gray-50 via-white to-blue-50">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40 -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-14">
            Why Businesses Trust{" "}
            <span className="text-blue-600">Blanket Technologies</span>
          </h2>
          <StatsSection />
        </div>
      </section>

      <Carousel />
      <ConsultancySection />
      <Footer />
    </div>
    
  );
};

export default Home;
