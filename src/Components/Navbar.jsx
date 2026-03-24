import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [nestedDropdown, setNestedDropdown] = useState(null);
 
  const Navigate = useNavigate()
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    region: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // validation logic
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.mobile.trim()) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^[6-9]\d{9}$/.test(form.mobile)) {
      newErrors.mobile = "Enter valid 10 digit number";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // ===== LOCAL STORAGE (same as before) =====
    const oldData = JSON.parse(localStorage.getItem("consultationData")) || [];
    const updatedData = [...oldData, form];
    localStorage.setItem("consultationData", JSON.stringify(updatedData));

    // ===== API CALL ADD KIYA =====
    try {
      const res = await fetch("https://shinekartshop.com/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          message: form.message,
          region: form.region,
        }),
      });

      const data = await res.json();
      console.log("API Response:", data);

      alert("Data saved successfully & sent to server ✅");
    } catch (error) {
      console.error("API Error:", error);
      alert("Saved locally but API failed ❌");
    }

    // reset
    setForm({
      name: "",
      email: "",
      mobile: "",
      region: "",
      message: "",
    });

    setOpen(false);
  };

  const navItems = [
    {
      title: " Our Services",
      submenu: [
               { name: "Staffing", link: "/staffing" },
        { name: "Web Designing", link: "/web-designing" },
        { name: "UI/UX Designing", link: "/ui-ux-designing" },
        { name: "App Development", link: "/app-development" },
        { name: "Digital Marketing", link: "/digital-marketing" },
        { name: "Web Testing", link: "/web-testing" },
        { name: "Payment Gateway", link: "/payment-gateway" },
        { name: "SAP", link: "/Sap" },
        // {
        //   title: "SAP",
        //   submenu: [
            // { name: "SAP S/4HANA Solutions", link: "/SapSolution" },
            // { name: "SAP Implementation ", link: "/SapImplementation" },
            // { name: "Analytics & Reporting (BI)", link: "/AnalyticsReporting" },
            // { name: "Migration & Integration", link: "/MigrationIntregration" },
            // { name: "SAP Support & Managed Services", link: "/SapSupport" },
        //   ],
        // },
      ],
    },
    {
      title: "  Products",
      submenu: [
        { name: "Ecommerce Solutions", link: "/ecommerce" },
        { name: "CRM Systems", link: "/crm" },
        { name: "ERP Software", link: "/erp" },
        { name: "Portfolio Builder", link: "/portfolio" },
      ],
    },
    // { title: "Case Studies", link: "/case-studies" },
    // { title: "About Us", link: "/about" },
    {
      title: "Company Profile",
      submenu: [
        { name: "About Us", link: "/about" },
        { name: "Careers", link: "/careers" },
        { name: "Contact Us", link: "/contact" },
      ],
    },
    // { title: "Blog", link: "/blog" },
    // {
    //   title: "Recruitment Services",
    //   submenu: [
    //     { name: "RPO", link: "/RPO" },
    //     { name: "Payroll", link: "/Payroll" },
    //     { name: "Global Search", link: "/GlobalSearch" },
    //     { name: "Executive Search", link: "/ExecutiveSearch" },
    //     { name: "Contract Staffing", link: "/ContractStaffing" },
    //     { name: "Permanent Hiring", link: "/PermanentHiring" },
    //     { name: "Project Based Hiring", link: "/ProjectBasedHiring" },
    //   ],
    // },
    // {
    //   title: "SAP",
    //   submenu: [
    //     { name: "SAP S/4HANA Solutions", link: "/SapSolution" },
    //     { name: "SAP Implementation ", link: "/SapImplementation" },
    //     { name: "Analytics & Reporting (BI)", link: "/AnalyticsReporting" },
    //     { name: "Migration & Integration", link: "/MigrationIntregration" },
    //     { name: "SAP Support & Managed Services", link: "/SapSupport" },
    //   ],
    // },
    // { title: "Case Studies", link: "/case-studies" },
    { title: "Blog", link: "/blog" },
  ];

  return (
    <nav className="absolute top-5 left-0 w-full  bg-transparent z-100 text-white    ">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 ">
        {/* Logo */}
        <Link to="/" className="font-bold text-blue-700">
          <img src="/fix1.png" className="h-[3rem] w-[16rem]" alt="logo" />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-8 items-center font-medium whitespace-nowrap text-white">
         {navItems.map((item, index) => (
  <li
    key={index}
    className="relative"
    onMouseEnter={() => setDesktopDropdown(index)}
    onMouseLeave={() => {
      setDesktopDropdown(null);
      setNestedDropdown(null);
    }}
  >
    <div className="flex items-center gap-1 cursor-pointer">
      {item.link ? (
        <Link to={item.link} className=" text-white hover:text-pink-600 bg-clip-text text-transparent">
          {item.title}
        </Link>
      ) : (
        <span className="hover:text-purple-600">{item.title}</span>
      )}

      {item.submenu && (
        <ChevronDown
          size={16}
          className={`transition-transform ${
            desktopDropdown === index ? "rotate-180" : ""
          }`}
        />
      )}
    </div>

    <AnimatePresence>
      {desktopDropdown === index && item.submenu && (
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="absolute top-8 left-0 bg-white shadow-lg rounded-xl w-70 p-3 border z-50"
        >
          {item.submenu.map((sub, i) => (
            <li
              key={i}
              className="relative"
              onMouseEnter={() => setNestedDropdown(i)}
              onMouseLeave={() => setNestedDropdown(null)}
            >
              {sub.link ? (
                <Link
                  to={sub.link}
                  onClick={() => setDesktopDropdown(null)}
                  className="block px-3 py-2 rounded-md hover:bg-blue-50 text-black hover:text-blue-600"
                >
                  {sub.name}
                </Link>
              ) : (
                <div className="flex justify-between items-center px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 cursor-pointer">
                  {sub.title}
                  {sub.submenu && <ChevronDown size={14} />}
                </div>
              )}

              {/* SECOND DROPDOWN */}
              {sub.submenu && nestedDropdown === i && (
                <ul className="absolute top-0 left-full bg-white shadow-lg rounded-xl w-70 p-3 border">
                  {sub.submenu.map((inner, j) => (
                    <li key={j}>
                      <Link
                        to={inner.link}
                        onClick={() => setDesktopDropdown(null)}
                        className="block px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600"
                      >
                        {inner.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
))}
          <button
            onClick={() => Navigate("/contact")}
            className="bg-blue-600 w-[7rem] p-4 text-white px-1  py-2 rounded-full"
          >
             Get a Quote
          </button>
        </ul>
        {/* MODAL */}
        {/* MODAL */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)} // OUTSIDE CLICK
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()} // INSIDE CLICK STOP
                className="bg-white w-full max-w-md p-6 rounded-2xl relative top-[22rem] shadow-2xl"
              >
                {/* Close Button */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
                >
                  ✕
                </button>

                <h2 className="text-2xl font-semibold mb-1 text-gray-800">
                  Free Consultation
                </h2>
                <p className="text-sm text-gray-500 mb-5">
                  Tell us about your requirement
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.mobile && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.mobile}
                      </p>
                    )}
                  </div>

                  {/* Dropdown */}
                  <div>
                    <input
                      name="region"
                      value={form.region}
                      onChange={handleChange}
                      placeholder="Region"
                      className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                    />
                    {errors.region && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.region}
                      </p>
                    )}
                    {/* <select
              name="service"
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2.5 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">Select Service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>App Development</option>
              <option>Digital Marketing</option>
              <option>Recruitment Services</option> */}
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows="4"
                      className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Submit Request
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setMobileDropdown(null);
          }}
          className="md:hidden"
        >
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-inner overflow-hidden"
          >
            <ul className="px-6 py-4 space-y-3 font-medium text-gray-700">
              {navItems.map((item, index) => (
                <div key={index}>
                  <div
                    className="flex justify-between items-center py-2 cursor-pointer"
                    onClick={() =>
                      item.submenu
                        ? setMobileDropdown(
                            mobileDropdown === index ? null : index,
                          )
                        : setMobileOpen(false)
                    }
                  >
                    {item.link ? (
                      <Link to={item.link}>{item.title}</Link>
                    ) : (
                      <span>{item.title}</span>
                    )}

                    {item.submenu && (
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          mobileDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  <AnimatePresence>
                    {mobileDropdown === index && item.submenu && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="pl-4 border-l border-blue-200 space-y-1 overflow-hidden"
                      >
                        {item.submenu.map((sub, i) => (
                          <li key={i}>
                            <Link
                              to={sub.link}
                              onClick={() => {
                                setMobileDropdown(null);
                                setMobileOpen(false);
                              }}
                              className="block py-1 text-gray-600 hover:text-blue-600"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <Link
                to="/contact"
                className="bg-blue-600 text-white text-center py-2 rounded-full shadow block hover:bg-blue-700"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
