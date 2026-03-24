import React from "react";
import { motion } from "framer-motion";
import Footer from "../Components/Footer";
const PortfolioBuilder = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-[5rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#1B3C73] -mt-20 text-white py-30 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Portfolio Builder Solutions for Professionals & Businesses
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-3xl mx-auto"
        >
          Create, customize, and showcase your digital portfolio with
          Blanket Technologies’ advanced Portfolio Builder — designed for
          freelancers, agencies, and enterprises to highlight their expertise,
          achievements, and creative projects in style.
        </motion.p>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4 text-indigo-700"
        >
          Why Choose Our Portfolio Builder?
        </motion.h2>
        <p className="text-gray-600 max-w-4xl mx-auto">
          In today’s competitive world, your portfolio is your brand’s first
          impression. Our Portfolio Builder makes it effortless to craft a
          professional and visually appealing online presence — optimized for
          mobile, SEO, and user engagement. Whether you’re a designer, developer,
          photographer, marketing agency, or corporate professional, our tool
          gives you the flexibility to tell your story through dynamic layouts,
          case studies, testimonials, and media integration.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">
            Key Features of Our Portfolio Builder
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Dynamic Portfolio Templates",
                desc: "Choose from stunning, responsive templates tailored for tech, creative, and corporate portfolios.",
              },
              {
                title: "Drag & Drop Interface",
                desc: "Build your portfolio visually without coding — just drag, drop, and publish.",
              },
              {
                title: "Integrated Blog & Case Studies",
                desc: "Add project case studies and articles to showcase your expertise and build credibility.",
              },
              {
                title: "Client Testimonial System",
                desc: "Highlight feedback and ratings from clients to build trust and authority.",
              },
              {
                title: "Custom Domains & Hosting",
                desc: "Launch your portfolio under a custom domain with secure hosting and fast loading times.",
              },
              {
                title: "Analytics & Performance Tracking",
                desc: "Get insights into who views your portfolio, engagement rates, and visitor analytics.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-700 mb-8">
          Our Portfolio Builder Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            {
              step: "01",
              title: "Consultation",
              desc: "Understanding your goals, niche, and target audience to tailor the portfolio experience.",
            },
            {
              step: "02",
              title: "Design Customization",
              desc: "Crafting visually striking layouts aligned with your brand identity.",
            },
            {
              step: "03",
              title: "Development & Integration",
              desc: "Adding dynamic components, CMS integration, and advanced animations.",
            },
            {
              step: "04",
              title: "Content Upload & SEO Setup",
              desc: "We optimize your images, case studies, and metadata for top search performance.",
            },
            {
              step: "05",
              title: "Launch & Maintenance",
              desc: "Deployment, testing, and ongoing support to keep your portfolio performing smoothly.",
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md"
            >
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                {phase.step}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Build a Portfolio That Speaks for You
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          From freelancers to Fortune 500 professionals — our Portfolio Builder
          platform ensures your work gets the spotlight it deserves. Create your
          digital identity with Blanket Technologies and stand out globally.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Get a Demo
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default PortfolioBuilder;
