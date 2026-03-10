import React from "react";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users, Award, Lightbulb } from "lucide-react";
import Footer from "../Components/Footer";
import ResumeUpload from "../Components/ResumeUpload";

const jobOpenings = [
  {
    title: "Frontend Developer (React.js)",
    location: "Noida, India",
    type: "Full-Time",
    description:
      "Collaborate with UI/UX designers and backend engineers to create dynamic, high-performance interfaces using React, Next.js, and Tailwind CSS.",
  },
  {
    title: "Digital Marketing Executive",
    location: "Remote / Pan India",
    type: "Full-Time",
    description:
      "Plan, execute, and analyze digital marketing campaigns across Google, Meta, and LinkedIn platforms to boost client visibility and engagement.",
  },
  {
    title: "UI/UX Designer",
    location: "Bengaluru, India",
    type: "Full-Time",
    description:
      "Work closely with development teams to translate ideas into visually stunning and highly functional user interfaces that improve brand impact.",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Gurugram, India",
    type: "Full-Time",
    description:
      "Develop secure, scalable APIs and handle data management for web and mobile applications using Node.js, Express, and MongoDB.",
  },
  {
    title: "Project Manager",
    location: "Mumbai, India",
    type: "Full-Time",
    description:
      "Oversee client projects, manage delivery timelines, and ensure cross-functional coordination across teams for successful project execution.",
  },
];

const Careers = () => {
  return (
    <section className="bg-gray-50 py-20 mt-[5rem] ">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 px-6 "
      >
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
         Your Next Big Career Move Starts Here
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="text-blue-600 font-semibold">Blanket Technologies</span>,  
          we’re redefining what it means to work in tech. We don’t just build products —  
          we create solutions that transform businesses and empower millions.  
          If you’re passionate about innovation, growth, and excellence — we’d love to have you on board.
        </p>
      </motion.div>

      {/* Mission & Values Section */}
      <div className="max-w-6xl mx-auto mb-20 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/career.jpg"
          alt="Our Culture"
          className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            Our Mission & Culture
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe technology is not just about code — it’s about people, creativity, and innovation.  
            At Blanket Technologies, our culture thrives on collaboration, learning, and continuous improvement.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our mission is to help businesses scale through technology-driven excellence while creating  
            an inclusive, flexible, and empowering workplace where everyone has a voice and a vision.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From flexible work schedules and skill development workshops to monthly innovation sprints,  
            we nurture a space where passion meets purpose.
          </p>
        </motion.div>
      </div>

      {/* Why Work With Us Section */}
      <div className="max-w-6xl mx-auto mb-20 px-6">
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-12">
          Why Work With Blanket Technologies?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <Lightbulb className="text-blue-600" size={36} />,
              title: "Innovative Projects",
              desc: "Get hands-on experience with global projects across industries — from fintech to e-commerce, powered by cutting-edge tech stacks.",
            },
            {
              icon: <Users className="text-blue-600" size={36} />,
              title: "Collaborative Culture",
              desc: "We value ideas from every team member. Work alongside creative designers, skilled developers, and marketing experts.",
            },
            {
              icon: <Award className="text-blue-600" size={36} />,
              title: "Career Growth & Mentorship",
              desc: "Learn from industry veterans, participate in internal training sessions, and climb the ladder of success with guidance.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Job Openings */}
      <div className="max-w-6xl mx-auto px-6 ">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-blue-700 mb-10 -ml-10"
        >
          Current Openings
          
        </motion.h2>
        <h1 className="text-center text-2xl text-red-500 font-extrabold">"Coming soon"</h1>
        {/* <div className="grid gap-8 md:grid-cols-2">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-2">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-4 text-gray-600 text-sm mb-3">
                <span className="flex items-center gap-1">
                  <MapPin size={16} /> {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {job.type}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all shadow-md">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div> */}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20 px-6"
      >
        <h3 className="text-5xl font-bold text-blue-700 mb-3">
          Didn’t Find Your Perfect Role?
        </h3>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6 leading-relaxed">
          We’re always open to fresh talent and unique perspectives.  
          If you’re passionate about technology, design, marketing, or innovation —  
          drop us your CV and we’ll reach out when there’s a fit.  
          <br />
          Send your resume and portfolio to{" "}
          <span className="text-blue-600 font-semibold">apply@blanket-technologies.in</span>
        </p>
       
        <ResumeUpload />
      </motion.div>
      <Footer />
    </section>
  );
};

export default Careers;
