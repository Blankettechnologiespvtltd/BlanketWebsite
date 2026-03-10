import { Briefcase, CheckCircle, Calculator, Clock } from "lucide-react";
import Footer from "../Components/Footer";

function PayrollPage() {
    const features = [
    {
      icon: <Calculator className="w-10 h-10 text-blue-600" />, 
      title: "Accurate Payroll Processing",
      desc: "Automated calculations ensuring error‑free salary processing every month.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-600" />, 
      title: "On‑Time Salary Distribution",
      desc: "Guaranteed timely payouts to keep your workforce motivated.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-blue-600" />, 
      title: "Compliance & Statutory Management",
      desc: "PF, ESI, TDS, and labour law compliance handled with complete accuracy.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />, 
      title: "100% Secure & Confidential",
      desc: "Industry‑grade security to protect payroll and employee financial data.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 text-gray-800 mt-22">
      {/* HERO SECTION */}
       <section className="w-full py-20 bg-gradient-to-r  from-pink-600 to-purple-600 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4"> Smart & Efficient Payroll Management</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90">
          Streamline your payroll operations with automation, compliance, and accuracy—
            giving you more time to focus on growing your business.
        </p>
      </section>
    

      {/* FEATURES SECTION (UPDATED WITH MORE CONTENT) */}
      <section className="py-20 pb-0 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Comprehensive Payroll Features
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-xl transition-all"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* ADVANTAGES SECTION */}
          <h3
            className="text-3xl font-bold text-center mb-8"
          >
            Why Choose Our Payroll Services?
          </h3>

          <div className="grid md:grid-cols-2 gap-10 mb-20">
            {[
              {
                title: "Manual Work Reduced by 80%",
                desc: "Automated workflows reduce repetitive HR tasks significantly.",
              },
              {
                title: "Perfect Accuracy Every Month",
                desc: "No more payroll errors. Accurate calculations every cycle.",
              },
              {
                title: "Full Statutory Compliance",
                desc: "Stay compliant with PF, ESI, PT, TDS, Bonus Act and more.",
              },
              {
                title: "Detailed Reporting Dashboard",
                desc: "Insights for payroll costs, deductions, attendance, and more.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md"
              >
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* WORKFLOW SECTION */}
          <h3
            className="text-3xl font-bold text-center mb-12"
          >
            Our Payroll Processing Workflow
          </h3>

          <div className="grid md:grid-cols-3 gap-10 mb-20">
            {[
              {
                step: "01",
                title: "Employee Data Collection",
                desc: "Attendance, leaves, reimbursements & shift data collected.",
              },
              {
                step: "02",
                title: "Salary Calculation",
                desc: "Automated gross salary, tax, deductions & net salary processing.",
              },
              {
                step: "03",
                title: "Payout & Reports",
                desc: "Salary transfer, payslip generation & compliance reporting.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-4">{item.step}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */} 
      {/* <section className="py-24 bg-blue-600 text-white text-center">
        <div
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Payroll?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Let our experts manage your payroll while you focus on scaling your business.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-all">
            Get Started
          </button>
        </div>
      </section> */}
      <Footer />
    </div>
  );
}

export default PayrollPage;
