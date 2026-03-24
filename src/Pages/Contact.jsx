import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Building2, Send } from "lucide-react";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";


const Contact = () => {
  return (
    <div>
    <section className="bg-gray-50 py-20 mt-[5rem] ">
      {/* Hero Section */}
      
      <motion.div
        // initial={{ opacity: 0, y: 40 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
        className="text-center px-6 -mt-40 h-[26rem] pt-30 bg-gradient-to-b from-black to-[#1B3C73]"
      >
        <h1 className="text-5xl font-bold text-white mb-6  ">
          Get in Touch with Blanket Technologies
        </h1>
        <p className="text-gray-200 max-w-3xl mx-auto text-lg leading-relaxed pb-10">
          Whether you’re looking for IT consulting, digital transformation, or web development solutions —  
          our expert team is ready to assist you. At <span className="font-semibold text-white">Blanket Technologies</span>,  
          we pride ourselves on delivering innovation and excellence, Pan India and beyond.
        </p>
      </motion.div>
   

      {/* Contact Info Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6 mb-20">
        {[
          {
            icon: <Phone className="text-blue-600" size={36} />,
            title: "Call Us",
            desc: "+91 9220973566",
            extra: "Mon - Fri, 9:30 AM - 6:30 PM",
          },
          {
            icon: <Mail className="text-blue-600" size={36} />,
            title: "Email Us",
            desc: "apply@blanket-technologies.com",
            extra: "For business or career enquiries",
          },
          {
            icon: <MapPin className="text-blue-600" size={36} />,
            title: "Our Office",
            desc: "Noida Sector 63, Uttar Pradesh, India",
            extra: "Serving clients across Pan India",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition text-center"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">{item.title}</h3>
            <p className="text-gray-700 font-medium mb-1">{item.desc}</p>
            <p className="text-gray-500 text-sm">{item.extra}</p>
          </motion.div>
        ))}
      </div>

      {/* About Contact Section */}
      <div className="max-w-6xl mx-auto mb-20 grid md:grid-cols-2 gap-12 px-6 items-center">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="/team1.jpg"
          alt="Customer Support Team"
          className="rounded-2xl shadow-lg w-full h-[380px] object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">
            We’re Here to Help You Grow
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our team of IT consultants, developers, and marketers works tirelessly to ensure  
            your business gets the technology advantage it deserves. From software development  
            to digital transformation and cloud deployment — we deliver tailored solutions  
            that align with your goals.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            With offices and operations across multiple Indian cities,  
            we’re always within your reach — providing reliable, quick, and transparent communication.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Let’s discuss how Blanket Technologies can take your business to the next level.
          </p>
        </motion.div>
      </div>

      {/* Contact Form */}
    <ContactForm />
      {/* Map / CTA Section */}
     
     
    </section>
     <Footer />
    </div>
  );
};

export default Contact;
