import React from 'react';
import { SEO } from '../../components/SEO';

export const TermsConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions - Professional Service Company"
        description="Read our terms and conditions to understand the rules and regulations governing the use of our website and services."
      />
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
            <p className="text-sm text-gray-600 mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using Professional Services Company's website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Professional Services Company provides the following services:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Web Development and Design</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Digital Marketing Services</li>
                  <li>UI/UX Design</li>
                  <li>AI and Automation Solutions</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Payment terms vary by service and package:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>One-time projects require 50% upfront payment</li>
                  <li>Monthly services are billed in advance</li>
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>Late payments may incur additional fees</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  Upon full payment, you own the rights to the delivered work. However, we retain the right to showcase completed projects in our portfolio. We respect your confidentiality and will not share sensitive business information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  Professional Services Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from the use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate services with 30 days written notice. Upon termination, you will receive all completed work and pay for services rendered up to the termination date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  For questions about these Terms & Conditions, contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: legal@proservices.com</p>
                  <p>Phone: +1 (234) 567-8900</p>
                  <p>Address: 123 Business Ave, City, ST 12345</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};