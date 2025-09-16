import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";

const sections = [
  {
    title: "Acceptance of Terms",
    content: (
      <p>
        By accessing and using Professional Services Company's website and
        services, you accept and agree to be bound by the terms and provisions of
        this agreement.
      </p>
    ),
  },
  {
    title: "Services",
    content: (
      <>
        <p className="mb-4">
          Professional Services Company provides the following services:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Web Development and Design</li>
          <li>Search Engine Optimization (SEO)</li>
          <li>Digital Marketing Services</li>
          <li>UI/UX Design</li>
          <li>AI and Automation Solutions</li>
        </ul>
      </>
    ),
  },
  {
    title: "Payment Terms",
    content: (
      <>
        <p className="mb-4">Payment terms vary by service and package:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>One-time projects require 50% upfront payment</li>
          <li>Monthly services are billed in advance</li>
          <li>Payment is due within 30 days of invoice date</li>
          <li>Late payments may incur additional fees</li>
        </ul>
      </>
    ),
  },
  {
    title: "Intellectual Property",
    content: (
      <p>
        Upon full payment, you own the rights to the delivered work. However,
        we retain the right to showcase completed projects in our portfolio. We
        respect your confidentiality and will not share sensitive business
        information.
      </p>
    ),
  },
  {
    title: "Limitation of Liability",
    content: (
      <p>
        Professional Services Company shall not be liable for any indirect,
        incidental, special, consequential, or punitive damages resulting from
        the use of our services.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        Either party may terminate services with 30 days written notice. Upon
        termination, you will receive all completed work and pay for services
        rendered up to the termination date.
      </p>
    ),
  },
  {
    title: "Governing Law",
    content: (
      <p>
        These terms shall be governed by and construed in accordance with the
        laws of [Your State/Country], without regard to its conflict of law
        provisions.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div>
        <p className="mb-4">For questions about these Terms & Conditions, contact us at:</p>
        <div className="mt-4 text-gray-700">
          <p>Email: legal@proservices.com</p>
          <p>Phone: +1 (234) 567-8900</p>
          <p>Address: 123 Business Ave, City, ST 12345</p>
        </div>
      </div>
    ),
  },
];

export const TermsConditions: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions - Professional Service Company"
        description="Read our terms and conditions to understand the rules and regulations governing the use of our website and services."
      />

      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section - matched to privacy policy style */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-200">Last updated: January 1, 2025</p>
            <p className="text-lg text-gray-200 mt-6">
              Please read these terms carefully. They govern your access to and use
              of Professional Services Company's website and services.
            </p>
          </motion.div>
        </section>

        {/* Content Section - cards matching privacy policy look */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            {sections.map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{sec.title}</h2>
                <div className="text-gray-700 leading-relaxed">{sec.content}</div>
              </motion.div>
            ))}

            {/* Footer card for acceptance and additional legal note */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md border"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Additional Information</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision of these Terms is found to be unenforceable, the
                remaining provisions will remain in full force and effect. We may
                update these Terms from time to time — changes will be posted on
                this page with a revised effective date.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TermsConditions;
