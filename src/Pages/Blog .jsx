import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, PenTool, BarChart3, Laptop, Megaphone } from "lucide-react";
import Footer from "../Components/Footer";
import { Link } from "react-router";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Digital Transformation: What 2025 Holds for IT Consulting",
      author: "Rohit Sharma",
      date: "October 21, 2025",
      category: "IT Strategy",
      icon: <BarChart3 className="text-blue-600" size={22} />,
      image: "/blog-.jpg",
      content:
        "As industries continue to evolve, the demand for IT-driven business transformation is skyrocketing. From automation and AI to advanced analytics, companies are rethinking their operations with a focus on digital acceleration. Blanket Technologies helps businesses reimagine processes, implement scalable systems, and leverage data to gain a competitive advantage across markets. Learn how the next wave of IT consultancy is shaping business growth globally.",
    },
    {
      id: 2,
      title: "Why UI/UX Design is the Core of Modern Brand Identity",
      author: "Priya Verma",
      date: "September 17, 2025",
      category: "Design Thinking",
      icon: <PenTool className="text-pink-600" size={22} />,
      image: "/blog_.jpg",
      content:
        "UI/UX design is no longer just about aesthetics—it’s the bridge between user expectations and business objectives. With 94% of users forming first impressions based on design, a great digital experience determines retention and trust. Blanket Technologies’ design team focuses on user psychology, micro-interactions, and accessibility to craft seamless, high-conversion experiences for enterprise and startup clients across India.",
    },
    {
      id: 3,
      title: "The Role of Artificial Intelligence in Web Development",
      author: "Aman Gupta",
      date: "August 5, 2025",
      category: "AI & Automation",
      icon: <Laptop className="text-green-600" size={22} />,
      image: "/blog--.jpg",
      content:
        "AI is redefining the future of web development. From predictive user interfaces to AI-based code assistance, automation is enabling faster delivery cycles, better personalization, and smarter analytics. Blanket Technologies integrates machine learning APIs into modern web solutions, helping businesses reduce costs, enhance engagement, and deploy intelligent websites that evolve with every user interaction.",
    },
    {
      id: 4,
      title: "How Digital Marketing Strategies Drive Brand Visibility in 2025",
      author: "Neha Singh",
      date: "July 11, 2025",
      category: "Digital Marketing",
      icon: <Megaphone className="text-orange-600" size={22} />,
      image: "/blog---.jpg",
      content:
        "The digital marketing landscape has shifted dramatically with the rise of voice search, influencer partnerships, and AI-driven campaign targeting. Blanket Technologies’ digital marketing experts blend SEO, PPC, and advanced analytics to create impactful strategies that deliver measurable ROI for clients. Learn how our team achieves 10x visibility growth through performance-focused marketing frameworks.",
    },
  ];

  return (
    <div className="mt-[5rem]">
    <section className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div className=" bg-gradient-to-r from-black to-[#1B3C73] -mt-20 text-white py-34 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold mb-4"
        >
          Insights & Industry Perspectives
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-lg text-gray-100 leading-relaxed"
        >
          Explore in-depth blogs, case insights, and technology trends that define the 
          digital ecosystem. At <span className="font-semibold">Blanket Technologies</span>, 
          we combine strategy, innovation, and execution to help enterprises grow smarter.
        </motion.p>
      </div>

      {/* Featured Blog */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
        >
          <img
            src="/main.jpg"
            alt="Featured Blog"
            className="w-full h-[24rem] object-cover"
          />
          <div className="p-10 text-left">
            <h2 className="text-3xl font-bold text-blue-700 mb-3">
              Building Scalable IT Ecosystems: The Blanket Approach
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Enterprise IT systems demand scalability, security, and sustainability. 
              Our latest case analysis reveals how Blanket Technologies enables 
              businesses across India to deploy next-gen infrastructures with cloud 
              integration, DevOps automation, and custom CRM solutions. The approach 
              blends agile development and AI-driven insights to ensure long-term stability.
            </p>
            <Link
              to="/blog/building-scalable-it-ecosystems"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:underline"
            >
              Read Full Article <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {blogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-gray-500 text-sm">
                  {post.icon}
                  <span>{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-700 mb-2">{post.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {post.content}
                </p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-blue-800 text-white py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
        <p className="max-w-2xl mx-auto text-gray-100 mb-6 leading-relaxed">
          Subscribe to our newsletter to receive insights, industry updates, and 
          success stories from the world of IT transformation and digital innovation.
        </p>
        <div className="flex justify-center gap-3 flex-wrap">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-4 py-3 rounded-full w-80 text-white-700 border"
          />
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full  hover:bg-gray-100 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Blog;
