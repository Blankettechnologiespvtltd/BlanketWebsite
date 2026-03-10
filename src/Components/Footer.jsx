import React from "react";
import { motion } from "framer-motion";
import { FaSquareXTwitter } from "react-icons/fa6";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { X } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-br from-blue-50 via-white to-gray-50 text-gray-700 overflow-hidden">
      {/* Decorative Gradient Background */}
      <div className="absolute inset-0bg-linear-to-br from-blue-100/40 via-transparent to-sky-100/40 blur-3xl opacity-60 pointer-events-none"></div>

      {/* Main Footer Grid */}
      <div className="relative max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm z-10">
        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold  mb-5 border-l-4 border-blue-500 pl-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },

              { name: "Technologies", path: "/app-development" },
              { name: "Partner With Us", path: "/contact" },
             
              // { name: "Resources", path: "/case-studies" },
            ].map(({ name, path }, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={path}
                  className="text-gray-600 hover:text-blue-600 font-medium transition"
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xl font-semibold  mb-5 border-l-4 border-blue-500 pl-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Services
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Website Designing", path: "/web-designing" },
              { name: "CMS", path: "/crm" },
              { name: "Web Hosting", path: "/web-testing" },
              { name: "App Development", path: "/app-development" },
              { name: "Payment Gateway", path: "/payment-gateway" },
              // { name: "Download Brochure", path: "/downloads/brochure" },
            ].map(({ name, path }, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={path}
                  className="text-gray-600 hover:text-blue-600 font-medium transition"
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-xl font-semibold  mb-5 border-l-4 border-blue-500 pl-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Important Links
          </h4>
          <ul className="space-y-2">
            {[
              { name: "Privacy Policy", path: "/privacypolicy" },
              { name: "Terms & Conditions", path: "/TermsConditionsPage" },
              // { name: "Disclaimer", path: "/disclaimer" },
              { name: "Careers", path: "/careers" },
              { name: "Blog", path: "/blog" },
              { name: "Contact Us", path: "/contact" },
            ].map(({ name, path }, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={path}
                  className="text-gray-600 hover:text-blue-600 font-medium transition"
                >
                  {name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h4 className="text-xl font-semibold  mb-5 border-l-4 border-blue-500 pl-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Get in Touch
          </h4>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>G-172 Office No-05, Sector-63, Noida, UP, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a
                href="mailto:support@blanket-technologies.com"
                className="hover:text-blue-600 transition"
              >
                support@blanket-technologies.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a
                href="tel:+919220973566"
                className="hover:text-blue-600 transition"
              >
                +91 92209 73566
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 bg">
            {[
              {
                Icon: Facebook,
                link: "https://www.facebook.com/blankettechnologies",
              },
              { Icon: X, link: "https://x.com/BlanketKapil" },
              {
                Icon: Linkedin,
                link: "https://www.linkedin.com/company/blanket-technologies-pvt-ltd",
              },
              {
                Icon: Instagram,
                link: "https://www.instagram.com/blanket_technologies/",
              },
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="shadow-md border border-blue-100 p-3 rounded-full text-black-600 hover:bg-blue-600 hover:text-white transition-all bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600"
              >
                <Icon className="w-5 h-5 " />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="relative border-t border-gray-200 py-5 text-center text-sm text-gray-600 z-10">
        © {new Date().getFullYear()}{" "}
        <span className="text-blue-600 font-medium">Blanket Technologies</span>.
        All Rights Reserved.
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919220973566"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 hover:bg-green-600 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </footer>
  );
};

export default Footer;
