import React, { useRef, useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_pkyl782", 
        "template_hl39uws", 
        formRef.current,
        "-KJXPewNGinhd1PHn" 
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          setStatus("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("❌ Email send error:", error.text);
          setStatus("❌ Failed to send message. Try again!");
        }
      );
  };

  return (
    <section className="bg-gray-50 py-12" id="contact">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>

        {/* ✅ EmailJS Connected Form */}
        <form ref={formRef} onSubmit={sendEmail} className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
            <input
              type="email"
              name="user_email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
            <input
              type="text"
              name="user_phone"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry type"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-3 rounded-full hover:from-blue-800 hover:to-cyan-600 transition-all shadow-md flex items-center justify-center gap-2 mx-auto"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
        </form>

        {status && (
          <p
            className={`text-center mt-6 font-semibold ${
              status.startsWith("✅")
                ? "text-green-600"
                : status.startsWith("❌")
                ? "text-red-600"
                : "text-gray-500"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
