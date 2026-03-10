import React, { useEffect, useRef, useState } from "react";
import { Smile, LineChart, Target, Repeat } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  {
    icon: <Smile className="w-10 h-10 text-blue-600" />,
    title: "450",
    subtitle: "Happy Customers",
    desc: "Building Loyalty and Driving Business Success",
  },
  {
    icon: <LineChart className="w-10 h-10 text-blue-600" />,
    title: "21",
    subtitle: "Years of Industrie Experience",
    desc: "Trustworthy and Professional Services Guaranteed",
  },
  {
    icon: <Target className="w-10 h-10 text-blue-600" />,
    title: "95",
    subtitle: "Positive Reviews",
    desc: "Having Reviews and Testimonials for Our Services",
  },
  {
    icon: <Repeat className="w-10 h-10 text-blue-600" />,
    title: "90",
    subtitle: "Customer Retention",
    desc: "Building Long-Term Relationships and Trust",
  },
];

const StatsSection = () => {
  const ref = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartAnimation(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-r from-blue-50 to-white py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <AnimatedCounter
              target={item.title}
              startAnimation={startAnimation}
            />
            <h3 className="text-lg font-semibold mt-2 text-gray-800">
              {item.subtitle}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
