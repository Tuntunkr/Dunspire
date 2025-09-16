import React from "react";
import { motion } from "framer-motion";
import { SEO } from "../../components/SEO";

const sections = [
  {
    title: "General Policy",
    content: (
      <p>
        dunspire is committed to providing high-quality digital services. If
        you are not satisfied with our services, we offer refunds and
        cancellations under specific conditions outlined below.
      </p>
    ),
  },
  {
    title: "Website Development Services",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Eligibility</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Request made within 7 days of project initiation</li>
          <li>No work has been delivered or started</li>
          <li>Major technical issues preventing project completion</li>
          <li>Failure to meet agreed specifications after reasonable attempts</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Non-Refundable</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Projects where work has been delivered and approved</li>
          <li>Change of mind after project approval</li>
          <li>Third-party service costs (hosting, domains, licenses)</li>
          <li>Custom development work beyond 50% completion</li>
        </ul>
      </>
    ),
  },
  {
    title: "App Development Services",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Refund Terms</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Full refund available within 14 days if no development work has started</li>
          <li>50% refund if project is cancelled before UI/UX approval</li>
          <li>25% refund if cancelled before development completion</li>
          <li>No refund after app delivery and testing phase</li>
        </ul>
      </>
    ),
  },
  {
    title: "SEO & Digital Marketing Services",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Monthly Services</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Cancellation allowed with 30 days notice</li>
          <li>No refund for partial months</li>
          <li>Setup fees are non-refundable</li>
          <li>Campaign costs already spent are non-refundable</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Guarantee</h3>
        <p>
          If you don't see measurable improvement in your SEO rankings or digital
          marketing metrics within 90 days, we'll provide an additional 30 days
          of service at no charge or offer a partial refund.
        </p>
      </>
    ),
  },
  {
    title: "UI/UX & Creative Design Services",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Full refund available if initial concepts don't meet requirements</li>
        <li>Must be requested within 14 days of initial delivery</li>
        <li>50% refund available before final design approval</li>
        <li>Final designs are non-refundable after client approval</li>
        <li>Revision requests beyond agreed scope incur additional charges</li>
      </ul>
    ),
  },
  {
    title: "AI & Automation Services",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Refunds considered if technical requirements cannot be met</li>
        <li>Custom development work is generally non-refundable after 25% completion</li>
        <li>Testing and consultation phases are non-refundable</li>
        <li>Third-party AI service costs are non-refundable</li>
        <li>Integration failures due to client system limitations are non-refundable</li>
      </ul>
    ),
  },
  {
    title: "Cloud & Tech Solutions",
    content: (
      <ul className="list-disc list-inside space-y-2">
        <li>Setup and migration services are non-refundable once completed</li>
        <li>Monthly cloud service fees are non-refundable</li>
        <li>Consultation and planning phases are non-refundable</li>
        <li>Third-party cloud provider costs are non-refundable</li>
      </ul>
    ),
  },
  {
    title: "Refund & Cancellation Process",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">How to Request</h3>
        <ol className="list-decimal list-inside space-y-2 mb-6">
          <li>Email us at <strong>dunbillbusiness@gmail.com</strong> with your request</li>
          <li>Include your project details and reason for refund/cancellation</li>
          <li>Provide any supporting documentation</li>
          <li>Allow 5-7 business days for review</li>
        </ol>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Processing Time</h3>
        <p>
          Approved refunds will be processed within 10-14 business days and credited to your original payment method. For UPI/bank transfers, refunds may take 3-5 business days.
        </p>
      </>
    ),
  },
  {
    title: "Cancellation Terms",
    content: (
      <>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Project Cancellation</h3>
        <ul className="list-disc list-inside space-y-2 mb-6">
          <li>Client may cancel projects with written notice</li>
          <li>Payment due for all completed work up to cancellation date</li>
          <li>All completed deliverables will be provided</li>
          <li>Cancellation fees may apply based on project stage</li>
        </ul>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Cancellation</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Monthly services require 30 days written notice</li>
          <li>Cancellation effective at end of current billing cycle</li>
          <li>No partial refunds for unused portions</li>
          <li>Access to services continues until end of paid period</li>
        </ul>
      </>
    ),
  },
  {
    title: "Exceptions",
    content: (
      <>
        <p className="mb-4">The following are not eligible for refunds:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Domain name registrations and renewals</li>
          <li>Third-party software licenses and subscriptions</li>
          <li>Hosting and server costs</li>
          <li>Marketing ad spend and campaign costs</li>
          <li>Services completed as per agreed specifications</li>
          <li>Changes in business requirements after project approval</li>
        </ul>
      </>
    ),
  },
  {
    title: "Force Majeure",
    content: (
      <p>
        dunspire shall not be liable for any delays or inability to perform
        due to circumstances beyond our reasonable control, including but not
        limited to natural disasters, government actions, or technical failures
        of third-party services.
      </p>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div className="bg-gray-50 p-6 rounded-lg">
        <p><strong>Email:</strong> dunbillbusiness@gmail.com</p>
        <p><strong>Phone:</strong> +91 99428 24657</p>
        <p><strong>Address:</strong> Rohua Appuch, Mushari Rohua, Mushari Farm, Muzaffarpur, Bihar, India - 842002</p>
        <p><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 7:00 PM IST</p>
        <p><strong>Response Time:</strong> Within 24-48 hours</p>
      </div>
    ),
  },
  {
    title: "Policy Updates",
    content: (
      <p>
        This policy may be updated from time to time. Clients will be notified of
        any significant changes via email. Continued use of our services after
        policy updates constitutes acceptance of the new terms.
      </p>
    ),
  },
];

export const RefundPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Refund & Cancellation Policy - dunspire"
        description="Learn about dunspire's refund and cancellation policy for web development, app development, SEO, digital marketing, and other professional services."
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund & Cancellation Policy</h1>
            <p className="text-lg text-gray-200">Last updated: January 1, 2025</p>
            <p className="text-lg text-gray-200 mt-6">
              Our refund and cancellation terms are designed to be transparent and
              fair, covering all services offered by dunspire.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
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
          </div>
        </section>
      </div>
    </>
  );
};

export default RefundPolicy;
