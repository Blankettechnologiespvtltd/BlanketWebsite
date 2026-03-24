import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Target,
  Globe,
  BarChart,
  Users,
  Search,
  TrendingUp,
  CheckCircle,
  Rocket,
  ThumbsUp,
  Share2,
  Lightbulb,
  Globe2,
} from "lucide-react";
import Footer from "../Components/Footer";  

const DigitalMarketing = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-[6rem]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-black to-[#2654a5] -mt-24 text-white py-30 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Digital Marketing Services
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto opacity-90">
          At Blanket Technologies, We help brands grow digitally through data-driven
          marketing strategies, creativity, and cutting-edge technologies. From
          startups to enterprises across <span className="font-semibold">Pan India</span>,
          we deliver measurable results that boost online visibility, engagement, and ROI.
        </p>
      </section>

      {/* Overview Section */}
      <section className="max-w-6xl mx-auto py-16  px-6 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=60"
            alt="Digital Marketing"
            className="  h-[16rem]  mt-20 rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Empowering Brands Through Digital Growth 
          </h2>
          <p className="text-gray-600 mb-6">
            Our digital marketing team specializes in building custom strategies
            that align with your goals — be it brand awareness, lead generation,
            or revenue growth. We combine SEO, paid campaigns, social media,
            and analytics to drive consistent results and ensure your business
            dominates in the digital landscape.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> SEO & SEM (Search Engine Optimization & Marketing)
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Social Media Management & Advertising
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Performance Marketing & Analytics
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Content Marketing & Branding
            </li>
            <li className="flex items-center">
              <CheckCircle className="text-blue-700 mr-2" /> Email, Influencer & Video Marketing
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Digital Marketing Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto text-center">
          {[
            {
              step: "01",
              title: "Research & Analysis",
              desc: "Understanding your target audience, competitors, and market trends to craft data-backed strategies.",
              icon: <Search className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "02",
              title: "Strategy Planning",
              desc: "We design a marketing roadmap with specific goals, KPIs, and budget optimization strategies.",
              icon: <Lightbulb className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "03",
              title: "Campaign Execution",
              desc: "Our team launches SEO, SEM, and social campaigns that maximize reach and conversions.",
              icon: <Megaphone className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "04",
              title: "Optimization & Testing",
              desc: "We analyze campaign data, A/B test creatives, and optimize for higher engagement and ROI.",
              icon: <TrendingUp className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
            {
              step: "05",
              title: "Reporting & Growth",
              desc: "Comprehensive reporting and insights help businesses scale performance and brand trust.",
              icon: <BarChart className="mx-auto text-blue-700 w-10 h-10 mb-3" />,
            },
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {phase.icon}
              <h3 className="text-2xl font-bold text-blue-700 mb-2">
                {phase.step}
              </h3>
              <h4 className="text-xl font-semibold mb-2">{phase.title}</h4>
              <p className="text-gray-600">{phase.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Core Marketing Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Globe2 className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Search Engine Optimization (SEO)",
              desc: "Boost your website’s visibility on Google with advanced keyword strategies, link building, and content optimization.",
            },
            {
              icon: <Share2 className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Social Media Marketing",
              desc: "Engage audiences across Instagram, Facebook, and LinkedIn through creative campaigns that build lasting brand loyalty.",
            },
            {
              icon: <Target className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Performance Marketing",
              desc: "Maximize ROI through data-driven ads, conversion tracking, and audience segmentation using Google Ads & Meta Suite.",
            },
            {
              icon: <Users className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Influencer Marketing",
              desc: "Leverage trusted voices to grow brand credibility and drive genuine engagement in your niche market.",
            },
            {
              icon: <ThumbsUp className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Content & Brand Strategy",
              desc: "Craft compelling stories and brand positioning that resonate with your audience and communicate your values.",
            },
            {
              icon: <Rocket className="w-10 h-10 text-blue-700 mx-auto mb-3" />,
              title: "Paid Ads & Campaigns",
              desc: "Create high-performing ad campaigns that convert, track analytics, and generate measurable growth across platforms.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Blanket Technologies for Digital Marketing?
          </h2>
          <p className="text-gray-600 mb-6">
            We combine creativity, analytics, and strategy to deliver campaigns
            that speak directly to your audience. Our Pan-India operations ensure
            seamless collaboration with clients from all industries — driving
            real results, not just impressions.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <BarChart className="text-blue-700 mr-2" /> Data-Driven Marketing Approach
            </li>
            <li className="flex items-center">
              <Megaphone className="text-blue-700 mr-2" /> 360° Campaign Execution
            </li>
            <li className="flex items-center">
              <Users className="text-blue-700 mr-2" /> Dedicated Marketing Experts
            </li>
            <li className="flex items-center">
              <Globe className="text-blue-700 mr-2" /> Nationwide Service Coverage
            </li>
            <li className="flex items-center">
              <Target className="text-blue-700 mr-2" /> Focused on Conversions, Not Clicks
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=60"
            alt="Marketing Team"
            className="h-[18rem] rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 text-center px-6">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          Grow Your Brand with Blanket Technologies 
        </motion.h3>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Take your business to the next level with data-driven digital marketing
          campaigns designed to increase brand visibility, engagement, and sales.
          Partner with our expert team delivering measurable success stories
          across <span className="font-semibold">Pan India</span>.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition"
        >
          Get a Free Marketing Consultation
        </a>
      </section>
      <Footer/>
    </div>
  );
};

export default DigitalMarketing;
