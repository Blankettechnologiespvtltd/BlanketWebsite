import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Database,
  Layers,
  Zap,
  ClipboardCheck,
  Globe,
  Settings,
  ShieldCheck,
  BarChart3,
  Clock,
  Link2,
  Phone,
  CheckCircle,
} from "lucide-react";
import Footer from "../Components/Footer";

const CRMSolutions = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 ">
      {/* HERO */}
      <section className="bg-gradient-to-b from-black to-[#1B3C73]   text-white py-14 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 mt-6"
        >
          CRM Systems & Customer Management Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg opacity-90"
        >
          Blanket Technologies delivers enterprise-grade CRM platforms designed
          to streamline sales, marketing, and customer support processes. Our
          CRM solutions focus on automation, insights, and real-time
          collaboration — enabling businesses across <strong>Pan India</strong>{" "}
          to build stronger customer relationships and measurable growth.
        </motion.p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
          >
            Request CRM Consultation
          </a>
          <a
            href="#features"
            className="inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1000&q=60"
            alt="crm overview"
            className=" h-[18rem] rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            A Unified Platform for Sales, Marketing & Support
          </h2>
          <p className="text-gray-600 mb-6">
            Our CRM platforms centralize customer data, automate workflows, and
            provide actionable analytics to increase conversion rates, reduce
            churn, and improve lifetime value. We customize CRM solutions for
            field sales, B2B sales cycles, retail chains, and service
            businesses.
          </p>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Users className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <b>360° Customer View</b> — consolidated profiles with purchase
                history, communication logs, and custom attributes.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Database className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <b>Centralized Data & Sync</b> — bi-directional integrations
                with ERP, POS, and marketing platforms for single source of
                truth.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-teal-600 mt-1" />
              <div>
                <b>Automation & Workflows</b> — lead assignment, scoring,
                nurturing campaigns, and SLA-driven ticket routing.
              </div>
            </li>
          </ul>
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Core CRM Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Built for enterprise workflows — customizable modules, role-based
            access and deep analytics for proactive decision-making.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <ClipboardCheck className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              ),
              title: "Lead & Opportunity Management",
              desc: "Capture leads from webforms, chat, marketplace and channels. Track opportunity stages and forecast revenue.",
            },
            {
              icon: (
                <BarChart3 className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              ),
              title: "Sales Analytics & Forecasting",
              desc: "Pipeline dashboards, conversion funnels, win-loss analytics, and revenue forecasting.",
            },
            {
              icon: <Layers className="w-10 h-10 text-teal-600 mx-auto mb-3" />,
              title: "Custom Workflows",
              desc: "Drag-and-drop workflow builder for approvals, escalations, and automated tasks.",
            },
            {
              icon: <Globe className="w-10 h-10 text-teal-600 mx-auto mb-3" />,
              title: "Omni-channel Engagement",
              desc: "Integrated email, SMS, WhatsApp, and social interactions with unified history.",
            },
            {
              icon: (
                <ShieldCheck className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              ),
              title: "Security & Compliance",
              desc: "Role-based access, audit logs, data encryption and GDPR/India Data Protection readiness.",
            },
            {
              icon: (
                <Settings className="w-10 h-10 text-teal-600 mx-auto mb-3" />
              ),
              title: "Integrations & API",
              desc: "Open APIs, webhooks, and connectors for ERP, payment gateways, marketing tools, and custom systems.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {f.icon}
              <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deep Dives */}
      <section className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Sales Acceleration & Automation
            </h3>
            <p className="text-gray-600 mb-4">
              Automate repetitive tasks, prioritize high-value leads and reduce
              sales cycle time with intelligent lead scoring and automated
              playbooks. Our CRM enables sales teams to spend more time selling
              and less time on admin.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Lead Scoring</b> using custom rules and behavior tracking.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Auto-assignment</b> by geography, product line or rep
                  capacity.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Sequence Automation</b> for follow-ups, calls and email
                  cadences.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/Crm1.jpg"
              alt="sales automation"
              className=" h-[23rem] rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/Crm2.jpg"
              alt="support"
              className="h-[23rem] rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Customer Support & Ticketing
            </h3>
            <p className="text-gray-600 mb-4">
              Streamline customer support with SLA-driven queues, intelligent
              routing, and unified inbox. Support teams can track issues from
              first contact to resolution while maintaining high customer
              satisfaction.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Unified Inbox</b> for email, chat, social and phone
                  interactions.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>SLA Alerts</b> and escalation policies to meet response
                  targets.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Knowledge Base</b> integration for faster resolutions.
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-3">
              Analytics, Reporting & Dashboards
            </h3>
            <p className="text-gray-600 mb-4">
              Built-in dashboards provide leaders with snapshots of sales
              performance, pipeline health, and team productivity. Exportable
              reports and BI connectors allow deep dives for finance and
              operations teams.
            </p>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Custom Dashboards</b> for roles: Sales, Marketing, Support
                  & Leadership.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Automated Reports</b> scheduled daily/weekly/monthly to
                  stakeholders.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-1" />
                <div>
                  <b>Data Export & BI</b> connectors for deeper analytics.
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/crm3.jpg"
              alt="analytics"
              className="h-[17rem] rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Integrations & Tech */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">
            Integrations & Technology Stack
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We connect CRM with your existing systems to ensure seamless data
            flow and operational efficiency.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Core Platform",
              items: [
                "Custom CRM (React/Node)",
                "Salesforce / Dynamics / HubSpot integrations",
              ],
            },
            {
              title: "Data & Sync",
              items: [
                "Postgres / MySQL",
                "Real-time sync via webhooks & message queues",
              ],
            },
            {
              title: "Communication",
              items: [
                "Twilio / Exotel",
                "WhatsApp Business API",
                "SMTP & Email providers",
              ],
            },
          ].map((col, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl shadow"
            >
              <h4 className="text-xl font-semibold mb-3">{col.title}</h4>
              <ul className="text-gray-700 space-y-2">
                {col.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-600 mt-1" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing & Models */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Pricing & Engagement Models
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Flexible engagement models to suit startups, growing businesses and
          enterprises.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: "Starter",
              title: "Quick Start",
              price: "Fixed / One-time",
              desc: "Core CRM setup, standard workflows, and training for small teams.",
            },
            {
              tag: "Growth",
              title: "Managed CRM",
              price: "Monthly",
              desc: "Customizations, integrations and ongoing support with SLA.",
            },
            {
              tag: "Enterprise",
              title: "Dedicated",
              price: "Retainer / T&M",
              desc: "Dedicated team, integration with ERP, complex workflows and premium SLA.",
            },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-semibold text-teal-600">
                  {p.tag}
                </div>
                <div className="text-lg font-bold">{p.price}</div>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{p.title}</h4>
              <p className="text-gray-600 mb-4">{p.desc}</p>
              <a
                href="/contact"
                className="inline-block bg-teal-600 text-white px-4 py-2 rounded-full font-medium"
              >
                Talk to Sales
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies & Metrics */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Case Studies & Results</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Proven results across industries: faster lead conversion, increased
            retention, and shorter sales cycles.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "B2B SaaS",
              metric: "x2 Pipeline Velocity",
              detail: "Workflow automation & lead scoring",
            },
            {
              title: "Retail Chain",
              metric: "-25% Churn",
              detail: "Loyalty programs & personalized outreach",
            },
            {
              title: "Services Firm",
              metric: "+40% Demo-to-Paid",
              detail: "Optimized lead handoff and nurturing",
            },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h4 className="text-xl font-semibold mb-2">{c.title}</h4>
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {c.metric}
              </div>
              <p className="text-gray-600">{c.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "How long to implement a CRM?",
              a: "Small to mid-size implementations typically take 6-10 weeks. Enterprise integrations vary between 3-6 months depending on complexity.",
            },
            {
              q: "Do you migrate data from existing systems?",
              a: "Yes — we handle data mapping, cleansing, and staged migrations with validation and rollback strategies.",
            },
            {
              q: "Can CRM integrate with our ERP and accounting systems?",
              a: "Absolutely. We build secure connectors and middleware to ensure reliable, auditable syncs between CRM and ERP.",
            },
            {
              q: "What support & training do you provide?",
              a: "We provide admin training, end-user onboarding, documentation, and optional managed services for continuous improvement.",
            },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h4 className="font-semibold mb-2">{faq.q}</h4>
              <p className="text-gray-600">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-emerald-700 to-teal-600 text-white py-16 px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold mb-4"
        >
          Transform Customer Relationships with a Modern CRM
        </motion.h3>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          Book a free discovery session with our CRM experts to map out your
          roadmap, integrations and ROI plan.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-teal-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Schedule a Free Discovery Call
        </a>
      </section>
      <Footer />
    </div>
  );
};

export default CRMSolutions;
