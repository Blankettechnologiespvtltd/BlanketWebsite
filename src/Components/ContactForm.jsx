import React, { useRef, useState } from "react";
import { Send } from "lucide-react";

const ContactForm = () => {
  const formRef = useRef();

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    setError("");
    setSuccess("");

    const formData = new FormData(formRef.current);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      mobile: formData.get("mobile"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        "https://getconsultant-production-a613.up.railway.app/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const responseData = await res.json();

      if (!res.ok) {
        throw new Error(
          responseData.message ||
          responseData.error ||
          "Something went wrong"
        );
      }

      setSuccess("Form submitted successfully ✅");
      setStatus("✅ Message sent successfully!");
      formRef.current.reset();

    } catch (err) {
      console.error(err);

      const msg = err.message.toLowerCase();
      //  Duplicate handling
      if (msg.includes("email")) {
        setError("Email already exists");
      } else if (msg.includes("mobile") || msg.includes("phone")) {
        setError("Phone number already exists");
      } else {
        setError(err.message);
      }

      setStatus("❌ Failed to send message");
    }
  };

  return (
    <section className="bg-gray-50 py-12" id="contact">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Get in Touch
        </h2>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              name="mobile"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="9876543210"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry type"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2 font-medium">
              Message
            </label>
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

        {/* ✅ Error */}
        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">
            {error}
          </p>
        )}

        {/* ✅ Success */}
        {success && (
          <p className="text-green-500 text-center mt-4">
            {success}
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;