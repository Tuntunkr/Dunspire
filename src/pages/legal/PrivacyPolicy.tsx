import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";

const sections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p className="mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, company name, billing details.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, device
            information, browser type, operating system.
          </li>
          <li>
            <strong>Usage Data:</strong> How you interact with our websites,
            applications, and games.
          </li>
          <li>
            <strong>Project Data (B2B Clients):</strong> Source code,
            documentation, and related information provided for
            development/cybersecurity projects.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>To provide, operate, and improve our services.</li>
        <li>To process payments and send invoices.</li>
        <li>To enhance security and detect/prevent fraud.</li>
        <li>To communicate updates, offers, or important notices.</li>
        <li>To conduct analytics for performance and product improvement.</li>
      </ul>
    ),
  },
  {
    title: "3. Data Sharing & Disclosure",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Service Providers:</strong> Payment gateways, hosting
          providers, and analytics tools.
        </li>
        <li>
          <strong>Legal Authorities:</strong> When required by law or to protect
          our legal rights.
        </li>
        <li>
          <strong>Business Transfers:</strong> In case of mergers, acquisitions,
          or restructuring.
        </li>
      </ul>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <p>
        We implement industry-standard security practices including encryption,
        firewalls, and access control to protect data. However, no method of
        transmission over the Internet is 100% secure, and we cannot guarantee
        absolute security.
      </p>
    ),
  },
  {
    title: "5. Data Retention",
    content: (
      <p>
        We retain personal and project data only as long as necessary to fulfill
        contractual obligations, comply with legal requirements, resolve
        disputes, and enforce agreements.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    content: (
      <>
        <p className="mb-4">Depending on your location, you may have rights to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Access, correct, or delete your data.</li>
          <li>Withdraw consent for processing.</li>
          <li>Opt-out of marketing communications.</li>
          <li>Request a copy of your stored information.</li>
        </ul>
        <p className="mt-4">
          To exercise these rights, contact us at{" "}
          <span className="font-semibold">[Insert Official Email]</span>.
        </p>
      </>
    ),
  },
  {
    title: "7. Children’s Privacy",
    content: (
      <p>
        Our services, including game development, are not directed to children
        under 13. We do not knowingly collect personal data from children.
      </p>
    ),
  },
  {
    title: "8. Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy periodically. Any changes will be
        posted on this page with a revised <strong>Effective Date</strong>.
      </p>
    ),
  },
];

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - Dunbill Technologies Pvt. Ltd."
        description="Learn how Dunbill Technologies collects, uses, and protects your personal information across our software, cybersecurity, and game development services."
      />

      <div className="min-h-screen pt-16 bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white py-20">
          <div className="absolute inset-0 bg-black/40"></div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto px-4 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-200">
              At Dunbill Technologies Pvt. Ltd. (“Company,” “we,” “our,” or “us”),
              we respect your privacy and are committed to protecting the personal
              information you share with us.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-4 space-y-12">
            {sections.map((sec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md border"
              >
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {sec.title}
                </h2>
                <div className="text-gray-700 leading-relaxed">{sec.content}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
