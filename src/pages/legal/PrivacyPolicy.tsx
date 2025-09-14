import React from 'react';
import { SEO } from '../../components/SEO';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Professional Service Company"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information when you use our services."
      />
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-sm text-gray-600 mb-8">Last updated: January 1, 2025</p>

            <div className="prose prose-gray max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Professional Services Company ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  <li>Fill out contact forms or request quotes</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Create an account or make a purchase</li>
                  <li>Contact us via email, phone, or WhatsApp</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We may automatically collect certain information about your device and usage patterns, including IP address, browser type, operating system, and pages visited.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Providing and maintaining our services</li>
                  <li>Processing payments and transactions</li>
                  <li>Communicating with you about our services</li>
                  <li>Sending newsletters and marketing materials (with consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                  <li>With service providers who assist us in operating our business</li>
                  <li>When required by law or to protect our rights</li>
                  <li>In connection with a business transfer or merger</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to processing of your information</li>
                  <li>Unsubscribe from marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div className="mt-4 text-gray-700">
                  <p>Email: privacy@proservices.com</p>
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